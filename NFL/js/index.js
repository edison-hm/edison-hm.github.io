$(function() {
    var flag = true,
        data = {},
        i = 1,
        count = 1,
        wid = window.screen.width;

    $('.swiper-slide1 .logo1').addClass('animate-fn');
    $('.swiper-slide1 .slogan').addClass('animate-fn');
    $('.swiper-slide1 .main-img').addClass('animate-fn');
    $('.loading').addClass('animate-fn');
    // var mySwiper = new Swiper('.swiper-container',{
    //     speed: 1000,
    //     onlyExternal : true
    // })

    $('.swiper-slide').delegate('.next-btn', 'click', function(event) {
        nextSwipe()
    });

    function nextSwipe() {
        $('.swiper-wrapper')
            .transition({ transform: "translateX(-"+count*wid+"px)" });
        // $('.swiper-wrapper').css({
        //     '-webkit-transform':'translate3D(-'+count*wid+'px,0,0)',
        //     'transform':'translate3D(-'+count*wid+'px,0,0)',
        //     'transition': 'all 0.5s'
        // })
        count++;
    }

    // page2
    $('.question1-option li').click(function(event) {
        if(!flag) return;
        flag = false;
        var index = $(this).index();
        if(index == 1){
            $('.pop-wrap').fadeIn();
            $('.your-team').click(function() {
                nextSwipe()
                // mySwiper.slideNext();
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
            nextSwipe()
            // mySwiper.slideNext();
        }
    })


    $.fn.cssEnd = function ( callback ){
        var EventAnimateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.one(EventAnimateEnd , callback);
        return this;
    };

})