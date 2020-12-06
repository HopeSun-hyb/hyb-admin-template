# hyb-admin-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

2020.12.2

1. 创建项目 vue create prejectName
2. 创建别名， 通过cssLoader 引入公共css文件不好使，现在通过诺@import 引入
3. 创建目录  
root  
&emsp;&emsp;build    &emsp; // 构建相关  
&emsp;&emsp;config    &emsp; // 配置相关  
&emsp;&emsp;src    &emsp; // 源代码  
&emsp;&emsp;&emsp;&emsp;api    &emsp; // 网络请求  
&emsp;&emsp;&emsp;&emsp;components    &emsp; // 全局公用组件
&emsp;&emsp;&emsp;&emsp;mock    &emsp; // 项目mock s数据  
&emsp;&emsp;&emsp;&emsp;router    &emsp; // 路由  
&emsp;&emsp;&emsp;&emsp;store    &emsp; // store管理  
&emsp;&emsp;&emsp;&emsp;styles    &emsp; // 样式   
&emsp;&emsp;&emsp;&emsp;utils    &emsp; // 全局公用方法  
&emsp;&emsp;&emsp;&emsp;views    &emsp; // 页面组件  
&emsp;&emsp;static    &emsp; // 静态资源 

4. 配置别名 alias
5. 配置VSCode插件 [这样配置，让你的VS Code好用到飞起！
](https://www.jianshu.com/p/fd945e8e099d), [VSCode拓展推荐](https://github.com/varHarrie/varharrie.github.io/issues/10)
6. 创建 request 文件 （创建axios对象，添加请求拦截 和 响应拦截）  
7. 创建 requestMethod.js (封装get post delete put 方法)
8. 配置 .env.development 和 .env.production  注意：命名会有要求
9. 配置跨域 vue.config.js
10. 创建login.js API 文件
11. 复制 Login.vue 调通拿到验证码的 接口