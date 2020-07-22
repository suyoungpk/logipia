<template>
  <section id="lp-section" class="lp-sub mypw">
    <common-nav nowMenu="findid"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>고객님의 아이디와 비밀번호를 찾아드립니다.</span>
    </div>
    <div class="sub-wrap">
      <form>
        <fieldset>
          <legend>비밀번호 변경</legend>
          <div class="find-area">
            <!-- 새비밀번호 입력박스 -->
            <div class="find-box">
              <dl>
                <dt><label for="newPw">새 비밀번호</label></dt>
                <dd>
                  <input  type="password" id="newPw" class="inp-text" placeholder="새로운 비밀번호를 입력하세요."/>
                  <p class="find-error">띄어쓰기 없는 6~15자의 영문 대/소문자, 숫자 및 특수문자 조합으로 입력하셔야 합니다.</p>
                </dd>
              </dl>
              <dl>
                <dt><label for="newPwRe">새 비밀번호 확인</label></dt>
                <dd>
                  <input  type="password" id="newPwRe" class="inp-text" placeholder="새로운 비밀번호를 한번 더 입력하세요."/>
                  <p class="find-error">비밀번호가 일치하지 않습니다.</p>
                </dd>
              </dl>
            </div>
            <!-- //새비밀번호 입력박스 -->
          </div>
          <div class="btn-box"><button type="button" class="btn btn-blue big">확인</button></div>
        </fieldset>
      </form>
      <div class="txt-pw-modify">
        <strong>비밀번호 변경 시 유의사항</strong>
        <ul class="list-type01">
          <li>영문자, 숫자, 특수문자 조합하여 6~15자리어야 합니다.</li>
          <li>아이디와 3자리 이상 동일하거나, 3자리 이상 반복되는 문자와 숫자는 사용이 불가합니다.</li>
          <li>사용 가능 특수문자: !”#$%’()*+,-./:;&lt;=&gt;?@[]^_`{|}~</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'MyPw',
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '비밀번호 변경'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
