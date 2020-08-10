const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("home");
});

app.get("/country", (req,res)=>{
  res.render("country");
});

app.listen(3000, (req,res)=>{
  console.log("Server running on port 3000");
});
