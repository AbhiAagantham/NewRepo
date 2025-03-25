// Write a function greet that takes a name and a callback function.
// The function should return a greeting message by calling the callback with
// the message.


function greet (name , callback){
    let msg= "Hello "+name;
    callback(msg);
}
// Printmsg is the call back function
function printmsg(mesg){
    console.log(mesg)
}
 greet ("abhi",printmsg);



//  function calc (num,callback){
//      num=num*num;
//     callback (num);
//  }
//  function plus2(num){
//     console.log(num+2);
//  }

//  calc(5,plus2);
