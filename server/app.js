// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');

const PORT = process.env.PORT || 3000;

// create your express server below
const app = express();



// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send('Top Spots Page');
  });
  
  app.get('/data', function(req, res){
    res.status(200).json(data);
  });




  // app.listen(PORT, function() {
  //   // Log a message when the server starts
  //   console.log(`Server is listening on localhost:${PORT}`);
  // });

// finally export the express application
module.exports = app;
