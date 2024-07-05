let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#section0 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.3,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to("#section1 .rel h2", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section1 .product1", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section1 .product2", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#section2 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.3,
      y: -20,
    });
    /* tl.to("#section2 .card_img > *", {
      opacity: 1,
      stagger: 0.1,
      y: 30,
    }); */
    tl.to("#section2 .card_img span img", {
      opacity: 1,
      stagger: 0.1,
      y: -10,
    });    
    tl.to("#section2 h2", {
      opacity: 1,
      y: -20,
    });
    tl.to("#section2 .gift ul", {
      opacity: 1,
      stagger: 0.3,
      y: -20,
    });
    tl.to("#section2 .gift ul img", {
      opacity: 1,
      stagger: 0.1,
      y: -30,
    });
  },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();  //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;  //브라우저의 높이값

  //console.log(scroll,outHeight);

  for(let i =0; i<section.length;i++){
    //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };

});




// jquery_______start
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  // Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  // scroll-header
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    //console.log(scroll);
    if (scroll > 60) {
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On');
    }
  });

  // Top Button scroll
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });

});