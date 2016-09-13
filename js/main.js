$(document).ready(function() {
  var encoded = 'SnVzdGluLlN0ZWVsZTAyQGdtYWlsLmNvbQ==';
  var baseURL = 'https://formspree.io/';
  $('#contact-form').attr('action', baseURL + atob(encoded));
});

$("nav").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(section).offset().top - 50
  });
});
