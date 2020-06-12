<template>
  <v-app>

    <NavBar />

    <v-main>
      <v-expand-transition>
        <router-view></router-view>
      </v-expand-transition>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
};
</script>
