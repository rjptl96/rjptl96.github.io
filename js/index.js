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


