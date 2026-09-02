# 岁纳京子桌宠 · dsh-pet-kyoko

《摇曳百合》**岁纳京子**的非官方同人桌宠，跑在 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）上：待机、点击、拖拽、桌面透明小窗，以及可选的**全局打字互动**（类似直播伴侣）。

> **同人声明**：与原作官方无关；角色版权归原权利方。本仓库京子素材与衍生内容**禁止商用**。详见 [DISCLAIMER.md](DISCLAIMER.md)。

<p align="center">
  <img src="prompts/kyoko/ref-front.png" alt="岁纳京子定妆参考" width="280">
</p>

---

## 先分清：什么是「本仓库做的」，什么是「引用上游的」

本仓库**不是**从零发明整套桌宠引擎。主体工程来自上游开源项目，本仓库在其上做了**京子向同人包**和少量功能增强。

| 内容 | 归属 | 说明 |
|------|------|------|
| `dsh-pet/` 插件主体、素材管线 `scripts/`、上游默认动画 / 提示词 | **引用上游** [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) | 代码 MIT；上游素材约定**禁止商用** |
| 上游默认角色（蓝发鲸鱼女仆等） | **上游作品** | **不是**本仓库主角；安装后可不用 / 可关掉 |
| `kyoko-pack/`、`prompts/kyoko/` | **本仓库同人创作** | 岁纳京子提示词、配置与透明动画成品 |
| 全局打字互动（`typingEnabled` / `/typing`） | **本仓库改动** | 在上游插件上增加的按键触发能力 |
| 开源声明文档 | **本仓库编写** | [NOTICE](NOTICE.md) · [DISCLAIMER](DISCLAIMER.md) · [CHANGES](CHANGES.md) · [LICENSE](LICENSE) |

完整上游功能说明、默认女仆动画列表、原 DIY 管线细节，请直接阅读上游仓库，避免把上游角色介绍误当成京子项目简介：

→ https://github.com/PC2005-cloud/dsh-pet

本仓库相对上游「改了什么」→ [CHANGES.md](CHANGES.md)

---

## 快速开始（以京子为主角）

### 1. 安装 DSH 与插件（引擎来自上游生态）

```sh
node -v
npm install -g @deepseek-ai/dsh pnpm
```

从本仓库源码安装带打字改动的插件：

```sh
git clone https://github.com/yukikazesl/dsh-pet-kyoko.git
cd dsh-pet-kyoko/dsh-pet
npm install          # prepare 会构建 lib
dsh plugin --profile web add file:D:/path/to/dsh-pet-kyoko/dsh-pet
```

也可先装上游 npm 包再只用京子 pack（则**没有**本仓库的打字互动补丁）：

```sh
dsh plugin --profile web add dsh-pet
```

### 2. 启用岁纳京子 pack（重点）

把本仓库的包拷到 DSH 用户目录：

```text
%USERPROFILE%\.dsh\dsh-pet\pet\kyoko-config.json
%USERPROFILE%\.dsh\dsh-pet\pet\kyoko-animation\*.webm
```

对应源文件在仓库的 `kyoko-pack/`。

### 3. 启动

```sh
dsh web
```

设置里可把默认上游宠物的 `display` 设为 `none`，只留京子；京子配置里已默认 `typingEnabled: true`（全局按键时播打字相关动画）。

> 兼容性参考上游：在 dsh `0.1.1-rc.2` 下验证较多。

---

## 仓库里和京子相关的目录

```text
kyoko-pack/                 # 给 DSH 用的京子配置 + webm
prompts/kyoko/              # 定妆图、完整提示词（复制即可生成绿幕）
  ref-front.png
  完整提示词/01–16-*.txt
dsh-pet/                    # 上游插件 + 本仓库打字互动等改动（引用为主）
scripts/                    # 上游素材链（绿幕 mp4 → 透明 webm）
```

自制新动作：用 `prompts/kyoko/完整提示词/` → 绿幕 mp4 放 `video/`（默认不入库）→ 跑 `scripts/` → webm 放进 `kyoko-pack/kyoko-animation/` 并改配置。

---

## 许可（请勿混为一谈）

- **代码**（含本仓库对上游的修改）：MIT，见 [LICENSE](LICENSE)；上游版权仍属 PC2005-cloud 等权利人，见 [NOTICE.md](NOTICE.md)。
- **素材**（上游动画 / 京子同人动画 / 提示词 / 源视频）：可开源学习与个人非商用；**禁止商用**。
- **角色形象**：归《摇曳百合》原作权利方；本仓库不授予任何官方授权。

贡献前请读 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

## 致谢

- 引擎与桌宠框架：[PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet)
- 运行时：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
- 角色原作：《摇曳百合》相关权利方（本仓库仅为同人技术演示）
