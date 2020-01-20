<template lang="html">
  <section class="container">
    <div class="card">
      <div class="card-header">
        <h1 class="title card-header-title is-centered">Ceremony</h1>
      </div>
      <div class="card-image">
        <figure class="image is-5by4">
          <img src="https://images.squarespace-cdn.com/content/v1/50992cbee4b0c49016e6d85c/1352983975758-G87YG997CGZEKPFWB08R/ke17ZwdGBToddI8pDm48kPhE_b-FKx_EcxRx4teFEVN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fL8LmMajxsBXeYxVzkYts3ds68Ud4HgM4ArFxmxGpI5hQ/Town+hall.jpg" alt="">
        </figure>
      </div>
      <div class="card-content">
        <h3 class="subtitle has-text-weight-bold">2 for 2.30 start</h3>
        <h4 class="subtitle is-6">Family are welcome to join us for the ceremony. <br/>
          (Sorry friends, you’ll have to sit this one out; but let’s face it- the party will be much more fun anyway!)</h4>

          <CardContent :paragraphs="paragraphs" />
          <Transport />
        </div>

      </div>
    </section>
  </template>

  <script>
  import CardContent from '@/components/CardContent'
  import Transport from '@/components/Transport'

  export default {
    data() {
      return {
        paragraphs: [
          { header: 'Where?', content: 'Hackney town hall, Mare St, London E8 1EA' },
          { header: 'After?', content: 'We will head back to Millie’s parents house nearby, for a delicious pasta buffet lunch before the party in the evening (please get in touch with any dietary requirements).'},
          {
            header: 'Parking?',
            content: [
              `Honestly? There’s very little. There is limited pay and display parking available in the surrounding area, or you may be able to park at Millie’s parents' house (10 mins walk away), space providing. Let us know if you would like a permit for the day. The same permit is also valid for streets local to the pub later in the evening.`,

              `If at all possible, please take public transport. Hackney Central is well connected via bus and overground, and the central line is a 15 minute bus journey away.`
            ]
          }
        ]
      }
    },
    components: { CardContent, Transport }
  }
  </script>

  <style lang="css" scoped>
  </style>
