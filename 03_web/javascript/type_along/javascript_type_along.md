# JavaScript 따라치기 연습본

> 강의자료 「Javascript」의 예제·실습 36개를 순서대로 담았어요. (A. 기본 문법 → B. DOM과 이벤트 → C. Web API)
>
> 사용법
> - PART 0: 전체 예제를 처음부터 끝까지 한 번 읽기
> - PART 1: 예제별 코드를 보고, 바로 아래 빈 칸에 5번씩 받아 치기
> - PART 2: 설명만 보고 코드를 떠올려 치기 (막히면 설명 위의 코드 줄 참고)
> - PART 3: 코드와 설명을 함께 보면서 예제별로 치기
> - `.js` 예제: `node 파일명.js`(터미널) 또는 브라우저 콘솔에서 실행 / `.html` 예제: Live Preview로 열고 `F12` → Console 확인

---

# PART 0. 전체 예제 먼저 읽기

> 치기 전에 36개 예제를 위에서 아래로 한 번 훑으며 흐름을 잡으세요.

## A. JavaScript 기본 문법

### 1. JavaScript 실행 방법 — `hello.html`

```html
<body>
    <!-- 2. script 태그 안에서 실행 -->
    <script>
        console.log("Hello");
    </script>

    <!-- 3. JS 파일 분리 -->
    <script src="app.js"></script>
</body>
```

### 2. 변수: let vs. const — `variables.js`

```javascript
let age = 20;
const username = "Alex";

console.log(age);
console.log(username);

let count = 1;
count = 2;

const pi = 3.14;
// pi = 3.15 ❌
```

### 3. 자료형: number, string, boolean — `types.js`

```javascript
let a = 10;
let b = 3.14;
console.log(a + b);
console.log(typeof a);

let username = "Alex";
let message = 'Hello';
console.log(username);
console.log(message);
console.log(typeof username);

let isStudent = true;
let hasTicket = false;
console.log(isStudent);
console.log(typeof isStudent);
```

### 4. 자료형: null, undefined — `types.js`

```javascript
let selectedUser = null;
console.log(selectedUser);
console.log(typeof selectedUser); // object (JS의 오래된 특징)

let score;
console.log(score);
console.log(typeof score); // undefined

let a = null;
let b;
console.log(a == b);  // true
console.log(a === b); // false
```

### 5. 산술 연산자 · 비교 연산자 — `operators.js`

```javascript
let a = 10;
let b = 3;
console.log(a + b); // 더하기
console.log(a - b); // 빼기
console.log(a * b); // 곱하기
console.log(a / b); // 나누기

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
```

### 6. 동등/일치 · 논리 · 문자열 연산자 — `operators.js`

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false

let age = 20;
let hasId = true;
console.log(age >= 19 && hasId); // AND
console.log(age < 19 || hasId);  // OR
console.log(!hasId);             // NOT

let firstName = "Alex";
let lastName = "Kim";
console.log(firstName + " " + lastName);

console.log("10" + 1); // "101"
```

### 7. 조건문 if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

### 8. 실습: 콘솔 계산기 — `calculator.js`

```javascript
let a = 10;
let b = 5;
let operator = "+"; // "+", "-", "*", "/"

if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
} else if (operator === "*") {
    console.log(a * b);
} else if (operator === "/") {
    console.log(a / b);
} else {
    console.log("지원하지 않는 연산자입니다");
}
```

### 9. 실습: 최종 합격 판정 — `pass.js`

```javascript
let score = 88;
let attendance = 75;
let submitted = true;

if (submitted && ((score >= 70 && attendance >= 80) || score >= 90)) {
    console.log("최종 합격");
} else {
    console.log("불합격");
}
```

### 10. 반복문 for / while — `loop.js`

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```

### 11. 배열(Array)과 순회 — `array.js`

```javascript
let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers.at(-1));
console.log(numbers[3]);

let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
}

for (const [i, score] of scores.entries()) {
    console.log(i, score);
}

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

scores.forEach(score => {
    console.log(score);
});
```

### 12. 객체(Object)와 순회 — `object.js`

```javascript
let user = {
    name: "Alex",
    age: 20,
};

console.log(user.name);
console.log(user["age"]);

for (const key in user) {
    console.log(key, user[key]);
}
```

### 13. 맵(Map) — `map.js`

```javascript
const map = new Map();
map.set("name", "Alex");
map.set("age", 20);

console.log(map.get("name"));
console.log(map.size);

const map2 = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map2) {
    console.log(key, value);
}
```

### 14. 함수(Function) — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

### 15. 함수를 값처럼 다루기 — `function.js`

```javascript
function sayHello() {
    console.log("hello");
}

const f = sayHello;
f(); // hello

function run(fn) {
    fn();
}

run(sayHello);   // hello (함수 전달)
run(sayHello()); // hello 출력 후 에러 (실행 결과 전달 → fn이 undefined)
```

### 16. 실습: 반복문 기초 — `practice_loop.js`

```javascript
// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1~20 중 짝수만 출력
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### 17. 실습: 배열 + 반복문 — `practice_array.js`

```javascript
let fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers = [10, 20, 30, 40];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum);
```

### 18. 실습: 객체 다루기 — `practice_object.js`

```javascript
let user = {
    name: "Alex",
    age: 25,
    email: "alex@test.com",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
```

### 19. 실습: 함수 기초 — `practice_function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 7));

function checkPass(score) {
    if (score >= 60) {
        return "합격";
    } else {
        return "불합격";
    }
}

console.log(checkPass(75));
console.log(checkPass(50));
```

### 20. 실습: 평균 구하기 함수 — `practice_average.js`

```javascript
function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

console.log(getAverage([80, 85, 92, 97]));
```

## B. DOM과 이벤트

### 21. DOM 선택 · 내용 · 스타일 · 속성 변경 — `dom.html`

```html
<body>
    <h1 id="text">Hello</h1>
    <p class="item">one</p>
    <p class="item">two</p>
    <a href="#">link</a>

    <script>
        const el = document.getElementById("text");
        console.log(el.textContent);
        console.log(el.textContent.trim());

        document.querySelector("#text");
        document.querySelector(".item");
        document.querySelector("p");

        const items = document.querySelectorAll(".item");
        items.forEach(el => {
            console.log(el.textContent);
        });

        el.textContent = "Hello, DOM";
        el.style.color = "red";
        el.style.fontSize = "20px";

        const link = document.querySelector("a");
        link.href = "https://google.com";
    </script>
</body>
```

### 22. 이벤트 리스너 + 입력값 처리 — `input.html`

```html
<body>
    <input id="name-input" />
    <button>확인</button>
    <div id="result"></div>

    <script>
        const input = document.querySelector("#name-input");
        const button = document.querySelector("button");
        const result = document.querySelector("#result");

        button.addEventListener("click", printName);

        function printName() {
            if (input.value.trim() === "") {
                alert("이름을 입력하세요");
                return;
            }

            result.innerHTML = "";
            const welcomeText = "환영합니다, " + input.value + " 님";
            const p = document.createElement("p"); // <p></p>
            p.textContent = welcomeText;           // <p>welcomeText</p>
            result.appendChild(p);
        }
    </script>
</body>
```

### 23. 실습 1: 버튼 클릭 이벤트 — `event1.html`

```html
<body>
    <button id="btn">클릭</button>

    <script>
        const btn = document.querySelector("#btn");

        btn.addEventListener("click", function () {
            console.log("버튼 클릭됨");
        });
    </script>
</body>
```

### 24. 실습 2: 텍스트 변경하기 — `event2.html`

```html
<body>
    <h1 class="text">Hello</h1>
    <button id="change">변경</button>

    <script>
        const h1 = document.querySelector(".text");
        const button = document.querySelector("#change");

        button.addEventListener("click", function () {
            h1.textContent = "Hello JavaScript";
            h1.style.color = "red";
        });
    </script>
</body>
```

### 25. 실습 3: 실시간 입력 감지 — `event3.html`

```html
<body>
    <input type="password" placeholder="비밀번호 입력">
    <p id="result"></p>

    <script>
        const input = document.querySelector("input");
        const result = document.querySelector("#result");

        input.addEventListener("input", validatePassword);

        function validatePassword() {
            if (input.value.length < 4) {
                result.textContent = "4자리 이상 입력하세요.";
                result.style.color = "red";
            } else {
                result.textContent = "사용 가능한 비밀번호입니다.";
                result.style.color = "blue";
            }
        }
    </script>
