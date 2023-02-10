// interface TeslaModelS{
//     length:number,
//     width:number,
//     wheelbase:number,
//     seatingCapacity:number,
//     getTyrePressure:()=>number,
//     getRemCharging:()=>number
// }

// interface User{
//     name:string,
//     age?:number,
//     getMessage():string
// }
// const user:User={
//     name:"monster",
//     age:30,
//     getMessage(){return"Hello welcome"}
// }
// console.log(user)

interface Circle{
    kind:"Circle",
    radius:number
}

interface Square{
    kind:"Square",
    side:number
}
interface Rectangle{
    kind:"Rectangle",
    length:number,
    width:number
}

type Shape =Circle|Square|Rectangle

function getTrueShape(shape:Shape)
{
if(shape.kind==='Circle'){
    return Math.PI * shape.radius ** 2
}
return;
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI * shape.radius **2
        case "Square":
            return shape.side *shape.side
            case "Rectangle":
                return shape.length *shape.width
            default:
                const _deshape:never =shape
                return _deshape
    }
}
