const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const body = document.querySelector('body');
const mainVisual = document.querySelector('.main-visual');
const mainVisualBanner = document.querySelector('.mainVisualBanner');
const mainVisualBannerLi = document.querySelectorAll('.mainVisualBanner li');
const btnVisualPrev = document.querySelector('.visualPrev');
const btnVisualNext = document.querySelector('.visualNext');
const currentPage = document.querySelector('.currentPage');
const mainBannerRollingBtn = document.querySelector('.visualNavPlay button');
const freeTravelList = document.querySelector('.free-travel-list');
const btnFreeTravelPrev = document.querySelector('.free-travel-prev');
const btnFreeTravelNext = document.querySelector('.free-travel-next');
const bestGoodsNavLi = document.querySelectorAll('.best-goods .goods-nav li');
const bestGoodsViewLi = document.querySelectorAll('.best-goods .goods-view li');
const recommendLeftLi = document.querySelectorAll('.left-side-nav-list li');
const recommendRightUl = document.querySelectorAll('.right-side-content ul');

const mainVisualSelectTabLi = document.querySelectorAll('.mainSearchBox .visual-sel-tab li');
const mainVisualSelectTabViewLi = document.querySelectorAll('.mainSearchBox .visual-res-tab>li');

const whereToGo = document.querySelector('.res-tab-pack .whereToGo');
const whereToTravel = document.querySelector('.res-tab-pack .where-to-travel');
const whereToTravelulLi = document.querySelectorAll('.res-tab-pack .where-to-travel li');

const howToGo = document.querySelector('.res-tab-air input');
const howToGoAir = document.querySelector('.res-tab-air .how-to-go');
const howToGoAirUlLi = document.querySelectorAll('.res-tab-air .how-to-go li');

const startTravelDepart = document.querySelector('.res-tab-pack .start-travel-depart');
const startTravelDepartSpan = document.querySelector('.res-tab-pack .start-travel-depart span');
const startSelectDepartUl = document.querySelector('.res-tab-pack .select-depart');
const startSelectDepartList = document.querySelectorAll('.res-tab-pack .select-depart li');

const startTravelDepart_air = document.querySelector('.res-tab-air .start-travel-depart');
const startTravelDepartSpan_air = document.querySelector('.res-tab-air .start-travel-depart span');
const startSelectDepartUl_air = document.querySelector('.res-tab-air .select-depart');
const startSelectDepartList_air = document.querySelectorAll('.res-tab-air .select-depart li');

// const startTravelDepart_hotel = document.querySelector('.res-tab-hotel .start-travel-depart');
// const startTravelDepartSpan_hotel = document.querySelector('.res-tab-hotel .start-travel-depart span');
// const startSelectDepartUl_hotel = document.querySelector('.res-tab-hotel .select-depart');
// const startSelectDepartList_hotel = document.querySelectorAll('.res-tab-hotel .select-depart li');

const startTravelDate = document.querySelector('.res-tab-pack .start-travel-date');
const startTravelDateAir = document.querySelector('.res-tab-air .start-travel-date');
const startTravelDateHotel = document.querySelector('.res-tab-hotel .start-travel-date');
const endTravelDateHotel = document.querySelector('.res-tab-hotel .end-travel-date');

const startTravelDateSpan = document.querySelector('.res-tab-pack .start-travel-date span');
const startTravelDateSpanAir = document.querySelector('.res-tab-air .start-travel-date span');
const startTravelDateSpanHotel = document.querySelector('.res-tab-hotel .start-travel-date span');
const endTravelDateSpanHotel = document.querySelector('.res-tab-hotel .end-travel-date span');

const startTravelCalendar = document.querySelector('.res-tab-pack .startTravelCalendar');
const startTravelCalendarAir = document.querySelector('.res-tab-air .startTravelCalendarAir');
const startTravelCalendarHotel = document.querySelector('.res-tab-hotel .startTravelCalendarStart');
const endTravelCalendarHotel = document.querySelector('.res-tab-hotel .startTravelCalendarEnd');

