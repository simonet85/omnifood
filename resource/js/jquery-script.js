$(() => {
  $('.js--section-features').waypoint(
    (direction) => {
      if (direction === 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    { offset: '60px' }
  );
  $('.js--scroll-to-plan').on('click', (e) => {
    e.preventDefault();
    let body = $('html, body');
    body
      .stop()
      .animate(
        { scrollTop: $('.js--section-plans').offset().top },
        1000,
        'swing'
      );
  });
  $('.js--scroll-to-start').on('click', (e) => {
    e.preventDefault();
    let body = $('html, body');
    body
      .stop()
      .animate(
        { scrollTop: $('.js--section-features').offset().top },
        1000,
        'swing'
      );
  });
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate(
            { scrollTop: target.offset().top },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                return !1;
              } else {
                $target.attr('tabindex', '-1');
                $target.focus();
              }
            }
          );
        }
      }
    });
  $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    { offset: '50%' }
  );
  $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '50%' }
  );
  $('.js--wp-3').waypoint(
    (direction) => {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    { offset: '50%' }
  );
  $('.js--wp-4').waypoint(
    (direction) => {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    { offset: '50%' }
  );
  $('.js--nav-icon').on('click', (e) => {
    e.preventDefault();
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon ion-icon');
    nav.slideToggle(200);
    icon.attr('name') === 'menu'
      ? icon.attr('name', 'close')
      : icon.attr('name', 'menu');
  });
});
