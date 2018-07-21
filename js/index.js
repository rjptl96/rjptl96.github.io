 $( ".navbar-nav li" ).click(function() {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });

 $(window).on('load',function(){
     $('#exampleModalCenter').modal('show');
 });

 $( ".navbar-brand" ).click(function() {
     $('.navbar-nav li').removeClass('active');
     $('.homePage').addClass('active');
 });

 function bsCarouselAnimHeight() {
     $('.carousel').carousel({
         interval: 5000
     }).on('slide.bs.carousel', function (e) {
         var nextH = $(e.relatedTarget).height();
         $(this).find('.active.item').parent().animate({
             height: nextH
         }, 500);
     });
 }

 bsCarouselAnimHeight();