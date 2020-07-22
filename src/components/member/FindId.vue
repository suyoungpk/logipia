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
      <form>
        <fieldset>
          <legend>아이디 찾기</legend>
          <div class="find-area rdo-box">
            <span class="rdo">
              <input  type="radio" name="findID" id="findID01" v-model="memberType" value="individual"/>
              <label for="findID01">개인회원</label>
            </span>
            <span class="rdo">
              <input  type="radio" name="findID" id="findID02" v-model="memberType" value="business"/>
              <label for="findID02">사업자회원</label>
            </span>
            <!-- 개인회원 입력박스 -->
            <div class="find-box box1" v-if="individualVisible">
              <dl>
                <dt><label for="name">이름</label></dt>
                <dd>
                  <input  type="text" id="name" class="inp-text" placeholder="이름을 입력해주세요."/>
                  <p class="find-error">이름을 입력해주세요.</p>
                </dd>
              </dl>
              <dl>
                <dt><label for="phone">휴대폰번호</label></dt>
                <dd>
                  <input  type="text" id="phone" class="inp-text" placeholder="“-” 없이 입력해주세요."/>
                  <!-- <p class="find-error">휴대폰번호를 입력해주세요.</p> -->
                </dd>
              </dl>
            </div>
            <!-- //개인회원 입력박스 -->
            <!-- 사업자회원 입력박스 -->
            <div class="find-box box2" v-if="businessVisible">
              <dl>
                <dt><label for="companyName">이름</label></dt>
                <dd>
                  <input type="text" id="companyName" class="inp-text" placeholder="이름을 입력해주세요."/>
                  <p class="find-error">이름을 입력해주세요.</p>
                </dd>
              </dl>
              <dl>
                <dt><label for="companyNum">사업자등록번호</label></dt>
                <dd>
                  <input  type="text" id="companyNum" class="inp-text" placeholder="“-” 없이 입력해주세요."/>
                  <!-- <p class="find-error">사업자등록 번호를 입력해주세요.</p> -->
                </dd>
              </dl>
            </div>
            <!-- //사업자회원 입력박스 -->
          </div>
          <div class="btn-box"><button type="button" class="btn btn-blue big">확인</button></div>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'FindId',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 아이디 찾기',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 아이디 찾기 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 아이디 찾기' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '아이디/비밀번호 찾기',
      memberType: 'individual',
      individualVisible: true,
      businessVisible: false
    }
  },
  watch: {
    memberType: function () {
      if (this.memberType === 'individual') {
        this.individualVisible = true
        this.businessVisible = false
      } else {
        this.individualVisible = false
        this.businessVisible = true
      }
    }
  }
}
</script>

<style>
</style>
