# Git & GitHub 학습 정리

> 2026-10-07 · 오즈코딩스쿨 AI 헬스케어 부트캠프 · Part.3 WEB — Git & GitHub

---

## 1. Git / GitHub

### 1-1. Git & GitHub를 사용해야 하는 이유

| 이유 | 설명 |
|---|---|
| **버전 관리** | 파일이 언제, 무엇이, 왜 바뀌었는지 기록이 남는다. `보고서_최종_진짜최종.docx` 같은 파일 복사 없이 원하는 시점으로 되돌릴 수 있다. |
| **안전한 실험** | 브랜치를 나눠서 새 기능을 시도하고, 실패하면 버리면 된다. 원래 잘 되던 코드는 그대로 남는다. |
| **협업** | 여러 사람이 각자 브랜치에서 동시에 작업한 뒤 병합(merge)할 수 있다. 팀원끼리 **코드 리뷰**(서로의 코드를 확인하고 피드백)도 가능하다. |
| **백업 & 중앙 저장소** | GitHub는 클라우드 기반 중앙 저장소 역할을 한다. 내 컴퓨터가 고장 나도 코드가 남고, 언제 어디서든 접근할 수 있다. |
| **오픈소스 & 공유** | 다른 사람의 오픈소스 프로젝트에 기여하거나, 내 프로젝트를 공개해 피드백을 받을 수 있다. 작업 기록이 곧 포트폴리오가 된다. |
| **CI/CD & 자동화** | push하면 자동으로 테스트·배포하도록 연결할 수 있다. (CI/CD = 지속적 통합/배포. 코드를 올릴 때마다 검사와 배포를 자동으로 반복하는 것. 예: GitHub Actions) |
| **문서화 & 프로젝트 관리** | `README.md`로 프로젝트 개요·사용법을 정리하고, **이슈(Issue)** 로 할 일과 버그를 관리할 수 있다. |

### 1-2. Git과 GitHub의 차이

| | Git | GitHub |
|---|---|---|
| **정체** | 버전 관리 **프로그램** | Git 저장소를 올려두는 **웹 서비스** |
| **위치** | 내 컴퓨터(로컬) | 인터넷(원격) |
| **인터넷** | 없어도 사용 가능 | 필요 |
| **비유** | 일기장 | 일기장을 보관·공유하는 도서관 |

> Git 없이 GitHub는 의미가 없지만, GitHub 없이 Git은 혼자서도 쓸 수 있다.
> GitHub 말고도 GitLab, Bitbucket 같은 비슷한 서비스가 있다.

**Git의 특징**

- **버전 관리**: 모든 파일·폴더의 변경을 커밋 단위로 기록해, 과거 특정 시점으로 되돌아갈 수 있다.
- **분산형 시스템**: 각 사용자가 자기 컴퓨터에 프로젝트 **전체 복사본(기록 포함)** 을 갖고 작업한다. 그래서 서버와 연결이 끊겨도 작업을 계속하고, 나중에 업로드하면 된다.
- **브랜치**: 주 프로젝트와 분리된 갈래에서 새 기능을 개발하고, 완성되면 병합한다.
- **협업**: 여러 사람의 작업을 병합하고, 충돌이 나도 해결할 수 있는 기능을 제공한다.

**GitHub의 특징**

- **원격 저장소**: Git 프로젝트를 인터넷에 올려(호스팅) 다른 사람과 공유할 수 있다.
- **협업 도구**: 한 사람이 올린 변경을 다른 사람이 검토하고 합칠 수 있다. (Pull Request, 코드 리뷰)
- **오픈소스 커뮤니티**: 전 세계 개발자가 프로젝트를 공개하고 서로 기여하는 플랫폼.

### 1-3. Repository (저장소)

- Git이 관리하는 **프로젝트 폴더**. 줄여서 "레포(repo)"라고 부른다.
- **로컬 저장소**: 내 컴퓨터에 있는 저장소
- **원격 저장소**: GitHub 같은 서버에 있는 저장소

**`.git` 폴더의 중요성**

