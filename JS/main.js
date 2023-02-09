$(".dropdown-toggle").on("click", function () {
  if ($(".dropdown-menu").hasClass("show")) {
    $(".dropdown-menu").removeClass("show");
  } else {
    $(".dropdown-menu").addClass("show");
  }
});
