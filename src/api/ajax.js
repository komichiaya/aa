import axios from "axios";
import qs from "qs";

const instance = axios.create({
  timeout: 2000,
});

instance.interceptors.request.use((configx) => {
  const data = configx.data;
  if (data instanceof Object) {
    configx.data = qs.stringify(data);
  }
  return configx;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return new Promise(() => {});
  }
);
export default instance;
