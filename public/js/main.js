(function($) {
  "use strict";

  // bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  $("nav .dropdown").hover(
    function() {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function() {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function() {
    console.log("show");
  });

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  $(".home-slider-loop-false").owlCarousel({
    loop: false,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });

  $(".centernonloop").owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin: 10,
    dots: true,
    responsive: {
      600: {
        items: 3
      }
    }
  });

  var contentWayPoint = function() {
    var i = 0;
    $(".element-animate").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("element-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .element-animate.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(function() {
                var effect = el.data("animate-effect");
                if (effect === "fadeIn") {
                  el.addClass("fadeIn element-animated");
                } else if (effect === "fadeInLeft") {
                  el.addClass("fadeInLeft element-animated");
                } else if (effect === "fadeInRight") {
                  el.addClass("fadeInRight element-animated");
                } else {
                  el.addClass("fadeInUp element-animated");
                }
                el.removeClass("item-animate");
              }, k * 100);
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // contact
  var contactForm = $("#contact");
  var sendEmail = $("#send-email");
  var name = $("#name");
  var phone = $("#phone");
  var email = $("#email");
  var message = $("#message");

  contactForm.submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: "/contact",
      type: "POST",
      dataType: "json",
      data: contactForm.serialize(),
      success: function(data) {
        console.log("success: ", data);
        name.removeClass("is-invalid");
        phone.removeClass("is-invalid");
        email.removeClass("is-invalid");
        message.removeClass("is-invalid");

        sendEmail.val("Message Sent!");
        sendEmail.attr("disabled", true);

        setTimeout(function() {
          sendEmail.val("Send Message");
          sendEmail.attr("disabled", false);
        }, 3000);
      },
      error: function(err) {
        console.log("error: ", err.responseJSON);
        if (err.responseJSON.name) {
          name.addClass("is-invalid");
          name.next().text(err.responseJSON.name);
        } else {
          name.removeClass("is-invalid");
          name.next().text();
        }
        if (err.responseJSON.phone) {
          phone.addClass("is-invalid");
          phone.next().text(err.responseJSON.phone);
        } else {
          phone.removeClass("is-invalid");
          phone.next().text();
        }
        if (err.responseJSON.email) {
          email.addClass("is-invalid");
          email.next().text(err.responseJSON.email);
        } else {
          email.removeClass("is-invalid");
          email.next().text();
        }
        if (err.responseJSON.message) {
          message.addClass("is-invalid");
          message.next().text(err.responseJSON.message);
        } else {
          message.removeClass("is-invalid");
          message.next().text();
        }
      }
    });
  });
})(jQuery);
