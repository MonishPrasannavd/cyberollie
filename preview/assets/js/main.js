(function ($) {
  "use strict";
  $(".country-area ul li:first-child").addClass("active");
  $(".country-area").on("mouseenter", function () {
    $(".country-area ul li:not(:first-child)").removeClass("active");
  });
  $(".country-area").on("mouseleave", function () {
    $(".country-area ul li:not(:first-child)").removeClass("active");
    $(".country-area ul li:first-child").addClass("active");
  });
  $(".country-area ul li").on({
    mouseenter: function () {
      $(this).addClass("active").siblings().removeClass("active");
    },
  });
  $(".banner-hover").on("mouseenter", function () {
    var value = $(this).attr("data-src");
    document.getElementById("home3-banner-bg").style.background =
      "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%) ,url('" +
      value +
      "')";
  });
  // $(".services-list ul li").on({
  //   mouseenter: function () {
  //     $(".services-list ul li").removeClass("active");
  //     $(this).addClass("active");
  //     var index = $(this).index();
  //     $(".services-img ul li").removeClass("active");
  //     $(".services-img ul li:eq(" + index + ")").addClass("active");
  //   },
  // });
  $(".search-btn, .lang-btn").on("click", function (e) {
    let parent = $(this).parent();
    parent.find(".search-input, .lang-card").toggleClass("active");
    e.stopPropagation();
  });
  $(".moreless-button").addClass("bi bi-chevron-down");
  $(document).on("click", ".moreless-button", function () {
    $(".moretext").slideToggle();
    if ($(".moreless-button").text() == "Read More") {
      $(this).text("Read Less");
      $(this).addClass("bi bi-chevron-up");
      $(this).removeClass("bi bi-chevron-down");
    } else {
      $(this).text("Read More");
      $(this).addClass("bi bi-chevron-down");
      $(this).removeClass("bi bi-chevron-up");
    }
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search-input, .search-btn, .lang-btn").length) {
      $(".search-input, .lang-card").removeClass("active");
    }
  });
  $(".serch-close").on("click", function (e) {
    $(".search-input").removeClass("active");
  });
  jQuery(window).on("load", function () {
    $(".preloader").delay(1600).fadeOut("slow");
  });
  $(".sidebar-btn2").on("click", function () {
    $(".header-sidebar").addClass("slide");
  });
  $(".close-btn").on("click", function () {
    $(".header-sidebar").removeClass("slide");
  });
  jQuery(".dropdown-icon").on("click", function () {
    jQuery(this).toggleClass("active").next("ul").slideToggle();
    jQuery(this).parent().siblings().children("ul").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  // $(".counter").counterUp({ delay: 10, time: 1000 });
  // $(".sidebar-button").on("click", function () {
  //   $(this).toggleClass("active");
  // });
  var skillPers = document.querySelectorAll(".subscription-bar-per");
  skillPers.forEach(function (skillPer) {
    var per = parseFloat(skillPer.getAttribute("data-per"));
    skillPer.style.width = per + "%";
    var animatedValue = 0;
    var startTime = null;
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var stepPercentage = progress / 1000;
      if (stepPercentage < 1) {
        animatedValue = per * stepPercentage;
        skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        requestAnimationFrame(animate);
      } else {
        animatedValue = per;
        skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
      }
    }
    requestAnimationFrame(animate);
  });
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("ul li a");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".position_top").addClass("sticky");
    } else {
      $(".position_top").removeClass("sticky");
    }
  });
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  $('[data-fancybox="gallery2"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  var swiper = new Swiper(".cover-carasol", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".next-1", prevEl: ".prev-1" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".banner3-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    navigation: { nextEl: ".next-1", prevEl: ".prev-1" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Disable autoplay on user interaction
    },
    loop: true
  });
  var swiper = new Swiper(".banner2-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
  });
  var swiper = new Swiper(".home5-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    navigation: { nextEl: ".next-10", prevEl: ".prev-10" },
    autoplay: { delay: 3000, disableOnInteraction: true }
  });
  var swiper = new Swiper(".banner4-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
  });
  var swiper = new Swiper(".event-speakers-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".event-fractional-pagination", type: "fraction" },
    navigation: { nextEl: ".next-4", prevEl: ".prev-4" },
  });
  var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".franctional-pagi1", type: "fraction" },
    navigation: { nextEl: ".next-2", prevEl: ".prev-2" },
  });
  var swiper = new Swiper(".testimonial-slider2", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".franctional-pagi2", type: "fraction" },
    navigation: { nextEl: ".next-3", prevEl: ".prev-3" },
  });
  var swiper = new Swiper(".testimonial-slider3", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".pagination-3", clickable: true },
    navigation: { nextEl: ".next-3", prevEl: ".prev-3" },
  });
  var swiper = new Swiper(".testimonial-slider5", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".franctional-pagi5", type: "fraction" },
    navigation: { nextEl: ".next-3", prevEl: ".prev-3" },
  });
  var swiper = new Swiper(".event-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".next-7", prevEl: ".prev-7" },
  });
  // $(".casestudy-slider").slick({
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "0",
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 2000,
  //   variableWidth: true,
  //   responsive: [
  //     { breakpoint: 1200, settings: { arrows: false, slidesToShow: 5 } },
  //     { breakpoint: 991, settings: { arrows: false, variableWidth: false } },
  //     {
  //       breakpoint: 768,
  //       settings: { arrows: false, variableWidth: false, slidesToShow: 1 },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: { arrows: false, variableWidth: false, slidesToShow: 1 },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: { arrows: false, variableWidth: false, slidesToShow: 1 },
  //     },
  //     {
  //       breakpoint: 350,
  //       settings: { arrows: false, variableWidth: false, slidesToShow: 1 },
  //     },
  //   ],
  // });
  var swiper = new Swiper(".project-slider", {
    slidesPerView: "auto",
    speed: 3000,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".project-slider1", {
    slidesPerView: "auto",
    speed: 3000,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".cover-slider-with-progress", {
    speed: 1500,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".next-4", prevEl: ".prev-4" },
    pagination: { el: ".progress-pagination2", type: "progressbar" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".portfolio-slider", {
    speed: 1500,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".next-4", prevEl: ".prev-4" },
    pagination: { el: ".progress-pagination", type: "progressbar" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".bolg-slider", {
    speed: 1500,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".next-5", prevEl: ".prev-5" },
    pagination: { el: ".progress-pagination", type: "progressbar" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".event-img-slider", {
    speed: 1500,
    spaceBetween: 30,
    autoplay: { delay: 2500, disableOnInteraction: false },
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: { el: ".event-pagination", clickable: "true" },
  });
  var swiper = new Swiper(".gallery-slider", {
    speed: 5000,
    spaceBetween: 30,
    autoplay: { delay: 100, disableOnInteraction: false },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });
  if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
    if ($(window).width() > 1024) {
      gsap.config({ nullTargetWarn: false, trialWarn: false });
      $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
      if ($("a.magnetic-item").length) {
        $("a.magnetic-item").addClass("not-hide-cursor");
      }
      var $mouse = { x: 0, y: 0 };
      var $pos = { x: 0, y: 0 };
      var $ratio = 0.15;
      var $active = false;
      var $ball = $("#ball");
      var $ballWidth = 36;
      var $ballHeight = 36;
      var $ballOpacity = 0.5;
      var $ballBorderWidth = 2;
      gsap.set($ball, {
        xPercent: -50,
        yPercent: -50,
        width: $ballWidth,
        height: $ballHeight,
        borderWidth: $ballBorderWidth,
        opacity: $ballOpacity,
      });
      document.addEventListener("mousemove", mouseMove);
      function mouseMove(e) {
        $mouse.x = e.clientX;
        $mouse.y = e.clientY;
      }
      gsap.ticker.add(updatePosition);
      function updatePosition() {
        if (!$active) {
          $pos.x += ($mouse.x - $pos.x) * $ratio;
          $pos.y += ($mouse.y - $pos.y) * $ratio;
          gsap.set($ball, { x: $pos.x, y: $pos.y });
        }
      }
      $(".magnetic-wrap").mousemove(function (e) {
        parallaxCursor(e, this, 2);
        callParallax(e, this);
      });
      function callParallax(e, parent) {
        parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25);
      }
      function parallaxIt(e, parent, target, movement) {
        var boundingRect = parent.getBoundingClientRect();
        var relX = e.clientX - boundingRect.left;
        var relY = e.clientY - boundingRect.top;
        gsap.to(target, {
          duration: 0.3,
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
          y:
            ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
          ease: Power2.easeOut,
        });
      }
      function parallaxCursor(e, parent, movement) {
        var rect = parent.getBoundingClientRect();
        var relX = e.clientX - rect.left;
        var relY = e.clientY - rect.top;
        $pos.x =
          rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        $pos.y =
          rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
      }
      $(".magnetic-wrap")
        .on("mouseenter mouseover", function (e) {
          $ball.addClass("magnetic-active");
          gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
          $active = true;
        })
        .on("mouseleave", function (e) {
          $ball.removeClass("magnetic-active");
          gsap.to($ball, {
            duration: 0.3,
            width: $ballWidth,
            height: $ballHeight,
            opacity: $ballOpacity,
          });
          gsap.to(this.querySelector(".magnetic-item"), {
            duration: 0.3,
            x: 0,
            y: 0,
            clearProps: "all",
          });
          $active = false;
        });
      $(
        ".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a"
      )
        .not(".magnetic-item")
        .on("mouseenter", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: 0,
            opacity: 0.2,
            backgroundColor: "#CCC",
            width: "50px",
            height: "50px",
          });
        })
        .on("mouseleave", function () {
          gsap.to($ball, {
            duration: 0.3,
            borderWidth: $ballBorderWidth,
            opacity: $ballOpacity,
            backgroundColor: "transparent",
            width: $ballWidth,
            height: $ballHeight,
            clearProps: "backgroundColor",
          });
        });
      $(".tt-ol-submenu-caret-wrap .magnetic-wrap")
        .on("mouseenter", function () {
          gsap.to($ball, { duration: 0.3, scale: 0.6, borderWidth: 3 });
        })
        .on("mouseleave", function () {
          gsap.to($ball, {
            duration: 0.3,
            scale: 1,
            borderWidth: $ballBorderWidth,
          });
        });
      $("[data-cursor]").each(function () {
        $(this)
          .on("mouseenter", function () {
            $ball
              .addClass("ball-view")
              .append('<div class="ball-view-inner"></div>');
            $(".ball-view-inner").append($(this).attr("data-cursor"));
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              width: 95,
              height: 95,
              opacity: 1,
              borderWidth: 0,
            });
            gsap.to(".ball-view-inner", {
              duration: 0.3,
              scale: 1,
              autoAlpha: 1,
            });
          })
          .on("mouseleave", function () {
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth,
              height: $ballHeight,
              opacity: $ballOpacity,
              borderWidth: $ballBorderWidth,
            });
            $ball.removeClass("ball-view").find(".ball-view-inner").remove();
          });
        $(this).addClass("not-hide-cursor");
      });
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag")) {
            $(this)
              .on("mouseenter", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.3,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });
            $(this).addClass("not-hide-cursor");
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              })
              .on("mouseleave", function () {
                $ball.append('<div class="ball-drag"></div>');
                gsap.to($ball, {
                  duration: 0.3,
                  width: 60,
                  height: 60,
                  opacity: 1,
                });
              });
          }
        }
      });
      $(".swiper").each(function () {
        if ($(this).parent().attr("data-simulate-touch") === "true") {
          if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
            $(this)
              .on("mousedown pointerdown", function (e) {
                if (e.which === 1) {
                  gsap.to($ball, {
                    duration: 0.2,
                    width: 60,
                    height: 60,
                    opacity: 1,
                  });
                  $ball.append('<div class="ball-drag"></div>');
                }
              })
              .on("mouseup pointerup", function () {
                $ball.find(".ball-drag").remove();
                if ($(this).find("[data-cursor]:hover").length) {
                } else {
                  gsap.to($ball, {
                    duration: 0.2,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity,
                  });
                }
              })
              .on("mouseleave", function () {
                $ball.find(".ball-drag").remove();
                gsap.to($ball, {
                  duration: 0.2,
                  width: $ballWidth,
                  height: $ballHeight,
                  opacity: $ballOpacity,
                });
              });
            $(this)
              .find("[data-cursor]")
              .on("mousedown pointerdown", function () {
                return false;
              });
            $(this)
              .find("[data-cursor]")
              .on("mouseenter mouseover", function () {
                $ball.find(".ball-drag").remove();
                return false;
              });
          }
        }
      });
      $(".cursor-close").each(function () {
        $(this).addClass("ball-close-enabled");
        $(this)
          .on("mouseenter", function () {
            $ball.addClass("ball-close-enabled");
            $ball.append('<div class="ball-close">Close</div>');
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -75,
              width: 80,
              height: 80,
              opacity: 1,
            });
            gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
          })
          .on("mouseleave click", function () {
            $ball.removeClass("ball-close-enabled");
            gsap.to($ball, {
              duration: 0.3,
              yPercent: -50,
              width: $ballWidth,
              height: $ballHeight,
              opacity: $ballOpacity,
            });
            $ball.find(".ball-close").remove();
          });
        $(
          ".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor"
        )
          .not(".not-hide-cursor")
          .on("mouseenter", function () {
            $ball.removeClass("ball-close-enabled");
          })
          .on("mouseleave", function () {
            $ball.addClass("ball-close-enabled");
          });
      });
      $(".blog-interactive-item").each(function () {
        var $biItem = $(this);
        if ($biItem.find(".bi-item-image").length) {
          $biItem
            .find(".bi-item-title a")
            .on("mouseenter mouseover", function () {
              $("#magic-cursor").addClass("blog-interactive-hover-on");
              $biItem.find(".bi-item-image").appendTo($ball);
              gsap.to($ball, {
                duration: 0.3,
                width: "20vw",
                height: "20vw",
                opacity: 1,
              });
            })
            .on("mouseleave", function () {
              $("#magic-cursor").removeClass("blog-interactive-hover-on");
              $ball.find(".bi-item-image").appendTo($biItem);
              gsap.to($ball, {
                duration: 0.3,
                width: $ballWidth,
                height: $ballHeight,
                opacity: $ballOpacity,
              });
            });
          $biItem.find(".bi-item-title a").addClass("not-hide-cursor");
          $biItem.addClass("bi-item-image-on");
        }
      });
      $('a[href^="#"]')
        .not('[href$="#"]')
        .not('[href$="#0"]')
        .on("click", function () {
          var target = this.hash;
          if ($("#tt-header").hasClass("tt-header-fixed")) {
            var $offset = $("#tt-header").height();
          } else {
            var $offset = 0;
          }
          if ($(this).data("offset") != undefined)
            $offset = $(this).data("offset");
          if (!isMobile) {
            if ($("body").hasClass("tt-smooth-scroll")) {
              var topY =
                $(target).offset().top -
                $("#scroll-container > .scroll-content").offset().top -
                $offset;
              var $scrollbar = Scrollbar.init(
                document.getElementById("scroll-container")
              );
              gsap.to($scrollbar, {
                duration: 1.5,
                scrollTo: { y: topY, autoKill: true },
                ease: Expo.easeInOut,
              });
            } else {
              var topY =
                $(target).offset().top - $("body").offset().top - $offset;
              $("html,body").animate({ scrollTop: topY }, 800);
            }
          } else {
            var topY =
              $(target).offset().top - $("body").offset().top - $offset;
            $("html,body").animate({ scrollTop: topY }, 800);
          }
          return false;
        });
      $(".scroll-to-top").on("click", function () {
        if (!isMobile) {
          if ($("body").hasClass("tt-smooth-scroll")) {
            var $scrollbar = Scrollbar.init(
              document.getElementById("scroll-container")
            );
            gsap.to($scrollbar, {
              duration: 1.5,
              scrollTo: { y: 0, autoKill: true },
              ease: Expo.easeInOut,
            });
          } else {
            $("html,body").animate({ scrollTop: 0 }, 800);
          }
        } else {
          $("html,body").animate({ scrollTop: 0 }, 800);
        }
        return false;
      });
      $(
        "a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
      )
        .not(".not-hide-cursor")
        .not(".cursor-alter")
        .not(".tt-main-menu-list > li > a")
        .not(".tt-main-menu-list > li > .tt-submenu-trigger > a")
        .on("mouseenter", function () {
          gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
        })
        .on("mouseleave", function () {
          gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
        });
      $("a")
        .not('[target="_blank"]')
        .not('[href^="#"]')
        .not('[href^="mailto"]')
        .not('[href^="tel"]')
        .not(".lg-trigger")
        .not(".tt-btn-disabled")
        .on("click", function () {
          gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
        });
      $(document)
        .on("mouseleave", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
        })
        .on("mouseenter", function () {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        });
      $(document).mousemove(function () {
        gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
      });
    }
  }
  document
    .querySelector(".sidebar-button")
    .addEventListener("click", () =>
      document
        .querySelector(".main-menu, .header-area.style-3")
        .classList.toggle("show-menu")
    );
  $(".btn-hover")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: 0, left: 0 });
      $(this).find("span").css({ top: relY, left: relX });
    });
  // const serviceImgItem = document.querySelectorAll(
  //   ".sevices-wrap .single-services "
  // );
  // function followImageCursor(event, serviceImgItem) {
  //   const contentBox = serviceImgItem.getBoundingClientRect();
  //   const dx = event.clientX - contentBox.x;
  //   const dy = event.clientY - contentBox.y;
  //   serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
  // }
  // serviceImgItem.forEach((item, i) => {
  //   item.addEventListener("mousemove", (event) => {
  //     setInterval(followImageCursor(event, item), 100);
  //   });
  // });
  document.addEventListener("DOMContentLoaded", function (event) {
    let offset = 50;
    let circleContainer = document.querySelector(".circle-container");
    let circlePath = document.querySelector(".circle-container path");
    let pathLength = circlePath.getTotalLength();
    circlePath.style.transition = circlePath.style.WebkitTransition = "none";
    circlePath.style.strokeDasharray = pathLength;
    circlePath.style.strokeDashoffset = pathLength;
    circlePath.getBoundingClientRect();
    circlePath.style.transition = circlePath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    let updateLoader = () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let height = docHeight - winHeight;
      let progress = pathLength - (scrollTop * pathLength) / height;
      circlePath.style.strokeDashoffset = progress;
      if (scrollTop > offset) {
        circleContainer.classList.add("active");
      } else {
        circleContainer.classList.remove("active");
      }
    };
    circleContainer.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.onscroll = () => {
      updateLoader();
    };
    updateLoader();
  });
})(jQuery);
