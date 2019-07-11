<template>
  <v-ons-page>
    <div class="l_warraper">
      <v-ons-toolbar id="mynav">
        <div class="center">
          <img class="c_logo__post" src="@/assets/logo.svg"/>
        </div>
      </v-ons-toolbar>
      <ons-list>
      <div class="l_card__textarea">
        <div class="c_card__textarea">
          <form>
            <v-ons-select style="width: 100%;margin-bottom:30px"
            v-model="selectedItem"
            >
            <option v-for="item in items" :value="item.value" :key="item.id">
              {{ item.text }}
            </option>
          </v-ons-select>
            <input class="c_question" placeholder="Your problem quesiton?" v-model="question"/>
            <div class="c_textarea">
              <textarea v-model="problem" placeholder="Share your problem detail to reach our expert conslutant"></textarea>
            </div>
          <div class="l_btn_container">
            <button v-on:click="postProblem()">Share now</button>
          </div>
          </form>
        </div>
      </div>
      </ons-list>
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
      question: null,
      problem : null,
      isLoading : false,
      modalVisible: false,
      timeoutID: 0,
      toastVisible: false,
      alertDialogVisible: false,
      message : 'You are not able to post any question right now',
      items: [
        { text: 'General', value: 'general' },
        { text: 'Consultant', value: 'consultant' }
      ],
      selectedItem: 'general'
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
          if (localStorage.problem != null) {
            localStorage.problem = window.btoa(this.problem)
            this.message = "Wait till they reply,After you close this question, then you can able to ask other question"
            this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
          } else {
            this.message = "Your question have reach our Consultan!"
            this.modalVisible = true;
            var query = { send:"False", token: localStorage.problem ,problem: this.problem, platform:"iOS"}
            this.actionPost(query).then((data) => {
              this.timeoutID = setTimeout(() => this.modalVisible = false, 1000);
              if (this.getPost) {
                  this.timeoutID = setTimeout(() => this.toastVisible = true, 1000);
              } else {
                  this.timeoutID = setTimeout(() => this.alertDialogVisible = true)
              }
            })
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
    localStorage.problem  = null
  }
};


</script>



<style scoped>

.l_warraper {
  background-color: #FFF;
  width: 100%;
  height: 100%;
}

.c_toolbar {
  background-color: #393d46;
}

.l_card__textarea {
  width: 100%;
  margin-top: 50px;
}

.c_card__textarea {
  padding: 20px;
}

.c_textarea {
  width: 100%;
  margin-top: 20px;
}

.c_question {
  width: 90%;
  height: 40px;
  font-size: 14px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #eee;
}

.c_textarea textarea {
  width: 90%;
  height: 340px;
  font-size: 14px;
  padding: 16px;
  height: 360px;
  border-radius: 10px;
  border: 1px solid #eee;

}

.l_button {
  width: 100px;
  top: 20px;
  left: 40%;
  position: relative;
}

.c_icon {
  width: 20%;
  height: 100px;
  background-color: #393939;
}

.c_logo__post {
    width: 40px;
    height: 40px;
    position: relative;
    right: 0px;
    top: 2px;
}

.l_btn_container {
    position: relative;
    height: 40px;
    left:39%;
    
}

.l_btn_container button {
    font-size: 12px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 160px;
    height: 42px;
    border-radius: 21px;
    background: #393939;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    margin-top: 10px;
    position: relative;
    right: 30px;
  }
</style>
