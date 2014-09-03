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

$( document ).ready( function() {
  $(".nav-link").click(navChange);

});

var navChange= function(e){
	$(".nav-link").removeClass("active");
	$(this).addClass("active");
   
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 130
        }, 1000);
        return false;
      }
    }

}

