<template>
<div class="compact-tabs">
  <div class="accordion-wrap">
    <ul class="accordion">
      <li class="accordion-item">
        <h3 class="tabs-view">
          <span class="question">M-SERIES</span><button class="btn-open" @click="answer" title="열기"></button>
        </h3>
        <div class="answer">
          <div class="excavators-wrap">
            <div class="cobots-tabs">
              <div class="tabs-contents mSeries">
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
              </div> <!--// tabs-contents -->
            </div> <!--// cobots-tabs -->
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
                  <h2>Best - In - Class</h2>
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
                      <div class="m-list">
                        <p><strong>M0609</strong></p>
                        <ul>
                          <li>가반 중량 6Kg</li>
                          <li>작업반경 900mm </li>
                        </ul> 
                      </div>
                    </li>
                     <li class="item cobot-mlist02">
                      <div class="m-list">
                        <p><strong>M0617</strong></p>
                        <ul>
                          <li>가반중량 15Kg</li>
                          <li>작업반경 900mm</li>
                        </ul> 
                      </div>
                    </li>
                     <li class="item cobot-mlist03">
                      <div class="m-list">
                        <p><strong>M1013</strong></p>
                        <ul>
                          <li>가반중량 10Kg</li>
                          <li>작업반경 1300mm</li>
                        </ul> 
                      </div>
                    </li>
                     <li class="item cobot-mlist04">
                      <div class="m-list">
                        <p><strong>M1509</strong></p>
                        <ul>
                          <li>가반 중량 6Kg</li>
                          <li>작업반경 1700mm </li>
                        </ul> 
                      </div>
                    </li>
                  </ul>
                </div><!-- cobot-list-wrap -->
              </div> <!--// cobot-info -->
          </div><!--// excavators-wrap -->
        </div><!--// answer -->
      </li>
      <li class="accordion-item">
        <h3 class="tabs-view">
          <span class="question">A-SERIES</span><button class="btn-open" @click="answer" title="열기"></button>
        </h3>
        <div class="answer">
          <div class="excavators-wrap">
            <div class="cobots-tabs">
              <div class="tabs-contents aSeries module">
                  <h2>주요 장점</h2>
                  <ul>
                    <li class="tabs05">
                      <p class="blue">A&#43; 안전성</p>
                      <p>전류기반 충돌감지의 한계를 뛰어넘은 첨단 세이프티 알고리즘으로 작업자의 안전을 보호합니다.</p>
                    </li>
                    <li class="tabs06">
                      <p class="blue">A&#43; 스피드</p>
                      <p>두산의 기술력과 고사양 하드웨어로 완성된 업계 최고 속도와 우수한 가속성으로 어떤 작업도 신속하고 완벽하게 수행합니다.</p>
                    </li>
                    <li class="tabs07">
                      <p class="blue">A&#43; 커스터마이징</p>
                      <p>공정별 요구 성능에 따라 추가로 장착 가능한 고성능 힘 센서로 사람의 손재주가 필요한 섬세한 작업을 더욱 정밀하게 수행합니다.</p>
                    </li>
                    <li class="tabs08">
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
                      <h2>Best - In - Class</h2>
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
                          <div class="m-list">
                            <p><strong>A0509</strong></p>
                            <ul>
                              <li>가반 중량 5Kg</li>
                              <li>작업반경 900mm </li>
                            </ul> 
                          </div>
                        </li>
                        <li class="item cobot-alist02">
                          <div class="m-list">
                            <p><strong>A0509s</strong></p>
                            <ul>
                              <li>가반중량 5Kg</li>
                              <li>작업반경 900mm</li>
                            </ul> 
                          </div>
                        </li>
                        <li class="item cobot-alist03">
                          <div class="m-list">
                            <p><strong>A0912</strong></p>
                            <ul>
                              <li>가반중량 9Kg</li>
                              <li>작업반경 1200mm</li>
                            </ul> 
                          </div>
                        </li>
                        <li class="item cobot-alist04">
                          <div class="m-list">
                            <p><strong>A0912s</strong></p>
                            <ul>
                              <li>가반 중량 9Kg</li>
                              <li>작업반경 1200mm </li>
                            </ul> 
                          </div>
                        </li>
                      </ul>
                  </div><!-- cobot-list-wrap -->
                </div> <!--// cobot-info -->
              </div><!--// tabs-contents -->
            </div><!--// cobots-tabs -->
          </div><!--// excavators-wrap -->
        </div> <!--// answer -->
      </li>
      <li class="accordion-item">
        <h3 class="tabs-view">
          <span class="question">H-SERIES</span><button class="btn-open" @click="answer" title="열기"></button>
        </h3>
        <div class="answer">
          <div class="excavators-wrap">
            <div class="cobots-tabs">
              <div class="tabs-contents hSeries">
                  <h2>주요 장점</h2>
                  <ul>
                    <li class="tabs09">
                      <p class="blue">High&#43; 가반하중</p>
                      <p>최대 20kg에 달하는 중량물도 손쉽게 운영이 가능한 압도적인 가반하중을 경험할 수 있습니다.</p>
                    </li>
                    <li class="tabs10">
                      <p class="blue">High&#43; 안전성</p>
                      <p>6개 토크센서와 중력보상 알고리즘으로 구현되는 업계 최고의 충돌민감도로 작업자의 안전을 철저히 보호합니다.</span></p>
                    </li>
                    <li class="tabs11">
                      <p class="blue">High&#43; 유연성</p>
                      <p>동급 협동로봇 절반 수준의 경량화로 현장에서 로봇 재배치가 쉽고, ARM 결합 및 설치도 간편해 더욱 유연한 작업환경 셋팅이 가능합니다.</p>
                    </li>
                    <li class="tabs12">
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
                      <h2>Best - In - Class</h2>
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
                          <div class="m-list">
                            <p><strong>H2017</strong></p>
                            <ul>
                              <li>가반 중량 20Kg</li>
                              <li>작업반경 1700mm </li>
                            </ul>
                          </div> 
                        </li>
                        <li class="item cobot-hlist02">
                          <div class="m-list">
                            <p><strong>H2515</strong></p>
                            <ul>
                              <li>가반중량 5Kg</li>
                              <li>작업반경 1500mm</li>
                            </ul> 
                          </div> 
                        </li>
                      </ul>
                    </div><!-- cobot-list-wrap -->
                  </div> <!--// cobot-info -->
              </div><!--// tabs-contents -->
            </div> <!--// cobots-tabs -->
          </div><!--// excavators-wrap -->
        </div><!--// answer -->
      </li>
    </ul>
  </div><!-- // accordion-wrap -->
