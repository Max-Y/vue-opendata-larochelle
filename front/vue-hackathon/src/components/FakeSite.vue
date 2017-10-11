<template>
  <div class="fakesite">
    <router-link class="button-1"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_jour_origine', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-2"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_mois_origine', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-3"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_mois_tarif', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-4"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_annee_tarif', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-5"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_jour_origine', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-6"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_jour_origine', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-7"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-agenda' , table: 'opendata-agenda', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-8"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_annee_origine', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
    <router-link class="button-9"
                 tag="a"
                 :to="{name: 'home', params: { categorie: 'opendata-billetterie' , table: 'opendata-entree_musee_par_jour_tarif', datatype: 'elastic'}}"
                 :event="['mousedown', 'touchstart']">
      Visualiser
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'fakeSite',
    components : {},
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fakesite{
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('../assets/img/fond_site_opendata.jpg');
    background-size: 100%;
    background-position: center;
  }

  a{
    position: fixed;
    z-index: 9999;
    background-color: #3b8bd4;
    border-radius: 2px;
    padding: 6px;
    line-height: 13px;
    text-decoration: initial;
    color: white;
  }

  .button-1{
    top:59.1%;
    left: 80%;
  }

  .button-2{
    top:59.1%;
    left: 62%;
  }

  .button-3{
    top:59.1%;
    left: 45%;
  }

  .button-4{
    top:25%;
    left: 80%;
  }

  .button-5{
    top:25%;
    left: 62%;
  }

  .button-6{
    top:25%;
    left: 45%;
  }

  .button-7{
    top:93.2%;
    left: 80%;
  }

  .button-8{
    top:95.5%;
    left: 62%;
  }

  .button-9{
    top:93.2%;
    left: 45%;
  }

</style>
