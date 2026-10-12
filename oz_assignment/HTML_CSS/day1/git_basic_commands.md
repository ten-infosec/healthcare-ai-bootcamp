# Git 기본 명령어 정리

> Git: 파일의 변경 이력을 저장하고 관리하는 **버전 관리 도구**
> GitHub: Git 저장소를 인터넷에 올려 두고 공유·협업하는 **원격 저장소 서비스**

---

## 0. 먼저 알아둘 용어

| 용어 | 쉬운 설명 |
|---|---|
| 저장소 (Repository) | Git이 이력을 관리하는 프로젝트 폴더 |
| 로컬 저장소 | 내 컴퓨터에 있는 저장소 |
| 원격 저장소 (Remote) | GitHub처럼 인터넷에 있는 저장소. 기본 이름은 `origin` |
| Working Directory | 내가 실제로 파일을 수정하는 작업 공간 |
| Staging Area | 커밋에 포함할 파일을 잠깐 올려 두는 **대기 공간** |
| 커밋 (Commit) | 현재 상태를 하나의 이력(스냅샷)으로 저장하는 것 |
| 커밋 해시 | 커밋마다 붙는 고유 ID (예: `abc1234`) |
| HEAD | "지금 내가 보고 있는 커밋"을 가리키는 표시 |
| 브랜치 (Branch) | 원래 작업에 영향 없이 따로 작업하는 **갈래** |

### 파일이 이동하는 흐름

```
Working Directory  --git add-->  Staging Area  --git commit-->  Repository(로컬)  --git push-->  GitHub(원격)
   (파일 수정)                    (커밋 대기)                     (이력 저장)                     (공유)
```

---

## 1. 설정 (Setup)

| 명령어 | 역할 |
|---|---|
| `git init` | 현재 폴더를 Git 저장소로 만듦 (`.git` 숨김 폴더 생성) |
| `git clone [URL]` | 원격 저장소를 내 컴퓨터로 복제 (`origin`으로 자동 연결) |
| `git config user.name "[닉네임]"` | 커밋 작성자 이름 설정 |
| `git config user.email "[이메일]"` | 커밋 작성자 이메일 설정 |
| `git config --list` | 설정된 내용 전체 보기 |
| `git config --get [항목]` | 특정 설정만 보기 |
| `git help [명령어]` | 도움말 보기 |

```bash
mkdir new_project
cd new_project
git init
```
- `mkdir`: 새 폴더를 만들겠다
- `cd`: 그 폴더 안으로 이동하겠다
- `git init`: 이 폴더를 Git으로 관리하기 시작하겠다

```bash
git config user.name "John Doe"
git config user.email "john.doe@example.com"
git config --get user.name
```
- 커밋에 기록될 작성자 이름·이메일을 정하겠다
- 이름이 제대로 설정됐는지 확인하겠다
- 참고: `--global`을 붙이면 이 컴퓨터의 **모든 저장소**에 적용되고, 안 붙이면 **현재 저장소에만** 적용된다

---

## 2. Stage와 Commit

| 명령어 | 역할 |
|---|---|
| `git add [파일]` | 특정 파일을 Staging Area에 올림 |
| `git add [폴더]` | 폴더 안 변경 파일을 전부 올림 |
| `git add .` | 현재 폴더 아래 변경 파일을 전부 올림 |
| `git commit` | 편집기를 열어 메시지를 쓰고 커밋 |
| `git commit -m "[메시지]"` | 메시지를 바로 써서 커밋 |
| `git commit -am "[메시지]"` | add + commit을 한 번에 (이미 추적 중인 파일만) |

```bash
git add index.html
git commit -m "Fix bug in login feature"
```
- `index.html`만 골라서 커밋 대기 공간에 올리겠다
- `-m`: 편집기 없이 바로 메시지를 붙여 이력을 저장하겠다

```bash
git commit -am "Update README and fix typos"
```
- `-a`: 이미 Git이 알고 있는(추적 중인) 파일의 변경을 자동으로 add하겠다
- `-m`: 메시지를 함께 쓰겠다
- 주의: **새로 만든 파일(untracked)은 포함되지 않는다** → 새 파일은 먼저 `git add` 필요

---

## 3. 상태 확인 (Inspect)

### 3-1. git status — 지금 상태 보기

| 명령어 | 역할 |
|---|---|
| `git status` | 수정·스테이징·추적 안 되는 파일 상태 출력 |
| `git status -s` | 짧게 표시 (`??` 추적 안 됨, `M` 수정됨, `A` 추가됨) |

