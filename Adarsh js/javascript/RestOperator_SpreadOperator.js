//RestOperator is used in function in that we can pass different arrgument accordance with us
function sum(name,...args){
    let sum=0;
    for(let i in args){
        sum+=args[i];
    }
    //console.log(`The sum of ${name} is : `+sum)
    //console.log(sum);
}
sum("Adarsh",20,20,20,20,20)

//practice
//print Name Course totalmarks in 5 subjects

function marks(name,Course,...marks){
    let sum =0;
    for(let i in marks){
        sum+=marks[i];
    }
//    console.log(`${name} and Course obtained is ${Course} and marks is ${sum} out of 500`);
}
marks("Adarsh","Btech",90,95,55,45,80);
marks("Shubham","Btech",90,80,50,60,70);
marks("Aman","Bcom",99,89,90,78,50);


//sum of n numbers using rest operator with no parameters
function totalsum(name,...sum){
    let totsum =0;
    for(let i in sum){
        totsum+=sum[i];
    }
    console.log(totsum);
}
// totalsum("ada",45,50,45,5,4,848,4,84,84,8,48,48,84,84,84,84,95,95,95,95,6,9,8595,2,1,95,94,4,9,52,595584,484,84,84,84,88,"96",1,)
// totalsum("shu",78848484844888999,98777777777777777777)
// totalsum("ank",1000+1000+1000)

//find the total sum of square sum
function totalsquare(...args){
    let totalsquaresum=0;
    for(let i in args){

    totalsquaresum+=args[i]*args[i];
    }
console.log(`The total sum of the square is ${totalsquaresum}`);
}
//totalsquare(5,5,5,5,5)



//--------------------------->Spread Operator------------------------->
//by using spread operator we use array as arrgument and pass the array as individual elements

function multiple(...args){
let total=0;
for(let i in args){
    total+=args[i];
}
console.log(total);
}
let a=[1,2,3,4,5]
let b =[6,7,8,9,10]

multiple(...a,...b);

//concate 2 array using spread operator
let arr1 =[1,2,3,4,5,6,8]
let arr2=[9,10,11,12,13,14,15]
let arr3=[...arr1,...arr2]

//console.log(arr3)

// we can concate 2 object using spread operator
let obj ={name:"Adarsh"
,Course:"Btech"
,Age:21}

let obj2={
    year: "4th year",
    Minorproject:"yes done"
}

let obj3={...obj,...obj2}
console.log(obj3)
