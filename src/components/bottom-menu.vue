<template>
  <div id='bottom-menu'>
       <div id='index-btn' @click="index"><img src='../../static/img/index.png' alt='首页'/></div>
       <div id='find-btn' @click="find"><img src='../../static/img/find.png' alt='发现'/></div>
       <div id='publish-btn' @click="publish"><img src='../../static/img/add.png' alt='发现'/></div>
       <div id='msg-btn' @click="message"><img src='../../static/img/msg.png' alt='消息'/></div>
       <div id='user-btn' @click="my"><img src='../../static/img/my.png' alt='我的 '/></div>
  </div>
</template>
<script>
export default{
  name:'bottom-menu',
  methods:{
    index(){
      this.$router.push({path:'/'})
    },
    find(){
      this.$router.push({path:'/find'})
    },
    publish(){
      this.$router.push({path:'/publish'})
    },
    message(){
      this.$router.push({path:'/message'})
    },
    my(){
      this.$router.push({path:'/my'})
    }
  }
}
</script>
<style scope>
#bottom-menu{
  width:100%;
  height:0.7rem;
  position:fixed;
  bottom:0;
  left:0;
  overflow:hidden;
  background:#ffffff;
  padding:0.1rem 0;
  border-top:0.01rem solid #EAEAEA;
}
#bottom-menu div{
width:0.6rem;
height:0.6rem;
float:left;
margin:0.05rem 0.43rem 0
}
#bottom-menu>div img{
width:100%;
height:100%;
}
#bottom-menu>#publish-btn{
width:0.7rem;
height:0.7rem;
background:#E78170;
border-radius:100%;
margin:0 0.43rem;
}
#bottom-menu>#publish-btn img{
width:80%;
height:80%;
margin:0.15rem 0.08rem;
}
#bottom-menu>#find-btn img{
width:95%;
height:95%;
margin-top:0.04rem
}
#bottom-menu>#user-btn{
  width:0.62rem;
  height:0.62rem;
}
</style>
