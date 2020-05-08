$(document).ready(function() {
  $('.carousel').carousel();
  $('.products-slider-wapper').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navText: [
      '<i class="fas fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
  ],
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      767: {
        items: 1,
        nav: false
      },
      800: {
        items: 2,
        nav: false
      },
      990: {
        items: 2,
        nav: false
      },
      1024: {
        items: 3,
        nav: true,
        loop: false,
        margin: 20
      },
      1199: {
        items: 4,
        nav: true,
        loop: false,
        margin: 20
      }
    }
    
  })
  $('.technology-slider-wapper').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })
  $(document).ready(function(){
    $("#remenu-icon").click(function(){
      $("#remenu-list").toggle(100);
    });
  });
  })