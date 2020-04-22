'use strict';
// =====================================Header========================================================
$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $('.default-color').css('background-color', '#20202083');
  }

  else if (scroll === 0) {
    $('.default-color').css('background-color', '#202020');
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-110px';
  }
  prevScrollpos = currentScrollPos;
};


// ================(read more button)==================\\

$('#readmore').on('click', () => {
  $('#read').toggleClass();
  if ($('#readmore').text() === 'Show Less'){
    $('#readmore').text('Show More');
  }else{
    $('#readmore').text('Show Less');
  }

});




// ============================

$(window).scroll(function () {
  var scroll = $(window).scrollTop();


  if (scroll > 200) {
    $('#desktop-nav').css('height', '2em');
    $('#desktop-nav').css('background', '#202020ab');
    $('#desktop-nav').css('box-shadow', '6px 6px 6px #1d1c1c91');

  }

  else if (scroll === 0) {
    $('#desktop-nav').css('height', '7.125em');
    $('#desktop-nav').css('background', '#02081E');
    $('#desktop-nav').css('box-shadow', 'none');
  }

});
prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('desktop-nav').style.top = '0';
    prevScrollpos = currentScrollPos;
  }};

