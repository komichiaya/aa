import { GET_COUNTRYINFO } from "../types";
import { getCountryInfo } from "@/api";

export default {
  state: {
    data: [],
  },
  mutations: {
    [GET_COUNTRYINFO](state, data) {
      state.data = data;
    },
  },
  actions: {
    async getCountry({ commit }, country) {
      let result = await getCountryInfo(country);
      if (result.code === 0) {
        let data = result.data;
        commit(GET_COUNTRYINFO, data);
      }
    },
  },
  getters: {
    
  },
};
