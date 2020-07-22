<template>
  <section id="lp-section" class="lp-sub memwdr">
    <common-nav nowMenu="memwdr"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span></span>
    </div>
    <div class="sub-wrap">
      <div class="info-txt-box">
        <strong class="tit">회원 탈퇴(이용약관 동의 철회) 시 아래 내용을 확인해주세요.</strong>
      </div>
      <div class="find-area">
        <div class="find-box">
          <ul class="list-type01">
            <li>회원탈퇴 시, 개인정보 처리 방침에 따라 회원 정보를 보유하는 경우를 제외하고는, 회원의 모든  데이터는 소멸되며, 웹 서비스 로그인은 불가능합니다.</li>
            <li>두산 로지피아 이용약관 동의를 처뢰한 후에라도 해당 약관에 다시 동의하시면 서비스를 이용할 수 있습니다.</li>
            <li>진행 중인 전자상거래 이용내역(<span class="fc-blue">결제/배송/교환/반품 중인 상태</span>)이 있거나 고객상담 및 이용하신 서비스가 완료되지 않은 경우 서비스를 철회 하실 수 없습니다.</li>
          </ul>
        </div>
      </div>
      <div class="info-txt-box info-txt-box-bottom"><strong class="tit">위 내용에 동의하시고 탈퇴신청을 계속하시려면, [회원탈퇴 신청] 버튼을 클릭하세요.</strong></div>
      <div class="btn-box">
        <button type="button" class="btn btn-blue big" v-on:click="popLeave">회원탈퇴 신청</button>
      </div>
    </div>
    <div id="pop-leave" class="popup-wrap pop-leave">
      <div class="popup-box">
        <div class="popup-title">회원탈퇴 신청</div>
        <div class="popup-content">
          <div class="pop-top-box">
            <p class="pop-con-tit">탈퇴신청 아이디를 확인 후 비밀번호를 입력해 주세요.</p>
            <p class="tbl-etc"><span>※ </span>회원탈퇴 신청 완료 버튼을 클릭하시면 회원 탈퇴 신청이 완료됩니다.</p>
          </div>
          <div class="tbl">
            <dl>
              <dt><label for="pop-leave1">탈퇴 신청 아이디</label></dt>
              <dd>
                <span class="inp-box">
                  <input type="text" class="inp-text" id="pop-leave1" readonly value="abcd1***" />
                </span>
              </dd>
            </dl>
            <dl>
              <dt><label for="pop-leave2">비밀번호</label></dt>
              <dd>
                <span class="inp-box">
                  <input type="password" class="inp-text" id="pop-leave2" />
                </span>
              </dd>
            </dl>
          </div>
          <div class="btn-box type02">
            <button type="button" class="btn btn-gray" v-on:click="popupClose">취소</button>
            <button type="button" class="btn btn-navy">회원탈퇴 신청</button>
          </div>
        </div>
        <button type="button" class="btn-popup-close" v-on:click="popupClose">팝업닫기</button>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'MemWdr1',
   metaInfo: { //seo 개선 
    title: '두산 로지피아의 회원탈퇴',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회원탈퇴 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회원탈퇴' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '회원탈퇴 신청'
    }
  },
  methods: {
    popLeave: function () {
      var popupWrap = document.getElementById('pop-leave')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popupClose: function () {
      var popupWrap = document.getElementById('pop-leave')
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
