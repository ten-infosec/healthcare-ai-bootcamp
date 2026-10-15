# HTML Basics Type-Along Practice

> Contains the 14 examples from the HTML basics part (pp. 4–36) of the lecture deck in order.
>
> How to use
> - PART 0: Read all examples once from start to finish
> - PART 1: Look at each example and type it 5 times in the blocks right below
> - PART 2: Read only the explanation and recall the code (peek at the code line above only if stuck)
> - PART 3: Type each example while reading the code and explanation together
> - For examples showing only `<body>`, write them inside the `!` + `Tab` skeleton

---

# PART 0. Read All Examples First

> Before typing, skim the 14 examples top to bottom to get the flow.

### 1. Basic HTML Structure — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
    </body>
</html>
```

### 2. `<p>` Tag (Paragraph) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
```

### 3. `<h#>` Tags (Headings) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

### 4. `<hr>` Tag (Divider) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

### 5. `<ul>` + `<li>` Tags (Unordered List) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```

### 6. `<ol>` + `<li>` Tags (Ordered List) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```

### 7. `<table>` Tag (Table) + border Attribute — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
```

### 8. `<img>` Tag (Image) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
```

### 9. `<a>` Tag (Link) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
```

### 10. `<form>` Tag — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
```

### 11. `<form>` Tag — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
```

### 12. Sign-Up Form + `id` Attribute + Regex — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
```

### 13. `class` Attribute + `<div>` Tag — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
```

### 14. Semantic Tags (Supplementary Example) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
```

---

# PART 1. Type Each Example (5 Rounds Each)

> Look at the code and type it 5 times in the empty blocks right below.

## 1-1. Basic HTML Structure — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
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

## 1-2. `<p>` Tag (Paragraph) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
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

## 1-3. `<h#>` Tags (Headings) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
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

## 1-4. `<hr>` Tag (Divider) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
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

## 1-5. `<ul>` + `<li>` Tags (Unordered List) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
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

## 1-6. `<ol>` + `<li>` Tags (Ordered List) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
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

## 1-7. `<table>` Tag (Table) + border Attribute — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
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

## 1-8. `<img>` Tag (Image) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
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

## 1-9. `<a>` Tag (Link) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
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

## 1-10. `<form>` Tag — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
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

## 1-11. `<form>` Tag — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
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

## 1-12. Sign-Up Form + `id` Attribute + Regex — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
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

## 1-13. `class` Attribute + `<div>` Tag — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
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

## 1-14. Semantic Tags (Supplementary Example) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
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

## 2-1. Basic HTML Structure — `hello.html`

`<!DOCTYPE html>`
→ Tell the browser this is an HTML5 document

`<html>`
→ Open the top-level tag (every element goes inside it)

`<head>`
→ Open the invisible settings area (title, encoding, CSS, meta info)

`<title>My Page</title>`
→ Set the title shown on the browser tab and in search results

`</head>`
→ Close the head area

`<body>`
→ Open the area for content actually shown on screen

`Hello, HTML`
→ Text inside body is displayed as is

`</body>`
→ Close the body area

`</html>`
→ Close the whole document

```html

```

## 2-2. `<p>` Tag (Paragraph) — `paragraphs.html`

`<p>Hello, World!</p>`
→ Make one paragraph (automatic space above and below)

`<p>Hello, World!</p> ×2`
→ Make the same paragraph two more times

```html

```

## 2-3. `<h#>` Tags (Headings) — `headings.html`

`<h1>One</h1>`
→ Write the largest heading (level 1)

`<p>Hello, World!</p>`
→ A paragraph under the heading

`<h2>Two</h2>`
→ Level 2 heading

`<h3>Three</h3>`
→ Level 3 heading

```html

```

## 2-4. `<hr>` Tag (Divider) — `headings.html`

`<hr>`
→ Draw a horizontal divider (no closing tag)

`<h2>Two</h2> / <p>…</p>`
→ The next section below the divider

```html

```

## 2-5. `<ul>` + `<li>` Tags (Unordered List) — `list.html`

`<ul>`
→ Open an unordered list (● bullets)

`<li>foo</li>`
→ One list item

`<li>bar</li> / <li>baz</li>`
→ Two more items

`</ul>`
→ Close the list

```html

```

## 2-6. `<ol>` + `<li>` Tags (Ordered List) — `list.html`

`<ol>`
→ Open an ordered list (1, 2, 3)

`<li>foo</li> / <li>bar</li> / <li>baz</li>`
→ Three items numbered automatically

`</ol>`
→ Close the list

```html

```

## 2-7. `<table>` Tag (Table) + border Attribute — `table.html`

`<table border="1">`
→ Open a table with visible borders

`<thead>`
→ Open the header row group

`<tr>`
→ Open a row

`<th>이름</th> / <th>나이</th>`
→ Two bold, centered header cells

`</tr> / </thead>`
→ Close the row and the header group

`<tbody>`
→ Open the data row group

`<tr> <td>alex</td> <td>20</td> </tr>`
→ One data row (two cells)

