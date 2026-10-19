# JavaScript DOM 조작법 정리

---

## 1. DOM(Document Object Model) 이란?

**DOM**은 브라우저가 HTML 문서를 읽은 뒤, 자바스크립트가 다룰 수 있도록 **메모리 안에 만들어 두는 나무(트리) 모양의 객체 구조**다.

- Document: HTML 문서
- Object: 각 태그를 자바스크립트 객체로 표현
- Model: 문서 전체를 구조(모형)로 나타냄

```
HTML 파일 (글자)              브라우저 메모리 속 DOM (트리)

<html>                        html
  <body>                       └─ body
    <h1>안녕</h1>                   ├─ h1  ("안녕")
    <button>클릭</button>           └─ button ("클릭")
  </body>
</html>
```

### 브라우저가 화면을 그리는 흐름

```
① HTML 파일 읽기
      ↓
② DOM 생성 (메모리 속 트리 구조)
      ↓
③ 화면에 그리기 (렌더링)
      ↓
④ JS가 DOM 변경 (클릭 등 이벤트 발생 시)
      ↓
⑤ 브라우저가 바뀐 DOM을 보고 화면 다시 그리기
```

### 핵심 포인트

| 시점 | HTML 파일 | DOM |
|---|---|---|
| 처음 페이지를 열었을 때 | Hello | Hello (완전히 같음) |
| JS로 수정한 뒤 | Hello | 안녕 (DOM만 바뀜) |
| 새로고침 후 | Hello | Hello (다시 같아짐) |

- JS는 **HTML 파일이 아니라 DOM을 바꾼다.** 화면을 다시 그리는 건 브라우저가 한다.
- 새로고침하면 브라우저가 기존 DOM을 버리고 HTML 파일을 처음부터 다시 읽어 DOM을 새로 만든다. 그래서 콘솔에서 바꾼 내용은 사라진다.
- 계속 유지하고 싶은 동작은 HTML 파일 안 `<script>`나 별도 `.js` 파일에 적어 둔다. (새로고침할 때마다 다시 실행됨)

### `document.querySelector`, `addEventListener`는 어디서 온 걸까? → 웹 API

DOM을 다루는 함수들은 자바스크립트 자체 문법이 아니라 **브라우저가 제공하는 기능(웹 API)** 이다.

| 종류 | 하는 일 | 예 |
|---|---|---|
| DOM API | 요소 찾기·만들기·바꾸기 | `querySelector`, `createElement`, `appendChild`, `textContent`, `style` |
| 이벤트 API | 이벤트 발생 시 함수 실행 등록 | `addEventListener` |
| 콘솔 API | 콘솔에 출력 | `console.log` |
| 타이머 API | 시간 뒤 함수 실행 | `setTimeout` |

그래서 브라우저가 없는 Node.js(터미널)에서 `document`를 쓰면 `ReferenceError: document is not defined` 에러가 난다.

---

## 2. Selector(선택자)로 DOM 요소 가져오기

**셀렉터(Selector)** 는 DOM에서 어떤 요소를 고를지 적는 **조건(주소)** 이다. CSS에서 스타일을 입힐 대상을 고르던 문법과 똑같다.

### 자주 쓰는 셀렉터

| 셀렉터 | 뜻 | HTML 예 | JS |
|---|---|---|---|
| `"h1"` | 태그 이름 | `<h1>` | `document.querySelector("h1")` |
| `"#title"` | id (`#` = id) | `<h1 id="title">` | `document.querySelector("#title")` |
| `".box"` | class (`.` = class) | `<div class="box">` | `document.querySelector(".box")` |

### querySelector vs querySelectorAll

```javascript
const title = document.querySelector("#title");
const buttons = document.querySelectorAll("button");
```

→ `querySelector`: 조건에 맞는 요소 중 **첫 번째 하나만** 반환하겠다
→ `querySelectorAll`: 조건에 맞는 요소를 **전부** 모아서 반환하겠다 (반복문으로 하나씩 꺼내 쓸 수 있음)

### 가져온 요소로 할 수 있는 것

