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

const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("ALEXANDER IS LEARNING BACKEND WEB DEV at CYF");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});