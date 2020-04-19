let countryArray = [];
let totalConfirmedArray = [];
let totalDeathsArray = [];
let TotalRecoveredArray = [];
allCountries.forEach(element => {
    countryArray.push(element.Country);
    totalConfirmedArray.push(element.TotalConfirmed);
    totalDeathsArray.push(element.TotalDeaths);
    TotalRecoveredArray.push(element.TotalRecovered)
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