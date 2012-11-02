$(document).ready(function() {
  $('.speaker-list li a').hover(function(){
    $(this).parent('div').parent('li').toggleClass('s-stripe');
  });
});
