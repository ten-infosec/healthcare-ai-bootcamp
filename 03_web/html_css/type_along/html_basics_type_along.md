# HTML 기초 따라치기 연습본

> 강의자료 「HTML / CSS」의 HTML 기초 파트(4~36쪽) 예제 14개를 순서대로 담았어요.
>
> 사용법
> - PART 0: 전체 예제를 처음부터 끝까지 한 번 읽기
> - PART 1: 예제별 코드를 보고, 바로 아래 빈 칸에 5번씩 받아 치기
> - PART 2: 설명만 보고 코드를 떠올려 치기 (막히면 설명 위의 코드 줄 참고)
> - PART 3: 코드와 설명을 함께 보면서 예제별로 치기
> - `<body>`만 있는 예제는 `!` + `Tab` 뼈대 안에 작성하세요

---

# PART 0. 전체 예제 먼저 읽기

> 치기 전에 14개 예제를 위에서 아래로 한 번 훑으며 흐름을 잡으세요.

### 1. HTML 기본 구조 — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
    </body>
</html>
```

### 2. `<p>` 태그 (문단) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
```

### 3. `<h#>` 태그 (제목) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

### 4. `<hr>` 태그 (구분선) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

### 5. `<ul>` + `<li>` 태그 (순서 없는 목록) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```

### 6. `<ol>` + `<li>` 태그 (순서 있는 목록) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```

### 7. `<table>` 태그 (표) + border 속성 — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
```

### 8. `<img>` 태그 (이미지) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
```

### 9. `<a>` 태그 (링크) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
```

### 10. `<form>` 태그 — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
```

### 11. `<form>` 태그 — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
```

### 12. 회원가입 폼 + `id` 속성 + 정규식(regex) — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
```

### 13. `class` 속성 + `<div>` 태그 — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
```

### 14. Semantic 태그 (보충 예시) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
```

---

# PART 1. 예제별 따라치기 (예제마다 5회)

> 위의 코드를 보고 바로 아래 빈 칸에 5번 받아 치세요.

## 1-1. HTML 기본 구조 — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
    </body>
</html>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-2. `<p>` 태그 (문단) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-3. `<h#>` 태그 (제목) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-4. `<hr>` 태그 (구분선) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-5. `<ul>` + `<li>` 태그 (순서 없는 목록) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-6. `<ol>` + `<li>` 태그 (순서 있는 목록) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-7. `<table>` 태그 (표) + border 속성 — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-8. `<img>` 태그 (이미지) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-9. `<a>` 태그 (링크) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-10. `<form>` 태그 — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-11. `<form>` 태그 — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-12. 회원가입 폼 + `id` 속성 + 정규식(regex) — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-13. `class` 속성 + `<div>` 태그 — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-14. Semantic 태그 (보충 예시) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

---

# PART 2. 설명만 보고 치기

> 각 설명 위의 `코드`는 막혔을 때만 보세요. 손으로 가리고 먼저 떠올려 보는 게 연습 포인트예요.

## 2-1. HTML 기본 구조 — `hello.html`

`<!DOCTYPE html>`
→ 이 문서가 HTML5 문서임을 브라우저에 알리겠다

`<html>`
→ HTML 문서의 최상위 태그를 열겠다 (모든 요소는 이 안에 들어감)

`<head>`
→ 화면에 보이지 않는 설정 영역을 열겠다 (제목, 인코딩, CSS, 메타 정보)

`<title>My Page</title>`
→ 브라우저 탭과 검색 결과에 보일 제목을 정하겠다

`</head>`
→ head 영역을 닫겠다

`<body>`
→ 화면에 실제로 보이는 내용 영역을 열겠다

`Hello, HTML`
→ body 안의 글자는 브라우저에 그대로 표시된다

`</body>`
→ body 영역을 닫겠다

`</html>`
→ 문서 전체를 닫겠다

```html

```

## 2-2. `<p>` 태그 (문단) — `paragraphs.html`

`<p>Hello, World!</p>`
→ 한 문단을 만들겠다 (위아래에 자동 여백)

`<p>Hello, World!</p> ×2`
→ 같은 문단을 두 번 더 만들겠다

```html

```

