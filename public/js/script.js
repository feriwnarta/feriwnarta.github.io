$(document).ready(function () {
  $(".slick-carousel").slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: false,
  });

  let lengthFeed = $(".item").length;
  let feedBar = "";

  for (let i = 1; i <= lengthFeed; i++) {
    feedBar += `<div class="bar feed${i}"></div>`;
  }

  $(".duration-feed").html(feedBar);

  $('.duration-feed div').each(function() {
      $(this).width(50);
  });

  

});

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