- 저장소 폴더 안의 숨김 폴더 `.git`에 모든 커밋·브랜치·태그·설정 정보가 저장된다. Git의 **데이터베이스** 같은 존재.
- `.git` 폴더만 있으면 다른 파일이 없어도 전체 기록을 복구할 수 있다.
- ☠️ **절대 함부로 지우지 않는다.** 지우면 버전 관리 기록이 전부 사라진다.
- `.git`은 **최상위 폴더 딱 하나**에만 있어야 한다. 하위 폴더에 또 있으면 충돌의 원인이 된다.
- 숨김 폴더 보기: Mac Finder `Command + Shift + .` / Windows 파일 탐색기 `보기 → 표시 → 숨긴 항목`

### 1-4. Commit (커밋)

- 특정 시점의 파일 상태를 **사진 찍듯 저장한 기록**(스냅샷).
- 커밋마다 고유 번호(**커밋 해시**, 예: `fda63bf`)와 **메시지**가 붙는다.
- 파일은 아래 3단계를 거쳐 커밋된다.

```
작업 폴더            스테이징 영역            저장소(.git)
(Working Directory)  (Staging Area)          (Repository)
   파일 수정  ──git add──▶  커밋 후보  ──git commit──▶  기록 완료
```

- **스테이징 영역**: "이번 커밋에 넣을 파일"을 골라 담는 장바구니. 수정한 파일 중 일부만 골라 커밋할 수 있다.

### 1-5. Branch (브랜치)

- 독립적으로 작업할 수 있는 **작업 갈래**.
- 실제로는 특정 커밋을 가리키는 **책갈피(이름표)** 이다. 층이 있는 구조가 아니다.
- **HEAD**: 지금 내가 서 있는 위치(현재 브랜치)를 가리키는 표시.
- 브랜치를 바꾸면 작업 폴더의 파일도 **그 브랜치가 가리키는 커밋의 모습**으로 바뀐다.

```
                ┌─ main
●───●───●  ◀────┤
                └─ feature      ← 커밋 전에는 같은 커밋을 나란히 가리킴
```

---

## 2. Git 기본 명령어

### 2-1. `git config` — 사용자 정보 설정

커밋에 "누가 만들었는지" 기록하기 위해 처음 한 번 설정한다.

```bash
git config --global user.name "이름"
git config --global user.email "이메일"
```

- `--global`: 이 컴퓨터의 **모든 저장소**에 적용한다. 빼면 현재 저장소에만 적용된다.
- `user.name` / `user.email`: 커밋 작성자로 기록될 이름과 이메일

```bash
git config --global init.defaultBranch main
```

- `git init` 할 때 기본 브랜치 이름을 `master` 대신 **`main`** 으로 만들도록 설정한다. (GitHub 기본값이 `main`이라 맞춰두면 편하다)

```bash
git config --list              # 설정된 값 전체 확인
git config --get user.name     # 특정 항목 하나만 확인
git help config                # 명령어 도움말 보기
```

> 💡 `dquote>` 가 계속 뜨는 경우: 따옴표 한쪽이 안 닫혀서(예: `user.name"`) 터미널이 입력을 계속 기다리는 상태.
> `Ctrl + C`(Mac은 `Ctrl + G`도 가능)로 빠져나온 뒤, 잘못 들어간 값을 지우고 다시 설정한다.
> ```bash
> git config --global --unset user.name
> git config --global --unset user.email
> ```

### 2-2. `git init` — 저장소 만들기

```bash
git init
```

- 현재 폴더를 Git 저장소로 만든다. 실행하면 `.git` 폴더가 생긴다.
- ⚠️ 이미 Git 저장소인 폴더 **안에서** 또 `git init` 하지 않기 (저장소 안에 저장소가 생겨 꼬인다).

### 2-3. `git status` — 상태 확인

```bash
git status
```

| 출력 문구 | 뜻 |
|---|---|
| `Untracked files` | Git이 아직 관리하지 않는 새 파일 (VS Code에서 `U` 표시) |
| `Changes not staged for commit` | 수정했지만 아직 `add` 안 한 파일 (`M` 표시) |
| `Changes to be committed` | `add` 해서 커밋 대기 중인 파일 |
| `nothing to commit, working tree clean` | 커밋 안 한 변경사항이 없음 |

> 무엇을 하기 전, 막혔을 때 가장 먼저 쳐볼 명령어.

```bash
git status -s
```

- `-s`: short. 한 줄씩 간략하게 보여준다. `??` = untracked, `M` = 수정됨, `A` = 새로 스테이징됨

### 2-4. `git add` — 스테이징

