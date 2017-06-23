<template>
  <div id="app">
    <router-view></router-view>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
  import Bottombar from '@/components/bottom-menu'
  export default {
     name: 'app',
    components:{
      'Bottombar':Bottombar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin:0;
  padding:0;
  overflow-x: hidden;
  width:100%!important;
}
</style>
