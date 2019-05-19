  
  /* ==============================================
    Price Data section
    ================================================ */
    var pricingTypes = [
        {
            id: 0,
            name: "Trouser, short or skirt:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18'],
            price : [ 7.5, 9.5, 11.5, 11.5, 11.5 ],
            plot: false,
        },
        {   
            id:  1,
            name: "Blouser, top or shirt:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18'],
            price : [ 7.5, 9.5, 13, 13, 13 ],
            plot: false,
        },
        {   
            id: 2,
            name: "Dress or playsuit:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18', '19 to 30', '31 to 40'],
            price: [ 9, 12, 14.85, 18.50, 22.50 ],
            plot: false,
        },
        {   
            id: 3,
            name: "Jacket or Coat:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18', '19 to 30', '31 to 40'],
            price: [ 9.5, 12.5, 16, 24, 22.5 ],
            plot: false,
        }
    ]
    var specPricingTypes = [
        {
            name: "Trouser, short or skirt:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18'],
            price : [ 8.5, 11.5, 13.5, 13.5, 13.5 ],
            plot: false,
        },
        {
            name: "Blouser, top or shirt:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18'],
            price : [ 8.5, 11.5, 15, 15, 15 ],
            plot: false,
        },
        {
            name: "Dress or playsuit:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18', '19 to 30', '31 to 40'],
            price: [ 10.5, 13, 15.5, 21.5, 24.5 ],
            plot: false,
        },
        {
            name: "Jacket or Coat:",
            quantity: [0, '1 to 6', '7 to 11', '12 to 18', '19 to 30', '31 to 40'],
            price: [ 11, 13.5, 17, 27, 25 ],
            plot: false,
        }
    ]
  /* ==============================================
    Price Data constructors
    ================================================ */


    var StandardPricing = function(data) {
        var self = this

        self.priceRange = data.price
        self.id = data.id
        self.plotValue = ko.observable();
        self.sizes = ko.observable(4);
        self.name = data.name;
        self.quantity = ko.observableArray(data.quantity);
        self.quantityValue = ko.observable();
        self.initialPricePP = ko.computed(function() {
            if (self.quantityValue() === 0){return 0}
            else if (self.quantityValue() === "1 to 6"){return data.price[0]}
            else if (self.quantityValue() === "7 to 11"){return data.price[1]}
            else if (self.quantityValue() === "12 to 18"){return data.price[2]}
            else if (self.quantityValue() === "19 to 30"){return data.price[3]}
            else if (self.quantityValue() === "31 to 40"){return data.price[4]}
        });
        self.pricePP = ko.computed(function() {
            if (self.plotValue() === "Yes"){return self.initialPricePP() + 4}
            else {return self.initialPricePP()}
        });
        self.plotOptions = ko.observableArray(['No', 'Yes']);
        self.price = ko.computed(function() {
            return self.pricePP() * self.sizes()
        });
    }    

    var SpecialistPricing = function(data) {
        var self = this

        self.plotValue = ko.observable();
        self.sizes = ko.observable(4);
        self.name = data.name;
        self.quantity = ko.observableArray(data.quantity);
        self.quantityValue = ko.observable();
        self.initialPricePP = ko.computed(function() {
            if (self.quantityValue() === 0){return 0}
            else if (self.quantityValue() === "1 to 6"){return data.price[0]}
            else if (self.quantityValue() === "7 to 11"){return data.price[1]}
            else if (self.quantityValue() === "12 to 18"){return data.price[2]}
            else if (self.quantityValue() === "19 to 30"){return data.price[3]}
            else if (self.quantityValue() === "31 to 40"){return data.price[4]}
        });
        self.pricePP = ko.computed(function() {
            if (self.plotValue() === "Yes"){return self.initialPricePP() + 4}
            else {return self.initialPricePP()}
        });
        self.plotOptions = ko.observableArray(['No', 'Yes']);
        self.price = ko.computed(function() {
            return self.pricePP() * self.sizes()
        });
    }
    
