# CSS 정리

## 1. CSS란?

**CSS(Cascading Style Sheets)** 는 HTML 요소의 **모양과 배치**를 정하는 언어입니다.

- HTML = 내용과 구조 (뼈대)
- CSS = 디자인 (옷)

CSS로 할 수 있는 것
- 글자 색, 크기, 글꼴
- 여백, 정렬, 위치
- 레이아웃 (Flexbox, Grid): 요소를 화면에 어떻게 배치할지
- 반응형 디자인: 화면 크기에 따라 레이아웃이 자동으로 바뀌는 디자인

### 기본 문법

```css
선택자 {
    속성: 값;
}
```

```css
h1 {
    color: red;
    font-size: 24px;
}
```

- **선택자(selector)**: 스타일을 적용할 요소를 고르는 부분 (`h1`)
- **속성(property)**: 무엇을 바꿀지 (`color`)
- **값(value)**: 어떻게 바꿀지 (`red`)
- 주석은 `/* 주석 */` 형태로 작성하며, 반드시 `*/`로 닫아야 합니다.

---

## 2. CSS 적용 방식

### 2-1. Inline CSS (인라인 스타일)

태그 안에 `style` **속성**으로 직접 작성합니다.

```html
<p style="color: blue; font-size: 20px;">안녕하세요</p>
```

- 장점: 바로 적용되고 간단함, 우선순위가 가장 높음
- 단점: 같은 스타일을 태그마다 반복해야 하고, 수정이 번거로우며, HTML과 CSS가 섞여 코드가 지저분해짐

### 2-2. Internal CSS (내부 스타일 시트)

`<head>` 안에 `<style>` **태그**를 넣고 그 안에 CSS를 작성합니다.

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
```

- 장점: 한 페이지의 스타일을 한곳에서 관리할 수 있음
- 단점: 다른 HTML 파일에서는 재사용할 수 없음

### 2-3. External CSS (외부 스타일 시트)

별도의 `.css` 파일을 만들고 `<link>` 태그로 불러옵니다. **실무에서 가장 많이 쓰는 방식**입니다.

```html
<head>
    <link rel="stylesheet" href="./style.css">
</head>
```

```css
/* style.css */
p {
    color: blue;
    font-size: 20px;
}
```

- `rel="stylesheet"`: 연결하는 파일이 CSS라는 뜻
- `href="./style.css"`: 불러올 파일 경로 (`./`는 현재 폴더)
- 장점: 여러 페이지가 같은 CSS를 공유할 수 있고, HTML(구조)과 CSS(디자인)를 분리해 관리하기 쉬움
- 단점: 파일이 하나 더 생김

| 방식 | 작성 위치 | 재사용 | 우선순위 |
|---|---|---|---|
| Inline | 태그의 `style` 속성 | ❌ | 가장 높음 |
| Internal | `<head>`의 `<style>` 태그 | 같은 페이지 안에서만 | 나중에 작성된 것이 우선 |
| External | 별도 `.css` 파일 | ⭕ 여러 페이지 | 나중에 작성된 것이 우선 |

---

## 3. CSS Selector (선택자)

### 3-1. 기본 선택자

| 선택자 | 문법 | 예시 | 의미 |
|---|---|---|---|
| 전체 선택자 | `*` | `* { margin: 0; }` | 모든 요소 |
| 태그 선택자 | `태그명` | `div { }` | 해당 태그 전부 |
| 클래스 선택자 | `.클래스명` | `.box { }` | `class="box"`인 요소들 (여러 개 가능) |
| 아이디 선택자 | `#아이디명` | `#header { }` | `id="header"`인 요소 (페이지에 하나) |
| 속성 선택자 | `[속성]` | `input[type="text"] { }` | 특정 속성을 가진 요소 |

```html
<div id="contents" class="centered">...</div>
```

- 하나의 요소에 id와 class를 함께 붙일 수 있습니다.
- class는 공백으로 구분해 여러 개 붙일 수 있습니다. (`class="box big"`)

### 3-2. 결합자(관계) 선택자

| 선택자 | 예시 | 의미 |
|---|---|---|
| 자손 선택자 (공백) | `div p` | div 안에 있는 모든 p (깊이 상관없음) |
| 자식 선택자 (`>`) | `div > p` | div 바로 아래 자식 p만 |
| 인접 형제 (`+`) | `div + p` | div 바로 다음에 오는 p 하나 |
| 일반 형제 (`~`) | `div ~ p` | div 뒤에 오는 모든 형제 p |
| 그룹 (`,`) | `h1, h2` | h1과 h2 모두 |
| 복합 (붙여쓰기) | `p.small` | p 태그이면서 class가 small |

### 3-3. 가상 클래스 선택자

요소의 **상태**를 기준으로 선택합니다.

| 선택자 | 의미 |
|---|---|
| `:hover` | 마우스를 올렸을 때 |
| `:focus` | 요소가 포커스를 가졌을 때 |
| `:active` | 클릭하고 있는 순간 |
| `:nth-child(n)` | 부모 기준 n번째 자식 |

```css
a:hover {
    text-decoration: underline;
}
```

### 3-4. 선택자 우선순위

여러 스타일이 겹칠 때 어떤 스타일을 적용할지 정하는 규칙입니다. 더 구체적인 선택자가 이깁니다.

1. `!important`
2. Inline style (`style=""`)
3. id 선택자 (`#id`)
4. class / 속성 / 가상 클래스 (`.class`, `[type]`, `:hover`)
5. 태그 선택자 (`div`, `p`)
6. 전체 선택자 (`*`)

