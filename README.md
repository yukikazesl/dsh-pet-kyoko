# 岁纳京子桌宠 · dsh-pet-kyoko

《摇曳百合》里的**岁纳京子**同人桌宠：挂在 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 上，可以待机、点击、拖拽。

<p align="center">
  <img src="assets/kyoko-preview/ref-front.png" width="220" alt="岁纳京子">
</p>

感谢 **なもり** 老师和《摇曳百合》相关权利方——没有原作就没有这只京子。  
引擎与管线引用自 [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet)，同样致谢。本仓库是粉丝向、非官方、**禁止商用**的同人演示（[DISCLAIMER.md](DISCLAIMER.md)）。

---

## 预览

<p align="center">
  <img src="assets/kyoko-preview/idle.gif" width="180" alt="待机">
  <img src="assets/kyoko-preview/click.gif" width="180" alt="点击">
  <img src="assets/kyoko-preview/snack.gif" width="180" alt="吃零食">
</p>

成品在 `kyoko-pack/`，提示词在 `prompts/kyoko/`。

---

## 快速开始

```sh
node -v
npm install -g @deepseek-ai/dsh pnpm
git clone https://github.com/yukikazesl/dsh-pet-kyoko.git
cd dsh-pet-kyoko/dsh-pet
npm install
dsh plugin --profile web add file:D:/path/to/dsh-pet-kyoko/dsh-pet
```

拷贝京子 pack 后启动：

```text
%USERPROFILE%\.dsh\dsh-pet\pet\kyoko-config.json
%USERPROFILE%\.dsh\dsh-pet\pet\kyoko-animation\*.webm
```

```sh
dsh web
```

设置里可关掉上游默认宠物，只留京子。上游说明见原仓库；相对改动见 [CHANGES.md](CHANGES.md)。

---

## 目录

```text
assets/kyoko-preview/   # README 预览
kyoko-pack/             # 京子配置 + webm
prompts/kyoko/          # 定妆与提示词
dsh-pet/                # 上游插件（引用为主）
scripts/                # 上游素材处理链
```

---

## 归属与许可

| | |
|--|--|
| 角色 | 《摇曳百合》原作权利方 |
| 引擎 / 管线 | 引用 [dsh-pet](https://github.com/PC2005-cloud/dsh-pet)（MIT + 其素材约定） |
| 京子 pack / 提示词 | 本仓库同人素材，禁止商用 |
| 代码 | MIT，见 [LICENSE](LICENSE) · [NOTICE.md](NOTICE.md) |
