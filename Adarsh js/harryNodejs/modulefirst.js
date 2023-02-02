// const simple2 =require("./modulesecond")

//es6 modules
//import {simple} from "./modulesecond.mjs"

//to access a single element which it will compare if not found return the default one.
//import simple23 from "./modulesecond.mjs";

//to use the function name as we required
// import { simple as simple2 } from "./modulesecond.mjs"
// simple2()
//to access multiple exports but here it will compare with the acutal name
// import {yo,simple} from "./modulesecond.mjs"
 
// import all 
import * as a2 from "./modulesecond.mjs"
console.log(a2.simple());