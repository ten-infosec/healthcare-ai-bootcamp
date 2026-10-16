// undefined = 값이 아직 할당되지 않음
// assign(할당) = 변수에 값을 넣는 것

let score;
console.log(score);          // undefined
console.log(typeof score);   // undefined

// [변수 선언 vs 값 할당]
// age = 20 한 줄 안에서 두 가지 일이 일어남
//   [1] 변수 선언: age라는 상자를 만듦
//   [2] 값 할당:   그 상자에 20을 넣음

// 파이썬: [1]과 [2]를 나눌 수 없음 (항상 age = 20 처럼 같이)
//         → 그래서 파이썬에는 undefined가 없음
// JS:     [1]과 [2]를 나눌 수 있음
//         → [1]만 하고 [2]를 안 하면 undefined

let age;                    // [1] 선언만
console.log(age);           // undefined
console.log(typeof age);    // undefined

age = 20;                   // [2] 할당 (let은 이미 했으니 다시 안 씀)
console.log(age);           // 20

let score2 = 90;            // [1] + [2] 한 번에
console.log(score2);        // 90
// 주의: 같은 이름(score)을 let으로 두 번 선언하면 SyntaxError
//       → Identifier 'score' has already been declared

// const는 [1]과 [2]를 반드시 같이 해야 함
// const pi;                // 에러: 선언만 하면 안 됨
const pi = 3.14;
console.log(pi);            // 3.14

// [null vs undefined]
// null      = 개발자가 일부러 비워 둠 (직접 넣음)
// undefined = 아직 값을 안 넣음 (JS가 자동으로 넣음)