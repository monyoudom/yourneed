<template>
  <v-ons-page>
    <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo" src="@/assets/logo.svg" />
      </div>
    </v-ons-toolbar>
    <ons-page id="mypage">
       <div class="l_card__container" v-for="newfeed in newfeeds" v-bind:key="newfeed.index">
          <div class="l_img_container">
            <img class="l_profile" :src="newfeed.img"  alt=""/>
            <div class="l_span">
              <span class="c_name">Steve</span>
              <span class="c_position">Conslutant.</span>
            </div>
          </div>
          <p class="c_title">{{newfeed.title}}</p>
          <img class="l_posting_img" :src="newfeed.img" alt=""/>
          <div class="l_btn_container">
            <button v-on:click="detail(newfeed.content)">Read more</button>
          </div>
      </div>  
    </ons-page>
  </v-ons-page>
</template>

<script>

import { async } from 'q';
import { mapActions, mapGetters } from 'vuex'
import { create } from 'domain';

export default {
  name: 'NewsFeed',

  data :function() {
    return {
      newfeeds : this.$store.getters['newfeed']
    }
  },

  created: function() {
    console.log(this.$store.getters['newfeed'],"newfeed")
  },

  methods : {
    detail: function(content) {
        this.$router.push({
        name: 'detail',
        params: {
          content : content
        }
      })
    }
  }

}
</script>

<style scoped>

.l_card__container {
  background-color: white;
  border-radius: 10px;
  background: #fff;
	border: 1px solid;
	border-color: #e5e6e9 #dfe0e4 #d0d1d5;
	border-radius: 3px;
  min-height: 200px;
  margin-top: 10px;
}

.c_button {
    float: right;
}

.c_button button {
    color: white;
    font-size: 12px;
    margin-right: 5px;
    font-weight: bold;
}

.l_profile {
    border-radius: 100px;
    width: 50px;
    height: 50px;
}

.l_img__container {
    display: flex;
    flex-direction: row;
}

.l_span {
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
}

.l_posting__img {
    margin-top: 5px;
    border-radius: 5px;
    width: 373px;
    height: 182px;      
}

.l_text__content {
    text-align: justify;
}

.l_btn__container {
    text-align: center;
}

.l_btn__style {
    text-transform: uppercase;
    color: white;
    width: 200px;
    height: 30px;
    background-color: #393D46;
    border-radius: 50px;
    border-width: 0px;
}

.l_img_container {
    display: flex;
    padding: 12px;
}

.l_posting_img {
  width:  100%;
  height: auto;
}

.c_title {
    margin: 0px 0px 0px 0px;
    padding: 12px;
    text-align: left
}

.c_position {
    font-size: 10px;
}

.l_btn_container {
    position: relative;
    height: 40px;
}

.l_btn_container button {
    width: 96px;
    height: 24px;
    border: 1px solid #3e99fd;
    border-radius: 10px;
    color :  #3e99fd;
    background: white;
    position: relative;
    top: 5px;
}

.c_logo {
    width: 40px;
    height: 40px;
    padding-top: 8px;
    padding-left: 3px;
}

.c_icon__color {
  color: white;
}

.c_name {
  font-size: 15px;
  color: black;
  text-align: left;
}


</style>
