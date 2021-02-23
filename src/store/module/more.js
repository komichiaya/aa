import { GET_MOREINFO } from "../types";
import { getCountryInfo } from "@/api";

export default {
  state: {},
  mutations: {
      [GET_MOREINFO](state,data){
        state.data = data
      }
  },
  actions: {
    async getCountryMore({ commit }, country) {
      let result = await getCountryInfo(country);
      if (result.code === 0) {
        let data = result.data;
        commit(GET_MOREINFO, data);
      }
    },
  },
  getters: {},
};