```javascript
const h1 = document.querySelector("h1");

h1.textContent = "안녕하세요";
h1.style.color = "blue";
h1.style.fontSize = "40px";
```

→ DOM에서 h1을 찾아 `h1` 변수에 담겠다
→ `textContent`: 요소 안의 글자를 바꾸겠다
→ `style.속성`: CSS 스타일을 바꾸겠다 (CSS의 `font-size`처럼 하이픈이 있는 이름은 `fontSize`처럼 붙여 쓰고 다음 글자를 대문자로)

### 입력칸의 값은 `value`

```javascript
const input = document.querySelector("#name-input");
console.log(input.value);
```

→ `<input>`에 사용자가 적은 글자는 `textContent`가 아니라 **`value`** 로 꺼내겠다

| 요소 | 안의 글자 |
|---|---|
| `<h1>`, `<p>`, `<button>` 등 | `.textContent` |
| `<input>` | `.value` |

### 새 요소 만들어 붙이기

```javascript
const p = document.createElement("p");
p.textContent = "JS로 만든 문단";
document.body.appendChild(p);
```

→ `createElement("p")`: 메모리에 새 `<p>` 요소를 만들겠다 (아직 화면엔 없음)
→ 글자를 넣겠다
→ `appendChild(p)`: `body` 맨 끝에 자식으로 붙이겠다 → 이 순간 화면에 나타난다

### `const`를 쓰는 이유

```javascript
const btn = document.querySelector("button");
btn.textContent = "클릭됨";
```

→ 한 번 찾은 요소는 다른 요소로 바꿀 일이 없으니 `const`로 담겠다 (실수로 덮어쓰는 걸 막아 줌)
→ `const`라도 그 요소의 **내용(글자, 스타일)** 을 바꾸는 건 가능하다

---

## 3. Event 란?

**이벤트(Event)** 는 페이지에서 일어나는 **사용자의 행동이나 상태 변화**다.

| 이벤트 | 언제 발생 |
|---|---|
| `click` | 요소를 클릭할 때 |
| `input` | 입력칸 내용이 바뀔 때마다 (입력·삭제·붙여넣기) |
| `mouseover` | 마우스가 요소 위로 올라올 때 |
| `mouseout` | 마우스가 요소에서 벗어날 때 |
| `keydown` | 키보드 키를 누를 때 |
| `scroll` | 스크롤할 때 (무한 스크롤 구현에 사용) |

> `for`, `if` 같은 건 이벤트가 아니라 자바스크립트 문법(키워드)이다.

---

## 4. EventListener(이벤트 리스너)

### 4-1. EventListener 란?

**이벤트 리스너**는 요소에 붙여 두는 장치로, **"이 이벤트가 일어나는지 귀 기울이고 있다가(listen), 일어나면 이 함수를 실행해"** 라고 등록해 두는 것이다.

### 4-2. EventListener 를 사용하는 목적, 이유

- 일반 코드는 위에서 아래로 한 번 실행되고 끝난다.
- 하지만 웹 화면은 **사용자가 언제 무엇을 할지 모른다.** 클릭이 10초 뒤일 수도, 1시간 뒤일 수도 있다.
- 그래서 "이 일이 생기면 이걸 해라"를 **미리 세팅해 두고, 사용자의 행동을 기다렸다가 반응**하는 방식이 필요하다. 이를 **이벤트 기반 프로그래밍**이라고 한다.
- 프론트엔드 개발의 핵심은 화면 곳곳(전송 버튼, 좋아요 버튼, 검색창 등)에 이런 동작을 미리 세팅해 두는 것이다.

### 4-3. EventListener 정의하기

**기본 구조**

```javascript
요소.addEventListener("이벤트 이름", 실행할 함수);
```

**예제: 버튼을 클릭하면 알림창 띄우기**

```html
<button>눌러보세요</button>

<script>
    const btn = document.querySelector("button");

    function buttonAlert() {
        alert("버튼이 클릭됨");
    }

    btn.addEventListener("click", buttonAlert);
</script>
```

