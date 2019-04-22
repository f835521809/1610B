import Vue from 'vue'
import App from './App'
// 引入store
import store from '@/store/index'
// 引入QQMap
import QQMapWx from '../static/libs/qqmap-wx-jssdk.js'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载store到原型链上
Vue.prototype.$store = store;
// 挂载QQMap到原型上
var $map = new QQMapWx({
    key: 'KE5BZ-2OGKG-ZDZQG-I5D2O-OOSP7-IMBSU'
})
Vue.prototype.$map = $map;

const app = new Vue(App)
app.$mount()