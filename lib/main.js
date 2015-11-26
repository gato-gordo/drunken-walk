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