<template>
  <div id='find'>
    <div id="search-box">
    </div>
    <div id='search-input' @click="showSearch">
      <img src='../../static/img/search.png' alt='search-logo'/>
      <div class="search-text"><span>搜索简书的内容和朋友</span></div>
    </div>
    <div id='find-banner'>
      <mt-swipe :auto="5000" :speed="1000">
        <mt-swipe-item><img class="banner-img" src="../../static/img/banner/1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner-img" src="../../static/img/banner/2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner-img" src="../../static/img/banner/3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img class="banner-img" src="../../static/img/banner/4.jpeg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="menu-btn">
      <ul>
        <li style="background:#6AB2CC">简书大学堂</li>
        <li style="background:#FFBA52">7日热门</li>
        <li style="background:#F7967B">30日热门</li>
        <li style="background:#D6B673">签约作者</li>
        <li style="background:#1f83f9">简书招聘</li>
        <li style="background:#35c6ab">简书出版</li>
        <li style="background:#ac77d1">新上榜</li>
      </ul>
    </div>
    <div id="hot-topics">
      <div id="hot-topic-tit" class="tit-div">
        <span class="tit">热门专题</span>
        <span id="batch" @click="batch(rotateNum+=180)"><img src="../../static/img/batch.png" alt="">换一批</span>
      </div>
      <div id="hot-topic-btns">
        <ul>
          <li>诗</li>
          <li>世间事</li>
          <li>奇思妙想</li>
          <li>体育</li>
          <li>读书</li>
          <li>人物</li>
          <li>娱乐八卦</li>
          <li>想法</li>
          <li>散文</li>
          <li>美食</li>
        </ul>
      </div>
    </div>
    <div class="hot-essay">
      <div id="hot-essay-tit" class="tit-div">
        <span class="tit">热门文章</span>
        <span class="tit-div2" @click="showCusHot"><img src="../../static/img/customized.png" alt="">定制热门</span>
      </div>
      <div class="hot-e-con">
        <HotE v-for="item in hotE">
          <img :src="item.userImg" slot="user-img"/>
          <span class="e-user" slot="e-user">{{item.userName}}</span>
          <span class="e-time" slot="e-time">{{item.time}}</span>
          <div class="e-title" slot="e-title">{{item.eTit}}</div>
          <div v-if="item.eType!=''&&item.eType!=null" class="e-type" slot="e-type">{{item.eType}}</div>
          <div class="e-comm" slot="e-comm">
            <ul>
              <li v-if="item.readNum>0">阅读<span class="read-num">{{item.readNum}}</span><i>·</i></li>
              <li v-if="item.commNum>0">评论<span class="comm-num">{{item.commNum}}</span><i>·</i></li>
              <li v-if="item.likeNum>0">喜欢<span class="like-num">{{item.likeNum}}</span><i>·</i></li>
              <li v-if="item.appNum>0">赞赏<span class="appreciate-num">{{item.appNum}}</span><i></i></li>
            </ul>
          </div>
          <img :src="item.eImg" slot="essay-img" alt="">
        </HotE>
        <!--<input type="text" id="child-val" style="border:1px solid #000"/>-->
        <LoadEnd :msg="msgcon" @transfer="getUser"></LoadEnd>
        <transition name="slide-fade" appear>
          <CustomHot v-if="customhot" @showCom="showCusHot"></CustomHot>
        </transition>
        <transition name="slide" appear>
          <Search v-if="search" @showSearch="showSearch"></Search>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  import HotE from '../components/hotEssay'
  import LoadEnd from '../components/loadEnd'
  import CustomHot from '../components/custom-hot'
  import Search from '../components/search'
  export default{
    name: 'find',
    data(){
      return{
        hotE:[
          {
            userImg:'../../static/img/book.png',
            userName:'神乐',
            time:'06 19 14:29',
            eTit:'读书 在大学 | 我们的《百年孤独》',
            eType:'心理',
            eImg:'../../static/img/run.jpg',
            readNum:53,
            commNum:29,
            likeNum:20,
            appNum:10
          },
          {
            userImg:'../../static/img/read.jpg',
            userName:'新世相',
            time:'06 19 14:29',
            eTit:'29/70 瑜伽如何一步步改变了我',
            eType:'运动&健身',
            eImg:'../../static/img/m.gif',
            readNum:206,
            commNum:17,
            likeNum:20,
            appNum:0
          },
          {
            userImg:'../../static/img/run.jpg',
            userName:'何麦子',
            time:'06 19 16:00',
            eTit:'好好地聊会天不行吗，就你有文化是吧？',
            eType:'生活家',
            eImg:'../../static/img/food.gif',
            readNum:505,
            commNum:29,
            likeNum:0,
            appNum:10
          },
          {
            userImg:'../../static/img/manage.jpg',
            userName:'初见西安',
            time:'06 22 14:29',
            eTit:'毕业旅行的18个目的地，打开毕业旅行的正确方式',
            eType:'心理',
            eImg:'../../static/img/read.jpg',
            readNum:102,
            commNum:0,
            likeNum:20,
            appNum:10
          },
          {
            userImg:'../../static/img/think.jpg',
            userName:'去年的茶',
            time:'06 19 14:29',
            eTit:'吴幸福杀人事件',
            eType:null,
            eImg:'../../static/img/laugh.jpg',
            readNum:123,
            commNum:0,
            likeNum:20,
            appNum:10
          }
        ],
        rotateNum:0,
        msgcon:'hello world',
        childmsg:'',
        customhot:false,
        search:false
      }
    },
    props:['msg'],
    components:{
      'HotE':HotE,
      'LoadEnd':LoadEnd,
      'CustomHot':CustomHot,
      'Search':Search
    },
    mounted(){
      this.searchStren();
    },
    methods:{
      searchStren(){
        var searchInput=$("#search-input");
        var searchBox=$("#search-box");
        var searchTxt=$('.search-text').eq(0);
        $(window).scroll(function(){
          var scrollTop=$(document).scrollTop();
          if(scrollTop>100){
            searchInput.css({
              'width':'94%',
              'top':': 0.2rem',
              'right':'0.12rem'
            })
            searchBox.css({
              'opacity':1
            })
          }else{
            searchInput.css({
              'width':'1.4rem',
              'top':': 0.3rem',
              'right':'0.2rem'
            })
            searchBox.css({
              'opacity':0
            })
          }
        })
      },
      batch(value){
        var batch=$('#batch');
        var batchImg=$('#batch img');
        batchImg.css({
          'transform':'rotate('+value+'deg)'
        })
      },
      getUser(val){
        var parentInput=$('#child-val')
        this.childmsg=val
        parentInput.val(this.childmsg)
      },
      showMake(){
        this.show=!this.show;
        console.log(this.show)
      },
      showCusHot(value){
        if(!value){
          this.customhot=!this.customhot;
        }else{
          this.customhot=value;
        }
      },
      showSearch(value){
        if(!value){
          this.search=!this.search;
        }else{
          this.search=value;
        }
      }
    }
  }
