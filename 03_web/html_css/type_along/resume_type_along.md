# resume.html 따라치기 연습본

> 사용법
> - PART 0: 전체 코드를 처음부터 끝까지 한 번 읽기
> - PART 1: 구역별로 자른 코드를 보고, 바로 아래 빈 칸에 5번씩 받아 치기
> - PART 2: 설명만 보고 코드를 떠올려 치기 (막히면 설명 위의 코드 줄 참고)
> - PART 3: 코드와 설명을 함께 보면서 구역별로 치기
> - 각 칸 아래 빈 블록에 직접 입력하세요

---

# PART 0. 전체 코드 먼저 읽기

> 치기 전에 전체 코드를 위에서 아래로 한 번 읽으면서 흐름을 잡으세요. (자기소개 → 기본 정보 → 취미 → 경력 표 → 폼)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taeeun Eom | Resume</title>
</head>
<body>
    <h1>Self Introduction.</h1>
    <hr>

    <img src="lion_profile.jpg" alt="Profile image (white lion cub)" width="260">

    <p>Hello, I'm Taeeun Eom, an aspiring developer who wants to turn healthcare data into services that truly help people. I look forward to learning and growing with you.</p>

    <a href="https://github.com/ten-infosec/healthcare-ai-bootcamp" target="_blank">Go to my GitHub Repository</a>

    <ul type="square">
        <li>Name: Taeeun Eom</li>
        <li>Age: 35</li>
        <li>Year of Birth: 1991</li>
        <li>Gender: Male</li>
        <li>Location: Seoul, South Korea</li>
    </ul>

    <h1>Hobby &amp; Preference</h1>
    <hr>

    <ol type="i">
        <li>Hobby: Swimming, hiking, reading</li>
        <li>Interests: Healthcare AI, neuroscience, cybersecurity, RSA, quantum computing, satellite security</li>
        <li>Favorite Food: Sushi, barbecue</li>
        <li>Languages: Korean (native), English, French</li>
        <li>Motto: "Just one step further today than I was yesterday."</li>
    </ol>

    <h1>Career &amp; Work Experience</h1>
    <hr>

    <table border="1">
        <thead>
            <tr>
                <th>Organization</th>
                <th>Role</th>
                <th>Period</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>OZ Coding School - Healthcare AI Bootcamp</td>
                <td>Trainee</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>Team Vital - Smoking &amp; Health Data Analysis</td>
                <td>Team Leader</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>DACON - Infertility Pregnancy Prediction AI</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>E-Sight - Veterinary Multimodal AI Service</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
        </tbody>
    </table>

    <h1>Send Cover Letter</h1>
    <hr>

    <form action="https://httpbin.org/post" method="post">
        <label for="managerEmail">Manager's Email:</label>
        <input id="managerEmail" type="email" name="email" placeholder="email@example.com" required>

        <label for="companyName">Company:</label>
        <input id="companyName" type="text" name="company" placeholder="Paran Company Inc." required>

        <button>Send Resume</button>
    </form>
    <hr>
</body>
</html>
```

---

# PART 1. 구역별 코드 따라치기 (구역마다 5회)

> 코드를 구역별로 잘라 두었어요. 위의 코드를 보고 바로 아래 빈 칸에 5번 받아 치세요.

## 1-1. 문서 뼈대

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taeeun Eom | Resume</title>
</head>
<body>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-2. Self Introduction

```html
    <h1>Self Introduction.</h1>
    <hr>

    <img src="lion_profile.jpg" alt="Profile image (white lion cub)" width="260">

    <p>Hello, I'm Taeeun Eom, an aspiring developer who wants to turn healthcare data into services that truly help people. I look forward to learning and growing with you.</p>

    <a href="https://github.com/ten-infosec/healthcare-ai-bootcamp" target="_blank">Go to my GitHub Repository</a>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-3. 기본 정보 목록

