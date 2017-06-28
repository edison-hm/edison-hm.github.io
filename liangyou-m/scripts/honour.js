$(function() {
    var awardSlide = {
        init: function() {
            this.$nav = $('#J_yearNav');
            this.$leftArrow = this.$nav.find('.left-arrow');
            this.$rightArrow = this.$nav.find('.right-arrow');
            this.$wrap = $('.year-wrap');
            this.$list = this.$wrap.find('ul');
            this.$item = this.$list.find('li');
            this.slideWidth = this.$item.outerWidth(true) * 7;
            this.maxPage = Math.ceil(this.$item.length * this.$item.outerWidth(true) / this.$wrap.width());
            this.page = 0;

            this.slide();
            this.showAward();
        },

        slide: function() {
            var self = this;
            this.$rightArrow.on('click', function() {
                self.page < self.maxPage - 1 ? self.page ++ : self.page = self.maxPage - 1;
                self.$list.stop().animate({
                        left: -self.slideWidth * self.page
                    }, 400, function() {
                        
                    });
            })

            this.$leftArrow.on('click', function() {
                self.page > 0 ? self.page -- : self.page = 0;
                self.$list.stop().animate({
                        left: -self.slideWidth * self.page
                    }, 400, function() {
                        
                    });
            })
        },

        showAward: function() {
            this.$list.delegate('li', 'click', function(event) {
                $(this).addClass('active').siblings().removeClass('active');
                var year = $(this).text();

                // ajax操作 参数为当前年份
                // $.get('ajaxUrl', {year: year}, function(data) {
                    
                //      $('.award-list ul').html();
                // })

            });
        }
    };

    awardSlide.init();
})