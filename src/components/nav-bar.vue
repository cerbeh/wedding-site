<template lang="html">
  <div class="">
      <a-tabs defaultActiveKey="1">

        <a-tab-pane tab="Tab 1" key="1">
          <router-link to="/">Home</router-link>
        </a-tab-pane>

        <a-tab-pane tab="Tab 2" key="2" forceRender>
          <router-link to="/ceremony">Ceremony</router-link>
        </a-tab-pane>

        <a-tab-pane tab="Tab 3" key="3">
          <router-link to="/party">Party</router-link>
        </a-tab-pane>

        <a-tab-pane tab="Tab 4" key="4">
          <router-link to="/charities">Charities</router-link>
        </a-tab-pane>

      </a-tabs>
  </div>
</template>

<script>

// const { TabPane, TabContent } = Tabs


export default {
  name: 'NavBar',
  // components: { Tabs.name, Tabs },
  methods: {
    // callback(key) {
    //   console.log(key)
    // }
  }
}
</script>
