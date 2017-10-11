<template>
  <header class="mdl-layout__header mdl-color--light-blue-900 mdl-color-text--grey-100">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Opendata Hackathon</span>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
        <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
          <i class="material-icons">search</i>
          <span class="hidden">{{this.$store.state.data.fields}}</span>
        </label>
        <basic-select :options="options"
                      :selected-option="item"
                      placeholder="Rechercher"
                      @select="onSelect"
                      class="custom-select">
        </basic-select>
      </div>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
        <li class="mdl-menu__item">Mentions légales</li>
      </ul>
    </div>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.19.1/vis.min.css" rel="stylesheet" type="text/css"/>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import elasticsearch from 'elasticsearch';
  import {BasicSelect} from 'vue-search-select'

  export default {
    name: 'app-header',
    components: {BasicSelect},
    computed: mapGetters([]),
    methods: {
      ...mapActions({
        updateFieldParam: 'updateFieldParam',
      }),
      autocomplete(){
        console.log(this.field);
      },
      onSelect (item) {
        this.item = item;
        this.updateFieldParam(item.text);
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }
    },
    data () {
      return {
        field: '',
        options: [],
        searchText: '', // If value is falsy, reset searchText & searchItem
        item: {
          value: '',
          text: ''
        }
      }
    },
    updated(){
      let options = [];
      for (let field in this.$store.state.data.fields)
        options.push({value: field, text: this.$store.state.data.fields[field]})
      this.options = options;
    },
    created(){
      let options = [];
      for (let field in this.$store.state.data.fields)
        options.push({value: field, text: this.$store.state.data.fields[field]})
      this.options = options;
      console.log(options);
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  span.hidden {
    display: none;
  }

  .custom-select{
    border-radius : 0px !important;
    display: flex;
    align-items: center!important;
    justify-content: center!important;
    position: absolute;
    right: 50%;
    height: 80% !important;
    width: 220px !important;
    padding: 0 !important;
    padding-top: 10px!important;
  }

  *::-webkit-scrollbar{
      width : 0;
  }
</style>
