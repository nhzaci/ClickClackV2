<template>
  <v-app-bar
    app
    color="primary"
    flat
  >
    <v-row align="center" justify="center">
      <v-toolbar-title>
        <span class="accent--text display-2">Click</span>
        <span class="contrast--text display-1">Clack</span>
      </v-toolbar-title>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    switchIcon() {
      return (this.$vuetify.theme.dark) ? "mdi-weather-night" : "mdi-white-balance-sunny"
    }
  }
}
</script>

<style lang="scss" scoped>

</style>