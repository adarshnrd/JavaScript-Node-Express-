const express =require("express")
const mongoose =require("mongoose")
const bodyParser=require("body-parser")
const dataRouter=require("./Routes/app");
const { connect } = require("http2");
const conn="mongodb://127.0.0.1:27017/ManagementDB";

mongoose.set("strictQuery",false);
const app =express();

app.use(bodyParser.json())
app.use("/",dataRouter);

mongoose.connect(conn,()=>{}).then(()=>{console.log("Database connected")}).catch((err)=>{console.log(err)})

app.listen(3500,()=>{
    console.log("connected successfully to server.")
})