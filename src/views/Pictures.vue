<template lang="html">
  <div class="section">
    <Uploader @image-uploaded="addNewImage" />
    <hr />
    <Images :urls="imageUrls" />
    <b-notification ref="loader" v-if="next_cursor" :closable="false"/>
  </div>

</template>

<script>
import Images from '@/components/Images'
import Uploader from '@/components/Uploader'

export default {
  name: 'pictures',
  components: { Images, Uploader },
  data() {
    return {
      imageUrls: [],
      next_cursor: null,
    }
  },
  async created() {
    await this.loadPictures()
  },
  mounted() {
    this.scroll();
  },
  methods: {
    addNewImage(info) {
      this.imageUrls.unshift(info.secure_url);
    },
    setState(data) {
      this.imageUrls = this.imageUrls.concat(
        data.resources.map(image => image.secure_url)
      )
      this.next_cursor = data.next_cursor || null
    },

    async loadPictures() {

      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.loader && this.$refs.loader.$el
      });

      try {
        const { data } = await this.$http.get(`/pictures${this.urlExtension}`);
        this.setState(data);
        loadingComponent.close();
      } catch (e) {
        loadingComponent.close();
        this.$buefy.toast.open({
          message: 'Error receiving images!',
          type: 'is-danger'
        })
      }
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && this.next_cursor) this.loadPictures()
      };
    }
  },
  computed: {
    urlExtension() {
      return this.next_cursor ? `/${this.next_cursor}` : ''
    }
  },
}
</script>

<style lang="css" scoped>
</style>
