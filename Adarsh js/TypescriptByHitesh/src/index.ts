// class User{
//     email:string;
//     name:string;
//     city:string="";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name =name;
//     }
// }

// const adarsh =new User("adarsh@123","Adarsh");
// adarsh.city="Indore";

class UserAccount{
    private _courseCount:number =1;
    firstName:string;
    lastName:string;
   readonly city:string="Indore";

    constructor(firstname:string,lastname:string){
        this.firstName=firstname;
        this.lastName=lastname;
    }
     get courseCount():number{
        return this._courseCount;
     }
     set courseCount(count:number){
        if(this._courseCount===1){
            throw new Error("Course count should be more than 1");
        }
        this._courseCount=count;
     }


}

const adarsh =new UserAccount("Adarsh","v");
// adarsh.city ="Indore";