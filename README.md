# momo-care

Purpose: implement the basic functions of the bulletin board

## Todo List

1.  라우트와 UI컴포넌트 분리
2.  메뉴별 기능구현
    - 메인
      - 메인비주얼
        1. <del>배너 영업일/시간에 따른 노출</del> (완료)
      - 사례 미리보기
        1. 슬라이더 기능
           - 최신사례 순으로 노출 or 우수사례순 노출
    - 소개
    - 가격안내
    - 견적문의
      - 견적문의하기
        1. 서비스날짜 선택
           - calendar기능 : 예약신청하기와 동일한 기능 적용
    - 예약안내
      - 게시판
        1. <del>데이터 불러오기</del> (완료)
        2. <del>페이지네이션 : </del> (완료)
           - 전체페이지 번호 중 원하는 개수만 노출
           - 선택된 페이지가 중앙에 오도록 정렬
        3. <del>고객명 검색 </del> (완료)
           - 뒤로가기까지 적용
        4. <del>게시판 내용보기와 댓글적용</del> (완료)
        5. 비밀글
           - 비밀글 여부표시
           - 비밀글 선택시 비밀번호 입력창 pop-up
           - 비밀번호 일치여부 확인
      - 예약신청하기
        1. <del>예약날짜 선택</del> (완료)
           - calendar기능 : 과거일자 선택시 안내와 반려, 달력 이외의 영역 클릭시 달력 off기능, 예약날짜 선택창 readonly기능추가
        2. 주소 입력 (\*추후 버전에 주소api 적용예정)
    - 서비스사례
      - 게시판
        1. 내용미리보기
           - 두줄까지만 미리보이게 퍼블리싱
        2. 페이지네이션
        3. 내용보기 하단 이전/다음글 버튼
           - 이전/다음글 제목 미리보기
           - 버튼기능 구현
    - 실시간 채팅상담 (\*추후구현예정)
3.  코드 리팩토링
    - 리덕스 or Context api
    - 리듀서

(마지막 수정날짜 20200123)
