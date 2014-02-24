var Triangles = {
    type: function() {
        if (this.valid()) {
            if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
                return "equilateral";  
            }   else if(this.sideOne === this.sideTwo || this.sideTwo === this.sideThree || this.sideOne === this.sideThree) {
                return "isosceles";
            }   else {
                return "scalene";
            }
        }   else {
            return "Alert: you must enter a triangle";
        }
    },

    valid: function() {
        var sidesArray = [this.sideOne, this.sideTwo, this.sideThree];
     
        sidesArray = sidesArray.sort(function(a,b){return b-a});
     
        return ((sidesArray[2] + sidesArray[1]) >= sidesArray[0]);
    }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var sideOne = parseInt($("input#new-side-one").val());
    var sideTwo = parseInt($("input#new-side-two").val());
    var sideThree = parseInt($("input#new-side-three").val());

    var newTriangle = Object.create(Triangles);
    newTriangle.sideOne = sideOne;
    newTriangle.sideTwo = sideTwo;
    newTriangle.sideThree = sideThree;

    var result = newTriangle.type();

    if (newTriangle.valid()) {
        $('ul#show-' + result).append("<li>" + newTriangle.sideOne + ", "+ newTriangle.sideTwo + ", " + newTriangle.sideThree + "</li>");

    } else {
        alert("Please enter a valid triangle");
    }
        // $(".show-sides").last().click(function() {
        //     $(".sideOne").text(newTriangle.sideOne);

        // })
    this.reset();
  });
});

