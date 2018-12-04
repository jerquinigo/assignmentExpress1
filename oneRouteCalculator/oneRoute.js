const express = require("express");
const app = express();

app.get("/cal/:num1/:op/:num2", (req, res) => {
  console.log(req.params);
  if (!isNaN(req.params.num1) && !isNaN(req.params.num2)) {
    // res.send({
    //   message: parseInt(req.params.num1) + req.params.op + parseInt(req.params.num2)
    // });
  }
  if (req.params.op === "add") {
    res.send({
      message: parseInt(req.params.num1) + parseInt(req.params.num2)
    });
  } else if (req.params.op === "sub") {
    res.send({
      message: parseInt(req.params.num1) - parseInt(req.params.num2)
    });
  } else if (req.params.op === "mult") {
    res.send({
      message: parseInt(req.params.num1) * parseInt(req.params.num2)
    });
  } else if (req.params.op === "div") {
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
