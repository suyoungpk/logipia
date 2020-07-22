<template>
  <section id="lp-section" class="lp-sub myinfo">
    <common-nav nowMenu="myinfo"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>회원님의 소중한 정보를 안전하게 관리하세요.</span>
    </div>
    <div class="sub-wrap">
    <form>
      <fieldset>
        <legend></legend>
        <div class="whiteBox">
          <div class="info-txt-box">
            <strong class="tit">회원정보를 수정하시려면 비밀번호를 입력하셔야 합니다.</strong>
            <p class="txt">회원님의 개인정보 보호를 위한 본인 확인 절차이오니, <br>두산 로지피아 회원 로그인 시 사용하시는 비밀번호를 입력해주세요.</p>
          </div>
          <div class="find-area">
            <!-- 회원정보 수정 입력박스 -->
            <div class="find-box">
              <dl>
                <dt class="hide"><label for="modifiy">비밀번호</label></dt>
                <dd>
                  <input  type="password" id="modifiy" class="inp-text" placeholder="비밀번호를 입력해주세요."/>
                </dd>
              </dl>
            </div>
            <!-- //회원정보 수정 입력박스 -->
          </div>
        </div>
        <div class="btn-box type02">
          <button type="button" class="btn btn-gray big">취소</button>
          <router-link tag="button" type="button" class="btn btn-blue big" to="/member/myinfo2">확인</router-link>
        </div>
      </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'MyInfo1',
   metaInfo: { //seo 개선 
    title: '두산 로지피아의 회원정보 수정',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회원정보 수정 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회원정보 수정' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '회원정보 수정'
    }
  },
  methods: {
  }
}
</script>