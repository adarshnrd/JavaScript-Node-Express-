const mongoose =require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/PersonDB",{useNewUrlParser:true}).then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log("database not connected");
});

const peopleSchema =new mongoose.Schema({
    name:String,
    rating:Number,
    Age:Number
});

const People=mongoose.model("People",peopleSchema);
const people =new People({
name:"Rekha",
rating:8.5,
Age:21
});

People.create(people);
People.find({},(err,res)=>{
    if(err)console.log(err);
    else console.log(res);
})