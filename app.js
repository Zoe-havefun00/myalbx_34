// https://github.com/Zoe-havefun00/myalbx_34.git
// gitHub里的克隆地址


// 引入express
const express = require("express");

// 引入读取模块fs
const fs = require("fs");

// 创建express对象
const app = express();

// 监听端口
app.listen(3006, () => {
  console.log("http://127.0.0.1:3006");
});

// 添加静态资源的托管(图片,css等静态资源)
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));

// 添加路由配置
app.get("/", (req, res) => {
  fs.readFile(__dirname + "/views/index.html", (err, data) => {
    if (err) return res.end("404");
    res.end(data);
  });
});
