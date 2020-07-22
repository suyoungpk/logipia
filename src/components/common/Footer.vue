<template>
  <!-- footer -->
  <footer class="lp-footer">
    <div>
      <div class="company-inquiry">
        <ul class="company-top">
          <li>
            <p class="tit pc">고객문의전화<span>(031) 681 - 9900</span></p>
            <p class="tit mobile">고객문의전화<a href="tel:031-681-9900">(031) 681 - 9900</a></p>
          </li>
          <li>
            <p class="tit">
              <button type="button" class="btn-eqipcst" @click="popupApplyFooter">장비 판매문의</button>
              <!-- 판매신청 popup -->
              <applypop></applypop><!-- 2019.06.14 수정 -->
              <!-- //판매신청 popup -->
            </p>
          </li>
          <li>
           <p class="tit"><a href="https://pf.kakao.com/_rTIPT" target="_blank" class="btn-kakao" title="새 창">카카오톡 <span class="hidden">플러스 친구</span></a></p>
          </li>
           <li>
           <p class="tit"><a href="https://www.youtube.com/channel/UCOHjNte1Ef818hU22A35B_g" target="_blank" class="btn-youtube" title="새 창"><span class="hidden">Youtube</span></a></p>
          </li>
        </ul>
      </div>
      <ul class="company-link">
        <li><router-link to="/help/user-term">이용약관</router-link></li>
        <li><router-link to="/help/privacy">개인정보처리방침</router-link></li>
        <li><router-link to="/help/media">영상정보처리기기 운영 · 관리 방침</router-link></li>
      </ul>
      <ul class="company-info">
        <li>(주)두산 산업차량</li>
        <li>대표이사 : 동현수</li>
        <li>사업자 등록번호 : 121-85-42056</li>
        <li>개인정보관리책임자 : 조원진 </li>
        <li>경기도 평택시 청북읍 청원로 211-21</li>
        <li>TEL : (031)681-9900</li>
        <li>FAX : (031)681-9099</li>
      </ul>
      <p class="copyright">Copyright ©2019 Doosan. All rights reserved.</p>
      <h1 class="f-logo">DOOSAN</h1>
      <button type="button" class="btn-top" @click="topBtn">상단으로 이동</button>
    </div>
  </footer>
  <!-- //footer -->
</template>

<script>
import applypop from '@/components/common/popup/applyPop'
export default {
  name: 'Footer',
  components: {
    applypop
  },
  methods: {
    popupApplyFooter: function () {
      var popupWrap = document.getElementById('pop-apply')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    topBtn: function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    // gotoKakao:function(){
    //  window.open('https://pf.kakao.com/_rTIPT')
    // }
  }
}
</script>