</div><!--// compact-tabs -->
</template>

<script>
export default {
  name: 'CompactList',
  components: {
   
  },
  data () {
    return {
    }
  },
  methods: {
    answer: function (event) {
      if (event.target.parentElement.parentElement.classList.contains('active')) {
        event.target.parentElement.parentElement.classList.remove('active')
        event.target.title = '보기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 0 + 'vh'
      } else {
        this.closeAnswer()
        event.target.parentElement.parentElement.classList.add('active')
        event.target.title = '닫기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 1000 + 'vh'
      }
    },
    closeAnswer: function () {
      var i
      for (i = 0; i < document.getElementsByClassName('accordion-item').length; i++) {
        document.getElementsByClassName('accordion-item')[i].classList.remove('active')
        document.getElementsByClassName('btn-open')[i].title = '열기'
        document.getElementsByClassName('answer')[i].style.maxHeight = 0 + 'vh'
      }
    },
    FirstAnswerOpen: function () {
      document.getElementsByClassName('accordion-item')[0].classList.add('active')
      document.getElementsByClassName('accordion-item')[0].getElementsByClassName('btn-open')[0].title = '닫기'
      document.getElementsByClassName('accordion-item')[0].getElementsByClassName('answer')[0].style.maxHeight = 1000 + 'vh'
    }
  },
  mounted: function () {
    this.FirstAnswerOpen()
  }
}
</script>