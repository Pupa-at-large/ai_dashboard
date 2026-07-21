// =============================================================
// 智投 TID 专项看板 · 数据文件
// 本文件由脚本自动生成/更新（当前为根据 2026-07 上传资料手工整理）。
// 使用 .js 而非 .json：可直接以 file:// 双击打开 index.html。
// 字段含义详见 README.md。日期统一存 YYYY-MM-DD，页面展示 MM-DD。
// 文件/纪要的 url：本地文件填相对路径（projects/<项目名>/<文件名>），
// 在线文档填完整 https 链接；留空则条目不可点击。
//
// 【注意】各项目的 todos（待办）为从会议转写与文档中提炼的建议项，
// 负责人与截止日期需相关同学人工确认后修正。
// =============================================================
window.DASHBOARD_DATA = {
  meta: {
    title: "智投 TID 专项看板",
    subtitle: "TID Governance & Optimization Monitor",
    updatedAt: "2026-07-21 19:00",
    todoLabels: { us: "平台/架构侧", partner: "业务/投放侧" }
  },

  projects: [
    // ---------- 已立项（推进中） ----------
    {
      id: "tid-gov",
      name: "TID 激增治理",
      track: "系统容量 / 成本",
      status: "established",
      updatedAt: "2026-06-30",
      execution: {
        currentMilestone: "探索路放量观察",
        milestones: [
          { name: "问题定位", status: "done", date: "2026-04-13" },
          { name: "框架对齐", status: "done", date: "2026-04-24" },
          { name: "探索路上线", status: "done", date: "2026-04-28" },
          { name: "放量 1.2 亿", status: "active", date: "2026-06-30" },
          { name: "扩容 ROI 决策", status: "pending", date: "2026-08-31" }
        ],
        health: "yellow",
        risk: "日新建 TID 峰值达 1.15 亿（较去年双11再涨 50%），系统容量红线 8000 万；投放 DB 磁盘占用超 80%，硬件升无可升",
        latestActivity: { date: "2026-06-30", text: "探索路按计划放量至 1.2 亿 TID，实验消耗不显著、耗时基本一致，持续跟踪收益" }
      },
      files: [
        { name: "tid分月数量 0506.xlsx", type: "xlsx", addedAt: "2026-05-12", url: "projects/TID 激增治理/tid分月数量 0506.xlsx" },
        { name: "TiD升级.pdf（0429 组会同步）", type: "pdf", addedAt: "2026-04-28", url: "projects/TID 激增治理/TiD升级.pdf" },
        { name: "TID激增问题讨论框架 0422.pdf", type: "pdf", addedAt: "2026-04-24", url: "projects/TID 激增治理/TID激增问题讨论框架 0422.pdf" },
        { name: "TID当前存在问题讨论.pdf", type: "pdf", addedAt: "2026-04-22", url: "projects/TID 激增治理/TID当前存在问题讨论.pdf" }
      ],
      interviewNotes: [
        { title: "TiD 第二轮讨论（实时转写）", type: "internal", date: "2026-04-24", who: "何琪 / 佟建锋 / 谢年华 / 李锐 等", url: "projects/TID 激增治理/实时转写_TiD第二轮讨论_946214902_1777018945500.txt" },
        { title: "TID 激增系统压力研讨会（转写）", type: "internal", date: "2026-04-22", who: "投放 / 检索 / 机制各方", url: "projects/TID 激增治理/Tid激增系统压力研讨会_transcript.txt" }
      ],
      todos: {
        us: [
          { task: "输出探索路放量后的收益评估结论（消耗 / 耗时对比）", owner: "机制-谢年华", due: "2026-07-31", done: false },
          { task: "按成本系数口径（新建 0.014 元/条、在线 6.6 元/年）算清扩容 ROI", owner: "架构-佟建锋", due: "2026-08-15", done: false }
        ],
        partner: [
          { task: "各行业按消耗 KPI 折算增量索引诉求并确认口径", owner: "行业-何琪", due: "2026-07-25", done: false },
          { task: "确认降级索引比例与在线量折算方式（乘放量比例）", owner: "投放-杨秀金", due: "2026-04-24", done: true }
        ]
      }
    },
    {
      id: "retrieval",
      name: "检索升级计划",
      track: "召回架构",
      status: "established",
      updatedAt: "2026-04-28",
      execution: {
        currentMilestone: "支路「看透」ROI 度量",
        milestones: [
          { name: "看清：支路看板", status: "done", date: "2025-12-31" },
          { name: "看透：ROI 度量", status: "active", date: "2026-08-31" },
          { name: "准入准出规范", status: "pending", date: "2026-09-30" },
          { name: "支路收敛", status: "pending", date: "2026-12-31" }
        ],
        health: "yellow",
        risk: "召回支路已达 66 条、仍以每周约 1 条速度新增；存在资源错配（如 10039 支路成本为视频号主路 2.5 倍、消耗贡献仅 1/50000）",
        latestActivity: { date: "2026-04-17", text: "输出《检索现状及升级计划》：完成 66 条支路「看清」，启动 ROI「看透」" }
      },
      files: [
        { name: "议题5 - 检索现状及升级计划 (4.17).pdf", type: "pdf", addedAt: "2026-04-28", url: "projects/检索升级计划/议题5 - 检索现状及升级计划 (4.17).pdf" }
      ],
      interviewNotes: [],
      todos: {
        us: [
          { task: "基于 Versa 看板输出各支路成本(I)/价值(R)报表", owner: "检索-李锐", due: "2026-08-29", done: false }
        ],
        partner: [
          { task: "高成本低贡献支路（如 10039）owner 提供价值论证或下线计划", owner: "支路 owner 团队", due: "2026-08-15", done: false }
        ]
      }
    },

    {
      id: "cid-upgrade",
      name: "CID 升级项目",
      track: "创意架构 / 召回粗排",
      status: "established",
      updatedAt: "2026-07-16",
      execution: {
        currentMilestone: "阶段一 · CID 前置基建",
        milestones: [
          { name: "方案评审", status: "done", date: "2026-07-10" },
          { name: "项目化拆解", status: "done", date: "2026-07-16" },
          { name: "阶段一基建", status: "active", date: "2026-08-30" },
          { name: "二A 5%实验", status: "pending", date: "2026-10-15" },
          { name: "推全评估", status: "pending", date: "2026-11-15" }
        ],
        health: "yellow",
        risk: "约 35%（近 200 个）TID 特征有 diff 需模型实验（20+ 模型、500+ 预测任务）；样本回溯需刷数百 PB 数据、临时资源缺口大；效果风险待实验验证",
        latestActivity: { date: "2026-07-16", text: "完成项目化拆解与各方方案设计对齐：TID 不下线，召回粗排升级为 AID×CID 颗粒度，主视觉指纹容量目标 435 万 → 1000 万" }
      },
      files: [
        { name: "【项目化】CID升级项目.xlsx", type: "xlsx", addedAt: "2026-07-16", url: "projects/CID 升级项目/【项目化】CID升级项目.xlsx" },
        { name: "CID方案·一期简化版（保留TID）.pdf", type: "pdf", addedAt: "2026-07-10", url: "projects/CID 升级项目/CID方案·一期简化版（保留TID）.pdf" },
        { name: "解法2智投项目TID重构方案可行性调研.pdf", type: "pdf", addedAt: "2026-04-28", url: "projects/CID 升级项目/解法2智投项目TID重构方案可行性调研.pdf" },
        { name: "智投项目TID重构方案&&可行性调研.pdf", type: "pdf", addedAt: "2026-04-24", url: "projects/CID 升级项目/智投项目TID重构方案&&可行性调研.pdf" }
      ],
      interviewNotes: [
        { title: "CID 方案评审：召回粗排局部升级（TID 不下线）", type: "internal", date: "2026-07-10", who: "李猛 / 汤煌 / 李锐 / 谢年华 / 许熳锋 等", url: "projects/CID 升级项目/20260710-CID召回粗排局部升级方案评审_转写.txt" },
        { title: "CID 方案二讨论：创意组件化与分版位切换", type: "internal", date: "2026-07-03", who: "李猛 / 杨秀金 / 谢年华 / 朱张斌 等", url: "projects/CID 升级项目/20260703-CID方案二讨论_转写.txt" }
      ],
      todos: {
        us: [
          { task: "完成 TID 特征梳理，与广工对齐替换方案", owner: "特征-汤煌/林立伟", due: "2026-07-30", done: false },
          { task: "完成 AID→AID×CID 三塔模型方案设计", owner: "模型-deandnwang", due: "2026-07-30", done: false },
          { task: "检索创意定向过滤（retrieval proxy 卡点）单列解法", owner: "检索-李锐/许熳锋", due: "2026-07-31", done: false },
          { task: "完成模型训练资源评估与申请（预期 6 组）", owner: "模型-deandnwang", due: "2026-08-30", done: false }
        ],
        partner: [
          { task: "确认 CID 生产数据协议与指纹生产协议", owner: "投放-杨秀金", due: "2026-07-17", done: true },
          { task: "完成 CID 整体生产（覆盖率 >99.99%）", owner: "投放-杨秀金", due: "2026-07-31", done: false },
          { task: "完成播放链路 CID 透传（透传协议字段 7.31 先行）", owner: "播放-冯玉琢", due: "2026-08-06", done: false },
          { task: "阶段二B：TID 元素/关联表拆库与行压缩", owner: "投放-杨秀金/michaelpei", due: "2026-08-30", done: false }
        ]
      }
    },

    // ---------- 调研期 ----------
    {
      id: "explore-path",
      name: "探索路收益验证",
      track: "召回 / 成本优化",
      status: "research",
      updatedAt: "2026-07-06",
      research: {
        stage: "interview",
        interviews: { internal: 2, external: 0 },
        questions: [
          "扩大在线创意库存能否带来消耗增量（当前实验消耗不显著）",
          "探索充分标准下（进精排 1 万次）流量放大到 6% 以上能否满足且可控"
        ],
        rating: 3,
        nextAction: "放量至 1.2 亿后跟踪收益，评估是否放大流量或回收探索路"
      },
      files: [
        { name: "创意冷启定义说明.pdf（2026.6）", type: "pdf", addedAt: "2026-07-06", url: "projects/探索路收益验证/创意冷启定义说明.pdf" },
        { name: "红线兜底规则截图（7 张）", type: "png", addedAt: "2026-07-06", url: "projects/探索路收益验证/红线兜底/" },
        { name: "解法1-创意数不断增长的应对V2.pdf", type: "pdf", addedAt: "2026-04-28", url: "projects/探索路收益验证/解法1-创意数不断增长的应对V2.pdf" }
      ],
      interviewNotes: [],
      todos: {
        us: [
          { task: "输出探索路 ROI 测算（约 900 万/年成本 vs 增量消耗）", owner: "机制-谢年华", due: "2026-08-08", done: false }
        ],
        partner: [
          { task: "确认冷启 40 元阈值在重点行业的适配情况", owner: "策略-何琪", due: "2026-08-01", done: false }
        ]
      }
    }
  ],

  qa: {
    greeting: "你好，我可以基于 TID 专项的看板数据回答问题。试试下面的示例 👇",
    fallback: "这是一个演示助手，暂未接入知识库。你可以点击下方示例问题查看内置回答，接入后即可基于全部项目文件自由提问。",
    examples: [
      {
        q: "TID 现在的压力有多大？",
        a: "日新建 TID 峰值约 1.15 亿，较去年双11再涨 50%；4 月日均新建约 9651 万，其中智投约 5300 万（占 54%）。创意相关成本约 9 亿/年，系统容量红线 8000 万，投放 DB 磁盘占用已超 80%、硬件升无可升。"
      },
      {
        q: "探索路进展如何？",
        a: "探索路已上线：共 707 台标准设备、约 900 万/年，按 1.2 亿 TID 容量计单 TID 成本约 0.075 元/年（普通路的 1%）。已按计划于 6.30 放量至 1.2 亿，目前实验消耗不显著、耗时基本一致，正在跟踪收益以决定是否放大流量。"
      },
      {
        q: "CID 升级项目最新进展？",
        a: "7.10 方案评审定稿：TID 不下线，仅召回粗排升级为 AID×CID 颗粒度，主视觉指纹容量目标 435 万 → 1000 万；7.16 已完成项目化拆解。关键节点：阶段一 CID 基建 8.30 完成（CID 生产 7.31、播放透传 8.6），阶段二A 10.15 启动 5% 实验、11.15 评估，阶段二B TID 拆库/行压缩 8.30。主要风险：约 35% 特征有 diff 需模型实验，样本回溯资源缺口大。"
      },
      {
        q: "检索侧有什么问题？",
        a: "信息流召回支路已达 66 条、以每周约 1 条的速度增长，存在资源错配（如 10039 支路成本是视频号主路的 2.5 倍、消耗贡献仅 1/50000）。已完成支路「看清」统一看板，正在推进「看透」ROI 度量与准入准出规范。另外 retrieval proxy 作为中心节点不可平行扩容，是召回粗排的核心卡点，已在 CID 升级项目中单列解法。"
      }
    ]
  }
};