</body>
```

### 26. 화살표 함수 — `arrow.js`

```javascript
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
};

const add3 = (a, b) => a + b;

button.addEventListener("click", function () {
    console.log("클릭됨");
});

button.addEventListener("click", () => {
    console.log("클릭됨");
});

button.addEventListener("click", () => console.log("클릭됨"));
```

### 27. 실습 4: 마우스 감지 + 호이스팅 — `event4.html`

```html
<body>
    <p id="box">마우스를 올려보세요</p>

    <script>
        const box = document.querySelector("#box");

        box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));
        box.addEventListener("mouseout", () => changeBackgroundColor("orange"));

        function changeBackgroundColor(color) {
            box.style.backgroundColor = color;
        }
    </script>
</body>
```

### 28. 실습 5: 스타일 변경 — `event5.html`

```html
<body>
    <p id="box">색상 변경</p>
    <button id="color">변경</button>

    <script>
        const box = document.querySelector("#box");
        const btn = document.querySelector("#color");

        btn.addEventListener("click", function () {
            box.style.color = "orange";
            box.style.fontSize = "20px";
        });
    </script>
</body>
```

### 29. 실습 6: 종합 실습 (합격 판정) — `event6.html`

```html
<body>
    <input id="score" placeholder="점수 입력" />
    <button id="check">확인</button>
    <p id="result"></p>

    <script>
        const scoreInput = document.querySelector("#score");
        const button = document.querySelector("#check");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            const score = Number(scoreInput.value);

            if (score >= 60) {
                result.textContent = "합격";
            } else {
                result.textContent = "불합격";
            }
        });
    </script>
</body>
```

## C. Web API

### 30. Timer API: setTimeout · setInterval · clearInterval — `timer.js`

```javascript
setTimeout(function () {
    console.log("3초 후 실행");
}, 3000);

setInterval(function () {
    console.log("1초마다 실행");
}, 1000);

const timerId = setInterval(function () {
    console.log("실행");
}, 1000);

clearInterval(timerId);
```

### 31. 실습: 5초 카운트다운 타이머 — `countdown.html`

```html
<body>
    <button id="start">카운트다운 시작</button>
    <p id="result"></p>

    <script>
        const startBtn = document.querySelector("#start");
        const timeEl = document.querySelector("#result");

        let time = 5;
        let timerId = null;

        startBtn.addEventListener("click", function () {
            if (timerId !== null) return;
            timeEl.textContent = time;

            timerId = setInterval(function () {
                time--;
                if (time === 0) {
                    timeEl.textContent = "끝";
                    clearInterval(timerId);
                    timerId = null;
                } else {
                    timeEl.textContent = time;
                }
            }, 1000);
        });
    </script>
</body>
```

### 32. Storage API: localStorage · JSON · sessionStorage — `storage.js`

```javascript
localStorage.setItem("name", "Alex");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

const user = { name: "Alex", age: 20 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);

sessionStorage.setItem("name", "Alex");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();
```

### 33. 실습: 입력값 저장 (새로고침 유지) — `save.html`

```html
<body>
    <input id="name" placeholder="이름 입력" />
    <button id="save">저장</button>
    <p id="result"></p>

    <script>
        const input = document.querySelector("#name");
        const button = document.querySelector("#save");
        const result = document.querySelector("#result");

        const savedName = localStorage.getItem("name");
        if (savedName) {
            result.textContent = savedName;
        }

        button.addEventListener("click", function () {
            localStorage.setItem("name", input.value);
            result.textContent = input.value;
        });
    </script>
</body>
```

### 34. Fetch API: GET 요청 — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

### 35. 실습: posts 5개 title 불러오기 — `posts.html`

```html
<body>
    <button id="load">불러오기</button>
    <ul id="list"></ul>

    <script>
        const button = document.querySelector("#load");
        const list = document.querySelector("#list");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(posts => {
                    list.innerHTML = "";
                    for (const post of posts.slice(0, 5)) {
                        const li = document.createElement("li");
                        li.textContent = post.title;
                        list.appendChild(li);
                    }
                });
        });
    </script>
</body>
```

### 36. Fetch API: POST 요청 — `post.html`

```html
<body>
    <input type="email" id="email">
    <button id="send">전송</button>
    <pre id="result"></pre>

    <script>
        const input = document.querySelector("#email");
        const button = document.querySelector("#send");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: input.value }),
            })
                .then(res => res.json())
                .then(data => {
                    result.textContent = JSON.stringify(data, null, 2); // 2 → 들여쓰기 (가독성)
                });
        });
    </script>
</body>
```

---

# PART 1. 예제별 따라치기 (예제마다 5회)

> 위의 코드를 보고 바로 아래 빈 칸에 5번 받아 치세요.

## A. JavaScript 기본 문법

### 1-1. JavaScript 실행 방법 — `hello.html`

```html
<body>
    <!-- 2. script 태그 안에서 실행 -->
    <script>
        console.log("Hello");
    </script>

    <!-- 3. JS 파일 분리 -->
    <script src="app.js"></script>
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

### 1-2. 변수: let vs. const — `variables.js`

```javascript
let age = 20;
const username = "Alex";

console.log(age);
console.log(username);

let count = 1;
count = 2;

const pi = 3.14;
// pi = 3.15 ❌
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-3. 자료형: number, string, boolean — `types.js`

```javascript
let a = 10;
let b = 3.14;
console.log(a + b);
console.log(typeof a);

let username = "Alex";
let message = 'Hello';
console.log(username);
console.log(message);
console.log(typeof username);

let isStudent = true;
let hasTicket = false;
console.log(isStudent);
console.log(typeof isStudent);
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-4. 자료형: null, undefined — `types.js`

```javascript
let selectedUser = null;
console.log(selectedUser);
console.log(typeof selectedUser); // object (JS의 오래된 특징)

let score;
console.log(score);
console.log(typeof score); // undefined

let a = null;
let b;
console.log(a == b);  // true
console.log(a === b); // false
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-5. 산술 연산자 · 비교 연산자 — `operators.js`

```javascript
let a = 10;
let b = 3;
console.log(a + b); // 더하기
console.log(a - b); // 빼기
console.log(a * b); // 곱하기
console.log(a / b); // 나누기

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-6. 동등/일치 · 논리 · 문자열 연산자 — `operators.js`

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false

let age = 20;
let hasId = true;
console.log(age >= 19 && hasId); // AND
console.log(age < 19 || hasId);  // OR
console.log(!hasId);             // NOT

let firstName = "Alex";
let lastName = "Kim";
console.log(firstName + " " + lastName);

console.log("10" + 1); // "101"
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-7. 조건문 if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-8. 실습: 콘솔 계산기 — `calculator.js`

```javascript
let a = 10;
let b = 5;
let operator = "+"; // "+", "-", "*", "/"

if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
} else if (operator === "*") {
    console.log(a * b);
} else if (operator === "/") {
    console.log(a / b);
} else {
    console.log("지원하지 않는 연산자입니다");
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-9. 실습: 최종 합격 판정 — `pass.js`

```javascript
let score = 88;
let attendance = 75;
let submitted = true;

if (submitted && ((score >= 70 && attendance >= 80) || score >= 90)) {
    console.log("최종 합격");
} else {
    console.log("불합격");
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-10. 반복문 for / while — `loop.js`

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-11. 배열(Array)과 순회 — `array.js`

```javascript
let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers.at(-1));
console.log(numbers[3]);

let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
}

for (const [i, score] of scores.entries()) {
    console.log(i, score);
}

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

scores.forEach(score => {
    console.log(score);
});
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-12. 객체(Object)와 순회 — `object.js`

```javascript
let user = {
    name: "Alex",
    age: 20,
};

console.log(user.name);
console.log(user["age"]);

for (const key in user) {
    console.log(key, user[key]);
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-13. 맵(Map) — `map.js`

```javascript
const map = new Map();
map.set("name", "Alex");
map.set("age", 20);

console.log(map.get("name"));
console.log(map.size);

const map2 = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map2) {
    console.log(key, value);
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-14. 함수(Function) — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-15. 함수를 값처럼 다루기 — `function.js`

```javascript
function sayHello() {
    console.log("hello");
}

const f = sayHello;
f(); // hello

function run(fn) {
    fn();
}

run(sayHello);   // hello (함수 전달)
run(sayHello()); // hello 출력 후 에러 (실행 결과 전달 → fn이 undefined)
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-16. 실습: 반복문 기초 — `practice_loop.js`

```javascript
// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1~20 중 짝수만 출력
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-17. 실습: 배열 + 반복문 — `practice_array.js`

```javascript
let fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers = [10, 20, 30, 40];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum);
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-18. 실습: 객체 다루기 — `practice_object.js`

```javascript
let user = {
    name: "Alex",
    age: 25,
    email: "alex@test.com",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-19. 실습: 함수 기초 — `practice_function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 7));

