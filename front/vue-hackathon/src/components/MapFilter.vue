<template>
  <div class="map-filter">
    <h4>MapFilter</h4>
    <input type="text" v-model="x">
    <input type="text" v-model="y">
    <input type="submit" v-on:click="say(x+','+y)">
    <p>{{ x }} {{ y }}</p>
  </div>
</template>

<script>

  export default {
    name: 'map-filter',
    data () {
      return {
        x: 46.16667,
        y: -1.150
      }
    },
    methods: {
        say: function (message) {
          alert(message)
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .map-filter{
    position: absolute;
    right : 15px;
    bottom: 15px;
    z-index: 9999;
    background-color: white;
    width: 180px;
  }

</style>
