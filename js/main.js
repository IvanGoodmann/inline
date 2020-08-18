$(document).ready(function(){

  $(window).on("load resize", function () {
    var slider = $(".gallery");
    width_el = $(window).width();
    if (width_el <= 767) {
      slider.slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      });
    } else {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
    }
  });

  $('[data-fancybox="gallery"]').fancybox({
    keyboard: true,
    arrow: true,
    backFocus: true
  });
});