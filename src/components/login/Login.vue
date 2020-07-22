<template>
  <section id="lp-section" class="lp-sub login popup">
      <common-nav nowMenu="login"></common-nav>
      <div class="tit-box">
        <h2>{{pageTitle}}</h2>
        <span>로그인을 하시면 더욱 많은 서비스를 이용할 수 있습니다.</span>
      </div>
      <div class="sub-wrap">
         <p class="m-txt-tip">로그인을 하시면 더욱 많은 서비스를 이용할 수 있습니다.</p>
        <div class="login-wrap">
          <div class="login-inp">
            <form>
              <fieldset>
                <legend>로그인</legend>
                <input type="text" class="inp-text" placeholder="아이디를 입력하세요.">
                <input type="password" class="inp-text" placeholder="비밀번호를 입력하세요.">
                <div class="inp-chk">
                  <input  type="checkbox" name="id_save" id="id_save" />
                  <label for="id_save">아이디 저장</label>
                </div>
                <div class="btn-box">
                  <button class="btn btn-blue big" type="button">로그인</button>
                </div>
                <div class="link-area">
                  <router-link to="/member/findid">아이디/비밀번호 찾기</router-link>
                  <router-link to="/member/jstep1">회원가입</router-link>
                </div>
              </fieldset>
            </form>
          </div>
          <p class="txt-login">※ 공용으로 사용하는 PC에서 로그인 유지 시에는 계정 도용의 위험성이 있습니다.
            <br>
            사용 후에는 반드시 로그아웃을 하시기 바랍니다.</p>
        </div>
      </div>
      <button class="btn prev" type="button">이전 페이지 이동</button>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'Login',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 로그인',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 로그인 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 로그인' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '로그인'
    }
  }
}
</script>

<style>
</style>
