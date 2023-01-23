const express=require("express");
const bodyParser =require("body-parser");

const app =express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    let n1=req.body.Totalamt;
    let n2=req.body.Spendamt;

    let n3=n1-n2;
    res.send("Your expenses are "+n2+" and you save "+n3);
})

app.listen(4000,()=>{
    console.log("Server stated on port 4000");
});