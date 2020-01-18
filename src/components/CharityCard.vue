<template lang="html">
  <div class="column is-half-desktop is-full-tablet">
    <div class="columns is-vcentered is-mobile is-multiline">
      <div class="column is-3-tablet is-full-mobile">
        <figure class="image is-240x240">
          <img :src="charity.imageLink" />
        </figure>
      </div>
      <div class="column is-9-tablet">
        <h5 class="title is-6">{{ charity.name }}</h5>
        <div class="content has-text-left-tablet">
          <p>{{charity.text}}</p>
          <div class="button is-success" @click="goToSite(charity.link)">
            Go to site
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'charity-card',
  props: {
    charity: {
      imageLink: String,
      text: String,
      name: String,
      link: String
    }
  },
  methods: {
    goToSite(link) {
      window.open(link, "_blank");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
