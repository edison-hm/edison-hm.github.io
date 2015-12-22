$(function() {
    var mySwiper = new Swiper('.swiper-container',{
        onlyExternal : true
    })
    
    $('.swiper-slide').click(function(){
        mySwiper.slideNext();
    })
})