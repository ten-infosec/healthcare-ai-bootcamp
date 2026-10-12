# HTML Tag 정리

> HTML 태그는 `<태그>내용</태그>` 형태로 쓰며, 브라우저에게 "이 내용은 무엇인지"를 알려 준다.
> 속성(Attribute)은 `<태그 속성="값">`처럼 여는 태그 안에 써서 추가 정보를 준다.
> `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`처럼 내용을 담지 않는 태그는 닫는 태그가 없다. (빈 요소)

---

## 1. 문서 구조

### `<html>`
- HTML 문서 전체를 감싸는 가장 바깥 태그
- `lang` 속성: 페이지 언어 (`ko` 한국어, `en` 영어)

### `<head>`
- 화면에 보이지 않는 **문서 정보**를 넣는 곳
- `<meta>`, `<title>`, `<style>` 등이 들어간다

### `<meta>`
- 문서의 부가 정보 (빈 요소)
- `charset="UTF-8"`: 한글 등 모든 글자가 깨지지 않게 설정 → `<head>` 맨 위에 둔다
- `name="viewport"`: 휴대폰 화면 크기에 맞춰 보이게 설정

### `<title>`
- 브라우저 **탭에 보이는 제목**

### `<body>`
- 실제 **화면에 보이는 내용**을 넣는 곳

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문서 제목</title>
</head>
<body>
    화면에 보일 내용
</body>
</html>
```

> VS Code에서 `!` + `Tab`을 누르면 위 뼈대가 자동으로 만들어진다. (Emmet)

---

## 2. 글자

### `<h1>` ~ `<h6>` (Heading)
- 제목. 숫자가 작을수록 크고 중요하다
- 글자 크기보다 **문서의 구조(목차)**를 나타내는 용도 → `<h1>`은 보통 한 페이지에 하나

### `<p>` (Paragraph)
- 문단. 위아래에 자동으로 여백이 생긴다

### `<br>` (Break)
- 줄바꿈 (빈 요소)
- HTML은 코드에서 엔터를 쳐도 화면에서 줄이 바뀌지 않기 때문에 필요하다

### `<hr>` (Horizontal Rule)
- 가로 구분선 (빈 요소)

```html
<h1>Hello, HTML</h1>
<h2>HTML의 특징</h2>
<p>모든 HTML은 tag의 형태로 작성된다.</p>
Hello, World!<br>Hello, Python!
<hr>
```

---

## 3. 목록

### `<ul>` (Unordered List)
- 순서 없는 목록 (● 글머리)
- `type` 속성: `disc`(●, 기본), `circle`(○), `square`(■)

### `<ol>` (Ordered List)
- 순서 있는 목록 (1, 2, 3 번호)
- `type` 속성: `1`(기본), `A`, `a`, `I`, `i`
- `start` 속성: 시작 번호 (예: `start="-10"`)

### `<li>` (List Item)
- 목록의 항목 하나. `<ul>`, `<ol>` 바로 안에는 `<li>`만 넣는다

```html
<ul type="square">
    <li>Python</li>
    <li>HTML</li>
</ul>

<ol type="I">
    <li>Apple</li>
    <li>Banana</li>
</ol>
```

> 목록 안에 목록을 넣으면(중첩) 자동으로 들여쓰기된다. 닫는 태그를 빠뜨리면 의도치 않게 중첩될 수 있다.

---

## 4. 표

| 태그 | 뜻 | 역할 |
|---|---|---|
| `<table>` | table | 표 전체 |
| `<thead>` | table head | 제목 줄 묶음 |
| `<tbody>` | table body | 데이터 줄 묶음 |
| `<tr>` | table row | 행(가로 한 줄) |
| `<th>` | table header | 제목 칸 (굵게, 가운데 정렬) |
| `<td>` | table data | 데이터 칸 |

- 열(세로 줄)을 만드는 태그는 따로 없다. 각 `<tr>` 안에 칸을 같은 순서로 넣으면 자동으로 열이 맞춰진다 → 모든 행의 칸 수를 같게 해야 한다
- `border="1"`: 테두리 표시 (연습용, 실무에서는 CSS 사용)

```html
<table border="1">
    <thead>
        <tr>
            <th>id</th>
            <th>name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>alex</td>
        </tr>
    </tbody>
