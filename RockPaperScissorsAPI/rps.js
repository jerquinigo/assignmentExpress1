const express = require("express");

const app = express();
//use math.random to key into it randomly and

// app.get('/choice/:userInput', (req,res) => {
// console.log(req);
//
//   res.send("you have selected" + " " + req.params.userInput + req.params.user)
//   if(req.params.user === "rock"){
//   }
// })

app.get("/game/:userInput", (req, res) => {
  let random = Math.floor(Math.random() * 3);
  let key = "user";
  let key2 = "ai";
  let keyResult = "result";
  let gameObj = {};
  console.log(Object.keys(res));
  let choices = ["rock", "paper", "scissors"];
  // const inputs = [{"user":"rock","ai":"rock","result":"tie"},
  // {"user":"rock","ai":"paper","result":"lose"},
  // {"user":"rock","ai":"scissors","result":"win"}
  // ]
  if (req.params.userInput === "paper") {
    // res.send(inputs[random].ai)
    gameObj[key] = "paper";
    gameObj[key2] = choices[random];
    if (gameObj.ai === "rock") {
      gameObj.keyResult = "userwin";
      res.send(gameObj);
    } else if (gameObj.ai !== "paper") {
      gameObj.keyResult = "userlose";
      res.send(gameObj);
    } else if (gameObj.ai === "paper") {
      gameObj.keyResult = "usertie";
      res.send(gameObj);
    }

    res.send(gameObj);
  }
  if (req.params.userInput === "rock") {
    gameObj[key] = "rock";
    gameObj[key2] = choices[random];
    if (gameObj.ai === "scissors") {
      gameObj.keyResult = "userwin";
      res.send(gameObj);
    } else if (gameObj.ai !== "paper") {
      gameObj.keyResult = "userlose";
      res.send(gameObj);
    } else if (gameObj.ai === "rock") {
      gameObj.keyResult = "usertie";
      res.send(gameObj);
    }
    // res.send(choices[random]);

    if (req.params.userInput === "scissors") {
      gameObj[key] = "scissors";
      gameObj[key2] = choices[random];
      if (gameObj.ai === "paper") {
        gameObj.keyResult = "userwin";
        res.send(gameObj);
      } else if (gameObj.ai !== "scissors") {
        gameObj.keyResult = "userlose";
        res.send(gameObj);
      } else if (gameObj.ai === "scissors") {
        gameObj.keyResult = "usertie";
        res.send(gameObj);
      }
      // } else if (req.params.userInput === "scissors") {
      //   res.send(choices[random]);
      // } else {
      //   res.json(inputs);
      // }
    }
  }
});

app.listen(8000, () => {
  console.log("you are listening to port 8000");
});

// const express = require('express')
// //this gives all access to methods that express has
// const app = express()
// //callback function
// //the forward slash is the route of the webpage like homepage or contact page
// app.get('/',(req,res) => {
//   // res.send("this is the HOME page")
//   res.sendFile(__dirname + '/mod.html')
// })
// //app to listen on
// //can pass a call back function
// //you can chain the status of the routes
// //ex res.status(404sendFile(__dirname +  '/404.html'))
// app.get('/api/people', (req,res) => {
//   const people = [{name: "Corey", age: 100}, {name: "Grinch", age: 99}]
//   res.json(people)
// })
//
// app.get('/profile/:id',(req,res)=> {
//   // console.log(req.params);
//   res.send('you requested profile ' + req.params.id)
// })
//
// //creates a contact path
// app.get('/contact',(req,res) => {
//   // res.send("this is the contact page")
//   res.sendFile(__dirname + '/contact.html')
//
// })
// //http requests
// app.post('/', (req,res) => {
//   res.send("got a POST request")
// })
// //put request
// app.put('/user', (req,res) => {
//   // res.send('got a PUT request')
//
// })
// //delete request
// app.delete('/user', (req,res) => {
//   res.send("got a delete requests at /user")
// })
// //this is listening and creating a port
// //can also do const port = 3000 and put the variable port in the listen argument.
// app.listen(3000, () => {
// console.log("You are listening to port 3000");
// })
