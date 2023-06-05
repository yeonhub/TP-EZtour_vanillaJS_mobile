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
// footer 회사정보 class추가
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
//비밀번호 확인
const userPassword = document.querySelector('.userPassword');
const userRePassword = document.querySelector('.userRePassword');
const NotCollectPassword = document.querySelector('.NotCollectPassword');
checkPassword();
function checkPassword() {
    if (userPassword.value != userRePassword.value) {
        NotCollectPassword.textContent = "비밀번호가 일치하지 않습니다.";
    } else {
        NotCollectPassword.textContent = "비밀번호가 일치합니다.";
    }
}
// 우편번호
function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            var roadAddr = data.roadAddress;
            var extraRoadAddr = '';
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            document.getElementById('sample4_postcode').value = data.zonecode;
            document.getElementById("sample4_roadAddress").value = roadAddr;
            document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
            if (roadAddr !== '') {
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }

            var guideTextBox = document.getElementById("guide");
            if (data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if (data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}
