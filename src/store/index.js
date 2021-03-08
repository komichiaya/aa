import { createStore } from "vuex";

import main from "./module/main";
import area from "./module/area";
import blog from "./module/blog";
import more from "./module/more";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    main,
    area,
    blog,
    more,
  },
});
