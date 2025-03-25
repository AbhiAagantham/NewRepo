// Question 3: Write a function delayedMessage(message, delay) that prints the
// message after the specified delay using setTimeout. Use a callback for when
// the message has been printed.

// function display (){
//     console.log("Start");
//     setTimeout(()=>{
//         console.log("This is the delayed function");
//     },2000);
//     console.log("End");
// }
// display();


function delayedMessage(message,delay,callback){
    console.log("Started executing");    
    setTimeout(()=>{
        console.log("Successfully waited for 1000ms to display the msg "+message);
        callback();
    },delay);
}
function callbackex(){
    console.log("This is a callback function that is executed after a certain delay and after the msg");
}
delayedMessage("Hello World",2000,callbackex);
