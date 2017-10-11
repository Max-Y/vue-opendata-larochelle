<template>
  <div class="mdl-layout__drawer mdl-color--white mdl-color-text--blue-grey-50">
    <header class="">
      <img src="./assets/img/logo.png" alt="" width="100%">
    </header>
    <nav class="mdl-navigation mdl-color--white">
      <router-link
        :to="{name: 'fakesite'}"
        :event="['mousedown', 'touchstart']"
        class="mdl-navigation__link"
        href="">
        <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
          home
        </i>
        Home
      </router-link>
      <router-link
      class="mdl-navigation__link"
      tag="a"
      :to="{name: 'map'}"
      :event="['mousedown', 'touchstart']">
        <i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">
          map
        </i>
      Map
      </router-link>
      <div class="menu-separator"></div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'app-menu',
    created(){

    },
    components : {},
    computed: mapGetters([
      'userPicture'
    ]),
    methods: mapActions([
    ]),
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .menu-separator{
    height : 1px;
    background-color: #f5f5f5;
  }
</style>
