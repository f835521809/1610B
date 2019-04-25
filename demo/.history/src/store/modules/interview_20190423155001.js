import {addSign} from '@/api/index'
const state = {
  list:[],
  current: {
      company:"厦门之夏",
      phone:"18210426902",
      address:'',
      description:''
  }
}
const mutations = {
  updateState(state,payload) {
      state.current = {...state.current,...payload}
  }
}
const actions = {
  async submit(state, {...payload}){
    //promise判断何时异步请求结束
    return new Promise(async(resolve,reject)=>{
      //经纬度
      payload.latitude = payload.address.location.lat;
      payload.longitude = payload.address.location.lng;
      //序列号地址
      payload.address = JSON.stringify(payload.address);
      let result = await addSign(payload);
      resolve(result)
    })
  }
}
export default{
  namespaced:true,
  state,
  mutations,
  actions
}