function checkPass(score) {
    if (score >= 60) {
        return "합격";
    } else {
        return "불합격";
    }
}

console.log(checkPass(75));
console.log(checkPass(50));
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-20. 실습: 평균 구하기 함수 — `practice_average.js`

```javascript
function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

console.log(getAverage([80, 85, 92, 97]));
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

## B. DOM과 이벤트

### 1-21. DOM 선택 · 내용 · 스타일 · 속성 변경 — `dom.html`

```html
<body>
    <h1 id="text">Hello</h1>
    <p class="item">one</p>
    <p class="item">two</p>
    <a href="#">link</a>

    <script>
        const el = document.getElementById("text");
        console.log(el.textContent);
        console.log(el.textContent.trim());

        document.querySelector("#text");
        document.querySelector(".item");
        document.querySelector("p");

        const items = document.querySelectorAll(".item");
        items.forEach(el => {
            console.log(el.textContent);
        });

        el.textContent = "Hello, DOM";
        el.style.color = "red";
        el.style.fontSize = "20px";

        const link = document.querySelector("a");
        link.href = "https://google.com";
    </script>
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

### 1-22. 이벤트 리스너 + 입력값 처리 — `input.html`

```html
<body>
    <input id="name-input" />
    <button>확인</button>
    <div id="result"></div>

    <script>
        const input = document.querySelector("#name-input");
        const button = document.querySelector("button");
        const result = document.querySelector("#result");

        button.addEventListener("click", printName);

        function printName() {
            if (input.value.trim() === "") {
                alert("이름을 입력하세요");
                return;
            }

            result.innerHTML = "";
            const welcomeText = "환영합니다, " + input.value + " 님";
            const p = document.createElement("p"); // <p></p>
            p.textContent = welcomeText;           // <p>welcomeText</p>
            result.appendChild(p);
        }
    </script>
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

### 1-23. 실습 1: 버튼 클릭 이벤트 — `event1.html`

```html
<body>
    <button id="btn">클릭</button>

    <script>
        const btn = document.querySelector("#btn");

        btn.addEventListener("click", function () {
            console.log("버튼 클릭됨");
        });
    </script>
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

### 1-24. 실습 2: 텍스트 변경하기 — `event2.html`

```html
<body>
    <h1 class="text">Hello</h1>
    <button id="change">변경</button>

    <script>
        const h1 = document.querySelector(".text");
        const button = document.querySelector("#change");

        button.addEventListener("click", function () {
            h1.textContent = "Hello JavaScript";
            h1.style.color = "red";
        });
    </script>
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

### 1-25. 실습 3: 실시간 입력 감지 — `event3.html`

```html
<body>
    <input type="password" placeholder="비밀번호 입력">
    <p id="result"></p>

    <script>
        const input = document.querySelector("input");
        const result = document.querySelector("#result");

        input.addEventListener("input", validatePassword);

        function validatePassword() {
            if (input.value.length < 4) {
                result.textContent = "4자리 이상 입력하세요.";
                result.style.color = "red";
            } else {
                result.textContent = "사용 가능한 비밀번호입니다.";
                result.style.color = "blue";
            }
        }
    </script>
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

### 1-26. 화살표 함수 — `arrow.js`

```javascript
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
};

const add3 = (a, b) => a + b;

button.addEventListener("click", function () {
    console.log("클릭됨");
});

button.addEventListener("click", () => {
    console.log("클릭됨");
});

button.addEventListener("click", () => console.log("클릭됨"));
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-27. 실습 4: 마우스 감지 + 호이스팅 — `event4.html`

```html
<body>
    <p id="box">마우스를 올려보세요</p>

    <script>
        const box = document.querySelector("#box");

        box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));
        box.addEventListener("mouseout", () => changeBackgroundColor("orange"));

        function changeBackgroundColor(color) {
            box.style.backgroundColor = color;
        }
    </script>
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

### 1-28. 실습 5: 스타일 변경 — `event5.html`

```html
<body>
    <p id="box">색상 변경</p>
    <button id="color">변경</button>

    <script>
        const box = document.querySelector("#box");
        const btn = document.querySelector("#color");

        btn.addEventListener("click", function () {
            box.style.color = "orange";
            box.style.fontSize = "20px";
        });
    </script>
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

### 1-29. 실습 6: 종합 실습 (합격 판정) — `event6.html`

```html
<body>
    <input id="score" placeholder="점수 입력" />
    <button id="check">확인</button>
    <p id="result"></p>

    <script>
        const scoreInput = document.querySelector("#score");
        const button = document.querySelector("#check");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            const score = Number(scoreInput.value);

            if (score >= 60) {
                result.textContent = "합격";
            } else {
                result.textContent = "불합격";
            }
        });
    </script>
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

## C. Web API

### 1-30. Timer API: setTimeout · setInterval · clearInterval — `timer.js`

```javascript
setTimeout(function () {
    console.log("3초 후 실행");
}, 3000);

setInterval(function () {
    console.log("1초마다 실행");
}, 1000);

const timerId = setInterval(function () {
    console.log("실행");
}, 1000);

clearInterval(timerId);
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-31. 실습: 5초 카운트다운 타이머 — `countdown.html`

```html
<body>
    <button id="start">카운트다운 시작</button>
    <p id="result"></p>

    <script>
        const startBtn = document.querySelector("#start");
        const timeEl = document.querySelector("#result");

        let time = 5;
        let timerId = null;

        startBtn.addEventListener("click", function () {
            if (timerId !== null) return;
            timeEl.textContent = time;

            timerId = setInterval(function () {
                time--;
                if (time === 0) {
                    timeEl.textContent = "끝";
                    clearInterval(timerId);
                    timerId = null;
                } else {
                    timeEl.textContent = time;
                }
            }, 1000);
        });
    </script>
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

### 1-32. Storage API: localStorage · JSON · sessionStorage — `storage.js`

```javascript
localStorage.setItem("name", "Alex");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

const user = { name: "Alex", age: 20 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);

sessionStorage.setItem("name", "Alex");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-33. 실습: 입력값 저장 (새로고침 유지) — `save.html`

```html
<body>
    <input id="name" placeholder="이름 입력" />
    <button id="save">저장</button>
    <p id="result"></p>

    <script>
        const input = document.querySelector("#name");
        const button = document.querySelector("#save");
        const result = document.querySelector("#result");

        const savedName = localStorage.getItem("name");
        if (savedName) {
            result.textContent = savedName;
        }

        button.addEventListener("click", function () {
            localStorage.setItem("name", input.value);
            result.textContent = input.value;
        });
    </script>
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

### 1-34. Fetch API: GET 요청 — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

**1회차**

```javascript

```

**2회차**

```javascript

```

**3회차**

```javascript

```

**4회차**

```javascript

```

**5회차**

```javascript

```

### 1-35. 실습: posts 5개 title 불러오기 — `posts.html`

```html
<body>
    <button id="load">불러오기</button>
    <ul id="list"></ul>

    <script>
        const button = document.querySelector("#load");
        const list = document.querySelector("#list");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(posts => {
                    list.innerHTML = "";
                    for (const post of posts.slice(0, 5)) {
                        const li = document.createElement("li");
                        li.textContent = post.title;
                        list.appendChild(li);
                    }
                });
        });
    </script>
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

### 1-36. Fetch API: POST 요청 — `post.html`

```html
<body>
    <input type="email" id="email">
    <button id="send">전송</button>
    <pre id="result"></pre>

    <script>
        const input = document.querySelector("#email");
        const button = document.querySelector("#send");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: input.value }),
            })
                .then(res => res.json())
                .then(data => {
                    result.textContent = JSON.stringify(data, null, 2); // 2 → 들여쓰기 (가독성)
                });
        });
    </script>
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

