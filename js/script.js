(function () {
  /*-------------------------------
        objectFitImages
    -------------------------------*/
  if ($('img.ofi').length) {
    objectFitImages('img.ofi');
  }
}());

/*-------------------------------
    iPhone/iPad class
  -------------------------------*/
var ua = navigator.userAgent.toLowerCase();

if (ua.indexOf('iphone') > 0) {
  $("body").addClass("iPhone");
} else if (ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document) {
  $("body").addClass("iPad");
}



(function ($) {


  /*-------------------------------
      drawer menu
  -------------------------------*/
  $('.h_button').on('click', function () {
    if ($(this).hasClass('js-active')) {
      $(this).removeClass('js-active');
      $('.h_menu').removeClass('js-open');
      $('.h_menu').addClass('js-close');
      $('.header').removeClass('js-active');
      $('.h_menu_bg').removeClass('js-humburgerOpen');
    } else {
      $(this).addClass('js-active');
      $('.h_menu').addClass('js-open');
      $('.h_menu').removeClass('js-close');
      $('.header').addClass('js-active');
      $('.h_menu_bg').addClass('js-humburgerOpen');
    }
  });
  $('.h_menu_bg').on('click', function () {
    if ($(this).hasClass('js-humburgerOpen')) {
      $(this).removeClass('js-humburgerOpen');
      $('.h_button').removeClass('js-active');
      $('.h_menu').removeClass('js-open');
      $('.h_menu').addClass('js-close');
    } else {
      $(this).addClass('js-humburgerOpen');
      $('.h_button').addClass('js-active');
      $('.h_menu').addClass('js-open');
      $('.h_menu').removeClass('js-close');
    }
  });


  /*-------------------------------
    pagetop
  -------------------------------*/
  $(window).on('load', function () {
    var pagetop = $('.pagetop');
    //スクロールしてトップ
    pagetop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    $(window).trigger('scroll');
  });

  $(window).on('load scroll', function () {
    if ($(window).scrollTop() > 1) {
      //      $('.header').addClass('js-change');
      $('.h_button').addClass('js-change');
    } else {
      //      $('.header').removeClass('js-change');
      $('.h_button').removeClass('js-change');
    }
    //
    if ($(window).scrollTop() > 1) {
      $('.pagetop').addClass('js-change');
    } else {
      $('.pagetop').removeClass('js-change');
    }
  });
})(jQuery);


/*-------------------------------
    scroll event
  -------------------------------*/
function scroll_event() {
  const animation = document.querySelectorAll(".animation");
  const animationArray = Array.prototype.slice.call(animation, 0);

  const isPC = window.innerWidth > 1024;
  const options = {
    root: null,
    rootMargin: isPC ? "-5% 0px -10%" : "6% 0px -10%",
    threshold: 0
  };

  const observer = new IntersectionObserver(doWhenIntersect, options);
  animationArray.forEach(function (animation) {
    observer.observe(animation);
  });

  function doWhenIntersect(entries) {
    const entriesArray = Array.prototype.slice.call(entries, 0);

    entriesArray.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("acted");
      }
    });
  }
}
scroll_event();




/*-------------------------------
    aのクリックイベント
  -------------------------------*/
$(function () {
  $('a').on('click', function (e) {
    var str = this.getAttribute('href').substring(0, 1),
      $linktype = $(this).attr('target'),
      $call = this.getAttribute('href').substring(0, 3);

    if (str === "#") {
      //スムーズスクロールをさせる
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=' + this.hash.slice(1) + ']");
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - $('.h_button').innerHeight()
          }, 700);
          return false;
        }
      }
    } else if ($linktype == "_blank" || $call == "tel" || $call == "img") {
      //何もしない
    } else {
    }
  });
});

/*-------------------------------
  ★ lower
  -------------------------------*/

// ★index page only
if ($('.front-page').length) {

  //new jobs
  let topJobOptions = {};
  if (window.matchMedia("(max-width: 767px)").matches) {
    if ($(".swiper-newJobs .swiper-slide").length == 1) {
      topJobOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        speed: 500,
        watchOverflow: true,
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    } else {
      topJobOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    }
  } else if (window.matchMedia("(max-width: 1550px)").matches) {
    if ($(".swiper-newJobs .swiper-slide").length <= 2) {
      topJobOptions = {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        speed: 500,
        watchOverflow: true,
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    } else {
      topJobOptions = {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    }
  } else if (window.matchMedia("(max-width: 1700px)").matches) {
    if ($(".swiper-newJobs .swiper-slide").length <= 3) {
      topJobOptions = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        speed: 500,
        watchOverflow: true,
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        },
      };
    } else {
      topJobOptions = {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    }
  } else if (window.matchMedia("(min-width: 1701px)").matches) {
    if ($(".swiper-newJobs .swiper-slide").length <= 4) {
      topJobOptions = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        speed: 500,
        watchOverflow: true,
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    } else {
      topJobOptions = {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: '.swiper-button-next_newJobs',
          prevEl: '.swiper-button-prev_newJobs'
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1550: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }
      };
    }
  }
  new Swiper('.swiper-newJobs', topJobOptions);

  //interview
  function interviewSwiper() {
    let topInterviewOptions = {};
    topInterviewOptions = {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: '.swiper-button-next_interview',
        prevEl: '.swiper-button-prev_interview'
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }
    };
    new Swiper('.swiper-interview', topInterviewOptions);
  }

}



function spanWrap(targetElm) {
  const targets = [].slice.call(document.querySelectorAll(targetElm));
  targets.forEach(function (target) {
    const nodes = [].slice.call(target.childNodes);
    let spanWrapText = '';

    $('.m_title_style01 .en').each(function () {
      var txt = $(this).html();
      $(this).html(
        txt.replaceAll(' ', '&nbsp;')
      );
    });

    $('.m_title_style02 .en').each(function () {
      var txt = $(this).html();
      $(this).html(
        txt.replaceAll(' ', '&nbsp;')
      );
    });

    nodes.forEach(function (node) {
      if (node.nodeType == 3) {
        const text = node.textContent.replace(/\r?\n/g, '');
        spanWrapText =
          spanWrapText +
          text.split('').reduce(function (acc, v) {
            return acc + '<span>' + v + '</span>';
          }, '');
      } else {
        spanWrapText = spanWrapText + node.outerHTML;
      }
    });

    target.innerHTML = spanWrapText;
  });
}
spanWrap('.js-split');
