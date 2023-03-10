const express = require("express");
const bodyParser= require("body-parser")

const app =express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var c =num1+num2;

    res.send("The calculation of num1 and num2 is "+c);
});

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmicalculator.html");
})
app.post("/bmicalculator",(req,res)=>{
    let weight=parseFloat(req.body.weight);
    let height=parseFloat(req.body.height);
    let bmi =weight/(height*height);

    res.send("you bmi is "+bmi);

})
app.listen(3000,()=>{
    console.log("Server stated on port 3000")
});