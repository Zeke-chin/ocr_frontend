const { defineConfig } = require('@vue/cli-service')
// // 引入cors模块
// const cors = require("cors");
// // 创建一个Express应用
// const app = express();
// // 使用cors中间件，允许所有域名的请求
// app.use(cors());

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
