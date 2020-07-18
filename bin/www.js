// 引入创建网站服务器的模块
const http = require('http');
// 导入app.js
const serverHandle = require('../app');
// 创建网站服务器对象
const server = http.createServer(serverHandle);

// 监听端口
server.listen(8000);
console.log("网站服务器启动成功");