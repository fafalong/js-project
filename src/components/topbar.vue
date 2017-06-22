<template>
  <div id='topbar'>
    <div class='top-bar-l'>
    <slot name='left-top'></slot>
    </div>
    <div class='top-bar-r'>
    <slot name='right-top'></slot>
    <span class='search-logo'><img src='../../static/img/search.png' alt='搜索logo'/></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topbar'
}
</script>
</script>
<style scope>
#topbar{
 height:0.5rem;
 padding:0.2rem 0;
 width:100%;
 backgroud-color:#ffffff;
 border-bottom:0.01rem solid #EAEAEA;
}
.top-bar-l{
  width:1.6rem;
  height:100%;
  float:left;
  margin:0 0 0 0.4rem;
}
.focus-select select{
display:inline-block;
width:1.2rem;
font-size:0.3rem;
height:100%;
border:none;
}
.select-arr{
display:inline-block;
width:0.3rem;
height:0.3rem;
float:right;
margin:0.1rem 0 0 0;
}
.select-arr img{
width:100%;
height:100%;
}
.top-bar-r{
  width:1.65rem;
  height:100%;
  float:right;
  margin: 0.06rem 0 0 0;
}
.search-logo{
display:inline-block;
width:0.35rem;
height:0.35rem;
margin:0.05rem 0 0;
}
.right-top{
display:inline-block;
width:0.4rem;
height:0.4rem;
margin:0 0.4rem 0 0;
}
.search-logo img,.right-top img{
width:100%;
height:100%;
}
.select-arr{
width:0.25rem;
height:0.25rem;
}
</style>
