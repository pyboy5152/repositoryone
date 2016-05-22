$(document).ready(function() {
  $("#plusbutton").mouseenter(function() {
    $(this).fadeTo("fast", 1);
  });
  $("#plusbutton").mouseLeave(function() {
    $(this).fadeTo("Fast", 0.5);
  });
});
