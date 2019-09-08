$(document).ready(function() {
  //togler button
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });
  //sticky navbar less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    console.log(position); //position of the screen
  });

  // smooth scrool
  $(".nav-item a").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 25
      },
      3000 // 3000 ms = 3s
    );
  });

  //ripple effect is having a conflict with my background image
  $(".info, .container").ripples({
    dropRadius: 25,
    perturbance: 0.6
  });

  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",

    gallery: {
      enabled: true
    }
    // other options
  });
});
