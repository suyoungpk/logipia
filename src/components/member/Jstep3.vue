<template>
  <section id="lp-section" class="lp-sub jstep">
    <common-nav nowMenu="jstep1"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>개인회원</span>
    </div>
    <div class="sub-wrap">
      <ol class="step-box">
        <li>
          <span class="step">STEP</span>
          <span class="num">01</span>
          약관동의<span class="txt"> 및 본인 인증</span>
        </li>
        <li>
          <span class="step">STEP</span>
          <span class="num">02</span><h3>정보입력</h3>
        </li>
        <li class="on">
          <em>현재 단계</em>
          <span class="step">STEP</span>
          <span class="num">03</span>가입완료
        </li>
      </ol>
      <div class="join-complete">
        <strong class="join-tit">회원가입이 완료되었습니다.</strong>
        <p class="join-txt">홍길동님의 회원가입을 축하합니다.</p>
        <div>Quick&amp;Smart 두산 로지피아의 회원이 되어주셔서 감사합니다.
두산 로지피아는 (주)두산 산업차량의 렌탈, 중고 매매, 정비 서비스, 배터리 사업 등을 포괄하는 브랜드입니다.
로지피아에서 회원에게 제공해 드리는 다양한 혜택을 누리시기 바랍니다.</div>
      </div>
      <div class="btn-box type01">
        <button type="button" class="btn btn-b-line">홈으로</button>
        <button type="button" class="btn btn-blue">로그인</button>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'Jstep3',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 회원가입 > 가입완료',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회원가입 > 가입완료 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회원가입, 가입완료' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '회원가입'
    }
  }
}
</script>

<style>
</style>
