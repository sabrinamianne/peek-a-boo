$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#text-showing").toggle();
    $("#text-hidden").toggle();
  });


  $("#fade-in").click(function() {
    $("img").fadeIn("fast");
  });

  $("#fade-out").click(function() {
    $("img").fadeOut(400);
  });

  $("#toggle-fading").click(function() {
    $('img').fadeToggle("slow");
  });

});