### 3-2. git log — 커밋 이력 보기

| 명령어 | 역할 |
|---|---|
| `git log` | 해시, 작성자, 날짜, 메시지 전체 출력 |
| `git log --pretty=oneline` | 한 줄로 출력 (전체 해시) |
| `git log --oneline` | 한 줄로 출력 (짧은 해시) |
| `git log --decorate=full` | 브랜치·태그 정보를 자세히 표시 |
| `git log --graph` | 브랜치 흐름을 그래프로 표시 |

```bash
git log --graph --oneline
```
- 커밋을 한 줄씩, 브랜치가 갈라지고 합쳐진 모양을 그림으로 보겠다

### 3-3. git show — 커밋 하나 자세히 보기

| 명령어 | 역할 |
|---|---|
| `git show` | 가장 최근 커밋 내용 |
| `git show [해시]` | 특정 커밋 내용 |
| `git show HEAD` | HEAD가 가리키는 커밋 |
| `git show HEAD^^^` | HEAD에서 3단계 이전 커밋 (`^` 하나 = 한 단계) |
| `git show HEAD~3` | HEAD에서 3단계 이전 커밋 (`~숫자` = 숫자만큼) |

### 3-4. git diff — 무엇이 바뀌었는지 비교

| 명령어 | 비교 대상 |
|---|---|
| `git diff` | 최근 커밋 ↔ 아직 add 안 한 수정 내용 |
| `git diff --staged` | 최근 커밋 ↔ add 해 둔 내용 |
| `git diff [해시1] [해시2]` | 두 커밋 사이 |

---

## 4. 커밋 조작

### 4-1. checkout — 다른 커밋/브랜치로 이동

| 명령어 | 역할 |
|---|---|
| `git checkout [해시]` | 해당 커밋 상태로 이동 (작업 폴더 내용도 바뀜) |
| `git checkout -` | 직전에 있던 곳으로 돌아감 |
| `git checkout master` | master 브랜치로 돌아감 |
| `git checkout HEAD~n` | n단계 이전 커밋으로 이동 |

- 커밋 해시로 이동하면 **분리된 HEAD(detached HEAD)** 상태가 된다 → 어떤 브랜치에도 속하지 않은 상태라, 여기서 만든 커밋은 브랜치로 돌아가면 찾기 어려워질 수 있다. 과거 상태를 **구경만** 할 때 쓰고, 다 보면 `git checkout master`로 돌아오기

### 4-2. 되돌리기 (Undoing changes)

| 명령어 | 역할 |
|---|---|
| `git reset` | 스테이징한 파일 전체를 다시 unstaged로 |
| `git reset [파일]` | 특정 파일만 unstaged로 |
| `git commit --amend` | 최근 커밋 수정 |
| `git commit --amend -m "[메시지]"` | 최근 커밋 메시지 바로 수정 |
| `git reset [해시]` | 브랜치를 해당 커밋으로 되돌림 (수정 내용은 작업 폴더에 남음) |
| `git reset --soft [해시]` | 커밋만 취소, 스테이징·작업 폴더는 그대로 |
| `git reset --hard [해시]` | 커밋·스테이징·작업 폴더 **전부** 되돌림 |
| `git reset HEAD^` | 직전 커밋으로 되돌림 |
| `git reset HEAD~n` | n단계 이전으로 되돌림 |

reset 세 가지 비교:

| 옵션 | 커밋 | Staging Area | 작업 폴더(파일 내용) |
|---|---|---|---|
| `--soft` | 취소 | 유지 | 유지 |
| (기본, `--mixed`) | 취소 | 비움 | 유지 |
| `--hard` | 취소 | 비움 | **삭제** |

> ⚠️ `git reset --hard`는 커밋하지 않은 수정 내용이 **복구 불가능하게 사라진다.** 실행 전에 `git status`로 꼭 확인하기
> ⚠️ 이미 GitHub에 push한 커밋을 `--amend`나 `reset`으로 바꾸면, 원격과 기록이 어긋나 push가 거부된다. 혼자 쓰는 저장소가 아니라면 push한 커밋은 건드리지 않기

---

## 5. 브랜치 (Branch)

### 5-1. 기본

