# healthcare-ai-bootcamp

AI 헬스케어 7기 부트캠프에서 진행한 개별 미션과 실습 노트북을 정리한 저장소입니다.
과정(AI → Web) 순서대로 폴더를 나누어 무엇을 배웠는지 기록합니다.

## 폴더 구조

    healthcare-ai-bootcamp/
    ├── 02_ai/              # 머신러닝 · 딥러닝 · 자연어 처리
    ├── 03_web/             # Git · 웹 개발
    └── oz_assignment/      # LMS 챌린지 과제 제출본

## 02_ai — AI

| 폴더 | 주제 | 주요 내용 |
|---|---|---|
| [mission4_tech_credit](./02_ai/mission4_tech_credit) | 헬스케어 기술보증 데이터 분석 | 통계 검정(Mann-Whitney U, 카이제곱), Word2Vec, scikit-learn 파이프라인, 양방향 GRU · 문제별 회고(REVIEW_Q1-Q7) |
| [day09_rnn_dur](./02_ai/nlp/day09_rnn_dur) | DUR 금기 의약품 텍스트 분석 | LDA 토픽 모델링, RNN 계열 5개 모형 비교(SimpleRNN · LSTM · GRU · BiGRU · Stacked GRU) |
| [day10_seq2seq](./02_ai/nlp/day10_seq2seq) | 자연어 생성: 영→한 기계 번역 | 글자 단위 Seq2Seq(LSTM 인코더-디코더), SOS/EOS · one-hot 전처리, Teacher Forcing 학습, 자기회귀 추론, 한계(병목 · 기울기 소실)와 Attention |
| [day11_attention](./02_ai/nlp/day11_attention) | Attention | Attention 메커니즘 실습 |
| [day12_pretraining](./02_ai/nlp/day12_pretraining) | 사전학습 모델 | 사전학습(Pre-training) 모델 실습 |
| [deep_learning_project](./02_ai/deep_learning_project) | 『딥러닝과 인공지능 의료』 프로젝트 구현 | 1장 유방암 진단(WBCD, SVM · 앙상블 · AutoML), 2장 당뇨망막병증 감지(CNN · InceptionV3 · VGG16 가중치 앙상블) |
| [project_esight](./02_ai/project_esight) | E-Sight: 동물병원 멀티모달 판독 보조 AI (팀 프로젝트) | X-ray · 혈액검사 · 투약이력 결합 서비스 기획, 발표 대본 · 슬라이드 |

## 03_web — Web

| 폴더 | 주제 |
|---|---|
| [git_github](./03_web/git_github) | Git & GitHub 기본 개념과 명령어 정리 |

## oz_assignment — 과제 제출

| 폴더 | 내용 |
|---|---|
| [HTML_CSS](./oz_assignment/HTML_CSS) | day1~day3: 이력서 페이지(resume.html) 제작, 반응형 · navbar · flex 업데이트 |
| [JS](./oz_assignment/JS) | day1~day3: JavaScript 기본 문법, DOM과 이벤트, Web API |

## 실행 환경

- Python 3.12.10, TensorFlow 2.21, Keras 3.15
- pandas, scikit-learn, gensim, konlpy(Okt), scipy
- Node.js 24 (JavaScript 실습)

## 참고

- 부트캠프에서 제공한 원본 데이터는 배포 권한 문제로 포함하지 않았습니다.
- day10의 영어-한국어 문장 쌍은 [Tatoeba](https://tatoeba.org) 기반(CC-BY 2.0 France) 데이터입니다.
- deep_learning_project의 데이터(Kaggle 등)는 라이선스상 포함하지 않았습니다.
- 각 노트북에는 실행 결과와 문제별 결론이 함께 저장되어 있습니다.