let countryArray = [];
let totalConfirmedArray = [];
let totalDeathsArray = [];
let TotalRecoveredArray = [];

// sorting the array =>
const sortArray = (arr) => {
  arr.sort((a,b) => a.TotalConfirmed - b.TotalConfirmed );
  return arr;
};

let sortedArray = sortArray(allCountries);
let topTwentyCounties=[];
console.log(sortedArray.length-1);
for(let i = sortedArray.length-1 ; i > sortedArray.length-20 ;i--){
  topTwentyCounties.push(sortedArray[i]);
}
////

topTwentyCounties.forEach(element => {
  countryArray.push(element.Country);
  totalConfirmedArray.push(element.TotalConfirmed);
  totalDeathsArray.push(element.TotalDeaths);
  TotalRecoveredArray.push(element.TotalRecovered);
});
function runderChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: countryArray,
      datasets: [{
        label: 'countries',
        data: countryArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'total Confirmed',
        data: totalConfirmedArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'total Deaths',
        data: totalDeathsArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'Total Recovered',
        data: TotalRecoveredArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}
runderChart();

//=============chart for the single country===========\\
console.log(selectedCo);
let dateArray = [];
let confirmedArray = [];
let deathsArray = [];
let recoveredArray = [];

selectedCo.forEach(element => {
  dateArray.push(element.Date);
  confirmedArray.push(element.Confirmed);
  deathsArray.push(element.Deaths);
  recoveredArray.push(element.Recovered);
});

function runderChartForSingleCo() {
  var ctx = document.getElementById('myChart2').getContext('2d');
  var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dateArray,
      datasets: [{
        label: 'countries',
        data: dateArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'total Confirmed',
        data: confirmedArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'total Deaths',
        data: deathsArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      },
      {
        label: 'Total Recovered',
        data: recoveredArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

runderChartForSingleCo();


