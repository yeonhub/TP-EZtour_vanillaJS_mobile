
const boardPost = [
    { id: 0, category: '당첨자발표', title: '<하나LIVE> 23년 03월 29일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2015.06.25' },
    { id: 1, category: '서비스', title: '하나투어 서비스 이용약관 개정고지', date: '2018.03.09' },
    { id: 2, category: '당첨자발표', title: '<하나LIVE> 23년 02월 20일 구매자 대상 추첨 이벤트 당첨자 안내', date: '2018.11.28' },
    { id: 3, category: '서비스', title: '하나투어 [위치기반 서비스 이용약관] 변경사항을 사전 안내 드립니다.', date: '2019.01.08' },
    { id: 4, category: '당첨자발표', title: '<하나투어> H-Collection 구매 이벤트 당첨 1차 안내 (롯데모바일교환권 3만 원권)', date: '2019.01.09' },
    { id: 5, category: '일반', title: '[공지] [해외항공] 아에로멕시코(AM) 미 파산 법원 청구 증명 신청 건 및 EMD바우처 발행 안내 건', date: '2019.01.24' },
    { id: 6, category: '당첨자발표', title: '<퇴근길LIVE> 23년 03월 20일 방송 소통 이벤트 당첨자 안내 (투썸플레이스 기프티콘)', date: '2020.01.06' },
    { id: 7, category: '서비스', title: '투어/입장권 시스템 점검에 따른 이용제한 안내', date: '2020.01.15' },
    { id: 8, category: '당첨자발표', title: '<하나LIVE> 23년 02월 20일 방송 소통 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2020.02.05' },
    { id: 9, category: '일반', title: '[공지] [해외 항공] 서버 전환 작업에 따른 일부 서비스 일시 중단 안내', date: '2020.03.11' },
    { id: 10, category: '일반', title: '시스템 점검에 따른 이용제한 안내', date: '2020.03.17' },
    { id: 11, category: '당첨자발표', title: '<하나LIVE> 22년 12월 22일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2020.03.30' },
    { id: 12, category: '서비스', title: '이용약관 개정에 따른 사전 안내', date: '2020.08.05' },
    { id: 13, category: '서비스', title: '하나투어 마일리지 사용가맹점 제휴 종료에 따른 안내 드립니다.', date: '2020.12.15' },
    { id: 14, category: '일반', title: '시스템 변경에 따른 이용제한 안내', date: '2021.10.06' },
    { id: 15, category: '일반', title: '[공지] 하나투어 마일리지 & 상품권 유효기간 연장', date: '2021.10.14' },
    { id: 16, category: '당첨자발표', title: '<하나LIVE> 23년 04월 26일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2021.10.18' },
    { id: 17, category: '일반', title: '[공지] 오미크론 변이 관련 취소료 규정 변경 공지', date: '2021.10.21' },
    { id: 18, category: '당첨자발표', title: '<하나LIVE> 23년 03월 02일 방송 선착순 이벤트 당첨자 안내 (고급 어메니티 세트)', date: '2021.11.04' },
    { id: 19, category: '일반', title: '[공지] [해외항공] 오미크론 변이 관련 공지', date: '2021.11.09' },
    { id: 20, category: '당첨자발표', title: '<하나LIVE> 23년 03월 02일 방송 소통 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2021.11.09' },
    { id: 21, category: '일반', title: '추석 연휴 항공 문의 온라인 접수 & 일본 여행 예약 응대 안내', date: '2021.11.30' },
    { id: 22, category: '당첨자발표', title: '<하나LIVE> H-Collection 구매자 대상 추첨 이벤트 당첨 안내 (LG 스탠바이미 TV)', date: '2021.11.30' },
    { id: 23, category: '당첨자발표', title: '<하나LIVE> 23년 03월 15일 방송 이벤트 당첨자 안내 (쉐라톤 룸 업그레이드)', date: '2021.11.30' },
    { id: 24, category: '일반', title: '<공지> 새로워진 하나투어의 얼굴과 신규 서비스를 소개합니다.', date: '2021.12.02' },
    { id: 25, category: '서비스', title: 'KT CLiP 앱서비스 종료 안내', date: '2021.12.02' },
    { id: 26, category: '당첨자발표', title: '<하나LIVE> 23년 04월 19일 방송 선착순 이벤트 당첨자 안내', date: '2021.12.08' },
    { id: 27, category: '당첨자발표', title: '<하나LIVE> 23년 04월 26일 방송 구매인증 이벤트 당첨자 안내 (렌터카 24시간 이용)', date: '2021.12.16' },
    { id: 28, category: '안전정보', title: '[공지] 입국 전 코로나19 PCR/RAT 의무 검사 중단 안내', date: '2021.12.20' },
    { id: 29, category: '당첨자발표', title: '<하나LIVE> 23년 04월 05일 방송 구매자 대상 추첨 이벤트 당첨자 안내(파타야 호텔 룸 업그레이드)', date: '2021.12.20' },
    { id: 30, category: '서비스', title: '하나투어 서비스 이용약관 개정고지', date: '2022.01.27' },
    { id: 31, category: '서비스', title: '투어/입장권 시스템 점검에 따른 이용제한 안내', date: '2022.02.10' },
    { id: 32, category: '당첨자발표', title: '<하나LIVE> 22년 12월 21일 방송 이벤트 당첨자 안내 (스위트 룸 업그레이드)', date: '2022.02.17' },
    { id: 33, category: '당첨자발표', title: '<하나LIVE> 23년 04월 26일 방송 추첨 이벤트 당첨자 안내 (타워 스탠다드 룸 업그레이드)', date: '2022.03.25' },
    { id: 34, category: '일반', title: '[해외항공] 상담 지연 안내', date: '2022.05.30' },
    { id: 35, category: '당첨자발표', title: '<하나LIVE> H-Collection 구매인증 이벤트 당첨 안내 (하나투어 마일리지)', date: '2022.06.24' },
    { id: 36, category: '당첨자발표', title: '<하나투어> H-Collection 구매 이벤트 당첨 2차 안내 (롯데모바일교환권 3만 원권)', date: '2022.08.19' },
    { id: 37, category: '서비스', title: '[개인정보보호] 위치정보이용약관 변경 안내', date: '2022.09.01' },
    { id: 38, category: '당첨자발표', title: '<하나LIVE> 23년 01월 16일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2022.09.08' },
    { id: 39, category: '서비스', title: '국내 실시간 골프 예약 서비스 종료 안내', date: '2022.09.30' },
    { id: 40, category: '일반', title: '[공지] 하나투어 상품권으로 해외 항공권 결제 가능 전환 안내', date: '2022.10.05' },
    { id: 41, category: '당첨자발표', title: '<하나LIVE> H-Collection 구매 이벤트 당첨 안내 (롯데모바일교환권 5만 원권)', date: '2022.10.24' },
    { id: 42, category: '당첨자발표', title: '<하나LIVE> 23년 04월 12일 방송 선착순 혜택 당첨자 안내(석식 BBQ+별빛고운카드+주유권)', date: '2022.10.27' },
    { id: 43, category: '당첨자발표', title: '<하나LIVE> 23년 03월 15일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2022.10.27' },
    { id: 44, category: '일반', title: '시스템 점검에 따른 이용제한 안내', date: '2022.10.31' },
    { id: 45, category: '일반', title: '시스템 점검에 따른 이용제한 안내', date: '2022.10.31' },
    { id: 46, category: '당첨자발표', title: '<하나LIVE> 23년 01월 04일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2022.11.08' },
    { id: 47, category: '일반', title: '[공지] 오미크론 변이 관련 격리 조건 변경 공지', date: '2022.11.28' },
    { id: 48, category: '서비스', title: '[공지] 하나투어 항공 앱 & 호텔 앱 서비스 통합 안내', date: '2022.11.29' },
    { id: 49, category: '당첨자발표', title: '<하나LIVE> 22년 12월 21일 방송 이벤트 당첨자 안내 (롯데모바일교환권 1만 원권)', date: '2022.12.05' },
    { id: 50, category: '일반', title: '하나LIVE, 타임세일 임시 연기 안내 (10/31~11/06)', date: '2022.12.22' },
    { id: 51, category: '당첨자발표', title: '<하나LIVE> 23년 03월 08일 구매자 대상 이벤트 당첨자 안내', date: '2022.12.22' },
    { id: 52, category: '서비스', title: '하나투어 국내숙박 앱 서비스 종료 안내', date: '2022.12.23' },
    { id: 53, category: '서비스', title: '시스템 점검에 따른 이용제한 안내', date: '2022.12.26' },
    { id: 54, category: '서비스', title: '하나투어 고객센터 개편 안내 (11/16)', date: '2022.12.29' },
    { id: 55, category: '당첨자발표', title: '<하나LIVE> 23년 04월 12일 방송 이벤트 당첨자 안내', date: '2023.01.05' },
    { id: 56, category: '당첨자발표', title: '<하나LIVE> 23년 01월 18일 구매인증 이벤트 당첨자 안내 (무스텔라 어메니티)', date: '2023.01.12' },
    { id: 57, category: '당첨자발표', title: '<하나LIVE> 23년 03월 22일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.01.16' },
    { id: 58, category: '당첨자발표', title: '<퇴근길LIVE> 23년 04월 17일 방송 소통 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.01.17' },
    { id: 59, category: '일반', title: '<하나LIVE> 22년 10월 31일, 11월 2일 방송 연기 안내', date: '2023.01.19' },
    { id: 60, category: '서비스', title: '[ 장기 휴면회원 개인정보 파기 안내 ]', date: '2023.01.19' },
    { id: 61, category: '서비스', title: '하나투어 서비스 이용약관 개정고지', date: '2023.01.20' },
    { id: 62, category: '서비스', title: '개인정보 처리방침 개정관련 사전안내', date: '2023.01.20' },
    { id: 63, category: '당첨자발표', title: '<하나LIVE> 23년 03월 08일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.01.20' },
    { id: 64, category: '일반', title: '설 연휴 국내/해외 항공 업무 안내', date: '2023.01.31' },
    { id: 65, category: '일반', title: '[공지] 제주항공 시스템 교체로 인한 서비스 이용 중단 안내', date: '2023.02.22' },
    { id: 66, category: '서비스', title: '하나프리앱 서비스 종료 안내', date: '2023.02.22' },
    { id: 67, category: '일반', title: '[공지] 설 연휴 국내/해외 항공 업무 안내', date: '2023.02.23' },
    { id: 68, category: '서비스', title: 'ARS 시스템 점검에 따른 이용제한 안내', date: '2023.02.23' },
    { id: 69, category: '일반', title: '[해외공항 위탁 수하물 관련 안내]', date: '2023.03.03' },
    { id: 70, category: '당첨자발표', title: '<퇴근길LIVE> 23년 04월 03일 방송 소통 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.03.10' },
    { id: 71, category: '당첨자발표', title: '<하나LIVE> 22년 12월 28일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.03.10' },
    { id: 72, category: '일반', title: '[해외공항 위탁 수하물 관련 안내]', date: '2023.03.16' },
    { id: 73, category: '일반', title: '[개인정보보호] 개인정보 처리방침 변경 안내', date: '2023.03.17' },
    { id: 74, category: '서비스', title: '[개인정보보호] 개인정보 처리방침 변경 안내', date: '2023.03.17' },
    { id: 75, category: '일반', title: '시스템 점검에 따른 이용제한 안내', date: '2023.03.21' },
    { id: 76, category: '일반', title: '[공지] 오미크론 변이 관련 취소료 규정 변경 공지', date: '2023.03.23' },
    { id: 77, category: '일반', title: '[공지] [해외항공] 타이항공(TG) 환불 및 바우처발행 관련 안내', date: '2023.03.27' },
    { id: 78, category: '당첨자발표', title: '<하나LIVE> 23년 04월 19일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.03.27' },
    { id: 79, category: '당첨자발표', title: '<하나LIVE> 23년 02월 22일 구매인증 이벤트 당첨자 안내 (카야토스트+커피 쿠폰)', date: '2023.03.27' },
    { id: 80, category: '당첨자발표', title: '<하나LIVE> 23년 01월 11일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.03.27' },
    { id: 81, category: '서비스', title: '[개인정보보호] 개인정보 처리방침 변경', date: '2023.03.29' },
    { id: 82, category: '일반', title: '[공지] [해외항공] 부정기편 탑승 제한조건 안내', date: '2023.04.04' },
    { id: 83, category: '당첨자발표', title: '<하나LIVE> 23년 04월 26일 방송 선착순 이벤트 당첨자 안내 (돌핀크루즈)', date: '2023.04.05' },
    { id: 84, category: '서비스', title: '하나투어 고객센터 앱 서비스 이용 안내', date: '2023.04.06' },
    { id: 85, category: '서비스', title: '하나투어 모바일 메인 및 하나프리 항공 서비스 개편하였습니다.', date: '2023.04.07' },
    { id: 86, category: '서비스', title: '회원정보 정제 고지', date: '2023.04.13' },
    { id: 87, category: '당첨자발표', title: '<하나LIVE> 23년 01월 18일 선착순 이벤트 당첨자 안내 (GS/이마트 모바일 상품권)', date: '2023.04.13' },
    { id: 88, category: '당첨자발표', title: '<하나LIVE> 23년 04월 05일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.04.18' },
    { id: 89, category: '일반', title: '하나투어 [개인정보처리방침] 변경사항을 사전 안내 드립니다.', date: '2023.04.20' },
    { id: 90, category: '서비스', title: '[개인정보보호] 개인정보 처리방침 변경 안내', date: '2023.04.21' },
    { id: 91, category: '일반', title: '[공지] [해외항공] 대한민국 전자여행 허가제 (K-ETA) 시행', date: '2023.04.27' },
    { id: 92, category: '서비스', title: '시스템 점검에 따른 이용제한 안내', date: '2023.04.27' },
    { id: 93, category: '당첨자발표', title: '<하나LIVE> 23년 02월 22일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.04.27' },
    { id: 94, category: '당첨자발표', title: '<하나LIVE> 23년 01월 18일 방송 이벤트 당첨자 안내 (스타벅스 기프티콘)', date: '2023.04.27' },
    { id: 95, category: '일반', title: '하나투어 [개인정보 처리방침] 변경사항을 사전 안내 드립니다', date: '2023.05.03' },
    { id: 96, category: '서비스', title: '전자금융거래 이용약관 개정안내(시행일자: 2022. 10. 14)', date: '2023.05.04' },
    { id: 97, category: '일반', title: '5월 연휴 국내/해외 항공 업무 안내', date: '2023.05.04' },
];
const boardNormal = [];
const boardSafety = [];
const boardSurvice = [];
const boardEvent = [];
boardPost.forEach(obj => {
    if (obj.category === '일반') {
        boardNormal.push(obj);
    } else if (obj.category === '안전정보') {
        boardSafety.push(obj);
    } else if (obj.category === '서비스') {
        boardSurvice.push(obj);
    } else if (obj.category === '당첨자발표') {
        boardEvent.push(obj);
    }
})
const boardTotal = [];
boardTotal.push(boardPost);
boardTotal.push(boardNormal);
boardTotal.push(boardSafety);
boardTotal.push(boardSurvice);
boardTotal.push(boardEvent);

