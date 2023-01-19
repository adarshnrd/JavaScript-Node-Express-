//the old way to write to code
let name ="adarsh";
let obj={
    name:name,
}
//new way to write
let obj1={
    name
}
console.log(obj);
console.log(obj1);

let n ="name"
let obj2={
[n]:"Adarsh v",
course:"Btech"
}
console.log(obj2)
console.log(obj2.course)

//another way to concate
let ns ="Student"
let ob3={
    [ns+ "name"]: "adarsh",
    course: "btech"
}
console.log(ob3)

let names ="adarshv "
let obj4={
    [names+"is"]: "back",
    course: "btech"
}
console.log(obj4)