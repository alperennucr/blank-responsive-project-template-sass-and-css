/* Go Top Button Start */
var goTopButton1 = $('#goTpButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        goTopButton1.addClass('show-active');
    } else {
        goTopButton1.removeClass('show-active');
    }
});

goTopButton1.bind('click', function () {
    $('html, body').scrollTop(0);
});
/* Go Top Button End */