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
          color="secondary"
          v-on="on"
          @click="setDialog(!dialog)"
        >
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </template>
      <span>
        Help
      </span>
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          color="contrast"
          v-on="on"
          @click="toggleNightMode"
        >
          <v-icon v-if="!$vuetify.theme.dark">mdi-weather-night</v-icon>
          <v-icon v-else>mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span>
        Toggle Night Mode
      </span>
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          color="accent"
          v-on="on"
          @click="resetAverage"
        >
          <v-icon>mdi-speedometer</v-icon>
        </v-btn>
      </template>
      <span>
        Reset Average Performance
      </span>
    </v-tooltip>


  </v-speed-dial>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    fab: false,
  }),
  methods: {
    ...mapMutations(['setDialog']),
    resetAverage() {
      localStorage.totalCorrectChars = 0
      localStorage.totalChar = 0
      localStorage.totalTime = 0
      // Refresh browser to update
      window.location.reload()
    },
    toggleNightMode() {
      // Cache dark mode selection
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark', this.$vuetify.theme.dark)
    },
  },
  computed: {
    ...mapState(['dialog'])
  },
}
</script>

<style lang="scss" scoped>

</style>