$("#landing-carousel").carousel({
    interval: 3000
});

// var fixmeTop = $('.side-menu').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= 300) {
        $('#side-menu').css({
            position: 'fixed',
            top: '43vh',
            left: '-13vw'
        });
    } else {
        $('#side-menu').css({
            position: "static"
        });
    }
});
