$(function(){
  $(".li-hide").hide();
  $(".li-show").click(function(){
    $(this).next().slideToggle("slow");
    $(this).toggleClass('open');
  });
});
