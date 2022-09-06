# miumiu coding
## 제작기간: 3일
##사용언어: HTML, CSS, Javasctipt
## 사용기술
### 1. 폰트: 구글 폰트 Noto sans 사용

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap" rel="stylesheet">
```

### 2. lodash를 활용하여 scroll 함수 제어
scroll 이벤트가 계속 실행되면 사이트가 무거워질 수 있으므로 이런 부분이 제어되도록 플러그인이 lodash를 사용

```javascript
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
  ```
  
  ### 3. Swiper Slider
인스타그램 영역과 뉴스&이벤트 영역을
swiper slide를 사용

### 3-1) 인스타그램 영역 
```javascript
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});
```

### 3-2) 뉴스&이벤트 영역
```javascript
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
```

### 4. waht you wnat 이미지 영역
```
transform 을 활용한 줌인 효과 적용
transiton 을 사용하여 부드럽게 화면이 줌아웃 되도록 설정