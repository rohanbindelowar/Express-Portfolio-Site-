// rohan bin delowar (301283416)
// date- 02/10/2023

const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res,next)=>{
    res.render('index')
})
app.get("/about",(req,res,next)=>{
    res.render('index')
})
app.get("/projects",(req,res,next)=>{
    res.render('index')
})
app.get("/services",(req,res,next)=>{
    res.render('index')
})
app.get("/contact_me",(req,res,next)=>{
    res.render('index')
})
app.listen(3000,()=>{
    console.log("all good");
});