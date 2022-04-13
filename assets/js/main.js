(function ($) {
  "use strict";
  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).on('load', function () {
    jQuery('.preloader').fadeOut('slow');
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 80) {
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 300,
      animation: 'fade'
    });
    /*-------------------------------------------
    advertisment-banner-slide active
    --------------------------------------------- */
    $('.advertisment-banner-slide').owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
    /*-------------------------------------------
    products-slide active
    --------------------------------------------- */
    $('.products-slide').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      nav: true,
      navText: ['<i class="nav-btn fas fa-angle-left"></i>','<i class="nav-btn fas fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        414: {
          items: 2
        },
        768: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
    /*-------------------------------------------
    Product Quantity JS
    --------------------------------------------- */
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });
    /*-------------------------------------------
    js counterUp
    --------------------------------------------- */
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });

})(jQuery);