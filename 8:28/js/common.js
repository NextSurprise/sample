$(function(){
  $('a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    var posi=$(id).offset().top;

    $('html,body').animate({
      'scrollTop':posi
    },1000)
  });
});
