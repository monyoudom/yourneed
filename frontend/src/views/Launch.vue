<template>
   <div>
     <loading></loading>
   </div>
</template>

<script>

import { async } from 'q';
import { mapActions, mapGetters } from 'vuex'
import { create } from 'domain';
import Loading from '../components/Loading'

export default {
  name: 'launch',
  components: {Loading},
  created () {
    this.displaydetails()
  },
  methods : {
    ...mapActions({
       actionLoadNewFeed: 'getNewfeed',
    }),

    displaydetails() {
        setTimeout(() => {
           this.$router.push('home');
          },2000);   
      }
  },
  
  mounted: function () {
     this.actionLoadNewFeed()
  },

  computed: {
    ...mapGetters({
       newfeeds: 'newfeed',
    }),

  },

}


</script>

