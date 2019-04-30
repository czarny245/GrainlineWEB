
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
    $(".piece-amount").change(function() {
        var TSSpiece = $(".TSSpiece")[0].value
        console.log(TSSpiece);
        calculate(TSSpiece);
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