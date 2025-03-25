const os=require('os')
const ts=os.uptime()
console.log("In seconds:", ts)
const dy=Math.floor(ts/(24*60*60));
const hr=Math.floor((ts%(24*60*60)))
const min=Math.floor(ts%(60*60)/60)

console.log(`Days:${dy}Hrs:${hr}Min:${min}`);
