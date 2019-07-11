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
  data: function () {
    return {
       page : 1,
    }
  },
  methods : {
    ...mapActions({
       actionLoadNewFeed: 'getNewfeed',
    }),

    displaydetails() {
        setTimeout(() => {
           this.$router.push('home');
          },3000);   
      },
  },
  
  mounted: function () {
     this.actionLoadNewFeed(this.page).then(( data ) => {
        if(data) {
           this.displaydetails()
        } else {
           console.log("errror")
        }
     })
  },

}


</script>