</script>
<style scoped>
  #search-box{
    width:7.1rem;
    height: 0.7rem;
    background:#fff;
    border-bottom: 1px solid #dcdcdc;
    position: fixed;
    top: 0;
    left:0;
    padding: 0.2rem;
    z-index: 10;
    opacity: 0;
    transition:all linear 0.4s;
  }
#search-input{
  width:1.4rem;
  height:0.45rem;
  border-radius:0.5rem;
  background:#fff;
  border:1px solid #dcdcdc;
  padding:0.05rem 0.1rem;
  position: fixed;
  top: 0.25rem;
  right:0.2rem;
  z-index: 11;
  transition:all linear 0.4s;
}
  #search-input img{
    width:0.35rem;
    float: left;
    margin:0.05rem 0.1rem 0;
  }
  .search-text{
    width: 0.7rem;
    height:100%;
    float: left;
    overflow: hidden;
  }
  .search-text span{
    font-size: 0.27rem;
    color: #B2B2B2;
  }
  #find-banner{
    height:4rem;
  }
  .banner-img{
    width: 100%;
    height:100%;
  }
  #menu-btn{
    width:100%;
    color: #fff;
    margin:0.2rem 0.3rem;
    height: 0.8rem;
    overflow: hidden;
  }
  #menu-btn ul{
    /*width:17.5rem;*/
  }
  #menu-btn li{
    width: 1.7rem;
    margin:0 0.3rem 0.2rem 0;
    padding: 0.2rem ;
    float: left;
    border-radius: 0.05rem;
    text-align: center;
    font-size: 0.28rem;
  }
  .tit-div{
    color:#9E9E9E;
    overflow: hidden;
    padding: 0 0.3rem;
    font-size: 0.28rem;
    margin: 0.3rem 0;
  }
  .tit-div img{
    height: 0.35rem;
    margin: 0 0.1rem;
    float: left;
    transform: rotate(0deg);
    transition: all linear 0.4s;
  }
  .tit-div span:nth-of-type(2),.tit-div .tit-div2{
    float: right;
    color:#9E9E9E;
  }
  #hot-topic-btns{
    margin: 0.3rem 0;
  }
  #hot-topic-btns ul{
    overflow: hidden;
    padding: 0.2rem 0.1rem;
  }
  #hot-topic-btns li{
    float: left;
    border: 1px solid #E79587;
    padding: 0.1rem  0.2rem;
    border-radius: 0.07rem;
    margin:0.1rem 0.15rem;
    color: #E79587;
    font-size: 0.29rem;
  }
  .tit{
    border-left: 0.05rem solid #E58C7C;
    padding: 0 0 0 0.1rem;
  }
  /*transition动画*/
  /*定制热门*/
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(7rem);
    opacity: 0;
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