const btnHaveAir = document.querySelector('.res-tab-pack .btnHaveAir');
const btnHaveAir_air = document.querySelector('.res-tab-air .btnHaveAir');
const btnHaveAir_hotel = document.querySelector('.res-tab-hotel .btnHaveAir');

const btnOnlyTeam = document.querySelector('.res-tab-pack .btnOnlyTeam');
const btnOnlyTeam_air = document.querySelector('.res-tab-air .btnOnlyTeam');
const btnOnlyTeam_hotel = document.querySelector('.res-tab-hotel .btnOnlyTeam');

const btnHotelchoose = document.querySelector('.res-tab-hotel .hotel-choose');
const btnHotelchooseSpan = document.querySelector('.res-tab-hotel .hotel-choose span');
const btnHotelchooseBox = document.querySelector('.res-tab-hotel .hotel-choose-box');
const btnHotelchooseClose = document.querySelector('.res-tab-hotel .hotel-choose-box .xi-close');
const btnHotelchooseRoomSpan = document.querySelector('.res-tab-hotel .hotel-choose-box .roomCount span');
const btnHotelchooseRoombtn = document.querySelectorAll('.res-tab-hotel .hotel-choose-box .roomCount em');
const btnHotelchooseAdultSpan = document.querySelector('.res-tab-hotel .hotel-choose-box .adultCount span');
const btnHotelchooseAdultbtn = document.querySelectorAll('.res-tab-hotel .hotel-choose-box .adultCount em');
const btnHotelchooseChildSpan = document.querySelector('.res-tab-hotel .hotel-choose-box .childCount span');
const btnHotelchooseChildbtn = document.querySelectorAll('.res-tab-hotel .hotel-choose-box .childCount em');
const btnHotelchooseSubmit = document.querySelector('.res-tab-hotel .hotel-choose-box .hotel-option-submit');

let hotelRoomCount = 1;
let hotelAdultCount = 2;
let hotelChildCount = 0;

btnHotelchoose.addEventListener('click', e => {
    btnHotelchooseBox.classList.add('on');
})
btnHotelchooseClose.addEventListener('click', e => {
    btnHotelchooseBox.classList.remove('on');
})
btnHotelchooseSubmit.addEventListener('click', e => {
    btnHotelchooseBox.classList.remove('on');
    btnHotelchooseSpan.textContent = `객실 ${hotelRoomCount} / 성인 ${hotelAdultCount}명 / 아동 ${hotelChildCount}명`
})

btnHotelchooseRoombtn[0].addEventListener('click', e => {
    hotelRoomCount--;
    if (hotelRoomCount < 1) {
        hotelRoomCount = 1;
    }
    btnHotelchooseRoomSpan.textContent = hotelRoomCount;
})
btnHotelchooseRoombtn[1].addEventListener('click', e => {
    hotelRoomCount++;
    if (hotelRoomCount > 8) {
        hotelRoomCount = 8;
    }
    btnHotelchooseRoomSpan.textContent = hotelRoomCount;
})
btnHotelchooseAdultbtn[0].addEventListener('click', e => {
    hotelAdultCount--;
    if (hotelAdultCount < 1) {
        hotelAdultCount = 1;
    }
    btnHotelchooseAdultSpan.textContent = hotelAdultCount;
})
btnHotelchooseAdultbtn[1].addEventListener('click', e => {
    hotelAdultCount++;
    if (hotelAdultCount > 8) {
        hotelAdultCount = 8;
    }
    btnHotelchooseAdultSpan.textContent = hotelAdultCount;
})
btnHotelchooseChildbtn[0].addEventListener('click', e => {
    hotelChildCount--;
    if (hotelChildCount < 0) {
        hotelChildCount = 0;
    }
    btnHotelchooseChildSpan.textContent = hotelChildCount;
})
btnHotelchooseChildbtn[1].addEventListener('click', e => {
    hotelChildCount++;
    if (hotelChildCount > 8) {
        hotelChildCount = 8;
    }
    btnHotelchooseChildSpan.textContent = hotelChildCount;
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

btnFreeTravelNext.addEventListener('click', e => {
    FreeTravelListLeft -= 305;
    if (FreeTravelListLeft < -2460) { FreeTravelListLeft = -2440; }
    freeTravelList.style.left = FreeTravelListLeft + 'px';
})

btnFreeTravelPrev.addEventListener('click', e => {
    FreeTravelListLeft += 305;
    if (FreeTravelListLeft > 0) { FreeTravelListLeft = 0; }
    freeTravelList.style.left = FreeTravelListLeft + 'px';
})
///////////////// 5월 15일 추가분 ///////////////////////

let bestgoodsTimer = null;
let bestgoodsidx = 0;
const bestgoodsinterval = 3000;

function bestgoodsRolling() {
    bestgoodsidx++;
    bestgoodsidx = bestgoodsidx % 3;
    bestGoodsNavLi.forEach(element => {
        element.classList.remove('on');
    })
    bestGoodsViewLi.forEach(element => {
        element.classList.remove('on');
    })
    bestGoodsNavLi[bestgoodsidx].classList.add('on');
    bestGoodsViewLi[bestgoodsidx].classList.add('on');
}
bestgoodsTimer = setInterval(bestgoodsRolling, bestgoodsinterval);


bestGoodsNavLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        bestGoodsNavLi.forEach(element => {
            element.classList.remove('on');
        })
        bestGoodsViewLi.forEach(element => {
            element.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        bestGoodsViewLi[idx].classList.add('on');
        bestgoodsidx = idx;
        clearInterval(bestgoodsTimer);
        bestgoodsTimer = setInterval(bestgoodsRolling, bestgoodsinterval);
    })
})