## A. JavaScript 기본 문법

### 2-1. JavaScript 실행 방법 — `hello.html`

`<script>`
→ HTML 안에서 JavaScript를 실행하겠다고 선언하겠다

`console.log("Hello");`
→ 개발자 도구 콘솔에 Hello를 출력하겠다

`</script>`
→ script 영역을 닫겠다

`<script src="app.js"></script>`
→ 별도 파일 app.js의 코드를 불러와 실행하겠다

```html

```

### 2-2. 변수: let vs. const — `variables.js`

`let age = 20;`
→ 값을 바꿀 수 있는 변수 age에 20을 저장하겠다

`const username = "Alex";`
→ 값을 바꿀 수 없는 변수 username에 "Alex"를 저장하겠다

`console.log(age);`
→ 저장한 값을 출력하겠다

`count = 2;`
→ let 변수는 다시 대입할 수 있다

`// pi = 3.15 ❌`
→ const 변수는 다시 대입하면 에러

```javascript

```

### 2-3. 자료형: number, string, boolean — `types.js`

`let a = 10; / let b = 3.14;`
→ 정수와 실수 모두 number 자료형

`console.log(typeof a);`
→ 변수의 자료형을 확인하겠다 → "number"

`let username = "Alex"; / let message = 'Hello';`
→ 따옴표(큰/작은)로 감싼 값은 string

`let isStudent = true; / let hasTicket = false;`
→ 참/거짓은 boolean (조건문에서 주로 사용)

`console.log(typeof isStudent);`
→ → "boolean"

```javascript

```

### 2-4. 자료형: null, undefined — `types.js`

`let selectedUser = null;`
→ 개발자가 일부러 "비어 있음"을 넣겠다

`console.log(typeof selectedUser);`
→ → "object" (JavaScript의 오래된 버그 같은 특징)

`let score;`
→ 값을 안 넣고 선언만 → 자동으로 undefined

`console.log(a == b);`
→ 값만 비교 → true

`console.log(a === b);`
→ 값 + 타입 비교 → false

```javascript

```

### 2-5. 산술 연산자 · 비교 연산자 — `operators.js`

`console.log(a + b);`
→ 더하기 → 13

`console.log(a - b); / a * b / a / b`
→ 빼기, 곱하기, 나누기

`console.log(10 > 5);`
→ 크기 비교 → 결과는 boolean (true)

`10 >= 10 / 10 <= 9`
→ 이상 / 이하 비교

```javascript

```

### 2-6. 동등/일치 · 논리 · 문자열 연산자 — `operators.js`

`console.log(10 == "10");`
→ 값만 비교 (타입 자동 변환) → true

`console.log(10 === "10");`
→ 값 + 타입 비교 → false (권장)

`age >= 19 && hasId`
→ AND: 둘 다 참이어야 참

`age < 19 || hasId`
→ OR: 하나만 참이어도 참

`!hasId`
→ NOT: 참/거짓 뒤집기

`firstName + " " + lastName`
→ `+`로 문자열 연결 → "Alex Kim"

`"10" + 1`
→ 문자열 + 숫자 → 숫자가 문자열로 바뀌어 "101"

```javascript

```

### 2-7. 조건문 if / else — `condition.js`

`if (age >= 19) {`
→ 조건이 true면 아래 블록을 실행하겠다

`console.log("성인");`
→ 조건이 참일 때 실행

`} else {`
→ 조건이 false일 때 실행할 블록

`console.log("미성년자");`
→ 조건이 거짓일 때 실행

```javascript

```

### 2-8. 실습: 콘솔 계산기 — `calculator.js`

`let operator = "+";`
→ 연산자를 문자열로 정하겠다 (입력 대신 변수로)

`if (operator === "+") {`
→ 연산자가 + 이면 더하기

`} else if (operator === "-") {`
→ 아니고 - 이면 빼기 (조건을 여러 개 이어 붙이기)

`} else {`
→ 어디에도 해당 안 되면 안내 문구

```javascript

```

### 2-9. 실습: 최종 합격 판정 — `pass.js`

`let submitted = true;`
→ 과제 제출 여부

`submitted && ( … )`
→ 과제 제출은 무조건 필요

`(score >= 70 && attendance >= 80)`
→ 점수 70 이상 그리고 출석 80 이상

`|| score >= 90`
→ 또는 점수 90 이상이면 출석 무시

```javascript

```

### 2-10. 반복문 for / while — `loop.js`

`for (let i = 1; i <= 3; i++) {`
→ 초기값 1, i가 3 이하인 동안, 한 번 돌 때마다 1씩 증가하며 반복

`console.log(i);`
→ 반복할 때마다 i 출력

`while (i < 3) {`
→ 조건이 true인 동안 반복

`i++;`
→ i를 1 늘리기 (없으면 무한 루프!)

```javascript

```

### 2-11. 배열(Array)과 순회 — `array.js`

`let numbers = [10, 20, 30];`
→ 여러 값을 순서대로 묶은 배열

`numbers[0] / numbers.at(-1) / numbers[3]`
→ 첫 번째(10) / 마지막(30) / 없는 칸(undefined)

`for (const score of scores) {`
→ for...of: 값을 하나씩 꺼내 반복

`for (const [i, score] of scores.entries()) {`
→ entries: 인덱스와 값을 함께 꺼내기

`for (let i = 0; i < scores.length; i++) {`
→ 인덱스로 순회 (length = 개수)

`scores.forEach(score => { … });`
→ forEach: 요소마다 함수 실행 (break/continue 불가)

```javascript

```

### 2-12. 객체(Object)와 순회 — `object.js`

`let user = { name: "Alex", age: 20, };`
→ 이름(key)과 값을 묶은 객체를 만들겠다

`user.name`
→ 점(.)으로 값 꺼내기

`user["age"]`
→ 대괄호에 key 문자열로 꺼내기

`for (const key in user) {`
→ for...in: key를 하나씩 꺼내 반복

`console.log(key, user[key]);`
→ key와 그 값 출력

```javascript

```

### 2-13. 맵(Map) — `map.js`

`const map = new Map();`
→ 빈 Map을 만들겠다

`map.set("name", "Alex");`
→ key–value 쌍을 넣겠다

`map.get("name") / map.size`
→ 값 꺼내기 / 저장된 개수

`new Map([["a", 1], ["b", 2]])`
→ 처음부터 쌍 목록으로 만들기

`for (const [key, value] of map2) {`
→ key와 value를 함께 꺼내 반복

```javascript

```

### 2-14. 함수(Function) — `function.js`

`function add(a, b) {`
→ 매개변수 a, b를 받는 add 함수를 정의하겠다

`return a + b;`
→ 결과를 돌려주고 함수를 끝내겠다

`console.log(add(3, 5));`
→ 함수를 호출해 결과(8) 출력

```javascript

```

### 2-15. 함수를 값처럼 다루기 — `function.js`

`const f = sayHello;`
→ 함수를 변수에 담겠다 (괄호 없음 = 실행 안 함)

`f();`
→ 변수로 함수 호출

`function run(fn) { fn(); }`
→ 함수를 인자로 받아 실행하는 함수

`run(sayHello);`
→ 함수 자체를 전달 → run 안에서 실행

`run(sayHello());`
→ 먼저 실행한 결과(undefined)를 전달 → 에러

```javascript

```

### 2-16. 실습: 반복문 기초 — `practice_loop.js`

`for (let i = 1; i <= 10; i++) {`
→ 1부터 10까지 반복

`for (let i = 1; i <= 20; i++) {`
→ 1부터 20까지 반복

`if (i % 2 === 0) {`
→ 2로 나눈 나머지가 0이면(짝수) 출력

```javascript

```

### 2-17. 실습: 배열 + 반복문 — `practice_array.js`

`for (const fruit of fruits) {`
→ for...of로 모든 값 출력

`for (let i = 0; i < fruits.length; i++) {`
→ 인덱스 for문으로 같은 결과

