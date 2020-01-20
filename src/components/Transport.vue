w<template lang="html">
  <div>
    <Paragraph v-for="(text, index) in paragraphs" :header="text.header" :content="text.content" :key="`paragraph-transport-${index}`"/>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph'
export default {
  data() {
    return {
      paragraphs: [
        { header: 'Buses: ', content: '277, 254, 106, 55, 30, 359, 276, W15'},
        { header: 'Overground: ', content: 'Hackney Central, London Fields, Cambridge Heath' },
        { header: 'Underground: ', content: 'Bethnal green, and then a 254 or 106'}
      ]
    }
  },
  components: { Paragraph }
}
</script>

<style lang="css" scoped>
</style>
