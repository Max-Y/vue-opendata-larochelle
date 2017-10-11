<template>
  <div class="mdl-cell mdl-cell--12-col">
    <mdl-spinner v-show="this.$store.state.data.wait"></mdl-spinner>
    <multiData v-show="!this.$store.state.data.wait"></multiData>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import MultiData from './MultiData'
  import ChartModel from '../models/ChartModel'

  var Home = {
    name: 'multiDataPage',
    props: ['datatype', 'categorie', 'table'],
    components: {MultiData},
    methods: {
      ...mapActions({
        updateSearchParams: 'updateSearchParams',
        updateHitsState: 'updateHitsState',
        updateTableState: 'updateTableState',
        updateMapState: 'updateMapState',
        updateChartState: 'updateChartState',
        updateColumnsHeaders: 'updateColumnsHeaders',
      })
    },
    created(){
      let searchParams = {
        "datatype": this.datatype,
        "categorie": this.categorie,
        "table": this.table
      };
      this.updateSearchParams(searchParams);
    },
    mounted() {
//      this.updateData();
    }
  }

  export default Home
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
