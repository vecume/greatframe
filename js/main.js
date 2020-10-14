$(document).ready(function () {
  const menuAnchors = [
    "main",
    "about",
    "heros",
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

  function updateSiteBar(index) {
    if (index % 2) {
      $(".main").addClass("even-section");
    } else {
      $(".main").removeClass("even-section");
    }
  }
});