## 2-3. `<h#>` 태그 (제목) — `headings.html`

`<h1>One</h1>`
→ 가장 큰 제목(1단계)을 쓰겠다

`<p>Hello, World!</p>`
→ 제목 아래 문단

`<h2>Two</h2>`
→ 2단계 제목

`<h3>Three</h3>`
→ 3단계 제목

```html

```

## 2-4. `<hr>` 태그 (구분선) — `headings.html`

`<hr>`
→ 가로 구분선을 긋겠다 (닫는 태그 없음)

`<h2>Two</h2> / <p>…</p>`
→ 구분선 아래 다음 구역

```html

```

## 2-5. `<ul>` + `<li>` 태그 (순서 없는 목록) — `list.html`

`<ul>`
→ 순서 없는 목록(● 글머리)을 열겠다

`<li>foo</li>`
→ 목록 항목 하나

`<li>bar</li> / <li>baz</li>`
→ 항목 두 개 더

`</ul>`
→ 목록을 닫겠다

```html

```

## 2-6. `<ol>` + `<li>` 태그 (순서 있는 목록) — `list.html`

`<ol>`
→ 순서 있는 목록(1, 2, 3)을 열겠다

`<li>foo</li> / <li>bar</li> / <li>baz</li>`
→ 번호가 자동으로 붙는 항목 세 개

`</ol>`
→ 목록을 닫겠다

```html

```

## 2-7. `<table>` 태그 (표) + border 속성 — `table.html`

`<table border="1">`
→ 테두리가 보이는 표를 열겠다

`<thead>`
→ 제목 줄 묶음을 열겠다

`<tr>`
→ 행(가로 한 줄)을 열겠다

`<th>이름</th> / <th>나이</th>`
→ 굵고 가운데 정렬된 제목 칸 두 개

`</tr> / </thead>`
→ 행과 제목 묶음을 닫겠다

`<tbody>`
→ 데이터 줄 묶음을 열겠다

`<tr> <td>alex</td> <td>20</td> </tr>`
→ 데이터 행 하나 (칸 두 개)

`<tr> <td>bob</td> <td>30</td> </tr>`
→ 데이터 행 하나 더

`</tbody> / </table>`
→ 데이터 묶음과 표를 닫겠다

```html

```

## 2-8. `<img>` 태그 (이미지) — `image.html`

`<img src="pizza.jpeg" alt="pizza">`
→ 같은 폴더의 pizza.jpeg를 보여 주고, 안 뜨면 "pizza"라고 표시하겠다

`<img src="hamburger.jpeg" alt="hamburger">`
→ 두 번째 이미지

```html

```

## 2-9. `<a>` 태그 (링크) — `link.html`

`Visit`
→ 링크 앞의 일반 글자

`<a href="https://google.com">Google</a>`
→ "Google"을 누르면 구글로 이동하는 링크를 만들겠다

```html

```

## 2-10. `<form>` 태그 — GET — `form.html`

`<!-- GET -->`
→ 화면에 안 보이는 주석(메모)

`<form action="https://google.com/search" method="get">`
→ 입력값을 구글 검색 주소로, 주소 뒤에 붙여서(GET) 보내는 폼을 열겠다

`<input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">`
→ 검색 입력칸 / 안내 글 / 이름표 q / 페이지 열면 바로 커서 / 자동완성 끄기

`<button>입력</button>`
→ 누르면 폼을 전송하는 버튼

`</form>`
→ 폼을 닫겠다

```html

```

## 2-11. `<form>` 태그 — POST — `form.html`

`<!-- POST -->`
→ 주석

`<form action="https://httpbin.org/post" method="post">`
→ 받은 요청을 그대로 보여 주는 테스트 서버로, 요청 본문에 담아(POST) 보내는 폼을 열겠다

`<input type="text" placeholder="Username" name="username" autofocus autocomplete="off">`
→ 일반 글자 입력칸 / 이름표 username

`<button>전송</button>`
→ 전송 버튼

```html

```

## 2-12. 회원가입 폼 + `id` 속성 + 정규식(regex) — `register.html`

`<form>`
→ 회원가입 폼을 열겠다 (action 생략 → 현재 페이지로 전송)

