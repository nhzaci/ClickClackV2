import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

var darkBool = (localStorage.getItem('dark') == 'true') ? true : false

export default new Vuetify({
  theme: {
    dark: darkBool,
    themes: {
      light: {
        primary: "#fff4e3",
        secondary: "#ffcdab",
        accent: "#ffa45c",
        contrast: "#5d5d5a"
      },
      dark: {
        primary: "#071e3d",
        secondary: "#1f4287",
        accent: "#278ea5",
        contrast: "#21e6c1"
      }
    }
  }
});
