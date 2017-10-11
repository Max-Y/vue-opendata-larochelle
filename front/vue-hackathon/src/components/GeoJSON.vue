<template>
</template>

<script>
export default {
  props: ['geojson','options'],
  mounted() {

    this.$geoJSON = L.geoJSON(
      this.geojson,
      {onEachFeature: function(feature, layer) {
          if(feature.properties.description){
            layer.bindPopup(feature.properties.description);
          }
          else{
            var twi = "<a href='https://twitter.com/intent/tweet?text=Je%20tweet%20depuis%20le%20banc%20à%20la%20position%20"+feature.geometry.coordinates[1]+","+feature.geometry.coordinates[0]+"%20!!!&hashtags=opendata,larochelle,SII,hackathon'> <img src='https://static.addtoany.com/images/blog/tweet-button-2015.png' style='height:50px;width:100px'> </a>";
            var face = "<a class='share-btn' href='https://www.facebook.com')'> <img src='http://wac.450f.edgecastcdn.net/80450F/wjbq.com/files/2015/10/Screen-Shot-2015-10-12-at-8.28.33-AM.png' style='height:50px;width:100px'> </a>";
          layer.bindPopup("<img id='sview' src='https://maps.googleapis.com/maps/api/streetview?size=300x300&location="+feature.geometry.coordinates[1]+","+feature.geometry.coordinates[0]+"'&fov=90&heading=235&pitch=10&key=AIzaSyDcVSNQ0wLvelBS85gPETi3bunJmbqDFZc' alt='GeoPano' height='300' width='300'> <br/>" +"<div style='text-align:center'>" + "<p>Pas d'image? Rajouter la vôtre !</p> <input type='text'id='src'> <input type='submit' onclick=\"document.getElementById(\'sview\').src=\document.getElementById(\'src\').value\"> <br/>" + twi + face + "</div>");
        }
      }
    }
    );
  },
  methods: {
    deferredMountedTo(parent) {
      this.$geoJSON.addTo(parent);
      _.forEach(this.$children, (child) => {
        child.deferredMountedTo(that);
      });
    },
    addGeoJSONData(geojsonData) {
      this.$geoJSON.addData(geojsonData);
    },
    getGeoJSONData() {
      return this.$geoJSON.toGeoJSON();
    },
    getBounds() {
      return this.$geoJSON.getBounds();
    },

  }
};
</script>
