// ===== 1. Select DOM elements =====

// id가 display인 결과창(<input>)을 가져온다
const display = document.querySelector("#display");
// ON/OFF 버튼 (class="on-off")
const powerBtn = document.querySelector(".on-off");
// C(지우기) 버튼 (class="clear")
const clearBtn = document.querySelector(".clear");
// Enter(계산) 버튼 (class="enter")
const enterBtn = document.querySelector(".enter");
// querySelectorAll: 조건에 맞는 요소를 "전부" 가져온다 → 숫자 버튼 11개(0~9, .)
const numberBtns = document.querySelectorAll(".number");
// 연산자 버튼 4개(/, *, -, +)
const operatorBtns = document.querySelectorAll(".operator");


// → 계산기에 필요한 요소들을 DOM에서 찾아 변수에 담아 두겠다
// → 다른 요소로 바꿀 일이 없으니 const로 담겠다
// → 숫자·연산자 버튼은 여러 개라서 querySelectorAll로 한꺼번에 가져오겠다


// ===== 2. Calculator state =====

// 계산기 전원 상태 (true = 켜짐) → 값이 바뀌어야 하니 let
let isOn = true;
// 첫 번째 숫자 (예: 3 + 5 에서 3)
let firstNumber = null;
// 선택한 연산자 (예: "+")
let operator = null;
// 연산자를 누른 직후인지 → true면 다음 숫자 입력 때 화면을 새로 시작한다
let waitingForSecond = false;

// 처음엔 켜진 상태로 시작 → CSS의 .on-off.on 스타일(초록색)을 적용한다
// classList.add("on"): 요소에 class를 하나 추가한다
powerBtn.classList.add("on");


// → 계산하는 동안 기억해야 할 값들(전원, 첫 번째 숫자, 연산자)을 변수로 만들어 두겠다
// → null은 "아직 값이 없음"을 개발자가 일부러 표시한 것이다


// ===== 3. Helper functions =====

// 계산 상태를 처음으로 되돌리는 함수
function resetState() {
    firstNumber = null;
    operator = null;
    waitingForSecond = false;
}

// 실제 사칙연산을 하는 함수 → 결과를 return으로 돌려준다
function calculate(a, op, b) {
    // 0으로 나누기는 계산할 수 없으므로 null을 돌려준다 (얼리 리턴)
    if (op === "/" && b === 0) {
        return null;
    }

    let result;
    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        result = a / b;
    }

    // 0.1 + 0.2 = 0.30000000000000004 같은 소수점 오차를 정리한다
    // toFixed(10): 소수점 10자리까지 문자열로 자름 → parseFloat: 다시 숫자로, 뒤쪽 0 제거
    return parseFloat(result.toFixed(10));
}

// 0으로 나누는 등 계산할 수 없을 때 화면에 Error를 띄우는 함수
function showError() {
    display.value = "Error";
    resetState();
    // 다음 숫자를 누르면 Error를 지우고 새로 시작하도록 한다
    waitingForSecond = true;
}


// → resetState: 계산 상태를 초기화하는 공통 동작을 함수 하나로 묶어 여러 곳에서 재사용하겠다
// → calculate: 두 숫자와 연산자를 받아 계산 결과를 return으로 돌려주겠다
//   (console.log가 아니라 return이어야 다른 함수가 결과를 이어받아 쓸 수 있다)
// → 0으로 나누면 null을 돌려줘서, 부르는 쪽이 "계산 실패"를 알 수 있게 하겠다
// → 컴퓨터는 소수를 2진수로 저장해서 0.1 + 0.2 같은 계산에 아주 작은 오차가 생기니, 소수점 10자리에서 정리하겠다


// ===== 4. Button actions =====

// 숫자(또는 소수점)를 눌렀을 때
function appendNumber(num) {
    // 전원이 꺼져 있으면 아무것도 하지 않고 끝낸다 (얼리 리턴)
    if (!isOn) {
        return;
    }

    // 연산자를 누른 직후라면 → 화면을 새 숫자로 바꿔서 두 번째 숫자 입력을 시작한다
    if (waitingForSecond) {
        // 소수점부터 누르면 "0."으로 시작한다
        display.value = num === "." ? "0." : num;
        waitingForSecond = false;
        return;
    }

    // 이미 소수점이 있는데 또 누르면 무시한다 (1.2.3 방지)
    // includes("."): 문자열 안에 "."이 들어 있는지 true/false로 알려준다
    if (num === "." && display.value.includes(".")) {
        return;
    }

    // 화면이 "0"일 때 숫자를 누르면 0을 지우고 그 숫자로 바꾼다 (07 방지)
    if (display.value === "0" && num !== ".") {
        display.value = num;
    } else {
        // 그 밖에는 기존 숫자 뒤에 이어 붙인다 (문자열 더하기: "1" + "2" = "12")
        display.value += num;
    }
}

