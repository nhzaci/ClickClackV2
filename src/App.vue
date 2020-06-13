<template>
  <v-app>

    <NavBar />

    <v-main>
      <v-expand-transition>
        <router-view></router-view>
      </v-expand-transition>
      <SpeedDial />
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import SpeedDial from '@/components/SpeedDial'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    SpeedDial
  },
};
</script>
