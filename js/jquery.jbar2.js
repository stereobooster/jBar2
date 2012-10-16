/* jBar v0.2.0 https://github.com/stereobooster/jBar2 */
;(function ($, undefined) {
    var defaults = {
            position: 'top', // top, bottom
            state: 'opened', // opened, closed
            delay: 1000
        },
        bar_markup = function(options){
            return '<div class="' + options.position +
            '"><div class="jBar"><div class="helloinner"><p class="text"></p></div>' +
            '<span class="jTrigger downarrow"></span></div>' +
            '<span class="jRibbon jTrigger"></span></div>';},
        bar, text, ribbon, opened,
        set = function(name, val){
            if ($.cookie) {
                $.cookie('jbar' + name, val, {expires:365});
            }
        },
        get = function(name){
            return $.cookie && $.cookie('jbar' + name);
        },
        jBar = {
            init: function(html, options){
                options = $.extend({}, defaults, options);
                $('body').prepend(bar_markup(options));

                text = $('.jBar .text');
                ribbon = $('.jRibbon');
                bar = $('.jBar');

                $('.jTrigger').click(function(){
                    jBar.toggle();
                    if (options.date) {
                        set('state', opened ? 'opened' : 'closed');
                    }
                });

                jBar.html(html);

                var state = options.state,
                    delay = options.delay,
                    date = get('date');

                if (options.date) {
                    if (date && options.date >= date) {
                        state = get('state');
                        delay = (state === 'opened') && delay;
                    }
                    set('date', options.date);
                }

                if (state === 'opened') {
                    if (delay) {
                        jBar.hide();
                        setTimeout(jBar.toggle, options.delay);
                    } else {
                        jBar.show();
                    }
                } else {
                    if (delay) {
                        jBar.show();
                        setTimeout(jBar.toggle, options.delay);
                    } else {
                        jBar.hide();
                    }
                }
            },
            html: function(html){
                text.html(html);
            },
            show: function(){
                ribbon.addClass('up');
                bar.show();
                opened = true;
            },
            hide: function(){
                ribbon.removeClass('up');
                bar.hide();
                opened = false;
            },
            toggle: function(){
                ribbon.toggleClass('up');
                bar.slideToggle();
                return (opened = !opened);
            }
        };

    $.jBar = jBar;
}(jQuery));
