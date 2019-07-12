<template>
  <v-ons-page id="top_element">
    <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo__newfeed" src="@/assets/logo.svg" />
      </div>
      <div class="right">
        <v-ons-toolbar-button icon="ion-ios-bell" style="color:#fff"></v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <v-ons-pull-hook
      :action="loadItem"
      @changestate="state = $event.state">
      <span v-show="state === 'initial'"> Pull to refresh </span>
      <span v-show="state === 'preaction'"> Release </span>
      <span v-show="state === 'action'"> Loading... </span>
    </v-ons-pull-hook>
    <ons-page  id="container">
      <ons-list id="list" style="background-color:#eee;margin-top:50px;" onscro>
       <div class="l_card__container"  v-for="(newfeed, $index) in loadData" :key="$index">
          <div class="l_img_container">
            <img class="l_profile" :src="newfeed.profile"  alt=""/>
            <div class="l_span">
              <span class="c_name">{{newfeed.firstName}} {{newfeed.lastName}}</span>
              <span class="c_position">{{newfeed.position}}</span>
            </div>
          </div>
          <p class="c_title">{{newfeed.title}}</p>
          <img class="l_posting_img" :src="newfeed.img" alt=""/>
          <div class="l_btn_container">
            <button v-on:click="detail(newfeed.content,newfeed.title,newfeed.profile,newfeed.firstName,newfeed.lastName,newfeed.position)">Read more</button>
          </div>
      </div> 
      <infinite-loading 
        ref="infiniteLoading" 
        spinner="circle"
        @infinite="infiniteHandler"
        infinite-scroll-disabled="busy" 
        infinite-scroll-distance="9">
        <span slot="no-more">No more</span>
      </infinite-loading>
    </ons-list >
    </ons-page>
    <ons-fab position="bottom right" @click="goToTop" :style="{'display': display}">
      <ons-icon icon="fa-angle-up"></ons-icon>
    </ons-fab>
  </v-ons-page>
</template>

<script>

import { async } from 'q';
import { mapActions, mapGetters } from 'vuex'
import { create } from 'domain';
import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading';
import  Detail  from '../views/Detail'


export default {
  name: 'NewsFeed',
  components: {InfiniteLoading},
  props: ['pageStack'],
  data: function() {
    return {
      loadData :this.$store.getters['newfeed'],
      page : 1,
      state: 'initial',
      display : 'none'
    }
  },

  methods : {
    ...mapActions({
       actionLoadNewFeed: 'getNewfeed',
    }),
  
    detail: function(content,title,profile,firstName,lastName,position) {
      localStorage.setItem('content', content);
      localStorage.setItem('title', title);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('profile', profile);
      localStorage.setItem('position', position);
      this.pageStack.push(Detail);
     
    }, 

    infiniteHandler ($state) {
      console.log(this.loadData,"why+++")
       if(this.next != null  ) {
          setTimeout(() => {
            this.page += 1 
            this.actionLoadNewFeed(this.page).then((data) => {
              if(data) {
                this.newfeeds.forEach(element => {
                  console.log(element,"ele+++")
                  this.loadData.push(element)
                });
                $state.loaded();
                this.display = 'block'
              } else {
                $state.error
              }  
             }) 
      }, 1000) 
      } else {
          $state.complete()
      }  
    },

    loadItem(done) {
      setTimeout(() => {
        this.actionLoadNewFeed("1").then((data) => {
              if(data) {
                console.log("done")
              } else {
                console.log("erorr")
          }  
        }) 
        done();
      }, 400);
    }, 
    
    goToTop() {
        var options = {
          container: '#container',
          easing: 'ease-in',
          offset: -60,
          onDone: function () {
            // this.display = 'hide'
          },
          onCancel: function () {
            // scrolling has been interrupted
          },
          x: false,
          y: true
        };
        this.$scrollTo(document.getElementById('list'), 800, options);
      },

    scrollFunction:function(e){
        console.log(e.target.scrollTop)
    }

  },

  computed: {
    ...mapGetters({
       newfeeds: 'newfeed',
       next : 'nextPage'
    }),
  },

  created :function () {
    console.log(this.loadData,"loadData")
  }


}
</script>

<style scoped> 

.l_card__container {
  background-color: white;
  border-radius: 10px;
  background: #fff;
	border-radius: 3px;
  min-height: 200px;
  margin-top: 10px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, .2);
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
  border-radius: 80px;
  width: 40px;
  height: 40px;
}

.l_img__container {
  display: flex;
  flex-direction: row;
}

.l_span {
  padding: 8px 5px;
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
  border: 1px solid #eeeeee
}

.c_title {
  margin: 0px 0px 0px 0px;
  padding: 12px;
  text-align: left
}

.c_position {
  font-size: 10px;
  text-align: left
}

.l_btn_container {
  position: relative;
  height: 40px;
  left:40%;
}

.l_btn_container button {
  width: 96px;
  height: 24px;
  border: 1px solid #393D46;
  border-radius: 10px;
  color :  #393D46;
  background: white;
  position: relative;
  top: 5px;
}

.c_logo__newfeed {
  width: 40px;
  height: 40px;
  position: relative;
  left: 28px;
  top: 2px;
}

.c_icon__color {
  color: white;
}

.c_name {
  font-size: 15px;
  color: black;
  text-align: left;
}

.infinite-scroll {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 680px;
  margin: 100px 0;
}

.infinite-scroll-list-item {
  height: 60px;
  margin: 10px 0;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
}

</style>
