<template lang="html">
    <b-button expanded @click="cloudinaryWidget.open()" type="is-info" rounded>Upload Files</b-button>
</template>

<script>
export default {
  data() {
    return {
      cloudinaryWidget: null,
    }
  },
  mounted() {
    this.cloudinaryWidget = cloudinary.createUploadWidget({
      cloudName: 'dhg3jfquj',
      uploadPreset: 'ml_default',
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        this.$buefy.toast.open({
          message: 'Image uploaded successfully!',
          type: 'is-success'
        })
      }
    })
  },
}
</script>

<style lang="css" scoped>
</style>
