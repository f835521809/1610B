<template>
  <div class="container">
     <header>
      <span @click="tabChange(index)" v-for="(item, index) in tabs" :key="index" :class="active===index?'active':''">{{item}}</span>
    </header>
    <signList :list="newList"></signList>
    <!-- <p class="more" v-if="list.length">{{hasMore?'上拉加载更多': '我是有底线的'}}</p> -->
  </div>
</template>

<script>
import signList from '@/components/signList.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
  components: {
    signList
  },

  data () {
    return {
      tabs:["未开始","已打卡","已放弃","全部"],
      list:[],
      newList:[]
    }
  },
  /* computed: {
    ...mapState({
      active: state=>state.sign.active,
      list: state=>state.sign.list,
      page: state=>state.sign.page,
      hasMore: state=>state.sign.hasMore
    })
  }, */
  methods:{
     ...mapMutations({
      updateState: 'sign/updateState'
    }),
/*     ...mapActions({
      getList: 'sign/getList'
    }), */
    tabChange(index){
      let arr = this.list;
      if(index===0){
        this.newList = arr.filter((item)=>item.status==-1)
      }
      if(index===1){
        this.newList = arr.filter((item)=>item.status==0)
      }
      if(index==2){
        this.newList = arr.filter((item)=>item.status==1)
      }
       if(index==3){
        this.newList = arr
      }
     /*  this.updateState({active: index, page: 1});
      this.getList(); */
    }
  },
  created () {
    wx.request({
      url:"http://127.0.0.1:3000/sign",
      success:(res)=>{
        this.list = res.data
        this.newList = res.data
      }
    })
  },
  onShow(){
    /* this.getList(); */
  },
  /* onReachBottom(){
    if (this.hasMore){
      this.updateState({page: this.page+1});
      this.getList();
    }
  } */
}
</script>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
}
header span{
    line-height: 88rpx;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 2rpx solid #fff;
}
header span.active{
    color: #197DBF;
    font-weight: 500;
    border-bottom: 3rpx solid #197DBF;
  }
.more{
  text-align: center;
  font-size: 32rpx;
  line-height: 2;
  color: #999;
  border-bottom: 20rpx solid #eee;
  border-top: 20rpx solid #eee;
}
</style>
