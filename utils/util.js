const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const getNowDate = (timeFlag) => {
   let date = new Date();
   let y = date.getFullYear();
   let m = date.getMonth() + 1;  
   m = m < 10 ? ('0' + m) : m;
   let d = date.getDate();  
   d = d < 10 ? ('0' + d) : d;
   let h = date.getHours();
   let minute = date.getMinutes();  
   minute = minute < 10 ? ('0' + minute) : minute;
   let second = date.getSeconds();
   second = second < 10 ? ('0' + second) : second;
   return timeFlag ? (y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second): (y + "-" + m + "-" + d);
}
const filterArr = (arr, ID) => {
  let map = new Map();
  for (let item of arr) {
    if (!map.has(item[ID])) {
      map.set(item[ID], item);
    }
  }
  return [...map.values()];
}

const formatTimeStr = (str) => {
  return str.slice(0,2) +':'+ str.slice(2,4) + ':' +str.slice(4, 6)
}
module.exports = {
  formatTime,
  getNowDate,
  filterArr,
  formatTimeStr
}
