<template>
  <v-ons-page>
    <div class="l_warraper">
      <v-ons-toolbar id="mynav">
        <div class="center">
          <img class="c_logo" src="@/assets/logo.svg"/>
        </div>
      </v-ons-toolbar>
      <div class="l_card__textarea">
        <div class="c_card__textarea">
          <form>
            <div class="c_textarea">
              <textarea v-model="problem" placeholder="Share your problem to reach our expert conslutant"></textarea>
            </div>
            <div class="center">
              <ons-button class="l_button" v-on:click="postProblem()">Share</ons-button>
            </div>
          </form>
        </div>
      </div>
     
    </div>    
    <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
      </p>
    </v-ons-modal>
  </v-ons-page>
  
</template>
<script>

import { async } from 'q';
import { mapActions, mapGetters } from 'vuex'
import { create } from 'domain';
import Loading from '../components/Loading'



export default {
  name: "post",
  components : {Loading},
   data : function () {
     return {
      problem : null,
      isLoading : false,
      modalVisible: false,
      timeoutID: 0,
      token : null
     }
   },
   methods : {
    ...mapActions({
       actionPost: 'postProblem',
    }),

    postProblem: function () {   
      this.modalVisible = true;
      this.timeoutID = setTimeout(() => this.modalVisible = false, 1000);
      var query = { send:"False", token: window.btoa(this.problem),problem: this.problem, platform:"iOS"}
      this.actionPost(query)
    }
    
    
  },
  
  computed: {
    ...mapGetters({
       getPost: 'getPost',
    }),

  },
};

var token_id = ""
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
