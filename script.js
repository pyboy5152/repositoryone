$(document).ready(function() {
  $("#plus-button").hover(function() {
    $(this).addClass('active');
  },
    function() {
    $(this).removeClass('active');
  }
  );
});