→ 버튼을 찾아 `btn`에 담겠다
→ 클릭됐을 때 할 일을 `buttonAlert` 함수로 **정의만** 해 두겠다 (아직 실행 X)
→ `btn`에 "클릭되면 `buttonAlert`를 실행해"라고 **등록만** 하겠다
→ 사용자가 클릭하면 그때 브라우저가 `buttonAlert`를 호출하겠다

**⚠️ 가장 중요한 주의점: 함수 이름 뒤에 괄호를 붙이지 않는다**

```javascript
btn.addEventListener("click", buttonAlert);    // ✅ 함수 자체를 맡김
btn.addEventListener("click", buttonAlert());  // ❌ 지금 바로 실행해 버림
```

→ `buttonAlert()`처럼 괄호를 붙이면 등록하는 순간 함수가 **바로 실행**되어 알림창이 뜬다
→ 함수에 `return`이 없으니 결과값 `undefined`가 반환되어, 결국 `addEventListener("click", undefined)`가 된다
→ 그래서 정작 클릭하면 아무 반응이 없다

| 넘긴 것 | 의미 | 결과 |
|---|---|---|
| `buttonAlert` | 함수 자체 | 클릭할 때마다 실행 |
| `buttonAlert()` | 함수를 실행한 결과값 (`undefined`) | 페이지 열릴 때 1번 실행, 클릭엔 반응 없음 |

**실행 주체는 누구?**

- 무엇을 할지 → **코드**가 정함 (함수 정의 + 등록)
- 언제 할지 → **사용자의 클릭**이 정함
- 실제 실행 → **버튼(브라우저)** 이 들고 있다가 호출함

이렇게 다른 쪽에 맡겨 두면 나중에 대신 불러 주는 함수를 **콜백 함수(callback function)** 라고 한다.

### 4-4. EventListener 응용

**① 입력값을 화면에 추가하기 + 유효성 검사(얼리 리턴)**

```html
<input type="text" id="name-input">
<button>확인</button>

<script>
    const input = document.querySelector("#name-input");
    const button = document.querySelector("button");
    const p = document.createElement("p");

    button.addEventListener("click", () => {
        if (input.value === "") {
            alert("이름을 입력하세요.");
            return;
        }

        p.textContent = input.value;
        document.body.appendChild(p);
        input.value = "";
    });
</script>
```

→ `<p>`는 리스너 **밖**에서 한 번만 만들어 두겠다 (클릭마다 새로 만들면 `<p>`가 중복으로 쌓임)
→ 클릭되면, 입력칸이 비어 있는지 먼저 검사하겠다
→ 비어 있으면 경고창을 띄우고 `return`으로 **함수를 그 자리에서 끝내겠다** (아래 코드 실행 X)
→ 값이 있으면 `<p>`에 넣어 화면에 붙이고, 입력칸을 비우겠다

> **얼리 리턴(Early Return) 패턴**: 문제가 있는 경우를 먼저 `return`으로 걸러 내고, 통과한 경우만 본래 코드까지 내려오게 하는 방식. 데이터를 쓰기 전에 깨끗한지 확인한다는 점에서 머신러닝의 전처리와 같은 원리다.

> **리스너 안 vs 밖**: 리스너 **밖** 코드는 페이지가 열릴 때 바로 실행되고, 리스너 **안** 코드는 이벤트가 발생할 때마다 실행된다.

**② 비밀번호 자릿수 실시간 검사 (`input` 이벤트)**

```html
<input type="password" placeholder="비밀번호 입력">
<p id="help"></p>

<script>
    const input = document.querySelector("input");
    const help = document.querySelector("#help");

    input.addEventListener("input", () => {
        const length = input.value.length;

        if (length === 0) {
            help.textContent = "";
        } else if (length < 4) {
            help.textContent = "4자리 이상 입력하세요.";
            help.style.color = "red";
        } else {
            help.textContent = "사용 가능한 비밀번호입니다.";
            help.style.color = "green";
        }
    });
</script>
```

