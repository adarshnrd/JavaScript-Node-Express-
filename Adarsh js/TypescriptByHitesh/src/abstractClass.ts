abstract class TakePhoto{

    constructor(public cameraMode:string,public filter:string){
        
    }
    abstract getsepia():void
}

class Insta extends TakePhoto{
constructor(public cameraMode:string,public filter:string,public burst:number){
    super(cameraMode,filter)
}
getsepia(): void {
    console.log("hey done ")
}
getReelTime():number{
    return 8
}
}

const hc =new Insta("on","on",48)
hc.getReelTime();       
