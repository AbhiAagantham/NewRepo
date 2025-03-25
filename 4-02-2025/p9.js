const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("Hello World Iam Abhi")
    res.end()
})
server.listen(3000)
console.log("Server has started at port No :3000")