//==========(require)===========\\
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const methodOverRide = require('method-override');

//==========(main variebles)===========\\
const app = express();
const PORT = process.env.PORT || 3030;
const client = new pg.Client(process.env.DATABASE_URL);

//==========(express server uses)===========\\
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverRide('_method'));


//==========(all routes)===========\\

//Hoempage route
app.get('/', homepageHandler);
app.get('/dashboard', dashboardHandler);




//==========(route handlers)===========\\

// Homepage handler
function homepageHandler(request, response) {
  response.render('./index');
}

// Dashboard handler
function dashboardHandler(request, response) {
  let url = 'https://api.covid19api.com/summary';
  superagent.get(url)
    .then(summaryData => {
      let xmlData = JSON.parse(summaryData.text);
      let summaryObj = new Summary(xmlData.Global);
      response.render('./pages/covid19Dashboard', {summary: summaryObj});
    });
}
// C.F
function Summary(data) {
  this.NewConfirmed = data.NewConfirmed;
  this.TotalConfirmed	= data.TotalConfirmed;
  this.NewDeaths = data.NewDeaths;
  this.TotalDeaths =	data.TotalDeaths;
  this.NewRecovered =	data.NewRecovered;
  this.TotalRecovered =	data.TotalRecovered;
}

//==========(error handlers)===========\\
function errorHandler(err, req, res) {
  res.status(500).send(err);
}
function notFoundHandler(req, res) {
  res.status(404).send('This route does not exist!!');
}

//==========(connecting with DB)===========\\
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  });
app.get('*', notFoundHandler);

