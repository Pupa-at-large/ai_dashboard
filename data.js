// =============================================================
// 项目 AI 看板 · 数据文件
// 本文件由脚本自动生成/更新（当前为手工示例数据）。
// 使用 .js 而非 .json：可直接以 file:// 双击打开 index.html，
// 不受浏览器跨域限制。
// 字段含义详见 README.md。
// =============================================================
window.DASHBOARD_DATA = {
  meta: {
    title: "项目 AI 看板",
    updatedAt: "2026-07-20 09:30"
  },

  projects: [
    // ---------- 调研期项目 ----------
    {
      id: "yaoxi",
      name: "曜析智能",
      track: "开发者工具 / AI Coding",
      status: "research",
      updatedAt: "2026-07-18",
      research: {
        stage: "interview",
        interviews: { internal: 3, external: 5 },
        questions: [
          "企业客户是否愿意为 AI 代码审查单独付费，还是期望捆绑在 IDE 订阅内",
          "私有化部署的交付成本能否压到毛利 60% 以内"
        ],
        rating: 4,
        nextAction: "7 月底前完成 3 家付费意向客户访谈，产出访谈汇总报告"
      },
      files: [
        { name: "曜析智能-初筛评估表.xlsx", type: "xlsx", addedAt: "2026-06-28" },
        { name: "曜析智能-竞品对比（AI Code Review）.pptx", type: "pptx", addedAt: "2026-07-10" }
      ],
      interviewNotes: [
        { title: "外部访谈｜某头部券商研发效能负责人：代码审查工具采购决策链", type: "external", date: "2026-07-16" },
        { title: "外部访谈｜曜析智能 CTO：私有化交付成本拆解", type: "external", date: "2026-07-11" },
        { title: "内部讨论｜AI Coding 赛道收敛：审查 vs 生成的切入点选择", type: "internal", date: "2026-07-04" }
      ],
      todos: {
        us: [
          { task: "约访 2 家银行科技子公司研发负责人", owner: "陈默", due: "2026-07-24", done: false },
          { task: "整理 5 次外部访谈的付费意愿交叉对比", owner: "林一苇", due: "2026-07-28", done: false }
        ],
        partner: [
          { task: "提供最近 3 个 POC 的交付人天明细", owner: "曜析-王川", due: "2026-07-25", done: false }
        ]
      }
    },
    {
      id: "baize",
      name: "白泽感知",
      track: "工业视觉 / 质检",
      status: "research",
      updatedAt: "2026-07-15",
      research: {
        stage: "screening",
        interviews: { internal: 2, external: 1 },
        questions: [
          "3C 产线质检的存量替换市场是否足以支撑一家独立公司"
        ],
        rating: 3,
        nextAction: "补充 2 家竞品拆解，安排一次产线实地走访"
      },
      files: [
        { name: "白泽感知-赛道初筛笔记.docx", type: "docx", addedAt: "2026-07-08" }
      ],
      interviewNotes: [
        { title: "外部访谈｜某代工厂品质总监：视觉质检替换人工的真实节拍要求", type: "external", date: "2026-07-14" },
        { title: "内部讨论｜工业视觉初筛：与既有 portfolio 的协同判断", type: "internal", date: "2026-07-09" }
      ],
      todos: {
        us: [
          { task: "完成凌云光、阿丘科技两家竞品拆解", owner: "林一苇", due: "2026-07-30", done: false }
        ],
        partner: [
          { task: "开放一条试点产线供实地走访", owner: "白泽-郑楠", due: "2026-08-05", done: false }
        ]
      }
    },

    // ---------- 已立项项目 ----------
    {
      id: "jiuzhang",
      name: "九章流形",
      track: "大模型推理加速",
      status: "established",
      updatedAt: "2026-07-19",
      execution: {
        currentMilestone: "推理引擎 v0.9 内测",
        milestones: [
          { name: "立项评审", status: "done", date: "2026-03-20" },
          { name: "技术验证", status: "done", date: "2026-05-10" },
          { name: "v0.9 内测", status: "active", date: "2026-07-31" },
          { name: "首批商用", status: "pending", date: "2026-09-30" },
          { name: "A 轮启动", status: "pending", date: "2026-11-15" }
        ],
        health: "green",
        risk: "算力租赁价格上涨，内测阶段测试成本超预算约 12%",
        latestActivity: { date: "2026-07-19", text: "内测客户「云衡科技」完成部署，首批推理延迟数据达标" }
      },
      files: [
        { name: "九章流形-立项书 v2.pdf", type: "pdf", addedAt: "2026-03-18" },
        { name: "九章流形-里程碑计划表.xlsx", type: "xlsx", addedAt: "2026-05-12" },
        { name: "九章流形-内测客户名单及进度.xlsx", type: "xlsx", addedAt: "2026-07-19" }
      ],
      interviewNotes: [
        { title: "外部访谈｜内测客户云衡科技：部署过程问题清单复盘", type: "external", date: "2026-07-19" },
        { title: "内部讨论｜v0.9 内测目标口径对齐（延迟/吞吐/成本三指标）", type: "internal", date: "2026-06-30" }
      ],
      todos: {
        us: [
          { task: "对接两家备选算力供应商，压降测试成本", owner: "陈默", due: "2026-07-31", done: false },
          { task: "起草 A 轮融资材料大纲", owner: "苏晚晴", due: "2026-08-15", done: false }
        ],
        partner: [
          { task: "提交 7 月内测周报（延迟/吞吐数据）", owner: "九章-何律", due: "2026-07-27", done: false },
          { task: "确认第二家内测客户接入排期", owner: "九章-何律", due: "2026-08-01", done: false },
          { task: "补齐核心算法专利申请材料", owner: "九章-顾拾遗", due: "2026-08-10", done: false }
        ]
      }
    },
    {
      id: "qiyun",
      name: "栖云智能体",
      track: "企业级 Agent 平台",
      status: "established",
      updatedAt: "2026-07-17",
      execution: {
        currentMilestone: "企业版 POC 交付",
        milestones: [
          { name: "立项评审", status: "done", date: "2026-04-08" },
          { name: "产品定义", status: "done", date: "2026-05-30" },
          { name: "POC 交付", status: "active", date: "2026-08-15" },
          { name: "正式签约", status: "pending", date: "2026-10-01" }
        ],
        health: "yellow",
        risk: "客户 IT 安全评审进度滞后，POC 交付存在延期约 2 周的风险",
        latestActivity: { date: "2026-07-17", text: "与客户安全团队对齐数据隔离方案，等待其书面确认" }
      },
      files: [
        { name: "栖云智能体-立项书 v1.pdf", type: "pdf", addedAt: "2026-04-06" },
        { name: "栖云智能体-POC 需求说明书.docx", type: "docx", addedAt: "2026-06-12" },
        { name: "栖云智能体-数据隔离方案（对客户版）.pptx", type: "pptx", addedAt: "2026-07-17" }
      ],
      interviewNotes: [
        { title: "外部访谈｜POC 客户 IT 负责人：安全评审卡点与放行条件", type: "external", date: "2026-07-15" },
        { title: "内部讨论｜POC 范围控制：先交付流程编排还是知识问答", type: "internal", date: "2026-07-02" }
      ],
      todos: {
        us: [
          { task: "跟进客户安全评审书面结论", owner: "苏晚晴", due: "2026-07-23", done: false }
        ],
        partner: [
          { task: "提交数据隔离方案的渗透测试报告", owner: "栖云-赵屹", due: "2026-07-29", done: false },
          { task: "更新 POC 验收指标清单并同步双方", owner: "栖云-赵屹", due: "2026-08-03", done: false }
        ]
      }
    }
  ],

  qa: {
    examples: [
      {
        q: "九章流形现在的健康度怎么样？",
        a: "九章流形当前健康度为绿色（正常）。正处于「推理引擎 v0.9 内测」里程碑，首批内测客户延迟数据已达标；需关注的风险是算力租赁涨价导致测试成本超预算约 12%。"
      },
      {
        q: "曜析智能下一步要做什么？",
        a: "曜析智能处于调研期的访谈阶段，下一步动作：7 月底前完成 3 家付费意向客户访谈，产出访谈汇总报告。我方近期待办包括约访 2 家银行科技子公司研发负责人（7/24 前）。"
      },
      {
        q: "最近一周有哪些新文件入库？",
        a: "最近入库：7/19「九章流形-内测客户名单及进度.xlsx」、7/17「栖云智能体-数据隔离方案（对客户版）.pptx」。"
      }
    ]
  }
};
