<template>
  <div class="hot-essay">
    <div class="hot-essay-l">
      <div class="user-info">
        <slot name="user-img"></slot>
        <slot name="e-user"></slot>
        <slot name="e-time"></slot>
      </div>
      <slot name="e-title"></slot>
      <div class="e-comment">
        <slot name="e-type"></slot>
        <slot name="e-comm"></slot>
      </div>
    </div>
    <div class="hot-essay-r">
      <slot name="essay-img"></slot>
    </div>
  </div>
</template>
<script>
  export default{
    name:'hot-essay'
  }
</script>
<style scoped>
.hot-essay{
  padding: 0.3rem;
  overflow: hidden;
  width: 100%;
  border-bottom: 0.01rem solid #DEDEDE;
  position: relative;
}
  .hot-essay div{
    float: left;
  }
  .user-info img{
    width: 0.5rem;
    border-radius: 100%;
  }
  .hot-essay-l{
    width: 70%;
  }
  .user-info{
    overflow: hidden;
  }
  .user-info img,.user-info span{
    float: left;
  }
  .e-user{
    font-size: 0.3rem;
    margin: 0.1rem 0.3rem 0 0.3rem;
  }
  .e-time{
    margin: 0.15rem 0 0 0;
    font-size: 0.25rem;
    color: #9E9E9E;
  }
  .e-title{
    font-size: 0.36rem;
    font-weight: bold;
    margin: 0.1rem 0;
  }
  .e-type{
    border: 1px solid #EBA498;
    padding: 0 0.15rem;
    color: #EBA498;
    border-radius: 0.05rem;
    font-size: 0.23rem;
    margin:0.05rem 0.2rem 0 0;
  }
  .e-comment{
    position: absolute;
    bottom: 0.2rem;
  }
  .e-comm ul{
    overflow: hidden;
    font-size: 0.22rem;
    color: #C2C2C2;
    margin: 0.01rem 0 0 0;
  }
  .e-comm li{
    float: left;
  }
  .e-comm li i{
    font-style: normal;
    margin: 0 0.05rem;
    font-size: 0.3rem;
  }
  .hot-essay-r img{
    width: 1.75rem;
    height: 1.75rem;
    margin: 0.3rem 0 0 0;
  }
</style>
