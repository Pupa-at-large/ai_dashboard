# 项目 AI 看板

纯前端的项目跟踪看板：`index.html` 单页面（内联 CSS/JS，无框架、无 CDN 依赖），
全部展示数据来自 `data.js`。双击 `index.html` 即可在浏览器中直接打开使用。

- **为什么是 `data.js` 而不是 `data.json`**：以 `file://` 双击打开时，`fetch` JSON
  会被浏览器跨域策略拦截；`data.js` 通过 `<script>` 标签注入
  `window.DASHBOARD_DATA`，本地打开不受限制。
- 后续会有脚本按下述结构自动生成 `data.js`，页面渲染逻辑完全从
  `window.DASHBOARD_DATA` 读取，HTML 中不写死任何项目数据。
- 若 `data.js` 缺失或格式错误，页面会显示明确的报错提示，不会白屏。

## 数据结构

`data.js` 的内容为一条赋值语句：

```js
window.DASHBOARD_DATA = {
  meta: { ... },
  projects: [ ... ],
  qa: { ... }
};
```

### `meta` — 看板元信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | string | 看板标题，显示在顶栏 |
| `updatedAt` | string | 数据最后生成/更新时间，格式 `YYYY-MM-DD HH:mm`，显示在顶栏 |

### `projects[]` — 项目列表

每个元素是一个项目对象。**通用字段**（所有项目必填）：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | string | 项目唯一标识（小写英文），用于 DOM 关联与后续交互 |
| `name` | string | 项目/公司名称 |
| `track` | string | 赛道标签，如 `"开发者工具 / AI Coding"` |
| `status` | string | 项目状态：`"research"`（调研中）或 `"established"`（已立项），决定渲染成哪种卡片 |
| `updatedAt` | string | 该项目信息最后更新日期，格式 `YYYY-MM-DD` |
| `files` | array | 项目文件列表，见下 |
| `interviewNotes` | array | 访谈纪要列表，见下 |
| `todos` | object | 双方待办，见下 |

#### `research` — 调研期字段（仅 `status: "research"` 时必填）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `stage` | string | 当前调研阶段：`"screening"`（初筛）/ `"interview"`（访谈）/ `"report"`（报告），进度条按此三段渲染并高亮当前阶段 |
| `interviews.internal` | number | 内部访谈/讨论次数 |
| `interviews.external` | number | 外部访谈次数 |
| `questions` | string[] | 核心待验证问题，建议 1–2 条 |
| `rating` | number | 初步星级评级，整数 1–5 |
| `nextAction` | string | 下一步动作描述 |

#### `execution` — 立项后字段（仅 `status: "established"` 时必填）

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `currentMilestone` | string | 当前所处里程碑名称 |
| `milestones` | array | 里程碑时间轴，按时间先后排列 |
| `milestones[].name` | string | 里程碑名称 |
| `milestones[].status` | string | `"done"`（完成）/ `"active"`（进行中）/ `"pending"`（未开始） |
| `milestones[].date` | string | 目标/完成日期，格式 `YYYY-MM-DD`（卡片上展示 `MM-DD`） |
| `health` | string | 健康度红绿灯：`"green"`（正常）/ `"yellow"`（关注）/ `"red"`（风险） |
| `risk` | string | 当前主要风险或阻塞，无则可填 `"暂无"` |
| `latestActivity.date` | string | 最近一条动态的日期，格式 `YYYY-MM-DD` |
| `latestActivity.text` | string | 最近一条动态的内容 |

> 卡片上的「双方待办数（我们 n / 项目方 m）」不是独立字段，由 `todos` 中
> `done: false` 的条目数自动计算。

#### `files[]` — 项目文件

汇总渲染在「项目日志 · 项目文件」列表（按 `addedAt` 倒序），
已立项卡片上的「关键文件」图标也来自这里。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `name` | string | 文件名（含扩展名），如 `"九章流形-立项书 v2.pdf"` |
| `type` | string | 文件类型：`"pdf"` / `"xlsx"` / `"docx"` / `"pptx"`，决定类型徽标样式；其他值降级为灰色徽标 |
| `addedAt` | string | 入库日期，格式 `YYYY-MM-DD` |

#### `interviewNotes[]` — 访谈纪要

汇总渲染在「项目日志 · 访谈纪要」时间线（按 `date` 倒序）。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | string | 纪要标题，建议格式 `"外部访谈｜对象：主题"` |
| `type` | string | `"internal"`（内部）或 `"external"`（外部），决定条目标签 |
| `date` | string | 访谈日期，格式 `YYYY-MM-DD` |

#### `todos` — 双方待办

`todos.us` 为「我们」侧待办数组，`todos.partner` 为「项目方」侧待办数组，
分别汇总渲染在「当前进度」左右两栏（按 `due` 升序）。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `task` | string | 事项描述 |
| `owner` | string | 负责人姓名（项目方建议带前缀，如 `"九章-何律"`） |
| `due` | string | 截止日期，格式 `YYYY-MM-DD` |
| `done` | boolean | 是否已完成，`true` 时勾选并划线展示 |

### `qa` — 问答对话框

右下角悬浮问答对话框的内置示例内容。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `examples` | array | 写死的示例问答，建议 2–3 条 |
| `examples[].q` | string | 示例问题（渲染为用户气泡） |
| `examples[].a` | string | 示例回答（渲染为机器人气泡） |

> `index.html` 中预留了空函数 `sendToBot(question)`，未来在此接入知识库问答
> 服务并将答案追加到对话流。

## 开发说明

- 视觉：浅色底，灰阶 + 品牌蓝（`#0052D9`）+ 红黄绿状态色；正文 13–14px，
  system-ui 中文字体栈；动效统一 200ms ease。
- 布局：桌面端 1280px 最佳，`≤960px` 降级为单列。
- 第一步已完成静态结构与数据渲染；筛选/搜索、卡片详情抽屉、待办勾选、
  空状态等交互属于第二步。
