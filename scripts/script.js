$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 37){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }
    })
})