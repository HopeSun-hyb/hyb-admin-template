//  封装 get post delete put 方法
import request from "./request";

/**
 * get 方法
 * @param url 请求地址
 * @param params 请求参数
 * @return Promise
 */
function get(url, params = {}) {
  return request.get(url, {
    params: params
  });
}

/**
 * post 方法
 * @param url 请求地址
 * @param data 请求参数
 * @return Promise
 */
function post(url, data = {}) {
  return request({
    url: url,
    method: "post",
    data: data
  });
}

/**
 * deletes 方法
 * @param url 请求地址
 * @param data 请求参数
 * @return Promise
 */
function deletes(url, data = {}) {
  return request.delete(url, data);
}

/**
 * put 方法
 * @param url 请求地址
 * @param data 请求参数
 * @return Promise
 */
function put(url, data = {}) {
  return request.put(url, data);
}

export { get, post, deletes, put };