let recomendLeftTimer = null;
let recomendLeftidx = 0;
const recomendLeftinterval = 3000;

function recomendLeftRolling() {
    recomendLeftidx++;
    recomendLeftidx = recomendLeftidx % 4;
    recommendLeftLi.forEach(element => {
        element.classList.remove('on');
    })
    recommendRightUl.forEach(element => {
        element.classList.remove('on');
    })
    recommendLeftLi[recomendLeftidx].classList.add('on');
    recommendRightUl[recomendLeftidx].classList.add('on');
}
recomendLeftTimer = setInterval(recomendLeftRolling, recomendLeftinterval);

recommendLeftLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        recommendLeftLi.forEach(element => {
            element.classList.remove('on');
        })
        recommendRightUl.forEach(element => {
            element.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        recommendRightUl[idx].classList.add('on');
        recomendLeftidx = idx;
        clearInterval(recomendLeftTimer);
        recomendLeftTimer = setInterval(recomendLeftRolling, recomendLeftinterval);
    })
});
//////////////////////////////////////////////////////////
// 비주얼 추천 예약 nav
mainVisualSelectTabLi.forEach((element, idx) => {
    element.addEventListener('click', e => {
        mainVisualSelectTabLi.forEach(li => {
            li.classList.remove('on');
        })
        mainVisualSelectTabViewLi.forEach(li => {
            li.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
        mainVisualSelectTabViewLi[idx].classList.add('on');
    })
})

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0, 0, 0, 0);    // 비교 편의를 위해 today의 시간을 초기화

buildCalendar();
buildCalendar_Air();
buildCalendar_Start();
buildCalendar_End();

function buildCalendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고

        if (nowDay.getDay() == 0) {
            nowColumn.style.color = 'red';
        }

        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {
            nowColumn.style.color = 'blue';             // 토요일인 경우
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }

        if (nowDay < today) {                       // 지난날인 경우
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        }
        else {                    // 미래인 경우
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}

function buildCalendar_Air() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar_Air > tbody");
    document.getElementById("calYear_Air").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth_Air").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고

        if (nowDay.getDay() == 0) {
            nowColumn.style.color = 'red';
        }

        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {
            nowColumn.style.color = 'blue';             // 토요일인 경우
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }

        if (nowDay < today) {                       // 지난날인 경우
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        }
        else {                       // 미래인 경우
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}
function buildCalendar_Start() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar_Start > tbody");
    document.getElementById("calYear_Start").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth_Start").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고

        if (nowDay.getDay() == 0) {
            nowColumn.style.color = 'red';
        }

        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {
            nowColumn.style.color = 'blue';             // 토요일인 경우
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }

        if (nowDay < today) {                       // 지난날인 경우
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        }
        else {                       // 미래인 경우
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}
function buildCalendar_End() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar_End > tbody");
    document.getElementById("calYear_End").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth_End").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고

        if (nowDay.getDay() == 0) {
            nowColumn.style.color = 'red';
        }

        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
        nowColumn.appendChild(newDIV);

        if (nowDay.getDay() == 6) {
            nowColumn.style.color = 'blue';             // 토요일인 경우
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }

        if (nowDay < today) {                       // 지난날인 경우
            newDIV.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDateEnd(this); }
        }
        else {                         // 미래인 경우
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDateEnd(this); }
        }
    }
}


