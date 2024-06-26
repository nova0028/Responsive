$(document).ready(function(){

  //Mobile Navigation____________________________
  const mobSubBtn = $('.subNav .sub_menu .depth1>li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".depth2").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".depth2").slideToggle(200);
    $(this).toggleClass("active");
  });

  //Desktop Navigation____________________________

  const BODY = $("body");
  const schBtn = $('.sch_btn');
  const hNavBtn = $('.dsk_nav');
  const subNav = $('.subNav');
  const schWrap = $('.search_wrap');

  //서브메뉴와 검색창 둘중에 하나만 나오게 조건을 만들기 위함
  let hNavIs = false; 
  let schWrapIs = false;

  hNavBtn.mouseenter(hNav);
  subNav.mouseleave(hNav_reset);

  function hNav() {
    if (!schWrapIs && !hNavIs) {
      subNav.slideDown(function(){
        BODY.addClass('dOpen');
      });
      hNavIs = true;
    };
  };

  function hNav_reset() {
    if (hNavIs) {
      subNav.slideUp(function () {
        BODY.removeClass('dOpen')
      });
      hNavIs = false;
    };
  };

  //Search 
  schBtn.click(function () {
    if (!schWrapIs) {
      sch();
    } else {
      sch_reset();
    };
  });

  function sch() {
    schWrap.slideDown();
    BODY.addClass('sOpen');
    schWrapIs = true; 
    hNav_reset();
  };

  function sch_reset() {
    schWrap.slideUp();
    BODY.removeClass('sOpen');
    schWrapIs = false;
  };
  
  //브라우저 크기가 변경되었을때 초기화
  $(window).on('load resize',function(){
    let w = $(window).innerWidth();

    if(w < 1200) {
      hNav_reset();
      sch_reset();
      subNav.removeAttr('style'); 
    };
  });

});