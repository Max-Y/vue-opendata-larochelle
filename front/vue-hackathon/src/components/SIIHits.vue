<template>
  <div class="SIIHits">
    <span class="mdl-chip mdl-chip--contact">
    <i class="material-icons mdl-chip__contact mdl-color--light-blue-900 mdl-color-text--grey-100">insert_drive_file</i>
    <span class="mdl-chip__text">{{this.$store.state.SIIHits.total}}</span>
</span>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  var SIIHits =  {
    name: 'SIIHits',
    methods: {
      ...mapActions({
      }),
    },
    mounted(){
    }
  }

  export default SIIHits
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .SIIHits{
    padding: 15px;
  }
</style>
