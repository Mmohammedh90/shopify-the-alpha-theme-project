$(document).ready(function () {
    setTimeout(function () {
      $('#preloader').fadeOut(500);
    }, 500);

    setTimeout(function () {
      $('#preloader').remove();
    }, 4000);
  });
