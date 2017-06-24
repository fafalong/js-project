<template>
  <div class="load-end">
    <span>没有更多的内容了！</span>
    <!--<div>{{msg}}</div>-->
    <!--<input type="text" v-model="msgcon" @keyup="giveval" style="border:1px solid red"/>-->
  </div>
</template>
<script>
  export default{
    name:'load-end',
    props:['msg'],
    data(){
      return{
        msgcon:''
      }
    },
    mounted(){
    },
    methods:{
      giveval(){
      this.$emit('transfer',this.msgcon)
      }
    }
  }
</script>
<style scoped>
.load-end{
  height:15.6rem;
  text-align: center;
  font-size: 0.3rem;
  color:#c8c8c8;
}
  .load-end span{
    display: inline-block;
    margin-top: 0.8rem;
  }
  #load{
    width: 3rem;
    border-radius: 0.1rem;
    border: 1px solid #E79587;
    color: #E79587;
    padding: 0.1rem 0.2rem;
    margin: 0.2rem auto;
  }
</style>