</table>
```

---

## 5. 링크와 이미지

### `<a>` (Anchor)
- 클릭하면 다른 곳으로 이동하는 링크
- `href`: 이동할 주소 (hypertext reference)
- `target="_blank"`: 새 탭에서 열기

### `<img>` (Image)
- 이미지 표시 (빈 요소)
- `src`(source): 이미지 위치 → 같은 폴더의 파일 이름(상대 경로) 또는 인터넷 주소
- `alt`(alternative): 이미지가 안 뜰 때 보여 주는 글, 스크린 리더가 읽어 주는 설명
- `width`, `height`: 크기(px). 하나만 쓰면 나머지는 비율에 맞춰 자동

```html
<a href="https://google.com" target="_blank">구글</a>로 이동하기
<img src="lion_profile.jpg" alt="프로필 이미지" width="260">
```

> `<img src="인터넷 주소">`도 결국 브라우저가 그 주소로 GET 요청을 보내 이미지를 받아오는 것이다.

---

## 6. 폼 (입력 받기)

### `<form>`
- 사용자가 입력한 값을 모아 **서버로 보내는** 영역
- `action`: 보낼 주소
- `method`: 보내는 방식
  - `get`(기본값): 주소 뒤에 붙여 보냄 → `?q=검색어` (검색처럼 보여도 되는 데이터)
  - `post`: 요청 본문(body)에 담아 보냄 → 주소에 안 보임 (로그인, 회원가입)

### `<input>`
- 입력칸 (빈 요소)
- `type`: `text`(기본), `email`(이메일 형식 검사), `password`(●●● 가림), `search`, `file` 등
- `name`: 서버로 보낼 때 붙는 이름표 → **없으면 전송되지 않는다**
- `placeholder`: 비어 있을 때 보이는 안내 글
- `required`: 비어 있으면 전송을 막는다
- `id`: 페이지 안에서 하나뿐인 이름 → `<label>` 연결에 사용

### `<label>`
- 입력칸의 이름표 글자
- `for` 값을 `<input>`의 `id`와 똑같이 쓰면 연결된다 → 글자를 눌러도 입력칸에 커서가 들어간다

### `<button>`
- 버튼. `<form>` 안에 있으면 누를 때 폼을 전송한다

```html
<form action="https://httpbin.org/post" method="post">
    <label for="userEmail">이메일</label>
    <input id="userEmail" type="email" name="email" placeholder="a@example.com" required>

    <label for="userPassword">비밀번호</label>
    <input id="userPassword" type="password" name="password" minlength="8">

    <button>회원가입</button>
</form>
```

| 구분 | `id` | `name` |
|---|---|---|
| 사용하는 곳 | 브라우저(페이지 안) | 서버 |
| 역할 | label 연결, CSS·JS로 요소 찾기 | 전송 데이터의 이름표 |

---

## 7. 그 밖에

### `<div>` (Division)
- 의미 없이 영역을 묶는 상자. 여러 요소에 스타일을 한 번에 줄 때 쓴다 (부모에게 준 글자 스타일은 자식에게 상속)

### `id`와 `class` 속성
- `id`: 페이지에서 **하나뿐인** 이름 (중복 X)
- `class`: 여러 요소에 붙일 수 있는 **그룹 이름**, 띄어쓰기로 여러 개 가능 (`class="center name"`)

### `style` 속성 (인라인 스타일)
- 태그에 CSS를 직접 적용: `<p style="font-size: x-large; text-align: center;">`

### HTML 엔티티
- 특수문자를 코드로 표시: `&#169;` 또는 `&copy;` → ©, `&amp;` → &

### 주석
- `<!-- 주석 내용 -->` → 화면에 보이지 않는 메모 (`#`은 HTML 주석이 아니다)