const noticeBoardLi = document.querySelectorAll('.notice-list li');
const noticeBoardTable = document.querySelectorAll('.notice-board-content div');
const noticeBoardTableAll = document.querySelector('.notice-board-content .notice-table-all');
const noticeBoardPaging = document.querySelector('.notice-paging');
const searchSelect = document.querySelector('.notice-search select');
let noticeBoardPagingBtn = document.querySelectorAll('.notice-paging button');

let page = 1;
let categorynum = 0;
let totalPostNum = boardPost.length;
let totalPostpagingMax = 0;

makeBoard(categorynum, boardPost, page);
makePaging(boardPost);

searchSelect.addEventListener('change', e => {
    let seletedCurrent = e.currentTarget;
    categorynum = seletedCurrent.value;
    makeBoard(seletedCurrent.value, boardTotal[seletedCurrent.value], 1);
    makePaging(boardTotal[seletedCurrent.value]);

    noticeBoardLi.forEach(element => {
        element.classList.remove('on');
    });
    noticeBoardTable.forEach(element => {
        element.classList.remove('on');
    });

    noticeBoardLi[seletedCurrent.value].classList.add('on');
    noticeBoardTable[seletedCurrent.value].classList.add('on');
})

noticeBoardLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        noticeBoardLi.forEach(element => {
            element.classList.remove('on');
        });
        noticeBoardTable.forEach(element => {
            element.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        noticeBoardTable[idx].classList.add('on');

        categorynum = e.currentTarget.dataset.categorynum;
        if (categorynum == 0) {
            makeBoard(categorynum, boardPost, 1);
            makePaging(boardPost);
        } else if (categorynum == 1) {
            makeBoard(categorynum, boardNormal, 1);
            makePaging(boardNormal);
        } else if (categorynum == 2) {
            makeBoard(categorynum, boardSafety, 1);
            makePaging(boardSafety);
        } else if (categorynum == 3) {
            makeBoard(categorynum, boardSurvice, 1);
            makePaging(boardSurvice);
        } else if (categorynum == 4) {
            makeBoard(categorynum, boardEvent, 1);
            makePaging(boardEvent);
        }
    })
})

