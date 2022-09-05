

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

