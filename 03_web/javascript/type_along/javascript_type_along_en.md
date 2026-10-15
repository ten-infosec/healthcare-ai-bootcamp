# JavaScript Type-Along Practice

> Contains the 36 examples and exercises from the "Javascript" lecture deck in order. (A. Basics → B. DOM & Events → C. Web API)
>
> How to use
> - PART 0: Read all examples once from start to finish
> - PART 1: Look at each example and type it 5 times in the blocks right below
> - PART 2: Read only the explanation and recall the code (peek at the code line above only if stuck)
> - PART 3: Type each example while reading the code and explanation together
> - `.js` examples: run with `node filename.js` (terminal) or in the browser console / `.html` examples: open with Live Preview and check `F12` → Console

---

# PART 0. Read All Examples First

> Before typing, skim the 36 examples top to bottom to get the flow.

## A. JavaScript Basics

### 1. Ways to Run JavaScript — `hello.html`

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

### 2. Variables: let vs. const — `variables.js`

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

### 3. Data Types: number, string, boolean — `types.js`

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

### 4. Data Types: null, undefined — `types.js`

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

### 5. Arithmetic & Comparison Operators — `operators.js`

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

### 6. Equality, Logical & String Operators — `operators.js`

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

### 7. Conditionals: if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

### 8. Practice: Console Calculator — `calculator.js`

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

### 9. Practice: Final Pass Check — `pass.js`

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

### 10. Loops: for / while — `loop.js`

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

### 11. Arrays & Iteration — `array.js`

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

### 12. Objects & Iteration — `object.js`

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

### 13. Map — `map.js`

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

### 14. Functions — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

### 15. Functions as Values — `function.js`

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

### 16. Practice: Loop Basics — `practice_loop.js`

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

### 17. Practice: Arrays + Loops — `practice_array.js`

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

### 18. Practice: Working with Objects — `practice_object.js`

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

### 19. Practice: Function Basics — `practice_function.js`

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

### 20. Practice: Average Function — `practice_average.js`

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

## B. DOM & Events

### 21. DOM: Select, Content, Style, Attribute — `dom.html`

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

### 22. Event Listeners + Handling Input — `input.html`

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

### 23. Practice 1: Button Click Event — `event1.html`

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

### 24. Practice 2: Changing Text — `event2.html`

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

### 25. Practice 3: Live Input Detection — `event3.html`

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

### 26. Arrow Functions — `arrow.js`

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

### 27. Practice 4: Mouse Detection + Hoisting — `event4.html`

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

### 28. Practice 5: Changing Styles — `event5.html`

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

### 29. Practice 6: Combined (Pass Check) — `event6.html`

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

### 31. Practice: 5-Second Countdown Timer — `countdown.html`

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

### 33. Practice: Save Input (Survives Refresh) — `save.html`

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

### 34. Fetch API: GET Request — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

### 35. Practice: Load 5 Post Titles — `posts.html`

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

### 36. Fetch API: POST Request — `post.html`

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

# PART 1. Type Each Example (5 Rounds Each)

> Look at the code and type it 5 times in the empty blocks right below.

## A. JavaScript Basics

### 1-1. Ways to Run JavaScript — `hello.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-2. Variables: let vs. const — `variables.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-3. Data Types: number, string, boolean — `types.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-4. Data Types: null, undefined — `types.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-5. Arithmetic & Comparison Operators — `operators.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-6. Equality, Logical & String Operators — `operators.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-7. Conditionals: if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-8. Practice: Console Calculator — `calculator.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-9. Practice: Final Pass Check — `pass.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-10. Loops: for / while — `loop.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-11. Arrays & Iteration — `array.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-12. Objects & Iteration — `object.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-13. Map — `map.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-14. Functions — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-15. Functions as Values — `function.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-16. Practice: Loop Basics — `practice_loop.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-17. Practice: Arrays + Loops — `practice_array.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-18. Practice: Working with Objects — `practice_object.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-19. Practice: Function Basics — `practice_function.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-20. Practice: Average Function — `practice_average.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

## B. DOM & Events

