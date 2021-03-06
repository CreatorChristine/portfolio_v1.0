---
---
$(document).ready(function() {
  
  // interaction

  $('.navigation-trigger, .navigation a').click(function() {
    $('body').toggleClass('sidebar-is-active');
  });
  
  // smooth scrolling

  $(function() {

    $('a[href*=\\#]:not([href=\\#])').click(function() {

      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          var targety = target.offset().top;
          var realtargety = targety - 32;
          $('html,body').animate({
            scrollTop: realtargety
          }, 500, 'swing');
          return false;
        }

      }

    });

  });

});