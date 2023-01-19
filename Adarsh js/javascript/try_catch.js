let num =1;
try{
let ab =5;
console.log(ab/0);
if(ab/0==Infinity){
throw new error;
}
}catch(error){
console.log(error.message)
}
finally{
console.log("program finished");
}