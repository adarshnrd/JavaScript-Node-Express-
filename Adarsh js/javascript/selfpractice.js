let ab =[1,2,3,4,56,6]
let b =[78,99,848,849,8488]
let c =[...ab,...b]
console.log(c)

let sum=0;
for(let i in c){
if(i%2!==0){
    sum+=i+" ";
}
}
//console.log(sum);

let second=0;
function summ(...args){
second+=args;
}
summ(...c)
console.log(second);

//superman function
let superr =(s,d)=>{
return s+d;
}
console.log(superr(45,45));

class Ada{
    constructor(){
        console.log("Hey Adarsh");
    }
}
let ad=new Ada();
