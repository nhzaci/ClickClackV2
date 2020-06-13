<template>
  <v-container class="primary ma-0 pa-0 fill-height" fluid>
    <v-row
      class="fill-height pa-2 pa-lg-5"
      justify="center"
      align="center"
    >
      <v-col cols="12" md="10" lg="8">
        <TypeTest />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TypeTest from '@/components/TypeTest'

export default {
  name: 'Home',
  components: {
    TypeTest
  }
}
</script>

<style lang="sass">
#input-field 
  height: 100%
  width: 100%
</style>
