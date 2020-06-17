<template>
  <v-app>

    <NavBar />

    <v-main>
      <router-view></router-view>
      <SpeedDial />
      <HelpDialog />
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import HelpDialog from '@/components/HelpDialog'
import SpeedDial from '@/components/SpeedDial'

export default {
  name: 'App',
  metaInfo: {
    titleTemplate: '%s | ClickClack',
    link: [
      { rel: 'favicon', href: 'favicon.ico'}
    ]
  },
  components: {
    NavBar,
    Footer,
    HelpDialog,
    SpeedDial
  },
};
</script>
