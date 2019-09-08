(function ($) {

  let $navbar = $('#header-navbar');
  let $btnBack2Top = $('#back2top');

  // back2top
  const back2TopOffset = 700;
  const back2TopAnimationDuration = 500;
  const back2TopAnimationFunction = 'swing';
  const back2Top = (pos) => {
    pos >= back2TopOffset
      ? $btnBack2Top.fadeIn(500) // show btn
      : $btnBack2Top.fadeOut(500); // hide btn
  }

  $btnBack2Top.on('click', () => {
    $('html').animate(
      {
        scrollTop: 0
      },
      back2TopAnimationDuration,
      back2TopAnimationFunction,
    )
    return false;
  });

  // main menu
  const headerClassOnScroll = 'header-navbar--scrolled';
  const headerScrollTrigger = 100;

  $(window).on('scroll', () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
    // console.log($(window).scrollTop());
    back2Top($(window).scrollTop());
  });

  $navbar.onePageNav({
    currentClass: 'active',
    easing: 'swing',
    filter: ':not(.navbar-brand)',
    scrollSpeed: 750
  });

  // close menu on click
  let windowWidth = $(window).width();
  // как только ресайз - получаем корректное значение
  $(window).on('resize', () => windowWidth =  $(window).width());


  // ВНИМАНИЕ НА ЭТОТ КОД
  let $navbarLink = $('#header-navbar-collapse a');
  let $navbarToggler = $('.navbar-toggler');
  let $headerNavbarCollapse = $('#header-navbar-collapse');

  $navbarLink.on('click', () => {
    if (windowWidth < 992) {
      $navbarToggler.addClass('collapsed');
      $headerNavbarCollapse.removeClass('show');
    }
  })

  // AOS plugin
  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine'
  });

}(jQuery));