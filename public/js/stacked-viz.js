function createStackedChart() {
  var ctx = document.getElementById("stacked");
  Chart.defaults.global.defaultFontFamily = "EliotReg"

  var options = {
    tooltips: {
      enabled: false
    },
    scaleLabel: {
      fontFamily: "EliotReg"
    },
    scales: {
      yAxes: [{
        display: false,
        stacked: true,
      }],
      xAxes: [{
        barThickness: 40,
        stacked: true,
        gridLines: {
          display:false,
          color: "rgba(0, 0, 0, 0)"
        }
      }]
    }
  }

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["vr", "music", "gaming", "interactive", "design", "parties", "networking"],
      datasets: [{
        label: 'mentor',
        data: [30, 5, 4, 17, 28, 24, 7],
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black'
      }, {
        label: 'navigator',
        data: [12, 31, 2, 5, 20, 3, 10],
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: pattern.draw('dot', 'black', 'white')
      }, {
        label: 'connector',
        data: [5, 2, 29, 34, 41, 12, 0],
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: pattern.draw('diagonal', 'white', 'black')
      }, {
        label: 'maverick',
        data: [35, 13, 0, 16, 0, 10, 8],
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: pattern.draw('zigzag', 'white', 'black')
      }, {
        label: 'dynamo',
        data: [31, 32, 0, 2, 11, 19, 5],
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
      }]
    },
    options: options
  });

};