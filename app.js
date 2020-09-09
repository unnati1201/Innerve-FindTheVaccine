const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const mapNames = require("./mapNames.js");
// const scoreboard = require("./public/scoreboard.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/countryDB", {useNewUrlParser: true, useUnifiedTopology: true});

const countrySchema = new mongoose.Schema({
  name: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String
},
{ collection: 'countrys' }
)

const Country = new mongoose.model("Country",countrySchema);


let names = [];
let mapImg = [];
let mapUrl = [];

let newItem, mapData, countryMap, name;
var answer1 = 0;
var answer2 = 0;

app.get("/", (req,res)=>{
  mapNames.mapNames().forEach(function(item){
    const newItem = item.charAt(0).toUpperCase() + item.slice(1);
    names.push(newItem);
    let newImg = "/images/"+newItem + ".png";
    mapImg.push(newImg);
    let newUrl = "/country/"+item;
    mapUrl.push(newUrl);
  })
  res.render("home", {mapNames: names, mapImg: mapImg, mapUrl: mapUrl});
});

app.get("/country/:name", (req,res)=>{

  name = req.params.name;
  mapNames.mapNames().forEach(function(item){
    if(item === name){
      newItem = item.charAt(0).toUpperCase() + item.slice(1);
      mapData = "/" + name + "/mapData" + name + ".js";
      countryMap = "/" + name + "/countrymap" + name + ".js";
      // Country.find((err,country)=>{
      //   if(!err){
      //     var itemObject = country.toObject();
      //     console.log(itemObject.name);
      //     console.log(country);
      //     console.log(country.question1);
      //     answer1 = country.question1;
      //   }
      // })
      Country.findOne({name: name},function(err,country){

        if(!err){
          answer1 = country.question1;
          // console.log(country.question1);
          console.log("country:" + answer1);
          res.render("country", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap, ques1: answer1});
          res.end();
        }else{
          console.log(err);
        }
      })

      Country.findOne({name: name},function(err,country){

        if(!err){
          answer2 = country.question2;
          // console.log(country.question1);
          console.log("country:" + answer2);
          res.render("country", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap, ques2: answer2});
          res.end();
        }else{
          console.log(err);
        }
      })
    }
  });
});

app.get("/question1", (req,res)=>{
  res.render("question1", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap});
})

app.post("/question1", (req,res)=>{
  const t = req.body.smallName;
  var thisUrl = "./public/" + t + "/mapdata" + t + ".js";
  const mapDataFile = require(thisUrl);
  var answer = req.body.ans1;
  Country.updateOne({name: name}, {question1: answer}, (err)=>{
    if(err){
      console.log(err);
    }else{
      // answer1 = answer;
      // console.log(answer1);
      console.log("Updated");
      // if(req.body.ans1 === "4"){
      //   console.log("Correct answer");
      // }
    }
  });
  res.redirect("/country/" + name);
})

app.get("/question2", (req,res)=>{
  res.render("question2", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap});
})

app.post("/question2", (req,res)=>{
  const t = req.body.smallName;
  var thisUrl = "./public/" + t + "/mapdata" + t + ".js";
  const mapDataFile = require(thisUrl);
  var answer = req.body.ans2;
  Country.updateOne({name: name}, {question2: answer}, (err)=>{
    if(err){
      console.log(err);
    }else{
      // answer1 = answer;
      // console.log(answer1);
      console.log("Updated");
      // if(req.body.ans1 === "4"){
      //   console.log("Correct answer");
      // }
    }
  });
  res.redirect("/country/" + name);
})
app.listen(3000, (req,res)=>{
  console.log("Server running on port 3000");
});
