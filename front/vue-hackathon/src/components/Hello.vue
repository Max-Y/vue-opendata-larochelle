<template>
  <div class="hello">
    <button id="add-button" @click="create"
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
      <i class="material-icons">add</i>
    </button>

    <button id="test-data-button" @click="test_data"
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--teal-300">
      <i class="material-icons">autorenew</i>
    </button>

    <button id="test-data2-button" @click="test_data2"
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--teal-300">
      <i class="material-icons">add</i>
    </button>

    <button id="test-elastic-button" @click="test_elastic"
            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-color--blue-300">
      <i class="material-icons">build</i>
    </button>

    <div class="mdl-grid">
      <widget v-for="(widget, index) in this.$store.state.widgets.list" :index="index" :key="index"></widget>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Widget from './Widget'
  import elasticsearch from 'elasticsearch'
  import TickingService from '../services/TickingService';
  import TickingByCountryService from '../services/TickingByCountryService';

  export default {
    name: 'hello',
    components: {Widget},
    methods: {
      ...mapActions({
        create: 'create'
      }),
      test_data(){
          console.trace('test_data');
        TickingByCountryService.get()
          .catch(function(err) {
            // TODO : Mettre un notifier
            console.log('error', err);
          });
      },
      test_data2() {
        TickingByCountryService.get()
          .catch(function(err) {
            // TODO : Mettre un notifier
            console.log('error', err);
          });
      },
      test_elastic() {
        TickingService.get()
          .catch(function(err) {
            // TODO : Mettre un notifier
            console.log('error', err);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-button {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }

  #test-data-button {
    position: fixed;
    right: 50px;
    top: 100px;
  }

  #test-data2-button {
    position: fixed;
    right: 50px;
    top: 200px;
  }

  #test-elastic-button {
    position: fixed;
    right: 50px;
    top: 300px;
  }
</style>
