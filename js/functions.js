var parallaxScroll = function(){
  var wScroll = $(this).scrollTop();

  // don't animate elements out of view
  if(wScroll < $(".bird-box").height()){
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });
  }

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){
    // Fixed pixel value to two decimels
    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top).toFixed(2) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5).toFixed(2);

    $('.window-tint').css({'opacity': opacity});

  }
};

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    ||
  function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

$(window).scroll(function(){
  window.requestAnimFrame(parallaxScroll);
});
