# scott-hamish codereview
코드 리뷰와 피드백 

## Scott Hamish Website 
사용기술 - HTML, CSS, JAVASCRIPT, JQUERY, GSAP 

프로그램 - FIGMA, Visual Studio Code

링크 - https://yonghun112.github.io/scott-hemish/

- 반응형 웹사이트

### 🗂️ 1. 파일 구조 및 구성
- [x] 역할별 파일 구분 (`/js`,`/css`,`/img`)
- [x] `main.html` 과 `subpage.html`의 중복되는 코드 분리

---

### 📙 2. HTML 리뷰  (+피드백)
```html

<div class="wrap">
      <header class="header">
      </header>

      <main class="main">
          <section class="main_visual">
          </section>

          <section class="section-01">
          </section>

          <section class="section-02">
          </section>
      </main>

      <div class="icon_box">
      </div>

      <footer class="footer">
      </footer>
</div>
```

- [x] `h1`를 가장 먼저 사용하고 레이아웃 구조 순서에 맞게 작성
- [x] 각 영역별 시멘틱 태그 사용 (`<header>`, `<main>`, `<footer>`)
-> 적절한 id와 class 사용 예정

- [ ] `main_visual`안의 각 섹션들을 유지보수를 위해 클래스명을 번호로 순서를 매겼지만 어떤 섹션인지 이해 어려움
-> 각각의 섹션에 클래스명만 봐도 알 수 있게 번호 대신 각 섹션 정보에 관한 이름 표시


- [ ] 접근성을 위한 모든 이미지에 `alt`속성 몇몇 미적용
-> 습관화하여 속성값을 비우지 않도록 작성 할 예정

- [ ] `<header>` ,`<main>`, `<footer>` 사이 `<div>`태그 사용 ( 구조에 맞지 않은 잘못된 태그 사용)
-> 최대한 큰 태그 안에서 구조화 될 수 있도록 개선 예정

### 📘 3. CSS 리뷰 

```scss
.header {
      width: 100%;
      height: 9rem;

      inner {
            max-width: 176rem;
            width: calc(100% - 60px);

            .logo {
                  display: flex;
                  justify-content: center;
            }   
      }
}
.
.
.    
```

- 보다 간결한 유지보수를 위한 SCSS 사용
  
      
- [x] 미디어 쿼리와 `font-size: clamp(rem, vw+rem, rem)`를 사용한 반응형 웹 완성
      
- [ ] 미디어 쿼리에서 `max-width: 500px` 작성 후 `max-width: 450px`를 사용해 추가 작업하여 혼동이 올 수 있음
-> max-width: 500px에서 최대한 작업 예정
      
- [x] `main.html` 과 `subpage.html`의 공통 요소 값 `common.css`를 이용해 분리하여 작성
      
- [x] 초기값, 반복되는 요소들의 값 초기작성과 `reset.css`를 이용해 작성
      

### 📒 4. Java Script 리뷰

``` Java Script

      gsap.to(".video", {
            scrollTrigger: {
                  trigger: ".video_wrap",
                  start: "90% 95%",
                  end: "bottom 50%",
                  /* markers: true,  */
                  scrub: true,
                  },
                 width: "100%",
                 height: "100%"
                 /* height: "100%" */
             });
```
- 동적인 웹사이트를 위한 여러 gsap 적극사용

- [x] 서브페이지를 위한 메뉴 토글, 스크롤 이벤트 등 기능 구현

---
``` nav menu

$('.header .mobile .mobile_info .depth-01').on('click', function () {

  if ($(this).siblings('.depth-02').css('display') == 'none') {
   $('.header .mobile .mobile_info .depth-02').slideUp();
   $(this).siblings('.depth-02').slideDown();

    $('.header .mobile .mobile_info .depth-01').removeClass('active');
     $(this).addClass('active');
   } else {
     $(this).siblings('.depth-02').slideUp();
     $(this).removeClass('active');
   }
})
```
- menu 아코디언 이벤트

- [ ] 중복되는 함수의 기능들이 많아 분리가 필요함
      
      -> 코드 기능별 모듈화 개선 예정

### 📒 5. UI/UX 리뷰






