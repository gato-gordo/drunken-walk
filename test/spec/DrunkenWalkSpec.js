describe("Location", function() {
	var loc, loc2, loc3;

  beforeEach(function() {
  	loc  = new Location();
  	loc2 = new Location(3, 4);
  	loc3 = new Location(1, 1);
  });

  
  it("should be defined", function() {
    expect(Location).toBeDefined()
  });

 	it("should be a function", function(){
 		expect(typeof Location).toEqual("function");
 	});

 	it("should initialize x and y to 0 when no arguments are passed", function(){
 		expect(loc.x).toEqual(0);
 		expect(loc.y).toEqual(0);
 	});

 	it("should initialize x and y to arguments that are passed in", function(){
 		expect(loc2.x).toEqual(3);
 		expect(loc2.y).toEqual(4);
 	});

 	it("should have getters that return its x and y values", function(){
 		expect(loc.getX()).toEqual(0);
 		expect(loc.getY()).toEqual(0);
 		expect(loc2.getX()).toEqual(3);
 		expect(loc2.getY()).toEqual(4);
 	});

 	it("should correctly calculate distance between locations", function(){
 		expect(loc.distFrom(loc2)).toEqual(5);
 		expect(loc2.distFrom(loc)).toEqual(5);
 		expect(loc.distFrom(loc)).toEqual(0);
 		expect(loc.distFrom(loc3)).toEqual(Math.sqrt(2));
 	})
});

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
	  	drunk = new Drunk();
			loc   = new Location(1, 1);
  	});

  	it("should throw range error when drunk not in field", function(){
  		expect(field1.moveDrunk.bind(field1, drunk)).toThrowError(RangeError, "Drunk not in field");
  	});
  });

});

describe("Drunk", function(){
	var drunk1, drunk2;
	beforeEach(function(){
		drunk1 = new Drunk();
		drunk2 = new Drunk("Persephone");
	});

	it("should initialize Drunk.name to 'Homer' when no name is provided", function(){
		expect(drunk1.name).toBe("Homer");
	});

	it("should initialize Drunk.name to the argument passed in to the constructor", function(){
		expect(drunk2.name).toBe("Persephone");
	});

	describe("Drunk#toString", function(){
		var lead = 'This drunk is named ';
		it("should render the correct string with the right name", function(){
			expect(drunk1.toString()).toMatch(/Homer/);
			expect(drunk2.toString()).toMatch(/Persephone/);
		});
	});
});

describe("UsualDrunk", function(){
	var udrunk1, udrunk2;
	beforeEach(function(){
		udrunk1 = new UsualDrunk();
		udrunk2 = new UsualDrunk("Persephone");
	});

	it("should delegate to Drunk methods", function(){
		expect(udrunk1.toString).toBeDefined();
		expect(udrunk1.name).toBe("Homer");  //test calling parent constructor
		expect(udrunk2.name).toBe("Persephone");
	});

	it("should have a constructor property set to UsualDrunk", function(){
		expect(udrunk1.constructor).toEqual(UsualDrunk);
	});
});

