var Location = function(x, y){
	this.x = x || 0;
	this.y = y || 0;
}

Location.prototype.move = function(deltaX, deltaY){
	return new Location(this.x + deltaX, this.y + deltaY);
}

Location.prototype.getX = function(){
	return this.x;
}

Location.prototype.getY = function(){
	return this.y;
}

Location.prototype.distFrom = function(other){
	return  Math.sqrt(
					  Math.pow(other.getX() - this.getX(), 2) +
					  Math.pow(other.getY() - this.getY(), 2)
					);
}

Location.prototype.toString = function(){
	return '<' + this.getX() + ',' + this.getY + '>';
}

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
    var distances			  = drunk.takeStep()
    var currentLocation = this.drunks[drunk]
    this.drunks[drunk] 	= currentLocation.move(...distances);
}
    
Field.prototype.getLoc = function(drunk){
    if( !(drunk in this.drunks) ){
      throw new RangeError('Drunk not in field')
    }
    return this.drunks[drunk]
}

var Drunk = function(name){
	this.name = name || "Homer";
}

Drunk.prototype.toString = function(){
	return 'This drunk is named ' + this.name;
}
        
    
var UsualDrunk = function(name){
	Drunk.call(this, name);
}

UsualDrunk.prototype = Object.create(Drunk.prototype);

UsualDrunk.prototype.constructor = UsualDrunk;

UsualDrunk.prototype.takeStep = function(){
	var stepChoices = [
		[ 0.0 ,  1.0], 
		[ 0.0 , -1.0], 
		[ 1.0 ,  0.0], 
		[-1.0 ,  0.0]
	];
  return stepChoices[Math.random() * stepChoices.length()];
}