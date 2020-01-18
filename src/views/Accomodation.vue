<template lang="html">
  <div class="card">
    <div class="card-header">
      <h1 class="title card-header-title is-centered">Accomodation</h1>
    </div>
    <div class="card-content">
      <CardContent :paragraphs="paragraph"/>
      <div class="columns">
        <div class="column" v-for="hotel in accomodation" :key="hotel.name">
          <div class="card" @click="openLink(hotel.link)">
            <div class="card-image hotel-card has-text-centered">
              <figure class="image is-inline-block">
                <img :src="hotel.logo" :alt="hotel.name">
              </figure>
            </div>
            <div class="card-content">
              <h2 class="subtitle">{{hotel.name}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardContent from '@/components/CardContent'
export default {
  data() {
    return {
      paragraph: [{
        content: [
          'We\'ve grabbed the links for the local TravelPremierLodgeInn.',
          'Also for anyone feeling extra specialfancy the East London Hotel.',
          'There will be plenty more in the area if these are not up to your taste!'
        ]
      }],
      accomodation: [
        {
          name: 'Premier Inn, Hackney',
          link: 'https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-hackney.html?ARRdd=28&ARRmm=02&ARRyyyy=2020&NIGHTS=1&ROOMS=1&ADULT1=1&CHILD1=0&COT1=0&INTTYP1=DB&BRAND=PI',
          logo: 'https://www.premierinn.com/content/dam/pi/websites/hotelimages/gb/en/L/LONHAC/LONHAC%201.jpg'
        },
        {
          name: 'Travelodge, Hackney',
          link: 'https://www.travelodge.co.uk/hotels/597/London-Hackney-hotel?checkIn=28/02/2020&checkOut=29/02/2020&rooms[0][adults]=1&rooms[0][children]=0',
          logo: 'https://www.travelodge.co.uk/sites/default/files/styles/c12/public/GB0871_LONDON_HACKNEY_EXTERIOR_2208.jpg'
        },
        {
          name: 'Travelodge, Bethnal Green',
          link: 'https://www.travelodge.co.uk/hotels/571/London-Bethnal-Green-hotel?checkIn=28/02/2020&checkOut=29/02/2020&rooms[0][adults]=1&rooms[0][children]=0',
          logo: 'https://www.travelodge.co.uk/sites/default/files/styles/c12/public/GB0842_London_Bethnal_Green_EXTERIOR.jpg' },
        {
          name: 'The East London Hotel, Bethnal Green',
          link: 'https://www.theeastlondonhotel.com/',
          logo: 'https://r-cf.bstatic.com/images/hotel/max1024x768/160/160932160.jpg'
        },
      ]
    }
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    }
  },
  components: { CardContent }
}
</script>

<style lang="css" scoped>
  .hotel-card {
    min-height: 35vh;
  }
</style>
