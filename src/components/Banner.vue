<template>
  <div id="banner">

  </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[{
        name:"苹果",
        price:"￥6"
      },{
        name:"香蕉",
        price:"￥4"
      },{
        name:"李子",
        price:"￥10"
      }]
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #banner{
  border:1px solid red;
  }
</style>