```bash
git add first.txt     # 특정 파일만
git add src/          # 해당 폴더 안의 변경된 모든 파일
git add .             # 현재 폴더(+하위 폴더)의 변경된 모든 파일 (새 파일 포함)
```

- 변경된 파일을 스테이징 영역(커밋 후보)에 올린다.
- 잘못 올렸을 때 되돌리기: `git reset 파일` (해당 파일만 스테이징 취소) / `git reset` (전체 취소). 파일 내용은 그대로 남는다.

### 2-5. `git commit` — 기록 저장

```bash
git commit -m "Add sign up"
```

- `-m`: message. 이 커밋이 무슨 작업인지 설명을 붙인다.
- `-m` 없이 `git commit`만 치면 메시지를 쓰는 **편집기**가 열린다.

```bash
git commit -am "Update README"
```

- `-a`: all. **이미 Git이 추적 중인 파일**의 수정 내용을 add + commit 한 번에 한다.
- ⚠️ 새로 만든 파일(untracked)은 포함되지 않으니 그런 파일은 `git add`를 먼저 해야 한다.

**커밋 결과 읽는 법**

```
[main fda63bf] Add .gitignore
 1 file changed, 1 insertion(+)
 create mode 100644 .gitignore
```

- `main`: 커밋한 브랜치 / `fda63bf`: 커밋 해시(앞 7자리) / `Add .gitignore`: 커밋 메시지
- `1 file changed, 1 insertion(+)`: 파일 1개 변경, 1줄 추가
- `create mode 100644`: 새 파일 생성, 일반 읽기·쓰기 파일 권한

```bash
git commit --amend -m "새 메시지"
```

- `--amend`: 가장 최근 커밋을 고쳐 쓴다.
- ⚠️ **이미 push한 커밋에는 쓰지 않는다.** 원격 저장소와 기록이 어긋난다.

### 2-6. `git push` — 원격 저장소에 올리기

```bash
git remote add origin https://github.com/아이디/저장소.git
git push -u origin main
```

- `git remote add origin 주소`: 원격 저장소 주소를 `origin`이라는 별명으로 등록한다. (처음 한 번)
- `origin`: 원격 저장소의 관례적인 기본 별명
- `-u`: upstream 설정. 한 번 해두면 다음부터는 `git push`만 쳐도 `origin main`으로 올라간다.

```bash
git remote -v          # 연결된 원격 저장소 주소 확인
git branch -M main     # 현재 브랜치 이름을 main으로 변경 (master로 만들어졌을 때)
```

- `-v`: verbose. 원격 저장소 별명과 실제 주소를 같이 보여준다.
- `-M`: 같은 이름 브랜치가 있어도 **강제로** 이름을 바꾼다. (`-m`은 일반 이름 변경)

**원격 저장소와 연결하는 2가지 방법**

| | 방법 1. `git init` 후 연결 | 방법 2. `git clone` |
|---|---|---|
| 언제 | 로컬에서 먼저 시작한 프로젝트를 GitHub에 올릴 때 | GitHub에 이미 있는 저장소를 가져올 때 |
| 순서 | GitHub에서 빈 레포 생성 → 로컬에서 아래 시퀀스 실행 | GitHub 레포 주소 복사 → `git clone 주소` |
| 원격 연결 | `git remote add origin`으로 직접 등록 | 자동으로 `origin` 등록됨 |

```bash
# 방법 1: GitHub가 빈 레포 만들 때 보여주는 시퀀스
echo "# oz_assignment" >> README.md   # README.md를 만들고 제목 한 줄 넣기
git init                              # 저장소 초기화
git add README.md                     # 스테이징
git commit -m "first commit"          # 첫 커밋
git branch -M main                    # 브랜치 이름 main으로
git remote add origin <레포 URL>       # 원격 저장소 연결
git push -u origin main               # 첫 업로드

# 방법 2
git clone <레포 URL>                   # 레포 이름과 같은 폴더가 생기며 전체 기록까지 복사됨
```

**평소 작업 흐름 (add · commit · push 3종 세트)**

```bash
git pull                          # 0. (다른 곳에서 작업했다면) 최신 내용 받기
git status                        # 1. 무엇이 바뀌었는지 확인
git add .                         # 2. 스테이징
git commit -m "작업 내용 설명"     # 3. 커밋
git push origin main              # 4. GitHub에 업로드
```

