import { GET_BLOGINFO } from "../types";
import { getBlogInfo } from "@/api";

export default {
  state: {},
  mutations: {
    [GET_BLOGINFO](state, data) {
      state.data = data;
    },
  },
  actions: {
    async getBlog({ commit }, {country, which, id}) {
      let result = await getBlogInfo(country, which, id);
      if (result.code === 0) {
        let data = result.data;
        commit(GET_BLOGINFO, data);
      }
    },
  },
  getters: {},
};