`<label for="email">Email</label>`
→ id가 email인 입력칸의 이름표

`<input id="email" type="email" required placeholder="example@email.com">`
→ 이메일 형식 검사 / 빈칸 전송 막기 / 예시 글자 (속성이 많으면 여러 줄로 나눠 써도 됨)

`<br>`
→ 줄바꿈

`<label for="phone">Phone</label>`
→ 전화번호 이름표

`<input id="phone" type="text" required placeholder="010-1234-5678"`
→ 전화번호 입력칸 시작

`pattern="010-[0-9]{4}-[0-9]{4}"`
→ 정규식으로 형식 검사: 010- + 숫자 4개 + - + 숫자 4개

`title="010-1234-5678 형식으로 입력하세요">`
→ 형식이 틀렸을 때 보여 줄 안내

`<button type="submit">Submit</button>`
→ 전송 버튼 (`type="submit"`을 명시)

`</form>`
→ 폼을 닫겠다

```html

```

## 2-13. `class` 속성 + `<div>` 태그 — `div.html`

`<div class="intro">`
→ 의미 없는 묶음 상자를 열고, intro라는 그룹 이름을 붙이겠다

`<h1>What is HTML?</h1>`
→ 상자 안의 제목

`<p>HTML is Hypertext Markup Language</p>`
→ 상자 안의 문단

`</div>`
→ 상자를 닫겠다

```html

```

## 2-14. Semantic 태그 (보충 예시) — `semantic.html`

`<header>`
→ 상단 영역(로고, 사이트 제목)을 열겠다

`<main>`
→ 핵심 콘텐츠 영역을 열겠다

`<footer>`
→ 하단 정보 영역(저작권, 연락처)을 열겠다

`&copy;`
→ © 기호를 표시하는 HTML 엔티티

```html

```

---

# PART 3. 코드 + 설명 함께 보며 치기

## 3-1. HTML 기본 구조 — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
    </body>
</html>
```

→ HTML 문서는 항상 이 기본 틀을 가진다
→ 태그 안에 태그가 들어가는 중첩 구조로 문서의 계층이 만들어진다
→ 브라우저는 HTML을 해석해 DOM(트리 구조)을 만들고, CSS를 적용해 화면에 그린다
→ 팁: VS Code에서 `!` + `Tab`으로 자동 생성 (실습 파일은 이 뼈대의 `<body>` 안에 작성)

```html

```

## 3-2. `<p>` 태그 (문단) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
```

→ `<p>` 없이 글자만 여러 줄 쓰면 엔터를 쳐도 한 줄로 이어 붙어 보인다
→ `<p>`로 감싸면 문단 단위로 나뉘어 보인다

```html

```

## 3-3. `<h#>` 태그 (제목) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

→ `h1` ~ `h6`까지 있고, 숫자가 작을수록 크고 중요하다
→ 글자 크기보다 문서의 목차(구조)를 나타내는 용도 → `h1`은 보통 한 페이지에 하나
→ `$ cp paragraphs.html headings.html`: 앞 파일을 복사해서 시작

```html

```

## 3-4. `<hr>` 태그 (구분선) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

→ `hr` = horizontal rule
→ 내용을 담지 않는 빈 요소라서 닫는 태그가 없다 (`<br>`, `<img>`, `<input>`, `<meta>`도 같음)

```html

```

## 3-5. `<ul>` + `<li>` 태그 (순서 없는 목록) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```

→ `ul` = Unordered List, `li` = List Item
→ `ul` 바로 안에는 `li`만 넣는다
→ `type` 속성: `disc`(●, 기본), `circle`(○), `square`(■)

```html

```

## 3-6. `<ol>` + `<li>` 태그 (순서 있는 목록) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```

→ `ol` = Ordered List
→ `type` 속성: `1`(기본), `A`, `a`, `I`, `i` / `start` 속성: 시작 번호
→ 같은 `list.html`에서 `ul` 아래에 이어서 작성 (강의 코드의 `…`)

```html

```

