const events=require('events')
let myEmitter=new events.EventEmitter();
myEmitter.once("UserDetails",(name,age)=>{
    console.log("UserDetails event has triggered");
    console.log(`Hello ${name} you are ${age} years old`);
});
myEmitter.emit("UserDetails",'Abhi',24)
myEmitter.emit("UserDetails",'Abhi',25)