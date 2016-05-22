$(document).ready(function() {

  $(".homePage").mouseenter(function() {

    $(this).animate({
      height: "+=15px"
    });

    $(this).fadeTo('fast', 1);
  });

  $(".homePage").mouseLeave(function() {
    $(this).animate({
      height: "-=15px"
    });
    $(this).fadeTo("fast", 0.5);
  });
  $('div').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });
  $('div').mouseLeave(function() {
    $(this).fadeTo('fast', 0.5);
  });
  });
});
