<template>
   <div class="l_loading fadeout">
    <div class="l_container">
      <img class="c_logo" src="@/assets/icon.svg" alt="">
      <div class="c_intro">
        <p>Your Personal Consultants</p>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'loading',

}

</script>

<style scoped>

.l_loading {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 30;
    background-color: #393D46;
    padding: 10px;  
    width: 100%;
    height: 100%;
}

.l_loading .l_container {
    display: block;
    border-radius: 8px;
    position: relative;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 25;
    width: 100%;
    -webkit-transition: all .5s;
    transition: all .5s;
    overflow: hidden;
}

.c_intro {
    color: white;
    font-size: 14px;
}

.c_logo {
  width: 100px;
  height: 100px;
}

.fadeout {
  animation: fadeout 3s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0.8;
    visibility: hidden;
  }
}

</style>
