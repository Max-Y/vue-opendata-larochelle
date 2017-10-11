<template>
  <div class="map-component">
    <v-map :zoom=14 :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-geojson-layer :geojson="geojson" :options="options"> </v-geojson-layer>
    </v-map>
  </div>
</template>

<script>
  import Vue2Leaflet from 'vue2-leaflet';
  import GeoJSON from '../components/GeoJSON.vue';
  import WMSTileLayers from '../components/WMSTileLayers.vue'
  import WMSTileLayer from '../components/WMSTileLayer.vue'
  import MapFilter from './MapFilter.vue'
  import GeoJsonData from '../assets/data/sta_parking.json'
  import L from 'leaflet';
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-geojson-layer' : GeoJSON,
    'v-marker': Vue2Leaflet.Marker,
    'wms-tilelayers': WMSTileLayers,
    'wms-tilelayer': WMSTileLayer
  });

  var api_key = "pk.eyJ1IjoiaGFrYWxsIiwiYSI6ImNpaTdnZGk0ZjAwOHJ2eW0zZTgwYmNwN3EifQ.Z92XzmwZ3GmmuQavX6pB0g"

  var SIIMap =  {
    name: 'SIIMap',
    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-geojson-layer' : GeoJSON,
    },
    data () {
      return {
        url: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + api_key,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        center: [46.16667, -1.150],
        geojson: GeoJsonData, //this.$store.state.SIIMap,
        wms_layers: [
          {
            'url': 'https://portail-sig.ville-larochelle.fr/opendata/carteWS.php?',
            'format': 'image/png',
            'transparent': true,
            'layers': [
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
        },
      }
    },
    mounted(){
      console.log(this.$store.state.SIIMap)
      //Omnivore.kml(KMLData);
    }

  }

  export default SIIMap
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map-component {
    overflow: hidden;
    height: 300px;
  }
</style>
