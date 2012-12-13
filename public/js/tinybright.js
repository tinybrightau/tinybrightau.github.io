// tinybright.js

jQuery(function($) {
  // Animate the browser viewport to the relevant section
  $('#headercontent > a, .navitem').click(function(){
    var $el = $($(this).attr('href')),
        header = $('header').height(),
        pos = $el.offset().top - header;

    if (pos + $(window).height() > $('body').height()) {
      pos = $('body').height() - $(window).height() + header;
    }

    $('html, body').animate({
      scrollTop: pos
    }, 800, 'easeOutExpo');

    return false;
  });

  var handleScroll = function() {
    $header = $('header');
    if ($(window).scrollTop() <= 0) {
      $header.removeClass('shadow');
    } else if (!$header.hasClass()) {
      $header.addClass('shadow'); 
    }
  }

  $(window).scroll(handleScroll)
    .bind('touchmove', handleScroll);

  // Manually replace screenshot refs for retina displays
  if (window.Retina.isRetina()) {
    $('.screenshots a').each(function(){
      this.href = this.href.replace(/\.\w+$/, function(match) { return "@2x" + match; });
    });
  }

  // Initialize screenshot gallery
  $('.screenshots a').fancybox();
});


