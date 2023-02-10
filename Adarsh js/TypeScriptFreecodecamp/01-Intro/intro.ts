let user={name:"adarsh",age:10}
// console.log("Adarsh");

function addTwo(num:number):number{
    return  num+2
}
const add =addTwo(35);
// console.log(add);
function Uppercase(ada:string):string{
    return ada.toUpperCase();
}
const upper=Uppercase("adarsh");
// console.log(upper);

function signUp(name:string,email:string,isPaid:boolean):string{
    return `your name is ${name} and your email is ${email} and this account is active ${isPaid}`
}
const ab =signUp("Adarsh","adarshvasu90@gmail.com",true);
// console.log(ab);

//Arrow functions
const getHello=(s:string):string=>{return `${s}`};
const a =getHello("adarsh")
// console.log(a)

const heros=["Thor","Spiderman","Ironman","Captain India"]
const ada=heros.map((heros):string=>{return `hero is ${heros}`});
console.log(heros);
console.log(ada);

//return type
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
//function handlerror
function handlerror(errmsg:string):never{
    throw new Error(errmsg);
}

//myObjects
const User={
    name:"adarsh",
    email:"adarsh90@gmail.com",
    isActive:true
}

// const adcreateUser({name:"adarsh",email:"adarsh90@gmail.com",isActive:true})

function createCourse(name:string,price:number,):string{
return `the Name is ${name} and price is ${price}`;
}
const abs =createCourse("Adarsh",95);
// console.log(abs);

// type alias

type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser(user:User):User{
    return {name:"adarsh",email:"aido@12",isActive:true}
}

type Users={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean
}
let myUser:Users ={
_id:"dsoijdfi334",
name:"adarsh",
email:"adarsh@gmail.com",
isActive:true
}
myUser.email="superman@gmail.com"
// myUser._id ="4848488"; cant do it because of readonly property
console.log(myUser);


//arrays ways to declare
const superHeros:string[]=[]

const heroPower:Array<number>=[]

type adae={
    name:string,
    isActive:boolean
}

const allUsers:adae[]=[]

allUsers.push({name:"adarsh",isActive:true})
allUsers.push({name:"suraj",isActive:false})
allUsers.push({name:"shingam",isActive:true})
console.log(allUsers);

//union
let score:number |string =45;
score="adarsh";

type Us ={
    name:string,
    id:number
}
type Admin ={
    username:string,
    id:number
}

let adarsh:Us|Admin ={name:"Adarsh",id:344};
adarsh={username:"adarshrid",id:443};

let Roman:Us|Admin ={name:"Roman",id:787} 
Roman={username:"superwoman.roman",id:787}
console.log(adarsh);