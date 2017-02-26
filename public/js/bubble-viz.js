function createBubbleChart() {

  d3.select("#carouselbox").style("background", "black");
  d3.select("#chart").attr("class", "bubble");

  var json = {
    "personalities": {
      "mentor": 40,
      "connector": 22,
      "maverick": 98,
      "navigator": 10,
      "dynamo": 1
    }
  };

  var width = 600,
      height = 600;

  var svg = d3.select("#chart").append("svg")
      .attr("width", width)
      .attr("height", height)



  var dataset = processData(json)
  var pack = d3.pack(dataset)
      .size([width, width])
      .padding(1.5);


  var nodes = d3.hierarchy(dataset)
      .sum(function(d) { return d.size; });

  var node = svg.selectAll(".node")
      .data(pack(nodes).descendants())
      .enter()
      .filter(function(d) { return !d.children; })
      .append("g")
        .attr('class', "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })


  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", "white")

  var textarea = node.append("svg:text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("class", "bubble-value")

  textarea.append("svg:tspan")
          .attr("x", 10)
          .attr("y", 15)
          .style("text-anchor", "middle")
          .text(function(d) { return d.value })
          .append("svg:tspan")
          .text("%")
          .attr("class", "percent")
          .attr("dy", -11)

  textarea.append("svg:tspan")
          .attr("x", 0)
          .attr("dy", 25)
          .style("text-anchor", "middle")
          .text(function(d) { return d.data.name })


function processData(data) {
    var obj = json.personalities;

    var newDataSet = [];

    for(var prop in obj) {
      newDataSet.push({name: prop, className: prop.toLowerCase(), size: obj[prop]});
    }
    return {children: newDataSet};
  }

};