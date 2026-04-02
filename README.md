# Benny's Blog

一个用 Astro 重建的双语个人博客，保留了旧站里的图片资产和整体气质，同时把内容结构、样式和本地开发流程都换成了更现代的方案。

站点线上地址是 [onriver.top](https://onriver.top)。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认会启动在 `http://localhost:4321/`。

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run check
```

## 目录结构

- `src/content/blog/zh-cn/`: 中文文章
- `src/content/blog/en/`: 英文文章
- `src/pages/`: 路由页面，中文为默认语言，英文位于 `/en/`
- `src/components/`、`src/layouts/`: 页面组件与布局
- `src/styles/`: 全站样式
- `public/img/`: 从旧站迁移过来的图片和静态资源

## 双语约定

- 中文首页是 `/`
- 英文首页是 `/en/`
- 中文文章路径是 `/posts/<slug>/`
- 英文文章路径是 `/en/posts/<slug>/`

中英文章通过同一个 `translationKey` 关联，方便在文章页互相切换。
