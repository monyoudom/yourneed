<template>
   <div class="l_wrapper">
    <h1>Welcome home</h1>
  </div>
  
</template>

<script>
import APIClient from '../api/APIClient'

export default {
  name: 'home',
  data: {
      query : "testong"
  },
  created () {
    APIClient.query(this.query).then(res => {
        this.$store.dispatch('setRepository', res.data.results)
      })

    APIClient.post(this.query).then(res => {
        console.log(res,"+++")
        this.$store.dispatch('setRepository', res.data.results)
      })
  },
  methods : {
    
  }


}
</script>

<style scoped>



</style>
