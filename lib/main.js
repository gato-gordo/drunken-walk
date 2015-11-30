var data = [
            [1, 10],
            [2, 100],
            [3, 1000],
            [4, 10000],
            [5, 100000]
          ];

var xData = data.map(function(pair){
  return pair[1];
});

var yData = data.map(function(pair){
  return pair[0];
})

var colors = ["yellow", "red", "blue", "green", "orange"];

var lineFunc  = d3.svg.line()
                      .x(function(d) { return d[1]   })
                      .y(function(d) { return d[0] })
                      .interpolate("linear");

var width = 800,
    height = 600,
    margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    };

var xScale = d3.scale.linear()
              .range([margin.left, width - margin.right])
              .domain([0, 100000]);

var yScale = d3.scale.linear()
              .range([height - margin.top, margin.bottom])
              .domain([0, 5]);


var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
  
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");


var svg = d3.select('body').append('svg')
                 .attr({
                        'height': height,
                        'width': width
                  });

svg.append("g")
    .attr("transform", "translate(0, " + (height - margin.bottom) + ")")
    .call(xAxis);

svg.append("g")
    .attr("transform", "translate(" + margin.left + ", 0)")
    .call(yAxis);

 svg
  .append("path")
  .attr("d", lineFunc(data))
  .attr("color", "green");
