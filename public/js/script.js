$(window).on("load", function () {
  $(".menu").each(function () {
    let btnMenuWidth = $(this).find(".btn-menu").width();
    $(this).find('.underline-menu.active').width(btnMenuWidth + 40);

    // let btnMenuWidth = $(this).width();
    //   $(this).find('.underline-menu').width(btnMenuWidth);
  });
});
