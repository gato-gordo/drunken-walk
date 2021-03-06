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

  describe("Location#move", function(){
    it("return a new location with correctly updated x and y", function(){
      var newLoc  = loc.move(3, 4);
      var newLoc2 = loc2.move(-4, -5);
      expect(newLoc.getX()).toEqual(3);
      expect(newLoc.getY()).toEqual(4);
      expect(newLoc2.getX()).toEqual(-1);
      expect(newLoc2.getY()).toEqual(-1);
    });
  });

  describe("Location#distance", function(){
    it("should correctly calculate distance between locations", function(){
      expect(loc.distFrom(loc2)).toEqual(5);
      expect(loc2.distFrom(loc)).toEqual(5);
      expect(loc.distFrom(loc)).toEqual(0);
      expect(loc.distFrom(loc3)).toEqual(Math.sqrt(2));
    });
  });

});
