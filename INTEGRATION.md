# Workbuddy / 平台对接指南

本项目是**纯静态产物**：`index.html`（页面）+ `data.js`（数据）+
`config.js`（对接配置），无框架、无构建、无服务端、不请求外网资源。
迁移 = 原样拷贝这三个文件。本文说明如何把它落到 Workbuddy（或任何平台）。

## 一、三种落地方式

| 方式 | 做法 | 评价 |
| --- | --- | --- |
| **A. 平台托管（推荐）** | 把三个文件原样放进 Workbuddy 的静态页面/应用载体中 | 保真、可维护；仓库仍是唯一源头，改动后覆盖文件即可 |
| **B. 外部托管 + 嵌入** | 文件放内网静态服务器，Workbuddy 里以 iframe/网页组件嵌入 URL | 同样保真；需要平台允许嵌入外部页面，问答接口需处理跨域（见下） |
| **C. 让 AI 重新生成** | 把截图/代码喂给 Workbuddy 让它"复制"一个 | **不推荐**：得到的是不可控的仿品，交互细节会丢，后续每次修改都要重新生成，无法沉淀 |

> 关于"开源"顾虑：把文件放进 Workbuddy 属于企业内部平台使用，**不构成开源
> 发布**；本项目代码零第三方依赖，不存在许可证传染问题。私有仓库继续作为
> 唯一源头维护即可。

## 二、问答助手对接（唯一需要开发的点）

页面右下角问答助手默认走 `data.js` 内置示例问答。让它真正回答问题只需
两步，**不需要改页面代码**：

1. 在 Workbuddy 侧包一个 HTTP 接口（智能体/知识库问答的网关均可）；
2. 把接口地址填进 `config.js`：

```js
window.DASHBOARD_CONFIG = {
  bot: {
    endpoint: "https://your-workbuddy-gateway/api/ask",  // 填上即自动启用
    method: "POST",
    headers: { "Content-Type": "application/json" },     // 需要鉴权就在这里加 token
    timeoutMs: 30000
  }
};
```

### 接口契约

**请求**（页面 → 服务）：

```
POST {endpoint}
Content-Type: application/json

{
  "question": "哪些项目有风险？",
  "history": [                       // 最近至多 10 条对话，供多轮上下文
    { "role": "bot",  "text": "你好，我可以基于看板数据回答…" },
    { "role": "user", "text": "云枢数据进展到哪了？" }
  ]
}
```

**响应**（服务 → 页面）：

```json
{ "answer": "当前「恒芯半导」健康度为黄灯：……" }
```

兼容性：也接受 `{ "text": … }`、`{ "reply": … }` 或纯文本响应体。
非 2xx 状态码、超时（默认 30s）会在对话框中显示明确的错误气泡，不会卡死。

### 跨域说明

- 方式 A（同域托管）无跨域问题。
- 方式 B（iframe 外部托管）下，问答接口需返回
  `Access-Control-Allow-Origin`（含页面所在域）；带自定义鉴权头时还需
  正确响应 OPTIONS 预检。

## 三、页面运行时 API（宿主可选用）

页面加载成功后暴露 `window.Dashboard`：

| 方法 | 说明 |
| --- | --- |
| `Dashboard.refresh(newData)` | 整体替换看板数据并原地重渲染（不刷新页面）。`newData` 结构与 `window.DASHBOARD_DATA` 完全一致，见 README.md。适合宿主实时推送数据 |
| `Dashboard.ask(question)` | 以编程方式向问答助手提问，等同用户在输入框发送 |

iframe 嵌入场景可由宿主经 `postMessage` 桥接后调用；同域内嵌场景直接调用即可。

## 四、数据更新链路

- 常规更新：按 README.md 的字段规范**重新生成 `data.js` 覆盖**，刷新页面生效
  （这是为"脚本自动生成数据"设计的主链路）。
- 实时更新：宿主拿到新数据对象后调用 `Dashboard.refresh(newData)`，免刷新。
- `config.js` 为手工维护文件，数据生成脚本不应触碰。

## 五、文件清单

| 文件 | 作用 | 谁维护 |
| --- | --- | --- |
| `index.html` | 页面本体（内联全部 CSS/JS） | 本仓库 |
| `data.js` | 全部展示数据（`window.DASHBOARD_DATA`） | 数据生成脚本 |
| `config.js` | 对接配置（`window.DASHBOARD_CONFIG`） | 部署时手工填写 |
| `README.md` | 数据结构字段规范 | 本仓库 |
| `INTEGRATION.md` | 本文 | 本仓库 |
