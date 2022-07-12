<template>
  <e-map
    v-if="bounds.length"
    ref="map"
    :zoom="zoom"
    :center="center"
    :options="options"
    :bounds="bounds"
    :editable="true">
    <l-control-layers
      position="topleft"
      @ready="addYandexLayer"/>
    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.url"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      layer-type="base"/>
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :icon="marker.icon"
      :draggable="true"
      :lat-lng="marker.coords"/>
    <e-polyline
      v-for="polyline in listLines"
      :key="polyline.id"
      :editable="polyline.editable"
      :lat-lngs="polyline.coords"
      :color="polyline.color"
      @click="toggleEdit(polyline)"/>
  </e-map>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import db from '@/api/DataBase';
import _ from '@/plugins/lodash';
import t from '@/tools';

export default {
  created() {
    db.getEssences((markers, lines) => {
      this.initMarkers(markers);
      this.initLines(lines);
    });
  },

  mounted() {
    this.init(this.$refs.map);
  },

  computed: {
    ...mapState('map', ['zoom', 'center', 'options', 'tileProviders']),
    ...mapState('map/markers', {
      listMarkers: 'list',
    }),
    ...mapState('map/lines', {
      listLines: 'list',
    }),

    markers() {
      return _.map(this.listMarkers, (marker) => {
        marker.icon = this.$L.divIcon({
          html: t.tpl('marker', marker),
        });

        return marker;
      });
    },

    bounds() {
      const result = [];

      _.each(this.listMarkers, (marker) => {
        result.push(marker.coords);
      });

      _.each(this.listLines, (polyline) => {
        result.push(...polyline.coords);
      });

      return result;
    },
  },

  methods: {
    ...mapActions('map', ['getEssences']),
    ...mapMutations('map', ['init']),
    ...mapMutations('map/markers', {
      initMarkers: 'init',
    }),
    ...mapMutations('map/lines', {
      initLines: 'init',
    }),

    addYandexLayer(layers) {
      layers.addBaseLayer(this.$L.yandex(), 'Yandex');
    },

    toggleEdit(polyline) {
      polyline.editable = !polyline.editable;
    },
  },
};
</script>

<style lang="stylus">
.leaflet-fake-icon-image-2x
  background-image url('~leaflet/dist/images/marker-icon-2x.png')
.leaflet-fake-icon-shadow
  background-image url('~leaflet/dist/images/marker-shadow.png')
</style>
