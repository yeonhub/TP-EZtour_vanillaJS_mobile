const qnaArrListTitle = [
    '여권의 유효기간은 반드시 6개월 이상 남아있어야 하나요?',
    '여행계약서는 꼭 동의해야 하나요?',
    '여행계약서란 무엇인가요?',
    '여행계약서를 이미 동의했는데 여행계약서 알림톡(메일)을 또 받았습니다.',
    '여행계약서는 어떻게 확인할 수 있나요?',
    '여행계약서를 확인하고 동의하라는 메일을 받았습니다. 어디에서 확인하고 동의하는 건가요?',
    '여행계약서를 미동의했다고 나옵니다. 어떻게 동의하는 건가요?',
    '다른 사람의 예약을 대신 해주었습니다. 여행계약서를 동의하려고 비회원 예약확인을 했는데 아무것도 나오지 않아요.',
    '저는 여행계약서가 왔는데 동행자는 문자나 이메일 등 아무것도 받지 못했습니다. 어떻게 확인할 수 있나요?',
    '저는 확정이라 여행계약서를 동의했는데 동행자는 대기입니다. 여행계약서를 어떻게 확인할 수 있나요?'
];
const qnaArrListAns = [
    '<p>대부분의 여행 지역은 탑승일 기준으로 여권의 유효기간이 6개월 이상 남아있도록 하는 것을 권장하고 있습니다.&nbsp;</p><p><br></p><p>여권의 유효기간이 여유 있지 않은 경우 현지 공항의 출입국 사무소 직원의 판단 하에 입국에 문제가 생길 수 있는 등,</p><p>예상치 못한 문제들이 발생될 수 있으므로 문제의 소지 없도록 당사에서는 6개월 이상으로 안내 드리고 있는 점 참고 부탁드리겠습니다.</p>',
    '<p><span style="color: rgb(184, 49, 47);">여행계약서는 여행 출발전까지 동의해야 합니다.</span></p><p><br></p><p>또한 예약한 여행 상품에 변경 사항이 발생할 경우 재발송 되며 수신한 여행계약서는 모두 여행자 본인의 확인 및 동의가 필요합니다.</p><p><br></p><p>동의한 여행계약서는 여행이 종료되는 귀국일까지 언제든지 확인이 가능합니다.</p>',
    '<p>"여행계약서"란 여행사를 통해 여행 상품을 예약/결제한 경우 이에 필요한 여러가지 제반 사항 및 의무 사항을 규정한 내용을 적은 계약 문서입니다.</p><p><br></p><p>하나투어는 고객님과의 여행 계약이 이루어졌을 때 이와 관련하여 제공되는 내용을 적은 문서 즉, 여행계약서를 교부하고 있으며 교부 시 여행 일정표 및 여행 약관 등도 함께 포함하고 있습니다. 해당내용을 확인하시고 동의를 해주시면 됩니다.</p>',
    '<p>여행계약서는 예약한 여행 상품에 변경 사항이 발생하면 추가로 발송 될 수 있습니다.</p><p><span style="color: rgb(184, 49, 47);">이미 여행계약서를 동의했더라도 재발송될 수 있으므로 수신한 여행계약서의 내용을 꼭 확인하고 다시 동의해주시기 바랍니다.</span></p>',
    '<p>여행계약서는 카카오 알림톡, SMS, 이메일 등을 통해 받으실 수 있습니다.</p><p><br></p><p>카카오 알림톡: 알림톡 내에 바로가기 링크 주소 클릭</p><p>SMS: 문자로 발송되는 링크 주소 클릭</p><p>이메일: 이메일 내에 여행계약서 바로가기 버튼 클릭</p><p><br></p><p>이후 이동하는 페이지에서 로그인 또는 비회원 예약조회를 진행하시면 여행계약서가 바로 확인되거나 예약 내역 상세 페이지에서 여행계약서를 수동으로 확인할 수 있습니다.</p>',
    '<p>받으신 메일 내용 중 여행계약서 동의하기 를 클릭하시면 예약 내역 상세 페이지로 이동합니다.</p><p><br></p><p>회원일 경우 로그인, 비회원일 경우 비회원 예약조회를 진행하시면 여행계약서가 바로 확인되며 계약서 내용을 확인하시고 하단의 여행계약서 동의하기를 클릭하시면 됩니다.</p><p>로그인 절차를 진행하였음에도 바로 여행계약서가 확인되지 않을 경우, 다음의 경로에서 여행계약서를 확인하고 동의할 수 있습니다.</p>',
    '<p>여행계약서는 다음의 경로를 통해 확인할 수 있습니다.</p><p><br></p><p>회원일 경우 로그인, 비회원일 경우 비회원 예약 조회로 진행할 수 있으며 <span style="color: rgb(184, 49, 47);">로그인을 하였음에도 예약 내역이 확인되지 않을 경우 비회원 예약 조회를 통해 확인</span>할 수 있습니다.</p>',
    '<p><span style="color: rgb(184, 49, 47);">여행계약서는 여행을 가는 여행자 본인이 확인하고 동의해야 합니다.</span></p><p><br></p><p>실제 여행을 가지 않는 제 3자가 비회원 예약 조회를 할 경우 여행자와 정보가 일치하지 않기 때문에 예약 내역 및 여행계약서를 확인할 수 없습니다.</p><p>반드시 여행자 본인의 정보로 비회원 예약 조회로 진행하여야 합니다.</p>',
    '<p>대표적으로 다음의 2가지 경우에 해당합니다.</p><p><br></p><p><span style="font-weight: 600;">1) 예약이 확정 되지 않은 경우</span></p><p><span style="color: rgb(184, 49, 47);">예약 대기 상태일 경우 여행계약서가 발송되지 않습니다.</span> 예약이 확정되면 확정 후 익일에 카카오 알림톡으로 여행계약서가 발송됩니다.</p><p><br></p><p><span style="font-weight: 600;">2) 정확한 고객 정보가 입력되지 않은 경우</span></p><p><span style="color: rgb(184, 49, 47);">예약 시 고객의 정확한 휴대폰 번호 또는 이메일 주소가 입력되지 않았을 경우</span>여행계약서를 수신할 수 없습니다.&nbsp;</p><p><br></p><p><span style="font-weight: 600;">하나투어 홈페이지 또는 앱을 통해 예약 상태 및 여행자 정보를 확인하여 주시고 고객 정보 변경 등 예약 관련 각종 문의 사항은 예약 담당자를 통해 확인해 주시기 바랍니다.</span></p>',
    '<p>여행계약서는 예약상태가 [예약확정]일 때만 발송됩니다.&nbsp;</p><p><span style="color: rgb(184, 49, 47);">[대기예약]인 경우 예약 상태가 [예약확정]이 변경되면 해당 여행자의 입력된 휴대폰 번호로 여행계약서 알림톡이 발송</span>되며, 받으신 알림톡 내 링크 주소로 접속하면 여행계약서 내용 확인 및 동의를 하실 수 있습니다.</p>'
];

const qnaList = document.querySelector('.qna-list'); // 질문 리스트
const qnaPaging = document.querySelectorAll('.qna-paging span');

let qnaLi = null;
let old = 0;
let qnaTitleList = qnaArrListTitle;
let qnaAnsList = qnaArrListAns;
let qnaCurrentPage = 0;

qnaPaging.forEach(page => {
    page.addEventListener('click', e => {
        qnaPaging.forEach(element => {
            element.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
    })
})

function makeqnalist() {
    qnaList.innerHTML = null;
    qnaAnsList.forEach((answer, idx) => {
        qnaList.innerHTML += `<li><strong>${qnaArrListTitle[idx]}</strong><div>${answer}</div></li>`;
    })
    qnaLi = document.querySelectorAll('.qna-list li');
    qnaLi.forEach((element, idx) => {
        element.addEventListener('click', e => {
            if (e.currentTarget.classList.contains('on')) {
                e.currentTarget.classList.remove('on');
            } else {
                qnaLi.forEach(element => {
                    element.classList.remove('on');
                })
                e.currentTarget.classList.add('on');
            }
        })
    })

}

makeqnalist();