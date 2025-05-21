const express = require('express');
const app = express();
const PORT = 3000;

// 中间件
app.use(express.json());

// 基础路由
app.get('/', (req, res) => {
  res.json({ message: '欢迎使用跨平台应用后端服务' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});