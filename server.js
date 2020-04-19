//==========(require)===========\\
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');
const methodOverRide = require('method-override');
const cors = require('cors');

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
app.use(cors());

//==========(all routes)===========\\
///addComent
//Hoempage route
app.get('/', homepageHandler);
app.get('/dashboard', dashboardHandler);
app.post('/getCountry', countryHandler);
app.post('/addComent', adviceHandler);
app.get('/advice', adviceRedirect);
//advice

function adviceRedirect (request, response){
response.render('./pages/advice')
}




//==========(route handlers)===========\\
let theSelectedCountry = [];
// Homepage handler
function homepageHandler(request, response) {
  let key = process.env.NEWS_KEY;
  let url = `http://newsapi.org/v2/everything?q=covid19&sortBy=publishedAt&apiKey=${key}`;
  superagent.get(url)
  .then(newsResult=>{
    let allNews = newsResult.body.articles.map(val=>{
     return new News(val)
    })
    response.render('./index',{newsResule :allNews });
  })
}

// C.F
let imgPlaceholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMnAsE8O7pmDjG3GjTKET3-6m9cI-8V86mVHMQTjS1yOfEjykr&usqp=CAU';
function News (data) {
this.author = data.author || '';
this.title = data.title || '';
this.url = data.url;
this.urlToImage = data.urlToImage || imgPlaceholder;
this.description =data.description || '';
}






//===============================================\\
// Dashboard handler
function dashboardHandler(request, response) {
  // theSelectedCountry = []
  let url = 'https://api.covid19api.com/summary';
  superagent.get(url)
    .then(summaryData => {
      let xmlData = JSON.parse(summaryData.text);
      // console.log('ddddd', xmlData.Countries);
      let countryData = xmlData.Countries.map(element => { //send to js (chart)
        return new CounrtySummary(element);
      });
      let summaryObj = new Summary(xmlData.Global);
      module.exports = countryData;
      response.render('./pages/covid19Dashboard', {summary: summaryObj, countries: countryData, countryArr: theSelectedCountry});
    });
}
// C.F
//to get global summary
function Summary(data) {
  this.NewConfirmed = data.NewConfirmed;
  this.TotalConfirmed	= data.TotalConfirmed;
  this.NewDeaths = data.NewDeaths;
  this.TotalDeaths =	data.TotalDeaths;
  this.NewRecovered =	data.NewRecovered;
  this.TotalRecovered =	data.TotalRecovered;
}
//to create a chart for counries cases + used in select options
function CounrtySummary(data) {
  this.Country = data.Country;
  this.TotalConfirmed = data.TotalConfirmed;
  this.TotalDeaths = data.TotalDeaths;
  this.TotalRecovered = data.TotalRecovered;
}
// Country Data Handler
function countryHandler(request, response) {
  let country = request.body.country;
  let url = `https://api.covid19api.com/total/dayone/country/${country}`;
  superagent.get(url)
    .then(selectCountry => {
      let choosenCountry = selectCountry.body.map(element => {
        return new SelectedCountry(element);
      });
      theSelectedCountry = choosenCountry; // send to js (chart + table)
      response.redirect('/dashboard');

    });
}
// C.F
//to get data about a selected country
function SelectedCountry (data) {
  this.Country = data.Country;
  this.Confirmed = data.Confirmed;
  this.Deaths = data.Deaths;
  this.Recovered = data.Recovered;
  this.Date = data.Date.slice(0,-10);
}

//======================(Advice Handler)=========================\\

function adviceHandler (request , response){
  //collect
let {name , country , comment} = request.body;


let SQL = `INSERT INTO advice (name , country , comment) VALUES ($1,$2,$3);`;
let SQL2 = `SELECT * FROM advice;`;
let safeValues = [name , country , comment];
client.query(SQL,safeValues)
.then(result=>{
  // console.log(result.rows);
  
  response.render('./pages/advice',{advice : result.rows})
})
client.query(SQL2)
.then()

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

