<template>
  <div class="mdl-grid">
    <SIIHits class="mdl-cell mdl-cell--12-col mdl-shadow--2dp"></SIIHits>
    <SIIMap v-if="map" class="mdl-cell mdl-cell--12-col mdl-shadow--2dp"></SIIMap>
    <!--<SIIChart class="mdl-cell mdl-cell&#45;&#45;12-col mdl-shadow&#45;&#45;2dp"></SIIChart>-->
    <SIIChart2 class="mdl-cell mdl-cell--12-col mdl-shadow--2dp"></SIIChart2>
    <SIITable class="mdl-cell mdl-cell--12-col mdl-shadow--2dp"></SIITable>
    <SIIGraph class="mdl-cell mdl-cell--12-col mdl-shadow--2dp"></SIIGraph>
  </div>
</template>

<script>
import SIIMap from './SIIMap'
import SIITable from './SIITable'
import SIIChart from './SIIChart'
import SIIChart2 from './SIIChart2'
import SIIGraph from './SIIGraph'
import SIIHits from './SIIHits'

  var multiData =  {
    name: 'multiData',
    components: { SIIMap,SIIHits, SIITable, SIIChart, SIIGraph, SIIChart2 },
    computed: {
      map() {
        return this.$store.state.SIIMap;
      }
    },
    methods: {
      updateData(data) {
        this.$children[2].updateData(data);
      }
    }
  }

  export default multiData
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
