<template>
  <v-ons-page>
    <v-ons-toolbar id="mynav">
      <div class="center">
        <img class="c_logo__about" src="@/assets/logo.svg" />
      </div>
    </v-ons-toolbar>
      <ons-list>
          <blockquote class="c_mission">សូមអភ័យទេាស Yourneed support only for mobile</blockquote>
         <h5 class="c_copy">&copy; រក្សាដេាយ Yourneed</h5>
      </ons-list>
  </v-ons-page>
</template>

<script>

export default {
  name: 'Notavaliable',

}
</script>


<style scoped>


.c_logo__about {
    width: 40px;
    height: 40px;
    position: relative;
    left: 5px;
    top: 2px;
}

.c_head__about {
  position: relative;
  left : 40%;
  top :5%;
}

.c_toolbar {
  background-color: #393D46;
}

.c_yourneed__quot {
  color: #000;
  font-size: 15px;
}

.c_img_aboutus {
  width: 100%;
  height: 100px;
}

blockquote {
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #fff;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #fff ;
  line-height:1.6;
  position: relative;
  background:#393D46;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#fff;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

blockquote::after{
  content: '';
}

blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}

.c_copy {
  color: #000;
  position: relative;
  bottom : 0;
  margin-top: 50%;
  left: 30%;
}


</style>