| 명령어 | 역할 |
|---|---|
| `git branch` | 브랜치 목록 (`*` 표시가 현재 브랜치) |
| `git branch [이름]` | 새 브랜치 생성 (이동은 안 함) |
| `git checkout [이름]` | 이미 있는 브랜치로 이동 |
| `git checkout -b [이름]` | 새 브랜치를 만들고 바로 이동 |
| `git branch -m [기존 이름] [새 이름]` | 브랜치 이름 변경 |
| `git branch -d [이름]` | 브랜치 삭제 (병합된 브랜치만) |

```bash
git checkout -b new-feature
```
- `-b`: new-feature 브랜치를 만들면서 바로 그 브랜치로 옮겨 가겠다
- `git branch new-feature` + `git checkout new-feature` 두 줄을 한 번에 한 것과 같다

### 5-2. Merge — 브랜치 합치기

| 명령어 | 역할 |
|---|---|
| `git merge [브랜치]` | 현재 브랜치에 다른 브랜치 내용을 합침 |
| `git merge --ff [브랜치]` | 가능하면 fast-forward로 합침 (기본값) |
| `git merge --no-ff [브랜치]` | fast-forward가 가능해도 **머지 커밋을 만듦** |
| `git merge --squash [브랜치]` | 브랜치의 여러 커밋을 **하나로 뭉쳐** 스테이징만 함 → 이후 직접 `git commit` |

- **fast-forward**: 현재 브랜치에 새 커밋이 없어서, 브랜치 표시만 앞으로 쭉 당기면 되는 경우. 새 커밋이 생기지 않는다
- `--no-ff`: "여기서 기능 브랜치를 합쳤다"는 기록을 남기고 싶을 때
- `--squash`: 자잘한 커밋들을 깔끔하게 한 커밋으로 정리하고 싶을 때

### 5-3. Rebase — 갈라진 위치 옮기기

| 명령어 | 역할 |
|---|---|
| `git rebase [브랜치]` | 현재 브랜치가 해당 브랜치의 최신 지점에서 갈라진 것처럼 커밋을 다시 쌓음 |
| `git rebase --continue` | 충돌 해결 후 계속 진행 |
| `git rebase --abort` | rebase 취소, 원래 상태로 |

- merge는 두 갈래를 **합친 기록**이 남고, rebase는 이력을 **한 줄로 깔끔하게** 정리한다

### 5-4. Cherry-pick — 원하는 커밋만 골라 가져오기

| 명령어 | 역할 |
|---|---|
| `git cherry-pick [해시]` | 특정 커밋 하나를 현재 브랜치에 복사 (여러 해시 나열 가능) |
| `git cherry-pick [시작 해시]..[끝 해시]` | 구간의 커밋을 한 번에 가져옴 |
| `git cherry-pick --continue` | 충돌 해결 후 계속 진행 |
| `git cherry-pick --abort` | cherry-pick 취소 |

- `A..B` 구간은 **A 다음 커밋부터 B까지** 가져온다 (A 자신은 제외). A까지 포함하려면 `A^..B`

---

## 6. GitHub에 올리기 (Push)

| 명령어 | 역할 |
|---|---|
| `git remote add origin [URL]` | 원격 저장소를 `origin`이라는 이름으로 연결 |
| `git remote -v` | 연결된 원격 저장소 확인 |
| `git push -u origin main` | main 브랜치를 원격에 처음 올리면서 기본 연결 설정 |
| `git push` | 이후부터는 이것만으로 올리기 |
| `git pull` | 원격의 최신 내용을 내려받아 합치기 |

```bash
git add .
git commit -m "Add git basic commands summary"
git push
```
- 변경 파일을 전부 커밋 대기 공간에 올리겠다
- 메시지를 붙여 이력을 저장하겠다
- 저장한 이력을 GitHub로 올리겠다

---

## 7. 원본 자료와 다르게 정리한 부분

- `git checkout [브랜치 이름]`은 브랜치를 **만들지 않고 이동만** 한다. 생성 + 이동은 `git checkout -b`
- `git log --oneline`은 `--pretty=oneline`과 비슷하지만, 해시를 **짧게** 보여 준다
- `git merge --squash`는 머지 커밋을 자동으로 만들지 않고 변경 사항을 스테이징까지만 한다. 커밋은 직접 해야 한다
- `git branch -m [기존] [새 이름]`은 현재 브랜치가 아니어도 이름을 바꿀 수 있다 (현재 브랜치는 `git branch -m [새 이름]`만 써도 됨)
- cherry-pick 구간 표기는 `..`이며, 시작 커밋은 포함되지 않는다
