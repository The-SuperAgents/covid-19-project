'use strict';

$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 300) {
    $(".default-color").css("background-color", "#20202083");
  }

  else if (scroll === 0) {
    $(".default-color").css("background-color", "#202020");
  }
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
};
