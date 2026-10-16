// 변수 선언

// 파이썬에서의 변수 활용 예시 (설명용 - 실행 안 함)
// 1번
// email = "alex@gmail.com"
// print(email)

// 2번
// print("alex@gmail.com")

// [1번 vs 2번]
// 1번: 값을 변수(상자)에 담아 두고 이름으로 꺼내 씀
// 2번: 쓸 때마다 값을 직접 전부 입력함
// → 한 번 쓰고 마는 값은 2번도 OK
// → 다시 쓰거나 바뀔 수 있는 값은 1번처럼 변수에 담는 게 원칙
//    (값이 바뀌면 한 줄만 고치면 됨, 오타 줄어듦, 이름만 봐도 의미를 앎)

// JS에서는 이렇게 사용
const email = "alex@gmail.com";
console.log(email);

// let 변수
let age = 20;
console.log(age);

let username = "alex" ;
console.log(username) ; 

// constant : 상수 
const pi = 3.14; 
// pi += 1;  // 에러: const는 값을 바꿀 수 없음

// [파이썬 vs JavaScript 상수]
// 파이썬: LEARNING_RATE = 1e-4 처럼 대문자로 "상수"라고 약속만 함
//         → 진짜 상수 개념이 없어서 다시 넣으면 에러 없이 그냥 바뀜
// JS:     const learningRate = 1e-4;
//         → 언어가 직접 막아서 다시 넣으면 에러
//           (TypeError: Assignment to constant variable.)