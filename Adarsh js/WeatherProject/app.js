const express =require("express")
const https =require("https");
const bodyParser =require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html") 
})
app.post("/",(req,res)=>{
    const query=req.body.cityName;
    const apikey="26a544243dfbbcf1fa5a24f909404948"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metric`;
https.get(url,(response)=>{
    console.log(response.statusCode)
    response.on("data",(data)=>{
        const weatherdata =JSON.parse(data);
        const temp =weatherdata.main.temp;
        const description =weatherdata.weather[0].description;
        const icon =weatherdata.weather[0].icon;
        const iconurl =`http://openweathermap.org/img/wn/${icon}@2x.png`;
        res.write("<p>The weather is currently "+ description+"<p>");
        res.write("<h1>The temperature in "+query+" is "+temp+" degrees Celcius. and  "+description+"</h1>")
        res.write(`<img src=${iconurl}>`);
        res.send();
    })
});
})
app.listen(4000,()=>{
    console.log("Server started on 4000")
})