  
  /* ==============================================
    Price Data section
    ================================================ */
    var pricingTypes = [
        {
            name: "Trousers, shorts and skirts:",
            quantity: 0,
            price : [ 7.5, 9.5, 11.5, 11.5, 11.5 ],
            plot: false,
        },
        {
            name: "Blousers, tops and shirts:",
            quantity: 0,
            price : [ 7.5, 9.5, 13, 13, 13 ],
            plot: false,
        },
        {
            name: "Dresses and playsuits:",
            quantity: 0,
            price: [ 9, 12, 14.85, 18.50, 22.50 ],
            plot: false,
        },
        {
            name: "Jackets and Coats:",
            quantity: 0,
            price: [ 9.5, 12.5, 16, 24, 22.5 ],
            plot: false,
        }
    ]
    var specPricingTypes = [
        {
            name: "Trousers, shorts and skirts:",
            quantity: 0,
            price : [ 8.5, 11.5, 13.5, 13.5, 13.5 ],
            plot: false,
        },
        {
            name: "Blousers, tops and shirts:",
            quantity: 0,
            price : [ 8.5, 11.5, 15, 15, 15 ],
            plot: false,
        },
        {
            name: "Dresses and playsuits:",
            quantity: 0,
            price: [ 10.5, 13, 15.5, 21.5, 24.5 ],
            plot: false,
        },
        {
            name: "Jackets and Coats:",
            quantity: 0,
            price: [ 11, 13.5, 17, 27, 25 ],
            plot: false,
        }
    ]
  /* ==============================================
    Price Data constructor
    ================================================ */


    var StandardPricing = function(data) {
        var self = this

        self.plotValue = ko.observable();
        self.name = data.name;
        self.quantity = ko.observable(0);
        self.initialPricePP = ko.computed(function() {
            if (self.quantity() === 0){return 0}
            else if (self.quantity() > 0 && self.quantity() < 7){return data.price[0]}
            else if (self.quantity() > 6 && self.quantity() < 12){return data.price[1]}
            else if (self.quantity() > 11 && self.quantity() < 19){return data.price[2]}
            else if (self.quantity() > 18 && self.quantity() < 31){return data.price[3]}
            else if (self.quantity() > 30 ){return data.price[4]}
        });
        self.pricePP = ko.computed(function() {
            if (self.plotValue() === "Yes"){return self.initialPricePP() + 4}
            else {return self.initialPricePP()}
        });
        self.plotOptions = ko.observableArray(['No', 'Yes']);
        self.price = ko.computed(function() {
            return self.pricePP() * self.quantity()
        });
    }    

    var SpecialistPricing = function(data) {
        var self = this

        self.plotValue = ko.observable();
        self.name = data.name;
        self.quantity = ko.observable(0);
        self.initialPricePP = ko.computed(function() {
            if (self.quantity() === 0){return 0}
            else if (self.quantity() > 0 && self.quantity() < 7){return data.price[0]}
            else if (self.quantity() > 6 && self.quantity() < 12){return data.price[1]}
            else if (self.quantity() > 11 && self.quantity() < 19){return data.price[2]}
            else if (self.quantity() > 18 && self.quantity() < 31){return data.price[3]}
            else if (self.quantity() > 30 ){return data.price[4]}
        });
        self.pricePP = ko.computed(function() {
            if (self.plotValue() === "Yes"){return self.initialPricePP() + 4}
            else {return self.initialPricePP()}
        });
        self.plotOptions = ko.observableArray(['No', 'Yes']);
        self.price = ko.computed(function() {
            return self.pricePP() * self.quantity()
        });
    }
function main() {

(function () {
    
   'use strict';



   /* ==============================================
    Pricing listeners
    ================================================ */
    $( "select" )
        .change(function() {
            var TSSpiece = $(".TSSpiece")[0].value
            calculate(TSSpiece);
        });
        var plotValue

    $(".piece-amount").change(function() {
        var TSSpiece = $(".TSSpiece")[0].value
        console.log(TSSpiece);
        calculate(TSSpiece);
        console.log(pricingTypes);
    });


    /* ==============================================
    Pricing function
    ================================================ */

    function calculate(TSSpiece) {
        var price, finalPrice
        if (TSSpiece < 7){price=7.5}
        else if (TSSpiece > 6 && TSSpiece < 12){price=9.5}
        else if (TSSpiece > 11){price=11.5}
        //if ($(".TSSplot")[0].value === "plot") {
        //    finalPrice = price * 4;
        //} else {
        //    finalPrice = TSSpiece * price;
        //};
        finalPrice = TSSpiece*price
        if ($(".TSSplot")[0].value === "plot"){
            price = price + 4;
            finalPrice = TSSpiece*price;
        }
        console.log(finalPrice);
        $(".TSSprice").html("£"+finalPrice + "  (£"+price+" per piece)");
    };
    

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}

main();

// View Model
var ViewModel = function() {
    var self = this;

        // Initialize the arrays that will hold all our pricing Types objects
    this.pricingList = ko.observableArray([]);
    this.specPricingList = ko.observableArray([]);

    // Push all our pricingTypes object into the array
    pricingTypes.forEach(function(pricingType){
        self.pricingList.push(new StandardPricing(pricingType));
        console.log("filling standard grading list...")
        console.log(pricingList())
    });

    // Push all our specPricingTypes object into the array
    specPricingTypes.forEach(function(specPricingType){
        self.specPricingList.push(new SpecialistPricing(specPricingType));
        console.log("filling spec grading list....")
        console.log(specPricingList())
    });

    // Calculate the final price for standard grading
    this.finalPrice = ko.computed(function(){
        var price = 0
        for (var i = 0; i < pricingList().length; i++) {
            price = price + pricingList()[i].price()
        }{return price}
    });
    // Calculate the final price for specialist grading
    this.specFinalPrice = ko.computed(function(){
        var price = 0
        for (var i = 0; i < specPricingList().length; i++) {
            price = price + specPricingList()[i].price()
        }{return price}
    });
}
ko.applyBindings(ViewModel);