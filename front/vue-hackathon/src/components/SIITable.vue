<template>
  <div class="">
    <table class="mdl-data-table mdl-js-data-table fullwidth">
      <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">
          Champ
        </th>
        <th class="mdl-data-table__cell--non-numeric">
          Description
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(header,index) in this.$store.state.data.headers">
        <td class="mdl-data-table__cell--non-numeric">{{header.name}}</td><td class="mdl-data-table__cell--non-numeric">
        <input type="text" @keyup="updateHeaderLocal" :header="header" :index="index"></td>
      </tr>
      </tbody>
    </table>
    <br>
    <table class="mdl-data-table mdl-js-data-table fullwidth">
      <thead>
      <tr>
        <th :class="headerClass(header)" v-for="(header,index) in this.$store.state.data.headers"
            :key="index" @click="updateAgg(header.name)">{{header.name}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row,index) in this.$store.state.SIITable.rows" :key="index">
        <td :class="cellClass(index)" v-for="(cell,index) in row" :key="index">{{parse(index, cell)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  var SIITable = {
    name: 'SIITable',
    data () {
      return {
      }
    },
    methods: {
      ...mapActions({
        updateAgg : 'updateAgg',
        updateHeader : 'updateHeader'
      }),
      updateHeaderLocal(event){

      },
      headerClass(label) {
        return {
          'mdl-data-table__cell': ['long','integer','byte','short','double','float','half_float','scaled_float'].indexOf(label.type)>-1,
          'mdl-data-table__cell--non-numeric': label.type == "date" || label.type == "text",
          'agg': label.name == this.$store.state.data.agg,
          'interactive': true,
        }
      },
      cellClass(index) {
        return {
          'mdl-data-table__cell': ['long','integer','byte','short','double','float','half_float','scaled_float'].indexOf(this.$store.state.data.headers[index].type)>-1,
          'mdl-data-table__cell--non-numeric': this.$store.state.data.headers[index].type == "date" || this.$store.state.data.headers[index].type == "text",
        }
      },
      parse(index, cell){
        switch (this.$store.state.data.headers[index].type) {
          case 'long':
          case 'integer':
          case 'byte':
          case 'short':
          case 'double':
          case 'float':
          case 'half_float':
          case 'scaled_float':
            return Number(cell);
          case 'date':
            return new Date(cell).toLocaleDateString();
          default:
            return cell;
        }
      }
    },
    computed: {},
    mounted(){

    }
  }

  export default SIITable
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullwidth {
    width: 100%;
  }

  td,th{
    max-width : 75px !important;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .agg{
    background-color: tomato;
  }

  th.interactive{
    cursor: pointer;
  }
  th.interactive:hover{
    background-color: salmon;
  }
</style>
