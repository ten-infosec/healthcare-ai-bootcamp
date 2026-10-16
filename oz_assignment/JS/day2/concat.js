
// SQL , Excel -> CONCAT
// concatenate :  연결하다. 


let first = "alex" ; 
let lastName = "Kim" ; 

// Hello, Alex Kim ! 
console.log("Hello, " + first + " " + lastName + "!");



// [문자열 + 숫자: JS vs Python]

// JS: 자료형이 달라도 자동 변환 (숫자 → 문자열로 바꿔서 이어 붙임)
console.log(10 + " 10");    // "10 10"
console.log("10" + 1);      // "101"

// Python이었다면?
// 10 + " 10"   → TypeError: unsupported operand type(s) for +: 'int' and 'str'
// "10" + 1     → TypeError: can only concatenate str (not "int") to str
// → Python은 자동 변환 X, 개발자가 직접 str() / int()로 바꿔야 함

// JS에서도 직접 바꿀 수 있음 (명시적 형 변환)
console.log(String(10) + " 10");   // "10 10"  ← 숫자를 문자열로
console.log(10 + Number(" 10"));   // 20       ← 문자열을 숫자로 (앞뒤 공백은 무시)

// [정리]
// JS:     자동 변환 O (암묵적 형 변환, type coercion) → 편하지만 실수하기 쉬움
// Python: 자동 변환 X (강한 타입) → 다르면 TypeError
// 의도를 분명히 하려면 JS에서도 String(), Number()로 직접 바꾸는 게 안전