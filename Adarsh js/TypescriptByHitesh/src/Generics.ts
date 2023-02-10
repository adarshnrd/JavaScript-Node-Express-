function Gen<T>(val:T):T{
    return (val);
}
const ab=Gen(48);
console.log(ab)

//interface 
interface Bottle{
    name:string,
    brand:string,
    id:number
}

function yahoo<Bottle>(arg:Bottle):Bottle{
    return arg;
}
console.log(yahoo({name:"adarsh",brand:"Boat",id:145}));

// function identity<T>(arg:T):T{
//     return arg;
// }

// function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
//     return  {
//         valOne,
//         valTwo
//     }
// }

interface Database{
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{valOne,valTwo}
}


interface Quiz{
    name:string,
    type:string
}

interface Course{
name:string,
author:string,
subject:string
}

// class Sellable<T>{
//     public cart: T[]=[];

//     addToCart(product:T){
//         this.cart.push(product);
//     }
// }

class Sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product);
    }

}