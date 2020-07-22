<template>
  <section id="lp-section" class="lp-sub cst event">
    <common-nav nowMenu="cst"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>텍스트</span>
    </div>
    <div class="sub-wrap">
      <div class="btn-guide">
        <a href="#Comment">comment</a>
      </div>
      <div class="btn-guide">
        <a href="#Title">Title</a>
        <a href="#Input">Input</a>
        <a href="#Table">Table</a>
        <a href="#Button">Button</a>
        <a href="#Board">Board</a>
        <a href="#BoardView">Board-View</a>
        <a href="#SearchBox">Search Box</a>
        <a href="#List">List</a>
        <a href="#Popup">Popup</a>
        <a href="#Tab">Tab</a>
        <a href="#ImgList">Img List</a>
      </div>
      <!-- g-box -->
      <div class="g-box" id="Title">
      <strong class="g-tit">Title</strong>
      <h4 class="sub-tit">필수정보입력</h4>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="Input">
      <strong class="g-tit">Input</strong>
      <p class="g-si-tit">Radio</p>
      <div class="rdo-box">
        <span class="rdo">
          <input  type="radio" name="rdo01" id="rdo01-01" />
          <label for="rdo01-01">선택1</label>
        </span>
        <span class="rdo">
          <input  type="radio" name="rdo01" id="rdo01-02" />
          <label for="rdo01-02">선택2</label>
        </span>
      </div>
      <div class="rdo-box">
        <span class="rdo02">
          <input  type="radio" name="rdo02" id="rdo02-01" />
          <label for="rdo02-01">선택1</label>
        </span>
        <span class="rdo02">
          <input  type="radio" name="rdo02" id="rdo02-02" />
          <label for="rdo02-02">선택2</label>
        </span>
      </div>
      <p class="g-si-tit">Checkbox</p>
      <div class="chk-box">
        <span class="inp-chk">
          <input  type="checkbox" name="chk01" id="chk01-01" />
          <label for="chk01-01">선택1</label>
        </span>
        <span class="inp-chk">
          <input  type="checkbox" name="chk01" id="chk01-02" />
          <label for="chk01-02">선택1</label>
        </span>
      </div>
      <div class="chk-box">
        <span class="inp-chk02">
          <input  type="checkbox" name="chk02" id="chk02-01" />
          <label for="chk02-01">선택1</label>
        </span>
        <span class="inp-chk02">
          <input  type="checkbox" name="chk02" id="chk02-02" />
          <label for="chk02-02">선택1</label>
        </span>
      </div>
      <p class="g-si-tit">Select</p>
      <span class="lp-select">
        <select>
          <option>전체</option>
          <option>선택1</option>
          <option>선택2</option>
        </select>
      </span>
      <p class="g-si-tit">input</p>
      <input  type="text" title="연식 시작 년도 입력" class="inp-text"/><span class="br"></span>
      <span style="display:inline-block;margin:0 10px 0 0;">readonly</span><input type="text" class="inp-text" id="" readonly value="01012345678" /><span class="br"></span>
      <span style="display:inline-block;margin:0 10px 0 0">disabled</span><input type="text" class="inp-text" id="" disabled value="01012345678" />
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box jstep" id="Table">
      <strong class="g-tit">Table</strong>
      <div class="tbl-inp">
        <p class="mark"><span>*</span> 필수 입력 항목입니다.</p>
        <div class="tbl">
          <dl>
            <dt>구분</dt>
            <dd class="rdo-box">
              <span class="rdo02">
                <input  type="radio" name="ctors" id="ctors01" />
                <label for="ctors01">중고마켓</label>
              </span>
              <span class="rdo02">
                <input  type="radio" name="ctors" id="ctors02" />
                <label for="ctors02">중고매매</label>
              </span>
            </dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span><label for="cst-type02">제목</label></dt>
            <dd><input  type="text" name="cst-type02" id="cst-type02" class="inp-text" placeholder="제목을 입력해주세요."/></dd>
          </dl>
          <dl>
            <dt><span class="mark">필수항목</span>내용</dt>
            <dd><textarea class="inp-textarea" placeholder="내용을 입력해주세요."></textarea></dd>
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
          <dt><span class="mark">필수항목</span><label for="">아이디</label></dt>
          <dd>
            <span class="inp-box bt">
              <input type="text" class="inp-text" id="" placeholder="아이디를 입력하세요." />
              <button type="button" class="btn btn-black">중복확인</button>
            </span>
            <span class="msg-error">아이디 중복 확인을 진행해주세요.</span>
          </dd>
        </dl>
        </div>
        <p class="noti-txt">※ 첨부파일형식은 doc, ppt, xls, pdf, hwp, jpg, png 만 가능합니다.</p>
      </div>
      <div class="prod-detail">
        <div class="tabcontent">
          <div class="tbl">
            <dl>
              <dt>정비상태</dt>
              <dd>양호</dd>
              <dt>엔진상태</dt>
              <dd>양호</dd>
              <dt>도색상태</dt>
              <dd>양호</dd>
              <dt>타이어상태</dt>
              <dd>양호</dd>
            </dl>
          </div>
        </div>
      </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="Button">
      <strong class="g-tit">Button</strong>
      <p class="g-si-tit">Default : height:48px / font-size:17px / 중앙정렬</p>
      <div class="btn-box">
        <button type="button" class="btn btn-blue">로그인</button>
        <button type="button" class="btn btn-black">목록으로 이동</button>
        <button type="button" class="btn btn-gray">취소</button>
        <button type="button" class="btn btn-b-line">홈으로</button>
      </div>
      <p class="g-si-tit">Big : height:58px / font-size:19px</p>
      <div class="btn-box">
        <button type="button" class="btn btn-blue big">로그인</button>
        <button type="button" class="btn btn-black big">목록으로 이동</button>
        <button type="button" class="btn btn-gray big">취소</button>
      </div>
      <p class="g-si-tit">팝업버튼</p>
      <div>
        <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
      </div>
      <p class="g-si-tit">중앙 : 긍정 + 긍정</p>
      <div class="btn-box type01">
        <button type="button" class="btn btn-b-line">홈으로</button>
        <button type="button" class="btn btn-blue">로그인</button>
      </div>
      <p class="g-si-tit">중앙 : 부정 + 긍정</p>
      <div class="btn-box type02">
        <button type="button" class="btn btn-gray">취소</button>
        <button type="button" class="btn btn-blue">로그인</button>
      </div>
      <p class="g-si-tit">link : underline</p>
      <div class="link-area">
        <a href="">아이디/비밀번호 찾기</a>
        <a href="">회원가입</a>
      </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box cst" id="Board">
      <strong class="g-tit">Board</strong><span class="g-etc">넓이 값은 클래스로 각자 지정</span>
      <div class="board">
          <p class="title">
            <span class="num">번호</span>
            <span class="category">구분</span>
            <span class="cont-notice">제목</span>
            <span class="data">등록일</span>
            <span class="status">진행상태</span>
            <span class="answer">답변일</span>
          </p>
          <ul>
            <li>
              <span class="num">1</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <!-- 검색결과가 없는 경우 -->
            <li class="no-data">문의 내역이 없습니다.</li>
          </ul>
        </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="BoardView">
      <strong class="g-tit">Board-View</strong>
      <ul class="board-view">
        <li class="view-tit">
          <span class="tit"><span>[두산 케어 서비스]</span> 문의드립니다.</span>
          <span class="data">2019.06.21</span>
        </li>
        <li class="view-txt">
          <div>
            안녕하세요.
          </div>
        </li>
      </ul>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="SearchBox">
      <strong class="g-tit">Search Box</strong>
      <div class="sch-box">
        <input type="text"  class="sch-inp" title="제목 또는 내용 입력" placeholder="제목 또는 내용으로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
      <div class="sch-box type02">
        <div class="lp-select">
          <select>
              <option>선택</option>
              <option>로지피아 사업소</option>
              <option>판매점</option>
              <option>부품대리점</option>
              <option>지정정비업체</option>
          </select>
        </div>
        <input type="text"  class="sch-inp" title="회사명, 주소, 전화번호 입력" placeholder="회사명, 주소, 전화번호로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="List">
      <strong class="g-tit">List</strong>
      <p>list -1개</p>
      <p class="list-type01">이용약관과 개인정보 수집 및 이용에 동의하셔야 회원가입이 가능합니다.</p>
      <p>list -2개 이상</p>
      <ul class="list-type01">
        <li>이용약관과 개인정보 수집 및 이용에 동의하셔야 회원가입이 가능합니다.</li>
        <li>선택 항목에 동의하지 않더라도 두산 로지피아 회원가입 및 기본 서비스를 이용하실 수 있습니다.</li>
      </ul>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="Popup">
      <strong class="g-tit">Popup</strong>
      <p class="g-si-tit">Type 1 : 기본</p>
      <button type="button" class="btn btn-blue" v-on:click="popupBtn1">팝업 : type1</button>
      <div id="pop-guide" class="popup-wrap">
        <div class="popup-box">
          <div class="popup-title">
            타이틀
          </div>
          <div class="popup-content">
            <div class="btn-box">
              <button type="button" class="btn btn-navy">신청하기</button>
            </div>
            <div class="btn-box type02">
              <button type="button" class="btn btn-gray" v-on:click="popupClose1">취소</button>
              <button type="button" class="btn btn-navy">확인</button>
            </div>
          </div>
          <button type="button" class="btn-popup-close" v-on:click="popupClose1">팝업닫기</button>
        </div>
      </div>
      <p class="g-si-tit">Type 2 : header 없는 경우</p>
      <button class="btn btn-blue" type="button" v-on:click="popCstTest">팝업 : type2</button>
      <div id="pop-cst-test" class="popup-wrap type02">
        <div class="popup-box cst">
          <div class="popup-title">상담신청완료</div>
          <div class="popup-content">
            <div class="info-box">
              <p class="tit">홍길동 고객님, <br>
              상담신청이 정상적으로 접수되었습니다.</p>
              <p class="txt">최대한 빠른 시간 안에 답변을 드리겠습니다. <br>감사합니다.</p>
            </div>
            <ul class="dot-list">
              <li>두산 로지피아 홈페이지를 이용해 주셔서 감사합니다.</li>
              <li>항상 고객님께 최선을 다하는 두산 로지피아가 되겠습니다.</li>
            </ul>
            <div class="btn-box">
              <button type="button" class="btn btn-navy">확인</button>
            </div>
          </div>
          <button type="button" class="btn-popup-close" v-on:click="popCstTestClose">팝업닫기</button>
        </div>
      </div>
      <div class="guide-code">
        <pre>
