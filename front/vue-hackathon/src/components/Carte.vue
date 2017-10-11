<template>
  <div style="height:500px;width:500px;">
  <div class="map-component">
    <v-map :zoom=14 :center="[46.16667, -1.150]" style="height:75%;width:90%">
    <v-tilelayer :url=url :attribution=attribution>
    </v-tilelayer>
    <v-geojson-layer :geojson="geojson" :options="options"></v-geojson-layer>
    <wms-tilelayers v-for="layer in wms_layers"
                    :key="layer.url"
                    :baseurl="layer.url"
                    :format="layer.format"
                    :transparent="layer.transparent"
                    :layers="layer.layers"
                    :crs="layer.crs">
    </wms-tilelayers>
    </v-map>
  </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Vue2Leaflet from 'vue2-leaflet'
  import L from 'leaflet'
  import GeoJSON from '../components/GeoJSON.vue';
  import geojsonData from '../../../../data/geojson/cad_section_wgs84.json'
  import WMSTileLayers from '../components/WMSTileLayers.vue'
  import WMSTileLayer from '../components/WMSTileLayer.vue'
  var api_key = "pk.eyJ1IjoiaGFrYWxsIiwiYSI6ImNpaTdnZGk0ZjAwOHJ2eW0zZTgwYmNwN3EifQ.Z92XzmwZ3GmmuQavX6pB0g"
  export default {
    name: 'carte',
    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-geojson-layer' : GeoJSON,
      'wms-tilelayers': WMSTileLayers,
      'wms-tilelayer': WMSTileLayer
    },
    data () {
      return {
        url : 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + api_key,
        attribution : '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        geojson: geojsonData,
        wms_layers: [
          {
            'url': 'https://portail-sig.ville-larochelle.fr/opendata/carteWS.php?',
            'format': 'image/png',
            'transparent': true,
             'layers' : [
               {'id': 'plan_ville', 'name': 'plan_ville'},
               {'id': 'ppi_cheminement_pieton', 'name': 'ppi_cheminement_pieton'},
               {'id': 'ppi_barrage', 'name': 'ppi_barrage'},
               {'id': 'plan_ville_toponymie_7500', 'name': 'plan_ville_toponymie_7500'},
               {'id': 'plan_ville_terrain_sport', 'name': 'plan_ville_terrain_sport'},
               {'id': 'plan_ville_hydrographie', 'name': 'plan_ville_hydrographie'},
               {'id': 'plan_ville', 'name': 'plan_ville'},
               {'id': 'batiment_communal', 'name': 'batiment_communal'},
               {'id': 'travaux_voirie', 'name': 'travaux_voirie'},
               {'id': 'mu_parking_cycles', 'name': 'mu_parking_cycles'},
               {'id': 'mu_banc', 'name': 'mu_banc'},
               {'id': 'politiqueville', 'name': 'politiqueville'},
               {'id': 'circonscription', 'name': 'circonscription'},
               {'id': 'ep_point_eclairage', 'name': 'ep_point_eclairage'},
               {'id': 'eclairagepublic', 'name': 'eclairagepublic'},
             ],
              'crs': L.CRS.EPSG4326
          }
        ],
        options: {
          style: function () {
            return {
              weight: 2,
              color: '#ECEFF1',
              opacity: 1,
              fillColor: '#e4ce7f',
              fillOpacity: 1
            }
          }
      }
    }
  },
    computed: {

    },
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map-component{
    overflow: hidden;
    position: absolute;
  }
</style>
