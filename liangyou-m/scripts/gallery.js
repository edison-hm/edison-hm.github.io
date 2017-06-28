$(function() {
    $('.photo-item').on('click', function() {
        var src = $(this).find('img').attr('src'),
            text = $(this).find('span').text();

        $(this).addClass('active').siblings().removeClass('active');
        $('.main-show').html(photoTpl(src, text));

    })

    function photoTpl(src, text) {
        return '<img src="'+src+'" alt=""><span>'+text+'</span>';
    }
});