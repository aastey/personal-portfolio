function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(38.981293, -77.110002),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    setMarkers(map, locations);
}

var locations = [
  ['Bethesda Court Hotel', 38.9876122, -77.0950619, '7740 Wisconsin Avenue, Bethesda, MD', 'images/map-icon-hotel.png'],
  ['Bethesda Residence Inn', 38.9831458, -77.0928391, '7335 Wisconsin Ave, Bethesda, MD', 'images/map-icon-hotel2.png'],
  ['Glen Echo Park', 38.967529,-77.139880, '7300 MacArthur Blvd, Glen Echo, MD', 'images/map-icon-glenecho.png']
];




  function setMarkers(map, locations) {
        
        for (var i = 0; i < locations.length; i++) {
              var placeholder = locations[i];

              var myLatlng = new google.maps.LatLng(placeholder[1], placeholder[2]);

               var boxText = document.createElement("div");
                boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: yellow; padding: 5px;";
                boxText.innerHTML = placeholder[3];
              

              var marker = new google.maps.Marker({
                  position: myLatlng,
                  icon: placeholder[4],
                  title:placeholder[0]
              });


              var styles = [
                {
                  stylers: [
                    { hue: "#00ffe6" },
                    { saturation: -10 }
                  ]
                },{
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [
                    { lightness: 100 }
                  ]
                },{
                  featureType: "road",
                  elementType: "labels",
                  stylers: [
                    { visibility: "off" }
                  ]
                }
              ];
          marker.setMap(map);
          map.setOptions({styles: styles});

        
        }
    }
  // To add the marker to the map, call setMap();
  