`let sum = 0;`
→ 합계를 담을 변수를 0으로 시작

`sum += num;`
→ sum = sum + num 의 줄임

`console.log(sum);`
→ 반복이 끝난 뒤 합계(100) 출력

```javascript

```

### 2-18. 실습: 객체 다루기 — `practice_object.js`

`let user = { … };`
→ 이름, 나이, 이메일을 담은 객체

`email: "alex@test.com",`
→ 마지막 항목 뒤 쉼표도 허용

`console.log(user.name);`
→ 점으로 각 값 출력

```javascript

```

### 2-19. 실습: 함수 기초 — `practice_function.js`

`function add(a, b) { return a + b; }`
→ 두 숫자를 더해 돌려주는 함수

`function checkPass(score) {`
→ 점수를 받는 함수

`if (score >= 60) { return "합격"; }`
→ 60점 이상이면 "합격" 반환

`else { return "불합격"; }`
→ 그 외는 "불합격" 반환

`checkPass(75) / checkPass(50)`
→ → 합격 / 불합격

```javascript

```

### 2-20. 실습: 평균 구하기 함수 — `practice_average.js`

`if (scores.length === 0) { return 0; }`
→ 빈 배열이면 0을 돌려주고 끝 (0으로 나누기 방지)

`let sum = 0; for (…) { sum += score; }`
→ 합계 구하기

`return sum / scores.length;`
→ 합계 ÷ 개수 = 평균 반환

`getAverage([80, 85, 92, 97])`
→ → 88.5

```javascript

```

## B. DOM과 이벤트

### 2-21. DOM 선택 · 내용 · 스타일 · 속성 변경 — `dom.html`

`const el = document.getElementById("text");`
→ id가 text인 요소를 찾겠다

`el.textContent / el.textContent.trim()`
→ 요소의 글자 / 앞뒤 공백 제거한 글자

`document.querySelector("#text" | ".item" | "p")`
→ CSS 선택자로 **첫 번째** 요소 1개 선택 (없으면 null)

`document.querySelectorAll(".item")`
→ 선택자에 맞는 요소 **전부** (NodeList)

`items.forEach(el => { … });`
→ 찾은 요소마다 글자 출력

`el.textContent = "Hello, DOM";`
→ 글자 내용을 바꾸겠다

`el.style.color = "red"; / el.style.fontSize = "20px";`
→ 스타일 바꾸기 (CSS의 font-size → fontSize)

`link.href = "https://google.com";`
→ 속성 값을 바꾸겠다

```html

```

### 2-22. 이벤트 리스너 + 입력값 처리 — `input.html`

`button.addEventListener("click", printName);`
→ 버튼을 클릭하면 printName 함수를 실행하겠다 (함수 자체를 전달)

`if (input.value.trim() === "") {`
→ 입력값이 비어 있으면

`alert("이름을 입력하세요"); return;`
→ 경고창을 띄우고 함수를 끝내겠다

`result.innerHTML = "";`
→ 이전 결과를 지우겠다

`const p = document.createElement("p");`
→ 새 p 요소를 만들겠다

`p.textContent = welcomeText;`
→ 만든 p에 글자를 넣겠다

`result.appendChild(p);`
→ result 안에 p를 붙여 화면에 보이게 하겠다

```html

```

### 2-23. 실습 1: 버튼 클릭 이벤트 — `event1.html`

`const btn = document.querySelector("#btn");`
→ id가 btn인 버튼을 찾겠다

`btn.addEventListener("click", function () {`
→ 클릭되면 이 함수를 실행하겠다 (이름 없는 함수)

`console.log("버튼 클릭됨");`
→ 콘솔에 출력

```html

```

### 2-24. 실습 2: 텍스트 변경하기 — `event2.html`

`const h1 = document.querySelector(".text");`
→ class가 text인 요소를 찾겠다

`h1.textContent = "Hello JavaScript";`
→ 클릭하면 글자를 바꾸겠다

`h1.style.color = "red";`
→ 색상을 빨간색으로 바꾸겠다

```html

```

### 2-25. 실습 3: 실시간 입력 감지 — `event3.html`

`input.addEventListener("input", validatePassword);`
→ 글자를 칠 때마다(input 이벤트) 검사 함수를 실행하겠다

`if (input.value.length < 4) {`
→ 입력한 글자 수가 4 미만이면

`result.textContent = "4자리 이상 입력하세요.";`
→ 빨간 안내 문구

`} else { … "사용 가능한 비밀번호입니다." … "blue" }`
→ 4자 이상이면 파란 안내 문구

```html

```

### 2-26. 화살표 함수 — `arrow.js`

`const add2 = (a, b) => { return a + b; };`
→ function 대신 `=>`로 함수 정의

`const add3 = (a, b) => a + b;`
→ 본문이 한 줄이면 `{}`와 `return` 생략 가능

`button.addEventListener("click", () => { … });`
→ 이벤트 리스너에서 화살표 함수 사용

`() => console.log("클릭됨")`
→ 가장 짧은 형태

```javascript

```

### 2-27. 실습 4: 마우스 감지 + 호이스팅 — `event4.html`

`box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));`
→ 마우스를 올리면 하늘색으로 (인자를 넘기려고 화살표 함수로 감쌈)

`box.addEventListener("mouseout", () => changeBackgroundColor("orange"));`
→ 마우스를 내리면 주황색으로

`function changeBackgroundColor(color) {`
→ 색을 매개변수로 받아 배경색을 바꾸는 함수

`box.style.backgroundColor = color;`
→ 배경색 변경

```html

```

### 2-28. 실습 5: 스타일 변경 — `event5.html`

`btn.addEventListener("click", function () {`
→ 버튼 클릭 시 실행

`box.style.color = "orange";`
→ 글자색 주황

`box.style.fontSize = "20px";`
→ 글자 크기 20px

```html

```

### 2-29. 실습 6: 종합 실습 (합격 판정) — `event6.html`

`const score = Number(scoreInput.value);`
→ 입력값(문자열)을 숫자로 바꾸겠다

`if (score >= 60) {`
→ 60점 이상이면

`result.textContent = "합격";`
→ 화면에 합격 표시

`} else { result.textContent = "불합격"; }`
→ 그 외 불합격 표시

```html

```

## C. Web API

### 2-30. Timer API: setTimeout · setInterval · clearInterval — `timer.js`

`setTimeout(function () { … }, 3000);`
→ 3000ms(3초) 뒤에 한 번 실행하겠다

`setInterval(function () { … }, 1000);`
→ 1000ms(1초)마다 반복 실행하겠다

`const timerId = setInterval(…);`
→ 타이머를 구분하는 번호를 받아 두겠다

`clearInterval(timerId);`
→ 그 번호의 반복 타이머를 멈추겠다

```javascript

```

### 2-31. 실습: 5초 카운트다운 타이머 — `countdown.html`

`let timerId = null;`
→ 아직 타이머가 없다는 표시

`if (timerId !== null) return;`
→ 이미 돌고 있으면 또 시작하지 않겠다 (중복 방지)

`timerId = setInterval(function () { … }, 1000);`
→ 1초마다 실행하는 타이머를 시작하고 번호 저장

`time--;`
→ 남은 시간 1 줄이기

`if (time === 0) { … clearInterval(timerId); timerId = null; }`
→ 0이 되면 "끝" 표시 후 타이머 멈추고 초기화

`else { timeEl.textContent = time; }`
→ 아니면 남은 시간 표시

```html

```

### 2-32. Storage API: localStorage · JSON · sessionStorage — `storage.js`

`localStorage.setItem("name", "Alex");`
→ key "name"에 "Alex"를 저장하겠다

`getItem / removeItem / clear`
→ 꺼내기 / 하나 지우기 / 전부 지우기

`JSON.stringify(user)`
→ 객체를 문자열로 바꿔 저장 (Storage는 문자열만 저장)

`JSON.parse(localStorage.getItem("user"))`
→ 꺼낸 문자열을 다시 객체로 바꾸겠다

`sessionStorage.setItem(…)`
→ 사용법은 같고, 탭을 닫으면 사라짐

```javascript

```

### 2-33. 실습: 입력값 저장 (새로고침 유지) — `save.html`

