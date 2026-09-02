# NOTICE（归属与引用说明）

本仓库的**介绍重点是岁纳京子同人桌宠**；技术底座大量**引用**开源项目 dsh-pet，请勿将上游默认角色（蓝发鲸鱼女仆等）理解为本仓库的主角或原创形象。

## 上游项目（引用）

- 名称：dsh-pet  
- 仓库：https://github.com/PC2005-cloud/dsh-pet  
- 上游代码许可：MIT License（Copyright (c) 2026 PC2005-cloud）  
- 上游对「素材（动画 / 提示词 / 源视频）」的额外约定：允许开源使用，**禁止商用**

下列内容主要来自上游（本仓库保留其版权与许可声明，并在其上修改）：

- `dsh-pet/` 插件工程主体  
- `scripts/` 素材处理链  
- 上游附带的默认动画、预览 GIF、通用提示词等  

## 本仓库自行提供 / 重点维护的内容

1. **岁纳京子 pet pack**：`kyoko-pack/`、`prompts/kyoko/`（同人二次创作，禁止商用）  
2. **全局打字互动**：在上游插件上的功能补丁（`typingEnabled`、`/dsh-pet-7340/typing` 等）  
3. **面向京子项目的开源门面文档**：本文件、`DISCLAIMER.md`、`CHANGES.md`、重写后的 `README.md`  

对上游代码的修改与新增代码以 MIT 发布（见 `LICENSE`）；京子相关素材适用 `DISCLAIMER.md`。

## 运行时依赖

- DeepSeek Harness：https://github.com/deepseek-ai/deepseek-harness（许可以该仓库为准）