→ `type="password"`: 입력한 글자를 `●●●●`로 가려서 보여주겠다 (마스킹)
→ `input` 이벤트: 글자를 입력하거나 지울 때마다 함수를 실행하겠다
→ `input.value.length`로 글자 수를 세겠다 (파이썬은 `len(value)` 함수, JS는 `.length` 속성)
→ 0글자면 도움말을 비우고, 4 미만이면 빨간 경고, 나머지는 초록색 통과 문구를 보여주겠다
→ `else if`는 위에서부터 차례로 검사해서 **처음 맞는 조건 하나만** 실행하므로 순서가 중요하다

**③ 시간이 지나면 실행하기 (`setTimeout`)**

이벤트처럼 "나중에 실행"하지만, 사용자 행동이 아니라 **시간**이 기준이다.

```javascript
setTimeout(() => {
    const p = document.createElement("p");
    p.textContent = "3초가 지났습니다";
    document.body.appendChild(p);
}, 3000);
```

→ 첫 번째 자리: 실행할 함수를 **예약만** 하겠다
→ 두 번째 자리: 기다릴 시간을 밀리초로 넘기겠다 (1초 = 1000, 3초 = 3000)
→ 기다리지 않고 바로 다음 줄로 넘어가며, 3초 뒤 예약한 함수가 실행되겠다
→ 사용 예: 은행 사이트의 "15분 뒤 자동 로그아웃"

| | 첫 번째 자리 | 두 번째 자리 |
|---|---|---|
| `addEventListener` | 이벤트 | 함수 |
| `setTimeout` | 함수 | 시간(ms) |

---

## 5. 마우스 감지란?

**마우스 감지**는 사용자가 마우스로 요소 위에 올라오거나 벗어나는 순간을 이벤트로 알아채는 것이다.

| 이벤트 | 언제 |
|---|---|
| `mouseover` | 마우스가 요소 **위로 올라올 때** |
| `mouseout` | 마우스가 요소에서 **벗어날 때** |

### 5-1. 마우스 감지 사용

**기본: 올리면 하늘색, 벗어나면 주황색**

```html
<head>
    <style>
        span {
            background-color: orange;
            border: 1px solid black;
            padding: 5px;
        }
    </style>
</head>
<body>
    <span>마우스를 올려보세요</span>

    <script>
        const span = document.querySelector("span");

        span.addEventListener("mouseover", () => {
            span.style.backgroundColor = "skyblue";
        });

        span.addEventListener("mouseout", () => {
            span.style.backgroundColor = "orange";
        });
    </script>
</body>
```

→ 마우스가 올라오면 배경을 하늘색으로 바꾸겠다
→ 마우스가 벗어나면 배경을 주황색으로 되돌리겠다
→ `mouseout`을 등록하지 않으면 마우스를 떼도 하늘색이 그대로 남는다
→ 같은 요소에 리스너를 여러 개 붙일 때는 각각 **독립된 문장**으로 따로 쓴다

**응용: 공통 함수 + 인자 넘기기**

```javascript
const span = document.querySelector("span");

function changeColor(color) {
    span.style.backgroundColor = color;
}

span.addEventListener("mouseover", () => changeColor("skyblue"));
span.addEventListener("mouseout", () => changeColor("orange"));
span.addEventListener("click", () => changeColor("red"));
```

→ "배경색 바꾸기"를 함수 하나로 만들고, 색만 매개변수 `color`로 받겠다
→ 이벤트를 추가할 때는 한 줄만 늘리면 되고, 기능을 바꿀 때는 `changeColor` 한 곳만 고치면 된다

**⚠️ 인자를 넘길 때 주의**

| 넘긴 것 | 결과 |
|---|---|
| `changeColor` | 나중에 실행 O, 색 전달 X |
| `changeColor("skyblue")` | 지금 바로 실행 → `undefined` 등록 ❌ |
| `() => changeColor("skyblue")` | 나중에 실행 O, 색 전달 O ✅ |

→ 인자를 넘겨야 하는 함수는 **화살표 함수로 한 번 감싸서** "나중에 이 인자로 호출해"라고 맡긴다

> **함수로 뺄까, 펼쳐 쓸까?** 정답은 없다. 비슷한 코드가 1~2개면 펼쳐 써도 되고, 재활용이 많거나 구현이 복잡할수록 함수로 빼는 효과가 크다.

---

