// 조건문(conditional statement)
// if (조건) { 참일 때 실행 } else if (조건) { ... } else { 전부 거짓일 때 실행 }

let age = 20;

// [1] if / else if / else : 위에서부터 검사, 처음 맞는 블록 "하나만" 실행
if (age >= 19) {
    console.log("성인입니다.");
} else if (age >= 8) {
    console.log("학생입니다.");
} else {
    console.log("어린이입니다.");
}
// → 성인입니다.
// 주의: 범위가 좁은 조건(19 이상)을 먼저 써야 함

// [2] if 를 따로 2개 쓰면: 각각 검사해서 맞는 건 "전부" 실행
if (age >= 19) {
    console.log("성인입니다.");
}
if (age > 8) {
    console.log("어린이가 아닙니다");
}
// → 성인입니다. / 어린이가 아닙니다  (둘 다 출력)

// [3] truthy / falsy : 조건 자리에 값 자체를 넣을 수 있음
// truthy: true로 취급되는 값들 (falsy를 제외한 모든 값)
// falsy: false로 취급되는 값들(6개)
// -> false, 0, "", null, undefined, NaN

if ("a") {
    console.log('"a" → truthy');       // 출력됨
}
if ([]) {
    console.log("[] → truthy");        // 출력됨 (파이썬은 빈 리스트가 falsy!)
}
if ("0") {
    console.log('"0" → truthy');       // 출력됨 (문자열 "0"은 숫자 0이 아님)
}
if (0) {
    console.log("출력 안 됨");          // 0은 falsy
}

// [4] 예시: 로또 당첨자 (null = 일부러 비워 둔 값)
let selectedUser = null;   // 1로 바꾸면 truthy → 당첨

if (selectedUser) {
    console.log("축하합니다. 당첨입니다.");
} else {
    console.log("당첨자가 없습니다.");
}
// → 당첨자가 없습니다.

// 주의: 사용자 번호가 0번이면 falsy라 당첨이 안 됨
// → 정확히 확인하려면: if (selectedUser !== null)