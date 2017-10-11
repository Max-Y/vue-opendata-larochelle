<template>
  <div is="mynetwork">
  </div>
</template>

<script>
  import vis from 'vis'
  import dataGraph from '../assets/data/data-graph.json'

  export default {
    name: 'graph',
    mounted() {
        var options = {
            nodes: {
                shape: 'dot',
                size: 30,
                font: {
                    size: 32
                },
                borderWidth: 2,
                shadow:true
            },
            edges: {
                width: 2,
                shadow:true
            }
        };

        var element = document.getElementById('mynetwork');
        console.log(element);
        return new vis.Network(element, dataGraph, options);
    }
  }
</script>

<style scoped>
body {
        color: #d3d3d3;
        font: 12pt arial;
        background-color: #ffffff;
    }

#mynetwork {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    border: 1px solid #444444;
    background-color: #dddddd;
}
</style>
