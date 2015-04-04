//Get the height of parallax container

var pContainerHeight = $('.bird-box').height();

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // only apply parallax translations while the pContainerHeight is visible in the viewport

    if (wScroll <= pContainerHeight) {

        $('.logo').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });

        $('.back-bird').css({
            'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });

        $('.fore-bird').css({
            'transform': 'translate(0px, -' + wScroll / 40 + '%)'
        });

    }

});