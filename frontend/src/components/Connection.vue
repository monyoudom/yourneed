<template>
   <v-ons-page>
     <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo" src="@/assets/logo.svg" />
      </div>
    </v-ons-toolbar>
    <ons-page > 
      <div class="center">
        <img class="c_no__internet" src="@/assets/no-wifi.svg"/>
      </div>
      <div class="center">
        <ons-button class="l_button">Refress</ons-button>
      </div>
   </v-ons-page>
</template>

<script>
export default {
  name: 'connection',

}
</script>

<style>

.c_no__internet {
  width: 50px;
  height: 10px;
}

</style>
