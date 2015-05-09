window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, '+ wScroll /18 +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (-wScroll/35) +'px'});

    var opacity1 = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
    var opacity2 = (wScroll - $('.large-window').offset().top + 400 - 640) / (wScroll / 5);

    $('.window-tint.periscope-1').css({'opacity': opacity1});
    $('.window-tint.periscope-2').css({'opacity': opacity2});

  }

});