// ===== Select elements =====

// 화면에서 사용할 태그들을 id로 찾아서 변수에 저장
const cryptoList = document.getElementById("cryptoList")       // 표의 tbody (행을 채울 곳)
const searchInput = document.getElementById("searchInput")     // 검색창
const loading = document.getElementById("loading")             // "불러오는 중" 문구
const statusText = document.getElementById("status")           // 마지막 갱신 시각 문구
const cryptoTable = document.getElementById("cryptoTable")     // 표 전체
const emptyMessage = document.getElementById("emptyMessage")   // 관심항목 없음 안내
const allTab = document.getElementById("allTab")               // 전체보기 탭
const favoritesTab = document.getElementById("favoritesTab")   // 관심항목 탭


// ===== State =====

// 서버에서 받은 USDT 종목 전체를 담아둘 배열 (매초 새로 덮어씀)
let allCryptoData = []

// localStorage에서 관심항목 목록을 꺼냄
// → 저장된 값은 JSON 문자열이라 JSON.parse로 배열로 되돌림
// → 처음 방문해서 값이 없으면 null이 나오므로 || [] 로 빈 배열을 대신 사용
let favorites = JSON.parse(localStorage.getItem("favorites")) || []

// 현재 보고 있는 탭: "all"(전체보기) 또는 "favorites"(관심항목)
let currentTab = "all"

// 요청이 아직 진행 중인지 표시하는 깃발
// → 서버 응답이 1초보다 늦으면 요청이 겹겹이 쌓이므로, 진행 중이면 새 요청을 건너뜀
let isFetching = false


// ===== Fetch data (GET every second) =====

function fetchCryptoData() {
    // 이전 요청이 아직 안 끝났으면 이번 차례는 건너뜀 (얼리 리턴)
    if (isFetching) return
    isFetching = true

    // 바이낸스 24시간 시세 API에 GET 요청
    fetch("https://api4.binance.com/api/v3/ticker/24hr")
        .then(response => {
            // 상태 코드가 200번대가 아니면 에러로 처리 → 아래 catch로 이동
            if (!response.ok) {
                throw new Error("데이터를 불러오는데 실패했습니다.")
            }
            // 응답을 JSON 데이터(자바스크립트 배열)로 변환해서 다음 then에 넘김
            return response.json()
        })
        .then(data => {
            // 심볼이 USDT로 끝나고, 현재가가 0이 아닌(거래 중단 아닌) 종목만 남김
            allCryptoData = data.filter(item =>
                item.symbol.endsWith("USDT") && parseFloat(item.lastPrice) !== 0
            )

            // 첫 응답이 오면 로딩 문구를 숨기고 표와 상태 문구를 보이게 함
            loading.classList.add("hidden")
            cryptoTable.classList.remove("hidden")
            statusText.classList.remove("hidden")

            // 탭·검색어 조건에 맞게 걸러서 화면에 그림
            filterAndRender()
        })
        .catch(error => {
            // 인터넷 끊김, 서버 오류 등이 나면 콘솔과 화면에 알림
            console.error("Error:", error)
            loading.textContent = "데이터를 불러오는 중 오류가 발생했습니다."
            loading.classList.remove("hidden")
        })
        .finally(() => {
            // 성공하든 실패하든 요청이 끝났으니 깃발을 내림
            isFetching = false
        })
}


// ===== Filter (tab + search) =====

function filterAndRender() {
    // 검색어를 대문자로 바꿈 → "eth"로 검색해도 "ETHUSDT"를 찾을 수 있게
    const searchTerm = searchInput.value.trim().toUpperCase()

    // 1차: 심볼에 검색어가 포함된 종목만 남김 (검색어가 비어 있으면 전부 통과)
    let filteredData = allCryptoData.filter(item => item.symbol.includes(searchTerm))

    // 2차: 관심항목 탭이면 favorites 배열에 들어 있는 종목만 남김
    if (currentTab === "favorites") {
        filteredData = filteredData.filter(item => favorites.includes(item.symbol))
    }

    renderData(filteredData)
}


// ===== Render =====

