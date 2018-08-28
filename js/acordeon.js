$(document).ready(function () {
    initMenu();

    $('.bxslider_1').bxSlider({
        slideWidth: 400,
        mode: 'horizontal',
        pager: false,
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 50,
        auto: true,
        pause: 1500,
        autoHover: true,
        responsive: true
    });

    $(".test-popup-link").magnificPopup({
        type: 'image'
    });
    $(".test-popup-link1").magnificPopup({
        type: 'image'
    });
    $(".test-popup-link2").magnificPopup({
        type: 'image'
    });
});

function initMenu() {

    $('#menu ul').hide();

    $('#menu li a').click(
        function () {
            var iselemnt = $(this).next();
            if ((iselemnt.is('ul')) && (iselemnt.is(':visible'))) {
                return false;
            }

            if ((iselemnt.is('ul')) && (!iselemnt.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                iselemnt.slideDown('normal');
                return false;
            }
        }
    );

}