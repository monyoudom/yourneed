<template>
    <div id="app">
        <router-view  to="/"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        },
        methods: {
           
        },
    };
</script>

<style lang="less">

#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
}


#mypage .page__background {
  background-color: #393D46;
}

#mynav {
  background-color: #393D46;
  height: 60px;
}

</style>