// 버튼 동적 생성
function makePaging(boardArr) {
    let pagingMax = Math.ceil(boardArr.length / 10); // 버튼 개수 게시물 / 10
    noticeBoardPaging.innerHTML = null;
    for (let i = 1; i <= pagingMax; i++) {
        noticeBoardPaging.innerHTML += `<button data-page=${i}>${i}</button>`;
    }
    noticeBoardPagingBtn = document.querySelectorAll('.notice-paging button');
    noticeBoardPagingBtn[0].classList.add('on');
    noticeBoardPagingBtn.forEach(button => {
        button.addEventListener('click', e => {
            noticeBoardPagingBtn.forEach(element => {
                element.classList.remove('on');
            })
            e.currentTarget.classList.add('on');

            let button_page = e.currentTarget.dataset.page;
            makeBoard(categorynum, boardTotal[categorynum], button_page);
        });
    })
}

// 게시글 동적 생성
function makeBoard(categorynum, boardArr, page) {
    noticeBoardTable.forEach(board => {
        board.children[0].children[3].innerHTML = null;
    })
    for (let i = boardArr.length - ((page - 1) * 10) - 1; i >= Math.max(boardArr.length - (page * 10), 0); i--) {
        let tr = document.createElement('tr');
        tr.innerHTML =
            `<td>${boardArr[i].id + 1}</td>
      <td>${boardArr[i].category}</td>
      <td>${boardArr[i].title}</td>
      <td>${boardArr[i].date}</td>`;
        noticeBoardTable[categorynum].children[0].children[3].append(tr);
        // tbody 내용 append
    }
}