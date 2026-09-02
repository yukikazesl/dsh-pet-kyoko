// 全局打字活动：拉取 /dsh-pet-7340/typing → { ok, active, tick }。
// 不依赖 React/DOM；宿主 Win32 轮询写状态，浏览器/桌面同样轻量轮询。

export type TypingState = {
  ok: boolean;
  active: boolean;
  tick: number;
  platform?: string;
};

export async function fetchTypingState(baseUrl: string = '/dsh-pet-7340/typing'): Promise<TypingState> {
  try {
    const r = await fetch(baseUrl, { cache: 'no-store' });
    if (!r.ok) return { ok: false, active: false, tick: 0 };
    const j = (await r.json()) as Record<string, unknown>;
    return {
      ok: j.ok === true,
      active: j.active === true,
      tick: typeof j.tick === 'number' && Number.isFinite(j.tick) ? j.tick : 0,
      platform: typeof j.platform === 'string' ? j.platform : undefined,
    };
  } catch {
    return { ok: false, active: false, tick: 0 };
  }
}
