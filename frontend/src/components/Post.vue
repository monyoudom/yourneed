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
    <v-ons-toast :visible.sync="toastVisible" animation="ascend">
       Your problem have been share to our expert conslutant
      <button @click="toastVisible = false">Ok</button>
    </v-ons-toast>
    <v-ons-alert-dialog modifier="rowfooter"
      :title="'Warning'"
      :footer="{
        Okay: () => alertDialogVisible = false
      }"
      :visible.sync="alertDialogVisible"
    >
     {{message}}
    </v-ons-alert-dialog>
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
      toastVisible: false,
      alertDialogVisible: false,
      message : 'You are not able to post any question right now'
     }
   },
   methods : {
    ...mapActions({
       actionPost: 'postProblem',
    }),

    postProblem: function () {   

      if (this.problem != null) {
         if (this.problem.length < 30) {
          this.message = "Your question invalid!"
          this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
        } else {
          localStorage.problem = window.btoa(this.problem)
          if (localStorage.problem != null) {
            this.message = "Your question have reach our Consultan!"
            this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
          } else {
            this.modalVisible = true;
            var query = { send:"False", token: localStorage.problem ,problem: this.problem, platform:"iOS"}
            this.actionPost(query)
            this.timeoutID = setTimeout(() => this.modalVisible = false, 1000);
            if (this.getPost) {
              this.timeoutID = setTimeout(() => this.toastVisible = true, 1000);
            } else {
              this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
            }
          }
        }
      } else {
        this.message = "Please Enter your problem"
        this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
      }

    }
    
  },
  
  computed: {
    ...mapGetters({
       getPost: 'getPost',
    }),

  },

  created: function() {
    console.log(localStorage.problem,"")
  }
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
