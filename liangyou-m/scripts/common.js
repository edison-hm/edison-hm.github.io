$(function() {
    $('.nav-btn').on('click', function() {
        $('.side-nav').addClass('active');
    })

    $('.side-nav .close').on('click', function() {
        $('.side-nav').removeClass('active');
    })

    $('.side-nav .item h3').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.list').toggle();
    })

    $('.footer-nav .item h3').on('click', function() {
        $(this).toggleClass('active');
        $(this).next('.list').toggle();
    });

    function debounce(fn, delay) {

        // 定时器，用来 setTimeout
        var timer

        // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
        return function () {

            // 保存函数调用时的上下文和参数，传递给 fn
            var context = this
            var args = arguments

            // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
            clearTimeout(timer)

            // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
            // 再过 delay 毫秒就执行 fn
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }

    $(document).bind('scroll', debounce(function() {
        if($(window).scrollTop() > 100) {
            $('.backToTop').fadeIn();
        }else{
            $('.backToTop').fadeOut();
        }
    }, 100))

    $('.backToTop').on('click', function() {
        $('body,html').animate({scrollTop:0},400);  
        return false;  
    })
  

})