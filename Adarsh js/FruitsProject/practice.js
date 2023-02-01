const mongoose =require("mongoose");

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitDB",{useNewUrlParser:true,})
 
const fruitSchema =new mongooose.Schema({
    name:String,
    rating:Number,
    review:String
})
const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit =new Fruit({
    name:"Apple",
    rating:7,
    review:"great fruit i love it"
});
Fruit.create(fruit);
Fruit.find({},(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})