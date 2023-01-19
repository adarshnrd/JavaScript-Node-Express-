function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = "adarshsss"
 callback(name);
}

processUserInput(greeting);


// function prom(a,b){
//   let ab =new Promise((resolve, reject)=>{
//     let c =a+b;
//     setTimeout(()=>{
//      if(a,b){ resolve(c)
//     }else{
//       reject(("failed"))
//     }
//   },2000)
//   })
//   return ab;
// }
// prom(55,45).then((val)=>{console.log("success "+val)}).catch((err)=>{console.log(err)})

let bbb =[5,4,3,2,1]
let compare=(a,b)=>{
return a-b;
}
bbb.sort(compare)
console.log(bbb)