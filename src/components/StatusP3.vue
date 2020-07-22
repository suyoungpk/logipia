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
            <td>두산 로지피아(Front) - Phase III</td>
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

    <h2 class="tit">Front 퍼블리싱 진척도(담당자 : 오금혜,나은별 / 확인자 : 오금혜) <!-- <a href="#" class="onlylink">only link</a> --></h2>
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
          <col class="c3" />
          <col class="c4" />
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
            <th scope="col" class="c3">5Dep</th>
            <th scope="col" class="c4">Dir</th>
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
            <td></td>
            <td>/help/</td>
            <td><a href="/help/Guide" target="_blank">Guide</a></td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td>공통</td>
            <td>모바일 메뉴 닫기 버튼</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/common/</td>
            <td><router-link to="/common/Default.vue">/common/Default</router-link></td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td><p>모바일 화면에서 전체메뉴 닫기 버튼과 영역 수정 </p></td>
          </tr>
          <tr>
            <td></td>
            <td>각 페이지마다 TITLE 적용</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/common/</td>
            <td><router-link to="/common/Default.vue">/common/Default</router-link></td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td><p>vue-meta 적용 </p></td>
          </tr>
          <tr>
            <td></td>
            <td>Phase III - sass 셋팅 및 sass 파일 적용</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/assets/css/</td>
            <td>style.scss<br />_variables.scss<br>_intro.scss<br />_service.scss<br />_center.scss</td>
            <td></td>
            <td>2019.10.30</td>
            <td>오금혜</td>
            <td><p>Phase III에 새로 작업하는 페이지만 sass 적용 </p></td>
          </tr>
          <tr class="tit">
            <td>TEST</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/test/">Test</router-link></td>
            <td></td>
            <td>2019.10.24</td>
            <td>나은별</td>
            <td>Editor Viewer Test (텍스트 크기 관련 사항은 추후 수정할 예정)</td>
          </tr>
          <tr class="tit">
            <td>메인</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>메인화면_GNB</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td></td>
            <td></td>
            <td></td>
            <td><p></p></td>
          </tr>
          <tr class="tit">
            <td></td>
            <td>회사소개</td>
            <td>회사소개</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/companyIntro">companyIntro</router-link></td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>회사소개</td>
            <td></td>
            <td>/intro/</td>
            <td>Company.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>고객가치</td>
            <td></td>
            <td>/intro/</td>
            <td>CustomValue.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>상세</td>
            <td>/intro/</td>
            <td>CustomValueView.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>QUICK &amp; SMART PRODUCT</td>
            <td>/intro/</td>
            <td>CustomValueTableProduct.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>QUICK &amp; SMART SERVICE</td>
            <td>/intro/</td>
            <td>CustomValueTableService.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>홍보영상</td>
            <td></td>
            <td>/intro/</td>
            <td>Video.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>찾아오시는 길</td>
            <td></td>
            <td>/intro/</td>
            <td>Location.vue</td>
            <td></td>
            <td>2019.10.31</td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td></td>
            <td>서비스</td>
            <td>Lin-Q 서비스</td>
            <td></td>
            <td></td>
            <td>/service/</td>
            <td><router-link to="/service/LinQ">LinQ</router-link></td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>서비스 공통 TITLE</td>
            <td></td>
            <td>/service/</td>
            <td>ServiceHead.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>주요 기능</td>
            <td></td>
            <td>/service/</td>
            <td>LinQSkill.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>고객 가치</td>
            <td></td>
            <td>/service/</td>
            <td>LinQCredo.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>설명 이미지</td>
            <td></td>
            <td>/service/</td>
            <td>LinQImg.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>상품 안내 및 가격</td>
            <td></td>
            <td>/service/</td>
            <td>LinQPrice.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>서비스 공통 bottom</td>
            <td></td>
            <td>/service/</td>
            <td>ServiceBottom.vue</td>
            <td></td>
            <td>2019.11.05</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>렌탈</td>
            <td></td>
            <td></td>
            <td>/service/</td>
            <td><router-link to="/service/Rantal">Rantal</router-link></td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>주요 서비스</td>
            <td></td>
            <td>/service/</td>
            <td>RantalSkill.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>렌탈 TAB 카테고리</td>
            <td></td>
            <td>/service/</td>
            <td>RantalTabCate.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>렌탈 TAB 콘텐츠</td>
            <td></td>
            <td>/service/</td>
            <td>RantalTabContent.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>렌탈 모바일 아코디언</td>
            <td></td>
            <td>/service/</td>
            <td>RantalMList.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>디젤 소형</td>
            <td>/service/</td>
            <td>RantalContent01.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>디젤 중형</td>
            <td>/service/</td>
            <td>RantalContent02.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>디젤 대형</td>
            <td>/service/</td>
            <td>RantalContent03.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>LPG 소형/중형</td>
            <td>/service/</td>
            <td>RantalContent04.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>전동 좌승식</td>
            <td>/service/</td>
            <td>RantalContent05.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>전동 입승식</td>
            <td>/service/</td>
            <td>RantalContent06.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>리튬 배터리 지게차</td>
            <td>/service/</td>
            <td>RantalContent07.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>단기 렌탈 서비스</td>
            <td></td>
            <td>/service/</td>
            <td>RantalShortTerm.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>리튬 배터리 렌탈 서비스</td>
            <td></td>
            <td>/service/</td>
            <td>RantalBattery.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>서비스 link</td>
            <td></td>
            <td>/service/</td>
            <td>ServiceLink.vue</td>
            <td></td>
            <td></td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td></td>
            <td>제품</td>
            <td>무인지게차</td>
            <td></td>
            <td></td>
            <td>/product/</td>
            <td><router-link to="/product/ManlessForkLift">ManlessForkLift</router-link></td>
            <td></td>
            <td>2019.11.04</td>
            <td>나은별</td>
            <td><P></P></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>TITLE</td>
            <td></td>
            <td>/product/</td>
            <td>ManlessForkLiftHead</td>
            <td></td>
            <td>2019.11.04</td>
            <td>나은별</td>
            <td><P></P></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>최첨단 무인지게차 제어기술 Full 적용</td>
            <td></td>
            <td>/product/</td>
            <td>ManlessForkLiftFirst</td>
            <td></td>
            <td>2019.11.04</td>
            <td>나은별</td>
            <td><P></P></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>최고급 북미형 Reach Truch 제품기발 개발</td>
            <td></td>
            <td>/product/</td>
            <td>ManlessForkLiftSecond</td>
            <td></td>
            <td>2019.11.04</td>
            <td>나은별</td>
            <td><P></P></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>제품 공통 bottom</td>
            <td></td>
            <td>/product/</td>
            <td>ProductBottom</td>
            <td></td>
            <td>2019.11.04</td>
            <td>나은별</td>
            <td><P></P></td>
          </tr>
          <tr class="tit">
            <td></td>
            <td>고객센터</td>
            <td>FAQ</td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/faq">FAQ</router-link></td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td><P>퍼블 선작업 추후 디자인 입혀야 함</P></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>리스트</td>
            <td></td>
            <td>/center/</td>
            <td>FaqList.vue</td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>상단 카테고리</td>
            <td>/center/</td>
            <td>FaqCate.vue</td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1:1 문의 LINK</td>
            <td>/center/</td>
            <td>CsInfo.vue</td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>더보기 버튼</td>
            <td>/common/</td>
            <td>MoreView.vue</td>
            <td></td>
            <td>2019.10.24</td>
            <td>오금혜</td>
            <td></td>
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
