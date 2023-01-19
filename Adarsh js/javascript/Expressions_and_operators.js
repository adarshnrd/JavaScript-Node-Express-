//Arithmetic operators

const operatorss={
    addition :"+",
    substraction :"-",
    Multiplication: "*",
    Exponentiation: "**",
    Division: "/",
    Modules: "%",
    Increment: "++",
    Decrement: "--"
}
//console.log(operatorss.Decrement);

//Exponentiation means
let ab =5;
//console.log(ab**5); // so usuall it is (5)to the power 5
console.log(ab**2);

//Assignment operators
/*
write  explaination
x=y       x=y
x+=y      x =x+y
x-=y      x =x-y
x*=y      x =x*y
x/=y      x =x/y
x%=y      X =X%Y
X**Y      X =X**Y
*/

//Comparison operators
let a =23;
let b =35;

//1st ==
if(a==b)
{
    console.log(true);
}
//2nd !=
if(a!=b){
    console.log(true)
}
else{
    console.log(false)
}
//3rd === the 3equal method check with type of if its string and the 2nd element is number it will give false;
if(a===b){
    console.log(true+"  a is equal to b");
}
else{
    console.log(false);
}
//4th >greater than and < less than 
if(a>b){
    console.log("a is greater than b")
}
if(a<b){
    console.log("b is greater than a")
}
//5th >= and <=
if(a=>b){
    console.log("a is greater than b")
}
else if(a<=b){
    console.log("b is greater than a")
}

// if else if statement
if(a!=b){}
else if(a==b){}
else if(a>=b){}
else if(a<=b){}
else { console.log(yes)}

