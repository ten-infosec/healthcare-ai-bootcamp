# Web API 정리 (JS Day 4)

## 1. Web API의 정의

- **Web API**는 **브라우저가 제공하는 기능**을 자바스크립트로 빌려 쓸 수 있게 해주는 도구 모음이다.
- 자바스크립트 언어 자체에는 화면 조작, 타이머, 저장소, 네트워크 요청 기능이 없다. 이런 일은 **브라우저에게 부탁**해서 브라우저가 대신 처리한다.
- 우리 코드는 브라우저라는 시스템 위에서 동작하므로, 화면·시간·저장·통신과 관련된 일은 항상 브라우저를 거친다.

| 구분 | 담당 |
|---|---|
| 자바스크립트 언어 | 변수, 함수, 조건문, 반복문, 배열 등 문법 |
| Web API (브라우저) | 화면(DOM), 이벤트, 타이머, 저장소, 네트워크 요청 |

---

## 2. Web API의 예시

### 2-1. DOM API

- **DOM**(Document Object Model): HTML 문서를 자바스크립트가 다룰 수 있도록 **객체(트리 구조)로 바꿔놓은 것**
- DOM API로 태그를 **찾고, 만들고, 바꾸고, 붙이고, 지울** 수 있다.

```javascript
// 찾기
const list = document.querySelector("#list")      // CSS 선택자로 하나 찾기 (# = id)
const btn = document.getElementById("load")       // id로 찾기

// 만들기 + 내용 넣기 + 붙이기
const li = document.createElement("li")           // 새 li 태그 만들기 (아직 화면에 없음)
li.textContent = "첫 번째 항목"                     // 태그 안 글자 바꾸기
list.appendChild(li)                              // 부모(ol) 안에 붙이기 → 화면에 보임

// 비우기
list.innerHTML = ""                               // 안쪽 HTML 전체 삭제 (부모 태그는 남음)

// 클래스 조작
li.classList.add("active")                        // 클래스 추가
li.classList.remove("active")                     // 클래스 제거
li.classList.toggle("hidden", true)               // 두 번째 값이 true면 추가, false면 제거
```

### 2-2. Event API

- 사용자의 행동(클릭, 입력, 마우스 이동 등)이 일어났을 때 **"이 함수를 실행해 줘"라고 브라우저에 등록**하는 기능
- 등록한 함수는 바로 실행되지 않고, 이벤트가 일어났을 때 **브라우저가 호출**한다 → **콜백 함수**

```javascript
// 클릭되면 화살표 함수를 실행해 달라고 등록
button.addEventListener("click", () => {
    console.log("클릭됨")
})

// 입력창에 글자가 바뀔 때마다 실행
input.addEventListener("input", () => {
    console.log(input.value)
})
```

- **이벤트 위임**: 자식 요소가 많거나 계속 새로 만들어질 때, 부모 하나에만 리스너를 달고 `event.target.closest()`로 어떤 자식이 클릭됐는지 확인하는 방식

```javascript
tbody.addEventListener("click", event => {
    const button = event.target.closest(".fav-btn")   // 클릭된 곳에서 가장 가까운 .fav-btn
    if (!button) return                                // 별 버튼이 아니면 종료 (얼리 리턴)
    console.log(button.dataset.symbol)                 // data-symbol 속성 값 읽기
})
```

### 2-3. Timer API

| 함수 | 동작 | 멈추는 법 |
|---|---|---|
| `setTimeout(함수, ms)` | ms 후 **한 번** 실행 | `clearTimeout(id)` |
| `setInterval(함수, ms)` | ms마다 **반복** 실행 | `clearInterval(id)` |

- 시간 단위는 **밀리초(ms)**, 1000ms = 1초
- 예: 15분 뒤 자동 로그아웃(setTimeout), 1초마다 가격 갱신(setInterval)

```javascript
setTimeout(() => console.log("3초 경과"), 3000)

const id = setInterval(() => console.log("1초마다"), 1000)
setTimeout(() => clearInterval(id), 5000)   // 5초 뒤 반복 중지
```

### 2-4. Storage API

- 브라우저가 제공하는 **클라이언트 측 저장소**, 데이터를 **키-값** 쌍으로 저장
- DB처럼 영구 보관이 아니라 **임시·편의 데이터** 저장용
- **사이트(도메인)마다 따로** 저장되고, 값은 **문자열로만** 저장된다

