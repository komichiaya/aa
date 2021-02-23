import { createApp, config } from "vue";
import { pagination } from "ant-design-vue";

import "./mock/mockServe.js";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(pagination);
app.config.globalProperties.$isA = "false";
app.mount("#app");
//  "import",
//       {
//         libraryName: "view-design",
//         libraryDirectory: "src/components",
//       },
