//Get the height of parallax container

var pContainerHeight = $('.bird-box').height();

$(window).scroll(function () {

    var wScroll = $(window).scrollTop();

    // only apply parallax translations when the pContainerHeight is visible

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