# NOTICE

本仓库基于开源项目 **dsh-pet** 衍生，并包含本仓库维护者新增的代码与素材。

## 上游项目（Upstream）

- 名称：dsh-pet
- 仓库：https://github.com/PC2005-cloud/dsh-pet
- 上游代码许可：MIT License（Copyright (c) 2026 PC2005-cloud）
- 上游对「素材（动画 / 提示词 / 源视频）」的额外约定：允许开源使用，**禁止商用**

本仓库保留上游版权与许可声明；对上游代码的修改与新增代码，同样以 MIT 许可发布（见 `LICENSE`）。

## 本仓库新增内容

主要包括但不限于：

1. **全局打字互动**：宿主 Win32 按键活动检测、`/dsh-pet-7340/typing`、客户端/桌面播放逻辑、`typingEnabled` 配置项等；
2. **岁纳京子（Kyoko）桌宠包**：`kyoko-pack/`、`prompts/kyoko/` 下的提示词、配置与透明动画素材；
3. 文档与开源声明（本文件、`DISCLAIMER.md` 等）。

新增代码默认适用 MIT；新增素材适用本仓库 `DISCLAIMER.md` 与上游一致的「禁止商用」约定。

## 第三方运行时依赖

运行本插件还需 DeepSeek Harness（DSH）等上游生态组件，其许可以各自仓库为准：

- https://github.com/deepseek-ai/deepseek-harness