## 3-7. `<table>` 태그 (표) + border 속성 — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
```

→ `tr` = table row, `th` = table header, `td` = table data
→ 열 태그는 따로 없음 → 모든 행의 칸 수를 똑같이 맞춰야 한다
→ `border="1"`: 태그에 추가 정보를 주는 **속성(Attribute)** — 여는 태그에만 쓰고, 여러 개 쓸 수 있다

> 참고: 강의 슬라이드는 마지막 줄이 `<table>`로 되어 있는데, 닫는 태그 `</table>`이 맞아요.

```html

```

## 3-8. `<img>` 태그 (이미지) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
```

→ `src` (source): 이미지 위치 — 파일 이름(상대 경로) 또는 인터넷 주소
→ `alt` (alternative): 이미지가 안 뜰 때 보이는 글, 스크린 리더가 읽어 주는 설명
→ 빈 요소라 닫는 태그 없음 / `width`로 크기 조절 가능

```html

```

## 3-9. `<a>` 태그 (링크) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
```

→ `a` = anchor, `href` = hypertext reference (이동할 주소)
→ `target="_blank"`를 붙이면 새 탭에서 열린다

```html

```

## 3-10. `<form>` 태그 — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
```

→ GET: 데이터를 주소 뒤에 붙여 보냄 → `https://google.com/search?q=검색어` (`method` 생략 시 기본값)
→ `name`이 없으면 서버로 전송되지 않는다
→ `autofocus`: 자동으로 커서 / `autocomplete="off"`: 입력 기록 자동완성 끄기

```html

```

## 3-11. `<form>` 태그 — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
```

→ POST: 데이터를 요청 본문(body)에 담아 보냄 → 주소에 안 보임 (로그인, 회원가입)
→ `httpbin.org/post`: 보낸 데이터를 `"form"` 항목으로 되돌려 보여 줌 → 전송 확인용
→ 같은 `form.html`에서 GET 폼 아래에 이어서 작성

```html

```

## 3-12. 회원가입 폼 + `id` 속성 + 정규식(regex) — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
```

→ `id`: 한 페이지에서 **하나뿐인** 식별자 → 같은 id를 두 요소에 쓰면 안 된다
→ `label for` 값 = `input id` 값 → 이름표 글자를 눌러도 입력칸 선택
→ 정규식: `[0-9]` 0~9 숫자 하나, `{4}` 4번 반복, `.` 아무 문자, `*` 0번 이상, `+` 1번 이상, `?` 0 또는 1, `\d` 숫자, `^` 시작, `$` 끝

```html

```

## 3-13. `class` 속성 + `<div>` 태그 — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
```

→ `class`: 공통 특징을 가진 요소를 묶는 이름 → 여러 요소에 반복 사용 가능 (`id`와 차이)
→ class를 기준으로 CSS 스타일을 적용한다
→ `div` = division: 의미 없이 영역만 묶는 상자

```html

```

## 3-14. Semantic 태그 (보충 예시) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
```

→ Semantic: 태그 자체에 의미를 담는 작성 방식
→ `div`는 의미 없는 묶음, `header` / `main` / `footer`는 역할이 명확
→ 화면은 `div`와 같아 보여도 검색 엔진과 스크린 리더가 구조를 이해한다

> 참고: 강의 슬라이드(36쪽)에는 개념 설명만 있어서, 이해를 돕기 위해 만든 보충 예시예요.

```html

```

---

## 자주 하는 실수 체크

- [ ] 여는 태그 끝 `>` 빠뜨리지 않았나? (`<hr` ✗ → `<hr>` ✓)
- [ ] 속성 따옴표 짝이 맞나? (`type=""square"` ✗ → `type="square"` ✓)
- [ ] 닫는 태그(`</ul>`, `</ol>`, `</table>`, `</form>`, `</div>`)를 빠뜨리지 않았나?
- [ ] 빈 요소(`<hr>`, `<br>`, `<img>`, `<input>`, `<meta>`)에 닫는 태그를 붙이지 않았나?
- [ ] 폼 입력칸에 `name`을 넣었나? (없으면 서버로 안 보내짐)
- [ ] `label for`와 `input id` 값이 똑같나?
- [ ] HTML 주석은 `<!-- -->`로 썼나? (`#`은 주석이 아님)
- [ ] `Shift + Alt + F`로 들여쓰기를 정리했나?