`const savedName = localStorage.getItem("name");`
→ 페이지가 열릴 때 저장된 이름을 꺼내겠다

`if (savedName) { result.textContent = savedName; }`
→ 저장된 값이 있으면 화면에 보여 주겠다 (없으면 null → falsy)

`localStorage.setItem("name", input.value);`
→ 버튼을 누르면 입력값을 저장

`result.textContent = input.value;`
→ 저장한 값을 바로 화면에 표시

```html

```

### 2-34. Fetch API: GET 요청 — `fetch.js`

`fetch("https://jsonplaceholder.typicode.com/posts")`
→ 서버에 GET 요청을 보내겠다

`.then(response => response.json())`
→ 응답이 오면 JSON을 해석하겠다

`.then(data => { console.log(data); });`
→ 해석이 끝난 실제 데이터를 사용하겠다

```javascript

```

### 2-35. 실습: posts 5개 title 불러오기 — `posts.html`

`button.addEventListener("click", function () { fetch(…) … });`
→ 버튼을 누르면 서버에서 글 목록을 가져오겠다

`list.innerHTML = "";`
→ 기존 목록 비우기 (여러 번 눌러도 중복 안 되게)

`for (const post of posts.slice(0, 5)) {`
→ 앞에서 5개만 잘라 반복

`const li = document.createElement("li"); li.textContent = post.title;`
→ li를 만들고 글 제목을 넣겠다

`list.appendChild(li);`
→ 목록에 붙이기

```html

```

### 2-36. Fetch API: POST 요청 — `post.html`

`fetch(url, { … })`
→ 두 번째 인자로 요청 옵션을 주겠다

`method: "POST",`
→ POST 방식으로 보내겠다

`headers: { "Content-Type": "application/json" },`
→ 본문이 JSON 형식이라고 알리겠다

`body: JSON.stringify({ email: input.value }),`
→ 입력값을 JSON 문자열로 바꿔 본문에 담겠다

`JSON.stringify(data, null, 2)`
→ 응답을 들여쓰기 2칸으로 보기 좋게 문자열화

```html

```

---

# PART 3. 코드 + 설명 함께 보며 치기

## A. JavaScript 기본 문법

### 3-1. JavaScript 실행 방법 — `hello.html`

```html
<body>
    <!-- 2. script 태그 안에서 실행 -->
    <script>
        console.log("Hello");
    </script>

    <!-- 3. JS 파일 분리 -->
    <script src="app.js"></script>
</body>
```

→ 1. 브라우저 개발자 도구(`F12` → Console)에서 `console.log(1 + 2);`를 바로 실행해 볼 수 있다
→ 2. `<script>` 태그: 브라우저가 HTML을 읽다가 만나면 JS 실행
→ 3. 파일 분리: `app.js`에 `console.log("분리된 JS 파일");`처럼 코드만 따로 저장
→ 4. Node.js: 터미널에서 `node app.js` → 브라우저 없이 실행 (`node -v`, `npm -v`로 설치 확인)

```html

```

### 3-2. 변수: let vs. const — `variables.js`

```javascript
let age = 20;
const username = "Alex";

console.log(age);
console.log(username);

let count = 1;
count = 2;

const pi = 3.14;
// pi = 3.15 ❌
```

→ 변수: 값을 저장해 두고 재사용하는 공간
→ `let`: 값 변경 가능 / `const`: 변경 불가 → **기본은 const, 바꿔야 할 때만 let**
→ `//`: JavaScript 한 줄 주석

```javascript

```

### 3-3. 자료형: number, string, boolean — `types.js`

```javascript
let a = 10;
let b = 3.14;
console.log(a + b);
console.log(typeof a);

let username = "Alex";
let message = 'Hello';
console.log(username);
console.log(message);
console.log(typeof username);

let isStudent = true;
let hasTicket = false;
console.log(isStudent);
console.log(typeof isStudent);
```

→ `number`: 정수·실수 구분 없음
→ `string`: `" "` 또는 `' '`로 감싼 문자열
→ `boolean`: `true` / `false`
→ `typeof 값`: 자료형을 문자열로 알려 준다

> 참고: 강의 슬라이드(16쪽)의 `typeof isAdult`는 선언하지 않은 변수라, 위에서 선언한 `isStudent`로 고쳤어요.

```javascript

```

### 3-4. 자료형: null, undefined — `types.js`

```javascript
let selectedUser = null;
console.log(selectedUser);
console.log(typeof selectedUser); // object (JS의 오래된 특징)

let score;
console.log(score);
console.log(typeof score); // undefined

let a = null;
let b;
console.log(a == b);  // true
console.log(a === b); // false
```

→ `null`: 비어 있다고 **명시**한 값
→ `undefined`: 아직 **정해지지 않은** 값 (자동 설정)

```javascript

```

### 3-5. 산술 연산자 · 비교 연산자 — `operators.js`

```javascript
let a = 10;
let b = 3;
console.log(a + b); // 더하기
console.log(a - b); // 빼기
console.log(a * b); // 곱하기
console.log(a / b); // 나누기

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
```

→ 산술 연산자: `+` `-` `*` `/` (나머지는 `%`)
→ 비교 연산자의 결과는 항상 `true` / `false`

```javascript

```

### 3-6. 동등/일치 · 논리 · 문자열 연산자 — `operators.js`

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false

let age = 20;
let hasId = true;
console.log(age >= 19 && hasId); // AND
console.log(age < 19 || hasId);  // OR
console.log(!hasId);             // NOT

let firstName = "Alex";
let lastName = "Kim";
console.log(firstName + " " + lastName);

console.log("10" + 1); // "101"
```

→ **비교는 항상 `===` 사용** (`==`는 타입 변환 때문에 헷갈림)
→ JS는 타입 변환이 자동이라, Python(에러 발생)보다 주의가 필요하다

```javascript

```

### 3-7. 조건문 if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

→ 조건식 결과는 boolean으로 평가 / `{}` 블록 단위로 실행 범위 결정 / `else`는 선택
→ falsy 6개: `false`, `0`, `""`, `null`, `undefined`, `NaN` → 나머지는 모두 truthy
→ 빈 배열 `[]`, 빈 객체 `{}`, 문자열 `"0"`도 truthy

```javascript

```

### 3-8. 실습: 콘솔 계산기 — `calculator.js`

```javascript
let a = 10;
let b = 5;
let operator = "+"; // "+", "-", "*", "/"

if (operator === "+") {
    console.log(a + b);
} else if (operator === "-") {
    console.log(a - b);
} else if (operator === "*") {
    console.log(a * b);
} else if (operator === "/") {
    console.log(a / b);
} else {
    console.log("지원하지 않는 연산자입니다");
}
```

→ `else if`로 여러 조건을 차례로 검사한다
→ 연산자 비교도 `===` 사용

```javascript

```

### 3-9. 실습: 최종 합격 판정 — `pass.js`

```javascript
let score = 88;
let attendance = 75;
let submitted = true;

if (submitted && ((score >= 70 && attendance >= 80) || score >= 90)) {
    console.log("최종 합격");
} else {
    console.log("불합격");
}
```

→ 괄호로 조건의 묶음 순서를 정한다
→ 이 값(88, 75)이면 → 불합격

```javascript

```

### 3-10. 반복문 for / while — `loop.js`

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```

→ `for (초기값; 조건식; 증가식)` 구조
→ 조건이 false가 되면 종료 / 무한 루프 주의
→ 반복 횟수가 정해져 있으면 `for` 권장

```javascript

```

### 3-11. 배열(Array)과 순회 — `array.js`

```javascript
let numbers = [10, 20, 30];
console.log(numbers[0]);
console.log(numbers.at(-1));
console.log(numbers[3]);

let scores = [80, 90, 70];

for (const score of scores) {
    console.log(score);
}

for (const [i, score] of scores.entries()) {
    console.log(i, score);
}

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

scores.forEach(score => {
    console.log(score);
});
```

→ 배열: 순서(index)가 있고, 0부터 시작, 서로 다른 타입도 담을 수 있다
→ 순회 방법 4가지: `for...of` / `entries()` / 인덱스 `for` / `forEach`

```javascript

```

### 3-12. 객체(Object)와 순회 — `object.js`

