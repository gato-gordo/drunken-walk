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

describe("EDrunk", function(){
	var edrunk1, edrunk2;
	beforeEach(function(){
		edrunk1 = new EDrunk();
		edrunk2 = new EDrunk("Persephone");
	});
	it("should delegate to Drunk methods", function(){
		expect(edrunk1.toString).toBeDefined();
		expect(edrunk1.name).toBe("Homer");  //test calling parent constructor
		expect(edrunk2.name).toBe("Persephone");
	});
	it("should have a constructor property set to UsualDrunk", function(){
		expect(edrunk1.constructor).toEqual(EDrunk);
	});
});

describe("ColdDrunk", function(){
	var cdrunk1, cdrunk2;
	beforeEach(function(){
		cdrunk1 = new ColdDrunk();
		cdrunk2 = new ColdDrunk("Persephone");
	});
	it("should delegate to Drunk methods", function(){
		expect(cdrunk1.toString).toBeDefined();
		expect(cdrunk1.name).toBe("Homer");  //test calling parent constructor
		expect(cdrunk2.name).toBe("Persephone");
	});
	it("should have a constructor property set to UsualDrunk", function(){
		expect(cdrunk1.constructor).toEqual(ColdDrunk);
	});
});