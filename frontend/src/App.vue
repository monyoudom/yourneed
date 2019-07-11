<template id="main">
    <div id="app">
        <router-view  to="/"></router-view>
    </div>
</template>
<script>
import Home  from './views/Home';
    export default {
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
  background-color: #FFF;
}

#mynav {
  background-color: #393D46;
}

.center.toolbar__center.toolbar__title.toolbar--material__center {
    text-align : center;
}

.back-button--material__icon {
    fill: #FFF !important
}

span.back-button__icon  {
    fill: #FFF !important
}

::-webkit-scrollbar {
    width: 0px;
}




</style>
