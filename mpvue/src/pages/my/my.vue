<template>
    <div>
       <div class="my">
           <img src="/static/images/my.png" alt="">
       </div>
       <ul>
           <li @click="goSignList">
                <i class="iconfont icon-time-circle"><span>我的面试</span></i>
                <b class="iconfont icon-right"></b>
           </li>
           <li>
                <i class="iconfont icon-warning-circle"><span>客服中心</span></i>
                <b class="iconfont icon-right"></b>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
  methods: {
    goSignList() {
      wx.navigateTo({ 
        url: "/pages/list/main" 
        });
    }
  }
};
</script>
<style scoped>
.my {
  height: 300rpx;
  background: #ccc;
  text-align: center;
}
.my img {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: #fff;
  margin-top: 70rpx;
}
ul li {
  display: flex;
  justify-content: space-between;
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 1rpx solid #ccc;
  padding: 0 15rpx;
}
ul li i span {
  margin-left: 25rpx;
}
</style>



