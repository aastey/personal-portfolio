$( document ).ready( function() {
  //click events 
  $(".nav-link").click(navChange);

  // Parallax Scrolling
    //for IE
    document.createElement("section");
    // cache the window object
    $window = $(window);
   
    $('section[data-type="background"]').each(function(){
      // declare the variable to affect the defined data-type
      var $scroll = $(this);
                      
       $(window).scroll(function() {
         // HTML5 proves useful for helping with creating JS functions!
         // also, negative value because we're scrolling upwards                             
         var yPos = -($window.scrollTop() / $scroll.data('speed')); 
          
         // background position
         var coords = '50% '+ yPos + 'px';
   
         // move the background
         $scroll.css({ backgroundPosition: coords });    
       }); // end window scroll
    });  // end section function

});

// Affixed Navbar
$('.navbar').affix({
      offset: {
        top: $('.main-background').height()-$('.navbar-default').height()
      }
}); 

$('.scroll-top').affix({
      offset: {
        top: $('.main-background').height()-$('.navbar-default').height()
      }
}); 


var navChange= function(e){
	$(".nav-link").removeClass("active");
	$(this).addClass("active");
   
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      var topDistance = 20;
      if (target == "about") {
        topDistance = 500;
      } 
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - topDistance
        }, 1000);
        return false;
      }
    }

}

