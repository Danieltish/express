//Import Express
const express = require('express');

//Initialize the Express App
const app = express();

//Set the EJS as the templating engine
app.set('view engine', 'ejs');


//Define a route for the root ULR "/"
app.get("/", (req, res) => {
  console.log("Here"); //Log message when the route is accessed
  //render 'index.ejs' from the 'views' folder and pass the variable 'text' with the value 'world'
  res.render('index', { text: 'world' });
});

//start the server and listen on port 3000
app.listen(3000)