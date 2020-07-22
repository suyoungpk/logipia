<template>
  <section id="lp-section" class="lp-sub member">
    <common-nav nowMenu="findid"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>고객님의 아이디와 비밀번호를 찾아드립니다.</span>
    </div>
    <div class="sub-wrap pw">
      <ul class="tabs">
        <li><router-link to="/member/findid">아이디 찾기</router-link></li>
        <li><router-link to="/member/findpw" class="on">비밀번호 찾기</router-link></li>
      </ul>
      <div class="find-area pw">
        <!-- 본인인증 -->
        <div class="find-box">
          <p class="txt-id-info">비밀번호를 찾으시려면,  <span>본인인증이 필요합니다.</span></p>
          <button type="button" class="btn btn-black">본인인증</button>
        </div>
        <!-- //본인인증 -->
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'FindPw',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 비밀번호 찾기',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 비밀번호 찾기 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 비밀번호 찾기' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '아이디/비밀번호 찾기'
    }
  }
}
</script>

<style>
</style>
