// 반복문(Loop Statement)
// 같은 코드를 여러 번 자동으로 실행하는 문법
// 종류: for (횟수·범위가 정해져 있을 때) / while (조건이 참인 동안 계속)

// ===== for =====
// 반복 조건: (시작; 조건; 증가량)
//   시작:   처음 한 번 실행                  → let num = 0
//   조건:   매번 돌기 전에 검사, false면 종료 → num < 10
//   증가량: 매번 블록 실행 후 변화            → num++ (num = num + 1)

// [1] 0 ~ 9 출력
// 파이썬: for num in range(10)   ← 시작 생략 시 0부터, 끝(10)은 미포함
for (let num = 0; num < 10; num++) {
    console.log(num);
}

// [2] 1 ~ 10 출력
// 파이썬: for num in range(1, 11)
for (let num = 1; num <= 10; num++) {
    console.log(num);
}

// [3] 3 ~ 7 출력
// 파이썬: for num in range(3, 8)
for (let num = 3; num < 8; num++) {
    console.log(num);
}

// [4] 간격(step): 0부터 3씩 건너뛰며 10 직전까지 → 0, 3, 6, 9
// 파이썬: for num in range(0, 10, 3)
for (let num = 0; num < 10; num += 3) {
    console.log(num);
}

// [5] 거꾸로: 10 ~ 1
// 파이썬: for num in range(10, 0, -1)
for (let num = 10; num > 0; num--) {
    console.log(num);
}

// ===== while =====
// while (조건) { ... } : 조건이 true인 동안 계속 반복
// for와 달리 시작값은 위에서 미리, 증가는 블록 안에서 직접 써야 함

// [6] 0 ~ 2 출력
// 파이썬: n = 0 / while n < 3: print(n); n += 1
let n = 0;              // 시작값 (반복문 밖에서 미리)
while (n < 3) {         // 조건
    console.log(n);
    n++;                // 증가량 (빼먹으면 n이 계속 0 → 무한 반복!)
}

// [주의] 무한 반복(infinite loop)
// while 안에서 n++를 빼먹으면 조건이 영원히 true → 프로그램이 안 끝남
// 터미널에서 멈추려면 Ctrl + C

// [정리] for vs while
// for:   반복 횟수·범위가 정해져 있을 때 (1~10, 배열 전체 등)
// while: 언제 끝날지 미리 모르고 "조건이 맞는 동안" 돌릴 때 (입력이 올 때까지 등)

// [정리] 파이썬 range ↔ JS for
// range(10)         → let i = 0;  i < 10;  i++
// range(1, 11)      → let i = 1;  i <= 10; i++
// range(0, 10, 3)   → let i = 0;  i < 10;  i += 3
// range(10, 0, -1)  → let i = 10; i > 0;   i--
// 0부터 세고 끝은 미포함: 데이크스트라 EWD831 "Why numbering should start at zero"