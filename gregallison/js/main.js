$(document).ready(function (){

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(39.021757, -77.186323);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>The Bolger Center<br> 32846 Sydney</div>'
  });  



$('#aboutpic').waypoint(function() {
  $('#aboutuscontent').removeClass("animated fadeOut")
     $('#aboutuscontent').addClass("animated fadeIn")
  }, {
    offset: '100%'
  });

$('#fivefacts1').waypoint(function() {
     $('#fivefactsSectionOne').removeClass("animated fadeOutRight")
     $('#earthpic').removeClass("animated fadeOutRight")
     $('#earthpic').addClass("animated fadeInRight")
     $('#fivefactsSectionOne').addClass("animated fadeInRight")
  }, {
    offset: '100%'
  });

$('#fivefacts2').waypoint(function() {
      $('#satpic').removeClass("animated fadeOutLeft")
      $('#fivefactsSectionTwo').removeClass("animated fadeOutLeft")
     $('#satpic').addClass("animated fadeInLeft")

     $('#fivefactsSectionTwo').addClass("animated fadeInLeft")
  }, {
    offset: '100%'
  });


function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

function scrollLink() {
  $('.target-link').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollLink();


});