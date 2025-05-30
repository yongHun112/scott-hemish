# scott-hamish codereview
코드 리뷰와 피드백 


### 🗂️ 1. 파일 구조 및 구성
- [x] 역할별 파일 구분 (`/js`,`/css`,`/img`)
- [x] `main.html` 과 `subpage.html`의 중복되는 코드 분리

---

### 📃 2. HTML 리뷰  (+피드백)
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
- [x] 각 영역별 적절한 태그 사용 (`<header>`, `<main>`, `<footer>`)
-> 적절한 id와 class 사용 예정

- [ ] `main_visual`안의 각 섹션들을 유지보수를 위해 클래스명을 번호로 순서를 매겼지만 어떤 섹션인지 이해 어려움
-> 각각의 섹션에 클래스명만 봐도 알 수 있게 번호 대신 이름 표시


- [ ] 접근성을 위한 모든 이미지에 `alt`속성 미적용
-> 습관화하여 속성값을 비우지 않도록 작성 할 예정



