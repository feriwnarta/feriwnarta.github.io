$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
  });

  $(".slick-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var slideCount = slick.slideCount;

      // Jika slide berikutnya adalah slide terakhir, hentikan autoplay
      if (nextSlide === slideCount - 1) {
        $(".slick-carousel").slick("slickPause");
      }
    }
  );

  let lengthFeed = $(".item").length;
  let feedBar = "";

  for (let i = 1; i <= lengthFeed; i++) {
    feedBar += `<div class="bar feed${i}"></div>`;
  }

  $(".duration-feed").html(feedBar);

  animateBars(0);
});

function animateBars(index) {
  var bars = $(".duration-feed .bar");
  var lengthFeed = bars.length;

  if (index < lengthFeed) {
    var currentBar = $(bars[index]);
    currentBar.not(":last-child").css("margin-right", "3px");

    currentBar.animate(
      {
        width: `${100 / lengthFeed}%`,
      },
      {
        duration: 3800,
        progress: function (animation, progress) {
          $(this).css("border", "2px solid white");
        },
        complete: function () {
          animateBars(index + 1); // Rekursif untuk memulai animasi pada elemen berikutnya
        },
      }
    );
  }
}
