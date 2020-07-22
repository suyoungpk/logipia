<template>
  <section id="lp-section" class="lp-sub" style="min-height:500px;text-align:center;">
     <button class="btn btn-blue" type="button" v-on:click="popLogin">로그인 팝업</button>
    <div id="popLogin" class="popup-wrap">
      <div class="popup-box login">
        <div class="popup-title">로그인</div>
        <div class="popup-content">
          <span class="txt-tip">로그인을 하시면 더욱 많은 서비스를 이용할 수 있습니다.</span>
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
                    <button type="button" class="btn btn-blue big">로그인</button>
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
        <button type="button" class="btn-popup-close" v-on:click="popLoginClose">팝업닫기</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPop',
  data () {
    return {
      pageTitle: '로그인'
    }
  },
  methods: {
    popLogin: function () {
      var popupWrap = document.getElementById('popLogin')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popLoginClose: function () {
      var popupWrap = document.getElementById('popLogin')
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
