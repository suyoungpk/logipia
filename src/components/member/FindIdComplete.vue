<template>
  <section id="lp-section" class="lp-sub member">
    <common-nav nowMenu="findid"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>고객님의 아이디와 비밀번호를 찾아드립니다.</span>
    </div>
    <div class="sub-wrap">
      <ul class="tabs">
        <li><router-link to="/member/findid" class="on">아이디 찾기</router-link></li>
        <li><router-link to="/member/findpw">비밀번호 찾기</router-link></li>
      </ul>
      <div class="find-area comp">
        <!-- 아이디 찾기 결과 -->
        <div class="find-box">
          <p class="txt-id-info">고객님의 아이디는 <em>abcdefg***</em>입니다.</p>
        </div>
        <!-- //아이디 찾기 결과 -->
      </div>
      <div class="btn-box"><button type="button" class="btn btn-blue">로그인</button></div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'FindIdComplete',
   metaInfo: { //seo 개선 
    title: '두산 로지피아의 찾기 완료',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 찾기 결과 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 아이디, 비밀번호 찾기' },
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