- 작업하던 폴더에서 `git init`은 **처음 한 번만** 한다.
- VS Code 탭에 흰 동그라미(●)가 있으면 **저장 안 된 파일**이 있다는 뜻. 저장해야 Git이 변경을 인식한다.

### 2-7. `git pull` — 원격 저장소에서 받아오기

```bash
git pull
```

- 원격 저장소의 최신 커밋을 받아와서(`fetch`) 내 브랜치에 합친다(`merge`).
- **`git pull` = `git fetch` + `git merge`**
- 다른 컴퓨터나 팀원이 올린 작업이 있을 수 있으니, **작업 시작 전에 pull 하는 습관**을 들인다.

### 2-8. (추가) `.gitignore` — 올리면 안 되는 파일 제외

```
.env
```

- Git이 무시할 파일 목록을 적는 파일. `.env`(API 키, 비밀번호 등 환경변수 파일)처럼 **비밀 정보가 담긴 파일은 반드시 제외**한다.
- 적용 확인: `git status`의 `Untracked files`에 해당 파일이 **안 보이면** 정상.

```bash
git check-ignore -v .env
```

- `.env`가 어떤 규칙 때문에 무시되는지 보여준다. (`-v`: 자세히)
- ⚠️ `.gitignore`는 **아직 커밋 안 된 파일**에만 효과가 있다. 이미 커밋했다면 `git rm --cached .env`로 추적을 끊어야 한다.

### 2-9. (추가) `git log` — 기록 보기

```bash
git log --all --oneline --graph
```

- `--all`: 현재 브랜치뿐 아니라 **모든 브랜치**의 커밋을 보여준다.
- `--oneline`: 커밋 하나를 한 줄로 짧게 (`--pretty=oneline`과 비슷하지만 해시를 7자리로 줄여서 보여줌)
- `--graph`: 브랜치가 갈라지고 합쳐지는 모양을 그림으로
- 옵션 없이 `git log`만 치면 해시·작성자·날짜·메시지가 길게 나온다. 빠져나올 때는 `q`

### 2-10. (추가) `git show` / `git diff` — 내용 들여다보기

| 명령어 | 하는 일 |
|---|---|
| `git show` | 가장 최근 커밋의 정보와 변경 내용 |
| `git show 커밋해시` | 특정 커밋의 정보와 변경 내용 |
| `git show HEAD~3` | HEAD 기준 3단계 이전 커밋 (`HEAD^^^`와 같음, `^` 하나 = 한 단계 전) |
| `git diff` | 마지막 커밋 대비, **아직 add 안 한** 수정 내용 |
| `git diff --staged` | 마지막 커밋 대비, **add 해둔** 수정 내용 (커밋 직전 최종 확인용) |
| `git diff 해시1 해시2` | 두 커밋 사이의 차이 |

### 2-11. (추가) 되돌리기 — `git reset`

| 명령어 | 커밋 | 스테이징 | 작업 폴더 파일 |
|---|---|---|---|
| `git reset --soft 해시` | 되돌림 | 유지 | 유지 |
| `git reset 해시` (기본, `--mixed`) | 되돌림 | 되돌림 | 유지 |
| `git reset --hard 해시` | 되돌림 | 되돌림 | **되돌림 (수정 내용 삭제)** |

- `git reset HEAD^` → 직전 커밋 하나 취소 (수정 내용은 파일에 남음)
- ⚠️ `--hard`는 커밋 안 한 수정 내용까지 **지워버린다.** 쓰기 전에 `git status`로 꼭 확인.
- ⚠️ 이미 **push한 커밋**을 reset하면 원격과 기록이 어긋난다. 혼자 쓰는 브랜치가 아니면 쓰지 않는다.

**과거 커밋 구경하기 — `git checkout 커밋해시`**

- 작업 폴더를 그 커밋 시점의 모습으로 바꿔서 보여준다.
- 이때 HEAD가 브랜치가 아닌 커밋을 직접 가리키는 **분리된 HEAD(detached HEAD)** 상태가 된다. 여기서 커밋하면 어느 브랜치에도 속하지 않아 잃어버리기 쉽다.
- 다 봤으면 `git switch main` 또는 `git checkout -`(직전 위치로)로 돌아온다.

---

## 3. Branch

### 3-1. `git branch` 명령어

