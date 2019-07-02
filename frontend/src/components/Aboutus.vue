<template>
  <v-ons-page>
    <ons-page>
      <div class="l_warraper" >
        <div class="center">
          <h5 style="color:#fff">About us</h5>
        </div>
        <div class="right">
          <img class="c_img_aboutus" src="@/assets/logo.svg"/>

          <blockquote class="c_mission"> " In life,we may fact a lof of problem,But what ever might seem While there is life,there is hope.Yourneed we believe,to solve your personal problem "
          </blockquote>
        </div>
         <h5 class="c_copy">&copy; Copy right by Yourneed</h5>
      </div>
    </ons-page>

  </v-ons-page>
</template>

<script>

export default {
  name: 'Aboutus',
  data: {
      query : "testong"
  }, 

}
</script>


<style scoped>

.l_warraper {
  overflow: hidden;
  background-color: #393D46;
  width: 100%;
  height: 100%;
}

.c_logo {
    width: 40px;
    height: 40px;
}

.c_toolbar {
  background-color: #393D46;
}

.c_yourneed__quot {
  color: #ffffff;
  font-size: 15px;
}

.c_img_aboutus {
  width: 100px;
  height: 100px;
}

.c_mission {
  font-weight: bold;
  font-size: 15px;
  text-align: justify;
  color: #ffffff;
  padding:10px
}

.c_copy {
  color: #ffffff;
  position: relative;
  top: 40%;
}

</style>