// 연산자(+, -, *, /)를 눌렀을 때
function appendOperator(op) {
    if (!isOn || display.value === "Error") {
        return;
    }

    // 화면의 글자(문자열)를 계산할 수 있는 숫자로 바꾼다
    const current = Number(display.value);

    if (operator !== null && !waitingForSecond) {
        // 3 + 5 다음에 바로 - 를 누른 경우 → 앞의 3 + 5를 먼저 계산한다 (연속 계산)
        const result = calculate(firstNumber, operator, current);
        if (result === null) {
            showError();
            return;
        }
        display.value = result;
        firstNumber = result;
    } else if (operator === null) {
        // 처음 연산자를 누른 경우 → 화면의 숫자를 첫 번째 숫자로 기억한다
        firstNumber = current;
    }
    // (연산자를 연달아 누른 경우엔 첫 번째 숫자는 그대로 두고 연산자만 바꾼다)

    operator = op;
    waitingForSecond = true;
}

// Enter를 눌렀을 때 → 계산 결과를 보여준다
function performCalculate() {
    // 꺼져 있거나, 연산자가 없거나, 두 번째 숫자를 아직 안 넣었으면 계산하지 않는다
    if (!isOn || operator === null || waitingForSecond) {
        return;
    }

    const result = calculate(firstNumber, operator, Number(display.value));
    if (result === null) {
        showError();
        return;
    }

    display.value = result;
    resetState();
    // 결과가 나온 뒤 숫자를 누르면 새 계산을 시작하도록 한다
    waitingForSecond = true;
}

// C를 눌렀을 때 → 화면과 계산 상태를 모두 지운다
function clearDisplay() {
    if (!isOn) {
        return;
    }
    display.value = "0";
    resetState();
}

// ON/OFF를 눌렀을 때 → 전원을 켜고 끈다
function togglePower() {
    // !isOn: true면 false로, false면 true로 뒤집는다
    isOn = !isOn;
    resetState();

    if (isOn) {
        display.value = "0";
        powerBtn.classList.add("on");
    } else {
        // 꺼지면 화면을 비우고 초록색 스타일을 뺀다
        display.value = "";
        powerBtn.classList.remove("on");
    }
}


// → 각 버튼이 할 일을 함수로 "정의만" 해 두겠다 (아직 실행 X)
// → 모든 함수 맨 앞에서 "전원이 꺼져 있으면 return"으로 먼저 걸러 내겠다 (얼리 리턴 패턴)
// → display.value는 문자열이라, 계산할 땐 Number()로 숫자로 바꾸겠다
//   (안 바꾸면 "3" + "5" = "35"처럼 글자끼리 붙어 버림)
// → 3 + 5 - 2 처럼 이어서 누르면, 다음 연산자를 누르는 순간 앞의 계산을 먼저 처리하겠다


// ===== 5. Connect event listeners =====

// 버튼 하나에 이벤트 리스너를 붙인다 (인자가 필요 없는 함수 → 괄호 없이 이름만 넘김)
powerBtn.addEventListener("click", togglePower);
clearBtn.addEventListener("click", clearDisplay);
enterBtn.addEventListener("click", performCalculate);

// 숫자 버튼 11개 각각에 이벤트 리스너를 붙인다
// forEach: 가져온 요소들을 하나씩 꺼내 btn에 담고, 화살표 함수를 반복 실행한다
numberBtns.forEach((btn) => {
    // 눌린 버튼의 글자(textContent, 예: "7")를 인자로 넘겨야 하므로 화살표 함수로 감싼다
    btn.addEventListener("click", () => appendNumber(btn.textContent));
});

// 연산자 버튼 4개도 같은 방식으로 붙인다
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => appendOperator(btn.textContent));
});


// → 버튼마다 "클릭되면 이 함수를 실행해"라고 등록만 하겠다 (실행은 클릭할 때 버튼이 한다)
// → togglePower처럼 인자가 필요 없으면 괄호 없이 함수 이름만 넘기겠다
//   (togglePower()로 쓰면 페이지가 열리자마자 실행되고, undefined가 등록되어 클릭해도 반응이 없음)
// → appendNumber처럼 "어떤 숫자인지" 인자가 필요하면 () => appendNumber(...)로 감싸서
//   "나중에 이 값으로 호출해"라고 맡기겠다 (수업의 changeColor("skyblue") 예제와 같은 원리)
// → 버튼 글자(textContent)를 그대로 숫자·연산자 값으로 쓰니, HTML에 버튼마다 onclick을 적지 않아도 된다
