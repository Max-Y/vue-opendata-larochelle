<template>
  <div class="dashboard">
    <h1>{{this.$store.state.hello.msg}}</h1>
    <!-- TODO boucle sur widget dans store-->
    <widget></widget>
  </div>
</template>

<script>
  import Widget from './Widget.vue'

  export default {
    name: 'dashboard',
    components : {Widget},
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
