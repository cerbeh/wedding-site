<template lang="html">
  <p>
    <span class="has-text-weight-semibold">{{header}}</span>
    <template v-if="typeof content === 'string'">
        {{content}}
    </template>
    <template v-if="Array.isArray(content)">
      <div :class="{ 'is-inline': index === 0 }" v-for="(line, index) in content" :key="`paragraph-line-${index}`">
        {{line}}
      </div>
    </template>
  </p>
</template>

<script>
export default {
  props: {
    header: String,
    content: [ String, Array ]
  },
  name: 'paragraph'
}
</script>

<style lang="css" scoped>
</style>
