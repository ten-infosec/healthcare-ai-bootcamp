// 함수(function)
// [1] 구조: 입력 -> 처리 -> 출력
// [2] 기능: 재사용성
//
// 용어 정리
// - 정의(define): 함수를 만들어 두는 것 (아직 실행 X)
// - 호출(call): 함수 이름 뒤에 ( )를 붙여 일을 시키는 것
// - 실행(execute): 호출을 받은 함수 안의 코드가 돌아가는 것
// - 반환(return): 함수가 결과를 호출한 자리로 돌려주는 것 (= 반납)
// - 매개변수(parameter): 함수를 만들 때 입력을 받을 자리 이름 (n1, n2)
// - 인자(argument): 함수를 호출할 때 실제로 넣는 값 (4, 2)


// ===== 1. Function Definition =====


// function 키워드: "지금부터 함수를 정의하겠다"는 신호
// add: 함수 이름 / (n1, n2): 입력값을 받을 매개변수 두 개
function add(n1, n2) {
    // n1과 n2를 더한 값을, 이 함수를 호출한 자리로 돌려준다
    // return을 만나면 함수는 그 자리에서 즉시 끝난다
    return n1 + n2
};


// → add라는 이름의 함수를 정의(등록)만 해두겠다
// → 이 단계에서는 return n1 + n2 가 아직 한 번도 실행되지 않는다
// → add 자체는 화면에 아무것도 출력하지 않는다 (계산해서 돌려주기만 함)


// ===== 2. Function Call -> Execution =====


// let: 나중에 값을 바꿀 수 있는 변수(상자)를 만든다
// = (할당/대입): 오른쪽을 먼저 다 계산한 뒤, 그 결과를 왼쪽 상자에 넣는다
// add(4, 10): 괄호가 있으므로 호출 → n1 = 4, n2 = 10 이 들어가 실행된다
let result = add(4, 10);

// console.log: 받은 값을 터미널(화면)에 출력하는 함수 (파이썬의 print)
console.log(result);   // 14


// → add(4, 10)을 호출하겠다 → 위의 add로 가서 n1 = 4, n2 = 10을 넣고 실행하겠다
// → return 14 로 결과를 들고 돌아와, add(4, 10) 자리가 14로 바뀌겠다
// → let result = 14 가 되어 result 상자에 14를 담겠다
// → console.log가 result의 14를 터미널에 출력하겠다


// ===== 3. Function Itself vs Function Call =====


// 괄호 없이 add만 쓰면 호출이 아니라 "함수 그 자체(박스)"를 가리킨다
console.log(add);         // [Function: add]

// 괄호 + 인자를 붙이면 호출 → 실행 결과가 나온다
console.log(add(4, 2));   // 6

// 인자를 빠뜨리고 호출하면 빈 자리는 undefined가 된다
// 4 + undefined → NaN (Not a Number, "숫자가 아님")
console.log(add(4));      // NaN


// → add 는 "이 박스가 뭔지 보여줘" → 함수라는 정보만 출력하겠다
// → add(4, 2) 는 "박스에 값 두 개 넣고 일해" → 6을 출력하겠다
// → add(4) 는 재료가 하나 빠진 채 일을 시켜 NaN이 나오겠다 (자바스크립트는 에러를 내지 않음)


// ===== 4. Assign a Function to a Variable =====


// add를 괄호 없이 넘김 → 결과값이 아니라 함수 박스 자체를 foo에도 연결한다
// 박스가 복사되는 게 아니라, 같은 박스에 이름표(add, foo)가 하나 더 붙는 것
let foo = add;

// foo도 같은 함수를 가리키므로 foo(4, 2)로 호출할 수 있다
console.log(foo(4, 2));   // 6


// → 함수도 숫자·문자처럼 "값"이라 변수에 담을 수 있다 (일급 함수, first-class function)
// → 주의: let foo = add(4, 2) 라고 쓰면 foo에는 함수가 아니라 숫자 6이 담긴다
//         그 뒤 foo(4, 2)를 하면 TypeError: foo is not a function 에러가 난다


// ===== 5. Pass a Function as an Argument =====


// runFunction: 함수 하나(f)와 재료 두 개(arg1, arg2)를 받는 함수
// arg는 argument(인자)의 줄임말
function runFunction(f, arg1, arg2) {
    // 받은 함수 f에 재료를 넣어 호출하고, 그 결과를 그대로 돌려준다
    return f(arg1, arg2)
}

// add 박스 자체(괄호 X)와 재료 4, 2를 넘긴다
let result2 = runFunction(add, 4, 2);
console.log(result2);     // 6


// → runFunction(add, 4, 2)를 호출하겠다 → f = add, arg1 = 4, arg2 = 2
// → 안에서 f(arg1, arg2), 즉 add(4, 2)가 실행되어 6이 반환되겠다
// → runFunction이 그 6을 다시 반환해 result2에 담고 출력하겠다
// → 함수를 인자로 받는 runFunction 같은 함수를 고차 함수(higher-order function),
//   넘겨지는 add 같은 함수를 콜백 함수(callback function)라고 부른다
// → 다음 주 브라우저 수업의 addEventListener("click", sayHi)도 같은 원리
//   (괄호 없이 박스를 맡겨두면, 클릭될 때 대신 실행해 준다)