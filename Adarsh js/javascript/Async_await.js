async function ada(){
    let delhiwheater =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 D")
        },2000)
    })
    let banglorewheater=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 D")
        },3000)
    })

    console.log("Fetching data");
    let dws = await delhiwheater;
    console.log("Delhi data fetched");
    let bws =await banglorewheater;
return [dws,bws]
}

// let a =ada()
// a.then((value)=>{
//     console.log(value)
// })

const cheery =async ()=>{
    console.log("hey i am adarsh and i am waiting")
}

const calle= async ()=>{
    console.log("welcome to weather control room")
    let a =await ada().then((value)=>{
        console.log(value)
    })
    let b =await cheery()
}
calle();