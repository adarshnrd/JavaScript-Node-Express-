//console.log("hello");
function hello(string:String){
    console.log("hello "+string);
 }
// hello("adarsh");
// var n :Number=1;
// console.log(n);
//dataTypes
let isWinter:boolean=false;

let count:Number=5;
let names:String="Adarsh";

var namess:any[]=["Adarsh","Rock",45,null];

enum starks {Jon,bran ,edder,catlyn};//is a set of string or key to refer.
var cat :starks=starks.catlyn;

function getName():void{ 
    console.log("winter is comming");
}
// getName();

interface Stark{
    name: string;
    age?:number;
}
function printName(stark:Stark){
console.log(stark.name);
}
// printName({name:"eddard"});
// printName({name:"joe"});

// const user ={
//     name:"adarsh",
//     id:15
// }

interface User{
    name:String;
    id:number;
}

// const user: User={
//     name:"adarsh",
//     id:24,
// }

class UserAccount{
    name:string;
    id:number;

    constructor (name:string, id:number){
        this.name=name;
        this.id=id;
    }
}
const user:User =new UserAccount("ada",1);
const user1: User = new UserAccount("Adarsh",2);

type MyBool =true|false;


//interface
interface Backpack<Type>{
    add:(obj:Type)=>void;
    get:()=>Type;
}

declare const backpack:Backpack<string>;

// const object = backpack.get();
// backpack.add("4884848848");
//Structural Type System
interface Point{
    x:number;
    y:number;
}

function logPoint(p:Point){
    console.log(`${p.x},${p.y}`);
    // console.log(p.x,p.y);
}
const point={x:12,y:26};
// logPoint(point);

const point3={x:123,y:500,z:584};
// console.log(point3);
// logPoint(point3);

class VirtualPoint{
    x:number;
    y:number;

    constructor(x: number,y: number){
        this.x=x;
        this.y=y;
    }
}

const newvp =new VirtualPoint(45,50)
// logPoint(newvp);

const nadmess =["Adarsh","Suprem","The king is back be happy"];

// for(let i=0;i<nadmess.length;i++){
// console.log(nadmess[i]);
// }

// for(let i in nadmess){
//     console.log(nadmess[i]);
// }

function printId(id: number| string){
    console.log("your id is "+id);
}
printId("adarsh");
printId(1234);
//printId(12345ss); cant do it

//intefaces

interface Point{
    x:number;
    y:number;
}

function printCoord(pt:Point){
    console.log("The Coordinate's value is"+pt.x);
    console.log(`The Coordinate's value is ${pt.y}`);
}
printCoord({x:100,y:100});

type Animal={
    name:string
}

type Bear= Animal &{
    honey:boolean;
}

// const bear =  getBear();
// bear.name;
// bear.honey;