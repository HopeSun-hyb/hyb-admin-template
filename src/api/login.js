import { post } from "@/utils/requestMethod";

// 获取验证码
const getSms = param => post("/getSms/", param);

// 登陆
const login = param => post("/login/", param);

export { getSms, login };
