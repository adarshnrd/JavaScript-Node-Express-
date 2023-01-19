//promise function
let com =false;
let prom =new Promise(function(resolve,reject){
    if(com){
        resolve("Its successfull")
    }
    else{
        reject("Not successfull")
    }
})
console.log(prom)