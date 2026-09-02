# 变更说明（CHANGES）

本文件记录本仓库相对上游 [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) 的差异。  
**本仓库对外介绍以岁纳京子同人桌宠为主**；上游默认「鲸鱼女仆」形象与动画仅为引擎引用，不是本仓库主角。

许可与免责见 [NOTICE.md](NOTICE.md)、[DISCLAIMER.md](DISCLAIMER.md)、[LICENSE](LICENSE)。

## 总览

| 类别 | 内容 |
|------|------|
| 项目门面 | 以**岁纳京子**为主角；上游女仆仅为引擎引用 |
| 功能 | 全局打字互动（直播伴侣式按键触发动画） |
| 素材 / 配置 | 岁纳京子 pet pack（`kyoko-pack/`）与 DIY 提示词（`prompts/kyoko/`） |
| 引用 | 插件引擎、素材链、上游默认动画等来自 dsh-pet（见 NOTICE） |
| 文档 / 合规 | 上游致谢、同人声明、禁止商用、贡献指南 |
| 依赖 | 宿主侧增加 `koffi`（Win32 `GetAsyncKeyState`） |

---

## 1. 全局打字互动

**目标**：在任意软件按键时，启用了 `typingEnabled` 的桌宠播放 `animations.events.typing` 中的动画；停键约 1.2s 后回到待机链。

### 宿主（`dsh-pet/src/host/`）

- 新增 `typing-activity.ts`：Windows 下用 `koffi` 调用 `user32.GetAsyncKeyState`，约 50ms 轮询；记录 `active` + 单调 `tick`（静默→活动时 +1）。
- `index.ts`：启动监控；新增路由 `GET /dsh-pet-7340/typing` → `{ ok, active, tick, platform }`（`Cache-Control: no-store`）。
- 非 Windows：端点可用，但恒为 `active: false`。

### 共享与客户端

- `src/shared/typing.ts`：`fetchTypingState()`。
- `src/shared/types.ts`：`Pet.typingEnabled`。
- `src/shared/menu.ts`：事件菜单标签「打字互动」。
- `src/client/pet.ts`：约 200ms 轮询；`tick` 变化时切入 typing 池；拖拽中不抢；播完仍 active 则续播。
- `runtime/electron-helper/renderer.js`：桌面端同语义。
- `src/client/settings.ts`：设置页「打字互动」开关。
- `src/host/config.ts`：合并 / 保存 `typingEnabled`。
- `assets/config.jsonc`：默认 `typingEnabled: false`；`events.typing` 暂用「写代码」；idle 池扩为多条。

### 依赖

- `package.json` 增加 `koffi`。

---

## 2. 岁纳京子 pet pack

路径：`kyoko-pack/`（可拷贝到 `%USERPROFILE%\.dsh\dsh-pet\pet\`）。

- `kyoko-config.json`：实例「岁纳京子」、多待机、点击/拖拽/日常分类、`typingEnabled: true` 等。
- `kyoko-animation/*.webm`：已跑通素材链的透明动画成品（起步套约 12 条）。
- `prompts/kyoko/`：
  - `ref-front.png` 定妆参考；
  - `完整提示词/01–16`：复制即用绿幕提示词（含打字、扩待机、来杯好茶摇一摇等）；
  - `提示词-起步套.md`、README 说明。

**角色说明**：非官方同人二次创作，禁止商用（见免责声明）。

**尚未入库的源视频**：`video/*.mp4` 默认 gitignore；新动作需自行生成后跑 `scripts/` 再同步 webm。

---

## 3. 文档与开源声明（本仓库新增/改写）

| 文件 | 作用 |
|------|------|
| `LICENSE` | MIT；注明上游版权 + 本仓库贡献者；文末素材禁止商用提示 |
| `NOTICE.md` | 上游归属、本仓库新增点、DSH 依赖 |
| `DISCLAIMER.md` | 同人声明、禁止商用、许可边界、无担保、下架说明 |
| `CONTRIBUTING.md` | 开发 / 素材 / PR 约定 |
| `SECURITY.md` | 安全反馈说明（若已存在则沿用并核对） |
| `README.md` 顶部 | 本仓库相对上游的差异摘要与京子启用方式 |
| `CHANGES.md` | 本文件 |

---

## 4. 工程与忽略规则

`.gitignore` 强调不入库：`step01–04/`、`video/*.mp4`、`.tools/`、`node_modules/`、`prompts/kyoko/preview/`、本地杂散文件等。

远程约定建议：

- `upstream` → https://github.com/PC2005-cloud/dsh-pet.git  
- `origin` → 本仓库 GitHub 地址（开源推送目标）

---

## 5. 已知限制 / 后续可做

- 打字检测目前以 **Windows** 为主；macOS / Linux 端点空闲。
- 京子「原地打字敲键盘」「待机眨眼发呆」「待机轻微晃腿」「来杯好茶摇一摇」等提示词已备，**对应 webm 需生成后接入**；当前 typing 可能暂用替代动画名。
- 主宠物默认关闭 `typingEnabled`，避免缺专用素材时误触发。

---

## 致谢

- 上游项目：[PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet)
- 运行时：[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- 《摇曳百合》原作权利方（角色形象版权归属原方；本仓库仅为同人技术演示）