| 구분 | localStorage | sessionStorage |
|---|---|---|
| 유지 기간 | 직접 지우기 전까지 (길게) | 탭을 닫으면 삭제 (짧게) |
| 다른 탭과 공유 | 같은 사이트면 공유 | 탭마다 따로 |

```javascript
localStorage.setItem("name", "Alex")    // 저장
localStorage.getItem("name")            // "Alex"
localStorage.removeItem("name")         // 삭제 → 이후 getItem은 null
localStorage.clear()                    // 전체 삭제

// 배열·객체는 JSON 문자열로 바꿔서 저장하고, 꺼낼 때 다시 변환
localStorage.setItem("favorites", JSON.stringify(["BTCUSDT"]))
const favorites = JSON.parse(localStorage.getItem("favorites")) || []
```

- 확인 위치: 개발자 도구(F12) → **Application** → Storage → Local storage
- ⚠️ 비밀번호·개인정보 등 **민감한 정보는 저장 금지** (같은 사이트의 스크립트가 모두 읽을 수 있어 XSS 공격에 노출)

### 2-5. Fetch API

- **서버에 HTTP 요청을 보내고 응답을 받아오는** 함수
- **비동기**로 동작 → 응답을 기다리는 동안 브라우저는 다른 일(화면 그리기, 클릭 처리)을 계속한다
- `.then()`으로 "응답이 오면 이 함수를 실행해 줘"라고 등록 (메소드 체이닝)

```javascript
// GET: 데이터 가져오기 (기본값)
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())   // 응답(JSON) → 자바스크립트 데이터
    .then(data => console.log(data))     // 변환된 데이터 사용
    .catch(error => console.log(error))  // 실패 시 처리

// POST: 데이터 보내서 새로 만들기
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "python", body: "Hello, Python" })
})
    .then(response => response.json())
    .then(data => console.log(data))     // { title, body, id: 101 }
```

| 개념 | 설명 |
|---|---|
| 동기 | 한 작업이 끝나야 다음 작업 (기다리는 동안 전체가 멈춤) |
| 비동기 | 기다리는 작업은 맡겨두고 다른 일을 먼저 처리 |
| 상태 코드 | 200 성공, 201 생성됨, 404 없음, 500 서버 에러 |
| `JSON.stringify()` | 객체 → JSON 문자열 (보낼 때) |
| `response.json()` | JSON 응답 → 자바스크립트 데이터 (받을 때) |

---

## 3. 오늘 과제: 암호화폐 가격 변동 추적기

다섯 가지 Web API를 모두 사용했다.

| 기능 | 사용한 Web API | 코드 |
|---|---|---|
| 1초마다 시세 갱신 | Timer + Fetch | `setInterval(fetchCryptoData, 1000)` + `fetch(binance API)` |
| USDT 종목만 표시 | (배열 메서드) | `data.filter(item => item.symbol.endsWith("USDT"))` |
| 표 그리기 | DOM | `innerHTML = ""` → `createElement("tr")` → `appendChild` |
| 검색 | Event + DOM | `input` 이벤트 → 대문자 변환 후 `includes` 필터 |
| 관심항목 저장 | Storage + Event | 별 클릭 → `localStorage.setItem("favorites", JSON.stringify(...))` |
| 탭 전환 | Event + DOM | 탭 클릭 → `currentTab` 변경 + `classList.toggle("active")` |

### 구현하며 신경 쓴 점

1. **요청 겹침 방지**: 응답이 1초보다 늦으면 요청이 쌓이므로 `isFetching` 깃발로 진행 중이면 건너뜀 (얼리 리턴)
2. **비우고 다시 그리기**: 매초 새 데이터로 표를 갱신하므로 `cryptoList.innerHTML = ""` 후 다시 그림
3. **이벤트 위임**: 행이 매초 새로 만들어지므로 별 버튼마다 리스너를 달지 않고 `tbody` 하나에 등록
4. **빈 관심항목 안내**: 관심항목 탭에 아무것도 없으면 안내 문구 표시
5. **새로고침해도 유지**: 관심항목은 localStorage에 있으므로 브라우저를 껐다 켜도 남아 있음
