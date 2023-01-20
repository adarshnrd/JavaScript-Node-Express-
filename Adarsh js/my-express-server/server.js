// const express =require("express");
// const app =express();

// app.get("/", (request,response)=>{
//     response.send("<h1>hello world</h1>");
// })
// app.listen(3000,()=>{
//     console.log("Server stated on port 3000")
// });

// const express = require("express");
// const app =express();

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello Adarsh welcome to Home page</h1>");
// });

// app.listen(3000,()=>{
//     console.log("Server Started on port 3000");
// })

const express =require("express");
const app =express();

app.get("/",(req,res)=>{
    
    setTimeout(()=>{
        res.send("<h1> Hii Adarsh welcome to home page </h1>");
    },5000)
   
});

app.get("/contact",(req,res)=>{
    res.send("hii you can contact me here adarshvasu90@gmail.com")
})

app.get("/about",(req,res)=>{
    res.send("Adarsh here love to code and develop things if need help you can contact me")
})
app.listen(4500,()=>{
    console.log("Server started on port no 4500")
});