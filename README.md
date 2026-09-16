# DeepSeek Harness Windows 社区构建

这是 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的 Windows x64 社区安装包，面向希望直接安装桌面版、无需配置 Node.js 或 pnpm 的用户。

> 本仓库不是 DeepSeek 官方发布渠道。安装包基于上游 `0.1.6-alpha.1` 和提交 [`0d1f50007f9bca3f52b06e1c3074fa14d5fb0720`](https://github.com/deepseek-ai/deepseek-harness/commit/0d1f50007f9bca3f52b06e1c3074fa14d5fb0720) 构建。

## 下载与安装

1. 打开本仓库的 [Releases](https://github.com/007fox-bit/deepseek-harness-windows/releases) 页面。
2. 下载 `DeepSeek-Harness-0.1.6-alpha.1-Windows-x64-Setup.exe`。
3. 核对文件的 SHA-256 校验值。
4. 双击安装包并按向导完成安装。
5. 首次启动后，在模型设置中填写你自己的 API 配置。

```text
C9A64D678584C09ADB3E21B34FC7814A001039DE0C38FBE81A9CE38BB95B49B1  DeepSeek-Harness-0.1.6-alpha.1-Windows-x64-Setup.exe
```

Windows SmartScreen 可能显示“未知发布者”，因为这个社区构建尚未进行代码签名。请先核对文件名和 SHA-256，再决定是否运行。

## 构建说明

- 目标平台：Windows x64。
- 安装包已包含 Electron、Node.js 和 DeepSeek Harness 运行时。
- 当前版本是 alpha 开发者预览版。
- 此构建未启用自动更新。
- 安装包大小约为 163.22 MiB。

## 许可证与归属

DeepSeek Harness 由 DeepSeek 发布，并采用 MIT License。本仓库保留上游许可证和归属信息；社区安装包按原样提供，不附带任何明示或暗示的担保。

上游项目与问题反馈请访问 [`deepseek-ai/deepseek-harness`](https://github.com/deepseek-ai/deepseek-harness)。与本社区安装包有关的问题可在本仓库提交 Issue。
