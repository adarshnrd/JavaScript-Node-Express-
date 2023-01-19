// const express =require("express");
// const app =express();

// app.get("/", (request,response)=>{
//     response.send("<h1>hello world</h1>");
// })
// app.listen(3000,()=>{
//     console.log("Server stated on port 3000")
// });

const express = require("express");
const app =express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello Adarsh</h1>");
});

app.listen(3000,()=>{
    console.log("Server Started on port 3000");
})