// 팝업 열기 호출 script
popCstTest: function () {
  var popupWrap = document.getElementById('pop-cst') //팝업 id
  event.target.classList.add('btn-pop-open') //팝업 호출 버튼에 class 추가
  popupWrap.classList.add('on')
  document.querySelector('body').classList.add('popup-open')
  document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
  document.querySelector('.popup-open').style.position = 'fixed'
}

// 팝업 닫기 호출 script
popCstTestClose: function () {
  var popupWrap = document.getElementById('pop-cst')//팝업 id
  popupWrap.classList.remove('on')
  document.querySelector('.popup-open').style.removeProperty('position')
  window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
  document.querySelector('.popup-open').style.removeProperty('top')
  document.querySelector('body').classList.remove('popup-open')
  document.querySelector('.btn-pop-open').focus() //팝업 닫기 후 호출 버튼에 포커스 이동
  document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
}
        </pre>
      </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="Tab">
      <strong class="g-tit">Tab</strong>
      <p>- javascript 없을때</p>
      <ul class="tabs">
        <li><router-link to="" class="on">아이디 찾기</router-link></li>
        <li><router-link to="">비밀번호 찾기</router-link></li>
      </ul>
      <p>- javascript로 탭 제어</p>
      <ul class="tabs">
        <li><a href="javascript:void(0);" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'on' : '' ]">차량정보</a></li>
        <li><a href="javascript:void(0);" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'on' : '' ]">성능점검</a></li>
      </ul>
      <div class="tab-con">
        <div v-if="activetab === 1" class="tabcontent">
          1: 탭 내용
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          2: 탭 내용
        </div>
      </div>
      </div>
      <!-- //g-box -->
      <!-- g-box -->
      <div class="g-box" id="ImgList">
      <strong class="g-tit">Img List</strong>
      <p class="total"><span>123</span>건</p>
      <ul class="img-list">
        <li>
          <a href="#" class="img"><img src="../../assets/images/img-event.jpg" alt=""/></a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img"><img src="../../assets/images/img-event.jpg" alt=""/></a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img"><img src="../../assets/images/img-event.jpg" alt=""/></a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img"><img src="../../assets/images/img-event.jpg" alt=""/></a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
      </ul>
      </div>
      <!-- //g-box -->
      <div class="g-box" id="Comment">
       <strong class="g-tit">comment</strong>
       <div class="cmt-box">
         <form action="">
          <ul class="cmt-list">
            <li>
              <div class="cmt-tit">
                <span class="userId">김철수</span>
                <span class="date">2020.04.20</span>
                <a href="javascript:void()" @click="openReply">답글 열기</a>
              </div>
              <div class="cmt-con">
                제품 보험이 들어있나요?
              </div>
              <div class="tbl-box cmt-reply">
                 <textarea name="" id="" title="위 댓글에 대한 답글"></textarea>
                 <button class="btn btn-black btn-reg">등록</button>
              </div>
              <ul class="cmt-reply-list">
                <li>
                  <div class="cmt-tit">
                    <span class="userId">판매자</span>
                    <span class="date">2020.04.20</span>
                    <a href="javascript:void()" @click="openReply">답글 열기</a>
                  </div>
                  <div class="cmt-con">
                    보험은 들었으나 5월 만료예정입니다.
                  </div>
                  <div class="tbl-box cmt-reply">
                    <textarea name="" id="" title="위 댓글에 대한 답글"></textarea>
                    <button class="btn btn-black btn-reg">등록</button>
                  </div>  
                </li>
              </ul>
            </li>
          </ul>
           <div class="tbl-box">
             <textarea name="" id="" title="제품에 대한 댓글"></textarea>
             <button class="btn btn-blue btn-reg">등록</button>
           </div>
         </form>
       </div>
      </div>
      <!-- //g-box -->
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Guide',
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '가이드',
      activetab: 1,
      uploadFileName: '',
      targetFile: '',
      open1: false,
      open2: false
    }
  },
  methods: {
    openReply:function(e){
      var boxes = Array.from(document.querySelector(".cmt-list").querySelectorAll(".cmt-reply"));
      var t = e.target.parentElement.parentElement.querySelector(".cmt-reply");
      if(window.getComputedStyle(t).display == "none"){
        t.style.display="block";
        e.target.innerText="답글 닫기";
        t.firstChild.focus();
        boxes.filter(b=>b!==t).forEach(obj => {
          obj.parentElement.querySelector("a").innerText="답글 열기";
          obj.style.display="none";
        });
      }else{
         e.target.innerText="답글 열기";
         t.style.display="none";
      }
    },
    popupBtn1: function () {
      var popupWrap = document.getElementById('pop-guide')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('body').classList.add('on-top')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popupClose1: function () {
      var popupWrap = document.getElementById('pop-guide')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('on-top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    popCstTest: function () {
      var popupWrap = document.getElementById('pop-cst-test')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popCstTestClose: function () {
      var popupWrap = document.getElementById('pop-cst-test')
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
    openModal1 () {
      this.open1 = true
    },
    closeModal1 () {
      this.open1 = false
    }
  }
}
</script>

<style>
.g-link a{display:inline-block;margin-left:10px;}
.g-link a:first-child{margin:0;}
.g-link a:hover{text-decoration:underline;}
.g-box + .g-box {border-top:2px solid #ffc9a5;margin-top:40px;padding-top:40px;}
.g-box .g-tit{display:inline-block;margin-bottom:15px;padding:6px 18px 9px;color:#fff;font-size:17px;background-color:#333;}
.g-box .g-etc{display:inline-block;padding-left:10px;}
.g-box.jstep .tbl-inp{margin-top:0;}
.g-box .btn-pop{display:block;width:150px;height:40px;}
.g-box .tbl-inp + .tbl{margin-top:20px;}
.g-box .g-si-tit{margin:15px 0 5px;}
.g-box .g-tit + .g-si-tit{margin-top:0;}
.g-box .rdo-box,
.g-box .chk-box{margin-top:10px;}
.btn-guide{display:block;width:100%;padding-bottom:20px;overflow: hidden;}
.btn-guide > a{display:block;float:left;margin-left:5px;width:8.5%;height:40px;line-height:40px;text-align:center;color:#fff;background-color:#0097da;}
.btn-guide > a:first-child{margin:0;}
.btn-guide > a:hover{background-color:#166db0;}
.guide-code{height:150px;width:100%;overflow-y:auto;margin-top:20px;padding:10px 20px;border:1px solid #ddd;background-color:#f9f9f9;}
.guide-code pre{overflow:visible;line-height:22px;;font-size:14px;font-family: 'NotoSansKR-Regular';}
.br{display:none;}
@media screen and (max-width: 1024px){
  .sub-wrap{padding-left:20px;padding-right:20px;}
  .btn-guide{padding-top:20px;}
  .btn-guide > a{width:25%;margin-left:0;font-size:14px;border-left:1px solid #fff;border-top:1px solid #fff;background-color: #1fb1bf;box-sizing:border-box;}
  .cst .tbl-inp{padding:4px 0;}
  .br{display:block;margin-top:10px;}
  .cst .board-view .data:before,
  .cst .img-list .data:before{display:none;}
  .cst .img-list .data{padding:0;margin-top:6px;text-align:left;}
  .sch-box.type02{margin-top:10px;}
  .prod-detail{padding:0;background-color:#fff;}
}
@media screen and (max-width: 640px){
  .sub-wrap{background-color:#fff;}
  .br{display:block;}
}
</style>
