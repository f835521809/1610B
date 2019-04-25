import Vue from 'vue'
import App from './App'

import store from '@/store/index'
import QQMapWx from '../static/libs/qqmap-wx-jssdk.js'

Vue.prototype.$store = store;
var $map = new QQMapWx({
    key: 'Q66BZ-TG4L4-BA6UA-DYV7K-D7A5K-D6FYX'
  })
Vue.prototype.$map = $map;

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
