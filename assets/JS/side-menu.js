$(window).on('load', function(){
    let menuTabW=$(".menu-tab").outerWidth()
    $(".side-menu").animate({"left":`-${menuTabW}px`},500)
});


$(".mid-icon").click(function (){
    let menuTabW=$(".menu-tab").outerWidth()
    if(($(".side-menu").css("left"))=='0px'){
        $(".side-menu").animate({"left":`-${menuTabW}px`},500)
        $(".mid-icon").addClass('fa-bars')
        $(".mid-icon").removeClass('fa-xmark')
    }else{
        $(".side-menu").animate({"left":"0px"},500)
        $(".mid-icon").removeClass('fa-bars')
        $(".mid-icon").addClass('fa-xmark')
    }
})

