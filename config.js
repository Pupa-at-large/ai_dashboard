// =============================================================
// 项目投研看板 · 部署/对接配置（手工维护）
// 本文件不会被数据生成脚本覆盖；数据在 data.js，配置在这里。
// 对接说明详见 INTEGRATION.md。
// =============================================================
window.DASHBOARD_CONFIG = {
  // 知识库问答服务（Workbuddy 等平台的 HTTP 接口）
  bot: {
    // 问答接口地址。留空 "" 时页面使用 data.js 内置的示例问答，
    // 填上地址后自动切换为真实调用，无需改动页面代码。
    // 例："https://your-workbuddy-gateway.example.com/api/ask"
    endpoint: "",

    // 以下一般不需要改
    method: "POST",
    headers: { "Content-Type": "application/json" },
    timeoutMs: 30000
  }
};
