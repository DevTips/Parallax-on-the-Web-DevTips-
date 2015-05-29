var postsTop;
var winHeight;

$(document).ready(function(){
	postsTop = $('.blog-posts').offset().top;
	winHeight = $(window).height();
});

function posts(x){
	var goal = postsTop - winHeight / 8;
	var offset;

	if(x < goal){
		offset = Math.min(0.005*Math.pow(x - goal, 2), winHeight);
	}else{
		offset = 0;
	}

	$('.post-1').css({'transform': 'translate('+ -offset +'px, '+ offset * 0.2 +'px)'});

	$('.post-3').css({'transform': 'translate('+ offset +'px, '+ offset * 0.2 +'px)'});

}

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
	'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
	'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('.fore-bird').css({
	'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

	$('.clothes-pics figure').each(function(i){

	  setTimeout(function(){
		$('.clothes-pics figure').eq(i).addClass('is-showing');
	  }, 150 * (i+1));
	});

  }

  if(wScroll > $('.large-window').offset().top - $(window).height()){

	$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

	var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

	$('.window-tint').css({'opacity': opacity});

  }

  posts(wScroll);

});