```html
    <ul type="square">
        <li>Name: Taeeun Eom</li>
        <li>Age: 35</li>
        <li>Year of Birth: 1991</li>
        <li>Gender: Male</li>
        <li>Location: Seoul, South Korea</li>
    </ul>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-4. Hobby & Preference

```html
    <h1>Hobby &amp; Preference</h1>
    <hr>

    <ol type="i">
        <li>Hobby: Swimming, hiking, reading</li>
        <li>Interests: Healthcare AI, neuroscience, cybersecurity, RSA, quantum computing, satellite security</li>
        <li>Favorite Food: Sushi, barbecue</li>
        <li>Languages: Korean (native), English, French</li>
        <li>Motto: "Just one step further today than I was yesterday."</li>
    </ol>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-5. Career & Work Experience 표

```html
    <h1>Career &amp; Work Experience</h1>
    <hr>

    <table border="1">
        <thead>
            <tr>
                <th>Organization</th>
                <th>Role</th>
                <th>Period</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>OZ Coding School - Healthcare AI Bootcamp</td>
                <td>Trainee</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>Team Vital - Smoking &amp; Health Data Analysis</td>
                <td>Team Leader</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>DACON - Infertility Pregnancy Prediction AI</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>E-Sight - Veterinary Multimodal AI Service</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
        </tbody>
    </table>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

## 1-6. Send Cover Letter 폼

```html
    <h1>Send Cover Letter</h1>
    <hr>

    <form action="https://httpbin.org/post" method="post">
        <label for="managerEmail">Manager's Email:</label>
        <input id="managerEmail" type="email" name="email" placeholder="email@example.com" required>

        <label for="companyName">Company:</label>
        <input id="companyName" type="text" name="company" placeholder="Paran Company Inc." required>

        <button>Send Resume</button>
    </form>
    <hr>
</body>
</html>
```

**1회차**

```html

```

**2회차**

```html

```

**3회차**

```html

```

**4회차**

```html

```

**5회차**

```html

```

---

# PART 2. 설명만 보고 치기

> 각 설명 위의 `코드`는 막혔을 때만 보세요. 손으로 가리고 먼저 떠올려 보는 게 연습 포인트예요.

## 2-1. 문서 뼈대

`<!DOCTYPE html>`
→ 이 문서는 HTML5 문서라고 브라우저에 알리겠다

`<html lang="en">`
→ 문서 전체를 감싸고, 페이지 언어를 영어로 표시하겠다

`<head>`
→ 화면에 보이지 않는 문서 정보 영역을 열겠다

`<meta charset="UTF-8">`
→ 모든 글자가 깨지지 않게 문자 인코딩을 UTF-8로 정하겠다

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
→ 휴대폰 화면 폭에 맞춰 보이게 하겠다

`<title>Taeeun Eom | Resume</title>`
→ 브라우저 탭에 보일 제목을 정하겠다

`</head>` / `<body>`
→ 정보 영역을 닫고, 화면에 보일 내용 영역을 열겠다

```html

```

## 2-2. Self Introduction

`<h1>Self Introduction.</h1>`
→ 첫 구역 제목을 가장 큰 제목으로 쓰겠다

`<hr>`
→ 제목 아래 가로 구분선을 긋겠다 (닫는 태그 없음)

`<img src="lion_profile.jpg" alt="Profile image (white lion cub)" width="260">`
→ 같은 폴더의 이미지 파일을 가로 260px로 보여 주고, 안 뜰 때 대신 보일 설명을 달겠다

`<p>Hello, I'm Taeeun Eom, ...</p>`
→ 자기소개 문장을 한 문단으로 쓰겠다

`<a href="https://github.com/ten-infosec/healthcare-ai-bootcamp" target="_blank">Go to my GitHub Repository</a>`
→ 클릭하면 깃허브 저장소가 새 탭에서 열리는 링크를 만들겠다

```html

```

## 2-3. 기본 정보 목록

`<ul type="square">`
→ 글머리 기호가 네모(■)인 순서 없는 목록을 열겠다

`<li>Name: Taeeun Eom</li>`
→ 목록 항목 하나 (이름)

`<li>Age: 35</li>` / `<li>Year of Birth: 1991</li>` / `<li>Gender: Male</li>` / `<li>Location: Seoul, South Korea</li>`
→ 나이, 출생년도, 성별, 거주지 항목을 같은 방식으로 추가하겠다

