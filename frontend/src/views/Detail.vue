<template>
  <v-ons-page>
    <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo" src="@/assets/logo.svg" />
      </div>
      <div class="left">
        <ons-toolbar-button>
          <ons-icon @click="back" icon="arrow-left" class="c_icon__color"></ons-icon>
        </ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <ons-page id="mypage">
      <div class="c_header">
        <div class="c_title_detail">
          <img src="@/assets/profile.png" />
          <div class="l_span">
            <span class="c_name_detail">Steve</span>
            <span class="c_position_detail">Conslutant.</span>
          </div>
        </div>
      </div>
      <div class="l_content">
        <div class="c_content">
          <h5>What is love?</h5>
          <p>
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
            London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants
          </p>
        </div>
      </div>
    </ons-page>
  </v-ons-page>
</template>
<script>
export default {
  name: "Detail",
  methods: {
    back() {
      this.$router.push("home");
    }
  }
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
  color: #ffffff;
}

.c_name_detail {
  font-size: 15px;
  color: #ffffff;
}

.l_content {
  padding: 20px;
  height: 100%;
}

.c_content p {
  font-size: 15px;
  text-align: justify;
  color: #ffffff;
  padding: 10px;
}

.c_content h5 {
  color: white;
  text-align: left;
}

.c_icon__color {
  color: white;
}

.c_logo {
    width: 40px;
    height: 40px;
    padding-top: 8px;
    padding-right: 3px;
}

</style>
