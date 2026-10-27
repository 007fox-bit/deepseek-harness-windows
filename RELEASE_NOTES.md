# DeepSeek Harness 社区构建说明

## 0.2.1-rc.3 Linux x64

- 基于官方标签 `dsh-v0.2.1-rc.3`。
- 提供 AppImage 和 DEB 两种未签名社区包。
- 包含 Electron、Node.js、Python、pnpm 和 DeepSeek Harness 运行时。
- 构建过程中执行 Linux 目标单元测试、准备后 Runtime smoke、组装后应用 smoke，并再次解包验证 AppImage 与 DEB。
- 不接入官方自动更新与官方 Desktop 上传链路。

这是社区预览版。请在目标 Linux 发行版上验证桌面集成、终端、插件安装、沙箱和卸载升级行为。

## 0.1.6-alpha.1 Windows x64

这是基于 DeepSeek Harness `0.1.6-alpha.1` 的 Windows x64 社区构建，源代码对应上游提交 `0d1f50007f9bca3f52b06e1c3074fa14d5fb0720`。

## 安装包

- 文件：`DeepSeek-Harness-0.1.6-alpha.1-Windows-x64-Setup.exe`
- 大小：171,151,390 字节（约 163.22 MiB）
- SHA-256：`C9A64D678584C09ADB3E21B34FC7814A001039DE0C38FBE81A9CE38BB95B49B1`

## 使用说明

下载安装包后双击运行，并按安装向导完成安装。安装包已包含 Electron、Node.js 和 DeepSeek Harness 运行时，无需另行安装 Node.js 或 pnpm。

首次启动后，请在模型设置中填写你自己的 API 配置。

## 已知限制

- 这是 alpha 开发者预览版。
- 安装包尚未进行代码签名，Windows SmartScreen 可能显示“未知发布者”。
- 此构建未启用自动更新。

本仓库不是 DeepSeek 官方发布渠道。DeepSeek Harness 的版权和许可证归属以附带的 MIT License 为准。
