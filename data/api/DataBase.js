import Ajax from '@/plugins/axios';

class DataBase {
  constructor() {
    this.ajax = Ajax;
  }

  request(...props) {
    return this.ajax(...props);
  }

  getEssences(fn) {
    const method = 'get';

    return this.request({
      method,
      url: 'markers.json',
    }, {
      method,
      url: 'lines.json',
    }, fn);
  }
}

const instance = new DataBase();

export default instance;
