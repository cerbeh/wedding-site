<template lang="html">
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="imageUrl">
      </figure>
    </div>

  </div>
</template>

<script>
export default {
  name: 'image-modal',
  props: ['imageUrl']
}
</script>

<style lang="css" scoped>
</style>
