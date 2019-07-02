<template>
  <v-ons-page>
    
    <div class="l_warraper" >
      <v-ons-toolbar class="c_toolbar">
        <div class="center">
          <img class="c_logo" src="@/assets/logo.svg"/>
        </div>
        <div class="left">
          <ons-toolbar-button>
            <ons-icon @click="back" icon="arrow-left" class="c_icon__color"></ons-icon>
          </ons-toolbar-button>
       </div>
      </v-ons-toolbar>
      <div class="c_header">
        <div class="c_title">
          <img src="@/assets/profile.png"/>
          <div class="l_span">
              <span class="c_name">Steve</span>
              <span class="c_position">Conslutant.</span>
          </div>
        </div>
      </div>

      <div class="l_content">
        <div class="c_content">
          <h5>What is love?</h5>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants
          </p>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>
<script>

export default {
  name: 'Detail',
  data: {
      query : "testing"
  }, 
  methods: {
    back() {
      this.$router.push('home');
    }
  }

}
</script>

<style scoped>

.l_warraper {
  overflow: hidden;
  background-color: #393D46;
  width: 100%;
}

.c_header {
  color: #393939;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  width: 100%;
  top: 40px;
}

.c_title {
  display: flex;
  text-align: left;
  padding: 22px 22px 0;
  align-items: center;
}

.c_title img {
    border-radius: 100px;
    width: 50px;
    height: 50px;
}

.l_span {
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
}

.c_position {
    font-size: 10px;
    color: #ffffff;
}

.c_name {
   font-size: 15px;
   color: #ffffff;
}

.c_logo {
  width: 40px;
  height: 40px;
}

.c_toolbar {
  background-color: #393d46;
}

.l_content {
  padding: 20px;
  margin-top: 70px;
  height: 100%;
}

.c_content p {
  font-size: 15px;
  text-align: justify;
  color: #ffffff;
}

.c_content h5 {
  color: white;
  text-align: left;
}

.c_icon__color {
  color: white;
}

</style>
