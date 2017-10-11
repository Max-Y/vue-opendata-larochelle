<template>
    <div class="chart-wrapper mdl-cell">
      <div id="chart01" class="ct-chart ct-octave"></div>
      <div class="key">
        <div class="key-element key-series-a">Pierre</div>
        <div class="key-element key-series-b">Alex</div>
        <div class="key-element key-series-c">Florent</div>
        <div class="key-element key-series-d">Laurent</div>
      </div>
  </div>
</template>

<script>
  import Chartist from 'chartist'
  import D3plus from 'd3plus'
  import { mapGetters, mapActions } from 'vuex'

  var Chart =  {
    name: 'chart',
    props: ['index', 'type', 'dataChart'],
    computed: {
    },
    methods: {
      ...mapActions({
        createChart: 'createChart',
        assignLabel: 'assignLabel',
        assignClass: 'assignClass',
        simpleLine: 'simpleLine',
        horizontalBar: 'horizontalBar',
        pie: 'pie',
        treeMap: 'treeMap'
      }),
      // 1...3 / 1 is the smaller
      assignSize(size) {
        return this.assignClass({size: size, index: this.index});
      },
      assignTypeDiagram() {
          console.log(this.type, this.dataChart)
        switch (this.$store.state.diagram.type[this.type]) {
          case this.$store.state.diagram.type.simpleLine:
              return new Chartist.Line('.ct-chart__simple_line', this.dataChart, this.$store.state.diagram.charts[this.index].options, this.$store.state.diagram.responsiveOptions);
          case this.$store.state.diagram.type.horizontalBar:
              return new Chartist.Bar('.ct-chart__horizontal_bar', this.dataChart, this.$store.state.diagram.charts[this.index].options, this.$store.state.diagram.responsiveOptions);
          case this.$store.state.diagram.type.pie:
              return new Chartist.Pie('.ct-chart__pie', this.dataChart, null, this.$store.state.diagram.responsiveOptions);
          case this.$store.state.diagram.type.treeMap:
            var visualization = D3plus.viz()
              .container(".ct-chart__tree-map")
              .data(this.dataChart)
              .type("tree_map")
              .id("name")
              .size("value")
              .draw()
            return;
        }
      }
    },
    created() {
        this.createChart(this.dataChart);
        switch (this.$store.state.diagram.type[this.type]) {
          case this.$store.state.diagram.type.simpleLine:
              return this.simpleLine(this.index);
          case this.$store.state.diagram.type.horizontalBar:
              return this.horizontalBar(this.index);
          case this.$store.state.diagram.type.pie:
              return this.pie(this.index);
          case this.$store.state.diagram.type.treeMap:
              return this.treeMap(this.index);
        }
    }
  }

  export default Chart
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chart-wrapper {
    display: inline-block
  }
  .key {
    font-size: 0.7rem;
    color: #555;
    padding: 0 30px 0 90px;
  }

  .key .key-element {
    width: 32%;
    display: inline-block;
    padding-left: 22px;
    box-sizing: border-box;
    position: relative;
  }

  .key .key-element:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: -2px;
    left: 0;
  }

  .key .key-element.key-series-a:before {
    background-color: #ada8b6;
  }

  .key .key-element.key-series-b:before {
    background-color: #61c9a8;
  }

  .key .key-element.key-series-c:before {
    background-color: #ffeedb;
  }

  .key .key-element.key-series-d:before {
    background-color: #a53860;
  }
</style>
