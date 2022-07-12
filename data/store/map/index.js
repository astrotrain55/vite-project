import markers from './markers';
import lines from './polylines';

export default {
  namespaced: true,
  modules: {
    markers,
    lines,
  },
  state: {
    instance: null,
    zoom: 16,
    center: [55.1699231, 61.4512017],
    options: {
      doubleClickZoom: false,
      zoomControl: false,
      attributionControl: false,
    },
    tileProviders: [
      {
        name: '2GIS',
        url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}',
        visible: true,
      },
      {
        name: 'OSM',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        visible: false,
      },
      {
        name: 'OSM-HOT',
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        visible: false,
      },
      {
        name: 'OSM-INTL',
        url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
        visible: false,
      },
    ],
  },
  mutations: {
    init(state, instance) {
      state.instance = instance;
    },
  },
  actions: {
  },
  getters: {
  },
};
