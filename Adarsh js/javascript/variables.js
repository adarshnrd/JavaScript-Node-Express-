//there are mainly 3 variables in js and they are
//var which is a globall scoped 
var a ="adarsh";
console.log(a);
var a ="Naman";
//console.log(a);
//so here we can see that var a is overriden ;

//now comes let which is a block scoped.
let b ="adarsh";
//let b ="Naman"; here it will give error if we defined it with same name only one type of it can be declared.
b ="Raman";
console.log(b);
//it can too overrident but we can not create the variable let b again.

const c ="super";
//const c ="supersss"; const to cant be generated again
//c ="mans"; will give error here
console.log(c);// const cannot be overriden.

//undefined
ada ="rekha"
console.log(ada);