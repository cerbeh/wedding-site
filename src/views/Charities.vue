<template lang="html">
  <section class="section">
      <p class="title is-4 has-text-left">
        We don’t want any wedding gifts, but if you feel the need to spend some money please donate to one of the following charities that support causes close to our heart:
      </p>
    <div class="columns is-multiline">
      <Charity
      v-for="(charity, index) in charities"
      :key="charity.name + '-' + index"
      :charity="charity"
      />
    </div>
  </section>
</template>

<script>
import Charity from '@/components/CharityCard'

export default {
  name: 'charity',
  data() {
    return {
      charities: [
        {
          name: 'Help Refugees',
          text: 'Help Refugees goes where the need is greatest. They fill the gaps and act where others won’t. Sometimes that means Search & Rescue boats. Sometimes it means providing food or safe, secure long-term housing. They are pioneers in a new movement in humanitarian aid: fast, flexible, and transparent.',
          link: 'https://helprefugees.org/',
          imageLink: 'https://helprefugees.org/wp-content/uploads/2019/01/blackred-250-min.png'
        },
        {
          name: 'Access All Areas',
          text: 'Award-winning, urban, disruptive performance by learning disabled and autistic artists. \n A charity close to us as Millie volunteered with them for a few years',
          imageLink: 'https://images.squarespace-cdn.com/content/55844d15e4b0550c95a92f5a/1544463987298-3Y2IPHPSFWOU4LMD2Y1H/AAA+Logo+Web.png?content-type=image%2Fpng',
          link: 'http://www.accessallareastheatre.org/'
        },
        {
          name: 'Planting Peace',
          text: 'Planting Peace is a global nonprofit organization founded for the purpose of spreading peace in a hurting world. Our projects focus on a range of humanitarian and environmental initiatives, including our multi-national deworming campaign; a network of orphanages and safe havens in developing countries; LGBTQ rights advocacy; Equality House and Transgender House; and rainforest conservation efforts in the Amazon.',
          imageLink: 'https://www.plantingpeace.org/wp-content/uploads/2017/04/planting_peace_logo-web.png',
          link: 'https://www.plantingpeace.org/'
        },
        {
          name: 'Mermaids',
          text: 'Working to raise awareness about gender nonconformity in children and young people amongst professionals and the general public, Mermaid campaign for the recognition of gender dysphoria in young people and call for improvements in professional services.',
          imageLink: 'https://pbs.twimg.com/profile_images/1185111038779367424/KSipB_ed_400x400.jpg',
          link: 'https://www.mermaidsuk.org.uk/'
        },
        {
          name: 'The Trussel Trust',
          text: 'The Trussel Trust’s aim is to end hunger and poverty in the UK. They support a nationwide network of food banks and  provide emergency food and support to people locked in poverty, and campaign for change to end the need for food banks in the UK.',
          imageLink: 'https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/p960x960/21367018_10155186103176919_8964231172165201477_o.png?_nc_cat=111&_nc_ohc=cs4VcYYfyNMAQmTNu2wFOuvd42TmXOSYYrp5OdfAtHm_pY0qomZopyF5w&_nc_ht=scontent-lht6-1.xx&oh=4ee549763fa19acc45052b77931b8101&oe=5E81E505',
          link: 'https://www.trusselltrust.org/'
        },
        {
          name: 'StreetLink',
          text: 'StreetLink exists to help end rough sleeping by enabling members of the public to connect people sleeping rough with the local services that can support them.',
          imageLink: 'https://www.streetlink.org.uk/resource/1571047196000/Street/streetlink/streetlink/logo.svg?orgId=00D0Y000000YcZY',
          link: 'https://www.streetlink.org.uk/'
        }
      ]
    }
  },
  components: { Charity }
}
</script>

<style lang="css" scoped>
</style>
