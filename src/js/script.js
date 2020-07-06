$(document).ready(function () {

    $('.we').bind('click mouseover', function () {
        $('.we--modal').toggleClass('hidden');
    })

    $('.we').mouseout(function () {
        $('.we--modal').addClass('hidden');
    })

    $('.help').bind('click mouseover', function () {
        $('.help--modal').toggleClass('hidden');
    })

    $('.help').mouseout(function () {
        $('.help--modal').addClass('hidden');
    })

    $('.you').on('click mouseover', function () {
        $('.you--modal').removeClass('hidden');
    })

    $('.you').mouseout(function () {
        $('.you--modal').addClass('hidden');
    })

});