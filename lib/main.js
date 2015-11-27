var simWalks = function(numSteps, numTrials, dClass){
  var   homer     = new dClass('Homer'),
        origin    = new Location(0, 0)
        distances = []
  for(var trial = 0; trial < numTrials; trial++){
    var field = new Field()
    field.addDrunk(homer, origin)
    distances.push(walk(field, homer, numSteps))
  }
  return distances
}

var walk = function(field, drunk, numSteps){
  var start = field.getLoc(drunk)
  for(var step = 0; step < numSteps; step++){
    field.moveDrunk(drunk)
  }
  return start.distFrom(field.getLoc(drunk))
}

var drunkTestP = function(numTrials, drunkClass){
  var stepsTaken    = [10, 100, 1000, 10000],
      meanDistances = []
  for(var numSteps = 0; numSteps < stepsTaken.length; numSteps++){
    var distances = simWalks(numSteps, numTrials, drunkClass)
    meanDistances.push(
      distances.reduce(function(sum, distance){
        return sum + distance
      }, 0) / distances.length
    )
  }
  return meanDistances.reduce(function(pairs, meanD, index){
    pairs.push({ "meanDistance": meanD, "stepsTaken": stepsTaken[index]})
    return pairs
  }, [])
  
};

//This is the accessor function we talked about above
var lineFunction = d3.svg.line()
                      .x(function(d) { return d.stepsTaken })
                      .y(function(d) { return 100 - d.meanDistance   })
                      .interpolate("linear");

//The SVG Container
var svgContainer = d3.select("body").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100);

var colors = ["green", "blue", "red"];

[UsualDrunk, ColdDrunk, EDrunk].forEach(function(drunkClass, index){
   var pairs = drunkTestP(500, drunkClass)

  //The line SVG Path we draw
  var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(pairs))
                            .attr("stroke", colors[index])
                            .attr("stroke-width", 1)
                            .attr("fill", "none"); 
});


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