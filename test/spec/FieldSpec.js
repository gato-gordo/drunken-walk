describe("Field", function(){
	var field1;

  beforeEach(function() {
  	field1 = new Field();
  });

  it("should be defined", function(){
  	expect(Field).toBeDefined();
  });

  it("should be a function", function(){
  	expect(typeof Field).toEqual("function");
  });

  it("should initialize an empty drunks object", function(){
  	expect(field1.drunks).toEqual({});
  });

  describe("Field#addDrunk", function(){
  	var drunk, loc;

  	beforeEach(function(){
	  	drunk = new Drunk();
			loc   = new Location(1, 1);
			field1.addDrunk(drunk, loc);
  	});

  	it("should add a drunk to the Field.drunks object", function(){
	  	expect(field1.drunks[drunk]).toBeDefined();
  	});

  	it("should associate a location with a drunk", function(){
  		expect(field1.drunks[drunk]).toEqual(loc);
  	});

  	it("should throw range error when drunk is already in field", function(){
  		expect(field1.addDrunk.bind(field1, drunk, loc)).toThrowError(RangeError, "Duplicate drunk");
  	});
  });

  describe("Field#moveDrunk", function(){
  	var drunk, loc;

  	beforeEach(function(){
	  	drunk2 = new Drunk();
			loc   = new Location(1, 1);
  	});

  	it("should throw range error when drunk not in field", function(){
  		expect(field1.moveDrunk.bind(field1, drunk2)).toThrowError(RangeError, "Drunk not in field");
  	});
  });

});
