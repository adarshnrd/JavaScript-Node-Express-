// let complete =false;
// let prom =new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am successfull");
//     }
//     else{
//         reject("I am failed");
//     }
// });
// console.log(prom);

// let complete =false;
// let prom =new Promise(function(resolve,reject){
//     if(complete){
//         resolve("success")
//     }
//     else{
//         reject("failed")
//     }
// })
// console.log(prom)
/*

// let complete = false;
function prom(complete) {
  return new Promise(function (solved, reject) {
    console.log("Fetching data please wait");
    setTimeout(() => {
      if (complete) {
        solved("success");
      } else {
        reject("failed");
      }
    },2000);
  });
}
// let onful = (result) => {
//   console.log(result);
// };
// let onreject = (error) => {
//   console.log(error);
// };
// console.log(prom(true));
// prom(true).then(onful).catch(onreject);

prom(true).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
*/

/*
function prom(complete){
return new Promise(function(resolve,reject){
console.log("feching data please wait")
setTimeout(()=>{
    if(complete){
        resolve("success")
    }
    else{
        reject("failed")
    }
},2000)
})
}
let complete =true;
prom(complete).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
*/

/*
//divison of 2 number using promise
function prom(a,b){
    return new Promise(function(resolve,reject){
        console.log("Fetching data please wait");
        let c =a/b;
        setTimeout(()=>{
            if(a,b){
                resolve(`your answer is : ${c}`);
            }else{
                reject("Failed to calculate");
            }
        },2000)
    });
}

prom(20,5).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});
*/
/*
//multiplication of 2 number
function prom(a,b){
    return new Promise(function(resolve,reject){
        console.log("fetching data pls wait");
        let value=a*b;

        setTimeout(()=>{
            if(a,b){
                resolve(`Your answer ${value} `)
            }
            else{
                reject("Failed to calculate");
            }
        },2000)
    })
}
prom(5,5).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
*/

//substraction of 2 number
/*
function prom(a,b){
    return new Promise(function(resolve,reject){
        console.log("fetching data pls wait")
        let c =a-b;

        setTimeout(()=>{
            if(a,b){
                resolve(`Your answer is ${c}`)
            }
            else{
                reject("cant calculated")
            }
        },2000)
    })
}
prom(25,5).then((result)=>{console.log(result);}).catch((error)=>{
    console.log(error);
});
*/
/*
//adding 2 numbers
function prom(a,b){
    return new Promise(function (resolve,reject){
    console.log("fetching pls wait")
    let c =a+b;
    setTimeout(()=>{
    if(a,b){
        resolve(`Yours Answer is ${c}`)
    }    
    else{
        reject("Cant calculated")
    }
    },2000)
    })
}
prom(55,5).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});
*/
/*
//printing with setTimeout
console.log("hello")
setTimeout(()=>{
    console.log("how are you")
},2000)
setTimeout(()=>{
    console.log("Adarsh")
},1000)
*/
/*
//making 2 promise and calling them parallel
let p1 =new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        resolve(true)
    },3000)
})

let p2 =new Promise((resolve,reject)=>{
console.log("Promise is pending");
setTimeout(()=>{
    reject(new Error("Error pls resolve it"))
},3500)
})

p1.then((value)=>{
    console.log(value)
})
p2.catch((value)=>{
    console.log("Some error occurred in p2")
})
*/

//making 3 promise and calling them parallel
let a1= new Promise((resolve,reject)=>{
    console.log("Fetching data pls wait")
    setTimeout(()=>{
        resolve("successfull")
    },2500)
})

let a2 =new Promise((resolve,reject)=>{
    console.log("fetching data wait")
    setTimeout(()=>{
        reject(new Error("the error is here"))
    },2500)
})
let a3=new Promise((resolve,reject)=>{
    console.log("fetching data")
    setTimeout(()=>{
        resolve("data feeded success")
    },2500)
})

a1.then((value)=>{
    console.log(value)
})
a2.catch((val)=>{
    console.log("some error")
})
a3.then((val)=>{
    console.log(val)
})