<template>
  <div class="container">
    <ul>
      <li>
        <label for="">面试地址：</label>
        <span>{{ele.address && ele.address}}</span>
      </li>
      <li>
        <label for="">面试时间：</label>
        <span>{{ele.start_time}}</span>
      </li>
      <li>
        <label for="">联系方式：</label>
        <span @click="makePhone">18210426902</span>
      </li>
      <li>
        <label for="">是否提醒：</label>
        <span>{{ele.remind?'未提醒':'已提醒'}}</span>
      </li>
      <li>
        <label for="">面试状态：</label>
        <span>{{ele.status==-1?'未开始':ele.status==0?'已打卡': '已放弃'}}</span>
      </li>
      <li v-if="ele.status==-1">
        <label for="">取消提醒：</label>
         <switch :checked="ele.remind===1" @change="cancelRemind" />
      </li>
    </ul>
    <section v-if="ele.status==-1" class="action">
      <button @click="goSign">去打卡</button>
      <button @click="giveup">放弃面试</button>
    </section>
  </div>
</template>

<script>
export default {
  components: {
   
  },

  data () {
    return {
     ele:null
    }
  },
  watch:{
    
  },
  methods:{
    goSign(){
      let {id,status} = this.ele; 
      status = 0
      wx.request({
        url:"http://127.0.0.1:3000/sign/changeCard",
        method:'POST',
        data:{
          id,
          status
        },
        success:(res)=>{
          if(res.data.code){
            wx.showToast({
              title:"打卡成功"
            })
            wx.navigateTo({
              url:'/pages/list/main'
            })
          }
        }
      })
    },
    giveup(){
      let {id,status} = this.ele; 
      status = 1
      wx.request({
        url:"http://127.0.0.1:3000/sign/abandon",
        method:'POST',
        data:{
          id,
          status
        },
        success:(res)=>{
          if(res.data.code){
            wx.showToast({
              title:"放弃面试"
            })
            wx.navigateTo({
              url:'/pages/list/main'
            })
          }
        }
      })
    }
  },
  created () {
   
  },
  onLoad(options){
    let ele = JSON.parse(options.item)
    this.ele = ele;
    console.log(this.ele);
  }
}
</script>

<style scoped>
ul{
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li{
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
li label{
  color: #666;
  width: 170rpx;
  font-size: 30rpx;
  }
li span,switch{
  flex: 1;
  font-size: 30rpx;
  color: #333;
  height: 88rpx;
  line-height: 88rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 30rpx;
  box-sizing: border-box;
  }
li:last-child{
  border-bottom: none;
}
.action{
  display: flex;
  margin: 50rpx 15rpx;
}
button{
  flex: 1;
  color: #fff;
  margin: 15rpx;
}
button:first-child{
  background: #197DBF;
}
button:last-child{
  background: #DC4E42;
}
</style>
