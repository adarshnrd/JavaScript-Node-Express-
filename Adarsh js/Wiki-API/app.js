//have problem with it not completed

const express =require("express");
const bodyParser =require("body-parser");
const ejs =require("ejs")
const mongoose =require("mongoose")

const app =express()
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

const articleSchema ={
    title: String,
    content:String
};

const Article =mongoose.model("Article",articleSchema);

app.get("/articles",(req,res)=>{
    Article.find((err,foundArticles)=>{
        if(!err){    res.send(foundArticles);}
        else{res.send(err);}
    });
});

app.listen(3000,()=>{
    console.log("Server stated on port 3000");
})