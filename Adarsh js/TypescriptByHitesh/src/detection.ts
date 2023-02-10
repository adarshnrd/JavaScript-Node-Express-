function detectType(val:number|string){
if(typeof val==='string'){
    return val.toLowerCase()
}
return val+4;
}

console.log(detectType("ADARSH"));
console.log(detectType(52));


//in narrowing

interface Account{
    name:string,
    email:string,
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:Account|Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}


type Fish={swim:()=>void};
type Bird={fly:()=>void};

function isFish(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim !== undefined; 
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }else{
        pet
        return "Bird Food"
    }
}