### 1-21. DOM: Select, Content, Style, Attribute — `dom.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-22. Event Listeners + Handling Input — `input.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-23. Practice 1: Button Click Event — `event1.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-24. Practice 2: Changing Text — `event2.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-25. Practice 3: Live Input Detection — `event3.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-26. Arrow Functions — `arrow.js`

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-27. Practice 4: Mouse Detection + Hoisting — `event4.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-28. Practice 5: Changing Styles — `event5.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-29. Practice 6: Combined (Pass Check) — `event6.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-31. Practice: 5-Second Countdown Timer — `countdown.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

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

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-33. Practice: Save Input (Survives Refresh) — `save.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-34. Fetch API: GET Request — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

**Round 1**

```javascript

```

**Round 2**

```javascript

```

**Round 3**

```javascript

```

**Round 4**

```javascript

```

**Round 5**

```javascript

```

### 1-35. Practice: Load 5 Post Titles — `posts.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

### 1-36. Fetch API: POST Request — `post.html`

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

---

# PART 2. Type from the Explanation Only

> Look at the `code` above each explanation only when you get stuck. Covering it and recalling it first is the whole point.

## A. JavaScript Basics

### 2-1. Ways to Run JavaScript — `hello.html`

`<script>`
→ Declare that JavaScript runs inside the HTML

`console.log("Hello");`
→ Print Hello to the developer console

`</script>`
→ Close the script area

`<script src="app.js"></script>`
→ Load and run the code in the separate file app.js

```html

```

### 2-2. Variables: let vs. const — `variables.js`

`let age = 20;`
→ Store 20 in age, a variable that can change

`const username = "Alex";`
→ Store "Alex" in username, which cannot change

`console.log(age);`
→ Print the stored value

`count = 2;`
→ A let variable can be reassigned

`// pi = 3.15 ❌`
→ Reassigning a const variable is an error

```javascript

```

### 2-3. Data Types: number, string, boolean — `types.js`

`let a = 10; / let b = 3.14;`
→ Integers and decimals are both number

`console.log(typeof a);`
→ Check the type → "number"

`let username = "Alex"; / let message = 'Hello';`
→ Values in quotes (double/single) are string

`let isStudent = true; / let hasTicket = false;`
→ True/false are boolean (mostly used in conditions)

`console.log(typeof isStudent);`
→ → "boolean"

```javascript

```

### 2-4. Data Types: null, undefined — `types.js`

`let selectedUser = null;`
→ Deliberately set "empty"

`console.log(typeof selectedUser);`
→ → "object" (an old quirk of JavaScript)

`let score;`
→ Declared without a value → automatically undefined

`console.log(a == b);`
→ Value-only comparison → true

`console.log(a === b);`
→ Value + type comparison → false

```javascript

```

### 2-5. Arithmetic & Comparison Operators — `operators.js`

`console.log(a + b);`
→ Add → 13

`console.log(a - b); / a * b / a / b`
→ Subtract, multiply, divide

`console.log(10 > 5);`
→ Compare size → result is boolean (true)

`10 >= 10 / 10 <= 9`
→ Greater-or-equal / less-or-equal

```javascript

```

### 2-6. Equality, Logical & String Operators — `operators.js`

`console.log(10 == "10");`
→ Value only (type converted) → true

`console.log(10 === "10");`
→ Value + type → false (recommended)

`age >= 19 && hasId`
→ AND: true only if both are true

`age < 19 || hasId`
→ OR: true if either is true

`!hasId`
→ NOT: flip true/false

`firstName + " " + lastName`
→ Join strings with `+` → "Alex Kim"

`"10" + 1`
→ String + number → number becomes string, "101"

```javascript

```

### 2-7. Conditionals: if / else — `condition.js`

`if (age >= 19) {`
→ Run the block below if the condition is true

`console.log("성인");`
→ Runs when true

`} else {`
→ Block to run when false

`console.log("미성년자");`
→ Runs when false

```javascript

```

### 2-8. Practice: Console Calculator — `calculator.js`

`let operator = "+";`
→ Set the operator as a string (a variable instead of input)

`if (operator === "+") {`
→ If the operator is +, add

`} else if (operator === "-") {`
→ Otherwise if -, subtract (chain multiple conditions)

`} else {`
→ If none match, print a message

```javascript

```

### 2-9. Practice: Final Pass Check — `pass.js`

`let submitted = true;`
→ Whether the assignment was submitted

