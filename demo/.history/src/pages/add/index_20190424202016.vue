<template>
  <div @click="clickHandle" class="container">
   <p>面试信息</p>
   <ul>
     <li>
       <label for="">公司名称</label>
       <input type="text" v-model="current.company" placeholder="请输入公司名称">
     </li>
     <li>
       <label for="">公司电话</label>
       <input type="number" v-model="current.phone" placeholder="请输入面试联系人电话">
     </li>
     <li>
       <label for="">面试时间</label>
       <picker
          mode="multiSelector"
          :range="dateRange"
          :value="info.date"
          @change="dateChange"
          @columnchange="columnChange"
          >
          <view class="date">
            {{dateShow}}
          </view>
       </picker>
     </li>
     <li>
       <label for="">面试地址</label>
       <input type="text" disabled v-model="current.address.address" placeholder="请选择面试地址" @tap="goSearch">
     </li>
   </ul>
   <p>备注信息</p>
   <textarea type="text" v-model="current.description" placeholder="备注信息(可选，100个字以内)"></textarea>
   <button :class="btnEnable?'':'disabled'" @click="submit">确认</button> 
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const moment = require("moment")
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ["00分","10分","20分","30分","40分","50分"]
]
export default {
  data () {
    return {
       info:{
         date:[0,0,0]
       }
    }
  },
  created(){
    //如果时间是二十三点之后过滤掉今天
    if(moment().hour()==23){
      this.info.date=[1,0,0];
    }
  },
   computed:{
    ...mapState({
      current:state => state.interview.current
    }),
    
    //面试日期的处理操作
    dateRange(){
      let dateRange = [...range];
      //如果是今天过滤掉之前的小时 
      if(!this.info.date[0]){
        dateRange[1]=dateRange[1].filter(item=>{
          return item > moment().hour()
        })
      }else{
        dateRange[1]=range[1]
      }
      //给小时加上“时”字
      dateRange[1]=dateRange[1].map(item=>{
        return item + '点'
      })
      //显示当前日期之后的十天
      dateRange[0] = dateRange[0].map(item=>{
        return (
          moment()
            .add(item,"days")
            .date() + '号'
        )
      })
      return dateRange;
    },
    //显示的日期
    dateShow(){
      return moment()
        .add(this.info.date[0], "d")
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    ...mapActions({
      submitInterview: 'interview/submit'
    }), 
    //监听多列选择器每列变化
    columnChange(e){
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date
    },
    //去搜索地址页面
    goSearch(){
      wx.navigateTo({
        url:'/pages/search/main'
      })
    },    
    //添加面试
    submit(){
      console.log(22)
       wx.request({
        url:'http://127.0.0.1:3000/sign/add',
        method:"POST",
        data:{
          phone:this.current.phone,
          company:this.current.company,
          address:this.current.address.address
        },
        success:()=>{
          wx.navigateTo({ url: '/pages/index/main' });
        }
      })
  }  
  },

}
</script>

<style scoped>
.container{
  font-size: 30rpx;
}
p {
  font-size: 34rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
ul {
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li {
  width: 100%;
  height: 88rpx;
  padding-left: 30rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li:last-child {
  border: none;
}
li label {
  color: #666;
  width: 170rpx;
 }
input,
picker {
  flex: 1;
  color: #333;
  height: 88rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 30rpx;
  box-sizing: border-box;
}
textarea {
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  padding: 10rpx;
  box-sizing: border-box;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
  font-size: 30rpx;
  color: #333;
}
button.disabled {
  background: #999;
}
.date {
  width: 100%;
  line-height: 88rpx;
}
</style>
