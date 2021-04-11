$(() => {
  $('.js--section-features').waypoint(
    (direction) => {
      if (direction === 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px',
    }
  );
});

/**
 * http://imakewebthings.com/waypoints/guides/jquery-zepto/
 */
