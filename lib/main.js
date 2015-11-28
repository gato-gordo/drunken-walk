var numTrials = 500,

    drunkCls  = [ColdDrunk, EDrunk, UsualDrunk],

    xAndY     = drunkCls.reduce(function(xy, drunkClass){
                  xy.push(drunkTestP(numTrials, drunkClass));
                  return xy;
                }, []);

    height    = Math.max.apply(null, 
                  xAndY.reduce(function(maxes, drunkData){
                    maxes.push( Math.max.apply(null, 
                        drunkData.map(function(pair){
                          return pair.meanDistance
                        })));
                    return maxes;
                  }, [])
                ) * 1.1,
    

    width     =  Math.max.apply(null, 
                  xAndY.reduce(function(maxes, drunkData){
                    maxes.push( Math.max.apply(null, 
                        drunkData.map(function(pair){
                          return pair.stepsTaken
                        })));
                    return maxes;
                  }, [])
                ) * 1.1,

    colors    = [ "red", "green", "blue"],

    numTicks  = xAndY.length,
    
    
    
    x         = d3.scale.log().range([0, width]),
    y         = d3.scale.linear().range([height, 0]),
    xAxis     = d3.svg.axis().scale(x).orient("bottom").ticks(numTicks),
    yAxis     = d3.svg.axis().scale(y).orient("left").ticks(numTicks),

    lineFunc  = d3.svg.line()
                      .x(function(d) { return d.stepsTaken   })
                      .y(function(d) { return d.meanDistance })
                      .interpolate("linear"),

    svg       = d3.select("body")
                  .append("svg")
                  .attr("width", 800)
                  .attr("height", 600)
                  .append("g");


//xAndY.forEach(function(drunkData, index){
  x.domain(d3.extent(xAndY[0], function(d) { return d.stepsTaken; }));
  y.domain([0, d3.max(xAndY[0], function(d) { return d.meanDistance; })]);
  svg
    .append("path") // Add the valueline path. .attr("class", "line")
    .attr("d", lineFunc(xAndY[0]))
    .attr("color", colors[0]);
//})

svg
  .append("g") // Add the X Axis .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg.append("g") // Add the Y Axis .attr("class", "y axis")
  .call(yAxis);









/*
var offset = 250
var homer = new UsualDrunk()
var ed = new EDrunk('Hermione')
var cold = new ColdDrunk('Harry')
var field = new Field()
var homerStart = new Location(250, 250)
var edStart = new Location(250, 250)
var coldStart = new Location(250, 250)
field.addDrunk(homer, homerStart)
field.addDrunk(ed, edStart)
field.addDrunk(cold, coldStart);


(function walkLoop (numSteps) {          
   setTimeout(function () {
      d3.selectAll('circle').remove()
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(homer).getX(),
        'cy': field.getLoc(homer).getY(),
        'r': 10}).style('fill', 'green');
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(ed).getX(),
        'cy': field.getLoc(ed).getY(),
        'r': 10}).style('fill', 'red');
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(cold).getX(),
        'cy': field.getLoc(cold).getY(),
        'r': 10}).style('fill', 'blue');
      field.moveDrunk(homer)
      field.moveDrunk(ed)
      field.moveDrunk(cold)
      if (--numSteps) walkLoop(numSteps);      
   }, 100)
})(500);
/*
(function walkLoop (numSteps) {          
   setTimeout(function () {
      d3.selectAll('circle').remove()
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(homer).getX(),
        'cy': field.getLoc(homer).getY(),
        'r': 10}).style('fill', 'green');
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(ed).getX(),
        'cy': field.getLoc(ed).getY(),
        'r': 10}).style('fill', 'red');
      d3.select('.grid').append('circle').attr({
        'cx': field.getLoc(cold).getX(),
        'cy': field.getLoc(cold).getY(),
        'r': 10}).style('fill', 'blue');
      field.moveDrunk(homer)
      field.moveDrunk(ed)
      field.moveDrunk(cold)
      if (--numSteps) walkLoop(numSteps);      
   }, 100)
})(100);*/