<template>
  <div class="sub-wrap">
    <h2 class="tit">프로젝트 정보</h2>
    <p style="text-align:right; font-size:12px">
      <a href="/help/Guide" target="_blank"><span>Guide</span></a>
    </p>
    <div>
      <table class="tb-info">
        <caption>
          <span class="hidden">프로젝트 기본 정보</span>
        </caption>
        <colgroup>
          <col class="header" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">1. 프로젝트명</th>
            <td>두산 로지피아(Front) - 개선 Phase I</td>
          </tr>
          <tr>
            <th scope="row">2. 인코딩 방식</th>
            <td>utf-8</td>
          </tr>
          <tr>
            <th scope="row">3. dtd 사용</th>
            <td>Html5</td>
          </tr>
          <tr>
            <th scope="row">4. 크로스 브라우징</th>
            <!--a href="/" onclick="toggle_object('close'); return false;">4. 크로스 브라우징</a-->
            <td> IE11,Chrome,Firefox</td>
          </tr>
          <tr>
            <th scope="row">5. 해상도(반응형 웹)</th>
            <td> 1280(MONITOR), 1024px(NETBOOK), 768px(TABLET), 640px/360px/320px(SMARTPHONE) </td>
          </tr>
          <tr>
            <th scope="row">6. 웹접근성</th>
            <td> 웹접근성 준수 </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="tit">Front 퍼블리싱 진척도(담당자 : 박수영, 김나윤) <!-- <a href="#" class="onlylink">only link</a> --></h2>
    <p style="text-align:right; font-size:12px">
      <span>● 확인 완료</span>
    </p>
    <div>
      <table class="work">
        <colgroup>
          <col class="c1" />
          <col class="c2" />
          <col class="c3" />
          <col class="c3" />
          <col class="c8" />
          <col class="c5" />
          <col class="c6" />
          <col class="c7" />
          <col class="c8" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="c1">1Dep</th>
            <th scope="col" class="c2">2Dep</th>
            <th scope="col" class="c3-1">3Dep</th>
            <th scope="col" class="c3">4Dep</th>
            <th scope="col" class="c8">Dir</th>
            <th scope="col" class="c5">FileName</th>
            <th scope="col" class="c6">Finish</th>
            <th scope="col" class="c7">Date<br/>(pc/mobile)<br/>(tablet)</th>
            <th scope="col" class="c7">Name</th>
            <th scope="col" class="c8">Memo</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tit">
            <td>GUIDE</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/help/</td>
            <td><a href="/help/Guide" target="_blank">Guide</a></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="tit">
            <td>랜딩 페이지</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/">Landing</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="">
            <td>메인, _GNB</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/common/</td>
            <td><router-link to="/main">Main</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
           <tr class="tit">
            <td>상품/렌탈</td>
            <td>렌탈</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/rental">Rental</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td>상품</td>
            <td>스마트리스</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/smart-lease">SmartLease</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>판매</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/sales">Sales</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
           <tr>
            <td></td>
            <td>정비서비스</td>
            <td>두산케어 서비스</td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/doosan-care-service">DoosanCareService</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td>정비서비스</td>
            <td>유상정비 서비스</td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/paid-service">PaidService</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr class="tit">
            <td>로지피아 중고</td>
            <td>리스트</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/logipia-used">LogipiaUsedList</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td>상세보기</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/logipia-used/1">LogipiaUsedDetail</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr class="tit">
            <td>Automation &<br>Industrial</td>
            <td>무인지게차</td>
            <td></td>
            <td></td>
            <td>/automation/</td>
            <td><router-link to="/automation-and-industrial/AGF">Agf</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>미니굴삭기</td>
            <td></td>
            <td></td>
            <td>/automation/</td>
            <td><router-link to="/automation-and-industrial/compact-excavators">CompactExcavators</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>협동 로봇</td>
            <td></td>
            <td></td>
            <td>/automation/</td>
            <td><router-link to="/automation-and-industrial/cobots">Cobots</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="tit">
            <td>고객센터</td>
            <td>공지사항</td>
            <td>리스트</td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/notice">NoticeList</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>상세보기</td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/notice/1">NoticeDetail</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="">
            <td></td>
            <td>FAQ</td>
            <td></td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="service-center/faq">Faq</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="">
            <td></td>
            <td>이벤트</td>
            <td>리스트</td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/event">EventList</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
           <tr class="">
            <td></td>
            <td></td>
            <td>보기</td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/event/1">EventDetail</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="">
            <td></td>
            <td>1:1 문의</td>
            <td>상담신청 (T)</td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/consult-add">ConsultAdd</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>1:1 문의</td>
            <td>문의내역 보기 (T)</td>
            <td>리스트</td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/consult-list">ConsultList</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>문의내역 보기 (T)</td>
            <td>상세보기</td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/consult/1">ConsultDetail</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr >
            <td></td>
            <td>두산 네트워크</td>
            <td></td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/network">Network</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr >
            <td></td>
            <td>자료실</td>
            <td></td>
            <td></td>
            <td>/service-center/</td>
            <td><router-link to="/service-center/reference">reference</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="tit">
            <td>중고직거래</td>
            <td>리스트</td>
            <td></td>
            <td></td>
            <td>/p2p-market/</td>
            <td><router-link to="/p2p-market">P2pMarketList</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>상세보기</td>
            <td></td>
            <td></td>
            <td>/p2p-market/</td>
            <td><router-link to="/p2p-market/1">P2pMarketDetail</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
           <tr>
            <td></td>
            <td>매물등록</td>
            <td></td>
            <td></td>
            <td>/p2p-market/</td>
            <td><router-link to="/p2p-market/add">P2pMarketAdd</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
           <tr class="tit">
            <td>회사소개</td>
            <td>두산 로지피아</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><a href="/intro/intro" target="_blank">Intro</a></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td>고객 핵심가치</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><a href="/intro/credo" target="_blank">Credo</a></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
           <tr>
            <td></td>
            <td>연혁</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><a href="/intro/history" target="_blank">History</a></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
           <tr>
            <td></td>
            <td>홍보영상</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><a href="/intro/vod" target="_blank">Vod</a></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
           <tr>
            <td></td>
            <td>찾아오시는길</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><a href="/intro/place" target="_blank">Place</a></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr class="tit">
            <td>회원</td>
            <td>로그인</td>
            <td></td>
            <td></td>
            <td>/login/</td>
            <td><router-link to="/login">Login</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td>회원가입</td>
            <td>약관동의 (STEP 1)</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/jstep1">Jstep1</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>정보작성 (STEP 2)</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/jstep2">Jstep2</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>가입완료 (STEP 3)</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/jstep3">Jstep3</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>아이디/비밀번호 찾기</td>
            <td>아이디 찾기 (T)</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/findId">FindId</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
           <tr>
            <td></td>
            <td></td>
            <td>아이디 찾기 (T)</td>
            <td>완료</td>
            <td>/member/</td>
            <td><router-link to="/member/findIdComplete">FindIdComplete</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>비밀번호 찾기 (T)</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/findPw">FindPw</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>회원 정보 수정 1</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/myInfo1">MyInfo1</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>회원 정보 수정 2</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/myInfo2">MyInfo2</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>회원 탈퇴</td>
            <td>회원 탈퇴1</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/memWdr1">MemWdr1</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>회원 탈퇴2</td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/memWdr2">MemWdr2</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>마이페이지</td>
            <td></td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/mypage">Mypage</router-link></td>
            <td></td>
            <td></td>
            <td>박수영</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr class="tit">
            <td>Footer</td>
            <td>개인정보처리방침</td>
            <td></td>
            <td></td>
            <td>/help/</td>
            <td><router-link to="/help/privacy">Privacy</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>영상정보처리기기 운영 · 관리 방침</td>
            <td></td>
            <td></td>
            <td>/help/</td>
            <td><router-link to="/help/media">Media</router-link></td>
            <td></td>
            <td></td>
            <td>김나윤</td><!-- 담당자-->
            <td></td>
          </tr>
           <tr>
            <td></td>
            <td>이용약관</td>
            <td></td>
            <td></td>
            <td>/help/</td>
            <td><router-link to="/help/user-term">UseTerm</router-link></td>
            <td></td>
            <td></td>
            <td></td><!-- 담당자-->
            <td>기존유지</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Status'
}
</script>