`submitted && ( … )`
→ Submission is always required

`(score >= 70 && attendance >= 80)`
→ Score ≥ 70 and attendance ≥ 80

`|| score >= 90`
→ Or score ≥ 90 ignores attendance

```javascript

```

### 2-10. Loops: for / while — `loop.js`

`for (let i = 1; i <= 3; i++) {`
→ Start at 1, repeat while i ≤ 3, add 1 each time

`console.log(i);`
→ Print i on each loop

`while (i < 3) {`
→ Repeat while the condition is true

`i++;`
→ Increase i by 1 (without it, infinite loop!)

```javascript

```

### 2-11. Arrays & Iteration — `array.js`

`let numbers = [10, 20, 30];`
→ An array grouping values in order

`numbers[0] / numbers.at(-1) / numbers[3]`
→ First (10) / last (30) / missing (undefined)

`for (const score of scores) {`
→ for...of: take values one by one

`for (const [i, score] of scores.entries()) {`
→ entries: get index and value together

`for (let i = 0; i < scores.length; i++) {`
→ Iterate by index (length = count)

`scores.forEach(score => { … });`
→ forEach: run a function per item (no break/continue)

```javascript

```

### 2-12. Objects & Iteration — `object.js`

`let user = { name: "Alex", age: 20, };`
→ Create an object pairing names (keys) with values

`user.name`
→ Get a value with a dot (.)

`user["age"]`
→ Get a value with a key string in brackets

`for (const key in user) {`
→ for...in: take keys one by one

`console.log(key, user[key]);`
→ Print the key and its value

```javascript

```

### 2-13. Map — `map.js`

`const map = new Map();`
→ Create an empty Map

`map.set("name", "Alex");`
→ Put in a key–value pair

`map.get("name") / map.size`
→ Get a value / number of entries

`new Map([["a", 1], ["b", 2]])`
→ Create from a list of pairs

`for (const [key, value] of map2) {`
→ Iterate getting key and value together

```javascript

```

### 2-14. Functions — `function.js`

`function add(a, b) {`
→ Define an add function taking parameters a and b

`return a + b;`
→ Return the result and end the function

`console.log(add(3, 5));`
→ Call the function and print the result (8)

```javascript

```

### 2-15. Functions as Values — `function.js`

`const f = sayHello;`
→ Store the function in a variable (no parentheses = not run)

`f();`
→ Call the function through the variable

`function run(fn) { fn(); }`
→ A function that takes a function and runs it

`run(sayHello);`
→ Pass the function itself → runs inside run

`run(sayHello());`
→ Pass the result (undefined) of running it first → error

```javascript

```

### 2-16. Practice: Loop Basics — `practice_loop.js`

`for (let i = 1; i <= 10; i++) {`
→ Loop from 1 to 10

`for (let i = 1; i <= 20; i++) {`
→ Loop from 1 to 20

`if (i % 2 === 0) {`
→ Print if the remainder after dividing by 2 is 0 (even)

```javascript

```

### 2-17. Practice: Arrays + Loops — `practice_array.js`

`for (const fruit of fruits) {`
→ Print all values with for...of

`for (let i = 0; i < fruits.length; i++) {`
→ Same result with an index for loop

`let sum = 0;`
→ Start a sum variable at 0

`sum += num;`
→ Short for sum = sum + num

`console.log(sum);`
→ Print the total (100) after the loop

```javascript

```

### 2-18. Practice: Working with Objects — `practice_object.js`

`let user = { … };`
→ An object holding name, age, email

`email: "alex@test.com",`
→ A trailing comma after the last item is allowed

`console.log(user.name);`
→ Print each value with a dot

```javascript

```

### 2-19. Practice: Function Basics — `practice_function.js`

`function add(a, b) { return a + b; }`
→ A function that returns the sum of two numbers

`function checkPass(score) {`
→ A function that takes a score

`if (score >= 60) { return "합격"; }`
→ Return "합격" if 60 or above

`else { return "불합격"; }`
→ Otherwise return "불합격"

`checkPass(75) / checkPass(50)`
→ → 합격 / 불합격

```javascript

```

### 2-20. Practice: Average Function — `practice_average.js`

`if (scores.length === 0) { return 0; }`
→ If empty, return 0 and stop (avoid dividing by 0)

