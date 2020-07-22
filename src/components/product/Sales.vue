<template>
  <section id="lp-section" class="lp-sub sales">
    <common-nav nowMenu="sales"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span></span>
    </div>
    <div class="sub-wrap">
      <div class="contents-tit">
        <h1>
          두산이 제안하는 창고 물류 솔루션<br>
          <strong>'두산 판매 서비스'</strong>
        </h1>
      </div>
      <div class="phase2-pc phase2-tablet">
        <ul class="smart-info">
          <li>
            <p class="tit"><strong>믿을 수 있는 두산</strong></p>
            <p>
              생산부터 판매까지<br>All-Round
            </p>
          </li>
          <li>
            <p class="tit"><strong>편리한 판매상담</strong></p>
            <p>
              가장 빠르고 편리한<br>판매상담으로 구매가능
            </p>
          </li>
          <li>
            <p class="tit"><strong>다양한 판매제품</strong></p>
            <p>
              지게차부터 솔루션까지!<br>가장 스마트한 생산진행 가능
            </p>
          </li>
        </ul>
        <ul class="tabs-st3 ">
          <li><a href="javascript:void(0)" :class="(activetab==1)?'on':''" @click="activetab=1">전동신차</a></li>
          <li><a href="javascript:void(0)" :class="(activetab==2)?'on':''" @click="activetab=2">두산 창고 물류 장비</a></li>
          <li><a href="javascript:void(0)" :class="(activetab==3)?'on':''" @click="activetab=3">두산 배터리</a></li>
          <li><a href="javascript:void(0)" :class="(activetab==4)?'on':''" @click="activetab=4">장비 관리 솔루션(Lin-Q)</a></li>
        </ul>
      </div>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==1)?'on':'']" type="button" @click="toggletab($event,1)">전동신차</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con01" v-if="activetab==1">
            <h2>
              다양한 환경에서 강력한 성능을 <br class="phase2-mobile3">발휘하는<br>
              <strong>두산 전동지게차</strong>
            </h2>
            <ul class="list-style">
              <li>빠른 반응성과 미세조작성을 갖춘 작업기</li>
              <li>마스트 쿠션 기능을 통해 흔들림과 충격을 최소화하여<br>
              안정적인 작업 가능</li>
              <li>두산만의 차별화 된 사양으로 다양한 작업환경에서<br>
              내구성, 안정성을 보장</li>
              <li>탁월한 시야성 설계가 적용되어 언제 어디서나<br>
              최적의 시야성을 제공</li>
            </ul>
        </div>
      </transition>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==2)?'on':'']" type="button" @click="toggletab($event,2)">두산 창고 물류 장비</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con02" v-if="activetab==2">
            <h2>
              A부터 Z까지 창고물류장비의 <br class="phase2-mobile3">모든것!<br>
              <strong>두산 창고 물류 장비</strong>
            </h2>
            <ul class="list-style">
              <li>견고한 구조와 신뢰성 있는 부품으로 생산성을 증가와<br>
              부드러운 핸들링으로 사용자 작업효율을 향상</li>
              <li>높은 내구성과 동일 장인의 기술력으로 화물이동이<br>
                잦은 환경에서도 사용 가능</li>
              <li>소규모창고에서 대규모 물류센터까지<br>최대 2,500kg의 화물 운반 가능</li>
            </ul>
        </div>
      </transition>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==3)?'on':'']" type="button" @click="toggletab($event,3)">두산 배터리</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con03" v-if="activetab==3">
            <h2>
              글로벌 전문 배터리 기업이 제작한 <br class="phase2-mobile3">가장 진보된 Li-ion Technology<br class="phase2-pc2 phase2-mobile3">
              <strong>두산 배터리</strong>
            </h2>
            <ul class="list-style">
              <li>전동지게차 본고장 유럽에서 인정하고 <br>두산이 검증한 우수한 품질</li>
              <li>편리한 정비성과 경제성, 그리고 평균이상의 안정성</li>
              <li>고도의 기술을 요하는 군수용 제품의 설계와<br>생산까지 진행하는 기술력</li>
            </ul>
            <div class="sales-benefit">
              <ul>
                <li><span class="ico ico01"></span>유지보수 <br>ZERO</li>
                <li><span class="ico ico02"></span>유해가스 <br>ZERO</li>
                <li><span class="ico ico03"></span>5년 10,000시간 <br>보증</li>
              </ul>
            </div>
        </div>
      </transition>
      <p class="phase2-mobile">
        <button :class="['btn-accordion',(activetab==4)?'on':'']" type="button" @click="toggletab($event,4)">장비 관리 솔루션(Lin-Q)</button>
      </p>
      <transition name="slide-fade">
        <div class="tab-con con04" v-if="activetab==4">
            <h2>
             최고의 생산성 실현 및 <br class="phase2-mobile3">최적화 된<br class="phase2-pc2">
            서비스가 가능한 <br class="phase2-mobile2 phase2-mobile3">가장 진보된<br class="phase2-pc2">
            <strong>장비 관리 솔루션</strong>
            </h2>
            <ul class="list-style">
              <li>차량별 운영 효율 관리를 통한 사업장의 최적 운영 대수 산정</li>
              <li>차량 최적 상태 유지를 통한 장비 비가동 시간<br>
                최소화 및 충격감지를 통한 주행 안정성 강화 서비스제공</li>
              <li>TMS장비로부터 장비 정보를 수집, 운영 및 관리를 지원하여<br>
                실시간으로 차량 관리 가능</li>
            </ul>
            <div class="sales-benefit">
              <ul>
                <li><span class="ico ico04"></span>운영 효율 <br>최적화</li>
                <li><span class="ico ico05"></span>장비 비가동 <br>시간 최소화</li>
                <li><span class="ico ico06"></span>주행 안정성 <br>강화</li>
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
       <article class="rental-apply phase2-pc phase2-tablet" id="rental-apply"> <!-- 200720 id 추가 -->
        <h4 class="rental-tlt">판매 상담 신청</h4>
        <p class="rental-article">판매 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
            <h4 class="rental-tlt">판매 상담 신청</h4>
            <p class="rental-article">판매 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
  name: 'Sales',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > 상품 > 판매',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산이 제안하는 창고물류 솔루션', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 상품, 판매' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '판매',
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
