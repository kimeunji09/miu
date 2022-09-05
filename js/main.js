

//인스타그램 영역
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});



//뉴스&이벤트 슬라이드 영역
var swiper = new Swiper(".news .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


//메뉴
jQuery(document).ready(function(){
$('.menu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});
});

//what you want 영역
var currentIndex = 0;
    
setInterval(function(){
    if(currentIndex < 2) {
        currentIndex ++;
    } else {
        currentIndex = 0;
    } 
    
    $(".contents2 ul li").eq(currentIndex).siblings().fadeOut();
    $(".contents2 ul li").eq(currentIndex).fadeIn();
    
},3000);


//lodash scroll 
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
})
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)