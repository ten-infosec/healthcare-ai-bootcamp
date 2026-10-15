# resume.html Type-Along Practice

> How to use
> - PART 0: Read the full code once from start to finish
> - PART 1: Look at each code section and type it 5 times in the blocks right below
> - PART 2: Read only the explanation and recall the code (peek at the code line above only if stuck)
> - PART 3: Type section by section while reading the code and explanation together
> - Type directly into the empty block under each section

---

# PART 0. Read the Full Code First

> Before typing, read the whole code once from top to bottom to get the flow. (Intro → Basic info → Hobbies → Career table → Form)

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

# PART 1. Type the Code Section by Section (5 Rounds Each)

> The code is split into sections. Look at each section and type it 5 times in the empty blocks right below.

## 1-1. Document Skeleton

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

## 1-3. Basic Info List

```html
    <ul type="square">
        <li>Name: Taeeun Eom</li>
        <li>Age: 35</li>
        <li>Year of Birth: 1991</li>
        <li>Gender: Male</li>
        <li>Location: Seoul, South Korea</li>
    </ul>
```

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

## 1-5. Career & Work Experience Table

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

## 1-6. Send Cover Letter Form

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

**Round 1**

```html

```

**Round 2**

```html

```

**Round 3**

```html

```

**Round 4**

```html

```

**Round 5**

```html

```

---

# PART 2. Type from the Explanation Only

> Look at the `code` above each explanation only when you get stuck. Covering it and recalling it first is the whole point.

## 2-1. Document Skeleton

`<!DOCTYPE html>`
→ Tell the browser this is an HTML5 document

`<html lang="en">`
→ Wrap the whole document and mark the page language as English

`<head>`
→ Open the area for document info that is not shown on screen

`<meta charset="UTF-8">`
→ Set the character encoding to UTF-8 so no characters break

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
→ Make the page fit the phone screen width

`<title>Taeeun Eom | Resume</title>`
→ Set the title shown on the browser tab

`</head>` / `<body>`
→ Close the info area and open the area for visible content

```html

```

## 2-2. Self Introduction

`<h1>Self Introduction.</h1>`
→ Write the first section title as the largest heading

`<hr>`
→ Draw a horizontal line under the title (no closing tag)

`<img src="lion_profile.jpg" alt="Profile image (white lion cub)" width="260">`
→ Show the image file in the same folder at 260px wide, with a text description shown if it fails to load

`<p>Hello, I'm Taeeun Eom, ...</p>`
→ Write the self-introduction as one paragraph

`<a href="https://github.com/ten-infosec/healthcare-ai-bootcamp" target="_blank">Go to my GitHub Repository</a>`
→ Create a link that opens the GitHub repository in a new tab

```html

```

## 2-3. Basic Info List

`<ul type="square">`
→ Open an unordered list with square (■) bullets

`<li>Name: Taeeun Eom</li>`
→ One list item (name)

`<li>Age: 35</li>` / `<li>Year of Birth: 1991</li>` / `<li>Gender: Male</li>` / `<li>Location: Seoul, South Korea</li>`
→ Add age, year of birth, gender, and location items the same way

`</ul>`
→ Close the list

```html

```

## 2-4. Hobby & Preference

`<h1>Hobby &amp; Preference</h1>`
→ Second section title / `&amp;` is the code that displays the `&` sign

`<hr>`
→ Divider line

`<ol type="i">`
→ Open an ordered list numbered with lowercase Roman numerals (i, ii, iii)

`<li>Hobby: ...</li>` ~ `<li>Motto: ...</li>`
→ Add 5 items: hobby, interests, favorite food, languages, motto

`</ol>`
→ Close the list

```html

```

## 2-5. Career & Work Experience Table

`<h1>Career &amp; Work Experience</h1>` / `<hr>`
→ Third section title and divider

`<table border="1">`
→ Open a table with visible borders

`<thead>` → `<tr>` → `<th>Organization</th>` `<th>Role</th>` `<th>Period</th>`
→ Inside the header group, make one row with 3 bold header cells

`<tbody>` → `<tr>` → `<td>...</td>` × 3
→ Inside the body group, put 3 cells in each career row (4 rows total)

`</tbody>` / `</table>`
→ Close the body group and the table

```html

```

## 2-6. Send Cover Letter Form

`<h1>Send Cover Letter</h1>` / `<hr>`
→ Last section title and divider

`<form action="https://httpbin.org/post" method="post">`
→ Open a form that collects input and sends it to a test server in the request body (POST)

`<label for="managerEmail">Manager's Email:</label>`
→ Make a label and connect it to the input whose id is managerEmail

`<input id="managerEmail" type="email" name="email" placeholder="email@example.com" required>`
→ Input that checks email format / name tag sent to the server is email / shows example text / blocks submit if empty

`<label for="companyName">Company:</label>` + `<input id="companyName" type="text" name="company" ... required>`
→ Make the company label and a plain text input the same way

`<button>Send Resume</button>`
→ A button that submits the form when clicked

`</form>` / `<hr>` / `</body>` / `</html>`
→ Close the form, body, and document in order

```html

```

---

# PART 3. Type with Code + Explanation

## 3-1. Document Skeleton

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

→ Declare an HTML5 document and mark the page language as English
→ Put invisible info in `head`: character encoding, mobile viewport, tab title
→ Write the actual visible content starting from `body`
→ Tip: In VS Code, `!` + `Tab` generates this automatically

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

→ Start the section with an `h1` title + `hr` divider
→ `img`: `src` (image location), `alt` (alternative text), `width` (width) / no closing tag
→ `p`: introduction paragraph
→ `a`: `href` (destination URL), `target="_blank"` (new tab)

```html

```

## 3-3. Basic Info List

```html
    <ul type="square">
        <li>Name: Taeeun Eom</li>
        <li>Age: 35</li>
        <li>Year of Birth: 1991</li>
        <li>Gender: Male</li>
        <li>Location: Seoul, South Korea</li>
    </ul>
```

→ `ul`: unordered list / `type="square"`: square bullets
→ `li`: each item / only `li` goes directly inside `ul`

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

→ `&amp;`: HTML entity that displays the `&` sign
→ `ol`: ordered list / `type="i"`: lowercase Roman numerals (`1`, `A`, `a`, `I`, `i` available)

```html

```

## 3-5. Career & Work Experience Table

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

→ `table`: the whole table / `border="1"`: show borders
→ `thead`: header row group / `tbody`: data row group
→ `tr`: one row / `th`: header cell (bold, centered) / `td`: data cell
→ There is no column tag → every row must have the same 3 cells or the table breaks

```html

```

## 3-6. Send Cover Letter Form

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

→ `form`: `action` (where to send), `method="post"` (send in the request body)
→ `label for` = `input id` → clicking the label text focuses the input
→ `input`: `type` (input kind), `name` (name tag sent to the server — no name, no data sent), `placeholder` (example text), `required` (block submit if empty)
→ `button`: submits when clicked inside a form
→ Finally close `body` and `html` to finish the document

```html

```

---

## Common Mistakes Checklist

- [ ] Did I forget the `>` at the end of an opening tag? (`<hr` ✗ → `<hr>` ✓)
- [ ] Do the attribute quotes match? (`type=""square"` ✗ → `type="square"` ✓)
- [ ] Did I forget any closing tags (`</ul>`, `</ol>`, `</table>`, `</form>`)?
- [ ] Did I avoid adding closing tags to empty elements (`<hr>`, `<img>`, `<input>`, `<meta>`)?
- [ ] Did I clean up indentation with `Shift + Alt + F`?