let packageStartDate = null;
let packageEndDate = null;
// 날짜 선택
function choiceDate(newDIV) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    newDIV.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가

    const selectedYear = nowMonth.getFullYear();
    const selectedMonth = nowMonth.getMonth();
    const selectedDay = parseInt(newDIV.innerHTML);


    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);

    let selectedStartDate = new Date(selectedDate);
    let dateForm = selectedStartDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
    });
    packageStartDate = dateForm;
    startTravelDateSpan.textContent = packageStartDate;
    startTravelDateSpanAir.textContent = packageStartDate;
    startTravelDateSpanHotel.textContent = packageStartDate;
    startTravelDate.classList.remove('on');
    startTravelDateAir.classList.remove('on');
    startTravelDateHotel.classList.remove('on');
    startTravelCalendar.classList.remove('on');
    startTravelCalendarAir.classList.remove('on');
    startTravelCalendarHotel.classList.remove('on');
}

function choiceDateEnd(newDIV) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    newDIV.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가

    const selectedYear = nowMonth.getFullYear();
    const selectedMonth = nowMonth.getMonth();
    const selectedDay = parseInt(newDIV.innerHTML);


    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);

    let selectedStartDate = new Date(selectedDate);
    let dateForm = selectedStartDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short'
    });
    packageEndDate = dateForm;

    endTravelDateSpanHotel.textContent = packageEndDate;
    endTravelDateHotel.classList.remove('on');
    endTravelCalendarHotel.classList.remove('on');
}

// 달력 보이기 or 안보이기 패키지
startTravelDate.addEventListener('click', e => {
    startTravelDate.classList.toggle('on');
    startTravelCalendar.classList.toggle('on');
})
// 달력 보이기 or 안보이기 항공
startTravelDateAir.addEventListener('click', e => {
    startTravelDate.classList.toggle('on');
    startTravelCalendarAir.classList.toggle('on');
})

// 이전달 버튼 클릭
// function prevCalendar() {
//     nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
//     buildCalendar();    // 달력 다시 생성
//     buildCalendar_Air();    // 달력 다시 생성
//     buildCalendar_Start();    // 달력 다시 생성
//     buildCalendar_End();    // 달력 다시 생성
// }

const mainPackageTabCalendarPrev = get('.startTravelCalendar .Calendar thead tr td:nth-child(1)');
const mainPackageTabCalendarNext = get('.startTravelCalendar .Calendar thead tr td:nth-child(3)');
const mainAirTabCalendarPrev = get('.startTravelCalendarAir .Calendar_Air thead tr td:nth-child(1)');
const mainAirTabCalendarNext = get('.startTravelCalendarAir .Calendar_Air thead tr td:nth-child(3)');
const mainHotelStartTabCalendarPrev = get('.startTravelCalendarStart .Calendar_Start thead tr td:nth-child(1)');
const mainHotelStartTabCalendarNext = get('.startTravelCalendarStart .Calendar_Start thead tr td:nth-child(3)');
const mainHotelEndTabCalendarPrev = get('.startTravelCalendarEnd .Calendar_End thead tr td:nth-child(1)');
const mainHotelEndTabCalendarNext = get('.startTravelCalendarEnd .Calendar_End thead tr td:nth-child(3)');

mainPackageTabCalendarPrev.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
})
mainPackageTabCalendarNext.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();
})

