$(function(){
    $(".navibox").mouseover(function(){
        $(this).children(".menu_box").stop().slideDown();
    });
    $(".navibox").mouseleave(function(){
        $(this).children(".menu_box").stop().slideUp();
    });
});