$(document).ready(function() {
  $('.speaker-list li').mouseout(function() {
    console.log("hover");
    console.log(this);
    $(this).removeClass("s-stripe");
  }).mouseover(function() {
    $(this).addClass("s-stripe");
  });
});
