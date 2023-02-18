const express = require("express");
const app = express();
const ejs =  require("ejs");


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
