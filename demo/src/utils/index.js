function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

//函数防抖
export function debounce(func,delay){
  var timer = null;
  return function(){
    var self = this, args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function(){
      func.apply(self,args)
    },delay)
  }
}

export default {
  formatNumber,
  formatTime,
  debounce
}
