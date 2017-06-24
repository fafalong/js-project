<template>
  <div id="message">
    <TopBar>
       <span class='focus-select' slot='left-top'>消息</span>
    </TopBar>
    <div id="msg-list">
      <ul>
        <li v-for="item in msgList">
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  import TopBar from '../components/topbar'
  export default{
    name:'message',
    data(){
      return {
        msgList:[
          {
            'name':'评论',
            'img':'../../static/img/m-comm.png'
          },
          {
            'name':'简信',
            'img':'../../static/img/m-msg.png'
          },
          {
            'name':'投稿请求',
            'img':'../../static/img/m-req.png'
          },
          {
            'name':'喜欢和赞',
            'img':'../../static/img/m-like.png'
          },
          {
            'name':'关注',
            'img':'../../static/img/m-focus.png'
          },
          {
            'name':'赞赏',
            'img':'../../static/img/m-good.png'
          },
          {
            'name':'其他提醒',
            'img':'../../static/img/m-dots.png'
          },

        ]
      }
    },
    components:{
      'TopBar':TopBar
    }
  }
</script>
<style scoped>
#msg-list ul li{
  padding: 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #f4f4f4;
}
  #msg-list img{
    width: 0.5rem;
    margin-right: 0.2rem;
  }
</style>
