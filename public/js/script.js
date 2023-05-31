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
