<template>
  <div>
    <div class="map-component">
      <v-map :zoom=14 :center="center" v-on:l-click="function(e){recenterXY(e);}">
        <v-tilelayer :url=url :attribution=attribution></v-tilelayer>
        <wms-tilelayers v-for="layer in wms_layers"
                        :key="layer.url"
                        :baseurl="layer.url"
                        :format="layer.format"
                        :transparent="layer.transparent"
                        :layers="layer.layers"
                        :crs="layer.crs">
        </wms-tilelayers>
        <v-geojson-layer :geojson="geojson" :options="boundsL"></v-geojson-layer>
        <v-circle :lat-lng="circle.center" :radius="circle.radius"></v-circle>
      </v-map>
    </div>
    <div class="map-filter">
      <h4>Sélection Zone</h4>
      <input type="text" v-model="adresse">
      <input type="submit" v-on:click="recenter(adresse)">
  </div>
  </div>
</template>

<script>
  import Vue2Leaflet from 'vue2-leaflet';
  import GeoJSON from '../components/GeoJSON.vue';
  import WMSTileLayers from '../components/WMSTileLayers.vue'
  import WMSTileLayer from '../components/WMSTileLayer.vue'
  import MapFilter from './MapFilter.vue'
  import geojsonData from '../../../../data/geojson/mu_banc_wgs84.json'
  import L from 'leaflet';
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  var api_key = "pk.eyJ1IjoiaGFrYWxsIiwiYSI6ImNpaTdnZGk0ZjAwOHJ2eW0zZTgwYmNwN3EifQ.Z92XzmwZ3GmmuQavX6pB0g"
  export default {
    name: 'map',
    components: {
      MapFilter, 'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-geojson-layer': GeoJSON,
      'v-marker': Vue2Leaflet.Marker,
      'wms-tilelayers': WMSTileLayers,
      'wms-tilelayer': WMSTileLayer,
      'v-circle': Vue2Leaflet.LCircle,
    },
    data () {
      return {
        url: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + api_key,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        geojson: geojsonData,
        center: [46.16667, -1.150],
        x: 46.16667,
        y:-1.150,
        adresse: "40 Rue Sénac de Meilhan, 17000 La Rochelle",
        circle: {
          center: L.latLng(46.16667, -1.150),
          radius: 500
        },
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
        boundsL: L.latLngBounds(L.latLng(46.26667, -1.15), L.latLng(46.16667, -1.10)),
      }
    },
    methods: {
        recenter: function (adresse) {
          function httpGet(theUrl)
          {
              var xmlHttp = new XMLHttpRequest();
              xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
              xmlHttp.send( null );
              return xmlHttp.responseText;
          }

          var data = JSON.parse(httpGet("http://maps.google.com/maps/api/geocode/json?address="+adresse));
          var lat = data.results[0].geometry.location.lat;
          var lng = data.results[0].geometry.location.lng;
          this.center=L.latLng(lat, lng);
          this.circle.center=L.latLng(lat, lng);
        },
        recenterXY: function (e) {
            console.log(e);
            this.center=L.latLng(e.latlng.lat, e.latlng.lng);
            this.circle.center=L.latLng(e.latlng.lat, e.latlng.lng);
      }
    },
    mounted(){
      L.Icon.Default.imagePath = "../assets/";
      //Omnivore.kml(KMLData);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map-component {
    overflow: hidden;
    height: 98%;
    width: 99%;
    position: absolute;
  }

  .map {
  }
  .map-filter{
    position: absolute;
    right : 15px;
    bottom: 15px;
    z-index: 9999;
    background-color: white;
    width: 180px;
  }
</style>
