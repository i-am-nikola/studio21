
$(document).ready(function () {
  $('.collaborations-slider').owlCarousel({
    stagePadding: 0,
    items: 1,
    loop: true,
    margin: 0,
    singleItem: true,
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 8000,
    merge: true,
    smartSpeed: 1500,
    navText : ["<i class='far fa-arrow-circle-left'></i>","<i class='far fa-arrow-circle-right'></i>"]
  })
})