// =============================================================
// 项目投研看板 · 数据文件
// 本文件由脚本自动生成/更新（当前为手工示例数据）。
// 使用 .js 而非 .json：可直接以 file:// 双击打开 index.html，
// 不受浏览器跨域限制。
// 字段含义详见 README.md。日期统一存 YYYY-MM-DD，页面展示 MM-DD。
// =============================================================
window.DASHBOARD_DATA = {
  meta: {
    title: "项目投研看板",
    subtitle: "Project Research & Portfolio Monitor",
    updatedAt: "2026-07-21 14:32"
  },

  projects: [
    // ---------- 调研期项目 ----------
    {
      id: "xinglian",
      name: "星链光子",
      track: "光通信",
      status: "research",
      updatedAt: "2026-07-21",
      research: {
        stage: "interview",
        interviews: { internal: 6, external: 3 },
        questions: [
          "核心团队光芯片量产良率能否达到 80%？",
          "下游数据中心客户的真实付费意愿"
        ],
        rating: 4,
        nextAction: "本周完成 2 位外部技术专家访谈"
      },
      files: [
        { name: "星链光子-BP-v3.pdf", type: "pdf", addedAt: "2026-07-19" },
        { name: "光通信赛道扫描.xlsx", type: "xlsx", addedAt: "2026-07-15" },
        { name: "初筛评分表.docx", type: "docx", addedAt: "2026-07-11" }
      ],
      interviewNotes: [
        { title: "行业专家：量产良率", type: "external", date: "2026-07-20", who: "某大厂工艺专家" },
        { title: "创始人一访：技术路线", type: "external", date: "2026-07-16", who: "CEO 张某" },
        { title: "赛道初判会议纪要", type: "internal", date: "2026-07-11", who: "投研组" }
      ],
      todos: {
        us: [
          { task: "完成星链光子外部专家访谈提纲", owner: "小赵", due: "2026-07-23", done: false }
        ],
        partner: [
          { task: "星链光子提供芯片测试报告", owner: "对方 CTO", due: "2026-07-24", done: false }
        ]
      }
    },
    {
      id: "maihe",
      name: "麦禾智造",
      track: "工业软件",
      status: "research",
      updatedAt: "2026-07-20",
      research: {
        stage: "screening",
        interviews: { internal: 2, external: 1 },
        questions: [
          "MES 产品在离散制造场景的可复制性"
        ],
        rating: 3,
        nextAction: "补充 3 家标杆客户访谈后再定评级"
      },
      files: [
        { name: "麦禾智造-介绍材料.pdf", type: "pdf", addedAt: "2026-07-18" },
        { name: "工业软件竞品图谱.xlsx", type: "xlsx", addedAt: "2026-07-14" }
      ],
      interviewNotes: [
        { title: "创始人一访", type: "external", date: "2026-07-19", who: "CEO 李某" },
        { title: "立项前初筛讨论", type: "internal", date: "2026-07-14", who: "投研组" }
      ],
      todos: {
        us: [
          { task: "麦禾智造竞品图谱更新", owner: "小李", due: "2026-07-25", done: true }
        ],
        partner: []
      }
    },

    // ---------- 已立项项目 ----------
    {
      id: "yunshu",
      name: "云枢数据",
      track: "数据基础设施",
      status: "established",
      updatedAt: "2026-07-21",
      execution: {
        currentMilestone: "A 轮交割",
        milestones: [
          { name: "尽调", status: "done", date: "2026-06-15" },
          { name: "投委会", status: "done", date: "2026-07-05" },
          { name: "交割", status: "active", date: "2026-07-25" },
          { name: "投后", status: "pending", date: "2026-08-20" }
        ],
        health: "green",
        risk: "无重大风险，交割文件走签署流程中",
        latestActivity: { date: "2026-07-21", text: "项目方已回签 SPA 附件三" }
      },
      files: [
        { name: "交割协议-草案.docx", type: "docx", addedAt: "2026-07-21" },
        { name: "里程碑跟踪表.xlsx", type: "xlsx", addedAt: "2026-07-20" },
        { name: "云枢数据-立项书.pdf", type: "pdf", addedAt: "2026-07-08" }
      ],
      interviewNotes: [
        { title: "管理层深访：组织架构", type: "external", date: "2026-07-12", who: "COO 王某" },
        { title: "投委会决议纪要", type: "internal", date: "2026-07-05", who: "投委会" }
      ],
      todos: {
        us: [
          { task: "云枢数据交割文件法务复核", owner: "小钱", due: "2026-07-22", done: false }
        ],
        partner: [
          { task: "云枢数据回签 SPA 主协议", owner: "对方法务", due: "2026-07-22", done: false },
          { task: "云枢数据确认董事席位安排", owner: "对方 CEO", due: "2026-07-21", done: true }
        ]
      }
    },
    {
      id: "hengxin",
      name: "恒芯半导",
      track: "半导体",
      status: "established",
      updatedAt: "2026-07-19",
      execution: {
        currentMilestone: "投后赋能",
        milestones: [
          { name: "尽调", status: "done", date: "2026-05-20" },
          { name: "投委会", status: "done", date: "2026-06-10" },
          { name: "交割", status: "done", date: "2026-06-28" },
          { name: "投后", status: "active", date: "2026-09-30" }
        ],
        health: "yellow",
        risk: "核心客户订单延期，需关注 Q3 营收兑现",
        latestActivity: { date: "2026-07-19", text: "6 月营收未达预期，管理层说明中" }
      },
      files: [
        { name: "董事会材料.pptx", type: "pptx", addedAt: "2026-07-18" },
        { name: "投后经营月报-6月.pdf", type: "pdf", addedAt: "2026-07-10" },
        { name: "恒芯半导-立项书.pdf", type: "pdf", addedAt: "2026-06-20" }
      ],
      interviewNotes: [
        { title: "CEO 沟通：订单节奏", type: "external", date: "2026-07-18", who: "CEO 陈某" },
        { title: "投后风险预警会", type: "internal", date: "2026-07-15", who: "投后组" }
      ],
      todos: {
        us: [
          { task: "恒芯半导投后月报分析", owner: "小孙", due: "2026-07-24", done: false }
        ],
        partner: [
          { task: "恒芯半导补充 Q3 订单明细", owner: "对方 CFO", due: "2026-07-23", done: false }
        ]
      }
    }
  ],

  qa: {
    greeting: "你好，我可以基于看板数据回答项目相关问题。试试下面的示例 👇",
    fallback: "这是一个演示助手，暂未接入真实模型。你可以点击下方示例问题查看内置回答，接入知识库后即可自由提问。",
    examples: [
      {
        q: "哪些项目有风险？",
        a: "当前「恒芯半导」健康度为黄灯：核心客户订单延期，需关注 Q3 营收兑现。其余立项项目暂无重大风险。"
      },
      {
        q: "云枢数据进展到哪了？",
        a: "云枢数据处于「A 轮交割」阶段，尽调与投委会已完成，交割进行中。最新动态：07-21 项目方已回签 SPA 附件三。"
      },
      {
        q: "调研期项目下一步？",
        a: "星链光子：本周完成 2 位外部技术专家访谈；麦禾智造：补充 3 家标杆客户访谈后再定评级。"
      }
    ]
  }
};
