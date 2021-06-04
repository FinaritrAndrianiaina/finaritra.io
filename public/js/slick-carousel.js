$(document).ready(function () {
  $("#blog-list").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
