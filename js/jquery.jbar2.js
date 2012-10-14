/* jBar v0.0.1 https://github.com/stereobooster/jBar2 */
;(function ( $, undefined ) {
    var defaults = {
            position: 'top', // 'bottom'
            state: 'opened', // 'closed', 'open', 'hide'
            delay: 1000
        },
        bar_markup = '<div class="jBar"><div class="helloinner"><p class="text"></p></div>' 
            + '<span class="jTrigger downarrow"></span></div>'
            + '<span class="jRibbon jTrigger up"></span>',
        opened = true;

    $.jBar = {
        init: function(){
            $('body').prepend(bar_markup);
            $('.jTrigger').click(function(){
                $.jBar.toggle();
            });
        },
        show: function(html){
            html && $('.jBar .text').html(html);
            !opened && $.jBar.toggle();
        },
        hide: function(){
            opened && $.jBar.toggle();
        },
        toggle: function(){
            $('.jRibbon').toggleClass('up');
            $('.jBar').slideToggle();
        }
    };

    $(function(){
        $.jBar.init();
    });
}(jQuery));
