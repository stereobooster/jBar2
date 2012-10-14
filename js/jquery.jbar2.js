/* jBar v0.1.0 https://github.com/stereobooster/jBar2 */
;(function ($, undefined) {
    var defaults = {
            position: 'top', // top, bottom
            state: 'show',   // showed, hidden, show, hide
            delay: 1000
        },
        bar_markup = function(options){
            return '<div class="' + options.position + '"><div class="jBar"><div class="helloinner"><p class="text"></p></div>' 
            + '<span class="jTrigger downarrow"></span></div>'
            + '<span class="jRibbon jTrigger"></span></div>'},
        bar, text, ribbon,
        jBar = {
            init: function(html, options){
                options = $.extend({}, defaults, options);
                $('body').prepend(bar_markup(options));

                text = $('.jBar .text');
                ribbon = $('.jRibbon');
                bar = $('.jBar');

                $('.jTrigger').click(function(){
                    jBar.toggle();
                });

                jBar.html(html);

                if (options.state == 'showed') {
                    jBar.show();
                } else if (options.state == 'hidden') {
                    jBar.hide();
                } else if (options.state == 'show') {
                    jBar.hide();
                    setTimeout(jBar.toggle, options.delay);
                } else if (options.state == 'hide') {
                    jBar.show();
                    setTimeout(jBar.toggle, options.delay);
                } else {
                    throw "jBar2 unknown state";
                }
            },
            html: function(html){
                text.html(html);
            },
            show: function(){
                ribbon.addClass('up');
                bar.show();
            },
            hide: function(){
                ribbon.removeClass('up');
                bar.hide();
            },
            toggle: function(){
                ribbon.toggleClass('up');
                bar.slideToggle();
            }
        };

    $.jBar = jBar;
}(jQuery));
