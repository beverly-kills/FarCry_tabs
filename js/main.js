'use strict';

(function($) {
    $(document).ready(function() {
        var wrapper = $('.game'),
            tab = $('.menu__tab'),
            content = $('.game__window');

        content.not(":first-of-type").hide();
    
        tab.each(function(i){
            $(this).attr('data-tab', 'tab'+i)
        });
        content.each(function(i){
            $(this).attr('data-tab', 'tab'+i)
        })

        tab.on('click', function(){
            var dataTab = $(this).data('tab'),
                field = $(this).closest(wrapper);

            field.find(tab).removeClass('menu__tab--active');
            $(this).addClass('menu__tab--active');

            field.find(content).hide();
            field.find(content).filter('[data-tab='+dataTab+']').show();
        });

    });
})(jQuery);