`<tr> <td>bob</td> <td>30</td> </tr>`
→ One more data row

`</tbody> / </table>`
→ Close the data group and the table

```html

```

## 2-8. `<img>` Tag (Image) — `image.html`

`<img src="pizza.jpeg" alt="pizza">`
→ Show pizza.jpeg from the same folder; show "pizza" if it fails to load

`<img src="hamburger.jpeg" alt="hamburger">`
→ Second image

```html

```

## 2-9. `<a>` Tag (Link) — `link.html`

`Visit`
→ Plain text before the link

`<a href="https://google.com">Google</a>`
→ Make "Google" a link that goes to Google

```html

```

## 2-10. `<form>` Tag — GET — `form.html`

`<!-- GET -->`
→ A comment (memo) not shown on screen

`<form action="https://google.com/search" method="get">`
→ Open a form that sends input to Google search, appended to the URL (GET)

`<input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">`
→ Search input / hint text / name tag q / cursor on page load / autocomplete off

`<button>입력</button>`
→ A button that submits the form

`</form>`
→ Close the form

```html

```

## 2-11. `<form>` Tag — POST — `form.html`

`<!-- POST -->`
→ Comment

`<form action="https://httpbin.org/post" method="post">`
→ Open a form that sends to a test server (which echoes requests) in the request body (POST)

`<input type="text" placeholder="Username" name="username" autofocus autocomplete="off">`
→ Plain text input / name tag username

`<button>전송</button>`
→ Submit button

```html

```

## 2-12. Sign-Up Form + `id` Attribute + Regex — `register.html`

`<form>`
→ Open the sign-up form (no action → sends to the current page)

`<label for="email">Email</label>`
→ Label for the input whose id is email

`<input id="email" type="email" required placeholder="example@email.com">`
→ Email format check / block empty submit / example text (split across lines when there are many attributes)

`<br>`
→ Line break

`<label for="phone">Phone</label>`
→ Phone label

`<input id="phone" type="text" required placeholder="010-1234-5678"`
→ Start of the phone input

`pattern="010-[0-9]{4}-[0-9]{4}"`
→ Regex format check: 010- + 4 digits + - + 4 digits

`title="010-1234-5678 형식으로 입력하세요">`
→ Hint shown when the format is wrong

`<button type="submit">Submit</button>`
→ Submit button (`type="submit"` stated explicitly)

`</form>`
→ Close the form

```html

```

## 2-13. `class` Attribute + `<div>` Tag — `div.html`

`<div class="intro">`
→ Open a plain grouping box and give it the group name intro

`<h1>What is HTML?</h1>`
→ Heading inside the box

`<p>HTML is Hypertext Markup Language</p>`
→ Paragraph inside the box

`</div>`
→ Close the box

```html

```

## 2-14. Semantic Tags (Supplementary Example) — `semantic.html`

`<header>`
→ Open the top area (logo, site title)

`<main>`
→ Open the main content area

`<footer>`
→ Open the bottom info area (copyright, contact)

`&copy;`
→ HTML entity that displays ©

```html

```

---

# PART 3. Type with Code + Explanation

## 3-1. Basic HTML Structure — `hello.html`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        Hello, HTML
    </body>
</html>
```

→ Every HTML document has this basic frame
→ Tags nested inside tags create the document hierarchy
→ The browser parses HTML into a DOM (tree), applies CSS, and draws the screen
→ Tip: In VS Code, `!` + `Tab` generates it (write each practice file inside this skeleton's `<body>`)

```html

```

## 3-2. `<p>` Tag (Paragraph) — `paragraphs.html`

```html
<body>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
    <p>Hello, World!</p>
</body>
```

→ Without `<p>`, multiple lines of text run together on one line even with Enter
→ Wrapping in `<p>` splits them into separate paragraphs

```html

```

## 3-3. `<h#>` Tags (Headings) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

→ There are `h1` to `h6`; the smaller the number, the bigger and more important
→ Used for document structure (outline) rather than size → usually one `h1` per page
→ `$ cp paragraphs.html headings.html`: start by copying the previous file

```html

```

## 3-4. `<hr>` Tag (Divider) — `headings.html`

```html
<body>
    <h1>One</h1>
    <p>Hello, World!</p>
    <hr>
    <h2>Two</h2>
    <p>Hello, World!</p>
    <hr>
    <h3>Three</h3>
    <p>Hello, World!</p>
</body>
```

→ `hr` = horizontal rule
→ An empty element with no content, so no closing tag (same for `<br>`, `<img>`, `<input>`, `<meta>`)

```html

```

## 3-5. `<ul>` + `<li>` Tags (Unordered List) — `list.html`

```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```

→ `ul` = Unordered List, `li` = List Item
→ Only `li` goes directly inside `ul`
→ `type` attribute: `disc` (●, default), `circle` (○), `square` (■)

```html

```

## 3-6. `<ol>` + `<li>` Tags (Ordered List) — `list.html`

```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```

→ `ol` = Ordered List
→ `type` attribute: `1` (default), `A`, `a`, `I`, `i` / `start` attribute: starting number
→ Written below the `ul` in the same `list.html` (the `…` in the lecture code)

