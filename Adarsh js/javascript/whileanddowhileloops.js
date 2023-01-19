let n =5;
let i =0;
do{
    i++;
    console.log(i)
}while(i<0)

// function oneplusavg(x,y){
//     return 1+(x+y)/2;
// }
// let a =10;
// let b =20;
// let c =oneplusavg(a,b);
// console.log(c);

// //another way to write function is

// const sum =(x,y)=>{
//     return x+y;
// }
// let ans =sum(a,b);
// console.log(ans)

function sum(x,y){
    return x+y;
}
console.log(sum(10,20));

const ada =(x,y)=>{
    return (x+y)/2;
}
console.log("Average " +ada(30,30));