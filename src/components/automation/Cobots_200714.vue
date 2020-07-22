<template>
<section id="lp-section" class="lp-sub cobots">
  <common-nav nowMenu="cobots"></common-nav>
  <div class="tit-box">
    <h2>{{pageTitle}}</h2>
    <span>작업자와의 협업을 위한 최적의 파트너.</span>
  </div>
  <div class="sub-wrap">
    <div class="cobot-info">
      <h1>
        작업자와의 협업을 위한 최적의 파트너 <br> <span>The Cobot of The Future</span> 
      </h1>
      <div class="cobot-slide" id="owl">
        <carousel :items="1" :autoplay="false" :nav="false" :dots="false" :loop="true" :autoplayHoverPause="false" class="marginTop50">
          <div>
            <div class="slide-text">
              <p class="logo"><img src="@/assets/images/automation/logo-slide.png"></p>
              <span class="dsc">Value Enhancer</span>
              <h1 class="title">Doosan Robot<br>Accessory</h1>
              <p class="sub-title">다양한 기능 추가로 협동 로봇의 성능과<br>생산 효율성을 극대화 할 수 있습니다.</p>
            </div>
            <img src="@/assets/images/automation/bg-slide01.png">
          </div>
          <div>
            <div class="slide-text">
              <p class="logo"><img src="@/assets/images/automation/logo-slide.png"></p>
              <span class="dsc">Value Enhancer</span>
              <h1 class="title">Doosan Robot<br>Accessory</h1>
              <p class="sub-title">다양한 기능 추가로 협동 로봇의 성능과<br>생산 효율성을 극대화 할 수 있습니다.</p>
            </div>
            <img src="@/assets/images/automation/bg-slide01.png">
          </div>
        </carousel>
      </div><!--// cobot-slide -->
      <div class="cobots-pc">
        <div class="cobots-tabs">
          <ul class="tabs">
            <li><a href="javascript:void(0)" @click="activetab=1" :class="activetab==1?'on':''">Manipulator</a></li>
            <li><a href="javascript:void(0)" @click="activetab=2" :class="activetab==2?'on':''">Smart Vision Module</a></li>
            <li><a href="javascript:void(0)" @click="activetab=3" :class="activetab==3?'on':''">Doosan Robot Accessory</a></li>
          </ul>
          <div class="tabs-contents" v-if="activetab==1">
              <h1 class="award">Technical Specification</h1>
              <ul>
                <li class="tabs01">
                  <p class="blue">Sensitive &#38; Safe</p>
                  <span>- 토크 센서 기반의 정밀한 감지력과 월등한 안정성</span>
                </li>
                <li class="tabs02">
                  <p class="blue">Talented &#38; Skillful</p>
                  <span>- 세밀한 힘 제어를 통해 고난이도 작업수행</span>
                </li>
                <li class="tabs03">
                  <p class="blue">Reliable	&#38; Innovative</p>
                  <span>- 견고한 플랫폼 위에 구축된 고도의 제어 알고리즘</span>
                </li>
                <li class="tabs04">
                  <p class="blue">Intuitive &#38; Simple</p>
                  <span>- 스마트 기기의 직관적 사용성 그대로의 로봇 티칭</span>
                </li>
              </ul>
          </div><!--// tabs-contents -->
          <div class="tabs-contents module" v-if="activetab==2">
            <h1>Smart Vision Module</h1>
            <ul>
              <li class="tabs06">
                <p>로봇팔 끝단에 장착하여 <span class="blue">Plug &#38; Produce 형태</span>의 버전으로 <br> 다양한 공정에서 최상의 성능을 제공</p>
              </li>
              <li class="tabs07 line">
                <p>별도의 설치비용 없이 <span class="blue">손쉽고 빠른 장착</span>이 가능</p>
              </li>
              <li class="tabs08">
                <p>두산 로봇 고유의 <span class="blue">직관적인 사용자 인터페이스</span>로 구성되어<br> 간단한 조작만으로도 공정 설정 가능</p>
              </li>
            </ul>
          </div><!--// tabs-contents -->
          <div class="cobots-contents" v-if="activetab==3">
            <div class="tabs-contents acc-tabs01">
              <h1>Mobile Base</h1>
              <ul>
                <li class="tabs09">
                  <p>로봇과 컨트롤러, 터치 팬던트를 탑재하여 <br> 현장에서 <span class="blue">자유로운 이동 및 재배치</span>가능</p>
                </li>
                <li class="tabs10">
                  <p>Pallet, Laser, Scanner 등 다양한 주변기기 설치와<br> <span class="blue">작업 공구 보관이 용이하며 사용이 편리</span></p>
                </li>
              </ul>
              <ul class="tabs-box">
                <li class="dot-box01">
                  <p>로봇 설치 방향 이동 가능합니다.</p>
                </li>
                <li class="dot-box02">
                  <p>슬라이드 방식 서랍이 내장되어<br>
                    있어 컨트롤러 거치대나 <br>
                    공구함 등을 보관하실 수 <br>
                    있습니다. </p>
                </li>
                <li class="dot-box03">
                  <p>위치 고정용 조절좌가 있어 <br>
                    안정감있게 사용 할 수 있습니다.</p>
                </li>
              </ul>
            </div>
            <div class="tabs-contents acc-tabs02">
                <h1>Water jacket</h1>
                <ul>
                  <li class="tabs11">
                    <p>절삭기 보조작업 등에서 액체류에 의한 <span class="blue">로봇의<br> 오염을 방지</span>.</p>
                  </li>
                  <li class="tabs12">
                    <p><span class="blue">PU 코팅으로 수분의 침투를 이중으로 방지</span>하여<br> 두산로봇을 오랜 기간 최상의 상태로 사용할 수 있음.</p>
                  </li>
                </ul>
                <ul class="tabs-box">
                  <li class="dot-box04">
                    <p>사선으로 배치된 PVC 재질 링크<br>
                      조임부로 밀착력이 우수합니다.</p>
                  </li>
                  <li class="dot-box05">
                    <p>형상 맞춤 제작으로 관절부위<br>
                      움직임이 자유롭고 탈착이<br>
                      용이합니다. 특허원단을 <br>
                      사용하여 정전기를 방지합니다. </p>
                  </li>
                  <li class="dot-box06">
                    <p>투명창 부분으로<br>
                      Cockpit 기능을 활용 가능합니다.</p>
                  </li>
                </ul>
            </div>
            <div class="tabs-contents acc-tabs03">
                <h1>Dress Pack</h1>
                <ul>
                  <li class="tabs13">
                    <p>로봇 끝단의 툴에 연결되는 다양한 하네스를 정리하여<br>
                        <span class="blue">효율적인 작업</span>이 가능 현장에서 자유로운 이동 및 재배치가능</p>
                  </li>
                  <li class="tabs14">
                    <p>튜브 브라켓과 홀더의 <span class="blue">일체형 방식</span>으로 간편한 정리가<br>
                        가능하며, 로봇 탈착 및 위치 변경도 매우 용이 작업 공구 보관이 용이</p>
                  </li>
                </ul>
                <ul class="tabs-box">
                  <li class="dot-box07">
                    <p>원터치 튜브 홀더로 하네스<br>
                      곡률 조정이 가능합니다.</p>
                  </li>
                  <li class="dot-box08">
                    <p>벨크로 적용으로 로봇 탈착 및<br>
                      위치 변경이 용이합니다.</p>
                  </li>
                  <li class="dot-box09">
                    <p>내부 베어링 구조 적용으로<br>
                      큰 반경의 움직임도 <br> 
                      무리없이 사용이 가능합니다.</p>
                  </li>
                </ul>
            </div>
          </div><!--// tabs-contents -->
        </div> <!--// cobots-tabs -->
        <div class="cobots-expl">
          <h1>Best - In - Class</h1>
          <ul class="min">
            <li>
              - 업계 최고 수준의 힘 감지력과 충돌 민감도를 갖춘 6측 다관절 로봇
            </li>
            <li>
              - 토크 센서를 탑재하여 뛰어난 안정성을 확보하며 힘 제어를 통해 다양한 정밀작업 가능
            </li>
            <li>
              - 다양한 가반충량과 작업반경으로 고객 니즈에 따른 최적의 협동로봇 자동화 솔루션 제공
            </li>
          </ul>
        </div><!--// cobots-expl -->
        <div class="cobot-list-wrap">
          <dl>
            <dt class="cobot-list01">
              <p>
                M0609
              </p>
              <ul>
                <li>가반 중량 6Kg</li>
                <li>작업반경 0.9m 로봇 </li>
                <li>좁은 공간에서의 <br> 빠른 반복 작업에 최적화</li>
              </ul>
            </dt>
              <dt class="cobot-list02">
              <p>
                M1509
              </p>
              <ul>
                <li>업계 최대 가반중량 15Kg</li>
                <li>작업반경 0.9m 로봇</li>
                <li>사람에게 부담이 되는 <br>중량물 작업에 효과적</li>
              </ul>
            </dt>
              <dt class="cobot-list03">
              <p>
                M1013
              </p>
              <ul>
                <li>가반중량 10Kg</li>
                <li>작업반경 1.3m 로봇</li>
                <li>모든 작업 공정에 적합한<br> 기본 모델</li>
              </ul>
            </dt>
              <dt class="cobot-list04">
              <p>
                M0617
              </p>
              <ul>
                <li>가반중량 6Kg</li>
                <li>업계 최장의 작업반경 1.7m로봇</li>
                <li>2개 이상의 작업 공정에 대응하거나<br>원거리 작업 시 최고의 효율발휘</li>
              </ul>
            </dt>
          </dl>
        </div><!-- cobot-list-wrap -->
      </div> <!--// cobots-pc -->
      <CobotsList></CobotsList>
      <div class="btn-box"><button type="button" class="btn btn-blue">카탈로그 다운로드</button></div>

      <article class="rental-apply">
        <h4 class="rental-tlt">협동로봇 상담 신청</h4>
        <p class="rental-article">협동로봇 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
      <div class="btn-box"><button type="button" class="btn btn-dark">상담 신청</button></div>
    </div><!-- cobot-info -->
    <div class="btn-box m-btn-box">
      <button type="button" class="btn btn-dark"  @click="popApply">상담 신청</button>
      <button type="button" class="btn btn-blue">카탈로그 다운로드</button>
    </div>
  </div><!-- sub-wrap -->
  <!-- mobile 상담신청 popup -->
  <div id="pop-apply" class="popup-wrap type02">
    <div class="popup-box cst">
      <!-- <div class="popup-title">상담신청완료</div> -->
      <div class="popup-content">
        <article class="rental-apply m-apply">
          <h4 class="rental-tlt">협동로봇 상담 신청</h4>
          <p class="rental-article">협동로봇 상담 신청하시면, 담당자가 확인하여 빠르게 답변드리겠습니다.</p>
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
      <button type="button" class="btn-popup-close" v-on:click="popApplyClose">팝업닫기</button>
    </div>
  </div><!-- //mobile 상담신청 popup -->
</section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import carousel from 'vue-owl-carousel'
import CobotsList from '@/components/automation/CobotsList'

export default {
  name: 'Cobots',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > Automation & Industrial > 협동 로봇',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '작업자와의 협업을 위한 최적의 파트너. The Cobot of The Future', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, Automation & Industrial, 협동 로봇' },
      ]
  },
  components: {
    'common-nav': CommonNav,
     carousel,
     CobotsList
  },
  data () {
    return {
      pageTitle: '협동 로봇',
      activetab: 1,
      playCarousel: null
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
    }
  }
}
</script>