`</ul>`
→ 목록을 닫겠다

```html

```

## 2-4. Hobby & Preference

`<h1>Hobby &amp; Preference</h1>`
→ 두 번째 구역 제목 / `&amp;`는 `&` 기호를 화면에 표시하는 코드

`<hr>`
→ 구분선

`<ol type="i">`
→ 번호가 로마 숫자 소문자(i, ii, iii)인 순서 있는 목록을 열겠다

`<li>Hobby: ...</li>` ~ `<li>Motto: ...</li>`
→ 취미, 관심사, 좋아하는 음식, 사용 언어, 좌우명 5개 항목을 넣겠다

`</ol>`
→ 목록을 닫겠다

```html

```

## 2-5. Career & Work Experience 표

`<h1>Career &amp; Work Experience</h1>` / `<hr>`
→ 세 번째 구역 제목과 구분선

`<table border="1">`
→ 테두리가 보이는 표를 열겠다

`<thead>` → `<tr>` → `<th>Organization</th>` `<th>Role</th>` `<th>Period</th>`
→ 제목 줄 묶음 안에 행 하나를 만들고, 굵은 제목 칸 3개를 넣겠다

`<tbody>` → `<tr>` → `<td>...</td>` × 3
→ 데이터 줄 묶음 안에 경력 한 줄(행)마다 칸 3개씩 넣겠다 (총 4줄)

`</tbody>` / `</table>`
→ 데이터 묶음과 표를 닫겠다

```html

```

## 2-6. Send Cover Letter 폼

`<h1>Send Cover Letter</h1>` / `<hr>`
→ 마지막 구역 제목과 구분선

`<form action="https://httpbin.org/post" method="post">`
→ 입력값을 모아 테스트 서버로, 요청 본문에 담아(POST) 보내는 폼을 열겠다

`<label for="managerEmail">Manager's Email:</label>`
→ 입력칸 이름표를 만들고, id가 managerEmail인 입력칸과 연결하겠다

`<input id="managerEmail" type="email" name="email" placeholder="email@example.com" required>`
→ 이메일 형식을 검사하는 입력칸 / 서버로 보낼 이름표는 email / 예시 글자 표시 / 비어 있으면 전송 막기

`<label for="companyName">Company:</label>` + `<input id="companyName" type="text" name="company" ... required>`
→ 회사명 이름표와 일반 글자 입력칸을 같은 방식으로 만들겠다

`<button>Send Resume</button>`
→ 누르면 폼을 전송하는 버튼

`</form>` / `<hr>` / `</body>` / `</html>`
→ 폼, 본문, 문서를 차례로 닫겠다

```html

```

---

# PART 3. 코드 + 설명 함께 보며 치기

## 3-1. 문서 뼈대

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taeeun Eom | Resume</title>
</head>
<body>
```

→ HTML5 문서임을 알리고, 페이지 언어를 영어로 표시하겠다
→ `head`에는 글자 인코딩, 휴대폰 화면 설정, 탭 제목 같은 보이지 않는 정보를 넣겠다
→ `body`부터 실제 화면 내용을 쓰겠다
→ 팁: VS Code에서 `!` + `Tab`으로 자동 생성 가능

```html

```

## 3-2. Self Introduction

```html
    <h1>Self Introduction.</h1>
    <hr>

    <img src="lion_profile.jpg" alt="Profile image (white lion cub)" width="260">

    <p>Hello, I'm Taeeun Eom, an aspiring developer who wants to turn healthcare data into services that truly help people. I look forward to learning and growing with you.</p>

    <a href="https://github.com/ten-infosec/healthcare-ai-bootcamp" target="_blank">Go to my GitHub Repository</a>
```

→ `h1` 제목 + `hr` 구분선으로 구역을 시작하겠다
→ `img`: `src`(이미지 위치), `alt`(대체 글), `width`(가로 크기) / 닫는 태그 없음
→ `p`: 소개 문단
→ `a`: `href`(이동할 주소), `target="_blank"`(새 탭)

```html

