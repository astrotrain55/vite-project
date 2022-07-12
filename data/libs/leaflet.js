import * as L from 'libs/leaflet';
import 'leaflet-editable';
import 'leaflet-plugins/layer/tile/Yandex';

import {
  LMap,
  LControlLayers,
  LTileLayer,
  LMarker,
  LPolyline,
  LTooltip,
  LPopup,
} from 'vue2-leaflet';
import {
  EditableMap,
  EditablePolyline,
} from 'vue2-leaflet-editable';
import LMarkerCluster from 'vue2-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

export default {
  install(Vue) {
    delete L.Icon.Default.prototype._getIconUrl; // eslint-disable-line
    L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

    Vue.component('l-map', LMap);
    Vue.component('l-control-layers', LControlLayers);
    Vue.component('l-tile-layer', LTileLayer);
    Vue.component('l-polyline', LPolyline);
    Vue.component('l-marker', LMarker);
    Vue.component('l-marker-cluster', LMarkerCluster);
    Vue.component('l-tooltip', LTooltip);
    Vue.component('l-popup', LPopup);
    Vue.component('e-map', EditableMap);
    Vue.component('e-polyline', EditablePolyline);

    Vue.prototype.$L = L;
  },
};

// <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
