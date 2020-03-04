$(function(){
  $(window).scroll(function (){
    $('.rigth-img').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function (){
      $('.left-img').each(function(){
          var elemPos = $(this).offset().top,
              scroll = $(window).scrollTop(),
              windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
              }
          });
      });
  // $('.right1').hide().fadeIn(2000);
  // $('.right2').hide().fadeIn(4000);
  // $('.right3').hide().fadeIn(6000);
  // $('.left3').hide().fadeIn(2000);
  // $('.rleft2').hide().fadeIn(4000);
  // $('.left1').hide().fadeIn(6000);
});