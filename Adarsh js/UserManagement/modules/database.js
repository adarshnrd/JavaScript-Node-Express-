const mongoose=require("mongoose")

//  const ManagementData=new mongoose.model("ManagementData",ManagementSchema);
// const ManagementSchema= new mongoose.Schema({
//     EnrollmentNO:{type:Number,required:true,unique:true},
//     Name:{type:String,required:true},
//     Year:{type:Number,required:true},
//     Branch:{type:String,required:true},
//     Cast:{type:String,required:true},
// })

const ManagementSchema=mongoose.Schema({
    EnrollmentNO:{type:Number,required:true,unique:true},
    Name:{type:String,required:true},
    Year:{type:Number,required:true},
    Branch:{type:String,required:true},
    Cast:{type:String,required:true},})

module.exports = new mongoose.model("ManagementData",ManagementSchema)