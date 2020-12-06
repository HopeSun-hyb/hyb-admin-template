import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// 获取配置的变量
const BASEURL =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_API
    : process.env.VUE_APP_API;

// 创建axios 实例
const service = axios.create({
  baseURL: "/devApi",
  // 请求超出时间
  timeout: 5000
});

// request 拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

// 导出
export default service;
