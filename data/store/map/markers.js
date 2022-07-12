export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    init(state, markers) {
      state.list = markers;
    },
  },
};
