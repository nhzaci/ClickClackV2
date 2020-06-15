<template>
  <v-app-bar
    app
    color="primary"
    flat
  >
    <v-row align="center" justify="center">
      <v-toolbar-title>ClickClack</v-toolbar-title>
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