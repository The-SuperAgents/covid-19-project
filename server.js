//==========(require)===========\\
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const methodOverRide = require('method-override');
const path = require('path');

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
// app.use(express.static(path.join(__dirname, 'public')));


//==========(all routes)===========\\

//Hoempage route
app.get('/', homepageHandler);
app.get('/dashboard', dashboardHandler);




//==========(route handlers)===========\\

// Homepage handler
function homepageHandler(request, response) {
  response.render('./index');
}
let moduleObj = {};
// Dashboard handler
function dashboardHandler(request, response) {
  let url = 'https://api.covid19api.com/summary';
  superagent.get(url)
    .then(summaryData => {
      let xmlData = JSON.parse(summaryData.text);
      console.log('ddddd', xmlData.Countries);
      let countryData = xmlData.Countries.map(element => {
        return new CounrtySummary(element);
      });
      let summaryObj = new Summary(xmlData.Global);
      moduleObj.summary = summaryObj;
      response.render('./pages/covid19Dashboard', {summary: summaryObj, countries: countryData});
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
function CounrtySummary(data) {
  this.Country = data.Country;
  this.TotalConfirmed = data.TotalConfirmed;
  this.TotalDeaths = data.TotalDeaths;
  this.TotalRecovered = data.TotalRecovered;
}
// module.exports = moduleObj;
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

