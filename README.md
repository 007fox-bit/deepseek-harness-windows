# DeepSeek Harness 社区桌面构建

这是 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的非官方桌面安装包仓库，面向希望直接安装、无需配置 Node.js 或 pnpm 的用户。目前提供 Windows x64 历史预览版，并自动构建 Linux x64 AppImage 与 DEB。

> 本仓库不是 DeepSeek 官方发布渠道。Linux 包无代码签名、不接入官方自动更新，使用前请核对版本、来源提交与 SHA-256。

## 下载与安装

1. 打开本仓库的 [Releases](https://github.com/007fox-bit/deepseek-harness-windows/releases) 页面。
2. Windows 下载 `.exe`；Linux 下载 `.AppImage` 或 `.deb`。
3. 核对文件的 SHA-256 校验值。
4. 按对应平台的方法安装或运行。
5. 首次启动后，在模型设置中填写你自己的 API 配置。

Linux AppImage：`chmod +x DeepSeek-Harness-*-Linux-x86_64.AppImage` 后直接运行。Debian/Ubuntu：`sudo apt install ./DeepSeek-Harness-*-Linux-amd64.deb`。

Windows SmartScreen 可能显示“未知发布者”；Linux 包也没有发布签名。请先核对 Release 附带的校验文件，再决定是否运行。

## 构建说明

- 目标平台：Windows x64 与 Linux x64。
- 安装包已包含 Electron、Node.js 和 DeepSeek Harness 运行时。
- Linux 工作流默认基于官方 `dsh-v0.2.1-rc.3` 标签，可在手动运行时选择其他兼容标签。
- 此构建未启用自动更新。
- Linux 补丁位于 [`patches/linux-desktop-rc3.patch`](patches/linux-desktop-rc3.patch)，构建过程位于 [GitHub Actions](.github/workflows/linux-release.yml)。

## 许可证与归属

DeepSeek Harness 由 DeepSeek 发布，并采用 MIT License。本仓库保留上游许可证和归属信息；社区安装包按原样提供，不附带任何明示或暗示的担保。

上游项目与问题反馈请访问 [`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness)。与本社区安装包有关的问题可在本仓库提交 Issue。
