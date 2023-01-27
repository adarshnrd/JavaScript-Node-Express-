const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB",
{  useNewUrlParser:true,}).then(()=>{
    console.log("database connected successfull");
}).catch((err)=>{
    console.log("database not connected");
});

const fruitSchema =new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});
const Fruit =mongoose.model("Fruit",fruitSchema);

const fruit =new Fruit({
    name:"Applee",
    rating:7,
    review:"Goood fruitg"
});

Fruit.create(fruit);//.then(()=>{console.log("saved")}).catch((err)=>{console.log("error"+err)});
Fruit.find({},(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})