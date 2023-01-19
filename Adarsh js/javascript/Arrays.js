const arr=["adarsh","loves","apple","and","he has","this much grade",80]
let ans =""
for(let i=0;i<arr.length;i++){
   ans+=arr[i]+" "
}
//console.log(ans)

//2nd one arrays to string 
let num =[1,2,3,4,5]
let b =num.toString()
//console.log(b)

//3rd one add (-) using join() method
let c =num.join("_");
//console.log(c)

//4th one in array pop and push method
let newarr=[2,3,4,6,7,8,3]
newarr.push(19)
newarr.push(55)
newarr.pop()//delete the last element

let print =newarr.toString();
//console.log("["+print+"]") //trying something new

//5th shift() method is used to remove first element from the array
let nearr=[1,3,5,6,7]
nearr.shift()
let anss=nearr.toString();
//console.log(anss)

//6th unshift() method is used to add new element and return new arraylength 
let near=[1,3,5,6,7]
nearr.unshift(45)
nearr.unshift(50)
let answ=nearr.toString();
//console.log(answ)

//7th delete which is a type of operator 
let nums=[1,2,3,3,4,4,5]
delete nums[3]
let show =nums.toString()
//console.log(show) //so the length of array will be same but the index will be deleted and will be undefined

// lets try something new
let arrays=[1,2,3,4,5,6,7,8,9]
let deletedelements ="";
let answer ="";
for(let i=0;i<arrays.length;i++){
    if(arrays[i]%2==0){
        deletedelements+= arrays[i]+" ";
        delete arrays[i];
    }else{
        answer+= arrays[i]+" ";
    }
}
// console.log(`deleted element are ${deletedelements} and rest of the array is ${answer}`)

//8th concat() method to add 2 array 
let aa =[1,2,3,4,5]
let bb =[6,7,8,9,10]
//console.log(aa.concat(bb))
let cc =(aa.concat(bb)).toString();
//console.log(cc)

//9th sort array
let bbb =[5,4,3,2,1]
let compare=(a,b)=>{
return a-b;
}
bbb.sort(compare)
//console.log(bbb)

//10 reverse() method
bbb.reverse()
//console.log(bbb)

//11 splice() method
//let bbb =[5,4,3,2,1]

bbb.forEach((Element)=>{
//    console.log(Element*Element)
})

//---------->Map,Filter,Reduce-------------------->

//------------>Map------------>
const abe=[1,3,3,4]
let a =abe.map((value)=>{
    return value+1;
})
//console.log(a)

const abz =[25,144,169,225]
let q=abz.map((value)=>{
    return Math.sqrt(value)
})
console.log(q)

//------------>Filter---------->
let arrq=[18,20,30,45,17,15,16,18]
let rop =arrq.filter((val)=>{
    if(val<18){
        return val;
    }
})
console.log(rop)

//----------->Reduce---------->
//so we can think that it works like sum+=arr[i]
// gives single value

let sum=[1,2,3,4,5]
let totalsum=sum.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(totalsum)

//practice question

//filter for number divisble by 10
let arr1=[10,20,30,440,660,3]
let n=arr1.filter((x)=>{
    return x%10==0;
})
console.log(n);

//give the square of the element present in arr
let arr2=[1,2,3,4,5]
let square=arr2.map((x)=>{
    return x*x;
})
console.log(square)


