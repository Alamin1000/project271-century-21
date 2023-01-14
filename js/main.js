(function ($) {
  "use strict";

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".props-slider-active").owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    nav: false,
    dots: false,
    items: 4,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        margin: 12,
        items: 2,
        autoWidth: true,
      },
      575: {
        margin: 14,
        items: 2,
      },
      767: {
        margin: 20,
        items: 2,
      },
      991: {
        margin: 24,
        items: 3,
      },
      1199: {
        margin: 24,
      },
      1899: {
        margin: 40,
      },
    },
  });

  $(".testimonial__slider-active").owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    nav: false,
    dots: true,
    dotsEach: 1,
    items: 2,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        margin: 20,
        items: 1,
      },
      767: {
        margin: 24,
        items: 2,
      },
      1199: {
        margin: 24,
      },
      1899: {
        margin: 40,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});
