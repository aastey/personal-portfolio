 $(document).ready(function(){

    $(".menu-item").click( function(){
        var newPage = $(this).attr('id').toString(); 
        window.location = "mobile/" + newPage + ".html"   
    })

    $(".mobile-party").click( function(){
        var partyDiv = $(this).attr('id').toString(); 
        var partyID = "#" + partyDiv + "-box"
        $(partyID).css("display", "block") 
        $(".overlay").css('display', "block") 
    })
    $(".close-div").click( function(){
        $(".party-div").css("display", "none")
        $(".overlay").css("display", "none")  
    })

 });