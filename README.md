# _Teeth

一个基于微信小程序（WeChat Mini Program）的移动端应用示例，包含前端页面、组件以及少量云函数（位于 `cloudfunctions/`）。本仓库展示了通用的小程序项目结构、页面组织与常见功能实现示例。

**状态**: 开发中

## 目录

- `app.js`, `app.json`, `app.wxss` - 小程序全局入口与样式
- `project.config.json` - 微信开发者工具项目配置（含 AppID）
- `cloudfunctions/` - 云函数目录（例如 `getOpenid`）
- `pages/` - 小程序页面目录，如 `home/`, `index/`, `movie/` 等
- `Componet/` - 复用组件目录（注意拼写为 `Componet`）
- `utils/` - 通用工具函数
- `style/` - 全局或共享样式文件
- `images/`, `icon/` - 静态资源

（工作区内的完整目录结构请参考仓库根目录）

## 特性

- 多页面小程序结构（页面示例：`home`, `movie`, `publish`, `collect`）
- 复用组件示例（`Componet/select`）
- 云函数示例（`getOpenid`）用于获取用户 openid 或服务端逻辑

## 环境与前置要求

- 安装 微信开发者工具（WeChat DevTools）：用于打开、预览与上传小程序
- （可选）Node.js：如需本地安装或管理云函数依赖

建议平台：Windows / macOS，使用最新版本的微信开发者工具。

## 快速开始

1. 克隆仓库：

```powershell
git clone <仓库地址>
cd _Teeth
```

2. 打开项目

- 在 **微信开发者工具** 中选择 “导入项目”，将项目根目录指向本仓库目录。
- 确认 `project.config.json` 中的 `appid` 字段已设置为你的 AppID；如果是体验或调试，可使用测试 AppID（或留空并使用开发者工具的测试模式）。

3. 安装云函数依赖（如有）

如果你要编辑或部署 `cloudfunctions/` 下的云函数，进入对应目录并安装依赖：

```powershell
# 示例：安装 getOpenid 云函数依赖
cd cloudfunctions/getOpenid
npm install
```

4. 预览与调试

- 在微信开发者工具中点击 “编译” 进行实时预览。
- 使用模拟器或连接手机扫码预览调试。

## 云函数部署说明

- 推荐使用微信开发者工具的 “云开发” 或 “上传” 功能上传云函数；通常只需在开发者工具中选择云函数并点击上传。
- 如果使用其他云平台（例如腾讯云或 CloudBase），请参考对应平台文档进行打包与部署。

示例（使用开发者工具）：

1. 打开开发者工具，切换到云函数页面
2. 选择目标云函数目录（如 `cloudfunctions/getOpenid`）
3. 点击上传/部署

如果你想使用 CloudBase CLI（可选）：

```powershell
npm i -g @cloudbase/cli
cloudbase login
cloudbase functions:deploy --name getOpenid --path ./cloudfunctions/getOpenid
```

（注意：CloudBase CLI 用法与权限配置请参考 CloudBase 官方文档）

## 项目结构说明（核心文件）

- `app.js` - 小程序全局逻辑（初始化、生命周期）
- `app.json` - 全局配置（页面路由、窗口样式、tabBar）
- `app.wxss` - 全局样式
- `pages/*` - 各页面目录，包含 `.js`, `.wxml`, `.wxss`, `.json`
- `Componet/*` - 可复用组件（示例：`select` 组件）
- `utils/util.js` - 工具函数（辅助方法）

示例页面：

- `pages/home/` - 主页视图和业务逻辑
- `pages/publish/` - 发布内容页面
- `pages/collect/` - 收藏列表页面

## 代码约定与风格

- 使用 JavaScript（非 TypeScript）编写小程序逻辑
- 样式文件使用 `wxss`，模板使用 `wxml`
- 组件请放在 `Componet/` 目录下并在页面 `json` 中引入

## 常见问题（FAQ）

- 无法预览/编译错误：请检查 `project.config.json` 中 `appid` 是否正确，或在开发者工具里查看控制台错误信息。
- 云函数调用失败：检查云函数是否已部署，函数内 `package.json` 的依赖是否已安装并上传。

## 贡献指南

欢迎贡献！常见流程：

1. Fork 本仓库
2. 新建分支 `feature/xxx` 或 `fix/xxx`
3. 提交可读的 commit（英文或中文均可）
4. 提交 Pull Request，描述变更内容与测试步骤

请尽量保持代码风格一致，重要变更请在 PR 中说明兼容性或迁移说明。

## 版权与许可证

本仓库当前未指定许可证。建议根据需求选择合适的许可证（例如 `MIT`）。

---

如果你希望我为这个 README 加入示例截图、CI 配置、或为云函数提供更详细的部署脚本，我可以继续帮你补充。已将该 README 添加到仓库根目录：`README.md`。
