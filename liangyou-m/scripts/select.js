var defaults = {
    el: 'select',
    callback: function() {

    }
};

function Select(options) {
    this.init(options);
}

Select.prototype = {
    init: function(options) {
        this.opts = $.extend(true, {}, defaults, options || {});  
        this.$select = $(this.opts.el);

        this.$select.wrap('<div class="select"></div>');
        this.$wrap = this.$select.parent('.select');
        this.$select.after('<div class="styledSelect"></div>');
        this.$styledSelect = this.$select.next('div.styledSelect');


        this.$styledSelect.text(this.$select.children('option').eq(0).text());
        this.$styledSelect.after('<ul class="options"></ul>');

        this.$list = this.$styledSelect.next('.options');
        this.length = this.$select.children('option').length;

        for (var i = 0; i < this.length; i++) {
            $('<li />', {
                text: this.$select.children('option').eq(i).text(),
                rel: this.$select.children('option').eq(i).val()
            }).appendTo(this.$list);
        }

        this.$listItems = this.$list.children('li');

        this.handleSelect();
    },

    handleSelect: function() {
        var self = this;

        this.$styledSelect.on('click', function() {
            $(this).next('ul.options').toggle();
        })

        this.$listItems.on('click', function (e) {
            e.stopPropagation();
            self.$styledSelect.text($(this).text());
            self.$select.val($(this).attr('rel'));
            self.opts.callback($(this).attr('rel'));
            self.$list.hide();
        });

    }

};
