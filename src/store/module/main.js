import { getMainInfo } from "@/api";
import { GET_MAININFO,  } from "../types";

export default {
  state: {
    data: [],
  },
  mutations: {
    [GET_MAININFO](state, data) {
      state.data = data;
    },
    
  },
  actions: {
    async getMain({ commit }) {
      let result = await getMainInfo();
      if (result.code === 0) {
        let data = result.data;
        commit(GET_MAININFO, data);
      }
    },
   
  },
  getters: {},
};