`let sum = 0; for (…) { sum += score; }`
→ Compute the sum

`return sum / scores.length;`
→ Return sum ÷ count = average

`getAverage([80, 85, 92, 97])`
→ → 88.5

```javascript

```

## B. DOM & Events

### 2-21. DOM: Select, Content, Style, Attribute — `dom.html`

`const el = document.getElementById("text");`
→ Find the element with id text

`el.textContent / el.textContent.trim()`
→ Element text / text with surrounding spaces removed

`document.querySelector("#text" | ".item" | "p")`
→ Select the **first** match with a CSS selector (null if none)

`document.querySelectorAll(".item")`
→ Select **all** matches (NodeList)

`items.forEach(el => { … });`
→ Print the text of each found element

`el.textContent = "Hello, DOM";`
→ Change the text

`el.style.color = "red"; / el.style.fontSize = "20px";`
→ Change styles (CSS font-size → fontSize)

`link.href = "https://google.com";`
→ Change an attribute value

```html

```

### 2-22. Event Listeners + Handling Input — `input.html`

`button.addEventListener("click", printName);`
→ Run printName when the button is clicked (pass the function itself)

`if (input.value.trim() === "") {`
→ If the input is empty

`alert("이름을 입력하세요"); return;`
→ Show an alert and end the function

`result.innerHTML = "";`
→ Clear the previous result

`const p = document.createElement("p");`
→ Create a new p element

`p.textContent = welcomeText;`
→ Put text in the new p

`result.appendChild(p);`
→ Attach p inside result so it shows

```html

```

### 2-23. Practice 1: Button Click Event — `event1.html`

`const btn = document.querySelector("#btn");`
→ Find the button with id btn

`btn.addEventListener("click", function () {`
→ Run this (anonymous) function on click

`console.log("버튼 클릭됨");`
→ Print to the console

```html

```

### 2-24. Practice 2: Changing Text — `event2.html`

`const h1 = document.querySelector(".text");`
→ Find the element with class text

`h1.textContent = "Hello JavaScript";`
→ Change the text on click

`h1.style.color = "red";`
→ Change the color to red

```html

```

### 2-25. Practice 3: Live Input Detection — `event3.html`

`input.addEventListener("input", validatePassword);`
→ Run the check every time a character is typed (input event)

`if (input.value.length < 4) {`
→ If fewer than 4 characters are typed

`result.textContent = "4자리 이상 입력하세요.";`
→ A red warning message

`} else { … "사용 가능한 비밀번호입니다." … "blue" }`
→ A blue message if 4 or more

```html

```

### 2-26. Arrow Functions — `arrow.js`

`const add2 = (a, b) => { return a + b; };`
→ Define a function with `=>` instead of function

`const add3 = (a, b) => a + b;`
→ With a one-line body, omit `{}` and `return`

`button.addEventListener("click", () => { … });`
→ Use an arrow function in an event listener

`() => console.log("클릭됨")`
→ The shortest form

```javascript

```

### 2-27. Practice 4: Mouse Detection + Hoisting — `event4.html`

`box.addEventListener("mouseover", () => changeBackgroundColor("skyblue"));`
→ On mouse over → skyblue (wrapped in an arrow function to pass an argument)

`box.addEventListener("mouseout", () => changeBackgroundColor("orange"));`
→ On mouse out → orange

`function changeBackgroundColor(color) {`
→ A function that takes a color and changes the background

`box.style.backgroundColor = color;`
→ Change the background color

```html

```

### 2-28. Practice 5: Changing Styles — `event5.html`

`btn.addEventListener("click", function () {`
→ Run on button click

`box.style.color = "orange";`
→ Text color orange

`box.style.fontSize = "20px";`
→ Font size 20px

```html

```

### 2-29. Practice 6: Combined (Pass Check) — `event6.html`

`const score = Number(scoreInput.value);`
→ Convert the input (string) to a number

`if (score >= 60) {`
→ If 60 or above

`result.textContent = "합격";`
→ Show 합격 on screen

`} else { result.textContent = "불합격"; }`
→ Otherwise show 불합격

```html

```

## C. Web API

### 2-30. Timer API: setTimeout · setInterval · clearInterval — `timer.js`

