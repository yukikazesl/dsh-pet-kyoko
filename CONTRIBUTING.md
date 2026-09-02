# 贡献指南

感谢关注本仓库。

## 开发前

1. 阅读 [NOTICE.md](NOTICE.md)、[DISCLAIMER.md](DISCLAIMER.md) 与 [LICENSE](LICENSE)。
2. 角色向素材请保持**非商用**；不要提交明显侵权或来路不明的商业素材包。
3. 克隆后按上游说明安装依赖；插件目录：

```sh
cd dsh-pet
npm install          # 会执行 prepare 构建
```

## 建议工作流

- **代码/打字互动等功能**：改 `dsh-pet/src/`，跑 `npm run prepare`，用本地 `dsh plugin --profile web add file:...` 验证。
- **新动作素材**：在 `prompts/` 写提示词 → 绿幕 mp4 放 `video/`（mp4 默认不入库）→ `scripts/` 素材链 → 产物进 `kyoko-pack/` 或 `dsh-pet/assets/webm/`。
- **中间产物** `step01/`–`step04/`、`.tools/`、`node_modules/` 不要提交。

## Pull Request

- 说明改动目的与测试方式（浏览器 overlay / 桌面窗 / 打字触发等）。
- 若涉及新角色或新版权素材，请在 PR 中写明来源与非商用承诺。
- 不要提交密钥、`~/.dsh` 用户数据、API Key。

## 行为准则

请保持友善；拒绝骚扰与恶意内容。争议素材以 `DISCLAIMER.md` 为准优先下架。