```javascript
let user = {
    name: "Alex",
    age: 20,
};

console.log(user.name);
console.log(user["age"]);

for (const key in user) {
    console.log(key, user[key]);
}
```

→ 배열: 순서가 중요한 데이터 / 객체: 의미 있는 이름이 중요한 데이터
→ 파이썬의 딕셔너리와 비슷하다

```javascript

```

### 3-13. 맵(Map) — `map.js`

```javascript
const map = new Map();
map.set("name", "Alex");
map.set("age", 20);

console.log(map.get("name"));
console.log(map.size);

const map2 = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map2) {
    console.log(key, value);
}
```

→ 객체: 문자열 key 중심 / Map: 모든 타입 key 가능, 반복 처리에 유리

> 참고: 강의 슬라이드는 두 예제 모두 `map`이라는 이름을 써서, 한 파일에서 실행되도록 두 번째를 `map2`로 바꿨어요.

```javascript

```

### 3-14. 함수(Function) — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

→ 함수: 코드를 묶어서 재사용 (입력 → 처리 → 출력)
→ 호출해야 실행된다 / `return`은 결과 반환 + 종료 / 매개변수는 함수 안에서만 사용

```javascript

```

### 3-15. 함수를 값처럼 다루기 — `function.js`

```javascript
function sayHello() {
    console.log("hello");
}

const f = sayHello;
f(); // hello

function run(fn) {
    fn();
}

run(sayHello);   // hello (함수 전달)
run(sayHello()); // hello 출력 후 에러 (실행 결과 전달 → fn이 undefined)
```

→ 함수는 변수에 담거나 다른 함수에 넘길 수 있다 (이벤트 리스너에서 매우 중요!)
→ `sayHello` = 함수 자체 / `sayHello()` = 실행 결과

> 참고: 강의 57쪽은 `sayHi`를 쓰는데, 앞에서 정의한 `sayHello`로 통일했어요.

```javascript

```

### 3-16. 실습: 반복문 기초 — `practice_loop.js`

```javascript
// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 1~20 중 짝수만 출력
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

→ `%`: 나머지 연산자 → 짝수 판별에 자주 사용
→ 반복문 안에 조건문을 넣을 수 있다

```javascript

```

### 3-17. 실습: 배열 + 반복문 — `practice_array.js`

```javascript
let fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers = [10, 20, 30, 40];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum);
```

→ 합계 패턴: 바깥에 `let sum = 0` → 반복하며 `+=` → 마지막에 출력

```javascript

```

### 3-18. 실습: 객체 다루기 — `practice_object.js`

```javascript
let user = {
    name: "Alex",
    age: 25,
    email: "alex@test.com",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
```

→ key: value 쌍은 쉼표로 구분한다

```javascript

```

### 3-19. 실습: 함수 기초 — `practice_function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 7));

function checkPass(score) {
    if (score >= 60) {
        return "합격";
    } else {
        return "불합격";
    }
}

console.log(checkPass(75));
console.log(checkPass(50));
```

→ 함수 안에서 조건문으로 다른 값을 반환할 수 있다

```javascript

```

### 3-20. 실습: 평균 구하기 함수 — `practice_average.js`

```javascript
function getAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

console.log(getAverage([80, 85, 92, 97]));
```

→ 예외 상황(빈 배열)을 먼저 처리하고 본 로직을 진행하는 패턴
→ 함수 + 배열 + 반복문 + 조건문 종합

```javascript

```

## B. DOM과 이벤트

### 3-21. DOM 선택 · 내용 · 스타일 · 속성 변경 — `dom.html`

```html
<body>
    <h1 id="text">Hello</h1>
    <p class="item">one</p>
    <p class="item">two</p>
    <a href="#">link</a>

    <script>
        const el = document.getElementById("text");
        console.log(el.textContent);
        console.log(el.textContent.trim());

        document.querySelector("#text");
        document.querySelector(".item");
        document.querySelector("p");

        const items = document.querySelectorAll(".item");
        items.forEach(el => {
            console.log(el.textContent);
        });

        el.textContent = "Hello, DOM";
        el.style.color = "red";
        el.style.fontSize = "20px";

        const link = document.querySelector("a");
        link.href = "https://google.com";
    </script>
</body>
```

→ DOM: HTML 문서를 JavaScript가 다룰 수 있게 만든 객체(트리) 구조
→ JS는 HTML 파일을 직접 고치는 게 아니라 **DOM 객체를 조작**해서 화면을 바꾼다
→ `textContent`: 글자만 / `innerHTML`: HTML 태그 포함
→ `<script>`를 `</body>` 바로 위에 두면, 요소가 먼저 만들어진 뒤 실행돼서 찾을 수 있다

> 참고: 강의 77~82쪽의 조각 예제들을 한 파일에서 실행되도록 합쳤어요.

```html

```

### 3-22. 이벤트 리스너 + 입력값 처리 — `input.html`

```html
<body>
    <input id="name-input" />
    <button>확인</button>
    <div id="result"></div>

    <script>
        const input = document.querySelector("#name-input");
        const button = document.querySelector("button");
        const result = document.querySelector("#result");

        button.addEventListener("click", printName);

        function printName() {
            if (input.value.trim() === "") {
                alert("이름을 입력하세요");
                return;
            }

            result.innerHTML = "";
            const welcomeText = "환영합니다, " + input.value + " 님";
            const p = document.createElement("p"); // <p></p>
            p.textContent = welcomeText;           // <p>welcomeText</p>
            result.appendChild(p);
        }
    </script>
</body>
```

→ 이벤트: 클릭, 입력, 키보드, 스크롤, 페이지 로드 등 웹 페이지의 모든 동작
→ `요소.addEventListener("이벤트", 함수)`: 이벤트가 일어나면 함수 실행
→ `input.value`: 입력칸에 쓴 값 / `createElement` + `appendChild`: 새 요소를 만들어 붙이기

> 참고: 강의 86~88쪽의 조각을 합치고, 리스너 등록 줄과 닫는 괄호를 보충했어요.

```html

```

### 3-23. 실습 1: 버튼 클릭 이벤트 — `event1.html`

```html
<body>
    <button id="btn">클릭</button>

    <script>
        const btn = document.querySelector("#btn");

        btn.addEventListener("click", function () {
            console.log("버튼 클릭됨");
        });
    </script>
</body>
```

→ 이름 없는 함수(익명 함수)를 리스너에 바로 넣을 수 있다

```html

```

### 3-24. 실습 2: 텍스트 변경하기 — `event2.html`

```html
<body>
    <h1 class="text">Hello</h1>
    <button id="change">변경</button>

    <script>
        const h1 = document.querySelector(".text");
        const button = document.querySelector("#change");

        button.addEventListener("click", function () {
            h1.textContent = "Hello JavaScript";
            h1.style.color = "red";
        });
    </script>
</body>
```

→ 선택자: `#id`, `.class` — CSS와 같은 문법

```html

```

### 3-25. 실습 3: 실시간 입력 감지 — `event3.html`

```html
<body>
    <input type="password" placeholder="비밀번호 입력">
    <p id="result"></p>

    <script>
        const input = document.querySelector("input");
        const result = document.querySelector("#result");

        input.addEventListener("input", validatePassword);

        function validatePassword() {
            if (input.value.length < 4) {
                result.textContent = "4자리 이상 입력하세요.";
                result.style.color = "red";
            } else {
                result.textContent = "사용 가능한 비밀번호입니다.";
                result.style.color = "blue";
            }
        }
    </script>
</body>
```

→ `click`은 클릭할 때, `input`은 입력값이 바뀔 때마다 발생
→ `.length`: 글자 수

> 참고: 강의 94쪽에는 함수만 있어서, 요소 선택 줄과 리스너 등록 줄을 보충했어요.

```html

```

### 3-26. 화살표 함수 — `arrow.js`

```javascript
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
};

const add3 = (a, b) => a + b;

button.addEventListener("click", function () {
    console.log("클릭됨");
});

button.addEventListener("click", () => {
    console.log("클릭됨");
});

button.addEventListener("click", () => console.log("클릭됨"));
```

→ 화살표 함수: 짧고 간결한 함수 문법 → 콜백(다른 함수에 넘기는 함수)에 주로 사용

