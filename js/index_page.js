$(function () {

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 50) {
            $('.composite_menu_div').css({
                "top": "0px",
                "opacity": "0.9"
            });
        }
        else {
            $('.composite_menu_div').css({
                "top": "50px",
                "opacity": "0.7"
            });
        }
    };

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({scrollTop: 0}, 800);

    });

});
