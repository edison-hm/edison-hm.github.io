$(function() {
    $('.swiper-slide1 .logo1, .swiper-slide1 .slogan, .swiper-slide1 .main-img, .loading').addClass('animate-fn');

    console.log($('.swiper-slide1 .logo'));
    var mySwiper = new Swiper('.swiper-container',{
        onlyExternal : true
    })

    $('.next-btn').click(function(){
        mySwiper.slideNext();
    })
})