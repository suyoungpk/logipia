<template>
  <section id="lp-section" class="lp-sub smartLease">
    <common-nav nowMenu="smartLease"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span></span>
    </div>
    <div class="sub-wrap">
      <div class="contents-tit">
        <h1>
          할부 대비 저렴한 월 납입금으로!<br>
          <strong>'두산 스마트리스'</strong>
        </h1>
      </div>
      <div class="phase2-pc phase2-tablet">
        <ul class="smart-info">
          <li>
            <p class="tit"><strong>투명한</strong> 비용</p>
            <p>
              월 리스료와 중고차 판매가 등<br>정확한 비용을 미리 확인
            </p>
          </li>
          <li>
            <p class="tit"><strong>고객 맞춤형</strong> 프로그램</p>
            <p>
              리스 종료 후<br>중고차 구매, 중고차 재 리스, 반납 중 선택가능
            </p>
          </li>
        </ul>
        <ul class="tabs-st3 ">
          <li><a href="javascript:void(0)" :class="(activetab==1)?'on':''" @click="activetab=1">전동 좌승식</a></li>
          <li><a href="javascript:void(0)" :class="(activetab==2)?'on':''" @click="activetab=2">전동 입승식</a></li>
          <li><a href="javascript:void(0)" :class="(activetab==3)?'on':''" @click="activetab=3">리튬 배터리 지게차</a></li>
        </ul>
      </div>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==1)?'on':'']" type="button" @click="toggletab($event,1)">전동 좌승식</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con01" v-if="activetab==1">
            <h2>
              <strong>두산 배터리 장착</strong>으로 감소된 운영비용과 <br>작업자의 안전까지 생각한 <strong>제어시스템!</strong>
            </h2>
            <ul class="list-style">
              <li><strong>높은내구성</strong>으로 <strong>운영비용 감소</strong></li>
              <li>작업 <strong>효율</strong>의<strong>증대</strong></li>
              <li><strong>안전</strong>하고 <strong>편리</strong>한 작업</li>
            </ul>
            <div class="smart-range">
              <h3>주요 활동 범위</h3>
              <ul>
                <li><span class="ico garage"></span>물류창고</li>
                <li><span class="ico factory"></span>공장내부</li>
              </ul>
            </div>
        </div>
      </transition>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==2)?'on':'']" type="button" @click="toggletab($event,2)">전동 입승식</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con02" v-if="activetab==2">
            <h2>
              최상의 <strong>시야성</strong>과 최상의 <strong>안전</strong>으로 <br><strong>빠른 작업효율</strong>의 혁신제품!
            </h2>
            <ul class="list-style">
              <li><strong>높은내구성</strong>으로 <strong>운영비용 감소</strong></li>
              <li>작업 <strong>효율</strong>의<strong>증대</strong></li>
              <li><strong>안전</strong>하고 <strong>편리</strong>한 작업</li>
            </ul>
            <div class="smart-range">
              <h3>주요 활동 범위</h3>
              <ul>
                <li><span class="ico garage"></span>물류창고</li>
                <li><span class="ico factory"></span>공장내부</li>
              </ul>
            </div>
        </div>
      </transition>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==3)?'on':'']" type="button" @click="toggletab($event,3)">리튬 배터리 지게차</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con03" v-if="activetab==3">
            <h2>
              <strong>국내최초</strong> 출시! <br><strong>짧은 충전, 긴 작업시간</strong>을 보장하는 제품
            </h2>
            <ul class="list-style">
              <li><strong>높은내구성</strong>으로 <strong>운영비용 감소</strong></li>
              <li>작업 <strong>생산성 증대</strong></li>
              <li><strong>안전</strong>하고 <strong>깨끗한</strong> 작업</li>
            </ul>
            <div class="smart-range">
              <h3>주요 활동 범위</h3>
              <ul>
                <li><span class="ico garage"></span>물류창고</li>
                <li><span class="ico factory"></span>공장내부</li>
              </ul>
            </div>
        </div>
      </transition>
      <div class="btn-box">
          <button type="button" class="btn btn-blue btn-download">카탈로그 다운로드</button>
      </div>
      <div class="btn-box m-btn-box">
        <button type="button" class="btn btn-dark"  @click="popApply">상담 신청</button>
        <button type="button" class="btn btn-blue">카탈로그 다운로드</button>
      </div>
       <article class="rental-apply phase2-pc phase2-tablet" id="rental-apply">  <!-- 200720 id 추가 -->
        <h4 class="rental-tlt">스마트리스 상담 신청</h4>
        <p class="rental-article">스마트리스 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
        <div class="rental-box">
          <ul>
            <li>
              <label class="label mark" for="apply-name">이름</label>
              <div class="inp-box">
                <input class="rental-inp" type="text" name="apply-name" id="apply-name" placeholder="이름을 입력하세요. 예) 홍길동"/>
              </div>
            </li>
            <li>
              <label class="label mark" for="apply-email">이메일</label>
              <div class="inp-box inp-email">
                <input type="text" name="apply-email" id="apply-email" class="rental-inp email" placeholder="ID"/>
                <span>@</span>
                <input  type="text" name="apply-email" id="inp-dscare" class="rental-inp" placeholder="도메인 입력"/>
              </div>
            </li>
            <li>
              <label class="label mark" for="apply-contact">연락처</label>
              <div class="inp-box">
                <input  type="tel" name="apply-contact" id="apply-contact" class="rental-inp" placeholder="연락가능한 번호를 입력해주세요."/>
              </div>
            </li>
            <li>
              <label class="label" for="apply-company">소속회사</label>
              <div class="inp-box">
                <input  type="text" name="apply-company" id="apply-company" class="rental-inp" placeholder="소속회사를 입력해주세요."/>
              </div>
            </li>
            <li>
              <label class="label mark" for="">상담내용</label>
              <textarea placeholder="" class="rental-textarea"></textarea>
            </li>
            <li class="apply-use">
              <p>개인정보 수집 및 이용동의</p>
              <div class="use-box">
                <div class="terms-box pop">
                  <h4>개인정보 수집 및 이용동의 약관</h4> 
                  <ol class="t-list">
                    <li>① “회사”가 회원님의 회원가입 및 서비스 이용 시 수집하는 개인정보 항목과 그 수집ᆞ이용의 주된 목적은 다음과 같습니다.
                      <h5>수집항목</h5> 
                      <p>이름, 휴대폰번호, 차량종류, 연식</p> 
                      <h5>수집·이용 목적</h5>
                      <ol>
                        <li>· 간편판매 차량진단 상담</li>
                        <li>· 방문진단 일정 및 진행과정 안내</li>
                        <li>· 회원혜택, 약관변경, 고지사항 전달, 본인의사 확인, 불만처리 등 원활한 의사소통 경로의 확보</li>
                        <li>· 신규서비스 개발 및 맞춤형 서비스 제공과 광고 게재, 서비스이용에 대한 통계 작성</li>
                      </ol>
                      <h5>보유 기간</h5>
                      <p>간편판매 이용 종료 또는 개인정보 유효기간 도래 시까지 보관 단, 관계 법령에 따라 고객님의 개인정보를 보존하여야 하는 경우, 회사는 해당 법령에서 정한 기간 동안 보관</p>
                      <ul class="t-list">
                        <li>가) 소비자의 불만 또는 분쟁처리에 관한 기록
                          <ul class="t-list">
                            <li>- 보존이유 : 전자상거래 등에서의 소비자 보호에 관한 법률</li>
                            <li>- 보존기간 : 3년</li>
                          </ul>
                        </li> 
                          <li>나) 로그인 기록
                            <ul class="t-list">
                              <li>- 보존이유 : 통신비밀보호법</li>
                              <li>- 보존기간 : 3개월</li></ul>
                          </li> 
                          <li>다) 통신사실확인자료를 제공할 때 필요한 가입자의 전기통신 일시, 전기통신 개시 종료시각, 통신번호 등 상대방의 가입자번호, 통신망에 접속된 정보통신기기의 위치 추적 자료
                            <ul class="t-list">
                              <li>- 보존이유 : 통신비밀보호법</li> 
                              <li>- 보존기간 : 12개월</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>② 이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있습니다. 다만, 회원가입 시 필수정보의 수집/이용 동의를 거부할 경우 서비스 제공에 제한이 있습니다.</li>
                      <li>③ 본 사이트 이용 과정에서 다음의 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. - IP주소, 쿠키, MAC주소, 서비스이용기록, 방문기록, 상담 통화 내역 등 - 차량광고관련 내용 : 광고 효과 향상을 위한 검색포털사이트 노출 (직접제공이 아닌 각 포털사의 수집 규칙에 따름)</li>
                    </ol> 
                    <h4>개인정보 처리 위탁 약관</h4>
                    <p>“회사”는 회원에 대한 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받은 업체가 관련 법률에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리·감독을 하고 있습니다. “회사”가 처리를 위탁하는 개인정보는 다음과 같습니다.</p> <h5>수탁자 / 처리위탁업무</h5> <ul class="t-list"><li>㈜두산 디지털이노베이션 / 정보전산 처리 및 유지/관리</li> <li>㈜다우기술 / 국내 문자발송 프로그램 유지/보수</li> <li>나이스평가정보㈜ / 본인인증 서비스 제공</li></ul></div>
              </div>
            
            </li>
          </ul>
        </div>
        <div class="apply-check">
          <p>개인정보 수집 및 이용동의를 자세히 읽어 보신 후 동의해 주시기 바랍니다.</p>
          <span class="inp-chk"><input type="checkbox" name="chk01" id="chk01-01"> <label for="chk01-01">동의함</label></span>
        </div>
       </article> <!--// rental-apply -->
       <a href="#rental-apply" class="btn-quick-menu phase2-pc phase2-tablet" >상담신청</a> <!-- 200720 추가 -->
       <div class="btn-box"><button type="button" class="btn btn-dark">상담 신청</button></div>
    </div> <!--// sub-wrap -->
    <!-- mobile 상담신청 popup -->
    <div id="pop-apply" class="popup-wrap type02">
      <div class="popup-box cst">
        <!-- <div class="popup-title">상담신청완료</div> -->
        <div class="popup-content">
          <article class="rental-apply m-apply">
            <h4 class="rental-tlt">스마트리스 상담 신청</h4>
            <p class="rental-article">스마트리스 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
            <div class="rental-box">
              <ul>
                <li>
                  <label class="label mark" for="apply-name">이름</label>
                  <div class="inp-box">
                    <input class="rental-inp" type="text" name="apply-name" id="apply-name" placeholder="이름을 입력하세요. 예) 홍길동"/>
                  </div>
                </li>
                <li>
                  <label class="label mark" for="apply-email">이메일</label>
                  <div class="inp-box inp-email">
                    <input type="text" name="apply-email" id="apply-email" class="rental-inp email" placeholder="ID"/>
                    <span>@</span>
                    <input  type="text" name="apply-email" id="inp-dscare" class="rental-inp" placeholder="도메인 입력"/>
                  </div>
                </li>
                <li>
                  <label class="label mark" for="apply-contact">연락처</label>
                  <div class="inp-box">
                    <input  type="tel" name="apply-contact" id="apply-contact" class="rental-inp" placeholder="연락가능한 번호를 입력해주세요."/>
                  </div>
                </li>
                <li>
                  <label class="label" for="apply-company">소속회사</label>
                  <div class="inp-box">
                    <input  type="text" name="apply-company" id="apply-company" class="rental-inp" placeholder="소속회사를 입력해주세요."/>
                  </div>
                </li>
                <li>
                  <label class="label mark" for="">상담내용</label>
                  <textarea placeholder="" class="rental-textarea"></textarea>
                </li>
                <div class="apply-check">
                  <span class="inp-chk02"><input type="checkbox" name="chk01" id="chk02-02"> <label for="chk02-02">개인정보 수집 및 이용동의에 동의합니다.</label></span>
                </div>
                <li class="apply-use">
                  <p>개인정보 수집 및 이용동의</p>
                  <div class="use-box">
                    <div class="terms-box pop">
                      <h4>개인정보 수집 및 이용동의 약관</h4> 
                      <ol class="t-list">
                        <li>① “회사”가 회원님의 회원가입 및 서비스 이용 시 수집하는 개인정보 항목과 그 수집ᆞ이용의 주된 목적은 다음과 같습니다.
                          <h5>수집항목</h5> 
                          <p>이름, 휴대폰번호, 차량종류, 연식</p> 
                          <h5>수집·이용 목적</h5>
                          <ol>
                            <li>· 간편판매 차량진단 상담</li>
                            <li>· 방문진단 일정 및 진행과정 안내</li>
                            <li>· 회원혜택, 약관변경, 고지사항 전달, 본인의사 확인, 불만처리 등 원활한 의사소통 경로의 확보</li>
                            <li>· 신규서비스 개발 및 맞춤형 서비스 제공과 광고 게재, 서비스이용에 대한 통계 작성</li>
                          </ol>
                          <h5>보유 기간</h5>
                          <p>간편판매 이용 종료 또는 개인정보 유효기간 도래 시까지 보관 단, 관계 법령에 따라 고객님의 개인정보를 보존하여야 하는 경우, 회사는 해당 법령에서 정한 기간 동안 보관</p>
                          <ul class="t-list">
                            <li>가) 소비자의 불만 또는 분쟁처리에 관한 기록
                              <ul class="t-list">
                                <li>- 보존이유 : 전자상거래 등에서의 소비자 보호에 관한 법률</li>
                                <li>- 보존기간 : 3년</li>
                              </ul>
                            </li> 
                              <li>나) 로그인 기록
                                <ul class="t-list">
                                  <li>- 보존이유 : 통신비밀보호법</li>
                                  <li>- 보존기간 : 3개월</li></ul>
                              </li> 
                              <li>다) 통신사실확인자료를 제공할 때 필요한 가입자의 전기통신 일시, 전기통신 개시 종료시각, 통신번호 등 상대방의 가입자번호, 통신망에 접속된 정보통신기기의 위치 추적 자료
                                <ul class="t-list">
                                  <li>- 보존이유 : 통신비밀보호법</li> 
                                  <li>- 보존기간 : 12개월</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>② 이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있습니다. 다만, 회원가입 시 필수정보의 수집/이용 동의를 거부할 경우 서비스 제공에 제한이 있습니다.</li>
                          <li>③ 본 사이트 이용 과정에서 다음의 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. - IP주소, 쿠키, MAC주소, 서비스이용기록, 방문기록, 상담 통화 내역 등 - 차량광고관련 내용 : 광고 효과 향상을 위한 검색포털사이트 노출 (직접제공이 아닌 각 포털사의 수집 규칙에 따름)</li>
                        </ol> 
                        <h4>개인정보 처리 위탁 약관</h4>
                        <p>“회사”는 회원에 대한 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받은 업체가 관련 법률에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리·감독을 하고 있습니다. “회사”가 처리를 위탁하는 개인정보는 다음과 같습니다.</p> <h5>수탁자 / 처리위탁업무</h5> <ul class="t-list"><li>㈜두산 디지털이노베이션 / 정보전산 처리 및 유지/관리</li> <li>㈜다우기술 / 국내 문자발송 프로그램 유지/보수</li> <li>나이스평가정보㈜ / 본인인증 서비스 제공</li></ul></div>
                  </div>
                
                </li>
              </ul>
            </div>
            <div class="btn-box"><button type="button" class="btn btn-dark">신청하기</button></div>
          </article>
        </div>
        <button type="button" class="btn-popup-close" @click="popApplyClose">팝업닫기</button>
      </div>
    </div><!-- //mobile 상담신청 popup -->
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'SmartLease',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > 상품 > 스마트 리스',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '할부 대비 저렴한 월 납입금으로 두산 지게차를 사용하세요.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 상품, 스마트 리스' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '스마트 리스',
      activetab:1
    }
  },
   methods: {
    // 팝업 열기 호출 script
    popApply: function () {
      var popupWrap = document.getElementById('pop-apply') //팝업 id
      event.target.classList.add('btn-pop-open') //팝업 호출 버튼에 class 추가
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    // 팝업 닫기 호출 script
    popApplyClose: function () {
      var popupWrap = document.getElementById('pop-apply')//팝업 id
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus() //팝업 닫기 후 호출 버튼에 포커스 이동
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    toggletab:function(e,index){
     if( e.target.classList.contains("on")){
      this.activetab=0
      e.target.classList.remove("on")
      }
     else
      this.activetab=index
    },
    reset:function(){
      if(this.activetab == 0)
        this.activetab=1
    }
  },
  mounted(){
    window.addEventListener('resize',this.reset)
  }
}
</script>
