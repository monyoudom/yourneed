<template>
  <v-ons-page>
    <v-ons-tabbar :visible="true" :tabs="tabs" :index.sync="tabIndex">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Aboutus from '../components/Aboutus'
import NewsFeed from '../components/NewsFeed'
import Post from '../components/Post'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'home',
  data () {
    return {
      tabIndex: 0,
      tabs: [
        {
          icon: 'fa-home',
          page: NewsFeed,
        },
        {
          icon: 'fa-plus',
          page: Post,
        },
        {
          icon: 'fa-bars',
          page: Aboutus,
        }
      ]
    }
  },
  
  components: { 
    Aboutus, NewsFeed, Post 
  },
   
}
</script>

<style>


</style>
