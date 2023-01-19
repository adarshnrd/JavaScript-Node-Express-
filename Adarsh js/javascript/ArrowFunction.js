//there are 3 ways to make function
//1st

let a ="adarsh"
let b ="naman"
function friend(a,b){
    return `${a} is a friend of ${b}`
}
console.log(friend(a,b))

//2nd way

let ab =function(a,b){
 return `${a} is a friend of ${b}`   
}
console.log(ab(a,b))

let abc =(a,b)=>{
    return `${a} is a friend of ${b}`
}
console.log(abc(a,b))

let abcd =a=> `welcome to house of ${a}`
console.log(abcd(a))

