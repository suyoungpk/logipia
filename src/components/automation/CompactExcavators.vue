<template>
  <section id="lp-section" class="lp-sub compact">
    <common-nav nowMenu="compact"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>밥캣이 만든 튼튼하고 강력한 명품. 굴삭기도 역시 두산 밥캣</span>
    </div>

    <div class="sub-wrap">      
      <div class="compact-info">
        <h1>
          밥캣이 만든 튼튼하고 강력한 명품 <br> 굴삭기도 역시 <span>두산 밥캣</span> 
        </h1>
        <ul class="section">
          <li class="secured">
            <p>신뢰의 보증</p>
            <span>
            기본 1년 2,000시간 선도래 <br> 보증을 제공합니다.<br> 문제없는 사후보증을 통해<br> 든든한 신뢰의 파트너가 되도록 하겠습니다.
            </span>
          </li>
          <li class="supply">
            <p>순정부품 공급</p>
            <span>
              본사에서 직접 운영하는<br>
              부품센터가 국내에 위치해<br>
              빠른 부품의 공급이 가능합니다.
            </span>
          </li>
          <li class="network">
            <p>선진화 된 네트워크</p>
            <span>
              차별화된 전국 네트워크망을 통해<br>
              전문적인 장비 상담부터 판매,<br>
              부품조달, 사후서비스에 이르기까지<br>
              One stop service 를 제공하고 있습니다.
            </span>
          </li>
        </ul>
      </div><!-- compact-info -->
      
      <div class="cobots-pc">
       <div class="compact-tabs">
        <ul class="tabs">
          <!-- <li><a href="javascript:void(0)" @click="activetab=1" :class="activetab==1?'on':''" >E08/E10</a></li> -->
          <li><a href="javascript:void(0)" @click="activetab=2"  :class="activetab==2?'on':''" >E20</a></li>
          <li><a href="javascript:void(0)" @click="activetab=3"  :class="activetab==3?'on':''" >E35/E35z</a></li>
        </ul>
          <!-- <div class="tabs-contents" v-if="activetab==1">
            <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
           <div class="answer">
            <div class="excavators-wrap">
               <div class="imgbox">
                  00<img src="../../assets/images/automation/bg-excavators02.png" alt="">
                   <button type="button" v-for="n in 5" :key="`A-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                   <div class="ext-float">
                    <ul>
                      <li v-for="n in 5" :key="`B-${n}`" :class="'float0'+n"></li>
                    </ul>
                  </div>
                </div>
            </div>
          </div> --> <!--// tabs-contents -->
          <div class="tabs-contents" v-if="activetab==2">
            <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
            <div class="answer">
              <div class="excavators-wrap">
                <div class="imgbox e20">
                    <img src="../../assets/images/automation/bg-excavators03.png" alt="">
                    <button type="button" v-for="n in 9" :key="`C-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                    <div class="ext-float">
                      <ul>
                        <li v-for="n in 9" :key="`D-${n}`" :class="'float0'+n"></li>
                      </ul>
                    </div><!--// ext-float -->
                </div><!--// imgbox -->
              </div><!-- // excavators-wrap -->
            </div><!-- answer -->
          </div> <!--// tabs-contents -->
          <div class="tabs-contents" v-if="activetab==3">
            <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
            <div class="answer">
              <div class="excavators-wrap">
                <div class="imgbox e35">
                  <img src="../../assets/images/automation/bg-excavators04.png" alt="">
                  <button type="button" v-for="n in 9" :key="`E-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                  <div class="ext-float">
                    <ul>
                      <li v-for="n in 9" :key="`F-${n}`" :class="'float0'+n"></li>
                    </ul>
                  </div><!--// ext-float -->
                </div><!--// imgbox -->
              </div><!--// excavators-wrap -->
            </div><!-- // answer -->
          </div> <!--// tabs-contents -->
       </div> <!--// compact-tabs -->
     </div><!--// cobots-pc -->
  
      <CompactList></CompactList> <!-- 모바일용-->
      <div class="btn-box pc-btn-box">
        <button type="button" class="btn btn-blue">카탈로그 다운로드</button>
      </div>

      <div class="btn-box m-btn-box">
        <button type="button" class="btn btn-dark"  v-on:click="popApply">상담 신청</button>
        <button type="button" class="btn btn-blue">카탈로그 다운로드</button>
      </div>

      <article class="rental-apply" id="rental-apply">  <!-- 200720 id 추가 -->
        <h4 class="rental-tlt">미니 굴삭기 상담 신청</h4>
        <p class="rental-article">미니 굴삭기 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
      </article>
      <a href="#rental-apply" class="btn-quick-menu phase2-pc phase2-tablet" >상담신청</a> <!-- 200720 추가 -->
      <div class="btn-box pc-btn-box"><button type="button" class="btn btn-dark">상담 신청</button></div>
    </div><!-- sub-wrap -->

    <!-- mobile 상담신청 popup -->
    <div id="pop-apply" class="popup-wrap type02">
        <div class="popup-box cst">
          <div class="popup-title">상담신청완료</div>
          <div class="popup-content">
            <article class="rental-apply m-apply">
        <h4 class="rental-tlt">미니 굴삭기 상담 신청</h4>
        <p class="rental-article">미니 굴삭기 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
          <button type="button" class="btn-popup-close" v-on:click="popApplyClose">팝업닫기</button>
        </div>
      </div><!-- //mobile 상담신청 popup -->
  </section>
</template>

<script>
import CompactList from '@/components/automation/CompactList'
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'

export default {
  name: 'CompactExcavators',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > Automation & Industrial > 미니굴삭기',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '밥캣이 만든 튼튼하고 강력한 명품. 굴삭기도 역시 두산 밥캣', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, Automation & Industrial, 미니굴삭기' },
      ]
  },
  components: {
    'common-nav': CommonNav,
     CompactList
  },
  data () {
    return {
      pageTitle: '미니굴삭기',
      activetab:2
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
     openLayer:function(e){
      var keyNum = e.target.innerText;
      var parent = e.target.parentElement;
       parent.querySelector('.float0'+keyNum).style.display="block";
    }
  },
  mounted(){
    window.addEventListener("click",function(e){
      if(!document.querySelector('.cobots-pc').querySelector('.excavators-wrap').contains(e.target)){
        var list= document.querySelector('.cobots-pc').querySelectorAll('.ext-float>ul>li');
        for(var i =0;i<list.length;i++)
           list[i].style.display="none"
      }
    })
  }
}
</script>