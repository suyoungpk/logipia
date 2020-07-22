<template>
  <div id="pop-apply" class="popup-wrap apply">
    <div class="popup-box">
      <div class="popup-title">
          판매신청
      </div>
      <div class="popup-content">
        <div class="tbl-inp">
          <p class="txt-tip">※ 쉽고 빠르게 두산 로지피아에 장비를 판매할 수 있습니다.</p>
          <div class="inp">
              <div class="tbl">
              <dl>
                  <dt><span class="mark">필수항목</span><label for="pop2-type01">이름</label></dt>
                  <dd><input  type="text" name="pop2-type01" id="pop2-type01" class="inp-text" placeholder="이름을 입력해주세요."/></dd>
              </dl>
              <dl>
                  <dt><span class="mark">필수항목</span><label for="pop2-type02">핸드폰</label></dt>
                  <dd><input  type="text" name="pop2-type02" id="pop2-type02" class="inp-text" placeholder="'-'를 뺴고 입력해주세요. 예시) 01012345678"/></dd>
              </dl>
              <dl>
                  <dt><span class="mark">필수항목</span><label for="pop2-type03">차량종류</label></dt>
                  <dd><input  type="text" name="pop2-type03" id="pop2-type03" class="inp-text" placeholder="예시) 두산 디젤 4.5톤"/></dd>
              </dl>
              <dl>
                  <dt><span class="mark">필수항목</span><label for="pop2-type04">연식</label></dt>
                  <dd><input  type="text" name="pop2-type04" id="pop2-type04" class="inp-text" placeholder="예시) 2012"/></dd>
              </dl>
              </div>
          </div>
        </div>
        <div class="terms-area">
          <p class="inp-chk-b">
            <span>
                <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_01" />
                <label for="eqip_radio_02_01">개인정보 수집 및 이용에 동의합니다.</label>
            </span>
          </p>
          <div class="terms-box pop">
            <h4>개인정보 수집 및 이용동의 약관</h4>
            <ol class="t-list">
              <li>
                ① “회사”가 회원님의 회원가입 및 서비스 이용 시 수집하는 개인정보 항목과 그 수집ᆞ이용의 주된 목적은 다음과 같습니다.
                <h5>수집항목</h5>
                <p>이름, 휴대폰번호, 차량종류, 연식</p>
                <h5>수집·이용 목적</h5>
                <ol>
                  <li>· 간편판매 차량진단 상담</li>
                  <li>· 방문진단 일정 및 진행과정 안내</li>
                  <li>· 회원혜택, 약관변경, 고지사항 전달, 본인의사 확인, 불만처리 등 원활한 의사소통 경로의 확보</li>
                  <li>· 신규서비스 개발 및 맞춤형 서비스 제공과 광고 게재, 서비스이용에 대한 통계 작성</li>
                </ol>
                <h5>보유 기간</h5>
                <p>간편판매 이용 종료 또는 개인정보 유효기간 도래 시까지 보관 단, 관계 법령에 따라 고객님의 개인정보를 보존하여야 하는 경우, 회사는 해당 법령에서 정한 기간 동안 보관</p>
                <ul class="t-list">
                  <li>가) 소비자의 불만 또는 분쟁처리에 관한 기록
                    <ul class="t-list">
                      <li>- 보존이유 : 전자상거래 등에서의 소비자 보호에 관한 법률</li>
                      <li>- 보존기간 : 3년</li>
                    </ul>
                  </li>
                  <li>나) 로그인 기록
                    <ul class="t-list">
                      <li>- 보존이유 : 통신비밀보호법</li>
                      <li>- 보존기간 : 3개월</li>
                    </ul>
                  </li>
                  <li>다) 통신사실확인자료를 제공할 때 필요한 가입자의 전기통신 일시, 전기통신 개시 종료시각, 통신번호 등 상대방의 가입자번호, 통신망에 접속된 정보통신기기의 위치 추적 자료
                    <ul class="t-list">
                      <li>- 보존이유 : 통신비밀보호법</li>
                      <li>- 보존기간 : 12개월</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>② 이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있습니다. 다만, 회원가입 시 필수정보의 수집/이용 동의를 거부할 경우 서비스 제공에 제한이 있습니다.</li>
              <li>③ 본 사이트 이용 과정에서 다음의 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. - IP주소, 쿠키, MAC주소, 서비스이용기록, 방문기록, 상담 통화 내역 등 - 차량광고관련 내용 : 광고 효과 향상을 위한 검색포털사이트 노출 (직접제공이 아닌 각 포털사의 수집 규칙에 따름)</li>
            </ol>
            <h4>개인정보 처리 위탁 약관</h4>
            <p>“회사”는 회원에 대한 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받은 업체가 관련 법률에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리·감독을 하고 있습니다. “회사”가 처리를 위탁하는 개인정보는 다음과 같습니다.</p>
            <h5>수탁자 / 처리위탁업무</h5>
            <ul class="t-list">
              <li>㈜두산 디지털이노베이션 / 정보전산 처리 및 유지/관리</li>
              <li>㈜다우기술 / 국내 문자발송 프로그램 유지/보수</li>
              <li>나이스평가정보㈜ / 본인인증 서비스 제공</li>
            </ul>
          </div>
        </div>
        <div class="btn-box"><button type="button" class="btn btn-navy" v-on:click="popupApplyClose">신청하기</button></div>
      </div>
      <button type="button" class="btn-popup-close" v-on:click="popupApplyClose">팝업닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applypop',
  methods: {
    popupApplyClose: function () {
      var popupWrap = document.getElementById('pop-apply')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    }
  }
}
</script>

<style>
</style>
