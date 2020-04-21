'use strict';
// =====================================Header========================================================
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

// ======================================================news====================================================
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');
function cLog(content) {
    console.log(content)
}
if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {
        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;
                $('.news__item').removeClass('active');                
            });
            element.addEventListener('mouseleave', function () {
                $('.news__item').removeClass('active');
            });
        });
    });
}
var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');
            var sliderItem = activeItem.querySelector('.news__item');
            $('.swiper-slide-active .news__item').addClass('active');
            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;           
        }
    }
});
swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});
swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});
swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');
    var sliderItem = activeItem.querySelector('.news__item');
    $('.swiper-slide-active .news__item').addClass('active');
    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;
});

