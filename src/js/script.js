$(document).ready(function () {

    // we function
    function we() {
        // when the page is loaded the JS checks the viewport. According to that, it will output either mobile or desktop JS code. 
        if ($(window).width() <= 767) {
            $('.we').click(function () {
                $('.we--modal').toggleClass('hidden');
            })
            $('#we-close').click(function () {
                $('.we--modal').addClass('hidden');
            })
        } else {
            $('.we').bind('mouseover', function () {
                $('.we--modal').toggleClass('hidden');
            })

            $('.we').mouseout(function () {
                $('.we--modal').addClass('hidden');
            })
        }
    }

    // help function
    function help() {
        if ($(window).width() <= 767) {
            $('.help').click(function () {
                $('.help--modal').toggleClass('hidden');
            })
            $('#help-close').click(function () {
                $('.help--modal').addClass('hidden');
            })
        } else {
            $('.help').bind('mouseover', function () {
                $('.help--modal').toggleClass('hidden');
            })

            $('.help').mouseout(function () {
                $('.help--modal').addClass('hidden');
            })
        }
    }

    //you function
    function you() {
        if ($(window).width() <= 767) {
            $('.you').click(function () {
                $('.you--modal').toggleClass('hidden');
            })
            $('#you-close').click(function () {
                $('.you--modal').addClass('hidden');
            })
        } else {
            $('.you').on('mouseover', function () {
                $('.you--modal').removeClass('hidden');
            })

            $('.you').mouseout(function () {
                $('.you--modal').addClass('hidden');
            })
        }
    }

    // make the contact FAB work
    function contact() {
        $('.modal--fab').hide();

        $('.fab--inner').click(function () {
            $('.fab--inner').toggleClass('rotate-45');
            $('.fab').toggleClass('fab-big');
            $('.modal--fab').delay(200).fadeToggle();
            $('header > svg').toggleClass('white_logo');
        })
    }


    we();
    help();
    you();
    contact();

    // contact




});