function renderData(data) {
    // 매초 새로 그리므로 기존 행을 먼저 비움 (오늘 배운 "비우고 다시 그리기")
    cryptoList.innerHTML = ""

    // 관심항목 탭인데 보여줄 종목이 없으면 안내 문구 표시
    const showEmpty = currentTab === "favorites" && data.length === 0
    emptyMessage.classList.toggle("hidden", !showEmpty)

    // 종목 하나마다 표의 행(tr)을 하나씩 만듦
    data.forEach(item => {
        const row = document.createElement("tr")

        // 24시간 변동률(문자열)을 숫자로 바꿈
        const priceChange = parseFloat(item.priceChangePercent)
        // 0 이상이면 상승(up, 빨강), 음수면 하락(down, 파랑)
        const changeClass = priceChange >= 0 ? "up" : "down"
        // 양수 앞에 + 기호 붙이기 (음수는 원래 - 가 붙어 있음)
        const sign = priceChange >= 0 ? "+" : ""
        // 이 종목이 관심항목에 들어 있는지
        const isFavorite = favorites.includes(item.symbol)

        // 행 안의 칸(td)들을 HTML 문자열로 한 번에 작성
        // → 별 버튼에는 data-symbol 속성으로 어떤 종목인지 적어둠 (클릭 시 사용)
        // → toLocaleString(): 1234.5 → "1,234.5" 처럼 천 단위 쉼표 넣기
        row.innerHTML = `
            <td>
                <button class="fav-btn ${isFavorite ? "active" : ""}" data-symbol="${item.symbol}">
                    ${isFavorite ? "★" : "☆"}
                </button>
            </td>
            <td class="symbol">${item.symbol}</td>
            <td>${parseFloat(item.lastPrice).toLocaleString()}</td>
            <td class="${changeClass}">${sign}${priceChange.toFixed(2)}%</td>
            <td>${parseFloat(item.highPrice).toLocaleString()}</td>
            <td>${parseFloat(item.lowPrice).toLocaleString()}</td>
        `

        // 완성된 행을 tbody에 붙임 → 이때 화면에 보임
        cryptoList.appendChild(row)
    })

    // 마지막 갱신 시각과 표시 종목 수 표시
    const now = new Date().toLocaleTimeString()
    statusText.textContent = `마지막 업데이트 ${now} · ${data.length}개 종목`
}


// ===== Favorites (localStorage) =====

function toggleFavorite(symbol) {
    // 배열에서 이 심볼의 위치를 찾음 (없으면 -1)
    const index = favorites.indexOf(symbol)

    if (index > -1) {
        // 이미 있으면 → 그 위치에서 1개 삭제 (관심 해제)
        favorites.splice(index, 1)
    } else {
        // 없으면 → 배열 끝에 추가 (관심 등록)
        favorites.push(symbol)
    }

    // 배열은 그대로 저장할 수 없으므로 JSON 문자열로 바꿔서 저장
    localStorage.setItem("favorites", JSON.stringify(favorites))

    // 별 모양을 바로 바꾸기 위해 다시 그림
    filterAndRender()
}

// 별 버튼 클릭 처리: 버튼마다 리스너를 다는 대신 tbody 하나에만 등록 (이벤트 위임)
// → 행은 매초 새로 만들어지므로, 버튼마다 달면 매번 다시 달아야 해서 비효율적
cryptoList.addEventListener("click", event => {
    // 클릭된 곳에서 가장 가까운 .fav-btn을 찾음 (별 버튼이 아니면 null)
    const button = event.target.closest(".fav-btn")
    if (!button) return

    // 버튼에 적어둔 data-symbol 값을 꺼내서 토글
    toggleFavorite(button.dataset.symbol)
})


// ===== Search =====

// 검색창에 글자를 입력할 때마다 바로 다시 걸러서 그림
searchInput.addEventListener("input", filterAndRender)


// ===== Tabs =====

// 탭 전환: 현재 탭 값을 바꾸고, active 클래스로 버튼 색을 바꾼 뒤 다시 그림
function switchTab(tab) {
    currentTab = tab
    allTab.classList.toggle("active", tab === "all")
    favoritesTab.classList.toggle("active", tab === "favorites")
    filterAndRender()
}

allTab.addEventListener("click", () => switchTab("all"))
favoritesTab.addEventListener("click", () => switchTab("favorites"))


// ===== Start =====

// 페이지를 열자마자 한 번 불러오고
fetchCryptoData()

// 이후 1초(1000ms)마다 반복해서 불러옴 → 실시간 업데이트
setInterval(fetchCryptoData, 1000)
