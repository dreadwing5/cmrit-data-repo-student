const express = require("express");
const router = express.Router();
const connection = require("../configs/DBConnection");
const { snakeCase } = require("lodash");
const fs = require("fs");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");

//Get dropdown list
router.get("/dropdown/:field", async (req, res) => {
  try {
    let field = snakeCase(req.params.field);

    const jsonData = JSON.parse(data);

    res.send(jsonData[field]);
  } catch (err) {
    console.error(err);
    res.send({
      code: 400,
      failed: "error ocurred",
    });
  }
});

//Insert dropdwon field
router.post("/dropdown/:field", async (req, res) => {
  try {
    let field = snakeCase(req.params.field);
    const { name } = req.body;
    const data = fs.readFileSync(`./dev-data/${field}.json`, "utf-8");
    const jsonData = JSON.parse(data);
    jsonData.push({ name });
    fs.writeFileSync(`./dev-data/${field}.json`, JSON.stringify(jsonData));
    console.log("Data Added Successfully!");
    res.send({
      code: 200,
      message: "Data Added successfully",
    });
  } catch (error) {
    console.log(error);
    res.send({
      code: 400,
      failed: "error ocurred",
    });
  }
});

//Delete Dropdown field

router.delete("/dropdown/:field", (req, res) => {
  let field = snakeCase(req.params.field);
  const { id } = req.body;
  connection.query(
    `DELETE FROM ${field} WHERE id='${id}';`,
    function (error, results) {
      if (error) {
        console.error(error);
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        console.log("Data Deleted Successfully!");

        res.send({
          code: 200,
          message: "Deleted Successfully!!",
        });
      }
    }
  );
});
module.exports = router;
