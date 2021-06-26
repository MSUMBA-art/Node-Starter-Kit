// const express = require("express");

// const app = express();

// // register routes
// app.get("/", function (request, response) {
//   res.send("Hello World!");
// });

// // listen for request 
// app.listen(3000, function(){
//     console.log('Server is listening');
// });

// // handle request 

const { response, request } = require("express");
const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Yay Node!");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/api", function (request, response) {
  response.send("Hello World!");
});

app.get("/codeyourfuture", function (request, response) {
  response.send('<h1>Alex is Learning Back-End Development</h1>');
});

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});

app.post('/api/json/codeyourfuture', (request, response) =>{
    console.log('data', body);
const body = request.body
});

app.get("/", function (req, res) {
    co
  let searchQuery = req.query.search;
  res.send("Hello World! You searched for " + searchQuery);
});