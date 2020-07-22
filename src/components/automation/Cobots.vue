<template>
<section id="lp-section" class="lp-sub cobots">
  <common-nav nowMenu="cobots"></common-nav>
  <div class="tit-box">
    <h2>{{pageTitle}}</h2>
    <span>작업자와의 협업을 위한 최적의 파트너.</span>
  </div>
  <div class="sub-wrap">
    <div class="cobot-info">
      <h1><strong>Collaborative Robot Solution for Better Life</strong></h1>
      <div class="cobot-slide" id="owl">
        <carousel ref="owl" :items="1" :autoplay="false"  dotsContainer="true, .indicator" navElement="a" :loop="true" :autoplayHoverPause="false">
          <div><img src="../../assets/images/automation/cobots-slide01.png" alt="Masterpiece M-Series"></div>
          <div><img src="../../assets/images/automation/cobots-slide02.png" alt="Almighty A-Series"></div>
          <div><img src="../../assets/images/automation/cobots-slide03.png" alt="High-power H-Series"></div>
        </carousel>
      </div><!--// cobot-slide -->
      <div class="cobots-pc">
        <div class="cobots-tabs">
           <ul class="tabs indicator">
            <li><button type="button" @click="activetab=1" :class="activetab==1?'on':''">M-SERIES</button></li>
            <li><button type="button" @click="activetab=2" :class="activetab==2?'on':''">A-SERIES</button></li>
            <li><button type="button" @click="activetab=3" :class="activetab==3?'on':''">H-SERIES</button></li>
          </ul>
          <div class="tabs-contents mSeries" v-if="activetab==1">
              <h2>주요 장점</h2>
              <ul>
                <li class="tabs01">
                  <p class="blue">Master&#43; 안전성</p>
                  <span>고성능 토크센서 탑재로 0.2N 수준의 미세한 힘 변화를 감지함은 물론, 업계 최고 수준의 충돌민감도를 통한 빈틈없는 안전성을 실현합니다.</span>
                </li>
                <li class="tabs02">
                  <p class="blue">Master&#43; 힘 제어</p>
                  <span>6개의 고성능 토크센서가 섬세하고 정교한 작업이 가능한 고도의 힘 제어 & 순응제어 기술을 완성합니다.</span>
                </li>
                <li class="tabs03">
                  <p class="blue">Master&#43; 작업관리</p>
                  <span>티치 팬던트에 탑재된 워크셀 매니저 하나로, 복잡하고 어려운 작업 환경을 쉽고 간편하게 관리할 수 있습니다.</span>
                </li>
                <li class="tabs04">
                  <p class="blue">Master&#43; 셋업</p>
                  <span>스마트 셋업 기능이 로봇 설치 경사각과 툴 위치 및 무게 등을 자동으로 측정해 빠른 설치는 물론 즉시 현장 투입이 가능합니다.</span>
                </li>
              </ul>
              <div class="cobot-info">
                <div class="package-info">
                  <h2>기본 구성품</h2>
                  <ul>
                    <li>
                      <div class="title">제어기</div>
                      <div class="cont">
                          <div class="imgwrap">컨트롤러 이미지</div>
                          <div class="txtwrap">
                              최신 통신 기술이 모두 지원되어 각종 자동화 설비 및 주변기기와 쉽게 인터페이스가 가능한 컨트롤러 
                          </div>
                      </div>
                    </li>
                    <li>
                      <div class="title">티치 팬던트</div>
                      <div class="cont">
                          <div class="imgwrap">티치 팬던트 이미지</div>
                          <div class="txtwrap">
                              태블릿 PC와 같은 우수한 사용감과 DART Platform 탑재로 간단한 프로그래밍부터 다양한 애플리케이션 구성이 가능한 티칭 디바이스
                          </div>
                      </div>
                    </li>
                  </ul>
                </div> <!--// package-info" -->
                <div class="cobots-expl">
                  <h2>Masterpiece M-SERIES</h2>
                   <ul class="min">
                    <li>
                      - 최고사양을 고집한 프리미엄 로봇, M시리즈!
                    </li>
                    <li>
                      - 고성능 6축 토크센서로 정교한 작업이 가능하고
                    </li>
                    <li>
                      - 최고 수준 충돌민감도로 최상의 안전성을 제공합니다.
                    </li>
                  </ul>
                </div><!--// cobots-expl -->
                <div class="cobot-list-wrap">
                  <ul>
                    <li class="item cobot-mlist01">
                      <p><strong>M0609</strong></p>
                      <ul>
                        <li>가반중량 6Kg</li>
                        <li>작업 반경 900mm </li>
                      </ul> 
                    </li>
                     <li class="item cobot-mlist02">
                      <p><strong>M0617</strong></p>
                      <ul>
                        <li>가반중량 15Kg</li>
                        <li>작업 반경 900mm</li>
                      </ul> 
                    </li>
                     <li class="item cobot-mlist03">
                      <p><strong>M1013</strong></p>
                      <ul>
                        <li>가반중량 10Kg</li>
                        <li>작업 반경 1300mm</li>
                      </ul> 
                    </li>
                     <li class="item cobot-mlist04">
                      <p><strong>M1509</strong></p>
                      <ul>
                        <li>가반중량 6Kg</li>
                        <li>작업 반경 1700mm </li>
                      </ul> 
                    </li>
                  </ul>
                </div><!-- cobot-list-wrap -->
              </div> <!--// cobot-info -->
          </div><!--// tabs-contents -->
          <div class="tabs-contents aSeries module" v-if="activetab==2">
            <h2>주요 장점</h2>
            <ul>
              <li class="tabs01">
                <p class="blue">A&#43; 안전성</p>
                <p>전류기반 충돌감지의 한계를 뛰어넘은 첨단 세이프티 알고리즘으로 작업자의 안전을 보호합니다.</p>
              </li>
              <li class="tabs05">
                <p class="blue">A&#43; 스피드</p>
                <p>두산의 기술력과 고사양 하드웨어로 완성된 업계 최고 속도와 우수한 가속성으로 어떤 작업도 신속하고 완벽하게 수행합니다.</p>
              </li>
              <li class="tabs06">
                <p class="blue">A&#43; 커스터마이징</p>
                <p>공정별 요구 성능에 따라 추가로 장착 가능한 고성능 힘 센서로 사람의 손재주가 필요한 섬세한 작업을 더욱 정밀하게 수행합니다.</p>
              </li>
              <li class="tabs07">
                <p class="blue">A&#43; ROI</p>
                <p>단축된 사이클 타임과 높은 가성비로 효율성과 생산성을 극대화 시켜 최단기간 내 투자 회수가 가능합니다.</p>
              </li>
            </ul>
            <div class="cobot-info">
              <div class="package-info">
                <h2>기본 구성품</h2>
                <ul>
                  <li>
                    <div class="title">제어기</div>
                    <div class="cont">
                        <div class="imgwrap">이미지</div>
                        <div class="txtwrap">
                            실시간 제어 및 고속 통신기술을 기반으로 터프한 산업 현장에서도 안정된 성능을 보장하는 견고한 컨트롤러
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">DART 플랫폼</div>
                    <div class="cont">
                        <div class="imgwrap">이미지</div>
                        <div class="txtwrap">
                            PC에서도 로봇 조작 및 다양한 프로그래밍이 가능한 두산로봇 사용자 플랫폼 
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">비상 정지 버튼</div>
                    <div class="cont">
                        <div class="imgwrap">이미지</div>
                        <div class="txtwrap">
                            안전사고를 예방하기 위해 위험 상황에 로봇을 단숨에 정지시키는 안전 버튼
                        </div>
                    </div>
                  </li>
                </ul>
              </div> <!--// package-info" -->
              <div class="cobots-expl">
                <h2>Almighty A-SERIES</h2>
                <ul class="min">
                    <li>
                      - 코봇이 필요한 곳, 어디서나 도입이 용이한 A시리즈!
                    </li>
                    <li>
                      - 경쟁 코봇 대비 우월한 속도와 경제성으로
                    </li>
                    <li>
                      - 코봇 도입을 망설이는 고객에게 정답을 제시합니다.
                    </li>
                  </ul>
              </div><!--// cobots-expl -->
              <div class="cobot-list-wrap">
                <ul>
                    <li class="item cobot-alist01">
                      <p><strong>A0509</strong></p>
                      <ul>
                        <li>가반중량 5Kg</li>
                        <li>작업 반경 900mm </li>
                      </ul> 
                    </li>
                     <li class="item cobot-alist02">
                      <p><strong>A0509s</strong></p>
                      <ul>
                        <li>가반중량 5Kg</li>
                        <li>작업 반경 900mm</li>
                      </ul> 
                    </li>
                     <li class="item cobot-alist03">
                      <p><strong>A0912</strong></p>
                      <ul>
                        <li>가반중량 9Kg</li>
                        <li>작업 반경 1200mm</li>
                      </ul> 
                    </li>
                     <li class="item cobot-alist04">
                      <p><strong>A0912s</strong></p>
                      <ul>
                        <li>가반중량 9Kg</li>
                        <li>작업 반경 1200mm </li>
                      </ul> 
                    </li>
                  </ul>
              </div><!-- cobot-list-wrap -->
            </div> <!--// cobot-info -->
          </div><!--// tabs-contents -->
          <div class="tabs-contents hSeries cobots-contents" v-if="activetab==3">
            <h2>주요 장점</h2>
            <ul>
              <li class="tabs08">
                <p class="blue">High&#43; 가반하중</p>
                <p>최대 20kg에 달하는 중량물도 손쉽게 운영이 가능한 압도적인 가반하중을 경험할 수 있습니다.</p>
              </li>
              <li class="tabs01">
                <p class="blue">High&#43; 안전성</p>
                <p>6개 토크센서와 중력보상 알고리즘으로 구현되는 업계 최고의 충돌민감도로 작업자의 안전을 철저히 보호합니다.</span></p>
              </li>
              <li class="tabs09">
                <p class="blue">High&#43; 유연성</p>
                <p>동급 협동로봇 절반 수준의 경량화로 현장에서 로봇 재배치가 쉽고, ARM 결합 및 설치도 간편해 더욱 유연한 작업환경 셋팅이 가능합니다.</p>
              </li>
              <li class="tabs10">
                <p class="blue">High&#43; 생산성</p>
                <p>높은 가반하중을 기반으로 동시에 여러 작업물을 핸들링할 수 있어 보다 높은 생산성을 제공합니다.</span></p>
              </li>
            </ul>
            <div class="cobot-info">
              <div class="package-info">
                <h2>기본 구성품</h2>
                <ul>
                  <li>
                    <div class="title">제어기</div>
                    <div class="cont">
                        <div class="imgwrap">컨트롤러 이미지</div>
                        <div class="txtwrap">
                            최신 통신 기술이 모두 지원되어 각종 자동화 설비 및 주변기기와 쉽게 인터페이스가 가능한 컨트롤러 
                        </div>
                    </div>
                  </li>
                  <li>
                    <div class="title">티치 팬던트</div>
                    <div class="cont">
                        <div class="imgwrap">티치 팬던트 이미지</div>
                        <div class="txtwrap">
                            태블릿 PC와 같은 우수한 사용감과 DART Platform 탑재로 간단한 프로그래밍부터 다양한 애플리케이션 구성이 가능한 티칭 디바이스
                        </div>
                    </div>
                  </li>
                </ul>
              </div> <!--// package-info" -->
              <div class="cobots-expl">
                <h2>High-Power H-SERIES</h2>
                <ul class="min">
                  <li>
                    - 현존 코봇 중 가장 우수한 힘을 가진 H시리즈!
                  </li>
                  <li>
                    - 가반하중 25kg의 놀라운 힘과 6축 토크센서로
                  </li>
                  <li>
                    - 어떤 작업에도 안전한 작업환경을 제공합니다.
                  </li>
                </ul>
              </div><!--// cobots-expl -->
              <div class="cobot-list-wrap">
                <ul>
                  <li class="item cobot-hlist01">
                    <p><strong>H2017</strong></p>
                    <ul>
                      <li>가반중량 20Kg</li>
                      <li>작업 반경 1700mm </li>
                    </ul> 
                  </li>
                  <li class="item cobot-hlist02">
                    <p><strong>H2515</strong></p>
                    <ul>
                      <li>가반중량 5Kg</li>
                      <li>작업 반경 1500mm</li>
                    </ul> 
                  </li>
                </ul>
              </div><!-- cobot-list-wrap -->
            </div> <!--// cobot-info -->
          </div><!--// tabs-contents -->
        </div> <!--// cobots-tabs -->
      </div> <!--// cobots-pc -->
      <CobotsList></CobotsList>
      <div class="btn-box">
        <button type="button" class="btn btn-blue btn-download">카탈로그 다운로드</button>
        <a href="https://www.doosanrobotics.com/ko/products/accessory" class="btn btn-b-line btn-outlink" title="새 창" target="_blank">악세서리</a>
      </div>
      <article class="rental-apply" id="rental-apply">  <!-- 200720 id 추가 -->
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
      <a href="#rental-apply" class="btn-quick-menu phase2-pc phase2-tablet" >상담신청</a> <!-- 200720 추가 -->
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