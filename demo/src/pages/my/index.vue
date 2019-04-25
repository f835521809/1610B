<template>
  <div class="container">
    <div class="header">
      <p>
        <img src="/static/images/my.png" mode='widthFix'>
      </p>
    </div>
    <ul>
      <li @click="goSignList">
        <p>
          <icon type="waiting" size="20px" />
          <span>我的面试</span>
        </p>
        <span>></span>
      </li>
      <li>
        <p>
          <icon type="info" size="20px" />
          <span>客服中心</span>
        </p>
        <span>></span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      
    }
  },

  created () {
    
  },
  methods:{
    goSignList(){
      wx.navigateTo({ url: '/pages/list/main' });
    }
  }
}
</script>

<style scoped>
.container{
  font-size:30rpx;
}
.header{
  background: #F4F6F9;
  width:100%;
  height: 400rpx;
  display: flex;
  align-items: center;
  justify-content:center
}
.header image{
  width:100rpx;
  height: 100rpx;
}
.header p{
  width:150rpx;
  height: 150rpx;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content:center
}
ul icon{
  margin-right:30rpx;
}
ul li p{
    height: 100rpx;
    display: flex;
    align-items: center;
}
ul li{
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30rpx;
    box-sizing: border-box;
    border-bottom: 1rpx solid #eee;
}
</style>
