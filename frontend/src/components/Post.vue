<template>
  <v-ons-page>
    <div class="l_warraper">
      <v-ons-toolbar id="mynav">
        <div class="left">
          <img class="c_logo" src="@/assets/logo.svg"/>
        </div>
      </v-ons-toolbar>
      <div class="l_card__textarea">
        <div class="c_card__textarea">
          <div class="c_textarea">
            <textarea placeholder="Share your problem to reach our expert conslutant"></textarea>
          </div>
        </div>
      </div>
      <div class="center">
        <ons-button class="l_button">Share</ons-button>
      </div>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  name: "Post",
};
</script>

<style>

.l_warraper {
  background-color: #393d46;
  width: 100%;
  height: 100%;
}

.c_toolbar {
  background-color: #393d46;
}

.l_card__textarea {
  width: 100%;
}

.c_card__textarea {
  padding: 20px;
}

.c_textarea {
  width: 100%;
  margin-top: 50px;
}

.c_textarea textarea {
  width: 90%;
  height: 340px;
  font-size: 18px;
  padding: 16px;
  height: 360px;
  border-radius: 10px;
  border: 0;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
}

.l_button {
  width: 100px;
  position: relative;
}

.c_icon {
  width: 20%;
  height: 100px;
  background-color: #393939;
}

.c_logo {
    width: 40px;
    height: 40px;
    padding-top: 8px;
    padding-left: 3px;
}
</style>