<style lang="css" scoped>
/* 정보 */
.tb-info { WIDTH:100%;
  BORDER-BOTTOM: #888 1px solid;
  BORDER-LEFT: #888 1px solid;
  MARGIN: 0px 0px 3em;
  WIDth: 100%;
  BORDER-TOP: #888 1px solid;
  BORDER-RIGHT: #888 1px solid
}
.tb-info CAPTION {
  FONT-WEIGHT: 400
}
.tb-info COL.header {
  WIDth: 180px
}
.tb-info th {
  BORDER-BOTTOM: #aaa 1px dashed;
  TEXT-ALIGN: left;
  BORDER-LEFT: #aaa 1px dashed;
  PADDING-BOTTOM: 0.25em;
  PADDING-LEFT: 1em;
  PADDING-RIGHT: 1em;
  BORDER-TOP: #aaa 1px dashed;
  BORDER-RIGHT: #aaa 1px dashed;
  PADDING-TOP: 0.25em
}
.tb-info td {
  BORDER-BOTTOM: #aaa 1px dashed;
  TEXT-ALIGN: left;
  BORDER-LEFT: #aaa 1px dashed;
  PADDING-BOTTOM: 0.25em;
  PADDING-LEFT: 1em;
  PADDING-RIGHT: 1em;
  BORDER-TOP: #aaa 1px dashed;
  BORDER-RIGHT: #aaa 1px dashed;
  PADDING-TOP: 0.25em;
  font-size: 12px;

}
.tb-info th {
  BACKGROUND-COLOR: #dedede;
  BORDER-RIGHT: 0px;
  font-size: 12px;
}
.tb-info td {
  BORDER-LEFT: 0px
}

