$(document).ready(function () {
  const menuAnchors = [
    "main",
    "about",
    "heroes",
    "team",
    "partners",
    "achivement",
    "gallery",
    "contacts",
  ];
  const fullpage = $("#fullpage").pagepiling({
    navigation: false,
    anchors: menuAnchors,
    menu: ".menu-wrapper",
    onLeave: function (index, nextIndex, direction) {
      updateSiteBar(index);
    },
  });

  $(".js-heroes-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    variableWidth: true,
    nextArrow: ".js-slide-next",
    prevArrow: ".js-slide-prev",
  });

  $(".js-heroes-slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    updateSiteBar(nextSlide);
  });

  $(".js-close-menu-btn").on("click", function () {
    $("#main-menu").removeClass("active");
  });

  $(".js-open-menu-btn").on("click", function () {
    $("#main-menu").addClass("active");
  });

  $(".menu-wrapper li a").on("click", function () {
    $("#main-menu").removeClass("active");
  });

  function updateSiteBar(index) {
    if (index % 2) {
      $(".main").addClass("even-section");
    } else {
      $(".main").removeClass("even-section");
    }
  }
});