| 명령어 | 하는 일 |
|---|---|
| `git branch` | 브랜치 목록 보기 (`*` = 현재 브랜치) |
| `git branch feat/sign-up` | 브랜치 **만들기만** 함 (이동 X) |
| `git switch feat/sign-up` | 브랜치 이동 (예전 방식: `git checkout`) |
| `git switch -c feat/sign-up` | 만들기 + 이동 한 번에 (`git checkout -b`와 같음) |
| `git checkout feat/sign-up` | 브랜치 이동 (예전 방식, `switch`와 같음. **만들지는 않음**) |
| `git checkout -b feat/sign-up` | 만들기 + 이동 (예전 방식) |
| `git branch -m 옛이름 새이름` | 브랜치 이름 변경 |
| `git merge feat/sign-up` | 그 브랜치 작업을 **지금 있는 브랜치로** 합치기 |
| `git branch -d feat/sign-up` | 브랜치 삭제 (합쳐지지 않은 커밋이 있으면 막아줌) |

> `checkout`은 브랜치 이동, 과거 커밋 보기, 파일 되돌리기까지 하는 일이 너무 많아서 헷갈렸다.
> 그래서 Git 2.23부터 브랜치 이동은 **`switch`**, 파일 되돌리기는 **`restore`** 로 나눠졌다.

- 새 브랜치는 **만들 때 서 있던 브랜치의 커밋**에서 갈라진다. main에서 갈라지게 하려면 main으로 먼저 이동한다.
- 브랜치 이동 전에는 **커밋을 먼저** 해둔다. 커밋 안 한 변경사항은 다른 브랜치로 따라온다.

### 3-2. 브랜치 관리 전략

브랜치를 어떻게 나누고 합칠지 정한 **팀의 약속**. 대표적인 방식이 **Git Flow**이다.

| 브랜치 | 역할 |
|---|---|
| **main** | 실제 사용자에게 배포되는 **안정 버전** |
| **develop** | 개발 중인 기능을 모아 **테스트**하는 버전 |
| **feature/\*** | 기능 하나를 **개발**하는 브랜치 (예: `feature/login`) |
| **release/\*** | 배포 직전 **출시 준비** (버전 번호 정리, 마지막 버그 수정) |
| **hotfix/\*** | 배포된 main의 **긴급 수정** |

```
main     ●─────────────────────●──────●
          \                   /      / ← hotfix
develop    ●───●───────●─────●──────●
                \     /     /
feature/*        ●───●     /
                          /
release/*           ●────●
```

- 흐름: **feature → develop → release → main**
- main은 직접 건드리지 않고, 검증을 거친 코드만 올라가게 해서 **항상 잘 돌아가는 상태**로 유지한다.
- `*`는 "아무 이름이나"라는 뜻이고, `/`는 정리용 이름 표기일 뿐 계층이 아니다.
- 혼자 하는 작은 프로젝트에서는 **main + feature**만 쓰는 가벼운 방식(GitHub Flow)도 많이 쓴다.

### 3-3. Fast-forward merge

브랜치를 나눈 뒤 **main에 새 커밋이 없을 때**, 새 커밋 없이 main 책갈피를 **앞으로 옮기기만** 하는 병합.

```
[merge 전]
commit 1 ─ 2 ─ 3 ─ 4 ─ 5
                   ↑   ↑
                 main  feat/sign-up

[merge 후]
commit 1 ─ 2 ─ 3 ─ 4 ─ 5
                       ↑
             main, feat/sign-up
```

```bash
git switch main
git merge feat/sign-up
```

```
Updating 9f8e7d6..7cedbd5
Fast-forward
 sign_up.py | 1 +
```

- merge는 **받는 쪽 브랜치로 먼저 이동한 뒤** 실행한다.
**merge 옵션 비교**

| 명령어 | 동작 |
|---|---|
| `git merge 브랜치` (= `--ff`, 기본값) | fast-forward가 가능하면 책갈피만 이동, 불가능하면 병합 커밋 생성 |
| `git merge --no-ff 브랜치` | fast-forward가 가능해도 **일부러 병합 커밋**을 만들어 기능 단위 작업 흔적을 남김 |
| `git merge --squash 브랜치` | 브랜치의 여러 커밋을 **하나로 뭉쳐서** 가져옴. 자동 커밋은 안 되므로 직접 `git commit` 해야 하고, 브랜치에서 왔다는 연결 정보는 남지 않음 |

### 3-4. 3-way merge

브랜치를 나눈 뒤 **main과 브랜치 양쪽 모두** 새 커밋이 생겼을 때의 병합.