> ✅ **id > class > tag**, 우선순위가 같으면 **나중에 작성한 코드**가 적용됩니다.

연습 사이트: [CSS Diner](https://flukeout.github.io/)

---

## 4. Style 속성

### 4-1. Text 관련

| 속성 | 설명 | 예시 |
|---|---|---|
| `font-size` | 글자 크기 | `16px`, `1.2em`, `x-large` |
| `font-weight` | 글자 굵기 | `bold`, `normal`, `400`, `700` |
| `font-family` | 글꼴 (쉼표로 대체 글꼴 나열) | `'Noto Sans KR', sans-serif` |
| `color` | 글자 색 | `red`, `#333` |
| `text-align` | 가로 정렬 | `left`, `center`, `right` |
| `text-decoration` | 밑줄 등 장식 | `none`, `underline` |
| `line-height` | 줄 간격 | `1.6` |

```css
header {
    font-family: 'Times New Roman', Times, serif;
    font-size: x-large;
    font-weight: bold;
    text-align: center;
}
```

- `font-family`에 여러 글꼴을 적으면, 앞의 글꼴이 없을 때 다음 글꼴로 대체합니다.
- 단축 속성: `font: bold x-large 'Times New Roman', serif;` (font-weight → font-size → font-family 순서)

### 4-2. Box Model

모든 HTML 요소는 **사각형 박스**로 이루어져 있으며, 안쪽부터 4개 영역으로 구성됩니다.

```
┌──────────── margin ────────────┐
│ ┌────────── border ──────────┐ │
│ │ ┌──────── padding ───────┐ │ │
│ │ │        content         │ │ │
│ │ └────────────────────────┘ │ │
│ └────────────────────────────┘ │
└────────────────────────────────┘
```

| 속성 | 설명 |
|---|---|
| `content` | 실제 내용(글자, 이미지)이 들어가는 영역 |
| `padding` | content와 border 사이의 **안쪽 여백** (배경색이 칠해짐) |
| `border` | 테두리 (`border: 2px solid black;` → 두께, 종류, 색) |
| `margin` | border 바깥의 **바깥 여백**, 다른 요소와의 간격 (투명) |
| `width` | 박스의 가로 길이 |
| `height` | 박스의 세로 길이 |

```css
.box {
    width: 100px;
    padding: 50px;
    border: 5px solid black;
    margin: 20px;
    background-color: skyblue;
}
```

- 방향별로 지정 가능: `margin-top`, `margin-bottom`, `padding-left` 등
- 값 개수에 따른 의미: `margin: 10px 20px;` → 위아래 10px, 좌우 20px

#### box-sizing

`box-sizing`은 **width와 height를 어디까지 포함해서 계산할지** 정하는 속성입니다.

| 값 | width의 의미 | 위 `.box`의 실제 가로 크기 |
|---|---|---|
| `content-box` (기본값) | content만의 크기 | 100 + 50×2 + 5×2 = **210px** |
| `border-box` | border까지 포함한 전체 크기 | **100px** |

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

→ 크기 계산이 직관적이라 실무에서는 대부분 `border-box`를 사용합니다.

#### Inline vs Block

| | Block-level | Inline |
|---|---|---|
| 차지하는 공간 | 한 줄 전체 | 내용만큼만 |
| 배치 | 항상 새 줄에서 시작 | 같은 줄에 나란히 |
| width / height | 적용됨 | 적용 안 됨 |
| 위아래 margin | 적용됨 | 적용 안 됨 |
| 예시 | `div`, `p`, `h1~h6`, `header`, `main`, `footer` | `span`, `a`, `strong`, `em` |

`display` 속성으로 성질을 바꿀 수 있습니다.

- `display: block` / `display: inline`
- `display: inline-block`: 같은 줄에 배치되면서 width, 위아래 margin도 적용됨
- `display: none`: 화면에서 사라짐

---

## 5. 이력서(resume.html)에 적용한 내용

| 배운 내용 | 이력서에서 사용한 곳 |
|---|---|
| External CSS | `<link rel="stylesheet" href="./resume_style.css">` 로 CSS 파일 분리 |
| Semantic 태그 | `nav`(사이드바), `main`, `section`(구역), `footer` |
| 태그 / class / id 선택자 | `main h2`, `.skill-tag`, `#resume-header` |
| 자손 선택자 | `.sidebar-menu a`, `.profile-photo img` |
| 가상 클래스 | `.skill-tag:hover`, `.experience-item:last-child` |
| class 재사용 | `.skill-tag`, `.education-table`을 Skills와 More About Me에서 함께 사용 |
| Box Model | `.container`의 `padding`, `margin: 40px auto`(가운데 정렬), `border-left`(제목 막대) |
| box-sizing | `*, *::before, *::after { box-sizing: border-box; }` |
| Inline / Block | 연락처 `span`을 `inline-block`으로 변경, 휴대폰 화면에서는 `block` |
| 아이템 정렬 (Flexbox) | `display: flex` + `justify-content: space-between`으로 이름(왼쪽)·사진(오른쪽) 배치 |
| 반응형 디자인 | `@media (max-width: 768px)`: 사이드바 → 상단 메뉴, `@media (max-width: 480px)`: 사진이 위로 |
| 외부 라이브러리 | Font Awesome(아이콘), Google Fonts(Roboto 글꼴) |
