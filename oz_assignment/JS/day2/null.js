// null = "비어 있음"을 나타내는 값
// → 내가 값을 비워 놓고 싶을 때 의도적으로 사용

// 예시: 로또 당첨자가 아직 정해지지 않음 → null
let selectedUser = null;

console.log(selectedUser);          // null
console.log(typeof selectedUser);   // object (JS 초창기 버그, 원래 그렇다고 외우기)

// null은 0, false, ""와 다른 값
console.log(null === 0);      // false
console.log(null === false);  // false
console.log(null === "");     // false

// 하지만 if 조건에서는 전부 "거짓"처럼 동작 (falsy)
if (null) { console.log("실행 안 됨"); }
if (0)    { console.log("실행 안 됨"); }
if ("")   { console.log("실행 안 됨"); }

// [정리]
// null ≠ 0, false, "" (서로 다른 값)
// 단, if 조건에서는 모두 거짓 취급 = falsy
// falsy 6개: false, 0, "", null, undefined, NaN