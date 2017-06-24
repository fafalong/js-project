<template>
  <transition name="slide" appear>
    <div id="search">
      <div class="search-box">
        <div class="goback" @click="closeSearch"><img src="../../static/img/left-arr.png" alt=""></div>
        <div id="search-con">
          <input type="text" name="search" id="search-input" placeholder="搜索文章、专题、用户、文集">
        <span class="search-logo">
          <img src="../../static/img/search.png" alt="">
        </span>
        </div>
      </div>
      <div class="search-con"></div>
    </div>
  </transition>
</template>
<script>
  export default{
    name:'search',
    mounted(){
      this.searchFocus()
    },
    methods:{
      closeSearch(){
        this.$emit('showSearch',false)
      },
      searchFocus(){
        var searchInput=$('#search-input');
        searchInput.focusin();
      }
    }
  }
</script>
<style scoped>
  #search{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:#fff;
    z-index: 12;
  }
  .search-box{
    padding:0.2rem 0.3rem;
    border-bottom: 1px solid #E1E1E1;
    border-radius: 0.1rem 0 0 0.1rem;
    overflow: hidden;

  }
  .goback{
    width: 0.45rem;
    float: left;
    margin:0.15rem 0.2rem 0 0;
    position: relative;
  }
  .goback img{
    width: 100%;
  }
  #search-con{
    width: 83%;
    padding: 0.12rem 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid #E1E1E1;
    float: left;
    overflow: hidden;
  }
  #search-con input{
    width: 85%;
    float: left;
  }
  #search-con input:-moz-placeholder,#search-con input:-ms-input-placeholder,#search-con input::-moz-placeholder,#search-con input::-webkit-input-placeholder{
    color: #9A9A9A;
    font-size: 0.24rem;
  }
  .search-logo img{
    width: 0.4rem;
    height:0.4rem
  }
  .search-logo{
    border-left: 1px solid #E1E1E1;
    float: left;
    margin: 0 0 0 0.2rem;
    padding: 0 0 0 0.1rem;
  }
  /*搜索*/
  .slide-enter-active,.slide-leave-active {
    transition: all .4s ease;
  }
  .slide-enter, .slide-leave-active {
    transform: translateX(7rem);
    opacity: 0;
  }
</style>
