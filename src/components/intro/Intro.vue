<template>
  <section id="lp-section" class="lp-sub intro">
    <common-nav nowMenu="intro"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 홈페이지를 방문해 주셔서 감사합니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="intro-cont">
        <div class="intro-img">
          <img src="../../assets/images/img-intro.png" class="img-pc" alt="50년 역사의 1위 브랜드! DOOSAN LOGIPIA Quick&amp;Smart 최고 제품과 전문가의 검증된 정비, 가격 표준화와 전국 네트워크로 신속한 서비스를 제공하는 두산로지피아가 새롭게 시작합니다.">
          <img src="../../assets/images/img-intro-m.png" class="img-m" alt="50년 역사의 1위 브랜드! DOOSAN LOGIPIA Quick&amp;Smart 최고 제품과 전문가의 검증된 정비, 가격 표준화와 전국 네트워크로 신속한 서비스를 제공하는 두산로지피아가 새롭게 시작합니다.">
        </div>
        <div class="intro-txt">
          <p class="m-mtb">안녕하십니까?
            <br>
            저희 두산 로지피아 홈페이지를 방문해 주신 것을 진심으로 환영합니다.</p>
          <p class="m-inline"><span class="m-inline">두산 로지피아는</span>
            <span class="m-inline"><span class="t-blue">국내최초, 최고의 지게차 기업 ㈜두산산업차량에서 설립한 사업</span>으로,</span>
            <span class="t-blue">렌탈·중고·서비스</span>를 영위하고 있습니다. </p>
          <p class="m-inline">저희는 지게차 제조와 판매에서 한 걸음 더 나아가  <span class="b-blue">&nbsp;Quick &amp; Smart&nbsp;</span> 라는 모토로 고객 여러분께
            <span class="t-orange">다양한 상품과 서비스를 제공하여 고객 만족을 실현함을 목표</span>로 합니다.</p>
          <p><span class="t-black">지게차 및 파워파렛트 트럭, 배터리 등의 판매/렌탈, 두산 중고직거래 운영과 중고지게차  간편 판매 서비스, 사전정비 및 유상수리 서비스</span> 상품을 통해 고객 여러분에게 새로운 경험을 드리고
            급변하는 시대의 다양한 필요에 부응하고자 합니다.</p>
          <p><span class="b-blue">&nbsp;로지피아 (Logistics+Utopia)&nbsp;</span> 라는 이름의 뜻 그대로,  물류현장에 새로운 가치와 변화를 불러일으켜 고객 여러분의 만족도를 한차원 더 높이는 사업이 될 것을 약속 드리며,  유익한 방문이 되시길 바랍니다.</p>
          <p>감사합니다.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'Intro',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 회사소개 > 두산 로지피아',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회사소개 > 두산 로지피아 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회사소개, 두산 로지피아' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '두산 로지피아'
    }
  }
}
</script>