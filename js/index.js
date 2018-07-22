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

jQuery('.carousel').on('slide.bs.carousel', function (e) {
   var nextH = jQuery(e.relatedTarget).height();
   jQuery(this).find('.active.item').parent().animate({
      height: nextH
   }, 500);
});
