# NOTICE（归属、致谢与引用说明）

本仓库的**介绍重点是岁纳京子同人桌宠**。角色灵感来自原作；技术底座大量**引用**开源项目 dsh-pet。请勿将上游默认角色（蓝发鲸鱼女仆等）理解为本仓库的主角。

## 原作致谢

- 作品：《摇曳百合》（ゆるゆり / YuruYuri）  
- 角色：岁纳京子（歳納 京子 / Toshinou Kyōko）  
- 原作：**なもり（Namori）** 老师，以及漫画 / 动画制作、出版与相关权利方  

本仓库是粉丝向二次创作与技术演示，**与官方无隶属或授权关系**。角色版权归原权利方；我们对此深表感谢，并遵守禁止商用等约定（见 [DISCLAIMER.md](DISCLAIMER.md)）。

## 上游项目（引用 · 致谢）

- 名称：dsh-pet  
- 仓库：https://github.com/PC2005-cloud/dsh-pet  
- 上游代码许可：MIT License（Copyright (c) 2026 PC2005-cloud）  
- 上游对「素材（动画 / 提示词 / 源视频）」的额外约定：允许开源使用，**禁止商用**

感谢上游作者公开桌宠引擎与管线。下列内容主要来自上游（本仓库保留其版权与许可声明，并在其上修改）：

- `dsh-pet/` 插件工程主体  
- `scripts/` 素材处理链  
- 上游附带的默认动画、预览 GIF、通用提示词等  

上游默认角色是上游作者的创作，应予尊重；本仓库门面以京子为主，不替代上游作品介绍。

## 本仓库自行提供 / 重点维护的内容

1. **岁纳京子 pet pack**：`kyoko-pack/`、`prompts/kyoko/`、`assets/kyoko-preview/`（同人二次创作，禁止商用）  
2. **全局打字互动**：在上游插件上的功能补丁（`typingEnabled`、`/dsh-pet-7340/typing` 等）  
3. **面向京子项目的开源门面文档**：本文件、`DISCLAIMER.md`、`CHANGES.md`、`README.md`  

对上游代码的修改与新增代码以 MIT 发布（见 `LICENSE`）；京子相关素材适用 `DISCLAIMER.md`。

## 运行时依赖

- DeepSeek Harness：https://github.com/deepseek-ai/deepseek-harness（许可以该仓库为准）
