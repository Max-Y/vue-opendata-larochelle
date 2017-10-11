<template>
  <div class="">
    <span class="force-render">{{this.$store.state.data.force_render}}</span>
    <div :id="'chart'+index">

    </div>
    <div>
      <mdl-radio v-for="(diagramType, index) in this.$store.state.widgets.types[type].subtypes" v-model="subtype"
                 :key="index"
                 :val="index">
        {{diagramType.name}}
      </mdl-radio>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Highcharts from '../../node_modules/highcharts/highcharts'
  export default {
    name: 'diagram',
    props: {
      index: Number,
      type: Number
    },
    data () {
      return {
        subtype: this.$store.state.widgets.list[this.index].subtype,
        configuration: Object,
        chart: Object
      }
    },
    methods: {
      ...mapActions({}),
      drawChart() {
        //TODO utiliser chart.update ?
        this.chart = Highcharts.chart('chart' + this.index, {
          chart: {
            type: this.$store.state.widgets.list[this.index].configuration.type
          },
          title: this.$store.state.data.description.title,
          xAxis: this.$store.state.data.description.xAxis,
          yAxis: this.$store.state.data.description.yAxis,
          series: this.$store.state.data.description.series
        });
      }
    },
    computed: {},
    created () {
    },
    mounted () {
      if (!this.$store.state.widgets.list[this.index].configuration)
        this.$store.state.widgets.list[this.index].configuration = this.$store.state.widgets.types[this.type].subtypes[this.subtype].configuration
      this.drawChart();
    },
    updated () {
      if(this.subtype!==this.$store.state.widgets.list[this.index]){
        this.$store.state.widgets.list[this.index].subtype = this.subtype;
        this.$store.state.widgets.list[this.index].configuration = this.$store.state.widgets.types[this.type].subtypes[this.subtype].configuration;
      }
      //TODO update avec form
      this.drawChart();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .highcharts-credits {
    display: none;
  }
</style>
