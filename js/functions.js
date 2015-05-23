window.addEventListener("load", function() {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});


$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css(       {'transform' : 'translate(0px, '+ wScroll /2 +'%)'});
  $('.back-bird').css(  {'transform' : 'translate(0px, '+ wScroll /4 +'%)'});
  $('.fore-bird').css(  {'transform' : 'translate(0px, '+ wScroll /14 +'%)'});
    
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
    $('.clothes-pics figure').each(function(i){
      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){
    $('.large-window').css({'background-position':'center '+ (-wScroll/35) +'px'});
    var opacity1 = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 6);
    var opacity2 = (wScroll - $('.large-window').offset().top + 400 - 640) / (wScroll / 6);
    $('.window-tint.periscope-1').css({'opacity': opacity1});
    $('.window-tint.periscope-2').css({'opacity': opacity2});
  }
    
  if(wScroll > $('.blog-posts').offset().top - $(window).height()){
    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 500);
    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.3) +'px)'});
    $('.post-2').css({'transform': 'translate(0px, '+ Math.abs(offset * 0.3) +'px)'});
    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.3) +'px)'});
  };
  if(wScroll > $('.blog-posts').offset().top - $(window).height()){
    var offset = Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 800);
    $('.post-4').css({'transform': 'translate(0px, '+ Math.abs(offset * 0.3) +'px)'});
  };
});