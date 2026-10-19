// ===== 6. Function without return =====


// sayHello: 매개변수 없이(빈 괄호) 정의한 함수
function sayHello() {
    // console.log: 터미널에 "hello"를 출력만 한다 (값을 돌려주는 게 아님)
    // 이 함수에는 return이 없다
    console.log("hello");
}

// sayHello(): 괄호가 있으므로 호출 → 함수 안의 코드가 실행된다
// 실행이 끝나면 돌려받은 값을 hello 상자에 담는다
let hello = sayHello();    // 출력: hello

// hello 상자에 담긴 값을 출력한다
console.log(hello);        // 출력: undefined


// → sayHello()를 호출하겠다 → 함수 안의 console.log("hello")가 실행되어 터미널에 hello가 찍히겠다
// → 함수 끝까지 return을 만나지 못했으니, 자바스크립트가 자동으로 undefined를 반환하겠다
// → sayHello() 자리가 undefined로 바뀌어 let hello = undefined 가 되겠다
// → console.log(hello)가 undefined를 출력하겠다
// → 핵심: "출력(console.log)"과 "반환(return)"은 다르다
//   - 출력: 사람 눈에 보이게 화면에 찍는 것 → 값이 변수로 넘어가지 않음
//   - 반환: 결과를 호출한 자리로 돌려주는 것 → 변수에 담아 계속 쓸 수 있음