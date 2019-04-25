<template>
  <div class="container">
    <header class="header">
      <span>北京</span>
      <input type="text" placeholder="请输入面试地址" v-model='address'> 
    </header>
    <ul>
      <li
        v-for="(item, index) in addlist"
        :key="index"
        @click="select(index)"
      >
        <p>{{item.title}}</p>
        <p>{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { debounce } from '../../utils/index.js'
import { mapMutations } from 'vuex'
export default {
  components: {
   
  },

  data () {
    return {
      address:'',
      addlist:[]
    }
  },
  watch:{
    address(val,oldVal){
      this.search(val)
    }
  },
  methods:{
    ...mapMutations({
      updateState:'interview/updateState'
    }),
    select(index){
      this.updateState({
        address:this.addlist[index]
      })
      wx.navigateBack()
    }
  },
  created () {
    var that = this;
    this.search =  debounce((val)=>{
    this.$map.search({
        keyword: val,
        region: '北京',
        success: function(res) {
          that.addlist = res.data;
        }
    })
    },300)
    console.log(this.addlist)
  }
}
</script>

<style scoped>
.header {
  height: 88rpx;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.header span {
  width: 26%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #eee;
}
.header input {
  padding: 0 20rpx;
}
li {
  height: 100rpx;
  padding: 10rpx 0 10rpx 100rpx;
  box-sizing: border-box;
  border-bottom: 1rpx solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li p:nth-child(1) {
  font-size: 34rpx;
}
li p:nth-child(2) {
  font-size: 24rpx;
  color: #c0c0c0;
}
</style>
