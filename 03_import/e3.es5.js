var $ = require('jquery');

$('.menu-element').each(function() {
    var list = $(this).attr('data-list').split(',');

    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        $(this).append('<div>' + item + '</div>');
    }
});

