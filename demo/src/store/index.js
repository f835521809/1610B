import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import interview from './modules/interview'
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      interview,
      index
    },
    state:{
      
    },
    mutations:{

    },
    plugins:[createLogger()]
})