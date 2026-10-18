# laigen.me

个人站点源码。Astro 静态站，部署在 Cloudflare Workers。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 写一篇新文章

在 `src/pages/posts/` 下新建一个 `.md` 文件，文件名就是 URL：

```
src/pages/posts/ai-phone-review-v1.md   →  /posts/ai-phone-review-v1/
```

文件头必须有：

```yaml
---
layout: ../../layouts/Post.astro
title: "文章标题"
date: 2026-11-05
draft: true
description: "一句话摘要，会显示在文章列表和搜索结果里"
---
```

**`draft: true` 的文章不会出现在首页**，但仍可通过直链预览。
写完发布时，把这一行删掉。

## 目录结构

```
src/
├── layouts/
│   ├── Base.astro      全站骨架（页头、页脚、<head>）
│   └── Post.astro      文章页布局（标题 + 日期 + 正文）
├── pages/
│   ├── index.astro     首页（文章列表，自动读取 posts/）
│   ├── about.astro     关于页
│   └── posts/*.md      文章，一个文件一篇
└── styles/
    └── global.css      全站样式（含深色模式）
```

## 部署

Cloudflare 控制台连上本仓库后，推送到 `main` 会自动构建部署。

构建设置：

| 项 | 值 |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Deploy command | `npx wrangler deploy` |

## 待填

- [ ] 首页那句自我介绍（`src/pages/index.astro` 的 `.hero`）
- [ ] 关于页的联系方式（`src/pages/about.astro`）
- [ ] 文章里的署名
