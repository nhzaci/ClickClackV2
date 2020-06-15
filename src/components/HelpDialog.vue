<template>
  <v-row justify="center">
    <!-- Dialog modal for help -->
    <v-dialog v-model="dialog" width="80%">
      <v-card
        color="primary"
        class="contrast--text"
      >
        <v-card-title>
          <h2>Help</h2>
        </v-card-title>
        <v-card-text>
          <h3>Game Functions</h3>
          <p class="font-italic">Shortcut: 'ESC' will restart the test in the text box</p>
          <ul>
            <li>On any key press in the input box, the time will start</li>
            <li>After the game is completed, a score in WPM and Accuracy will be presented</li>
            <li>The counter on the top right caches your average WPM and Accuracy across your attempts</li>
          </ul>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn 
            color="contrast" 
            class="primary--text" 
            tile 
            elevation="5" 
            @click="dialog=!dialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End of Dialog modal for help -->
  </v-row>
</template>

<script>
export default {
  computed: {
    dialog: {
      get () {
        return this.$store.state.dialog
      },
      set (bool) {
        this.$store.commit('setDialog', bool)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>