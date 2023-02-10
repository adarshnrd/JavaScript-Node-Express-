// interface TakePhoto{
//    cameraMode: string,
//    BlurMode: string,
//    picCount:number 
// }
// interface Story{
//     createStory:string,
//     Storystatus:boolean
// }

// class Youtube implements TakePhoto,Story{
//     constructor(
//         public cameraMode:string,
//         public BlurMode:string,
//         public picCount:number,
//         public createStory:string,
//         public Storystatus:boolean){
//          cameraMode=this.cameraMode,
//          BlurMode=this.BlurMode,
//          picCount=this.picCount;
//          createStory=this.createStory,
//          Storystatus=true;
//         }
// }

// let ab =new Youtube("on","on",457,"Done",true);
// console.log(ab)

interface TwitterTools{
    accountName:string,
    accountPremium:boolean,
    createStroy:string,
    numberofPost:number,
    numberofChats:number,
    Chats:string
}

class Twitter implements TwitterTools{
constructor(
public accountName:string,
public accountPremium:boolean,
public createStroy:string,
public numberofPost:number,
public numberofChats:number,
public Chats:string
){
    this.accountName=accountName,
    this.accountPremium=accountPremium,
    this.createStroy=createStroy,
    this.numberofPost=numberofPost,
    this.numberofChats =numberofChats,
    this.Chats =Chats
}
}

const adarsh =new Twitter("Adarsh",true,"NO",45,10,"hey rash how are you");
console.log(adarsh);


type ada={
    name:string,
    class:number
}
class add {}
export{}


type schema={
    name:string,
    no:number
}

// let Arr:schema={
// name:"adarsh",
// no:1545    
// }