 $( ".navbar-nav li" ).click(function() {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });


 $( ".navbar-brand" ).click(function() {
     $('.navbar-nav li').removeClass('active');
     $('.homePage').addClass('active');
 });