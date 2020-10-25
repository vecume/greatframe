//=require jquery/dist/jquery.js
//=require pagepiling.js/dist/jquery.pagepiling.js
//=require slick-carousel/slick/slick.js

$(document).ready(function () {
  location.href = "#";

  // alert(window.innerHeight);
  $(document.documentElement).css("--vh", window.innerHeight + "px");
  // alert(window.innerHeight);
  // if ($(window).width() > 968) {
  //   const windowWidth = $(window).width();
  //   console.log(`${(windowWidth / 1920) * 100}%;`);
  //   $("body").css(`zoom`, `${(windowWidth / 1900) * 100}%`);
  // }

  if ($(window).width() > 968) {
    $(document).on("mousemove", function (e) {
      const layer = $(".section-img");
      const speed1 = 2;
      const speed2 = -3;

      const x = (window.innerWidth - e.pageX * speed1) / 100;
      const y = (window.innerHeight - e.pageY * speed1) / 100;

      const x2 = (window.innerWidth - e.pageX * speed2) / 100;
      const y2 = (window.innerHeight - e.pageY * speed2) / 100;

      layer.css("transform", `scale(1.1) translate(${x}px, ${y}px)`);
      $(".bg-layer").css(
        "transform",
        `scale(1.08) translate(${x2}px, ${y2}px)`
      );
    });
  }

  const menuAnchors = [
    "main",
    "about",
    "heroes",
    // "team",
    "partners",
    // "achievements",
    // "gallery",
    "contacts",
    // "news",
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
    rows: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    appendDots: ".js-heroes-slider + .slider-scroll",
    variableWidth: true,
    nextArrow: ".js-slide-next",
    prevArrow: ".js-slide-prev",
  });

  // $(".js-achieve-slider").slick({
  //   rows: 0,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   dots: true,
  //   appendDots: "#achievements .slider-scroll",
  //   nextArrow: ".js-fest-next",
  //   prevArrow: ".js-fest-prev",
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 451,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //   ],
  // });

  // $(".js-gallery-slider").slick({
  //   rows: 0,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   nextArrow: ".js-gal-next",
  //   prevArrow: ".js-gal-prev",
  //   centerPadding: "0",
  //   variableWidth: true,
  //   dots: true,
  //   appendDots: "#gallery .slider-scroll",
  // });

  // $(".js-news-slider").slick({
  //   rows: 0,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   nextArrow: ".js-news-next",
  //   prevArrow: ".js-news-prev",
  //   dots: true,
  //   appendDots: "#news .slider-scroll",
  //   centerPadding: "0",
  //   variableWidth: true,
  //   responsive: [
  //     {
  //       breakpoint: 451,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  $(".js-heroes-slider").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    // const topPosition = $(
    //   ".heroes__item .section-content .bottom-content"
    // ).offset().top;

    // $("#heroes .slide-controllers").css("top", topPosition + 200);
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

  $(".language-box").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".toggle-contacts-btn").on("click", function () {
    const text = $(this).attr("data-text");
    const oldText = $(this).text();
    const target = $(this).attr("data-target");
    const newTarget = $($(target).siblings()[0]).attr("class");
    $(this).attr("data-target", `.${newTarget}`).attr("data-text", oldText);
    $(this).text(text);
    $(target).show();
    $(`.${newTarget}`).hide();
  });

  function updateSiteBar(index) {
    console.log(index);
    if (index % 2) {
      $(".main").addClass("even-section");
    } else {
      $(".main").removeClass("even-section");
    }
  }
});

$(window).on("load", function () {
  $(".preloader").fadeOut();
});
