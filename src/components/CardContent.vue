<template lang="html">
  <div class="content">
    <Paragraph v-for="(text, index) in paragraphs" :header="text.header" :content="text.content" :key="`paragraph-${index}`"/>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph'

export default {
  name: 'card-content',
  props: { paragraphs: Array },
  components: { Paragraph }
}
</script>

<style lang="css" scoped>
</style>
