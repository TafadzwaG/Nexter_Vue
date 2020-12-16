import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default {
  state: () => ({
    token: null || localStorage.getItem('token'),
    user: null || localStorage.getItem('user'),
  }),

  getters,
  mutations,
  actions,

};
