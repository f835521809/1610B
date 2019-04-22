<template>
    <div class="box" @submit="submit" report-submit>
        <p>面试信息</p>
        <ul class="uls">
            <li>
                <span>公司名称</span>
                <input type="text"  placeholder="请输入公司名称">
            </li>
           <li>
               <span>公司电话</span>
               <input type="text"  placeholder="请输入面试联系人电话" maxlength="11">
           </li>
           <li>
               <span>面试时间</span>
             
           </li>
           <li>
                <span>面试地址</span>
                <input type="text"  @tap="adress"  placeholder="请选择面试地址" >
           </li> 
        </ul>
        <p>备注信息</p>
        <textarea type="text" placeholder="备注信息(可选，100个字以内)"/>
        <button :class="btnEnable?'': 'disable'" form-type="submit">确认</button>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      
    };
  },
  created() {
  
  },
  methods: {
    adress() {
      //去搜索页面
      wx.navigateTo({
        url: "/pages/adress/main"
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.box p {
  height: 80rpx;
  line-height: 80rpx;
  background: #ccc;
}
.uls {
  border-top: 1rpx solid #eee;
  border-bottom: 2rpx solid #eee;
  background: #fff;
}
.uls li {
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #c223;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.uls span {
  color: #666;
  width: 170rpx;
  font-size: 35rpx;
}
.uls li input {
  flex: 1;
  color: #333;
  font-size: 30rpx;
  height: 88rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 30rpx;
  box-sizing: border-box;
}
textarea {
  font-size: 30rpx;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
}
button {
  margin-top: 50rpx;
  color: #fff;
  background: #197dbf;
}
button.disable {
  background: #999;
}
</style>
