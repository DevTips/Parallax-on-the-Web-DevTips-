window.addEventListener('scroll', function(){

  var wScroll = this.pageYOffset;

  document.querySelector('.logo').style.
    transform = 'translate(0px, '+ wScroll /2 +'%)'
  ;

  document.querySelector('.back-bird').style.
    transform = 'translate(0px, '+ wScroll /4 +'%)'
  ;

  document.querySelector('.fore-bird').style.
    transform = 'translate(0px, -'+ wScroll /40 +'%)'
  ;

});
