# 여행사 홈페이지 제작 - 이젠제주투어_모바일.ver (팀작업)

## 팀원

|             | 이름   | Github                                  | 작업사항                                                                                                                                                                                                                                                                                                                             |
| :---------- | :----- | :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FE          | 김하진 | [@HajinKimm](https://github.com/HajinKimm) | [여행패키지](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/package.html)<br />[레저/잠수함](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/active.html)<br />[공원/전시/박물관](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/museum.html)<br />[Restaurant](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/food.html) |
| FE          | 김형종 | [@Ocjji](https://github.com/Ocjji)         | [메인](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile)<br />[공지사항](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/notice.html)<br />[자주 묻는 질문](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/qna.html)                                                                                                           |
| FE / design | 이명관 | [@audrhks29](https://github.com/audrhks29) | [이벤트](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/promotion.html)<br />[제휴/멤버십](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/membership.html)<br />[로그인](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/login.html)/[회원가입](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/join.html)                 |
| FE          | 이상연 | [@yeonhub](https://github.com/yeonhub)     | [항공권](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/airport.html)<br />[호텔](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/hotel.html)<br />[렌터카](https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/rent.html)                                                                                                        |


# 프로젝트 사이트

<a href="https://yeonhub.github.io/TP-EZtour_vanillaJS_mobile/" target="_blank"><img src="./mdimg/EzenJejuTour.png"></a>

<br>
<br>

# 프로젝트 참고 사이트

1. <a href="https://www.jeju.com/" target="_blank">제주닷컴</a>
2. <a href="https://www.hanatour.com/" target="_blank">하나투어</a>

# 프로젝트 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">


# 프로젝트 기능 구현

## 0) CSS style mobile

기존 pc 버전의 css를 mobile 버전으로 수정하기 위해 단위 변경

뷰포트(vw, vh) 사용

```css
/* 자주찾는질문 CSS */
.qnaVis {
    width: 100%;
    height: 41.6667vh;
    background-image: url(../images/qna/qnaVisual.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    text-align: center;
}


.qnaVis h2 {
    width: 100%;
    padding-top: 5.5556vw;
    margin-bottom: 5.5556vw;
    text-align: center;
    font-size: 4.4444vw;
    font-weight: 700;
    color: #fff;
}
```


## 1) header

* 햄버거 메뉴 클릭 시 전체 메뉴
* new date로 현재 날짜, 시간별 운영시간 출력

<img src="./mdimg/header.gif">

## 2) 메인

* visual rolling
* visual button 구현
* search box (패키지, 항공, 호텔)
* content 변경 구현

<img src="./mdimg/index.gif">

## 3) 여행 패키지

* search box 구현
* visual rolling

<img src="./mdimg/package.gif">

## 4) 특가 예약

* visual rolling
* visual button 구현
* search box (왕복, 편도)
* search box 구현 (popup)
* content 변경 구현
* rent search box 시간 select/option 구현
* rent type 선택 시 해당 type 출력

<img src="./mdimg/book.gif">

## 5) 관광지

* visual rolling
* visual page button 구현
* contents swipe

<img src="./mdimg/tour.gif">

## 6) 프로모션

* 이벤트-제휴/멤버십 웹앱 형식 이동
* 이벤트 content 클릭 시 상세 페이지 이동

<img src="./mdimg/membership.gif">

## 7) 고객센터

* 공지사항 type 클릭 시 해당 내용 출력
* page 번호 구현
* 자주 묻는 질문 제목 클릭 시 답변 출력

<img src="./mdimg/notice.gif">

## 8) 로그인

<img src="./mdimg/login.gif">
