describe('Triangles', function() {
  describe("type", function() {
    it("returns equilateral if all sides are equal", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 2;
      testTriangle.sideTwo = 2;
      testTriangle.sideThree = 2;
      testTriangle.type().should.equal("equilateral");
    });

      it("returns isosceles if two sides are equal", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 2;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 2;
      testTriangle.type().should.equal("isosceles");
    });

      it("returns scalene if no sides are equal", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 2;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 4;
      testTriangle.type().should.equal("scalene");
    });

      it("returns an alert if the sides do not make a triangle", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 10;
      testTriangle.sideTwo = 1;
      testTriangle.sideThree = 1;
      testTriangle.type().should.equal("Alert: you must enter a triangle");
    });
  });
  describe("valid", function() {
    it("returns false if it is not a triangle", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 6;
      testTriangle.sideTwo = 2;
      testTriangle.sideThree = 2;
      testTriangle.valid().should.equal(false);
    });

    it("returns true if it is a triangle", function() {
      var testTriangle = Object.create(Triangles);
      testTriangle.sideOne = 6;
      testTriangle.sideTwo = 5;
      testTriangle.sideThree = 3;
      testTriangle.valid().should.equal(true);
    });
  });
});
