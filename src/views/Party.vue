<template lang="html">
  <section class="container">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title is-centered">
          <h2 class="title is-3">
            The Party or: The most important part of the day!
          </h2>
        </div>
      </div>
        <div class="card-image">
          <figure class="image is-5by4">
            <img
            src="http://pubonthepark.com/wp-content/uploads/2017/06/Bears-Den.jpg"
            alt="image of the bears den in pub on the park">
          </figure>
        </div>
      <div class="card-content">
        <h3 class="title">6pm - Late</h3>
        <div class="content">
          <p>
            <span class="has-text-weight-semibold">Where?</span>
            The Pub on the Park, 19 Martello Street, London, E8 3PE
          </p>

          <p>
            <span class="has-text-weight-semibold">What’s occurring?</span>
            Dancing and drinking. We will provide nibbles, cake and a glass of bubbles (if you're early enough!); if you want to buy dinner they serve your traditional pub fare at the bar <a href="http://pubonthepark.com/wp-content/uploads/2019/11/LATEST-DAILY-MENU-16.09.19.pdf" target="_blank">(menu here)</a>
          </p>

          <p>
            <span class="has-text-weight-semibold">Dress code:</span>
            Whatever makes you happiest!
          </p>

          <p>
            <span class="has-text-weight-semibold">Parking:</span>
            There is very limited pay and display available in the surrounding area. If at all possible, please take public transport!
          </p>
          <Transport />

        </div>
      </div>
      <div class="card-footer">
        <div class="card-footer-item">
          There is a minimum spend for us on the bar so...

        </div>
        <div class="card-footer-item">
          <span class="has-text-weight-semibold">Bring your drinking shoes</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Transport from '@/components/Transport'

export default {
  name: 'party',
  components: { Transport }
}
</script>

<style lang="css" scoped>
</style>
