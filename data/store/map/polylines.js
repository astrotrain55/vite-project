import _ from '@/plugins/lodash';

export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    init(state, lines) {
      state.list = _.map(lines, (line) => {
        line.color = '#2196f3';
        line.editable = false;
        return line;
      });
    },
  },
};
