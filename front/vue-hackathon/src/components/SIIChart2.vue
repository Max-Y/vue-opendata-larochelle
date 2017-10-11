<template>
  <div>
    <span>{{this.$store.state.SIIChart}}</span>
    <div v-if="" class="mdl-cell mdl-cell--12-col ct-chart__distributed_bar"></div>
    <div class="mdl-cell mdl-cell--12-col ct-chart__pie"></div>
    <div class="mdl-cell mdl-cell--12-col ct-chart__tree-map"></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Chartist from 'chartist'
  import D3plus from 'd3plus'

  var SIIChart2 = {
    name: 'SIIChart2',
    computed: {
      data() {
        return {}
      },
    },
    methods: {
        renderBar(){
          $('.ct-chart__distributed_bar').empty();
          new Chartist.Bar('.ct-chart__distributed_bar', {
            labels: this.$store.state.SIIChart.horizontalBar.labels,
            series: this.$store.state.SIIChart.horizontalBar.series
          }, {
            distributeSeries: true
          });
        },
      renderPie(){
        $('.ct-chart__pie').empty();
        var data = {
          labels: this.$store.state.SIIChart.horizontalBar.labels,
          series: this.$store.state.SIIChart.horizontalBar.series
        };

        var sum = function(a, b) { return a + b };
        var fct = function(value) { return Math.round(value / data.series.reduce(sum) * 100) + '%'; }
       
        var options = {
          labelInterpolationFnc: fct
        };

        var responsiveOptions = [
          ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode'
          }],
          ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
          }]
        ];

        new Chartist.Pie('.ct-chart__pie', data, null, responsiveOptions);
      },
      renderTreeMap(){
          $('.ct-chart__tree-map').empty();
        D3plus.viz()
          .container(".ct-chart__tree-map")
          .data(this.$store.state.SIIChart.treeMap)
          .type("tree_map")
          .id("name")
          .size("value")
          .draw()
      }
    },
    mounted() {
      this.renderBar();
      this.renderPie();
      this.renderTreeMap();

    },
    updated(){
      this.renderBar();
      this.renderPie();
      this.renderTreeMap();
    }
  }

  export default SIIChart2
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .SIIChart{
    min-height : 400px;
  }

  .ct-chart__distributed_bar {
    height: 450px;
  }

  .ct-chart__pie {
    height: 450px;
  }

  .ct-chart__tree-map {
    height: 50px;
  }

  span{
    display: none;
  }

  .d3plus_message{
    display: none;
  }

  .ct-label {
    font-size: 12px;
    font-weight: bold;
  }

  #d3plus_viz > #data > g:nth-child(1) > rect {
    fill: #3366CC;
  }

  #d3plus_viz > #data > g:nth-child(1) > text {
    fill: rgb(233, 215, 203);
  }

  #d3plus_viz > #data > g:nth-child(2) > rect {
    fill: #DC3912;
  }

  #d3plus_viz > #data > g:nth-child(2) > text {
    fill: rgb(101, 95, 67);
  }

  #d3plus_viz > #data > g:nth-child(3) > rect {
    fill: #FF9900;
  }

  #d3plus_viz > #data > g:nth-child(4) > rect {
    fill: #109618;
  }

  #d3plus_viz > #data > g:nth-child(5) > rect {
    fill: #990099;
  }

  #d3plus_viz > #data > g:nth-child(6) > rect {
    fill: #3B3EAC;
  }

  #d3plus_viz > #data > g:nth-child(7) > rect {
    fill: #0099C6;
  }

  #d3plus_viz > #data > g:nth-child(8) > rect {
    fill: #DD4477;
  }

  #d3plus_viz > #data > g:nth-child(9) > rect {
    fill: #66AA00;
  }

  #d3plus_viz > #data > g:nth-child(10) > rect {
    fill: #B82E2E;
  }

  #d3plus_viz > #data > g:nth-child(11) > rect {
    fill: #316395;
  }

  #d3plus_viz > #data > g:nth-child(12) > rect {
    fill: #994499;
  }

  #d3plus_viz > #data > g:nth-child(13) > rect {
    fill: #994499;
  }

  #d3plus_viz > #data > g:nth-child(14) > rect {
    fill: #a748ca;
  }

  .ct-series-a .ct-bar {
    stroke: #3366CC;
  }

  .ct-series-b .ct-bar {
    stroke: #DC3912;
  }

  .ct-series-c .ct-bar {
    stroke: #FF9900;
  }

  .ct-series-d .ct-bar {
    stroke: #109618;
  }

  .ct-series-e .ct-bar {
    stroke: #990099;
  }

  .ct-series-f .ct-bar {
    stroke: #3B3EAC;
  }

  .ct-series-g .ct-bar {
    stroke: #0099C6;
  }

  .ct-series-h .ct-bar {
    stroke: #DD4477;
  }

  .ct-series-i .ct-bar {
    stroke: #66AA00;
  }

  .ct-series-j .ct-bar {
    stroke: #B82E2E;
  }

  .ct-series-k .ct-bar {
    stroke: #316395;
  }

  .ct-series-l .ct-bar {
    stroke: #994499;
  }

  .ct-series-a, .ct-series-a > line, .ct-series-a > path {
    fill: #3366CC !important;
  }

  .ct-series-b, .ct-series-b > line, .ct-series-b > path {
    fill: #DC3912 !important;
  }

  .ct-series-c, .ct-series-c > line, .ct-series-c > path {
    fill: #FF9900 !important;
  }
 
  .ct-series-d, .ct-series-d > line, .ct-series-d > path {
    fill: #109618 !important;
  }

  .ct-series-e, .ct-series-e > line, .ct-series-e > path {
    fill: #990099 !important;
  }

  .ct-series-f, .ct-series-f > line, .ct-series-f > path {
    fill: #3B3EAC !important;
  }

  .ct-series-g, .ct-series-g > line, .ct-series-g > path {
    fill: #0099C6 !important;
  }

  .ct-series-h, .ct-series-h > line, .ct-series-h > path {
    fill: #DD4477 !important;
  }

  .ct-series-i, .ct-series-i > line, .ct-series-i > path {
    fill: #66AA00 !important;
  }
 
  .ct-series-j, .ct-series-j > line, .ct-series-j > path {
    fill: #B82E2E !important;
  }

  .ct-series-k, .ct-series-k > line, .ct-series-k > path {
    fill: #316395 !important;
  }

  .ct-series-l, .ct-series-l > line, .ct-series-l > path {
    fill: #994499 !important;
  }
</style>
