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
for(let i = sortedArray.length-1 ; i > sortedArray.length-10 ;i--){
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

        borderWidth: 1
      },
      {
        label: 'total Confirmed',
        data: totalConfirmedArray,
        borderColor: [
          'rgba(131, 212, 254,1)',
          'rgba(131, 212, 254,1)',
          'rgba(131, 212, 254,1)'],
        backgroundColor:[
          'rgba(131, 212, 254,0.1)',
          'rgba(131, 212, 254,0.1)',
          'rgba(131, 212, 254,0.1)'],
        borderWidth: 1
      },
      {
        label: 'total Deaths',
        data: totalDeathsArray,
        backgroundColor: [
          'rgba(250, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)'

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
        borderColor:'rgba(72, 89, 188, 1)',
        backgroundColor: 'rgba(72, 89, 188, 0.3)',
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

// ==========================pie chart==============\\
function runderPieChart() {
  var ctx = document.getElementById('myChart3').getContext('2d');
  var myChart3 = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: countryArray,
      datasets: [{
        label: 'countries',
        data: countryArray,

        borderWidth: 1
      },
      {
        label: 'total Confirmed',
        data: totalConfirmedArray,
        fill: false,
        backgroundColor: [
          '#59329E',
          '#591FDA',
          '#315FCF',
          '#52A6CD',
          '#92F8ED',
          '#72E8B5',
          '#71E92B',
          '#70E72A',
          '#C6FD69',
          '#FAED30',
          '#EEA023',
          '#E8614B',
          '#E62E2D',
          '#E62E2D',
          '#C72726',
          '#D3CDA5',
          '#FEFEFE',
          '#EE97AF',
          '#EE99B0',
          '#E645D5',
          '#E745D7'],
        borderWidth: 1
      },
      {
        label: 'total Deaths',
        data: totalDeathsArray,
        backgroundColor: [
          '#59329E',
          '#591FDA',
          '#315FCF',
          '#52A6CD',
          '#92F8ED',
          '#72E8B5',
          '#71E92B',
          '#70E72A',
          '#C6FD69',
          '#FAED30',
          '#EEA023',
          '#E8614B',
          '#E62E2D',
          '#E62E2D',
          '#C72726',
          '#D3CDA5',
          '#FEFEFE',
          '#EE97AF',
          '#EE99B0',
          '#E645D5',
          '#E745D7'],
        borderWidth: 1
      },
      {
        label: 'Total Recovered',
        data: TotalRecoveredArray,
        backgroundColor: [
          '#59329E',
          '#591FDA',
          '#315FCF',
          '#52A6CD',
          '#92F8ED',
          '#72E8B5',
          '#71E92B',
          '#70E72A',
          '#C6FD69',
          '#FAED30',
          '#EEA023',
          '#E8614B',
          '#E62E2D',
          '#E62E2D',
          '#C72726',
          '#D3CDA5',
          '#FEFEFE',
          '#EE97AF',
          '#EE99B0',
          '#E645D5',
          '#E745D7'],
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
runderPieChart();
// =================================================\\

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

        borderWidth: 1
      },
      {
        label: 'total Confirmed',
        data: confirmedArray,
        backgroundColor: 'rgba(131, 212, 254,0.2)',
        borderColor: 'rgba(131, 212, 254,1)',
        borderWidth: 1
      },
      {
        label: 'total Deaths',
        data: deathsArray,
        backgroundColor:  'rgba(250, 99, 132, 0.2)',
        borderColor:  'rgba(250, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Total Recovered',
        data: recoveredArray,
        backgroundColor: 'rgba(72, 89, 188, 0.2)',
        borderColor: 'rgba(72, 89, 188, 1)',
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


//=============table for all countryes===========\\

$(document).ready( function () {
  $('#myTable').DataTable();
} );


//=============global sammary===========\\

$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});


//========hide single chart==========\\
// $('#canvas2').hide();
// $('#showChart').on('click', (event)=>{
//   event.preventDefault();
//   $('#canvas2').show();
// });
