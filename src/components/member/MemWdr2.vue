<template>
  <section id="lp-section" class="lp-sub memwdr">
    <common-nav nowMenu="memwdr"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span></span>
    </div>
    <div class="sub-wrap">
      <div class="info-txt-box">
        <strong class="tit">회원탈퇴가 <br>정상적으로 완료되었습니다.</strong>
      </div>
      <div class="find-area">
        <div class="find-box">
          <p class="txt-finish">그동안 두산 로지피아를 이용해주셔서 감사합니다.</p>
        </div>
      </div>
      <div class="btn-box">
        <button type="button" class="btn btn-blue big">홈으로</button>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'MemWdr2',
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
      pageTitle: '회원탈퇴 완료'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
