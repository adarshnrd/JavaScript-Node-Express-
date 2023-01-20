//promise function
// let com =false;
// let prom =new Promise(function(resolve,reject){
//     if(com){
//         resolve("Its successfull")
//     }
//     else{
//         reject("Not successfull")
//     }
// })
// console.log(prom)
//
// function prom(a,b){
//     return new Promise((resolve,reject)=>{
//     let c =a*b;
//     if(c>0){
//         resolve(c);
//     }else{
//         reject("value less than zero");
//     }
//     })
// }

// prom(45,874).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error)
// })

function promotion(a,b){
    return new Promise((rej,resolve)=>{
        let ab=a/b;
        if(ab>=0){
        resolve(ab);
        }else{
        rej("negative number or some error")
}})
}

let ab=promotion(80,"a").then((value)=>{console.log(value)}).catch((error)=>{console.log(error)});