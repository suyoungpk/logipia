<template>
  <section id="lp-section" class="lp-sub jstep">
    <common-nav nowMenu="jstep1"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>개인 회원</span><!-- 사업자 회원 / 개인 회원 중 표시-->
    </div>
    <div class="sub-wrap">
      <ol class="step-box">
        <li>
          <span class="step">STEP</span>
          <span class="num">01</span>
          약관동의<span class="txt"> 및 본인 인증</span>
        </li>
        <li class="on">
          <em>현재 단계</em>
          <span class="step">STEP</span>
          <span class="num">02</span><h3>정보입력</h3>
        </li>
        <li>
          <span class="step">STEP</span>
          <span class="num">03</span>가입완료
        </li>
      </ol>
      <article class="info-inp tbl-inp">
        <h4 class="sub-tit">필수정보입력</h4>
        <div class="tbl">
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-id">아이디</label></dt>
            <dd>
              <span class="inp-box bt">
                <input type="text" class="inp-text" id="jstep-id" placeholder="아이디를 입력하세요." />
                <button type="button" class="btn btn-black">중복확인</button>
              </span>
              <span class="msg-error">아이디 중복 확인을 진행해주세요.</span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-pw">비밀번호</label></dt>
            <dd>
              <span class="inp-box">
                <input type="password" class="inp-text" id="jstep-pw" placeholder="영문 대/소문자, 숫자, 특수문자 중 2가지 이상 조합" />
              </span>
              <span class="msg-error">띄어쓰기 없는 6~15자의 영문 대/소문자, 숫자 및 특수문자 조합으로 입력하셔야 합니다.</span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-pw02">비밀번호확인</label></dt>
            <dd>
              <span class="inp-box">
                <input type="password" class="inp-text" id="jstep-pw02" placeholder="위의 비밀번호를 다시 입력해주세요." />
              </span>
              <span class="msg-error">비밀번호가 일치하지 않습니다.</span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-name">이름</label></dt>
            <dd>
              <span class="inp-box">
                <input type="text" class="inp-text" id="jstep-name" readonly value="홍길동" />
              </span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-phone">휴대폰 번호</label></dt>
            <dd>
              <span class="inp-box">
                <input type="text" class="inp-text" id="jstep-phone" readonly value="01012345678" />
              </span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-email">이메일</label></dt>
            <dd>
              <span class="inp-box">
                <input type="text" class="inp-text" id="jstep-email" placeholder="예) name@doosan.com" />
              </span>
              <span class="msg-error">이메일 형식이 맞지 않습니다.</span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-mutual">상호(법인명)</label></dt>
            <dd>
              <span class="inp-box">
                <input type="text" class="inp-text" id="jstep-mutual" placeholder="상호 또는 법인명을 입력해주세요." />
              </span>
            </dd>
          </dl>
          <dl>
            <dt><label for="myinfo-adrs"><span class="mark">필수항목</span>사업장 주소지</label></dt>
            <dd>
              <div class="adrs-input">
                <span class="inp-box">
                  <input type="text" class="inp-text" id="jstep-mutual" placeholder="주소를 입력해주세요" />
                </span>
              </div>
              <div class="adrs-input">
                <span class="inp-box">
                  <input type="text" class="inp-text" id="jstep-mutual" placeholder="상세주소를 입력해주세요." />
                </span>
              </div>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="jstep-num">사업자등록번호</label></dt>
            <dd>
              <span class="inp-box bt">
                <input type="text" class="inp-text" id="jstep-num" placeholder="“-” 없이 입력 해주세요." />
                <button type="button" class="btn btn-black">사업자 확인</button>
              </span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span>사업자등록증</dt>
            <dd>
              <span class="inp-file">
                <button type="button" @click.prevent="selectFile" ref="fileSearchBtn1" class="btn file-label"><span>파일 찾기</span></button>
                <input type="file" name="compFile" ref="fileupload1" @change="onFileChange" class="file-upload" tabindex="-1" />
                <input type="text" readonly="readonly" class="inp-text file-name" ref="fileuploadTxt1" tabindex="-1" placeholder="pdf, jpg, png만 가능합니다."/>
              </span>
              <span class="txt-caution">※ 허위 기재 시 형사상 제재를 받을 수 있습니다.</span>
              <div class="file-list" v-if="uploadFileName">
                  <ul>
                    <li>
                      <div class="file-info">
                        <a :href="uploadFileName" target="_blank">{{uploadFileName}}</a>
                        <button type="button" class="btn btn-delete" @click="removeUploadFile"><span>삭제</span></button>
                      </div>
                    </li>
                  </ul>
                </div>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span>업종</dt>
            <dd class="rdo-box">
              <span class="rdo02">
                <input  type="radio" name="sectors" id="sectors01" />
                <label for="sectors01">중고마켓</label>
              </span>
              <span class="rdo02">
                <input  type="radio" name="sectors" id="sectors02" />
                <label for="sectors02">중고매매</label>
              </span>
              <span class="rdo02">
                <input  type="radio" name="sectors" id="sectors03" />
                <label for="sectors03">정비공장</label>
              </span>
              <span class="rdo02">
                <input  type="radio" name="sectors" id="sectors04" />
                <label for="sectors04">개인정비업</label>
              </span>
            </dd>
          </dl>
        </div>
      </article>
      <article class="info-inp">
        <h4 class="sub-tit">부가정보선택</h4>
        <form id="all-chk">
          <p class="inp-chk chk-all">
            <input  type="checkbox" name="chk-all" id="chk-all" v-on:click="check_all" />
            <label for="chk-all">(전체) 마케팅 정보 수신에 동의합니다.</label>
          </p>
          <div class="line-box">
            <ul class="chk-list">
              <li class="inp-chk02">
                <input  type="checkbox" name="allCheckList" id="chk-mak01" v-on:click="check_all_list" />
                <label for="chk-mak01">이메일</label>
              </li>
              <li class="inp-chk02">
                <input  type="checkbox" name="allCheckList" id="chk-mak02" v-on:click="check_all_list" />
                <label for="chk-mak02">SMS</label>
              </li>
            </ul>
            <p class="list-type01">마케팅 수신 동의를 하시면 새로운 서비스나 이벤트 정보를 받으실 수 있습니다.</p>
          </div>
        </form>
      </article>
      <div class="btn-box">
        <button type="button" class="btn btn-blue">가입하기</button>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'Jstep2',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 회원가입 > 정보작성',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회원가입 > 정보작성 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회원가입, 정보작성' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '회원가입',
      uploadFileName: '',
      targetFile: ''
    }
  },
  methods: {
    check_all: function () {
      var i
      if (document.getElementById('chk-all').classList.contains('on')) {
        document.getElementById('chk-all').classList.remove('on')
        for (i = 0; i < document.getElementById('all-chk').allCheckList.length; i++) {
          document.getElementById('all-chk').allCheckList[i].checked = false
          document.getElementById('all-chk').allCheckList[i].classList.remove('on')
          document.getElementById('all-chk').querySelector('li').classList.remove('on')
        }
      } else {
        document.getElementById('chk-all').classList.add('on')
        for (i = 0; i < document.getElementById('all-chk').allCheckList.length; i++) {
          document.getElementById('all-chk').allCheckList[i].checked = true
          document.getElementById('all-chk').allCheckList[i].classList.add('on')
          document.getElementById('all-chk').querySelector('li').classList.add('on')
        }
      }
    },
    check_all_list: function (event) {
      if (event) {
        if (event.target.classList.contains('on')) {
          event.target.classList.remove('on')
          event.target.parentNode.classList.remove('on')
          document.getElementById('chk-all').checked = false
          document.getElementById('chk-all').classList.remove('on')
        } else {
          event.target.classList.add('on')
          event.target.parentNode.classList.add('on')
          if (event.target.parentNode.parentNode.firstChild.classList.contains('on') && event.target.parentNode.parentNode.lastChild.classList.contains('on')) {
            document.getElementById('chk-all').checked = true
            document.getElementById('chk-all').classList.add('on')
          }
        }
      }
    },
    selectFile: function (e) {
      this.targetFile = this.$refs.fileupload1
      this.targetFile.click()
    },
    onFileChange: function (e) {
      let file = e.target.files[0]
      this.url = URL.createObjectURL(file)

      this.targetTxt = this.$refs.fileuploadTxt1

      this.targetTxt.value = file.name
      this.uploadFileName = file.name
    },
    removeUploadFile: function (e) {
      this.uploadFileName = ''
      this.targetTxt.value = ''
    }
  }
}
</script>

<style>
</style>
