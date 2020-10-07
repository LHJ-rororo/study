$('.menu a').hover(function(){
    $('.submenu_box').stop().slideToggle();
    $('.navi_box_bg').stop().slideToggle();
});

$(function(){
    setInterval(function(){
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft:"-1200px"
        }, "500");
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft:"-2400px"
        }, "500");
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft:"0px"
        }, "500");
    });
});