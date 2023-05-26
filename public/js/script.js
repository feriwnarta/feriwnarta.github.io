$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
        duration: 3000,
        progress: function (animation, progress) {
          $(this).css("border", "1px solid white");
        },
        complete: function () {
          animateBars(index + 1); // Rekursif untuk memulai animasi pada elemen berikutnya
        },
      }
    );
  }
}

$(window).on("load", function () {
  $(".menu").each(function () {
    let btnMenuWidth = $(this).find(".btn-menu").width();
    $(this)
      .find(".underline-menu.active")
      .width(btnMenuWidth + 40);

    // let btnMenuWidth = $(this).width();
    //   $(this).find('.underline-menu').width(btnMenuWidth);
  });

  $(".menu-ttg-saya").click(function () {
    let parent = this;
    $.ajax({
      type: "GET",
      url: "tentang",
      success: function (response) {
        $(".underline-menu").each(function () {
          $(this).removeClass("active");
          $(this).width(0);
        });

        $(".wrapper").html(response);

        let btnMenuWidth = $(parent).find(".btn-menu").width();

        $(parent)
          .find(".underline-menu")
          .addClass("active")
          .width(btnMenuWidth + 40);
      },
    });
  });

  $(".menu-kontak").click(function () {
    let parent = this;
    $.ajax({
      type: "GET",
      url: "kontak",
      success: function (response) {
        $(".underline-menu").each(function () {
          $(this).removeClass("active");
          $(this).width(0);
        });

        $(".wrapper").html(response);

        let btnMenuWidth = $(parent).find(".btn-menu").width();

        $(parent)
          .find(".underline-menu")
          .addClass("active")
          .width(btnMenuWidth + 40);
      },
    });
  });

  $(".menu-proyek").click(function () {
    let parent = this;
    $.ajax({
      type: "GET",
      url: "proyek",
      success: function (response) {
        $(".underline-menu").each(function () {
          $(this).removeClass("active");
          $(this).width(0);
        });

        $(".wrapper").html(response);

        let btnMenuWidth = $(parent).find(".btn-menu").width();

        $(parent)
          .find(".underline-menu")
          .addClass("active")
          .width(btnMenuWidth + 40);
      },
    });
  });
});