`setTimeout(function () { … }, 3000);`
→ Run once after 3000 ms (3 seconds)

`setInterval(function () { … }, 1000);`
→ Run repeatedly every 1000 ms (1 second)

`const timerId = setInterval(…);`
→ Keep the number that identifies the timer

`clearInterval(timerId);`
→ Stop the repeating timer with that number

```javascript

```

### 2-31. Practice: 5-Second Countdown Timer — `countdown.html`

`let timerId = null;`
→ Marks that there is no timer yet

`if (timerId !== null) return;`
→ Do not start again if already running (prevent duplicates)

`timerId = setInterval(function () { … }, 1000);`
→ Start a 1-second timer and save its number

`time--;`
→ Decrease the remaining time by 1

`if (time === 0) { … clearInterval(timerId); timerId = null; }`
→ At 0, show "끝", stop the timer, and reset

`else { timeEl.textContent = time; }`
→ Otherwise show the remaining time

```html

```

### 2-32. Storage API: localStorage · JSON · sessionStorage — `storage.js`

`localStorage.setItem("name", "Alex");`
→ Save "Alex" under the key "name"

`getItem / removeItem / clear`
→ Get / remove one / clear all

`JSON.stringify(user)`
→ Turn the object into a string to save (Storage only stores strings)

`JSON.parse(localStorage.getItem("user"))`
→ Turn the retrieved string back into an object

`sessionStorage.setItem(…)`
→ Same usage, but cleared when the tab closes

```javascript

```

### 2-33. Practice: Save Input (Survives Refresh) — `save.html`

`const savedName = localStorage.getItem("name");`
→ On page load, get the saved name

`if (savedName) { result.textContent = savedName; }`
→ Show it if it exists (none → null → falsy)

`localStorage.setItem("name", input.value);`
→ Save the input on button click

`result.textContent = input.value;`
→ Show the saved value right away

```html

```

### 2-34. Fetch API: GET Request — `fetch.js`

`fetch("https://jsonplaceholder.typicode.com/posts")`
→ Send a GET request to the server

`.then(response => response.json())`
→ When the response arrives, parse the JSON

`.then(data => { console.log(data); });`
→ Use the parsed data

```javascript

```

### 2-35. Practice: Load 5 Post Titles — `posts.html`

`button.addEventListener("click", function () { fetch(…) … });`
→ Fetch the post list when the button is clicked

`list.innerHTML = "";`
→ Clear the list (no duplicates on repeated clicks)

`for (const post of posts.slice(0, 5)) {`
→ Loop over only the first 5

`const li = document.createElement("li"); li.textContent = post.title;`
→ Create an li and put the post title in it

`list.appendChild(li);`
→ Attach it to the list

```html

```

### 2-36. Fetch API: POST Request — `post.html`

`fetch(url, { … })`
→ Pass request options as the second argument

`method: "POST",`
→ Send with POST

`headers: { "Content-Type": "application/json" },`
→ Say the body is JSON

`body: JSON.stringify({ email: input.value }),`
→ Put the input in the body as a JSON string

`JSON.stringify(data, null, 2)`
→ Stringify the response with 2-space indentation

```html

```

---

# PART 3. Type with Code + Explanation

## A. JavaScript Basics

### 3-1. Ways to Run JavaScript — `hello.html`

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

→ 1. Run `console.log(1 + 2);` directly in the browser dev tools (`F12` → Console)
→ 2. `<script>` tag: the browser runs JS when it reaches it while reading HTML
→ 3. Separate file: save just the code in `app.js`, e.g. `console.log("분리된 JS 파일");`
→ 4. Node.js: `node app.js` in the terminal → runs without a browser (check install with `node -v`, `npm -v`)

```html

```

### 3-2. Variables: let vs. const — `variables.js`

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

→ Variable: a space that stores a value for reuse
→ `let`: can change / `const`: cannot → **default to const, use let only when it must change**
→ `//`: single-line comment in JavaScript

```javascript

```

### 3-3. Data Types: number, string, boolean — `types.js`

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

→ `number`: no integer/decimal distinction
→ `string`: text in `" "` or `' '`
→ `boolean`: `true` / `false`
→ `typeof value`: returns the type as a string

> Note: The slide (p.16) uses `typeof isAdult`, an undeclared variable, so it is changed to `isStudent`.

