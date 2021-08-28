require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./configs/DBConnection");
const path = require("path");

const publicDirectory = path.join(__dirname, "public");

// Setting public directory

app.use(express.static(publicDirectory));

app.use("/scripts", express.static(__dirname + "/dist"));

// Set ejs template
app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/form"));
app.use("/", require("./routes/report"));
app.use("/", require("./routes/admin"));
app.use("/", require("./routes/dropdown"));

// Server Running at port 4000
app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started ... http://localhost:8000");
});
