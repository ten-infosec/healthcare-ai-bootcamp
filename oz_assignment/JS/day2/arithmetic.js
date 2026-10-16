// 산술 연산자(Arithmetic Operator): 숫자 계산

let n1 = 10;
let n2 = 3;

console.log(n1 + n2);   // 13  더하기
console.log(n1 - n2);   // 7   빼기
console.log(n1 * n2);   // 30  곱하기
console.log(n1 / n2);   // 3.3333333333333335  나누기 (소수까지 계산)

// 나머지
console.log(n1 % n2);   // 1

// 몫: JS에는 파이썬의 // 연산자가 없음 → Math.floor로 내림
// (주의: 음수면 floor는 더 작은 쪽으로 내림, 소수점만 버리려면 Math.trunc)
console.log(Math.floor(n1 / n2));   // 3

// 거듭제곱
console.log(n1 ** n2);  // 1000 (10의 3제곱)