$(function() {

  var carouselDiv = document.getElementById("carouselbox")
  var chartFunctions = [createMapChart, createPieChart, createBubbleChart]
  var counter = 0;

  var createChart = setInterval(function() {
    var oldChartDiv = document.getElementById("chart")
    carouselDiv.removeChild(oldChartDiv)

    var newChartDiv = document.createElement("div")
    newChartDiv.id = "chart"
    carouselDiv.appendChild(newChartDiv)
    chartFunctions[counter]()

    counter = (chartFunctions.length - 1 == counter) ? 0 : counter + 1;

  }, 3000)

});