<template lang="html">
  <div class="section columns is-multiline is-vcentered is-centered">
    <figure class="image column is-3" v-for="url in urls" @click="loadModal(url)">
      <img :src="url">
    </figure>
  </div>
</template>

<script>
import ImageModal from '@/components/ImageModal'

export default {
  props: ['urls'],
  methods: {
    loadModal(url) {
      this.$buefy.modal.open({
        parent: this,
        component: ImageModal,
        props: {
          imageUrl: url
        },
        trapFocus: true
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