```html

```

## 3-7. `<table>` Tag (Table) + border Attribute — `table.html`

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th>이름</th>
                <th>나이</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>alex</td>
                <td>20</td>
            </tr>
            <tr>
                <td>bob</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
</body>
```

→ `tr` = table row, `th` = table header, `td` = table data
→ There is no column tag → every row needs the same number of cells
→ `border="1"` is an **attribute** that adds info to a tag — written only in the opening tag, can have several

> Note: The lecture slide ends with `<table>`, but the correct closing tag is `</table>`.

```html

```

## 3-8. `<img>` Tag (Image) — `image.html`

```html
<body>
    <img src="pizza.jpeg" alt="pizza">
    <img src="hamburger.jpeg" alt="hamburger">
</body>
```

→ `src` (source): image location — a file name (relative path) or a web URL
→ `alt` (alternative): text shown if the image fails, read aloud by screen readers
→ Empty element, no closing tag / `width` adjusts the size

```html

```

## 3-9. `<a>` Tag (Link) — `link.html`

```html
<body>
    Visit <a href="https://google.com">Google</a>
</body>
```

→ `a` = anchor, `href` = hypertext reference (destination URL)
→ Add `target="_blank"` to open in a new tab

```html

```

## 3-10. `<form>` Tag — GET — `form.html`

```html
<body>
    <!-- GET -->
    <form action="https://google.com/search" method="get">
        <input type="search" placeholder="Search..." name="q" autofocus autocomplete="off">
        <button>입력</button>
    </form>
</body>
```

→ GET: data is appended to the URL → `https://google.com/search?q=keyword` (default if `method` is omitted)
→ Without `name`, the value is not sent
→ `autofocus`: cursor goes there automatically / `autocomplete="off"`: no autofill suggestions

```html

```

## 3-11. `<form>` Tag — POST — `form.html`

```html
<!-- POST -->
<form action="https://httpbin.org/post" method="post">
    <input type="text" placeholder="Username" name="username" autofocus autocomplete="off">
    <button>전송</button>
</form>
```

→ POST: data goes in the request body → not visible in the URL (login, sign-up)
→ `httpbin.org/post` echoes the sent data back under `"form"` → for checking
→ Written below the GET form in the same `form.html`

```html

```

## 3-12. Sign-Up Form + `id` Attribute + Regex — `register.html`

```html
<form>
    <label for="email">Email</label>
    <input
        id="email" type="email" required
        placeholder="example@email.com"
    >
    <br>

    <label for="phone">Phone</label>
    <input
        id="phone" type="text" required
        placeholder="010-1234-5678"
        pattern="010-[0-9]{4}-[0-9]{4}"
        title="010-1234-5678 형식으로 입력하세요"
    >
    <br>
    <button type="submit">Submit</button>
</form>
```

→ `id`: a **unique** identifier on the page → never give the same id to two elements
→ `label for` value = `input id` value → clicking the label focuses the input
→ Regex: `[0-9]` one digit 0–9, `{4}` repeat 4 times, `.` any char, `*` 0 or more, `+` 1 or more, `?` 0 or 1, `\d` digit, `^` start, `$` end

```html

```

## 3-13. `class` Attribute + `<div>` Tag — `div.html`

```html
<div class="intro">
    <h1>What is HTML?</h1>
    <p>HTML is Hypertext Markup Language</p>
</div>
```

→ `class`: a name grouping elements with shared traits → reusable on many elements (unlike `id`)
→ CSS styles are applied based on class
→ `div` = division: a box that groups an area with no meaning

```html

```

## 3-14. Semantic Tags (Supplementary Example) — `semantic.html`

```html
<body>
    <header>
        <h1>My Page</h1>
    </header>
    <main>
        <p>핵심 콘텐츠</p>
    </main>
    <footer>
        <p>Copyright &copy; 2026</p>
    </footer>
</body>
```

→ Semantic: writing tags that carry meaning themselves
→ `div` is a meaningless group; `header` / `main` / `footer` have clear roles
→ Looks the same as `div` on screen, but search engines and screen readers understand the structure

> Note: The slide (p.36) only explains the concept, so this is a supplementary example.

```html

```

---

## Common Mistakes Checklist

- [ ] Did I forget the `>` at the end of an opening tag? (`<hr` ✗ → `<hr>` ✓)
- [ ] Do the attribute quotes match? (`type=""square"` ✗ → `type="square"` ✓)
- [ ] Did I forget any closing tags (`</ul>`, `</ol>`, `</table>`, `</form>`, `</div>`)?
- [ ] Did I avoid adding closing tags to empty elements (`<hr>`, `<br>`, `<img>`, `<input>`, `<meta>`)?
- [ ] Did I give form inputs a `name`? (without it, nothing is sent)
- [ ] Do the `label for` and `input id` values match?
- [ ] Did I write HTML comments as `<!-- -->`? (`#` is not a comment)
- [ ] Did I clean up indentation with `Shift + Alt + F`?
