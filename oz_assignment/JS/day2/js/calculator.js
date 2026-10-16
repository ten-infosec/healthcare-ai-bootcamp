// Basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Input
function inputFormula() {
    return prompt("계산식을 입력하세요. (예: 1+2*7-3/2)");
}

// Calculate
function calculate(formula) {
    // Check allowed characters
    if (!/^[\d.+\-*/\s]+$/.test(formula)) {
        return "숫자와 사칙연산 기호(+, -, *, /)만 입력할 수 있습니다.";
    }

    // Split into numbers and operators
    const tokens = formula.match(/\d+(\.\d+)?|[+\-*/]/g);

    // Check length
    if (!tokens || tokens.length < 3 || tokens.length % 2 === 0) {
        return "잘못된 계산식이 입력되었습니다.";
    }

    // Check order (number, operator, number, ...)
    for (let k = 0; k < tokens.length; k++) {
        const isOperator = "+-*/".includes(tokens[k]);
        if ((k % 2 === 0 && isOperator) || (k % 2 === 1 && !isOperator)) {
            return "잘못된 계산식이 입력되었습니다.";
        }
    }

    // Stage 1: * and /
    const intermediateTokens = [];
    let i = 0;

    while (i < tokens.length) {
        const token = tokens[i];

        if (token === "*" || token === "/") {
            const left = Number(intermediateTokens.pop());
            const right = Number(tokens[i + 1]);

            let res;
            if (token === "*") {
                res = multiply(left, right);
            } else {
                if (right === 0) return "0으로 나눌 수 없습니다.";
                res = divide(left, right);
            }

            intermediateTokens.push(res);
            i += 2;
        } else {
            intermediateTokens.push(token);
            i++;
        }
    }

    // Stage 2: + and -
    let result = Number(intermediateTokens[0]);

    for (let j = 1; j < intermediateTokens.length; j += 2) {
        const operator = intermediateTokens[j];
        const nextValue = Number(intermediateTokens[j + 1]);

        if (operator === "+") {
            result = add(result, nextValue);
        } else {
            result = subtract(result, nextValue);
        }
    }

    return result;
}

// Start
function start(formula) {
    let input = formula;

    if (!input) {
        input = inputFormula();
    }

    if (!input) {
        console.log("계산식을 입력해주세요.");
        return;
    }

    const result = calculate(input);

    if (typeof result === "string") {
        console.log(`에러 발생: ${result}`);
    } else {
        console.log(`결과: ${result}`);
    }
}