/*
		variables
	*/

var $imagesSlider = $('.gallery-slider .gallery-slider__images>div'),
  $thumbnailsSlider = $('.gallery-slider__thumbnails>div');

/*
sliders
*/

// images options
$imagesSlider.slick({
  speed:300,
  slidesToShow:1,
  slidesToScroll:1,
  cssEase:'linear',
  fade:true,
  draggable:false,
  asNavFor:'.gallery-slider__thumbnails>div',
  prevArrow:'.gallery-slider__images .prev-arrow',
  nextArrow:'.gallery-slider__images .next-arrow'
});

// thumbnails options
$thumbnailsSlider.slick({
  speed:300,
  slidesToShow:5,
  slidesToScroll:1,
  cssEase:'linear',
  centerMode:true,
  draggable:false,
  focusOnSelect:true,
  asNavFor:'.gallery-slider .gallery-slider__images>div',
  prevArrow:'.gallery-slider__thumbnails .prev-arrow',
  nextArrow:'.gallery-slider__thumbnails .next-arrow',
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

/*
captions
*/

var $caption = $('.gallery-slider .caption');

// get the initial caption text
var captionText = $('.gallery-slider__images .slick-current img').attr('alt');
updateCaption(captionText);

// hide the caption before the image is changed
$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $caption.addClass('hide');
});

// update the caption after the image is changed
$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
  captionText = $('.gallery-slider__images .slick-current img').attr('alt');
  updateCaption(captionText);
});

function updateCaption(text) {
  // if empty, add a no breaking space
  if (text === '') {
    text = '&nbsp;';
  }
  $caption.html(text);
  $caption.removeClass('hide');
}
