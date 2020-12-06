const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  // 文件别名配置
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  // 跨域
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      "/devApi": {
        target: "http://www.web-jshtml.cn/vue_admin_api/token", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/devApi": ""
        }
      },
      "/api": {
        target: "http://114.55.3.21:8210/", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
