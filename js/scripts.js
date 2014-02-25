var Package = {
    weight: function() {
        return this.lbs * .25;
    },

    distance: function() {
        return this.miles * .01;
    }, 

    size: function() {
        if (this.l * this.w * this.h < 50) {
            return 5;
        } else if (this.l * this.w * this.h < 200) {
            return 10;    
        } else {
            return 15;
        }
    },

    speed: function() {
        if (this.priority === "standard") {  
            return 0;
        } else if (this.priority === "next day") {
            if (this.miles < 100) {
                return 5;
            } else {
                return 25;
            } 
        } else {
            return 10;
        }
    }, 

    calculatePrice: function() {
        return "$" + (this.weight() + this.distance() + this.size() + this.speed()).toFixed(2);
    }
};


$(document).ready(function() {
  $("form#new-package").submit(function(event) {
    event.preventDefault();

    var lbs = parseFloat($("input#new-lbs").val());
    var l = parseFloat($("input#new-l").val());
    var w = parseFloat($("input#new-w").val());
    var h = parseFloat($("input#new-h").val());
    var miles = parseFloat($("input#new-miles").val());
    var priority = $("input:checked" ).val();

    var newPackage = Object.create(Package);
    newPackage.lbs = lbs;
    newPackage.l = l;
    newPackage.w = w;
    newPackage.h = h;
    newPackage.miles = miles;
    newPackage.priority = priority;


    var result = newPackage.calculatePrice();

    $('ul#show-price').append("<li>" + result + "</li>");
    
    this.reset();
  });
});


