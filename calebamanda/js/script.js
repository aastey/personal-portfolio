 $(document).ready(function(){
    $('nav a').removeClass('selected');

    
    if (window.location.hash){
        var currentPage = window.location.hash;
        if (currentPage == "#about") {
            $('html,body').animate({
             scrollTop: $(currentPage).offset().top - 55}, 1000);
        } else {
            $('html,body').animate({
             scrollTop: $(currentPage).offset().top - 55}, 1000);
        }
        
        $('a[href='+currentPage+']').addClass('selected');
    } else{
        currentPage = "#about";
        window.location.hash = currentPage;
        $('a[href='+currentPage+']').addClass('selected');
        $('html,body').animate({
             scrollTop: $(currentPage).offset().top - 55}, 1000);
    }

    $('nav a').click(function(e){
        if ( $(this).hasClass("aboutpage") ){
            $('html,body').animate({
             scrollTop: $(this.hash).offset().top - 55}, 1000);
        }else {
            $('html,body').animate({
             scrollTop: $(this.hash).offset().top - 55}, 1000);
        }
        
        
        //remove the previous selected class
        //and put it on the correct nav button
        $('nav a').removeClass('selected');
        $(this).addClass('selected');
        
        //using the history js api to change 
        //the url without page reload
        window.history.replaceState('Object', 'Title', this.hash);
        return false;
        
    });

    
    
    $(".inline").colorbox({inline:true, width:935, height: 550});  
    $("a.inline").colorbox({rel: 'gal', title: function(){}});  

    $(".inline_pic").colorbox({inline:true, width:935, height: 550});  
    $("a.inline_pic").colorbox({rel: 'win', title: function(){}}); 


});


 $(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 0;
 
            //interval between items (in milliseconds)
            var itemInterval = 3500;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 1500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});
