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

Location.prototype.move = function(deltaX, deltaY){
	return new Location(this.getX() + deltaX, this.getY() + deltaY);
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