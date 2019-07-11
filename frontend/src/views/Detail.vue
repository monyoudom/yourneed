<template>
  <v-ons-page>
    <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo__detail" src="@/assets/logo.svg" />
      </div>
      <div class="left">
        <!-- <v-ons-toolbar-button @click="back" ></v-ons-toolbar-button> -->
        <v-ons-back-button icon="ion-ios-arrow-left"  style="color:#fff" ></v-ons-back-button>
      </div>
    </v-ons-toolbar>
    <ons-list>
      <div class="c_header">
        <div class="c_title_detail">
          <img :src="profile"/>
          <div class="l_span">
            <span class="c_name_detail">{{firstName}} {{lastName}}</span>
            <span class="c_position_detail">{{position}}</span>
          </div>
        </div>
      </div>
      <div class="l_content">
        <div class="c_content">
          <h3>{{title}}</h3>
          <p>
           {{content}}
          </p>
        </div>
      </div>
     </ons-list>
  </v-ons-page>
</template>
<script>
import { create } from 'domain';

export default {
  name: "Detail",
  data () {
    return {
      content : localStorage.content,
      title : localStorage.title,
      firstName: localStorage.firstName,
      lastName: localStorage.lastName,
      profile: localStorage.profile,
      position : localStorage.position
    }
  },

};


</script>

<style scoped>

.c_header {
  color: #393939;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  width: 100%;

}

.c_title_detail {
  display: flex;
  text-align: left;
  padding: 22px 22px 0;
  align-items: center;
}

.c_title_detail img {
  border-radius: 100px;
  width: 50px;
  height: 50px;
}

.l_span {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
}

.c_position_detail {
  font-size: 10px;
  color: #333;
}

.c_name_detail {
  font-size: 15px;
  color: #333;
}

.l_content {
  padding: 20px;
  height: 100%;
}

.c_content p {
  font-size: 15px;
  text-align: justify;
  color: #333;
  padding: 10px;
}

.c_content h5 {
  color: white;
  text-align: left;
}

.c_icon__color {
  color: white;
}

.c_logo__detail {
    width: 40px;
    height: 40px;
    position: relative;
    right: 0px;
    top: 2px;
}

</style>
