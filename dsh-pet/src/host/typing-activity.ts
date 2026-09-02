/**
 * 全局按键活动检测（Windows）：GetAsyncKeyState 轮询 → { active, tick }。
 * 非 Windows 恒返回 active=false（端点不崩）。
 *
 * tick：每次从静默 → 活动 +1；持续打字不递增（由客户端在播完后按 active 续播）。
 * 静默阈值：1200ms 无键 → active=false。
 */
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SILENCE_MS = 1200;
const POLL_MS = 50;

/** 虚拟键：字母数字、空格/回车/退格/Tab、常见标点与小键盘（不含纯修饰键 Ctrl/Alt/Shift/Win） */
const TRACKED_VKS: number[] = (() => {
  const keys: number[] = [];
  for (let vk = 0x30; vk <= 0x39; vk++) keys.push(vk); // 0-9
  for (let vk = 0x41; vk <= 0x5a; vk++) keys.push(vk); // A-Z
  keys.push(0x08, 0x09, 0x0d, 0x20); // Backspace Tab Enter Space
  // OEM 标点 ;=,-./`[\]'
  for (const vk of [0xba, 0xbb, 0xbc, 0xbd, 0xbe, 0xbf, 0xc0, 0xdb, 0xdc, 0xdd, 0xde]) keys.push(vk);
  for (let vk = 0x60; vk <= 0x6f; vk++) keys.push(vk); // numpad
  return keys;
})();

export type TypingActivityState = {
  ok: true;
  active: boolean;
  tick: number;
  platform: string;
};

let active = false;
let tick = 0;
let lastActivityAt = 0;
let timer: ReturnType<typeof setInterval> | null = null;
let getAsyncKeyState: ((vk: number) => number) | null = null;
let started = false;

function tryBindWin32(): boolean {
  if (process.platform !== 'win32') return false;
  try {
    // 优先从插件包根解析（file: 安装时 hoisted 的 koffi 也能被向上找到）
    const require = createRequire(join(fileURLToPath(import.meta.url), '..', '..', 'package.json'));
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const koffi = require('koffi') as {
      load: (name: string) => { func: (name: string, ret: string, args: string[]) => (vk: number) => number };
    };
    const user32 = koffi.load('user32.dll');
    getAsyncKeyState = user32.func('GetAsyncKeyState', 'short', ['int']);
    return typeof getAsyncKeyState === 'function';
  } catch (e) {
    console.warn(
      '[dsh-pet] typing-activity: 无法加载 koffi/user32，打字检测已禁用：',
      e instanceof Error ? e.message : e,
    );
    getAsyncKeyState = null;
    return false;
  }
}

function anyTrackedKeyDown(): boolean {
  if (!getAsyncKeyState) return false;
  for (const vk of TRACKED_VKS) {
    // 高位表示当前按下
    if ((getAsyncKeyState(vk) & 0x8000) !== 0) return true;
  }
  return false;
}

function pollOnce(): void {
  const now = Date.now();
  if (anyTrackedKeyDown()) {
    lastActivityAt = now;
    if (!active) {
      active = true;
      tick += 1;
    }
    return;
  }
  if (active && now - lastActivityAt >= SILENCE_MS) {
    active = false;
  }
}

/** 启动轮询（幂等）。非 Windows 或绑定失败时空转，状态恒 inactive。 */
export function startTypingActivityMonitor(): void {
  if (started) return;
  started = true;
  if (!tryBindWin32()) return;
  timer = setInterval(pollOnce, POLL_MS);
  // 不阻止进程退出
  if (typeof timer === 'object' && timer && 'unref' in timer) {
    (timer as NodeJS.Timeout).unref?.();
  }
}

export function stopTypingActivityMonitor(): void {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  started = false;
  active = false;
}

export function getTypingActivityState(): TypingActivityState {
  return {
    ok: true,
    active,
    tick,
    platform: process.platform,
  };
}
