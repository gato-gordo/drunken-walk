var Field = function(){
	this.drunks = {};
}
Field.prototype.addDrunk = function(drunk, loc){
  if (drunk in this.drunks){
    throw new RangeError('Duplicate drunk');
  } else {
    this.drunks[drunk] = loc;
  }
}     
Field.prototype.moveDrunk = function(drunk){
  if( !(drunk in this.drunks) ){
    throw new RangeError('Drunk not in field')
  }
  var distances			  = drunk.takeStep(),
			currentLocation = this.drunks[drunk]
  this.drunks[drunk] 	= currentLocation.move(...distances)
}    
Field.prototype.getLoc = function(drunk){
  if( !(drunk in this.drunks) ){
    throw new RangeError('Drunk not in field')
  }
  return this.drunks[drunk]
}