## 6. 화살표 함수란?

**화살표 함수(Arrow Function)** 는 `function` 키워드 대신 `=>`(등호 + 꺾쇠)를 써서 함수를 **더 짧게** 표현하는 문법이다.

### 함수가 짧아지는 과정

| 단계 | 모양 | 변화 |
|---|---|---|
| 1 | `function buttonAlert() { ... }` 정의 후 `buttonAlert` 전달 | 기본 |
| 2 | `function buttonAlert() { ... }`를 인자 자리에 바로 작성 | 정의를 안으로 옮김 |
| 3 | `function () { ... }` | 이름 삭제 (익명 함수) |
| 4 | `() => { ... }` | `function` 삭제, `=>` 추가 (화살표 함수) |

- 한 번만 쓰는 함수는 다시 부를 일이 없으니 **이름이 필요 없다** → 익명 함수
- 인자 자리 안에서 정의한 함수의 이름은 밖에서 부를 수 없어서 **있으나 마나** 하다
- 모든 단계에서 그 자리에 들어간 건 **함수 하나**로 같고, 모양만 짧아진다

### 기본 모양

```javascript
(매개변수) => {
    실행할 코드
}
```

| 부분 | 뜻 |
|---|---|
| `()` | 매개변수 자리 (없으면 빈 괄호) |
| `=>` | "이건 함수다" 표시 (`function` 대신) |
| `{ }` | 함수 몸통 |

### 6-1. 화살표 함수 사용

**① 이벤트 리스너에 바로 넘기기**

```javascript
btn.addEventListener("click", () => {
    alert("버튼이 클릭됨");
});
```

→ 이 버튼 전용 동작이라 이름 없이 그 자리에서 정의해 넘기겠다

**② 코드가 한 줄이면 중괄호 생략**

```javascript
btn.addEventListener("click", () => alert("버튼이 클릭됨"));
```

→ 몸통이 한 줄이면 `{ }`를 빼고 `=>` 뒤에 바로 쓰겠다

**③ 일반 함수를 화살표 함수로 바꾸기**

```javascript
function add(n1, n2) {
    return n1 + n2;
}

const add2 = (n1, n2) => {
    return n1 + n2;
};

const add3 = (n1, n2) => n1 + n2;
```

→ `add`: 일반 함수 선언
→ `add2`: 화살표 함수를 `const` 변수에 담겠다 (함수도 값이므로 변수에 담을 수 있음)
→ `add3`: 몸통이 한 줄이면 중괄호와 `return`을 생략하고, `=>` 뒤의 값이 **자동으로 반환**된다

**④ 자동 반환 주의**

| 모양 | 반환값 |
|---|---|
| `() => 값` | 값이 자동 반환 |
| `() => { return 값; }` | `return`으로 반환 |
| `() => { 값 }` | `return` 없음 → `undefined` |

**⑤ 매개변수가 하나면 괄호도 생략 가능**

```javascript
const double = n => n * 2;
console.log(double(5));   // 10
```

→ 매개변수가 딱 하나일 때만 괄호를 뺄 수 있다 (없거나 두 개 이상이면 필수)

---

## 참고: 함수 기초 개념 복습

| 용어 | 뜻 |
|---|---|
| 정의(define) | 함수를 만들어 두는 것 (실행 X) |
| 호출(call) | 함수 이름 뒤에 `()`를 붙여 실행시키는 것 |
| 반환(return) | 결과를 호출한 자리로 돌려주는 것 + 함수를 즉시 끝냄 |
| `undefined` | `return`이 없는 함수가 자동으로 돌려주는 값 (파이썬의 `None`) |
| 콜백 함수 | 다른 함수에 넘겨져서 나중에 대신 실행되는 함수 |
| 고차 함수 | 함수를 인자로 받는 함수 (`addEventListener`, `setTimeout`) |

- `console.log`는 화면에 **보여주기만** 하고, `return`은 값을 **넘겨줘서** 다음 코드가 이어 쓸 수 있게 한다.
- 결과에 `undefined`나 `NaN`이 보이면 "어딘가 `return`을 빠뜨렸나?"를 먼저 의심하자.
