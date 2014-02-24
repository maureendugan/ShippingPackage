describe('Package', function() {
  describe('weight', function() {
    it('multiplies the package weight by a constant', function() {
      var testPackage = Object.create(Package);
      testPackage.lbs = 4;
      testPackage.weight().should.equal(1);
    });
  });

  describe('distance', function() {
    it('multiplies total miles by a constant', function() {
      var testPackage = Object.create(Package);
      testPackage.miles = 200;
      testPackage.distance().should.equal(2);
    });
  });

  describe('size', function() {
    it('returns $5 for packages smaller than 50 cubic inches', function () {
      var testPackage = Object.create(Package);
      testPackage.l = 4;
      testPackage.w = 3;
      testPackage.h = 2;
      testPackage.size().should.equal(5);
    });

    it('returns $15 for packages larger than 200 cubic inches', function () {
      var testPackage = Object.create(Package);
      testPackage.l = 12;
      testPackage.w = 12;
      testPackage.h = 4;
      testPackage.size().should.equal(15);
    });

    it('returns $10 for packages between 50 and 200 cubic inches', function () {
      var testPackage = Object.create(Package);
      testPackage.l = 10;
      testPackage.w = 3;
      testPackage.h = 4;
      testPackage.size().should.equal(10);
    });
  });

  describe('speed', function() {
    it('returns a rate for the desired speed', function() {
      var testPackage = Object.create(Package);
      testPackage.priority = "next day";
      testPackage.miles = 150;
      testPackage.speed().should.equal(25);
    });

    it('returns a rate of $5 if the distance is within 100 miles', function() {
      var testPackage = Object.create(Package);
      testPackage.priority = "next day";
      testPackage.miles = 67;
      testPackage.speed().should.equal(5);
    });

    it('returns a rate of $10 if the priority is equal to two days', function() {
      var testPackage = Object.create(Package);
      testPackage.priority = "two day";
      testPackage.speed().should.equal(10);
    });

    it('does not add a cost if the priority is standard', function() {
      var testPackage = Object.create(Package);
      testPackage.priority = "standard";
      testPackage.speed().should.equal(0);
    });
  });

  describe('calculatePrice', function() {
    it('calculates the cost of sending a package', function() {
      var testPackage = Object.create(Package);
      testPackage.lbs = 8;
      testPackage.l = 5;
      testPackage.w = 10;
      testPackage.h = 2;
      testPackage.miles = 99;
      testPackage.priority = "next day";
      testPackage.calculatePrice().should.equal("$17.99");
    });
   });
});