```javascript

```

### 3-4. Data Types: null, undefined — `types.js`

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

→ `null`: a value **explicitly** set as empty
→ `undefined`: a value **not yet assigned** (set automatically)

```javascript

```

### 3-5. Arithmetic & Comparison Operators — `operators.js`

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

→ Arithmetic operators: `+` `-` `*` `/` (remainder is `%`)
→ Comparison operators always return `true` / `false`

```javascript

```

### 3-6. Equality, Logical & String Operators — `operators.js`

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

→ **Always compare with `===`** (`==` is confusing due to type conversion)
→ JS converts types automatically, so be more careful than in Python (which raises an error)

```javascript

```

### 3-7. Conditionals: if / else — `condition.js`

```javascript
let age = 20;

if (age >= 19) {
    console.log("성인");
} else {
    console.log("미성년자");
}
```

→ The condition evaluates to boolean / `{}` blocks set the scope / `else` is optional
→ 6 falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN` → everything else is truthy
→ Empty array `[]`, empty object `{}`, and string `"0"` are truthy too

```javascript

```

### 3-8. Practice: Console Calculator — `calculator.js`

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

→ `else if` checks several conditions in order
→ Compare the operator with `===` too

```javascript

```

### 3-9. Practice: Final Pass Check — `pass.js`

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

→ Parentheses set how conditions group
→ With these values (88, 75) → 불합격 (fail)

```javascript

```

### 3-10. Loops: for / while — `loop.js`

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

→ `for (init; condition; increment)` structure
→ Stops when the condition becomes false / watch out for infinite loops
→ Use `for` when the number of repetitions is known

```javascript

```

### 3-11. Arrays & Iteration — `array.js`

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

→ Array: ordered by index starting at 0, can hold different types
→ 4 ways to iterate: `for...of` / `entries()` / index `for` / `forEach`

```javascript

```

### 3-12. Objects & Iteration — `object.js`

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

→ Array: data where order matters / Object: data where meaningful names matter
→ Similar to a Python dictionary

```javascript

```

### 3-13. Map — `map.js`

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

→ Object: string keys / Map: any type of key, better for iteration

> Note: The slides name both maps `map`; the second is renamed `map2` so they run in one file.

```javascript

```

### 3-14. Functions — `function.js`

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

→ Function: bundle code for reuse (input → process → output)
→ Runs only when called / `return` returns a result and ends / parameters exist only inside

```javascript

```

### 3-15. Functions as Values — `function.js`

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

→ Functions can be stored in variables or passed to other functions (very important for event listeners!)
→ `sayHello` = the function itself / `sayHello()` = the result of running it

> Note: Slide p.57 uses `sayHi`; it is unified to the earlier `sayHello`.

```javascript

```

### 3-16. Practice: Loop Basics — `practice_loop.js`

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

→ `%`: remainder operator → often used to check even numbers
→ You can put a condition inside a loop

```javascript

```

### 3-17. Practice: Arrays + Loops — `practice_array.js`

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

→ Sum pattern: `let sum = 0` outside → `+=` in the loop → print at the end

```javascript

```

### 3-18. Practice: Working with Objects — `practice_object.js`

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

→ key: value pairs are separated by commas

```javascript

```

### 3-19. Practice: Function Basics — `practice_function.js`

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

→ A function can return different values using a condition

```javascript

```

### 3-20. Practice: Average Function — `practice_average.js`

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

→ Pattern: handle the edge case (empty array) first, then the main logic
→ Combines functions, arrays, loops, and conditions

```javascript

```

## B. DOM & Events

### 3-21. DOM: Select, Content, Style, Attribute — `dom.html`

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

→ DOM: the object (tree) structure that lets JavaScript work with an HTML document
→ JS changes the screen by **manipulating DOM objects**, not by editing the HTML file
→ `textContent`: text only / `innerHTML`: includes HTML tags
→ Placing `<script>` right before `</body>` runs it after the elements exist, so they can be found

> Note: The snippets from slides pp.77–82 are combined so they run in one file.

```html

