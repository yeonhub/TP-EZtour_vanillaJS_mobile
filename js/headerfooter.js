// header
const menuOpenButton = document.querySelector('.top-menu-bar .xi-bars');
const menuCloseButton = document.querySelector('.icon-box .xi-close');
const menuContent = document.querySelector('.headerConbox');
const gnbLi = document.querySelectorAll('.gnb li');
const subMenuUl = document.querySelectorAll('.sub-menu ul');
const bg = document.querySelector('.bg');
let menuOpenCount = 0; //메뉴 누른 횟수
gnbLi.forEach((item, index) => {
    item.addEventListener('click', e => {
        subMenuUl.forEach(itemLi => {
            itemLi.classList.remove('on');
        })
        subMenuUl[index].classList.add('on')

        gnbLi.forEach(li => {
            li.style.backgroundColor = "initial"
        });
        item.style.backgroundColor = "#d8f1f1"
    })
})
menuOpenButton.addEventListener('click', e => {
    menuContent.classList.add('on')
    if (menuOpenCount == 0) {
        gnbLi[0].style.backgroundColor = "#d8f1f1"
    }
    menuOpenCount++;
})
menuCloseButton.addEventListener('click', e => {
    menuContent.classList.remove('on')
})

bg.addEventListener("click", e => {
    menuContent.classList.remove('on')
})
// 고객센터 날짜
let today = new Date();
let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let whatDay = document.querySelector('.date');
let workTime = document.querySelector('.opening_text .workTime');
whatDay.textContent = calTodayMonthDate(month, date, day);
function calTodayMonthDate(month, date, day) {
    switch (day) {
        case 1: day = "월"; break;
        case 2: day = "화"; break;
        case 3: day = "수"; break;
        case 4: day = "목"; break;
        case 5: day = "금"; break;
        case 6: day = "토"; break;
        case 7: day = "일"; break;
    }
    if (month < 10) monthDate = `0${month}.${date}(${day})`
    else monthDate = `${month}.${date}(${day})`
    return monthDate;
}
if (day == 6 || day == 7) {
    workTime.textContent = "휴무일입니다.";
    workTime.style.color = "red";
} else {
    workTime.innerHTML = "09:00<br> - 18:00";
}

// footer
const infoMoreButton = document.querySelector('.info .more .moreButton');
const infoText = document.querySelector('.info .infoText');
const infoTextDownIcon = document.querySelector('.moreButton .xi-caret-down');
let infoMoreButtonClickCount = 0;
infoMoreButton.addEventListener('click', e => {
    infoText.classList.toggle('on')
    infoMoreButtonClickCount++;
    if (infoMoreButtonClickCount % 2 == 0) {
        infoTextDownIcon.classList.replace('xi-caret-up', 'xi-caret-down')
    } else {
        infoTextDownIcon.classList.replace('xi-caret-down', 'xi-caret-up')
    }

})