> 참고: 강의 슬라이드는 세 함수 모두 `add`라는 같은 이름이라, 같이 실행할 수 있게 `add2`, `add3`로 바꿨어요. 아래 리스너 예시는 `button`이 있는 HTML에서 실행돼요.

```javascript

```

### 3-27. 실습 4: 마우스 감지 + 호이스팅 — `event4.html`

```html
<body>
    <p id="box">마우스를 올려보세요</p>

    <script>
        const box = document.querySelector("#box");

        box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));
        box.addEventListener("mouseout", () => changeBackgroundColor("orange"));

        function changeBackgroundColor(color) {
            box.style.backgroundColor = color;
        }
    </script>
</body>
```

→ 함수에 인자를 넘겨야 할 땐 `() => 함수(인자)`로 감싼다 (그냥 `함수(인자)`는 바로 실행돼 버림)
→ 호이스팅: 실행 전에 선언을 먼저 처리 → 함수가 아래에 있어도 위에서 쓸 수 있다

> 참고: 강의 99쪽 최종 코드(배경색 변경)를 기준으로 하고, 요소 선택 줄을 보충했어요.

```html

```

### 3-28. 실습 5: 스타일 변경 — `event5.html`

```html
<body>
    <p id="box">색상 변경</p>
    <button id="color">변경</button>

    <script>
        const box = document.querySelector("#box");
        const btn = document.querySelector("#color");

        btn.addEventListener("click", function () {
            box.style.color = "orange";
            box.style.fontSize = "20px";
        });
    </script>
</body>
```

→ CSS 속성 이름의 `-`는 JS에서 카멜 표기로: `font-size` → `fontSize`, `background-color` → `backgroundColor`

```html

```

### 3-29. 실습 6: 종합 실습 (합격 판정) — `event6.html`

```html
<body>
    <input id="score" placeholder="점수 입력" />
    <button id="check">확인</button>
    <p id="result"></p>

    <script>
        const scoreInput = document.querySelector("#score");
        const button = document.querySelector("#check");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            const score = Number(scoreInput.value);

            if (score >= 60) {
                result.textContent = "합격";
            } else {
                result.textContent = "불합격";
            }
        });
    </script>
</body>
```

→ `input.value`는 항상 **문자열** → 숫자 비교 전에 `Number()`로 변환
→ DOM 선택 + 이벤트 + 조건문 + 화면 출력 종합

```html

```

## C. Web API

### 3-30. Timer API: setTimeout · setInterval · clearInterval — `timer.js`

```javascript
setTimeout(function () {
    console.log("3초 후 실행");
}, 3000);

setInterval(function () {
    console.log("1초마다 실행");
}, 1000);

const timerId = setInterval(function () {
    console.log("실행");
}, 1000);

clearInterval(timerId);
```

→ Web API: JS 언어 자체가 아니라 **브라우저가 제공하는 기능** (DOM, Event, Timer, Storage, Fetch)
→ 시간 단위는 밀리초(ms): 1000 = 1초
→ 두 번째 setInterval은 실행하자마자 clearInterval로 멈춰서 "실행"은 출력되지 않는다

```javascript

```

### 3-31. 실습: 5초 카운트다운 타이머 — `countdown.html`

```html
<body>
    <button id="start">카운트다운 시작</button>
    <p id="result"></p>

    <script>
        const startBtn = document.querySelector("#start");
        const timeEl = document.querySelector("#result");

        let time = 5;
        let timerId = null;

        startBtn.addEventListener("click", function () {
            if (timerId !== null) return;
            timeEl.textContent = time;

            timerId = setInterval(function () {
                time--;
                if (time === 0) {
                    timeEl.textContent = "끝";
                    clearInterval(timerId);
                    timerId = null;
                } else {
                    timeEl.textContent = time;
                }
            }, 1000);
        });
    </script>
</body>
```

→ `timerId`로 버튼을 여러 번 눌러도 타이머가 하나만 돌게 만든다
→ `time--`: time = time - 1

> 참고: 강의 113~115쪽 조각을 합쳤어요.

```html

```

### 3-32. Storage API: localStorage · JSON · sessionStorage — `storage.js`

```javascript
localStorage.setItem("name", "Alex");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

const user = { name: "Alex", age: 20 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);

sessionStorage.setItem("name", "Alex");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();
```

→ localStorage: 영구 저장 (브라우저를 껐다 켜도 유지)
→ sessionStorage: 탭 단위 임시 저장
→ 서버 없이 브라우저에 key/value(문자열)로 저장

```javascript

```

### 3-33. 실습: 입력값 저장 (새로고침 유지) — `save.html`

```html
<body>
    <input id="name" placeholder="이름 입력" />
    <button id="save">저장</button>
    <p id="result"></p>

    <script>
        const input = document.querySelector("#name");
        const button = document.querySelector("#save");
        const result = document.querySelector("#result");

        const savedName = localStorage.getItem("name");
        if (savedName) {
            result.textContent = savedName;
        }

        button.addEventListener("click", function () {
            localStorage.setItem("name", input.value);
            result.textContent = input.value;
        });
    </script>
</body>
```

→ 새로고침해도 `getItem`으로 다시 꺼내 보여 주므로 값이 유지된다

> 참고: 강의 120~121쪽 조각을 합쳤어요.

```html

```

### 3-34. Fetch API: GET 요청 — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

→ Fetch API: 서버와 HTTP 요청/응답을 주고받는 Web API
→ **비동기**: 요청을 보내 놓고 기다리지 않고 다음 코드를 먼저 실행 → 응답이 오면 `.then`에서 처리
→ 흐름: `fetch(url)` 요청 → `response` 서버 응답 → `response.json()` 파싱 → `data` 실제 데이터

```javascript

```

### 3-35. 실습: posts 5개 title 불러오기 — `posts.html`

```html
<body>
    <button id="load">불러오기</button>
    <ul id="list"></ul>

    <script>
        const button = document.querySelector("#load");
        const list = document.querySelector("#list");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(posts => {
                    list.innerHTML = "";
                    for (const post of posts.slice(0, 5)) {
                        const li = document.createElement("li");
                        li.textContent = post.title;
                        list.appendChild(li);
                    }
                });
        });
    </script>
</body>
```

→ `slice(0, 5)`: 0번부터 5개 앞까지 잘라낸 새 배열
→ Fetch + DOM + 반복문 종합

> 참고: 강의 124~126쪽 조각을 합치고, 126쪽 끝의 `});`를 for문에 맞게 `}`로 고쳤어요.

```html

```

### 3-36. Fetch API: POST 요청 — `post.html`

```html
<body>
    <input type="email" id="email">
    <button id="send">전송</button>
    <pre id="result"></pre>

    <script>
        const input = document.querySelector("#email");
        const button = document.querySelector("#send");
        const result = document.querySelector("#result");

        button.addEventListener("click", function () {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: input.value }),
            })
                .then(res => res.json())
                .then(data => {
                    result.textContent = JSON.stringify(data, null, 2); // 2 → 들여쓰기 (가독성)
                });
        });
    </script>
</body>
```

→ HTML 수업의 POST 개념(요청 본문에 JSON으로 담아 보내기)을 JS로 직접 구현한 것
→ `<pre>`: 공백·줄바꿈을 그대로 보여 주는 태그 → JSON 출력에 적합

> 참고: 강의 127~128쪽 조각을 합쳤어요. 마지막 To-do 앱 실습(129~130쪽)은 슬라이드에 코드가 없어서 넣지 않았어요.

```html

```

---

## 자주 하는 실수 체크

- [ ] 괄호 `()` `{}` `[]` 짝이 맞나? (특히 리스너의 `});`)
- [ ] 문자열 따옴표 짝이 맞나?
- [ ] 비교할 때 `=`(대입)이 아니라 `===`(일치)를 썼나?
- [ ] 바꾸지 않을 변수는 `const`로 선언했나?
- [ ] 리스너에 함수를 넘길 때 `함수()`가 아니라 `함수`로 넘겼나?
- [ ] `input.value`를 숫자로 비교하기 전에 `Number()`로 바꿨나?
- [ ] 선택자에 `#`(id)와 `.`(class)를 정확히 붙였나?
- [ ] `<script>`를 `</body>` 바로 위에 뒀나? (요소보다 먼저 실행되면 `null`)
