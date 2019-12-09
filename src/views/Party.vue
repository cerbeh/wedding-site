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
      <v-breakpoint>
        <div slot-scope="scope">
          <div class="card-image" v-if="scope.isSmall || scope.noMatch">
            <figure class="image is-5by4">
              <img
              src="http://pubonthepark.com/wp-content/uploads/2017/06/Bears-Den.jpg"
              alt="image of the bears den in pub on the park">
            </figure>
          </div>

          <div class="card-image is-inline">
            <figure class="image is-128x128" v-if="scope.isMedium">
              <img src="http://pubonthepark.com/wp-content/uploads/2017/06/Bears-Den.jpg" alt="image of the bears den in pub on the park">
            </figure>

            <figure class="image is-128x128" v-if="scope.isMedium">
              <img src="http://pubonthepark.com/wp-content/uploads/2017/06/Bears-Den.jpg" alt="image of the bears den in pub on the park">
            </figure>
          </div>

        </div>
      </v-breakpoint>
      <div class="card-content">
        <h3 class="title">6pm - Late</h3>
        <div class="content">
          <p>
            <span class="has-text-weight-semibold">Where?</span>
            19 Martello Street, London, E8 3PE
          </p>

          <p>
            <span class="has-text-weight-semibold">What’s occurring?</span>
            Dancing and drinking. We will provide nibbles, cake and a glass of bubbles; if you want to buy dinner they serve your traditional pub fare at the bar (menu here).
          </p>

          <p>
            <span class="has-text-weight-semibold">Dress code:</span>
            Whatever makes you happiest!
          </p>

          <p>
            <span class="has-text-weight-semibold">Parking:</span>
            There is very limited pay and display available in the surrounding area. If at all possible, please take public transport!
          </p>
          <p>
            <span class="has-text-weight-semibold">Buses:</span>
            30, 55, N55, 254, 106, 236, 254, N254, 276, 277, 394, D6, W15
          </p>
          <p>
            <span class="has-text-weight-semibold">Overground:</span>
            Hackney Central, London Fields, Cambridge Heath
          </p>
          <p>
            <span class="has-text-weight-semibold">Underground:</span>
            Bethnal Green (central line), and then a 254, 106 or D6
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VBreakpoint } from 'vue-breakpoint-component'

export default {
  components: { VBreakpoint }
}
</script>

<style lang="css" scoped>
</style>
