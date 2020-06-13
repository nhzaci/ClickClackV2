<template>
  <v-speed-dial fixed bottom right>
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="accent darken-2"
        fab
        large
      >
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          color="contrast"
          v-on="on"
          @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
          <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
          <v-icon v-else>mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span>
        Toggle Night Mode
      </span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
  export default {
    data: () => ({
      fab: false
    })
  }
</script>

<style lang="scss" scoped>

</style>