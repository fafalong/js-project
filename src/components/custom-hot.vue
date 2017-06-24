<template>
  <div id="custom-hot">
    <div class="close"><img @click="closeCom" src="../../static/img/close-cushot.png" alt=""></div>
      <h1>定制热门文章</h1>
      <h2>选择并定制你喜欢的专题 <img src="../../static/img/ques.png" alt=""></h2>
      <div class="custom-con">
        <ul>
          <li v-for="item in cuustomaList" :class="item.state?'active':''">{{item.name}}</li>
        </ul>
      </div>
    <div class="per-recomm">开启个性化推荐</div>
    </div>
</template>
<script>
export default {
  name:'custom-hot',
  data(){
    return{
      cuustomaList:[
        {
        name:'短篇小说',
        state:true
      },{
          name:'上班这点小事儿',
          state:false
        },{
          name:'连载小说',
          state:false
        },{
          name:'旅行在路上',
          state:true
        },
        {
          name:'@IT·互联网',
          state:true
        },
        {
          name:'黛玉日报',
          state:false
        },
        {
          name:'哲思',
          state:true
        },
        {
          name:'诗',
          state:true
        },
        {
          name:'健康&养生',
          state:false
        },
        {
          name:'艺术·文化',
          state:true
        }
      ]
    }
  },
  methods:{
    closeCom(){
      this.$emit('showCom',false);
    }
  }
}
</script>
<style scoped>
  #custom-hot{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:#fff;
    z-index: 12;
  }
  #custom-hot h1{
    font-size: 0.5rem;
    text-align: center;
  }
  #custom-hot h2{
    color:#898989;
    font-size: 0.35rem;
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
    justify-content: center;
  }
  #custom-hot h2 img{
    height: 0.45rem;
    margin-left:0.2rem;
  }
  .close{
    height: 0.7rem;
    text-align: right;
    padding: 0.2rem 0.3rem;
  }
  .close img{
    height: 0.7rem;
  }
  .custom-con{
    margin-top: 0.2rem;
  }
  .custom-con ul{
    overflow: hidden;
    padding: 0 0.2rem;
  }
  .custom-con ul li{
    padding:0.15rem 0.2rem;
    border: 1px solid #DCDCDC;
    font-size: 0.24rem;
    float: left;
    margin:0.2rem;
    border-radius: 0.1rem;
  }
  .custom-con ul .active{
    border: 1px solid #47BD38;
    background: #47BD38;
    color: #fff;
  }
  .per-recomm{
    width:90%;
    background: #47BD38;
    color: #fff;
    text-align: center;
    position: absolute;
    border-radius: 0.05rem;
    bottom: 0.2rem;
    left: 5%;
    padding: 0.2rem 0;
  }
</style>
