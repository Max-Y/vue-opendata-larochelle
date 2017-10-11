<template>
  <div class="widget">
    <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
      <div class="mdl-card__title mdl-card--expand mdl-color--teal-300">
        Widget {{index}} {{this.$store.state.widgets.types[type].component}}
      </div>
      <div class="mdl-card__supporting-text mdl-color-text--grey-600">
        <component :is="this.$store.state.widgets.types[type].component" :index="index" :type="type"></component>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <mdl-select label="Type" :id="index+'widget-type-select'" v-model="type" :value.sync="type" :options="this.$store.state.widgets.types"></mdl-select>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Diagram from './Diagram.vue'
  import Carte from './Carte.vue'

  export default {
    name: 'widget',
    components : {Diagram, Carte},
    props: {
        index : Number
    },
    data () {
      return {
          type : 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mdl-card{
    overflow: initial;
  }
</style>
