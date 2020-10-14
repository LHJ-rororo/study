$('.menu a').hover(function() {
    $('.submenu_box').stop().slideToggle();
    $('.navi_box_bg').stop().slideToggle();
});
// navi_box

$(function(){
    setInterval(function(){
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft: "-1200px"
        }, "700");
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft: "-2400px"
        }, "700");
        $(".slide_img").delay("2500");
        $(".slide_img").animate({
            marginLeft: "0"
        }, "700");
    });
});

$(function(){
    $('#popup_button').on('click', function(){
        $('.popup').fadeIn();
    });
    $('.팝업닫기').on('click',function(){
        $('.popup').fadeOut();
    });
});

$('.family_list_box').hover(function(){
    $(".family_list_box ul").stop().slideDown();
},function(){
    $(".family_list_box ul").stop().slideUp();
});