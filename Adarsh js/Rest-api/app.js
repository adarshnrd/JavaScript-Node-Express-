const { application } = require("express");
const express =require("express")
const mongoose =require("mongoose")
const bodyParser=require("body-parser");
const e = require("express");

const app =express();
mongoose.set("strictQuery",false);

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/olymics",{useNewUrlParser:true}).then(()=>{
    console.log("Database is connected successfully")
}).catch((err)=>{err})

const womenSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
    },
    score:{
        type:Number,
        required:true
    }
})

const WomenRanking=new mongoose.model("WomenRanking",womenSchema)

//create a post request using post man

app.post("/womens",async(req,res)=>{
    try{
    const createRecord= new WomenRanking(req.body);
    console.log(req.body);
    const insertData =await createRecord.save();
    res.status(201).send(insertData);
    }catch(err){
        res.send(err);
    }
})

//add data from program 
// const women=new WomenRanking({
//     ranking:3,name:"Aman",country:"USA",score:89
// });
//WomenRanking.create(women);

//to featch all data from the mongodb

app.get("/women",async(req,res)=>{

    try{
        const read=await WomenRanking.find();
        res.send(read);

    }catch(err){
        res.send(err);
    }
})

app.get("/women/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const readone= await WomenRanking.findById({_id});
        res.send(readone);
    } catch (error) {
        res.send(error);
    }
})

//to delete the All data form table
app.delete("/women/:delete",async(req,res)=>{
    try {
        WomenRanking.deleteMany((err)=>{
            if(!err){
                res.send("successfully deleted");
            }
            else{
                res.send(err);
            }
        })

} catch (error) {
    res.send(error);
}
})
app.delete("/womenss/:id",async(req,res)=>{
    const _id=req.params.id;
    const deleteone= await WomenRanking.deleteOne({_id});
    try {
        res.send("deleted successfully");
    } catch (error) {
        res.send(error)
    }
})


//update the document
// app.put("/womens/:id",async(req,res)=>{
//     const updateDocument=async(_id)=>{
//         const result =await WomenRanking.updateOne({_id},{
//             $set:{
//                 name:"Vishnu"
//             }
//         });
//     }
//     res.send("success");
// })



// app.put("/womens/:id",async(req,res)=>{
//     try {
//         const _id=req.params.id;
//         const result=await WomenRanking.updateOne({_id},{
//             $set:{
//                 ranking:4,
//                 name:"Yaman",
//                 country:"India",
//                 score:80
//             }
//         })
//         res.send(result);
//     } catch (error) {
//         res.send(error)
//     }

// })

app.listen(3000,()=>{
    console.log("server started");
})
