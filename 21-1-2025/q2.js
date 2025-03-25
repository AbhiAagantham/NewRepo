// Question 2: Create three functions that take a number, multiply it by 2,
// subtract 3, and then add 10. Use callbacks to chain these operations together.

function multiply (num, callback1){
    num=num*2;
    callback1(num);
}
function sub(num,callback2){
    num=num-2;
    callback2(num);
}
function add(num,callback3){
    num=num+10;
    callback3(num);
}

// function processNumber(num){
//     multiply(num,function(res1){
//         sub(res1,function(res2){
//             add(res2,function(res3){
//                 console.log("The final result is "+ res3);
//             });
//         });
// });
// } 

function processNumber(num){
    multiply(num,(res1)=>{
        sub(res1,(res2)=>{
            add(res2,(fres)=>{
                console.log("The Final result is "+ fres);
            })
        })
    })
}
processNumber(5);