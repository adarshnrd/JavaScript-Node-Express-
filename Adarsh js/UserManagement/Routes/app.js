const express =require("express");
const { dirname } = require("path");
const {route} =require("express/lib/application");
const router =express.Router();
const director =require("../modules/database")

router.post("/data",async(req,res)=>{
    try {
        // const createdata =new ManagementData(req.body);
        // const insertData =await createdata.save();
        // res.status(201).send(insertData);
        const createdata =await director.create(req.body)
        res.json(createdata);
    } catch (error) {
        res.send(error);
    }
})
router.get("/",async(req,res)=>{
    try {
        // const readall=await ManagementData.find()
        // res.send(readall);
        const alldata= await director.find();
        console.log(alldata)
        res.json(alldata);
    } catch (error) {
        res.send(error);
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const read=await director.findById(_id);
        res.send(read);
    } catch (error) {
        res.send(error);
    }
})

module.exports=router;