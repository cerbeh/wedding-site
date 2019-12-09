<template>
  <div id="app">

    <section class="hero is-danger is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            MILLIE &AMP; MARTIN GET MARRIED
          </h1>
        </div>
      </div>
    </section>

    <b-tabs animated expanded size="is-large">

      <b-tab-item :label="view.tabName" :key="index" v-for="(view, index) in views">
        <router-view :name="view.routeName"/>
      </b-tab-item>

    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      views: [
        {tabName: 'HOME', routeName: 'home'},
        {tabName:'CEREMONY', routeName: 'ceremony'},
        {tabName: 'PARTY', routeName: 'party'},
        {tabName: 'CHARITIES', routeName: 'charities'},
        {tabName: 'ACCOMODATION', routeName: 'accomodation'}
      ]
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
</style>
