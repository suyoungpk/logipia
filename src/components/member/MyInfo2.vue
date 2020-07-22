<template>
  <section id="lp-section" class="lp-sub myinfo">
    <common-nav nowMenu="myinfo"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>회원님의 소중한 정보를 안전하게 관리하세요.</span>
    </div>
    <div class="sub-wrap">
      <form id="all-chk">
          <article class="info-inp tbl-inp">
            <h3 class="mypage-h3 phase2-pc">
                회원정보수정
            </h3>
             <h4 class="sub-tit phase2-tablet phase2-mobile">필수정보입력</h4>
            <div class="tbl">
              <dl>
                <dt>아이디</dt>
                <dd>
                  <p class="phase2-pc">test</p>
                  <input type="text" class="inp-text v2 readonly phase2-tablet phase2-mobile" id="" readonly value="test" />
                </dd>
              </dl>
              <dl>
                <dt>이름</dt>
                <dd>
                  <p class="phase2-pc">홍길동</p>
                  <input type="text" class="inp-text v2 readonly phase2-tablet phase2-mobile" id="" readonly value="홍길동" />
                </dd>
              </dl>
              <dl>
                <dt>비밀번호</dt>
                <!-- <dd>
                  <p>
                    <span class="ico exclamation"></span>
                    영문 대/소문자, 숫자, 특수문자 중 2가지 이상 조합하여 변경해주세요.
                  </p>
                  <div class="tbl">
                    <dl>
                      <dt><label for="cur_pwd">현재 비밀번호</label></dt>
                      <dd>
                        <input type="password" class="inp-text" id="cur_pwd" />
                      </dd>
                    </dl>
                    <dl>
                      <dt><label for="new_pwd">새 비밀번호 입력</label></dt>
                      <dd>
                        <input type="password" class="inp-text" id="new_pwd" />
                      </dd>
                    </dl>
                    <dl>
                      <dt><label for="new_pwd2">새 비밀번호 확인</label></dt>
                      <dd>
                        <input type="password" class="inp-text" id="new_pwd2" />
                      </dd>
                    </dl>
                  </div>
                </dd> -->
                <dd>
                  <button type="button" class="btn btn-black btn-pw" @click="popupPw">비밀번호 변경하기</button>
                  <div id="popup-pw" class="popup-wrap">
                    <div class="popup-box">
                      <div class="popup-title">비밀번호 변경</div>
                      <div class="popup-content">
                        <div class="tbl">
                          <dl>
                            <dt><label for="pop-pw1">기존 비밀번호 입력</label></dt>
                            <dd>
                              <span class="inp-box">
                                <input type="password" class="inp-text" id="pop-pw1" />
                              </span>
                              <!-- <span class="msg-error">기존 비밀번호를 입력하세요.</span> -->
                              <span class="msg-error">잘못된 비밀번호입니다.</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt><label for="pop-pw2">새 비밀번호 입력</label></dt>
                            <dd>
                              <span class="inp-box">
                                <input type="password" class="inp-text" id="pop-pw2" />
                              </span>
                              <!-- <span class="msg-error">새로운 비밀번호를 입력하세요.</span> -->
                              <span class="msg-error">띄어쓰기 없는 6~15자의 영문 대/소문자, 숫자 및 특수문자 조합으로 입력하셔야 합니다.</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt><label for="pop-pw3">새 비밀번호 확인</label></dt>
                            <dd>
                              <span class="inp-box">
                                <input type="password" class="inp-text" id="pop-pw3" />
                              </span>
                              <!-- <span class="msg-error">새로운 비밀번호를 한번더 입력하세요.</span> -->
                              <span class="msg-error">새로운 비밀번호가 일치하지 않습니다.</span>
                            </dd>
                          </dl>
                        </div>
                        <div class="btn-box type02">
                          <button type="button" class="btn btn-gray" @click="popPwClose">취소</button>
                          <button type="button" class="btn btn-navy">확인</button>
                        </div>
                      </div>
                      <button type="button" class="btn-popup-close" @click="popPwClose">팝업닫기</button>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt><label for="myinfo-phone">휴대폰 번호</label></dt>
                <dd>
                  <span class="inp-box">
                    <input type="text" class="inp-text v2 readonly" id="myinfo-phone" readonly value="01012345678" />
                  </span>
                </dd>
              </dl>
              <dl>
                <dt><label for="myinfo-email">이메일</label></dt>
                <dd>
                  <span class="inp-box">
                    <input type="text" class="inp-text v2 readonly" id="myinfo-email" readonly value="test@doosan.com"/>
                  </span>
                  <!-- <span class="msg-error">이메일 형식이 맞지 않습니다.</span> -->
                </dd>
              </dl>
              <dl>
                <dt><label for="myinfo-mutual"><span class="mark">필수항목</span>상호(법인명)</label></dt>
                <dd>
                  <span class="inp-box bt">
                    <input type="text" class="inp-text" id="myinfo-mutual" value="두산로지피아(주)" readonly/>
                    <button type="button" class="btn btn-b-line" @click="chgBox($event,'business-name-box')">변경</button>
                  </span>
                  <div class="chg-box" id="business-name-box">
                  <input type="text" class="inp-text v2" id="" value=""  placeholder="상호 또는 법인명을 입력해주세요.">
                  </div>
                </dd>
              </dl>
              <dl>
                <dt><label for="myinfo-adrs"><span class="mark">필수항목</span>사업장 주소지</label></dt>
                <dd>
                  <span class="inp-box bt">
                    <input type="text" class="inp-text" id="myinfo-adrs" value="경기도 평택시 청북읍 청원로 211-21" readonly />
                    <button type="button" class="btn btn-b-line" @click="chgBox($event,'adrs-box')">변경</button>
                  </span>
                  <div class="chg-box" id="adrs-box">
                    <p><input type="text" class="inp-text v2" id="" value=""   placeholder="주소를 입력해주세요"/></p>
                    <p><input type="text" class="inp-text v2" id="" value=""  placeholder="상세주소를 입력해주세요." /></p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt><label for="cur_myinfo-num"><span class="mark">필수항목</span>사업자등록번호</label></dt>
                <dd>
                  <span class="inp-box bt">
                    <input type="text" class="inp-text" id="cur_myinfo-num" value="123-45-67890" readonly/>
                    <button type="button" class="btn btn-b-line" @click="chgBox($event,'business-num-box')">변경</button>
                  </span>
                  <div class="chg-box" id="business-num-box">
                    <span class="inp-box bt ">
                      <input type="text" class="inp-text" id="myinfo-num" value="" placeholder="'-' 없이 입력해주세요."/>
                      <button type="button" class="btn btn-b-line btn-chk">사업자확인</button>
                    </span>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>사업자등록증</dt>
                <dd>
                  <span class="inp-file">
                    <button type="button" @click.prevent="selectFile" ref="fileSearchBtn1" class="btn file-label"><span>변경</span></button>
                    <input type="file" name="compFile" ref="fileupload1" @change="onFileChange" class="file-upload" tabindex="-1" />
                    <input type="text" readonly="readonly" class="inp-text file-name v2" ref="fileuploadTxt1" tabindex="-1" placeholder="" value="이전.jpg"/>
                  </span>
                  <p class="info fileNotice">pdf, jpg, png만 가능합니다.</p>
                  <p class="info">허위 기재 시 형사상 제재를 받을 수 있습니다.</p>
                </dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>업종</dt>
                <dd class="rdo-box">
                  <span class="rdo">
                    <input  type="radio" name="sectors" id="sectors01" />
                    <label for="sectors01">중고마켓</label>
                  </span>
                  <span class="rdo">
                    <input  type="radio" name="sectors" id="sectors02" />
                    <label for="sectors02">중고매매</label>
                  </span>
                  <span class="rdo">
                    <input  type="radio" name="sectors" id="sectors03" />
                    <label for="sectors03">정비공장</label>
                  </span>
                  <span class="rdo">
                    <input  type="radio" name="sectors" id="sectors04" />
                    <label for="sectors04">개인정비업</label>
                  </span>
                </dd>
              </dl>
            </div>
          </article>
          <article class="info-inp ">
            <h4 class="sub-tit">부가정보선택</h4>
          
              <p class="inp-chk chk-all">
                <input  type="checkbox" name="chk-all" id="chk-all" @click="check_all" />
                <label for="chk-all">(전체) 마케팅 정보 수신에 동의합니다.</label>
              </p>
              <div class="line-box">
                <ul class="chk-list">
                  <li class="inp-chk02">
                    <input  type="checkbox" name="allCheckList" id="chk-mak01" @click="check_all_list" />
                    <label for="chk-mak01">이메일</label>
                  </li>
                  <li class="inp-chk02">
                    <input  type="checkbox" name="allCheckList" id="chk-mak02" @click="check_all_list" />
                    <label for="chk-mak02">SMS</label>
                  </li>
                </ul>
                <p class="list-type01">마케팅 수신 동의를 하시면 새로운 서비스나 이벤트 정보를 받으실 수 있습니다.</p>
              </div>
              <div class="leave-box phase2-pc">
                <p>탈퇴를 원하시면 <a href="/member/memWdr1" class="btn-line">회원탈퇴</a> 버튼을 눌러주세요.</p>
              </div>
          </article>
        <div class="btn-box type02">
          <button type="button" class="btn btn-gray big">취소</button>
          <button type="button" class="btn btn-blue big">수정</button>
        </div>
        <div class="leave-box2 phase2-tablet phase2-mobile">
          ※ 회원탈퇴를 원하시면 <a href="/member/memWdr1" class="btn-line">여기</a>를 눌러주세요.
        </div>
       </form>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'MyInfo2',
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
      pageTitle: '회원정보 수정',
      uploadFileName: 'test.jpg',
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
    popupPw: function () {
      var popupWrap = document.getElementById('popup-pw')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popPwClose: function () {
      var popupWrap = document.getElementById('popup-pw')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
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
    },
    chgBox:function(e,box){
      e.target.parentElement.style.display="none"
      document.getElementById(box).style.display="block"
      document.getElementById(box).querySelectorAll("input")[0].focus()
    }
  }
}
</script>
