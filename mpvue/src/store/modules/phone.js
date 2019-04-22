import {decrypt} from '@/api/index';


const state={
     phone:''
}

const mutations={}
const actions={
     getphone({commit},payload){
          return new Promise(async(resolve,reject)=>{
               let data=await decrypt(payload);
               console.log('data...',data)
          })
     }
}

export default{
     namespaced:true,
     state,
     mutations,
     actions
}