function main() {

(function () {
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
    self.pricingList = ko.observableArray([]);
    self.specPricingList = ko.observableArray([]);

    // Push all our pricingTypes object into the array
    pricingTypes.forEach(function(pricingType){
        self.pricingList.push(new StandardPricing(pricingType));
        console.log("filling standard grading list...")
        console.log(self.pricingList())
    });

    // Push all our specPricingTypes object into the array
    specPricingTypes.forEach(function(specPricingType){
        self.specPricingList.push(new SpecialistPricing(specPricingType));
        console.log("filling spec grading list....")
        console.log(self.specPricingList())
    });

    // Calculate the final price for standard grading
    this.finalPrice = ko.computed(function(){
        var price = 0
        for (var i = 0; i < self.pricingList().length; i++) {
            price = price + self.pricingList()[i].price()
        }{return price}
    });
    // Calculate the final price for specialist grading
    this.specFinalPrice = ko.computed(function(){
        var price = 0
        for (var i = 0; i < self.specPricingList().length; i++) {
            price = price + self.specPricingList()[i].price()
        }{return price}
    });
    // Button functions adding/removing items to the pricing lists
    self.addGarment = function(data) {
        console.log(data)
        self.pricingList.push(data)
        console.log(self.pricingList())

    }
    self.addSpecGarment = function(data) {
        console.log(data)
        self.specPricingList.push(data)
        console.log(self.specPricingList())

    }
    self.removeGarment = function(data) {
        console.log(data)
        self.pricingList.pop()
        console.log(self.pricingList())

    }
    self.removeSpecGarment = function(data) {
        console.log(data)
        self.specPricingList.pop()
        console.log(self.specPricingList())

    }
    // Hide/show tables function
    self.filterTables = function(data, event) {
        var item = $(event.currentTarget)
        console.log(item)
        var str = "."+item.attr("class")+"-table";
        console.log(str)
            if (str === ".StandardGrading") {}

        $(str).slideToggle()
        if(item.html() === '<i class="fas fa-arrow-circle-up"></i>'){
            item.html('<i class="fas fa-arrow-circle-down"></i>')
        } else {item.html('<i class="fas fa-arrow-circle-up"></i>')}
    }



  	/*====================================
    Export to PDF functions
    ======================================*/
    self.exportPDF = function() {
    $(".toHide").toggle();
    $(".formattedSelect").toggle();
    $(".rawSelect").toggle();
    $("td").css("padding", "0px");
    $("td").css("font-size", "18px");
    var vat = self.finalPrice() * 0.2;
    vat = vat.toFixed(2);
    var final = self.finalPrice() + vat
    final = final.toFixed(2);

    
    html2canvas($('#stdTable'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var logo

        var docDefinition = {
            content: [
              { text: 'Grainline studio', style: 'header' },
              { text: 'Grading Invoice', style: 'h2' },
              { text: '20-24 Assembly Passage', style: 'rightSide' },
              { text: 'London', style: 'rightSide' },
              { text: 'E1 4UT', style: 'rightSide' },
              { text: 'info@grainlinestudio.co.uk', style: 'rightSide' },
              { text: '+44 2077908395', style: 'rightSide, bottom' },
              { image: data, width: 500 },
              { text: 'Price: £'+self.finalPrice(), style: 'rightSide' },
              { text: 'VAT 20%: £'+vat, style: 'rightSide'},
              { text: 'Total: £' + final + '*', style: 'rightSide'},
              { text: '* Please note this invoice may be subject to change depending on the patterns', style: 'desclaimer' },
              { text: 'Contact info@grainlinestudio.co.uk for more details', style: 'desclaimer' },
              
            ],
          
            styles: {
              header: {
                fontSize: 22,
                bold: true
              },
              rightSide: {
                alignment: 'right'
              },
              bottom: {
                  alignment: 'bottom'
              },
              desclaimer: {
                fontSize: 7
              }
            }
          };
    
          pdfMake.createPdf(docDefinition).download("Table.pdf");
        }
    });
}
self.exportSpecPDF = function() {
    $(".toHide").toggle();
    $(".formattedSelect").toggle();
    $(".rawSelect").toggle();
    $("td").css("padding", "0px");
    $("td").css("font-size", "18px");
    var vat = self.specFinalPrice() * 0.2;
    vat = vat.toFixed(2);
    var final = self.specFinalPrice() + vat
    final = final.toFixed(2);

    
    html2canvas($('#spcTable'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var logo

        var docDefinition = {
            content: [
              { text: 'Grainline studio', style: 'header' },
              { text: 'Grading Invoice', style: 'h2' },
              { text: '20-24 Assembly Passage', style: 'rightSide' },
              { text: 'London', style: 'rightSide' },
              { text: 'E1 4UT', style: 'rightSide' },
              { text: 'info@grainlinestudio.co.uk', style: 'rightSide' },
              { text: '+44 2077908395', style: 'rightSide' },
              { image: data, width: 500 },
              { text: 'Price: £'+self.specFinalPrice(), style: 'rightSide' },
              { text: 'VAT 20%: £'+vat, style: 'rightSide'},
              { text: 'Total: £' + final + '*', style: 'rightSide'},
              { text: '* Please note this invoice may be subject to change depending on the patterns', style: 'desclaimer' },
              { text: 'Contact info@grainlinestudio.co.uk for more details', style: 'desclaimer' },
              
            ],
          
            styles: {
              header: {
                fontSize: 22,
                bold: true
              },
              h2: {
                fontSize: 19,
              },
              rightSide: {
                alignment: 'right'
              },
              desclaimer: {
                fontSize: 10
              }
            }
          };
    
          pdfMake.createPdf(docDefinition).download("Table.pdf");
        }
    });
}



}

ko.applyBindings(new ViewModel());

  	/*====================================
    Export to Excell function
    ======================================*/
function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.pdf':'excel_data.xls';
        
    // Create download link element
    downloadLink = document.createElement("a");
        
    document.body.appendChild(downloadLink);
        
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        
        // Setting the file name
        downloadLink.download = filename;
            
        //triggering the function
        downloadLink.click();
    }
}
  	/*====================================
    Export screencap to PDF function
    ======================================*/
function Export() {
    html2canvas($('#stdTable'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Table.pdf");
        }
    });
}


          