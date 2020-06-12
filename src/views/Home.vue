<template>
  <v-container class="primary ma-0 pa-0 fill-height" fluid>
    <v-row
      class="fill-height pa-2 pa-lg-5"
      justify="center"
      align="center"
    >
      <v-col cols="12" md="10" lg="8">
        <v-container class="secondary pa-2 pa-lg-5 elevation-10" fluid>
          <v-row>
            <v-col cols="12">
              <v-sheet
                height="100%"
                width="100%"
                :class="textSize"
                class="pa-2 primary--text"
                color="contrast"
                elevation="5"
              >
                {{ textBoxText }}
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" md="10">
              <v-sheet
                height="100%"
                width="100%"
                class="pa-2"
                :class="textSize"
                color="accent"
                elevation="5"
              >
                <input type="text" v-model="inputText" class="white--text" id="input-field" placeholder="Type Here">
              </v-sheet>
            </v-col>
            <v-col cols="4" md="2">
              <v-btn 
                tile 
                height="100%" 
                width="100%" 
                :class="buttonSize"
                color="accent" 
                elevation="5"
              >
                Restart
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    inputText: ''
  }),
  computed: {
    textBoxText() {
      return 'bunch of text for users to type right here is very good for people'
    },
    textSize() {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'headline' : 'subtitle-1' 
    },
    buttonSize() {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'subtitle-1' : 'subtitle-2' 
    }
  }
}
</script>

<style lang="sass">
#input-field 
  height: 100%
  width: 100%
</style>
