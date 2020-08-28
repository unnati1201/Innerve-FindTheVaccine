const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mapNames = require("./mapNames.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

let names = [];
let mapImg = [];
let mapUrl = [];

let newItem, mapData, countryMap, name;

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
      res.render("country", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap});
      res.end();
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
  if(req.body.ans1 === "4"){
    console.log("Correct answer");
  }
  res.redirect("/country/" + name);
})
app.listen(3000, (req,res)=>{
  console.log("Server running on port 3000");
});
