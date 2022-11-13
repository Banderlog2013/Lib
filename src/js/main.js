import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'))
// console.log($('.more').eq(0).siblings());
$('button').eq(0).fadeIn(1800);
// console.log($('button').html('hello'));