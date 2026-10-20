# 数学工作札记

一个面向高中数学教学与教研的个人网站最小版本。Astro 静态构建、本地 KaTeX 公式资源、原生浏览器交互，使用 GitHub Actions 发布到 GitHub Pages。

- 访问网站：https://cheng-bai.github.io/math-teaching-notes/
- 管理源码：https://github.com/cheng-bai/math-teaching-notes
- 查看发布：https://github.com/cheng-bai/math-teaching-notes/actions
- 新手操作：[网站使用说明.md](./网站使用说明.md)

## 本地开发

Node.js >= 22.22.0，npm >= 9.6.5。首次下载代码后安装依赖；已有依赖时不必重复安装。

```bash
npm ci
npm run dev
```

打开终端实际输出的网址。通常为 `http://localhost:4321/math-teaching-notes/`，端口被占用时会变化。

## 检查正式版本

```bash
npm test
npm run build
npm run preview
```

生成 `dist/`，正式预览通常为 `http://localhost:4321/math-teaching-notes/`。不应将 `dist/`、`node_modules/` 或本地验收记录提交 Git。

## 内容入口

- `src/data/site.ts`：站名、主标题、介绍、工作原则、工作方向、流程、校订日期。
- `src/pages/index.astro`：页面结构、自拟教学例题及解答、下载清单。
- `src/styles/global.css`：配色、字体、桌面与移动端布局。
- `src/lib/distance.mjs`：例题交互计算；对应 `tests/distance.test.mjs`。
- `astro.config.mjs`：部署域名和路径。
- `.github/workflows/deploy.yml`：测试、构建、发布流程。

## 发布与恢复

`main` 每次收到推送后自动运行测试、构建和发布，成功后网站更新。手动重发同一版本：GitHub Actions → Deploy website to GitHub Pages → Run workflow。

撤回一次内容更新，建议在本地对目标提交执行 `git revert <提交号>`，重新测试并推送。不要使用强推或 `git reset --hard`。具体步骤见使用说明。

## 公开内容边界

介绍是根据既往协作主题整理的初稿，不是经认证履历。真实姓名、任职、联系方式未确认，不以推测补充。工作方向不表示已有公开成果或可购买服务。

不上传原始记忆、学生材料、私聊、原始试卷、账户凭据或本机路径。教学示例为本站自拟；图上探索不能替代全域证明。几何封面仅为意象，不作为例题图使用。

初稿采用 `noindex, nofollow` 和 `robots.txt` 暂缓搜索收录。它们不是密码或隐私保护：网站和本仓库都可被公众访问。站点不含业务后端、表单、登录、追踪脚本，托管平台可能保留常规访问日志。

## 技术取舍

没有引入 React、Tailwind、Docker 或服务器管理面板：当前只有一个页面和少量交互，用 Astro 与原生 CSS/JavaScript 即可完成最小闭环。后续有实际需要再扩展。

本项目没有复制参考仓库的源码或设计资源；参考仓库用于了解静态站点的技术路径。
