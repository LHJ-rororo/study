$(function() {
    $(".navi_box").mouseover(function() {
        $(this).children(".menu_box").stop().slideDown();
    });
    $(".navi_box").mouseleave(function() {
        $(this).children(".menu_box").stop().slideUp();
    });
});

$(function(){
    setInterval(function(){
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginTop: "-300px"
        }, "500");
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginTop: "-600px"
        }, "500");
        $(".slide_box").delay("2500");
        $(".slide_box").animate({
            marginTop: "0"
        }, "500");
    });
});