```

## 3-3. 기본 정보 목록

```html
    <ul type="square">
        <li>Name: Taeeun Eom</li>
        <li>Age: 35</li>
        <li>Year of Birth: 1991</li>
        <li>Gender: Male</li>
        <li>Location: Seoul, South Korea</li>
    </ul>
```

→ `ul`: 순서 없는 목록 / `type="square"`: 네모 글머리
→ `li`: 항목 하나하나 / `ul` 바로 안에는 `li`만 넣는다

```html

```

## 3-4. Hobby & Preference

```html
    <h1>Hobby &amp; Preference</h1>
    <hr>

    <ol type="i">
        <li>Hobby: Swimming, hiking, reading</li>
        <li>Interests: Healthcare AI, neuroscience, cybersecurity, RSA, quantum computing, satellite security</li>
        <li>Favorite Food: Sushi, barbecue</li>
        <li>Languages: Korean (native), English, French</li>
        <li>Motto: "Just one step further today than I was yesterday."</li>
    </ol>
```

→ `&amp;`: 화면에 `&` 기호를 표시하는 HTML 엔티티
→ `ol`: 순서 있는 목록 / `type="i"`: 로마 숫자 소문자 번호 (`1`, `A`, `a`, `I`, `i` 가능)

```html

```

## 3-5. Career & Work Experience 표

```html
    <h1>Career &amp; Work Experience</h1>
    <hr>

    <table border="1">
        <thead>
            <tr>
                <th>Organization</th>
                <th>Role</th>
                <th>Period</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>OZ Coding School - Healthcare AI Bootcamp</td>
                <td>Trainee</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>Team Vital - Smoking &amp; Health Data Analysis</td>
                <td>Team Leader</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>DACON - Infertility Pregnancy Prediction AI</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>E-Sight - Veterinary Multimodal AI Service</td>
                <td>Team Member</td>
                <td>2026</td>
            </tr>
        </tbody>
    </table>
```

→ `table`: 표 전체 / `border="1"`: 테두리 표시
→ `thead`: 제목 줄 묶음 / `tbody`: 데이터 줄 묶음
→ `tr`: 행 하나 / `th`: 제목 칸(굵게·가운데) / `td`: 데이터 칸
→ 열 태그는 따로 없음 → 모든 행의 칸 수를 3개로 똑같이 맞춰야 표가 어긋나지 않는다

```html

```

## 3-6. Send Cover Letter 폼

```html
    <h1>Send Cover Letter</h1>
    <hr>

    <form action="https://httpbin.org/post" method="post">
        <label for="managerEmail">Manager's Email:</label>
        <input id="managerEmail" type="email" name="email" placeholder="email@example.com" required>

        <label for="companyName">Company:</label>
        <input id="companyName" type="text" name="company" placeholder="Paran Company Inc." required>

        <button>Send Resume</button>
    </form>
    <hr>
</body>
</html>
```

→ `form`: `action`(보낼 주소), `method="post"`(요청 본문에 담아 보내기)
→ `label for` = `input id` → 이름표 글자를 눌러도 입력칸 선택
→ `input`: `type`(입력 종류), `name`(서버로 보낼 이름표, 없으면 전송 안 됨), `placeholder`(예시 글자), `required`(빈칸이면 전송 막기)
→ `button`: 폼 안에 있으면 누를 때 전송
→ 마지막으로 `body`, `html`을 닫아 문서를 마무리한다

```html

```

---

## 자주 하는 실수 체크

- [ ] 여는 태그 끝 `>` 빠뜨리지 않았나? (`<hr` ✗ → `<hr>` ✓)
- [ ] 속성 따옴표 짝이 맞나? (`type=""square"` ✗ → `type="square"` ✓)
- [ ] 닫는 태그(`</ul>`, `</ol>`, `</table>`, `</form>`)를 빠뜨리지 않았나?
- [ ] 빈 요소(`<hr>`, `<img>`, `<input>`, `<meta>`)에 닫는 태그를 붙이지 않았나?
- [ ] `Shift + Alt + F`로 들여쓰기를 정리했나?
