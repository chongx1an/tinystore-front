import axios from "axios";

const _axios = axios.create({
  headers: {},
  baseURL: "http://0.0.0.0/api/admin",
});

export default {
  get(url, params, config) {
    return this.request("get", url, params, config);
  },

  post(url, params, config) {
    return this.request("post", url, params, config);
  },

  put(url, params, config) {
    return this.request("put", url, params, config);
  },

  patch(url, params, config) {
    return this.request("patch", url, params, config);
  },

  delete(url, params, config) {
    return this.request("delete", url, params, config);
  },

  async request(method, url, params) {

    let config = {
      method,
    };

    params = params ?? {};

    if (method === "get" || method === "delete") {
      config.params = params;
    } else if (method === "post" || method === "put" || method === "patch") {
      config.data = params;
    }

    let result;

    await _axios(url, config)
      .then((response) => {
        result = Promise.resolve(response);
      })
      .catch((error) => {
        result = Promise.reject(error);
      });

    return result;
  },

}