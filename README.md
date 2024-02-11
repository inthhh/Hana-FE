# Hana-FE
🍀 하나 디지털 파워 온 2기 최종프로젝트이며, 최우수상을 수상하였습니다.
- Front-end 배포 도구 : Vercel
- Front-end 배포 링크 : https://hana-fe-ts.vercel.app/
(현재 요금부과 이슈로 백엔드 서버가 중지된 상태이므로, 작동이 원활하지 않을 수 있습니다.)

## 💵 요구사항
1. 대주제 : IT기술을 활용한 금융 관련 서비스
2. 선정 주제 : 고령층 및 디지털 약자의 모바일 금융 사용 확대를 위한 음성안내 서비스와 간편한 UI

- 기존 '하나원큐'앱의 기능을 유지하며 디지털 약자를 배려하는 UI/UX 기획
- 메인 화면에 삽입될 필수적 기능들을 선별하고 각 화면을 Figma로 디자인
- 각 기능에 필요한 API 설계서 작성
- 고령층을 배려한, 다음 단계로 유도하는 버튼 강조 UI 삽입
- UI 구현 후 음성 TTS, STT 기능으로 음성 인식 및 안내 기능을 탑재
- 금융앱 이해도와 접근성을 높이기 위해 쉬운 우리말 단어 변환 ('송금' -> '돈 보내기' 등)

## 🔥 실행 화면
<img width="345" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/40e16357-535b-4b0f-9b75-c129ca2f4231" width="200px">
<img width="345" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/7733e94a-c20d-4133-a275-604f9badac5d" width="200px">
<img width="345" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/6a70a2ae-537a-4d9a-b41d-b605c60296e6" width="200px">
<img width="343" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/60087664-ae65-4a33-8c56-07a610708f63" width="200px">



## 🎤 음성인식 기능 사용방법
<img width="174" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/31d15d75-e35f-4207-87da-e6ba44f3423f" width="300px">
<img width="322" alt="image" src="https://github.com/inthhh/Hana-FE/assets/91872300/b14b7e7d-b8b6-4730-9675-a0edccd39b03" width="300px">

1. 말하기 버튼을 누른 후, 마이크 권한을 허용한다. (최초 1회)
2. 마이크 상태가 '켜짐'일 때, 음성을 말한 다음 '멈추기' 버튼을 누른다.
3. 인식한 음성이 '송금', '돈을 보내고 싶어' 등 송금 관련일 경우 -> '돈 보내기' 버튼을 누르라는 안내메시지가 음성으로 나옴
4. 인식한 음성이 '상품', '저축할래' 등 상품 가입 관련일 경우 -> '상품 가입' 버튼을 누르라는 안내메시지가 음성으로 나옴
5. 기타 하위 단계에서도 음성 안내가 지속됨
(현재 요금부과 이슈로 백엔드 서버가 중지된 상태이므로, 작동이 원활하지 않을 수 있습니다.)
