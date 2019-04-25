import request from '@/utils/request'

//添加面试
export let addSign = params=>{
  return request.post('/sign/add', params);
}

// 获取面试列表
export let getSignList = params=>{
  return request.get('/sign', params);
}

// 获取面试详情
export let getSignDetail = id=>{
  return request.get('/sign/'+id);
}

// 更新面试状态
export let updateSignDetail = (id, params)=>{
  return request.put('/sign/'+id, params);
}
