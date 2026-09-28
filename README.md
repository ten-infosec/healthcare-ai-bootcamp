# healthcare-ai-bootcamp

AI 헬스케어 7기 부트캠프에서 진행한 개별 미션과 실습 노트북을 정리한 저장소입니다.

## 구성

| 폴더 | 주제 | 주요 내용 |
|---|---|---|
| [mission4_tech_credit](./mission4_tech_credit) | 헬스케어 기술보증 데이터 분석 | 통계 검정(Mann-Whitney U, 카이제곱), Word2Vec, scikit-learn 파이프라인, 양방향 GRU |
| [day09_rnn_dur](./day09_rnn_dur) | DUR 금기 의약품 텍스트 분석 | LDA 토픽 모델링, RNN 계열 5개 모형 비교(SimpleRNN · LSTM · GRU · BiGRU · Stacked GRU) |

## 실행 환경

- Python 3.12.10, TensorFlow 2.21, Keras 3.15
- pandas, scikit-learn, gensim, konlpy(Okt), scipy

## 참고

- 부트캠프에서 제공한 원본 데이터는 배포 권한 문제로 포함하지 않았습니다.
- 각 노트북에는 실행 결과와 문제별 결론이 함께 저장되어 있습니다.