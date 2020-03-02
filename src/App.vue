<template>
  <div id="app">

    <section class="hero is-danger is-medium" :class="[ showHome ? 'slidedown' : 'slideup']">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            MILLIE &AMP; MARTIN GET MARRIED
          </h1>
        </div>
      </div>
    </section>

    <b-tabs animated expanded size="is-large" @change="changeView">

      <b-tab-item :key="index" v-for="(view, index) in views">
        <h5 slot="header" class="is-uppercase">{{view}}</h5>
        <router-view :name="view"/>
      </b-tab-item>

    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeView: 0,
      views: [
        'home',
        /*
        'ceremony',
        'accomodation',
        'party',
        */
        'charities',
        'pictures'
      ]
    }
  },
  methods: {
    changeView(e) {
      this.activeView = e
    }
  },
  computed: {
    showHome() {
      return this.views[this.activeView] !== 'home'
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slideup, .slidedown {
  max-height: 0;
  overflow-y: hidden;
  -webkit-transition: max-height 0.5s ease-in-out;
  -moz-transition: max-height 0.5s ease-in-out;
  -o-transition: max-height 0.5s ease-in-out;
  transition: max-height 0.5s ease-in-out;
}
.slidedown {
  max-height: 50vh ;
}
</style>
