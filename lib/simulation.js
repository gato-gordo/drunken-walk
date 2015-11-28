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