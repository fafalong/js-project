<template>
  <div class='index-item'>
      <div class='item-con-l'>
      <slot name='index-img'></slot>
      </div>
      <div class='item-con-r'>
      <slot name='item-name'></slot><span class='essay-num'><i></i><slot name='essay-number'></slot>篇文章</span>
      <slot name='item-des'></slot>
      </div>
  </div>
</template>
<script>
export default{
  name:'index-item',
  data(){
  return{
    indexItem:[
      ''
    ]
  }
  },
  mounted(){

  },
  methods:{
    showData(){
    console.log(this.props);
    }
  }
}
</script>
<style scope>
.index-item{
  border-bottom:0.01rem solid #EAEAEA;
  padding:0.2rem 0.3rem;
  overflow:hidden;
  height:0.85rem;
}
.index-item>div{
float:left;
}
.item-con-l{
width:0.9rem;
height:0.9rem;
border-radius:0.1rem;
}
.item-con-l img{
  width:100%;
  height:100%;
  border-radius:0.1rem;
}
.item-con-r{
margin:0 0 0 0.2rem;
}
.item-con-r>span{
display:inline-block;
}
.item-name{
font-size:0.3rem;
}
.essay-num{
position:relative;
font-size:0.27rem;
color:#BDBDBD;
}
.essay-num i{
display:inline-block;
width: 0.15rem;
height:0.15rem;
margin:0 0.1rem;
border-radius: 100%;
background: #4B9DFC;
}
.item-des{
font-size:0.27rem;
color:#BDBDBD;
margin-top:0.05rem
}
</style>
