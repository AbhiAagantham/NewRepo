const fs=require('fs')
fs.writeFile("./sample.txt","This is a Test File",(err,data)=>{
    if(err){
        console.log("Error in Reading the File");
    }
});
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading the File");
    }
    else{
        console.log(data)
    }
})
