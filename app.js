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
  const name = req.params.name;
  mapNames.mapNames().forEach(function(item){
    if(item === name){
      const newItem = item.charAt(0).toUpperCase() + item.slice(1);
      const mapData = "/" + name + "/mapData" + name + ".js";
      const countryMap = "/" + name + "/countrymap" + name + ".js";
      res.render("country", {mapName: newItem, smallName: name, mapData: mapData, countryMap: countryMap});
      res.end();
    }
  });
});

app.listen(3000, (req,res)=>{
  console.log("Server running on port 3000");
});
