//add/sub/mult/div
//accept two number parameters

const express = require("express");

const app = express();

app.get("/add/:num1/:num2", (req, res) => {
  console.log(req.params);
  if (!isNaN(req.params.num1) && !isNaN(req.params.num2)) {
    res.send({
      message: parseInt(req.params.num1) + parseInt(req.params.num2)
    });
  } else {
    res.send("enter valid num");
  }
});

app.get("/mult/:num1/:num2", (req, res) => {
  console.log(req.params);
  if (!isNaN(req.params.num1) && !isNaN(req.params.num2)) {
    res.send({
      message: parseInt(req.params.num1) * parseInt(req.params.num2)
    });
  } else {
    res.send("enter valid num");
  }
});

app.get("/sub/:num1/:num2", (req, res) => {
  console.log(req.params);
  if (!isNaN(req.params.num1) && !isNaN(req.params.num2)) {
    res.send({
      message: parseInt(req.params.num1) - parseInt(req.params.num2)
    });
  } else {
    res.send("enter valid num");
  }
});

app.get("/div/:num1/:num2", (req, res) => {
  console.log(req.params);
  if (!isNaN(req.params.num1) && !isNaN(req.params.num2)) {
    res.send({
      message: parseInt(req.params.num1) / parseInt(req.params.num2)
    });
  } else {
    res.send("enter valid num");
  }
});



app.listen(8000, () => {
  console.log("listening to port 8000");
});
