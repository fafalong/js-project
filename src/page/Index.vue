<template>
  <div id="index">
  <div class='topbar'>
    <Topbar>
    <span class='focus-select' slot='left-top'>
      <select>
        <option value='0'>全部关注</option>
      </select>
      <span class='select-arr'><img src='../../static/img/select-arr.png'/></span>
    </span>
    <span slot='right-top' class='right-top'><img src='../../static/img/focus.png' alt='关注'/></span>
    </Topbar>
  </div>
  <div class='index-list'>
    <div class='simple-friend'>
      <img src='../../static/img/team.png' alt=''/><span>简友圈</span>
    </div>
    <index-item v-for='(item,key) in datalist'>
      <img slot='index-img' :src='item.img'/>
      <span slot='item-name'class='item-name'>{{item.name}}</span>
      <span slot='essay-number' class='essay-num'>{{item.essayNum | essayfilter}}</span>
      <div slot='item-des' class='item-des'>{{item.des}}</div>
    </index-item>
  </div>
  </div>
</template>

<script>
  import indexItem from "@/components/index-item"
  import Topbar from '@/components/topbar'
  export default {
    name: 'index',
    data(){
      return{
        datalist:[
        {"name":"短篇小说","img":"../../static/img/short.jpg","des":"深夜食堂故事 | 炕土豆","essayNum":"53"},
        {"name":"旅行·在路上","img":"../../static/img/travel.jpg","des":"新加坡印象","essayNum":"108"},
        {"name":"奇思妙想","img":"../../static/img/think.jpg","des":"孤男寡女","essayNum":"112"},
        {"name":"读书","img":"../../static/img/read.jpg","des":"《结构思考力》读书笔记","essayNum":"53"},
        {"name":"生活家","img":"../../static/img/manage.jpg","des":"如何制定自己的钱包","essayNum":"108"},
        {"name":"漫画 · 手绘","img":"../../static/img/kt.jpg","des":"夏至？末至","essayNum":"112"},
        {"name":"美食家","img":"../../static/img/food.gif","des":"好好吃饭，胜过年薪百万","essayNum":"112"},
        {"name":"心理","img":"../../static/img/heart.jpg","des":"认真对待生活","essayNum":"108"},
        {"name":"我是来搞笑的","img":"../../static/img/laugh.jpg","des":"破鞋","essayNum":"112"},
        {"name":"运动健身","img":"../../static/img/run.jpg","des":"为什么“文身+健身”能造就人生赢家","essayNum":"112"},
          {"name":"萌宠","img":"../../static/img/cat.jpg","des":"宝贝，听我讲故事（续集）","essayNum":"112"}
        ]
      }
    },
    components:{
      "index-item":indexItem,
      'Topbar':Topbar
    },
    filters:{
      essayfilter:function(value){
        if(value>99){
        return '99+'
        }else{
        return value
        }
      }
    }
  }
</script>

<style scope>
  #index {
    position:relative;
  }
  .simple-friend{
  height:0.8rem;
  padding:0.2rem 0.3rem;
  border-bottom:1px solid #EAEAEA;
  }
  .simple-friend img{
    width:0.83rem;
    float:left;
  }
  .simple-friend span{
  float:left;
  font-size:0.3rem;
  margin:0.25rem 0 0 0.3rem;
  }
</style>
