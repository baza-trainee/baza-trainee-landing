export function sliderMainStart(): void {
  $('.slider-section__carousel').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: '.slider-section__slide',
    prevArrow: $('.slider-section__btn-prev'),
    nextArrow: $('.slider-section__btn-next'),
    appendDots: $('.slider-section__dots'),
  });

  changeBtnsWidth();

  $(window).on('resize', changeBtnsWidth);
}

function changeBtnsWidth() {
  const btnsBlock = $('.slider-section__buttons');

  if (window.innerWidth < 1200) {
    btnsBlock.css('width', `${window.innerWidth}px`);
  } else {
    btnsBlock.css('width', '1200px');
  }
}

export function sliderReviewsStart(): void {
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  });
}
