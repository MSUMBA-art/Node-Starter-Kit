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

// const { response, request } = require("express");
// const express = require("express");
// const app = express();

// app.get("/", function (request, response) {
//   response.send("Yay Node!");
// });

// app.listen(3000, function () {
//   console.log("Server is listening on port 3000. Ready to accept requests!");
// });

// app.get("/api", function (request, response) {
//   response.send("Hello World!");
// });

// app.get("/codeyourfuture", function (request, response) {
//   response.send('<h1>Alex is Learning Back-End Development</h1>');
// });

// app.get("/json", function (req, res) {
//   let lat = req.query.lat;
//   let lng = req.query.lng;
//   res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
// });

// app.post('/api/json/codeyourfuture', (request, response) =>{
//     console.log('data', body);
// const body = request.body
// });


// app.get("/", function (req, res) {
//     co
//   let searchQuery = req.query.search;
//   res.send("Hello World! You searched for " + searchQuery);
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('it is working');
  res.send('ALEXANDER MSUMBA');
});

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",

  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.get("/albums/:albumId", (req, res) => {
  const { albumId } = req.params;

  const checkIdFound = albumsData.find(album => album.albumId === albumId);
   
  if(checkIdFound) {
    res.json(checkIdFound)
    
  }else {
    res.status(404).json({ msg:`Id of ${albumId} Not Found` })
  }
  

} );

app.listen(3000, () =>{
  console.log('Server is listening on Port 3000');
});