```

### 3-22. Event Listeners + Handling Input — `input.html`

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

→ Event: any action on the page — click, input, keyboard, scroll, page load, etc.
→ `element.addEventListener("event", function)`: run the function when the event happens
→ `input.value`: the typed value / `createElement` + `appendChild`: create and attach a new element

> Note: Combines slides pp.86–88 and fills in the listener line and closing braces.

```html

```

### 3-23. Practice 1: Button Click Event — `event1.html`

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

→ You can put an unnamed (anonymous) function directly into the listener

```html

```

### 3-24. Practice 2: Changing Text — `event2.html`

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

→ Selectors: `#id`, `.class` — same syntax as CSS

```html

```

### 3-25. Practice 3: Live Input Detection — `event3.html`

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

→ `click` fires on click; `input` fires every time the value changes
→ `.length`: number of characters

> Note: Slide p.94 shows only the function, so the selection and listener lines are added.

```html

```

### 3-26. Arrow Functions — `arrow.js`

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

→ Arrow function: short, concise syntax → mostly used for callbacks (functions passed to other functions)

> Note: The slides name all three `add`; renamed `add2`, `add3` so they can coexist. The listener examples need an HTML page with a `button`.

```javascript

```

### 3-27. Practice 4: Mouse Detection + Hoisting — `event4.html`

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

→ To pass an argument, wrap it: `() => fn(arg)` (plain `fn(arg)` would run immediately)
→ Hoisting: declarations are processed before running → a function defined below can be used above

> Note: Based on the final code on slide p.99 (background color), with the selection line added.

```html

```

### 3-28. Practice 5: Changing Styles — `event5.html`

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

→ CSS names with `-` become camelCase in JS: `font-size` → `fontSize`, `background-color` → `backgroundColor`

```html

```

### 3-29. Practice 6: Combined (Pass Check) — `event6.html`

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

→ `input.value` is always a **string** → convert with `Number()` before comparing numbers
→ Combines DOM selection, events, conditions, and output

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

→ Web API: **features provided by the browser**, not the JS language itself (DOM, Event, Timer, Storage, Fetch)
→ Time is in milliseconds (ms): 1000 = 1 second
→ The second setInterval is stopped immediately by clearInterval, so "실행" never prints

```javascript

```

### 3-31. Practice: 5-Second Countdown Timer — `countdown.html`

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

→ `timerId` ensures only one timer runs even if the button is clicked many times
→ `time--`: time = time - 1

> Note: Combines slides pp.113–115.

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

→ localStorage: permanent (survives browser restarts)
→ sessionStorage: temporary, per tab
→ Stores key/value (strings) in the browser without a server

```javascript

```

### 3-33. Practice: Save Input (Survives Refresh) — `save.html`

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

→ Values persist after refresh because `getItem` reads them back on load

> Note: Combines slides pp.120–121.

```html

```

### 3-34. Fetch API: GET Request — `fetch.js`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

→ Fetch API: a Web API for HTTP requests/responses with a server
→ **Asynchronous**: send the request and run the next code without waiting → handle the response in `.then`
→ Flow: `fetch(url)` request → `response` → `response.json()` parse → `data`

```javascript

```

### 3-35. Practice: Load 5 Post Titles — `posts.html`

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

→ `slice(0, 5)`: a new array of items 0 through 4
→ Combines Fetch, DOM, and loops

> Note: Combines slides pp.124–126 and fixes the `});` at the end of p.126 to `}` to match the for loop.

```html

```

### 3-36. Fetch API: POST Request — `post.html`

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

→ Implements the POST concept from the HTML class (send JSON in the request body) directly in JS
→ `<pre>`: shows spaces and line breaks as is → good for JSON output

> Note: Combines slides pp.127–128. The final To-do app (pp.129–130) has no code on the slides, so it is not included.

```html

```

---

## Common Mistakes Checklist

- [ ] Do the brackets `()` `{}` `[]` match? (especially the listener's `});`)
- [ ] Do the string quotes match?
- [ ] Did I compare with `===` (equality), not `=` (assignment)?
- [ ] Did I declare unchanging variables with `const`?
- [ ] Did I pass `fn`, not `fn()`, to the listener?
- [ ] Did I convert `input.value` with `Number()` before comparing numbers?
- [ ] Did I use `#` (id) and `.` (class) correctly in selectors?
- [ ] Is `<script>` right before `</body>`? (running before the elements exist gives `null`)
