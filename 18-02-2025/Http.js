const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.write("Welcome to NodeJs Http Server Home Page")
    res.end();
   }
   else if(req.url==='/about'){
   // res.write("ABOUT US PAGE");
    fs.readFile(__dirname+"/about.html","utf-8",(err,data)=>{
        if(err){
            res.write("Error reading the file");
            res.end();
        }
        else{
        res.write(data);
        res.end();
        }
    });
    
   }
   else if(req.url==='/users'){
    res.write(JSON.stringify(Users));
    res.end();
   }
   else{
    res.write("Invalid Url")
    res.end();
   }
    
})
server.listen(3000)
console.log("Server started at port no 3000")