mainAirTabCalendarPrev.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar_Air();    // 달력 다시 생성
})
mainAirTabCalendarNext.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar_Air();    // 달력 다시 생성
})
mainHotelStartTabCalendarPrev.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar_Start();    // 달력 다시 생성
})
mainHotelStartTabCalendarNext.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar_Start();    // 달력 다시 생성
})
mainHotelEndTabCalendarPrev.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar_End();    // 달력 다시 생성
})
mainHotelEndTabCalendarNext.addEventListener('click', e => {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar_End();    // 달력 다시 생성
})

// 다음달 버튼 클릭
// function nextCalendar() {
//     nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
//     buildCalendar();
//     buildCalendar_Air();    // 달력 다시 생성
//     buildCalendar_Start();    // 달력 다시 생성
//     buildCalendar_End();    // 달력 다시 생성
// }

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}

// 패키지1 어디로 갈지 선택
whereToGo.addEventListener('click', e => {
    whereToTravel.classList.toggle('on');
    startTravelDepart.classList.remove('on');
    startSelectDepartUl.classList.remove('on');
    startTravelDate.classList.remove('on');
    startTravelCalendar.classList.remove('on');
    // startTravelDate.classList.remove('on');
    // 리무브 all 함수 제작 필요 예상
})

whereToTravelulLi.forEach(element => {
    element.addEventListener('click', e => {
        let whereToGoTxt = e.currentTarget.textContent;
        whereToGo.value = whereToGoTxt;
        whereToTravel.classList.toggle('on');
    })
})

// 달력 보이기 or 안보이기 Start / End
startTravelDateHotel.addEventListener('click', e => {
    startTravelDateHotel.classList.toggle('on');
    startTravelCalendarHotel.classList.toggle('on');
    endTravelDateHotel.classList.remove('on');
    endTravelCalendarHotel.classList.remove('on');
})

endTravelDateHotel.addEventListener('click', e => {
    endTravelDateHotel.classList.toggle('on');
    endTravelCalendarHotel.classList.toggle('on');
    startTravelDateHotel.classList.remove('on');
    startTravelCalendarHotel.classList.remove('on');
})

// 항공권 항공사 선택
howToGo.addEventListener('click', e => {
    howToGoAir.classList.toggle('on');
    startSelectDepartUl_air.classList.remove('on');
    startTravelDepart_air.classList.remove('on');
    startTravelDateAir.classList.remove('on');
    startTravelCalendarAir.classList.remove('on');
})

howToGoAirUlLi.forEach(element => {
    element.addEventListener('click', e => {
        let howToGoTxt = e.currentTarget.textContent;
        howToGo.value = howToGoTxt;
        howToGoAir.classList.toggle('on');
    })
})

// 출발 공항 선택
startTravelDepart.addEventListener('click', e => {
    e.currentTarget.classList.toggle('on');
    startSelectDepartUl.classList.toggle('on');
})
startSelectDepartList.forEach(element => {
    element.addEventListener('click', e => {
        startTravelDepart.classList.toggle('on');
        startSelectDepartUl.classList.toggle('on');
        let startDepartTxt = e.currentTarget.textContent;
        startTravelDepartSpan.textContent = startDepartTxt + ' 출발';
    })
})

startTravelDepart_air.addEventListener('click', e => {
    e.currentTarget.classList.toggle('on');
    startSelectDepartUl_air.classList.toggle('on');
})

startSelectDepartList_air.forEach(element => {
    element.addEventListener('click', e => {
        startTravelDepart_air.classList.toggle('on');
        startSelectDepartUl_air.classList.toggle('on');
        let startDepartTxt = e.currentTarget.textContent;
        startTravelDepartSpan_air.textContent = startDepartTxt + ' 출발';
    })
})

// 항공권은 있어요
btnHaveAir.addEventListener('click', e => {
    e.currentTarget.classList.toggle('off');
    startTravelDepart.classList.toggle('off');
})
btnHaveAir_air.addEventListener('click', e => {
    e.currentTarget.classList.toggle('off');
    startTravelDepart_air.classList.toggle('off');
})

// 우리끼리만 여행할래요
btnOnlyTeam.addEventListener('click', e => {
    e.currentTarget.classList.toggle('off');
})
btnOnlyTeam_air.addEventListener('click', e => {
    e.currentTarget.classList.toggle('off');
})