function package_m(){
    
    const packmain_title = document.querySelectorAll('.packCon .packmain .main_btn .btn');
    const packmain_info = document.querySelectorAll('.packCon .packmain .packakegmain .inner .packmain_info');
    
    packmain_title.forEach((ele, idx) => {
        ele.addEventListener('click', e => {
            packmain_title.forEach(item => {
                item.classList.remove('on');
            })
            e.currentTarget.classList.add('on');
    
            packmain_info.forEach(item => {
                item.classList.remove('on');
            })
            // console.log(idx)
            packmain_info[idx].classList.add('on');
        })
    })
    
    //search 출발일
    const packV_search_go = document.querySelector(".packVis .packV_search .go");
    const packV_search_go_txt = document.querySelector(".packVis .packV_search .go span");
    const packV_search_go_i = document.querySelector(".packVis .packV_search .go i");
    const packV_spop_go = document.querySelector(".packVis .packV_spop_go");
    //search 여행일수
    const packV_search_date = document.querySelector(".packVis .packV_search .date");
    const packV_search_date_txt = document.querySelector(".packVis .packV_search .date span");
    const packV_search_date_i = document.querySelector(".packVis .packV_search ul li .date i");
    const packV_spop_date_box = document.querySelector(".packVis .packV_spop_date");
    const packV_spop_date_li = document.querySelectorAll(".packVis .packV_spop_date li");
    //search 인원
    const packV_search_people = document.querySelector(".packVis .packV_search .people");
    const packV_search_people_txt = document.querySelector(".packVis .packV_search .people span");
    const packV_search_people_i = document.querySelector(".packVis .packV_search .people i");
    const packV_search_people_box = document.querySelector(".packVis .packV_spop_people");
    const packV_btn_o_prev = document.querySelector(".packVis .packV_spop_people .packV_btn_o_prev");
    const packV_spop_btn_ol = document.querySelector(".packVis .packV_o .ol");
    const packV_btn_o_next = document.querySelector(".packVis .packV_spop_people .packV_btn_o_next");
    const packV_btn_y_prev = document.querySelector(".packVis .packV_spop_people .packV_btn_y_prev");
    const packV_spop_btn_yo = document.querySelector(".packVis .packV_y .yo");
    const packV_btn_y_next = document.querySelector(".packVis .packV_spop_people .packV_btn_y_next");
    //searh_btt
    const pack_search_btt = document.querySelector(".packVis .btt");
    const pack_prevcal = document.querySelector(".packVis .packV_spop_go .pack_prevCal")
    const pack_nextcal = document.querySelector(".packVis .packV_spop_go .pack_nextCal")
    let pack_top, pack_cnt = 0;
    let packV_btn_o_num = 1;
    let packV_btn_y_num = 0;
    let packV_slid_people = true;
    let packV_slid_date = true;
    let packV_slid_go = true;
    let pack_nowMonth = new Date(); //  페이지 로드한 달
    let pack_today = new Date(); // 페이지 로드한 날짜
    pack_today.setHours(0, 0, 0, 0);
    
    window.onload = function () {
        pack_buildCal();
    };
    
    function pack_buildCal() {
        let firstDate = new Date(pack_nowMonth.getFullYear(), pack_nowMonth.getMonth(), 1);
        let lastDate = new Date(pack_nowMonth.getFullYear(), pack_nowMonth.getMonth() + 1, 0);
        let tbody_Calendar = document.querySelector(".packV_calendar tbody");
        document.getElementById("calYear").innerText = pack_nowMonth.getFullYear(); // 연도 갱신
        document.getElementById("calMonth").innerText = pack_leftPad(pack_nowMonth.getMonth() + 1); // 월 갱신
    
        // 이전 출력결과가 남아있는 경우 초기화
        while (tbody_Calendar.rows.length > 0) {
            tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
        }
        let nowRow = tbody_Calendar.insertRow(); // 첫번째 행 추가
        for (let j = 0; j < firstDate.getDay(); j++) {
            let nowColumn = nowRow.insertCell(); // 열 추가
        }
        // 날짜 저장 변수 day // 이번달 마지막날까지 날짜 증가
        for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
            let nowColumn = nowRow.insertCell(); // 새 열 추가
            let newDIV = document.createElement("p");
            newDIV.innerHTML = pack_leftPad(nowDay.getDate()); // 삽입된 열에 날짜 입력
            nowColumn.appendChild(newDIV);
            if (nowDay.getDay() == 6) {
                nowRow = tbody_Calendar.insertRow(); // 새 행 추가
            }
            // 과거 // 오늘 // 미래
            if (nowDay < pack_today) {
                newDIV.className = "pastDay";
            } else if (
                nowDay.getFullYear() == pack_today.getFullYear() &&
                nowDay.getMonth() == pack_today.getMonth() &&
                nowDay.getDate() == pack_today.getDate()
            ) {
                newDIV.className = "pack_today";
                newDIV.onclick = function () {
                    pack_choiceDate(this);
                };
            } else {
                newDIV.className = "futureDay";
                newDIV.onclick = function () {
                    pack_choiceDate(this);
                };
            }
        }
    }
    // 날짜 선택
    function pack_choiceDate(newDIV) {
        if (document.getElementsByClassName("pack_choiceDay")[0]) {
            document.getElementsByClassName("pack_choiceDay")[0].classList.remove("pack_choiceDay");
        }
        newDIV.classList.add("pack_choiceDay");
    
        packV_search_go_txt.textContent = `${pack_nowMonth.getMonth() + 1}월 ${newDIV.textContent}일`;
        packV_search_go_txt.style.color = "black";
        packV_spop_go.style.height = "0px";
        packV_search_go_i.style.transform = "rotate(0deg)";
        packV_slid_go = !packV_slid_go;
    }
    
    // 이전달 버튼 클릭
    pack_prevcal.addEventListener('click', function (e) {
        pack_nowMonth = new Date(
            pack_nowMonth.getFullYear(),
            pack_nowMonth.getMonth() - 1,
            pack_nowMonth.getDate()
        );
        pack_buildCal();
    })
    // 다음달 버튼 클릭
    pack_nextcal.addEventListener('click', function (e) {
        pack_nowMonth = new Date(
            pack_nowMonth.getFullYear(),
            pack_nowMonth.getMonth() + 1,
            pack_nowMonth.getDate()
        );
        pack_buildCal();
    })
    
    function pack_leftPad(value) {
        if (value < 10) {
            value = "0" + value;
            return value;
        }
        return value;
    }
    
    // pack_search_출발일
    packV_search_go.addEventListener("click", (e) => {
        if (packV_slid_go) {
            if (!packV_slid_date) {
                packV_spop_date_box.style.height = "0px";
                packV_search_date_i.style.transform = "rotate(0deg)";
            }
            if (!packV_slid_people) {
                packV_search_people_box.style.height = `0px`;
                packV_search_people_i.style.transform = "rotate(0deg)";
            }
            packV_spop_go.style.height = "440px";
            packV_search_go_i.style.transform = "rotate(180deg)";
            packV_slid_go = !packV_slid_go;
        } else {
            packV_spop_go.style.height = "0px";
            packV_search_go_i.style.transform = "rotate(0deg)";
            packV_slid_go = !packV_slid_go;
        }
    });
    // pack_search_일정
    packV_search_date.addEventListener("click", (e) => {
        if (packV_slid_date) {
            if (!packV_slid_go) {
                packV_search_people_box.style.height = "0px";
                packV_search_go_i.style.transform = "rotate(0deg)";
            }
            if (!packV_slid_people) {
                packV_search_people_box.style.height = `0px`;
                packV_search_people_i.style.transform = "rotate(0deg)";
            }
            packV_spop_date_box.style.height = "320px";
            packV_search_date_i.style.transform = "rotate(180deg)";
            packV_slid_date = !packV_slid_date;
        } else {
            packV_spop_date_box.style.height = "0px";
            packV_search_date_i.style.transform = "rotate(0deg)";
            packV_slid_date = !packV_slid_date;
        }
    });
    packV_spop_date_li.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            packV_search_date_txt.textContent = ele.textContent;
            packV_search_date_txt.style.color = "black";
            packV_spop_date_box.style.height = "0px";
            packV_slid_date = !packV_slid_date;
            packV_search_date_i.style.transform = "rotate(0deg)";
        });
    });
    
    // pack_search_인원
    packV_search_people.addEventListener("click", (e) => {
        if (packV_slid_people) {
            if (!packV_slid_go) {
                packV_spop_go.style.height = "0px";
                packV_search_go_i.style.transform = "rotate(0deg)";
            }
            if (!packV_slid_date) {
                packV_spop_date_box.style.height = "0px";
                packV_search_date_i.style.transform = "rotate(0deg)";
            }
            packV_search_people_box.style.height = `100px`;
            packV_search_people_i.style.transform = "rotate(180deg)";
            packV_slid_people = !packV_slid_people;
        } else {
            packV_search_people_box.style.height = `0px`;
            packV_search_people_i.style.transform = "rotate(0deg)";
            packV_slid_people = !packV_slid_people;
        }
    });
    packV_btn_o_prev.addEventListener("click", (e) => {
        packV_btn_o_num++;
        packV_spop_btn_ol.textContent = packV_btn_o_num;
        packV_search_people_txt.style.color = "black";
        packV_search_people_txt.textContent = `성인 ${packV_btn_o_num} 명 , 아동 ${packV_btn_y_num} 명`;
    });
    packV_btn_o_next.addEventListener("click", (e) => {
        packV_btn_o_num--;
        if (packV_btn_o_num < 1) packV_btn_o_num = 1;
        packV_search_people_txt.style.color = "black";
        packV_spop_btn_ol.textContent = packV_btn_o_num;
        packV_search_people_txt.textContent = `성인 ${packV_btn_o_num} 명 , 아동 ${packV_btn_y_num} 명`;
    });
    packV_btn_y_prev.addEventListener("click", (e) => {
        packV_btn_y_num++;
        packV_search_people_txt.style.color = "black";
        packV_spop_btn_yo.textContent = packV_btn_y_num;
        packV_search_people_txt.textContent = `성인 ${packV_btn_o_num} 명 , 아동 ${packV_btn_y_num} 명`;
    });
    packV_btn_y_next.addEventListener("click", (e) => {
        packV_btn_y_num--;
        if (packV_btn_y_num < 0) packV_btn_y_num = 0;
        packV_search_people_txt.style.color = "black";
        packV_spop_btn_yo.textContent = packV_btn_y_num;
        packV_search_people_txt.textContent = `성인 ${packV_btn_o_num} 명 , 아동 ${packV_btn_y_num} 명`;
    });
    
    pack_search_btt.addEventListener("click", (e) => {
        if (!packV_slid_date) {
            packV_spop_date_box.style.height = "0px";
            packV_search_date_i.style.transform = "rotate(0deg)";
        }
        if (!packV_slid_people) {
            packV_search_people_box.style.height = `0px`;
            packV_search_people_i.style.transform = "rotate(0deg)";
        }
        if (!packV_slid_go) {
            packV_spop_go.style.height = "0px";
            packV_search_go_i.style.transform = "rotate(0deg)";
        }
    });

}

function tour_m(){
    
}


function mainInit() {

    if (location.pathname.split('/').pop() == 'package_m.html') {
        package_m();
    }
    if (location.pathname.split('/').pop() == 'tour_m.html') {
        tour_m();
    }

}




(() => {
    mainInit();
})();