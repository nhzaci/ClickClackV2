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
          color="accent"
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
      if (this.$cookies.get('user').totalCorrectChars) {
        let cookie = this.$cookies.get('user')
        cookie.totalCorrectChars = 0
        cookie.totalChar = 0
        cookie.totalTime = 0
        this.$cookies.set('user', cookie)
      }
      // Refresh browser to update
      window.location.reload()
    },
    toggleNightMode() {
      // Cache dark mode selection
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      let cookie = this.$cookies.get('user')
      cookie.dark = this.$vuetify.theme.dark
      this.$cookies.set('user', cookie)
    },
  },
  computed: {
    ...mapState(['dialog'])
  },
  created() {
    // Set dark mode boolean if initialised
    if (this.$cookies.get('user').dark) {
      this.$vuetify.theme.dark = this.$cookies.get('user').dark
    }
  }
}
</script>

<style lang="scss" scoped>

</style>