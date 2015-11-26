/* Abstract Drunk Class */

var Drunk = function(name){
	this.name = name || "Homer";
}
Drunk.prototype.toString = function(){
	return 'This drunk is named ' + this.name
}

/* Usual Drunk Subclass */
var UsualDrunk = function(name){
	Drunk.call(this, name)
}

UsualDrunk.prototype = Object.create(Drunk.prototype)

UsualDrunk.prototype.constructor = UsualDrunk

UsualDrunk.prototype.takeStep = function(){
	var stepChoices = [
		[ 0.0 ,  1.0], 
		[ 0.0 , -1.0], 
		[ 1.0 ,  0.0], 
		[-1.0 ,  0.0]
	]
  return stepChoices[Math.floor(Math.random() * stepChoices.length())]
}

/*  Cold Drunk Subclass */
var ColdDrunk = function(name){
	Drunk.call(this, name)
}

ColdDrunk.prototype = Object.create(Drunk.prototype)

ColdDrunk.prototype.constructor = ColdDrunk

ColdDrunk.prototype.takeStep = function(){
	var stepChoices = [
		[ 0.0 ,  0.95], 
		[ 0.0 , -1.0], 
		[ 1.0 ,  0.0], 
		[-1.0 ,  0.0]
	]
  return stepChoices[Math.floor(Math.random() * stepChoices.length())]
}

/* EDrunk Subclass*/

var EDrunk = function(name){
	Drunk.call(this, name);
}

EDrunk.prototype = Object.create(Drunk.prototype)

EDrunk.prototype.constructor = EDrunk

EDrunk.prototype.takeStep = function(){
	var deltaX = Math.random(),
			deltaY = Math.random()
	if(Math.random() < 0.5) deltaX = -deltaX
	if(Math.random() < 0.5) deltaY = -deltaY
  return [deltaX, deltaY];
}