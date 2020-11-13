const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const app = express();
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_module",
});
connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected ...");
  } else {
    console.log("Error connecting database ...");
  }
});
//using Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
// To use CKeditor on node
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/node_modules/ckeditor'));
// app.use(express.static(__dirname + '/index.html'));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/public/pages/index.html");
    
// });
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/", (req,res) => {
  res.render("home");
});

app.get("/students/eventsAttended", (req, res) => {
  res.render("fields/stu_eventsAttended");
});

app.post("/students/eventsAttended", (req, res) => {
  console.log(req.body);
  connection.query("INSERT INTO eventsAttended SET ?", req.body, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred",
      });
    } else {
      res.send({ code: 200, message: "Added successfully!" });
    }
  });
});


app.get("/students/Awards", (req, res) => {
  res.render("fields/stu_awards");
});

app.post("/students/Awards", (req, res) => {
  console.log(req.body);
  connection.query("INSERT INTO Awards SET ?", req.body, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred",
      });
    } else {
        res.send({ code: 200, message: "Added successfully!" });
    }
  });
});

app.get("/students/placement", (req, res) => {
  res.render("fields/stu_placement");
});

app.post("/students/placement", (req, res) => {
  console.log(req.body);
  connection.query("INSERT INTO placement SET ?", req.body, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred",
      });
    } else {
        res.send({ code: 200, message: "Added successfully!" });
    }
  });
});

app.listen(3000, function () {
    console.log("Server ready on Port 3000");
});