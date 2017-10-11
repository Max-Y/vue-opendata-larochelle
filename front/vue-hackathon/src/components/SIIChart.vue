<template>
  <div>
  </div>
</template>

<script>
  import Chart from './Diagrams'
  import { mapGetters, mapActions } from 'vuex'

  var SIIChart =  {
    name: 'SIIChart',
    components: { Chart },
    data() {
      return {
        charts: []
      }
    },
    methods: {
      updateData(data) {
        this.charts = data;
        setTimeout(function () { this.updateCharts() }.bind(this), 30);
      },
      updateCharts() {
        var self = this;
        for (let index in self.$children) {
          var chart = self.$children[index];
          chart.assignSize(self.$children.length);
          chart.assignTypeDiagram(self.charts[index].toString());
        }
      }
    },
    mounted() {
        console.log('charts', this.charts);
      var self = this;
      for (let index in self.$children) {
        var chart = self.$children[index];
        chart.assignSize(self.$children.length);
        chart.assignTypeDiagram(self.charts[index].toString());
      }
    }
  }

  export default SIIChart
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>