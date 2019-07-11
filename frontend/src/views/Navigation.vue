<template>
  <v-ons-navigator :page-stack="pageStack">
    <component v-for="page in pageStack" :is="page" :key="page.id" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>

import Home from '../views/Home'

export default {
  name: 'navigation',
  data() {
    return {
      pageStack: [Home]
    }
  },
}
</script>

<style>

</style>