.work {
  BORDER-BOTTOM: #888 1px solid;
  BORDER-LEFT: #888 1px solid;
  MARGIN: 0px 0px 3em;
  WIDth: 100%;
  BORDER-TOP: #888 1px solid;
  BORDER-RIGHT: #888 1px solid
}
.work CAPTION {
  TEXT-ALIGN: right
}
.work tr:hover td {background: #f3f3f3}
.work th {
  BORDER-BOTTOM: #aaa 1px solid;
  BORDER-LEFT: #aaa 1px solid;
  PADDING-BOTTOM: 0.25em;
  PADDING-LEFT: 0.5em;
  PADDING-RIGHT: 0.5em;
  BORDER-TOP: #aaa 1px solid;
  BORDER-RIGHT: #aaa 1px solid;
  PADDING-TOP: 0.25em
}
.work td {
  BORDER-BOTTOM: #aaa 1px solid;
  BORDER-LEFT: #aaa 1px solid;
  BORDER-TOP: #aaa 1px solid;
  BORDER-RIGHT: #aaa 1px solid;
  padding: 5px 10px;
  line-height: 17px;
}
.work td a {color: #0097da;}
.work th {
  BACKGROUND-COLOR: #c0c0c0; font-size: 12px;
  BORDER-BOTTOM-WIDth: 3px
}
.work td {
  BACKGROUND-COLOR: #fff; font-size: 12px; letter-spacing: -0.5px;
  VERTICAL-ALIGN: middle
}

/* 진행상황 */
.work .complete td {
  BACKGROUND-COLOR: #ececec
}
.work .during td {
  BACKGROUND-COLOR: #dafeb4
}
.work .deleted td {
  BACKGROUND-COLOR: #fe6565;
  TEXT-DECORATION: line-through
}
.work tr.tit td {
  border-top: 2px solid #333;
}
.work {
  width: 100%;
  min-width: 900px;
}
.work .c1 {
  width: 70px;
}
.work .c2 {
  width: 120px;
}
.work .c3 {
  width: 90px;
}
.work .c3-1 {
  width: 110px;
}
.work .c4 {
  width: 100px;
}
.work .c5 {
  width: 100px;
}
.work .c6 {
  width: 40px;
  text-align: center;
}
.work .c7 {
  width:90px;
  text-align: center;
}
.work .c8 {
  width: auto;
}
.work tr td:nth-child(6) {
  text-align: left;
}
.work tr td:nth-child(7) {
  text-align: center;
}
.work tr td:nth-child(8) {
  text-align: center;
}
.work tr td:nth-child(9) {
  text-align: center;
}
.work tr td:nth-child(10) {
  text-align: center;
}
.work tr td:nth-child(11) {
  text-align: left;
}
.work tr td:nth-child(12) {
  text-align: center;
}
.work tr td span {
  color: #666;
}

h2.tit {
  position: relative;
}
h2.tit a {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #999;
  padding: 3px 10px;
  background-color: #999;
  font-size: 11px;
}

#close {
  display: none;
  margin-bottom: 50px;
  border-bottom: 1px dotted #ccc;
  overflow: hidden;
}
#close:after {
  clear: both;
}
#close > h2.tit {
  height: 27px;
}
.blue {color:#0097da}
.green {color:#1fb1bf}
.gray {color:#9a9a9a !important}
</style>
