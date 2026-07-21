# 项目投研看板

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
| `subtitle` | string | 顶栏英文副标题（可选），如 `"Project Research & Portfolio Monitor"` |
| `updatedAt` | string | 数据最后生成/更新时间，格式 `YYYY-MM-DD HH:mm`，显示在顶栏 |

> 所有日期字段统一存完整格式（`YYYY-MM-DD`），页面展示时自动去掉年份、只显示 `MM-DD`。

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
| `name` | string | 文件名（含扩展名），如 `"云枢数据-立项书.pdf"` |
| `type` | string | 文件类型：`"pdf"` / `"xlsx"` / `"docx"` / `"pptx"`，决定类型徽标样式；其他值降级为灰色徽标 |
| `addedAt` | string | 入库日期，格式 `YYYY-MM-DD` |
| `url` | string | 打开链接（可选）。本地文件填相对路径 `"projects/<项目名>/<文件名>"`，在线文档填完整 `https://` 链接；留空则条目不可点击。文件夹约定见 `projects/README.md` |

#### `interviewNotes[]` — 访谈纪要

汇总渲染在「项目日志 · 访谈纪要」时间线（按 `date` 倒序）。

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | string | 纪要标题，如 `"创始人一访：技术路线"` |
| `type` | string | `"internal"`（内部）或 `"external"`（外部），决定条目标签与节点颜色 |
| `date` | string | 访谈日期，格式 `YYYY-MM-DD` |
| `who` | string | 访谈对象/参与方（可选），如 `"CEO 张某"`、`"投研组"` |
| `url` | string | 纪要文档链接（可选），规则同 `files[].url`：本地相对路径或在线文档 `https://` 链接 |

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
| `greeting` | string | 打开对话框时机器人的开场白（可选） |
| `fallback` | string | 输入的问题无内置答案时的兜底回复（可选，缺省有默认文案） |
| `examples` | array | 内置示例问答，建议 2–3 条；问题渲染为输入框上方的建议 chips |
| `examples[].q` | string | 示例问题（点击 chip 或原样输入时触发） |
| `examples[].a` | string | 对应的内置回答 |

> 接入真实知识库问答：在 `config.js` 的 `bot.endpoint` 填入接口地址即自动
> 切换为真实调用（内置示例问答仅在未配置时生效），接口契约与跨域说明见
> INTEGRATION.md。

## 开发说明

- 视觉：对齐 Claude Design 设计稿；浅色底，灰阶 + 品牌蓝（`#0052D9`）+
  红黄绿状态色；正文 13px，system-ui 中文字体栈；无框架、无 CDN、无外部字体，
  完全离线可用。
- 布局：桌面端 1280–1440px 最佳，`≤1024px` 降级为单列。
- 已实现交互：状态筛选与搜索（前端过滤）、点击卡片右滑详情抽屉
  （概览/里程碑/文件/访谈/待办 5 个 Tab，Esc 或点遮罩关闭）、待办复选框
  勾选（状态存内存，卡片与进度区计数联动）、分组空状态占位、问答助手
  （建议 chips + 内置示例问答）。
- 部署：纯静态产物（`index.html` + `data.js` + `config.js`），双击本地打开、
  放任意静态托管或嵌入其他平台均可；更新数据只需重新生成 `data.js`。
- 平台对接（Workbuddy 等）：问答接口配置、`window.Dashboard` 运行时 API、
  迁移方式对比见 INTEGRATION.md。
