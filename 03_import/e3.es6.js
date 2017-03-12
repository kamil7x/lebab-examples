import $ from 'jquery';

$('.menu-element').each(function() {
    const list = $(this).attr('data-list').split(',');

    list.forEach(item => {
        $(this).append(`<div>${item}</div>`);
    });
});

