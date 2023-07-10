function air() {
    
    // vis
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);


    // search
    let $roundBtn = get('.airportVis .inner .search .way .roundBtn')
    let $oneBtn = get('.airportVis .inner .search .way .oneBtn')
    let $round = get('.airportVis .inner .search .round')
    let $one = get('.airportVis .inner .search .one')

    
    // vis popup
    // round
    let $visStaR = get('.airportVis .inner .search .round .where .start')
    let $visStaRPopBox = get('.airportVis .inner .search .round .popStaBox')
    let $visStaRPop = get('.airportVis .inner .search .round .popSta')
    let $visStaRPoNaNvw = get('.airportVis .inner .search .round .popSta .xi-close')
    let $visStaRPopA = getAll('.airportVis .inner .search .round .popSta li')

    let $visDesR = get('.airportVis .inner .search .round .where .end')
    let $visDesRPopBox = get('.airportVis .inner .search .round .popDesBox')
    let $visDesRPop = get('.airportVis .inner .search .round .popDes')
    let $visDesRPoNaNvw = get('.airportVis .inner .search .round .popDes .xi-close')
    let $visDesRPopA = getAll('.airportVis .inner .search .round .popDes li')

    let $visPerR = get('.airportVis .inner .search .round .when .pers')
    let $visPerRPopBox = get('.airportVis .inner .search .round .popPerBox')
    let $visPerRPop = get('.airportVis .inner .search .round .popPer')
    let $visPerRPoNaNvw = get('.airportVis .inner .search .round .popPer .xi-close')

    let $visPerRP = getAll('.airportVis .inner .search .round .popPer ul li strong')
    let $visPerRPlus = getAll('.airportVis .inner .search .round .popPer ul li .plus')
    let $visPerRMinus = getAll('.airportVis .inner .search .round .popPer ul li .min')

    let $visDateRS = get('.airportVis .inner .search .round .when .start_date')
    let $visDateRSBox = get('.airportVis .inner .search .round .popDateBox')
    let $visDateRSBox1 = get('.airportVis .inner .search .round .popDateBox .popDateBox1')
    let $visDateRSBox1X = get('.airportVis .inner .search .round .popDateBox .xi-close')

    let $visDateRR = get('.airportVis .inner .search .round .when .end_date')
    let $visDateRSBoxR = get('.airportVis .inner .search .round .popDateBoxR')
    let $visDateRSBox1R = get('.airportVis .inner .search .round .popDateBoxR .popDateBox1')
    let $visDateRSBox1XR = get('.airportVis .inner .search .round .popDateBoxR .xi-close')

    // one
    let $visStaO = get('.airportVis .inner .search .one .where .start')
    let $visStaOPopBox = get('.airportVis .inner .search .one .popStaBox')
    let $visStaOPop = get('.airportVis .inner .search .one .popSta')
    let $visStaOPoNaNvw = get('.airportVis .inner .search .one .popSta .xi-close')
    let $visStaOPopA = getAll('.airportVis .inner .search .one .popSta li')

    let $visDesO = get('.airportVis .inner .search .one .where .end')
    let $visDesOPopBox = get('.airportVis .inner .search .one .popDesBox')
    let $visDesOPop = get('.airportVis .inner .search .one .popDes')
    let $visDesOPoNaNvw = get('.airportVis .inner .search .one .popDes .xi-close')
    let $visDesOPopA = getAll('.airportVis .inner .search .one .popDes li')

    let $visPerO = get('.airportVis .inner .search .one .when .pers')
    let $visPerOPopBox = get('.airportVis .inner .search .one .popPerBox')
    let $visPerOPop = get('.airportVis .inner .search .one .popPer')
    let $visPerOPoNaNvw = get('.airportVis .inner .search .one .popPer .xi-close')

    let $visPerOP = getAll('.airportVis .inner .search .one .popPer ul li strong')
    let $visPerOPlus = getAll('.airportVis .inner .search .one .popPer ul li .plus')
    let $visPerOMinus = getAll('.airportVis .inner .search .one .popPer ul li .min')

    let $visDateRO = get('.airportVis .inner .search .one .when .start_date')
    let $visDateRSBoxO = get('.airportVis .inner .search .one .popDateBoxO')
    let $visDateRSBox1O = get('.airportVis .inner .search .one .popDateBoxO .popDateBox1')
    let $visDateRSBox1XO = get('.airportVis .inner .search .one .popDateBoxO .xi-close')

    // cal
    let nowMonth = new Date();
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let $prevBtn = get('.airportVis .inner .search .popDateBox .popDate .popDateS .prev')
    let $nextBtn = get('.airportVis .inner .search .popDateBox .popDate .popDateS .next')
    let $prevBtnR = get('.airportVis .inner .search .popDateBoxR .popDate .popDateS .prev')
    let $nextBtnR = get('.airportVis .inner .search .popDateBoxR .popDate .popDateS .next')
    let $prevBtnO = get('.airportVis .inner .search .popDateBoxO .popDate .popDateS .prev')
    let $nextBtnO = get('.airportVis .inner .search .popDateBoxO .popDate .popDateS .next')
    let startDate;
    let returnDate;
    let selectDate;

    // round close
    function visStaRClose() {
        $visStaRPop.style.top = '-83.3333vw';
        $visStaRPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visStaRPopBox.style.zIndex = '-1';
        }, 300)
    }
    function visDesRClose() {
        $visDesRPop.style.top = '-83.3333vw';
        $visDesRPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visDesRPopBox.style.zIndex = '-1';
        }, 300)
    }
    function visPerRClose() {
        $visPerRPop.style.top = '-83.3333vw';
        $visPerRPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visPerRPopBox.style.zIndex = '-1';
            $visPerRPopBox.style.height = '0.0000vw';
        }, 300)
    }
    function visDateRSClose() {
        $visDateRSBox1.style.top = '-133.3333vw';
        $visDateRSBox1.style.boxShadow = 'none';
        setTimeout(() => {
            $visDateRSBox.style.zIndex = '-1';
            $visDateRSBox.style.height = '0.0000vw';
        }, 300)
    }
    function visDateRRClose() {
        $visDateRSBox1R.style.top = '-133.3333vw';
        $visDateRSBox1R.style.boxShadow = 'none';
        setTimeout(() => {
            $visDateRSBoxR.style.zIndex = '-1';
            $visDateRSBoxR.style.height = '0.0000vw';
        }, 300)
    }

    // one close
    function visStaOClose() {
        $visStaOPop.style.top = '-83.3333vw';
        $visStaOPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visStaOPopBox.style.zIndex = '-1';
        }, 300)
    }
    function visDesOClose() {
        $visDesOPop.style.top = '-83.3333vw';
        $visDesOPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visDesOPopBox.style.zIndex = '-1';
        }, 300)
    }
    function visPerOClose() {
        $visPerOPop.style.top = '-83.3333vw';
        $visPerOPop.style.boxShadow = 'none';
        setTimeout(() => {
            $visPerOPopBox.style.zIndex = '-1';
            $visPerOPopBox.style.height = '0.0000vw';
        }, 300)
    }
    function visDateOSClose() {
        $visDateRSBox1O.style.top = '-133.3333vw';
        $visDateRSBox1O.style.boxShadow = 'none';
        setTimeout(() => {
            $visDateRSBoxO.style.zIndex = '-1';
            $visDateRSBoxO.style.height = '0.0000vw';
        }, 300)
    }
    // way
    $roundBtn.addEventListener('click', e => {
        $round.style.display = 'block';
        $one.style.display = 'none';
        $roundBtn.style.borderBottom = '0.5556vw solid gray';
        $oneBtn.style.borderBottom = 'none';
        visDesOClose();
        visPerOClose();
        visDateOSClose();
        visStaOClose();
    })
    $oneBtn.addEventListener('click', e => {
        $one.style.display = 'block';
        $round.style.display = 'none';
        $oneBtn.style.borderBottom = '0.5556vw solid gray';
        $roundBtn.style.borderBottom = 'none';
        visDesRClose();
        visPerRClose();
        visDateRSClose();
        visDateRRClose();
        visStaRClose();
    })

    // popup
    // round
    // start
    $visStaR.addEventListener('click', e => {
        $visStaRPopBox.style.zIndex = '2';
        $visStaRPop.style.top = 0;
        $visStaRPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        //
        visDesRClose();
        visPerRClose();
        visDateRSClose();
        visDateRRClose();
    })
    $visStaRPoNaNvw.addEventListener('click', e => {
        visStaRClose();
        function visStaRClose() {
            $visStaRPop.style.top = '-83.3333vw';
            $visStaRPop.style.boxShadow = 'none';
            setTimeout(() => {
                $visStaRPopBox.style.zIndex = '-1';
            }, 300)
        }
    })
    $visStaRPopA.forEach(item => {
        item.addEventListener('click', e => {
            $visStaRPop.style.top = '-83.3333vw';
            $visStaRPop.style.boxShadow = 'none';
            setTimeout(() => {
                $visStaRPopBox.style.zIndex = '-1';
            }, 300)
            let sel = e.currentTarget.innerHTML;
            $visStaR.textContent = sel;
            $visStaR.style.color = 'black';
            if ($visDesR.innerHTML === $visStaR.innerHTML) alert('출발지와 도착지가 같습니다')
        })
    })

    // destination
    $visDesR.addEventListener('click', e => {
        $visDesRPopBox.style.zIndex = '2';
        $visDesRPop.style.top = 0;
        $visDesRPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        // 
        visStaRClose();
        visPerRClose();
        visDateRSClose();
        visDateRRClose();
    })
    $visDesRPoNaNvw.addEventListener('click', e => {
        visDesRClose()
    })
    $visDesRPopA.forEach(item => {
        item.addEventListener('click', e => {
            $visDesRPop.style.top = '-83.3333vw';
            $visDesRPop.style.boxShadow = 'none';
            setTimeout(() => {
                $visDesRPopBox.style.zIndex = '-1';
            }, 300)
            let sel = e.currentTarget.innerHTML;
            $visDesR.textContent = sel;
            $visDesR.style.color = 'black';
            if ($visDesR.innerHTML === $visStaR.innerHTML) alert('출발지와 도착지가 같습니다')
        })
    })

    // personnel
    $visPerR.addEventListener('click', e => {
        $visPerRPopBox.style.zIndex = '1';
        $visPerRPopBox.style.height = '83.3333vw';
        $visPerRPop.style.top = 0;
        $visPerRPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        // 
        visStaRClose();
        visDesRClose();
        visDateRSClose();
        visDateRRClose();
    })
    $visPerRPoNaNvw.addEventListener('click', e => {
        visPerRClose()
    })

    $visPerRPlus.forEach(element => {
        element.addEventListener('click', e => {
            let num = e.currentTarget.previousElementSibling;
            let total = 0;
            num.textContent = Number(num.innerHTML) + 1;
            $visPerRP.forEach(item => [
                total += Number(item.innerHTML)
            ])
            if (total > 9) {
                alert('성인/소아/유아 합이 최대 9명까지 가능합니다.');
                $visPerRP.forEach(item => [
                    item.textContent = 0,
                ])
                $visPerRP[0].textContent = 1
            }
            if (Number($visPerRP[1].innerHTML) === 0 && Number($visPerRP[2].innerHTML) === 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명`
                $visPerR.style.color = 'black'
            } else if (Number($visPerRP[1].innerHTML) != 0 && Number($visPerRP[2].innerHTML) === 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 소아 ${$visPerRP[1].innerHTML}명`
                $visPerR.style.color = 'black'
            } else if (Number($visPerRP[1].innerHTML) != 0 && Number($visPerRP[2].innerHTML) != 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 소아 ${$visPerRP[1].innerHTML}명 | 유아 ${$visPerRP[2].innerHTML}명`
                $visPerR.style.color = 'black'
            } else {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 유아 ${$visPerRP[2].innerHTML}명`
                $visPerR.style.color = 'black'
            }
        })
    })

    $visPerRMinus.forEach(element => {
        element.addEventListener('click', e => {
            let num = e.currentTarget.nextElementSibling;
            num.textContent = Number(num.innerHTML) - 1;
            if (Number(num.innerHTML) - 1 < 0) num.textContent = 0;
            if (Number($visPerRP[0].innerHTML) < 1) $visPerRP[0].innerHTML = 1;
            if (Number($visPerRP[1].innerHTML) === 0 && Number($visPerRP[2].innerHTML) === 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명`
                $visPerR.style.color = 'black'
            } else if (Number($visPerRP[1].innerHTML) != 0 && Number($visPerRP[2].innerHTML) === 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 소아 ${$visPerRP[1].innerHTML}명`
                $visPerR.style.color = 'black'
            } else if (Number($visPerRP[1].innerHTML) != 0 && Number($visPerRP[2].innerHTML) != 0) {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 소아 ${$visPerRP[1].innerHTML}명 | 유아 ${$visPerRP[2].innerHTML}명`
                $visPerR.style.color = 'black'
            } else {
                $visPerR.textContent = `성인 ${$visPerRP[0].innerHTML}명 | 유아 ${$visPerRP[2].innerHTML}명`
                $visPerR.style.color = 'black'
            }
        })
    })

    // date
    $visDateRS.addEventListener('click', e => {
        $visDateRSBox.style.zIndex = '2';
        $visDateRSBox.style.height = '136.1111vw';
        $visDateRSBox1.style.top = 0;
        $visDateRSBox1.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        calendar();
        // 
        visStaRClose();
        visDesRClose();
        visPerRClose();
        visDateRRClose();
    })
    $visDateRSBox1X.addEventListener('click', e => {
        visDateRSClose();

    })

    $visDateRR.addEventListener('click', e => {
        $visDateRSBoxR.style.zIndex = '2';
        $visDateRSBoxR.style.height = '136.1111vw';
        $visDateRSBox1R.style.top = 0;
        $visDateRSBox1R.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        calendarR();
        // 
        visStaRClose();
        visDesRClose();
        visPerRClose();
        visDateRSClose();
    })
    $visDateRSBox1XR.addEventListener('click', e => {
        visDateRRClose();
    })

    // one
    // start
    $visStaO.addEventListener('click', e => {
        $visStaOPopBox.style.zIndex = '2';
        $visStaOPop.style.top = 0;
        $visStaOPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        // 
        visDesOClose();
        visPerOClose();
        visDateOSClose();
    })
    $visStaOPoNaNvw.addEventListener('click', e => {
        visStaOClose();

    })
    $visStaOPopA.forEach(item => {
        item.addEventListener('click', e => {
            $visStaOPop.style.top = '-83.3333vw';
            $visStaOPop.style.boxShadow = 'none';
            setTimeout(() => {
                $visStaOPopBox.style.zIndex = '-1';
            }, 300)
            let sel = e.currentTarget.innerHTML;
            $visStaO.textContent = sel;
            $visStaO.style.color = 'black';
            if ($visDesO.innerHTML === $visStaO.innerHTML) alert('출발지와 도착지가 같습니다')
        })
    })

    // destination
    $visDesO.addEventListener('click', e => {
        $visDesOPopBox.style.zIndex = '2';
        $visDesOPop.style.top = 0;
        $visDesOPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        // 
        visPerOClose();
        visDateOSClose();
        visStaOClose();
    })
    $visDesOPoNaNvw.addEventListener('click', e => {
        visDesOClose();

    })
    $visDesOPopA.forEach(item => {
        item.addEventListener('click', e => {
            $visDesOPop.style.top = '-83.3333vw';
            $visDesOPop.style.boxShadow = 'none';
            setTimeout(() => {
                $visDesOPopBox.style.zIndex = '-1';
            }, 300)
            let sel = e.currentTarget.innerHTML;
            $visDesO.textContent = sel;
            $visDesO.style.color = 'black';
            if ($visDesO.innerHTML === $visStaO.innerHTML) alert('출발지와 도착지가 같습니다')
        })
    })

    // personnel
    $visPerO.addEventListener('click', e => {
        $visPerOPopBox.style.zIndex = '1';
        $visPerOPopBox.style.height = '83.3333vw';
        $visPerOPop.style.top = 0;
        $visPerOPop.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        // 
        visDesOClose();
        visDateOSClose();
        visStaOClose();

    })
    $visPerOPoNaNvw.addEventListener('click', e => {
        visPerOClose();
    })

    $visPerOPlus.forEach(element => {
        element.addEventListener('click', e => {
            let num = e.currentTarget.previousElementSibling;
            let total = 0;
            num.textContent = Number(num.innerHTML) + 1;
            $visPerOP.forEach(item => [
                total += Number(item.innerHTML)
            ])
            if (total > 9) {
                alert('성인/소아/유아 합이 최대 9명까지 가능합니다.');
                $visPerOP.forEach(item => [
                    item.textContent = 0,
                ])
                $visPerOP[0].textContent = 1
            }
            if (Number($visPerOP[1].innerHTML) === 0 && Number($visPerOP[2].innerHTML) === 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명`
                $visPerO.style.color = 'black'
            } else if (Number($visPerOP[1].innerHTML) != 0 && Number($visPerOP[2].innerHTML) === 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 소아 ${$visPerOP[1].innerHTML}명`
                $visPerO.style.color = 'black'
            } else if (Number($visPerOP[1].innerHTML) != 0 && Number($visPerOP[2].innerHTML) != 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 소아 ${$visPerOP[1].innerHTML}명 | 유아 ${$visPerOP[2].innerHTML}명`
                $visPerO.style.color = 'black'
            } else {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 유아 ${$visPerOP[2].innerHTML}명`
                $visPerO.style.color = 'black'
            }
        })
    })

    $visPerOMinus.forEach(element => {
        element.addEventListener('click', e => {
            let num = e.currentTarget.nextElementSibling;
            num.textContent = Number(num.innerHTML) - 1;
            if (Number(num.innerHTML) - 1 < 0) num.textContent = 0;
            if (Number($visPerOP[0].innerHTML) < 1) $visPerOP[0].innerHTML = 1;
            if (Number($visPerOP[1].innerHTML) === 0 && Number($visPerOP[2].innerHTML) === 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명`
                $visPerO.style.color = 'black'
            } else if (Number($visPerOP[1].innerHTML) != 0 && Number($visPerOP[2].innerHTML) === 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 소아 ${$visPerOP[1].innerHTML}명`
                $visPerO.style.color = 'black'
            } else if (Number($visPerOP[1].innerHTML) != 0 && Number($visPerOP[2].innerHTML) != 0) {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 소아 ${$visPerOP[1].innerHTML}명 | 유아 ${$visPerOP[2].innerHTML}명`
                $visPerO.style.color = 'black'
            } else {
                $visPerO.textContent = `성인 ${$visPerOP[0].innerHTML}명 | 유아 ${$visPerOP[2].innerHTML}명`
                $visPerO.style.color = 'black'
            }
        })
    })

    // date
    $visDateRO.addEventListener('click', e => {
        $visDateRSBoxO.style.zIndex = '2';
        $visDateRSBoxO.style.height = '136.1111vw';
        $visDateRSBox1O.style.top = 0;
        $visDateRSBox1O.style.boxShadow = '0.0000vw 0.0000vw 2.7778vw';
        calendarO();
        // 
        visDesOClose();
        visPerOClose();
        visStaOClose();

    })
    $visDateRSBox1XO.addEventListener('click', e => {
        visDateOSClose();
    })


    // cal
    // date comparison
    function dateCom(day1, day2) {
        if (day1 === day2) {
            alert('출발일과 리턴일이 같습니다')
        } else if (day1 > day2) {
            alert('출발일이 리턴일보다 늦습니다')
        }
    }

    // claendar
    function calendar() {
        let firstDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
        let lastDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
        // let firstDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
        // let lastDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 2, 0);

        let $tbody_CalendarS = get('.airportVis .inner .search .popDateBox .popDate .popDateS>tbody');
        let $yearS = get('.airportVis .inner .search .popDateBox .popDate .popDateS .year')
        let $monthS = get('.airportVis .inner .search .popDateBox .popDate .popDateS .month')

        let $tbody_CalendarE = get('.airportVis .inner .search .popDateBox .popDate .popDateE>tbody');
        // let $yearE = get('.airportVis .inner .search .popDateBox .popDate .popDateE .year')
        // let $monthE = get('.airportVis .inner .search .popDateBox .popDate .popDateE .month')

        $yearS.innerHTML = nowMonth.getFullYear();
        $monthS.innerHTML = nowMonth.getMonth() + 1;
        // $yearE.innerHTML = nowMonth.getFullYear();
        // $monthE.innerHTML = nowMonth.getMonth() + 2;

        while ($tbody_CalendarS.rows.length > 0) {
            $tbody_CalendarS.deleteRow($tbody_CalendarS.rows.length - 1);
        }
        // while ($tbody_CalendarE.rows.length > 0) {
        //     $tbody_CalendarE.deleteRow($tbody_CalendarE.rows.length - 1);
        // }
        let nowRowS = $tbody_CalendarS.insertRow();
        // let nowRowE = $tbody_CalendarE.insertRow();

        for (let i = 0; i < firstDateS.getDay(); i++) {
            let nowColumn = nowRowS.insertCell();
        }
        // for (let j = 0; j < firstDateE.getDay(); j++) {
        //     let nowColumn = nowRowE.insertCell();
        // }

        for (let nowDay = firstDateS; nowDay <= lastDateS; nowDay.setDate(nowDay.getDate() + 1)) {
            let nowColumn = nowRowS.insertCell();

            let newDIV = document.createElement('p');
            newDIV.innerHTML = nowDay.getDate();
            nowColumn.appendChild(newDIV);


            if (nowDay.getDay() == 0) {
                nowColumn.style.color = 'red';
            }
            if (nowDay.getDay() == 6) {
                nowColumn.style.color = 'blue';
                nowRowS = $tbody_CalendarS.insertRow();
            }
            if (nowDay < today) {
                newDIV.className = 'pastDay';
            } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
                newDIV.className = "today";
                newDIV.addEventListener('click', e => {
                    select(e.currentTarget, 'popDateS');
                })
            } else {
                newDIV.className = 'futureDay';
                newDIV.addEventListener('click', e => {
                    select(e.currentTarget, 'popDateS');
                })
            }
        }
        // for (let nowDay = firstDateE; nowDay <= lastDateE; nowDay.setDate(nowDay.getDate() + 1)) {
        //     let nowColumn = nowRowE.insertCell();

        //     let newDIV = document.createElement('p');
        //     newDIV.innerHTML = nowDay.getDate();
        //     nowColumn.appendChild(newDIV);
        //     if (nowDay.getDay() == 0) {
        //         nowColumn.style.color = 'red';
        //     }
        //     if (nowDay.getDay() == 6) {
        //         nowColumn.style.color = 'blue';
        //         nowRowE = $tbody_CalendarE.insertRow();
        //     }
        //     if (nowDay < today) {
        //         newDIV.className = 'pastDay';
        //     } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
        //         newDIV.className = "today";
        //         newDIV.addEventListener('click', e => {
        //             select(e.currentTarget, 'popDateE');
        //         })
        //     } else {
        //         newDIV.className = 'futureDay';
        //         newDIV.addEventListener('click', e => {
        //             select(e.currentTarget, 'popDateE');
        //         })
        //     }
        // }
    }

    function select(day, calendarType) {
        if (document.getElementsByClassName("choiceDay")[0]) {
            document.getElementsByClassName("choiceDay")[0].classList.remove('choiceDay');
        }
        day.classList.add('choiceDay');


        const selectedYear = nowMonth.getFullYear();
        const selectedMonth = nowMonth.getMonth();
        const selectedDay = parseInt(day.innerHTML);


        const selectedDateS = new Date(selectedYear, selectedMonth, selectedDay);
        const selectedDateE = new Date(selectedYear, selectedMonth + 1, selectedDay);

        if (calendarType === 'popDateS') {
            let date = new Date(selectedDateS);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            startDate = dateForm;
            $visDateRS.style.color = 'black';
            $visDateRS.textContent = dateForm;
        } else if (calendarType === 'popDateE') {
            let date = new Date(selectedDateE);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            startDate = dateForm;
            $visDateRS.style.color = 'black';
            $visDateRS.textContent = dateForm;
        }
    }

    $prevBtn.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
        calendar();
    })

    $nextBtn.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
        calendar();
    })

    // calendarR
    function calendarR() {
        let firstDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
        let lastDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
        // let firstDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
        // let lastDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 2, 0);

        let $tbody_CalendarS = get('.airportVis .inner .search .popDateBoxR .popDate .popDateS>tbody');
        let $yearS = get('.airportVis .inner .search .popDateBoxR .popDate .popDateS .year')
        let $monthS = get('.airportVis .inner .search .popDateBoxR .popDate .popDateS .month')

        let $tbody_CalendarE = get('.airportVis .inner .search .popDateBoxR .popDate .popDateE>tbody');
        // let $yearE = get('.airportVis .inner .search .popDateBoxR .popDate .popDateE .year')
        // let $monthE = get('.airportVis .inner .search .popDateBoxR .popDate .popDateE .month')

        $yearS.innerHTML = nowMonth.getFullYear();
        $monthS.innerHTML = nowMonth.getMonth() + 1;
        // $yearE.innerHTML = nowMonth.getFullYear();
        // $monthE.innerHTML = nowMonth.getMonth() + 2;

        while ($tbody_CalendarS.rows.length > 0) {
            $tbody_CalendarS.deleteRow($tbody_CalendarS.rows.length - 1);
        }
        // while ($tbody_CalendarE.rows.length > 0) {
        //     $tbody_CalendarE.deleteRow($tbody_CalendarE.rows.length - 1);
        // }
        let nowRowS = $tbody_CalendarS.insertRow();
        // let nowRowE = $tbody_CalendarE.insertRow();

        for (let i = 0; i < firstDateS.getDay(); i++) {
            let nowColumn = nowRowS.insertCell();
        }
        // for (let j = 0; j < firstDateE.getDay(); j++) {
        //     let nowColumn = nowRowE.insertCell();
        // }

        for (let nowDay = firstDateS; nowDay <= lastDateS; nowDay.setDate(nowDay.getDate() + 1)) {
            let nowColumn = nowRowS.insertCell();

            let newDIV = document.createElement('p');
            newDIV.innerHTML = nowDay.getDate();
            nowColumn.appendChild(newDIV);


            if (nowDay.getDay() == 0) {
                nowColumn.style.color = 'red';
            }
            if (nowDay.getDay() == 6) {
                nowColumn.style.color = 'blue';
                nowRowS = $tbody_CalendarS.insertRow();
            }
            if (nowDay < today) {
                newDIV.className = 'pastDay';
            } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
                newDIV.className = "today";
                newDIV.addEventListener('click', e => {
                    selectR(e.currentTarget, 'popDateS');
                })
            } else {
                newDIV.className = 'futureDay';
                newDIV.addEventListener('click', e => {
                    selectR(e.currentTarget, 'popDateS');
                })
            }
        }
        // for (let nowDay = firstDateE; nowDay <= lastDateE; nowDay.setDate(nowDay.getDate() + 1)) {
        //     let nowColumn = nowRowE.insertCell();

        //     let newDIV = document.createElement('p');
        //     newDIV.innerHTML = nowDay.getDate();
        //     nowColumn.appendChild(newDIV);
        //     if (nowDay.getDay() == 0) {
        //         nowColumn.style.color = 'red';
        //     }
        //     if (nowDay.getDay() == 6) {
        //         nowColumn.style.color = 'blue';
        //         nowRowE = $tbody_CalendarE.insertRow();
        //     }
        //     if (nowDay < today) {
        //         newDIV.className = 'pastDay';
        //     } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
        //         newDIV.className = "today";
        //         newDIV.addEventListener('click', e => {
        //             selectR(e.currentTarget, 'popDateE');
        //         })
        //     } else {
        //         newDIV.className = 'futureDay';
        //         newDIV.addEventListener('click', e => {
        //             selectR(e.currentTarget, 'popDateE');
        //         })
        //     }
        // }
    }

    function selectR(day, calendarType) {
        if (document.getElementsByClassName("choiceDay")[0]) {
            document.getElementsByClassName("choiceDay")[0].classList.remove('choiceDay');
        }
        day.classList.add('choiceDay');


        const selectedYear = nowMonth.getFullYear();
        const selectedMonth = nowMonth.getMonth();
        const selectedDay = parseInt(day.innerHTML);


        const selectedDateS = new Date(selectedYear, selectedMonth, selectedDay);
        const selectedDateE = new Date(selectedYear, selectedMonth + 1, selectedDay);

        if (calendarType === 'popDateS') {
            let date = new Date(selectedDateS);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            returnDate = dateForm;
            $visDateRR.style.color = 'black';
            $visDateRR.textContent = dateForm;
            dateCom(startDate, returnDate);
        } else if (calendarType === 'popDateE') {
            let date = new Date(selectedDateE);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            returnDate = dateForm;
            $visDateRR.style.color = 'black';
            $visDateRR.textContent = dateForm;
            dateCom(startDate, returnDate);
        }
    }

    $prevBtnR.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
        calendarR();
    })

    $nextBtnR.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
        calendarR();
    })

    // calendar0
    function calendarO() {
        let firstDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
        let lastDateS = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
        let firstDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
        let lastDateE = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 2, 0);

        let $tbody_CalendarS = get('.airportVis .inner .search .popDateBoxO .popDate .popDateS>tbody');
        let $yearS = get('.airportVis .inner .search .popDateBoxO .popDate .popDateS .year')
        let $monthS = get('.airportVis .inner .search .popDateBoxO .popDate .popDateS .month')

        let $tbody_CalendarE = get('.airportVis .inner .search .popDateBoxO .popDate .popDateE>tbody');
        let $yearE = get('.airportVis .inner .search .popDateBoxO .popDate .popDateE .year')
        let $monthE = get('.airportVis .inner .search .popDateBoxO .popDate .popDateE .month')

        $yearS.innerHTML = nowMonth.getFullYear();
        $monthS.innerHTML = nowMonth.getMonth() + 1;
        // $yearE.innerHTML = nowMonth.getFullYear();
        // $monthE.innerHTML = nowMonth.getMonth() + 2;

        while ($tbody_CalendarS.rows.length > 0) {
            $tbody_CalendarS.deleteRow($tbody_CalendarS.rows.length - 1);
        }
        // while ($tbody_CalendarE.rows.length > 0) {
        //     $tbody_CalendarE.deleteRow($tbody_CalendarE.rows.length - 1);
        // }
        let nowRowS = $tbody_CalendarS.insertRow();
        // let nowRowE = $tbody_CalendarE.insertRow();

        for (let i = 0; i < firstDateS.getDay(); i++) {
            let nowColumn = nowRowS.insertCell();
        }
        // for (let j = 0; j < firstDateE.getDay(); j++) {
        //     let nowColumn = nowRowE.insertCell();
        // }

        for (let nowDay = firstDateS; nowDay <= lastDateS; nowDay.setDate(nowDay.getDate() + 1)) {
            let nowColumn = nowRowS.insertCell();

            let newDIV = document.createElement('p');
            newDIV.innerHTML = nowDay.getDate();
            nowColumn.appendChild(newDIV);


            if (nowDay.getDay() == 0) {
                nowColumn.style.color = 'red';
            }
            if (nowDay.getDay() == 6) {
                nowColumn.style.color = 'blue';
                nowRowS = $tbody_CalendarS.insertRow();
            }
            if (nowDay < today) {
                newDIV.className = 'pastDay';
            } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
                newDIV.className = "today";
                newDIV.addEventListener('click', e => {
                    selectO(e.currentTarget, 'popDateS');
                })
            } else {
                newDIV.className = 'futureDay';
                newDIV.addEventListener('click', e => {
                    selectO(e.currentTarget, 'popDateS');
                })
            }
        }
        // for (let nowDay = firstDateE; nowDay <= lastDateE; nowDay.setDate(nowDay.getDate() + 1)) {
        //     let nowColumn = nowRowE.insertCell();

        //     let newDIV = document.createElement('p');
        //     newDIV.innerHTML = nowDay.getDate();
        //     nowColumn.appendChild(newDIV);
        //     if (nowDay.getDay() == 0) {
        //         nowColumn.style.color = 'red';
        //     }
        //     if (nowDay.getDay() == 6) {
        //         nowColumn.style.color = 'blue';
        //         nowRowE = $tbody_CalendarE.insertRow();
        //     }
        //     if (nowDay < today) {
        //         newDIV.className = 'pastDay';
        //     } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
        //         newDIV.className = "today";
        //         newDIV.addEventListener('click', e => {
        //             selectO(e.currentTarget, 'popDateE');
        //         })
        //     } else {
        //         newDIV.className = 'futureDay';
        //         newDIV.addEventListener('click', e => {
        //             selectO(e.currentTarget, 'popDateE');
        //         })
        //     }
        // }
    }

    function selectO(day, calendarType) {
        if (document.getElementsByClassName("choiceDay")[0]) {
            document.getElementsByClassName("choiceDay")[0].classList.remove('choiceDay');
        }
        day.classList.add('choiceDay');


        const selectedYear = nowMonth.getFullYear();
        const selectedMonth = nowMonth.getMonth();
        const selectedDay = parseInt(day.innerHTML);


        const selectedDateS = new Date(selectedYear, selectedMonth, selectedDay);
        const selectedDateE = new Date(selectedYear, selectedMonth + 1, selectedDay);

        if (calendarType === 'popDateS') {
            let date = new Date(selectedDateS);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            returnDate = dateForm;
            $visDateRO.style.color = 'black';
            $visDateRO.textContent = dateForm;
        } else if (calendarType === 'popDateE') {
            let date = new Date(selectedDateE);
            let dateForm = date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            returnDate = dateForm;
            $visDateRO.style.color = 'black';
            $visDateRO.textContent = dateForm;
        }
    }

    $prevBtnO.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
        calendarO();
    })

    $nextBtnO.addEventListener('click', e => {
        nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
        calendarO();
    })

    // calendar call
    calendar();
    calendarR();
    calendarO();

    // md


}
air();