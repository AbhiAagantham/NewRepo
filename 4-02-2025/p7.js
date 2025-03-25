const fs=require('fs')
fs.appendFile("./abc.txt","This is abc file",(err)=>{
    if(err){
        console.log("Errror in appending the file")
    }
    else{
        console.log("Successfuly appended")
    }
})
fs.readFile("./abc.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading the data from abc.txt")
    }
    else{
        console.log("Reading after appending....")
        console.log(data);
    }
})