```
main      ●───●───●───◆   ← 두 갈래를 합친 새 병합 커밋
               \     /
feature         ●───●
```

- Git이 **세 지점**을 비교해서 합친다. 그래서 "3-way"
  1. 두 브랜치가 갈라지기 전 **공통 조상** 커밋
  2. main의 최신 커밋
  3. feature의 최신 커밋
- 양쪽이 서로 다른 부분을 고쳤다면 자동으로 합쳐지고, **병합 커밋(merge commit)** 이 새로 생긴다.

| | Fast-forward | 3-way merge |
|---|---|---|
| 조건 | main에 새 커밋 없음 | 양쪽 모두 새 커밋 있음 |
| 새 커밋 | 생기지 않음 | 병합 커밋 생성 |
| 기록 모양 | 일자 | 갈라졌다 다시 만남 |
| 충돌 가능성 | 없음 | 있음 |

### 3-5. Merge conflict (병합 충돌)

두 브랜치가 **같은 파일의 같은 줄**을 서로 다르게 고쳤을 때, Git이 어느 쪽을 쓸지 몰라서 병합을 멈추는 상황.

```
<<<<<<< HEAD
print("안녕하세요")
=======
print("Hello")
>>>>>>> feat/sign-up
```

- `<<<<<<< HEAD` ~ `=======`: 지금 있는 브랜치(main)의 내용
- `=======` ~ `>>>>>>>`: 합치려는 브랜치의 내용

**해결 순서**

1. 충돌 난 파일을 열어 남길 내용으로 직접 수정하고, `<<<<<<<`, `=======`, `>>>>>>>` 표시를 지운다.
   (VS Code에서는 `Accept Current` / `Accept Incoming` / `Accept Both` 버튼으로 고를 수 있다.)
2. 저장 후 다시 스테이징한다.

```bash
git add 충돌난파일
git commit -m "Resolve merge conflict"
```

- 병합을 아예 취소하고 원래대로 돌아가려면:

```bash
git merge --abort
```

### 3-6. (참고) rebase · cherry-pick

merge 말고도 브랜치 작업을 가져오는 방법이 있다.

| 명령어 | 하는 일 |
|---|---|
| `git rebase main` | 현재 브랜치가 **main의 최신 커밋에서 갈라진 것처럼** 커밋들을 옮겨 붙인다. 기록이 일자로 깔끔해진다. |
| `git rebase --continue` | 충돌을 해결한 뒤 rebase 계속 진행 |
| `git rebase --abort` | rebase 취소, 원래 상태로 |
| `git cherry-pick 해시` | 다른 브랜치의 **특정 커밋 하나만** 골라서 현재 브랜치에 복사 |
| `git cherry-pick A..B` | A 다음 커밋부터 B까지 한 번에 복사 (**A 자신은 제외**) |
| `git cherry-pick --continue` / `--abort` | 충돌 해결 후 계속 / 취소 |

```
[rebase 전]                    [git rebase main 후]
main     ●───●───●             main     ●───●───●
              \                                  \
feature        ●───●           feature            ●'───●'
```

- ⚠️ rebase는 커밋을 **새로 만들어 옮기는** 것이라 해시가 바뀐다. 이미 push해서 다른 사람과 공유한 브랜치에는 쓰지 않는다.

---

## 실습하며 헷갈렸던 점

- `git branch feature` 후 `git switch -c feature` → `already exists` 에러. **`git branch` + `git switch` = `git switch -c`** 라서 둘 중 하나만 쓴다.
- `git` 없이 `branch`만 치면 PowerShell이 명령을 못 찾는다. Git 명령은 항상 `git`으로 시작.
- `git log --online` 오타 → 정확히는 `--oneline` (one + line).
- 브랜치는 3단 구조가 아니다. 커밋을 가리키는 **책갈피**이고, 어디서 갈라지는지는 **만들 때 서 있던 위치**로 정해진다.
- `.gitignore`에 `.env`를 적었는데 VS Code에서 색이 안 바뀜 → 테마 영향일 수 있다. 눈 대신 `git status`로 확인하는 게 정확하다.
- `feat/sign-up`에서 만든 `sign_up.py`가 main으로 이동하면 사라짐 → 삭제가 아니라, 그 커밋에는 원래 없던 파일이라서. 다시 돌아가면 나타난다.
