(function ($) {
  let $navbar = $('#header-navbar');
  const headerClassOnScroll = 'header-navbar--scrolled';
  const headerScrollTrigger = 100;

  $(window).on('scroll', () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
  });

  $navbar.onePageNav({
    currentClass: 'active',
    easing: 'swing',
    filter: ':not(.navbar-brand)',
    scrollSpeed: 750
  });
}(jQuery));