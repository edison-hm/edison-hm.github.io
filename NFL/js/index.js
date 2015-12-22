$(function() {
    var mySwiper = new Swiper('.swiper-container',{
        onlyExternal : true
    })

    $('.next-btn').click(function(){
        mySwiper.slideNext();
    })
})