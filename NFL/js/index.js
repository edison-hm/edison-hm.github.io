$(function() {
    var flag = true,
        data = {},
        i = 1;

    $('.swiper-slide1 .logo1, .swiper-slide1 .slogan, .swiper-slide1 .main-img, .loading').addClass('animate-fn');

    var mySwiper = new Swiper('.swiper-container',{
        initialSlide : 1,
        onlyExternal : true
    })

    $('.swiper-slide').delegate('.next-btn', 'click', function(event) {
        mySwiper.slideNext();
    });

    // page2
    $('.question1-option li').click(function(event) {
        if(!flag) return;
        flag = false;
        var index = $(this).index();
        if(index == 1){
            $('.pop-wrap').fadeIn();
            $('.your-team').click(function() {
                mySwiper.slideNext();
            })
        }else{
            $(this).addClass('error');
            $(this).cssEnd(function() {
                $(this).removeClass('error');
                flag = true;
            })
        }
    });

    $('.answer-list li').bind('click', function() {
        data['answer'+i] = $(this).text();
        i++;
        if($(this).parent('ul').hasClass('last-answer')){
            console.log(data);
        }else{
            mySwiper.slideNext();
        }
    })


    $.fn.cssEnd = function ( callback ){
        var EventAnimateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.one(EventAnimateEnd , callback);
        return this;
    };

})