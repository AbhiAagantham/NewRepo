const os=require('os')
function displaymem(){
    console.log("Total Memory:",os.totalmem())
    console.log("Free Memory: ",os.freemem())
    console.log("Percentage of free mem :", (os.freemem()/os.totalmem())*100)
}
 const id =setInterval(displaymem,5000);
  
 setTimeout(()=>{
    clearInterval(id);
    console.log("Finished")
 },12000);

