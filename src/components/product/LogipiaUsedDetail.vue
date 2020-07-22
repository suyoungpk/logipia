<template>
  <section id="lp-section" class="lp-sub popup eqipdtl">
    <common-nav nowMenu="eqip"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 중고장비 거래장터입니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="gallery-box">
        <h3 class="tit-name"><strong>2017 두산 LPG G33S-5017 두산 LPG G33S-5</strong>
          <span class="bage certify">두산인증</span><!-- 플래그 : 두산인증 -->
          <span class="bage recommend">추천제품</span><!-- 플래그 : 추천제품 -->
          <span class="bage new">신규등록</span><!-- 플래그 : 신규등록 -->
          <span class="bage complete">판매완료</span><!-- 플래그 : 판매완료 -->
        </h3>
        <!-- slide-box -->
        <!-- PC용 겔러리 -->
        <div class="slide-box pc">
          <div class="view on">
            <img src="../../assets/images/img-eqip-gallery.jpg" alt="상품 이미지">
            <button type="button" class="btn-expand" v-on:click="openExpand">이미지 크게보기</button>
          </div>
          <div class="view">
            <img src="../../assets/images/img-eqip-gallery02.jpg" alt="상품 이미지">
            <button type="button" class="btn-expand" v-on:click="openExpand">이미지 크게보기</button>
          </div>
          <div class="view">
            <img src="../../assets/images/img-eqip-gallery03.jpg" alt="상품 이미지">
            <button type="button" class="btn-expand" v-on:click="openExpand">이미지 크게보기</button>
          </div>
          <div class="view">
            <img src="../../assets/images/img-eqip-gallery04.jpg" alt="상품 이미지">
            <button type="button" class="btn-expand" v-on:click="openExpand">이미지 크게보기</button>
          </div>
          <div class="view">
            <img src="../../assets/images/ico-no-img.jpg" class="no-img" alt="상품 이미지"><!-- 이미지 없을 경우 -->
          </div>
          <div id="openExp" class="popup-wrap expand">
            <div class="popup-box">
              <div class="popup-content">
                <img src="../../assets/images/img-eqip-gallery03.jpg" alt="상품 이미지">
              </div>
              <button type="button" class="btn-popup-close" v-on:click="closeExpand">팝업닫기</button>
            </div>
          </div>
          <ul class="list">
            <li class="photo">
              <button type="button" v-on:click="currentSlide(1)"><img class="img active" src="../../assets/images/img-eqip-gallery.jpg" alt="상품 이미지"></button>
            </li>
            <li class="photo">
              <button v-on:click="currentSlide(2)"><img class="img" src="../../assets/images/img-eqip-gallery02.jpg" alt="상품 이미지"></button>
            </li>
            <li class="photo">
              <button v-on:click="currentSlide(3)"><img class="img" src="../../assets/images/img-eqip-gallery03.jpg" alt="상품 이미지"></button>
            </li>
            <li class="photo">
              <button v-on:click="currentSlide(4)"><img class="img" src="../../assets/images/img-eqip-gallery04.jpg" alt="상품 이미지"></button>
            </li>
            <li class="photo">
              <img class="img" src="../../assets/images/ico-no-img.jpg" alt="상품 이미지"><!-- 이미지 없을 경우 -->
            </li>
          </ul>
        </div>
        <!-- //PC용 겔러리 -->
        <!-- 모바일용 겔러리 -->
        <div class="slide-box">
          <hooper :touchDrag="true" :shortDrag="true">
            <slide>
              <img src="../../assets/images/img-eqip-gallery.jpg" alt="상품 이미지">
            </slide>
            <slide>
              <img src="../../assets/images/img-eqip-gallery02.jpg" alt="상품 이미지">
            </slide>
            <slide>
              <img src="../../assets/images/img-eqip-gallery03.jpg" alt="상품 이미지">
            </slide>
            <slide>
              <img src="../../assets/images/img-eqip-gallery04.jpg" alt="상품 이미지">
            </slide>
            <slide>
              <img src="../../assets/images/img-eqip-gallery.jpg" alt="상품 이미지">
            </slide>
            <hooper-pagination slot="hooper-addons" mode="fraction"></hooper-pagination>
          </hooper>
        </div>
        <!-- //모바일용 겔러리 -->
        <!-- //slide-box -->
        <!-- info-box -->
        <div class="info-box">
          <div class="list-box">
            <dl class="prod-info">
              <dt>모델명</dt>
              <dd>G33S-5</dd>
              <dt>동력/탑승</dt>
              <dd>LPG</dd>
              <dt>적재능력</dt>
              <dd>1톤</dd>
              <dt>마스트</dt>
              <dd>2(STD) 3230mm</dd>
              <dt>연식</dt>
              <dd>2017년</dd>
              <dt>가동시간</dt>
              <dd>1,234시간</dd>
              <dt>장비소재지</dt>
              <dd>경기도 평택시 청북읍</dd>
            </dl>
            <ul class="m-prod-info">
              <li>
                <span>두산 G33S-5</span>
                <span>LPG</span>
                <span>1톤</span>
                <span>2STD(STD) 3230mm</span>
              </li>
              <li>
                <span>2017년</span>
                <span>34시간</span>
                <span>경기도 평택시 청북읍</span>
              </li>
            </ul>
            <div class="seller-info">
              <button type="button" v-on:click="sel_btn" class="btn">판매자정보 보기</button>
              <ul>
                <li><span class="tit">판매자</span><span class="center">:</span><span class="txt">로지피아</span></li>
                <li><span class="tit">담당자</span><span class="center">:</span><span class="txt">김관리</span></li>
                <li><span class="tit">전화번호</span><span class="center">:</span><span class="txt">031-681-9900</span></li>
                <li><span class="tit">핸드폰</span><span class="center">:</span><span class="txt">031-681-9900</span></li>
              </ul>
            </div>
          </div>
          <dl class="price-box">
            <dt>판매가격</dt>
            <dd><em>12,220</em><span>만원</span></dd>
          </dl>
          <div class="btn-box">
            <span class="chk">
              <input  type="checkbox" name="eqipdtl" id="eqipdtl" />
              <label for="eqipdtl">관심장비등록</label>
            </span>
            <button type="button" class="btn inquiry" v-on:click="popPur">구매문의</button>
          </div>
          <!-- 구매문의 popup -->
          <div id="pop-pur" class="popup-wrap">
            <div class="popup-box">
              <div class="popup-title">
                구매문의
              </div>
              <div class="popup-content">
                <div class="tbl-inp">
                  <p class="txt-tip">※ 이름과 핸드폰 번호를 남겨주시면 연락드리겠습니다.</p>
                  <div class="inp">
                    <div class="tbl">
                      <dl>
                        <dt><span class="mark">필수항목</span><label for="pop1-type01">이름</label></dt>
                        <dd><input  type="text" name="pop1-type01" id="pop1-type01" class="inp-text" placeholder="이름을 입력해주세요."/></dd>
                      </dl>
                      <dl>
                        <dt><span class="mark">필수항목</span><label for="pop1-type02">핸드폰</label></dt>
                        <dd><input  type="text" name="pop1-type02" id="pop1-type02" class="inp-text" placeholder="'-'를 뺴고 입력해주세요. 예시) 01012345678"/></dd>
                      </dl>
                      <dl>
                        <dt><span class="mark">필수항목</span><label for="pop1-type03">문의사항</label></dt>
                        <dd><textarea class="inp-textarea" name="pop1-type03" id="pop1-type03" placeholder="내용을 입력해주세요."></textarea></dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="terms-area">
                  <p class="inp-chk-b">
                    <span>
                      <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_01_01" />
                      <label for="eqip_radio_01_01">개인정보 수집 및 이용에 동의합니다.</label>
                    </span>
                  </p>
                  <div class="terms-box pop">
                    <h4>개인정보 수집 및 이용동의 약관</h4>
                    <ol class="t-list">
                      <li>
                        ① “회사”가 회원님의 회원가입 및 서비스 이용 시 수집하는 개인정보 항목과 그 수집ᆞ이용의 주된 목적은 다음과 같습니다.
                        <h5>수집항목</h5>
                        <p>이름, 휴대폰번호, 문의내용</p>
                        <h5>수집〮이용 목적</h5>
                        <ol>
                          <li>· 차량 구매 문의 답변</li>
                          <li>· 회원혜택, 약관변경, 고지사항 전달, 본인의사 확인, 불만처리 등 원활한 의사소통 경로의 확보</li>
                          <li>· 신규서비스 개발 및 맞춤형 서비스 제공과 광고 게재, 서비스이용에 대한 통계 작성</li>
                        </ol>
                        <h5>보유 기간</h5>
                        <p>문의 시점으로부터 000일간 또는 개인정보 유효기간 도래 시까지 보관 단, 관계 법령에 따라 고객님의 개인정보를 보존하여야 하는 경우, 회사는 해당 법령에서 정한 기간 동안 보관</p>
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
                              <li>- 보존기간 : 3개월</li>
                            </ul>
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
                    <p>“회사”는 회원에 대한 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁받은 업체가 관련 법률에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리·감독을 하고 있습니다. “회사”가 처리를 위탁하는 개인정보는 다음과 같습니다.</p>
                    <h5>수탁자 / 처리위탁업무</h5>
                    <ul class="t-list">
                      <li>㈜두산 디지털이노베이션 / 정보전산 처리 및 유지/관리</li>
                      <li>㈜다우기술 / 국내 문자발송 프로그램 유지/보수</li>
                      <li>나이스평가정보㈜ / 본인인증 서비스 제공</li>
                    </ul>
                  </div>
                </div>
                <div class="btn-box"><button type="button" class="btn btn-navy">신청하기</button></div>
              </div>
              <button type="button" class="btn-popup-close" v-on:click="popPurClose">팝업닫기</button>
            </div>
          </div>
          <!-- //구매문의 popup -->
        </div>
        <!-- //info-box -->
      </div>
      <div class="prod-detail">
        <ul class="tabs">
          <li><a href="javascript:void(0);" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'on' : '' ]">차량정보</a></li>
          <li><a href="javascript:void(0);" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'on' : '' ]">성능점검</a></li>
          <li><a href="javascript:void(0);" v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'on' : '' ]">구매가이드</a></li>
        </ul>
        <div class="tab-con">
          <div v-if="activetab === 1" class="tabcontent dtl-car">
            <article>
              <h3 class="dtl-tit">상세정보</h3>
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
                <dl>
                  <dt>최근정비일</dt>
                  <dd>2019.04.05</dd>
                  <dt>A/S 유무</dt>
                  <dd>양호</dd>
                  <dt>전동차 배터리 상태</dt>
                  <dd>선택없음</dd>
                  <dt>전체상태</dt>
                  <dd>양호</dd>
                </dl>
              </div>
            </article>
            <article class="dtl-opt">
              <h3 class="dtl-tit">옵션정보</h3>
              <ul class="tbl-line">
                <li>
                  <span>케빈타입A : 선택없음</span>
                  <span>케빈타입B</span>
                  <span>케빈타입C</span>
                  <span class="chk">캐빈타입D</span>
                </li>
                <li>
                  <span class="chk">ATT타입SS</span>
                  <span>ATT타입자동편개식</span>
                  <span class="chk">ATT타입자동양개식</span>
                  <span>후방카메라</span>
                </li>
                <li>
                  <span class="chk">추돌감지센서 : 전방</span>
                  <span class="chk">안전봉</span>
                  <span class="chk">연료캡잠금장치</span>
                  <span class="chk">AC,Heater</span>
                </li>
                <li>
                  <span>라디오</span>
                  <span class="chk">USB잭</span>
                  <span class="chk">포크캡</span>
                </li>
              </ul>
            </article>
          </div>
          <div v-if="activetab === 2" class="tabcontent dtl-perf">
            <article>
              <h3 class="dtl-tit">엔진</h3>
              <div class="tbl">
                <dl>
                  <dt>오일누유</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>오일필터</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>냉각수량 및 오염</dt>
                  <dd>양호</dd>
                  <dt>시동 및 매연상태</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>펌프이음 및 누유 상태</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>호스/파이프 조립부 누유 및 파손상태</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>유압유 필터류</dt>
                  <dd>양호</dd>
                  <dt>컨트롤밸브 이음 및 누유 상태</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>오일유량 및 오염</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>냉각수 누수</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>BELT 장력, 엔진 마운팅볼트 체결상태</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>라디에이터 청결상태</dt>
                  <dd>미세누유</dd>
                </dl>
              </div>
            </article>
            <article>
              <h3 class="dtl-tit">유압</h3>
              <div class="tbl">
                <dl>
                  <dt>펌프이음 및 누유 상태</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>호스/파이프 조립부 누유 및 파손상태</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>유압유 필터류</dt>
                  <dd>양호</dd>
                  <dt>컨트롤밸브 이음 및 누유 상태</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>유압유 청결상태</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>각종 실린더 작동 및 누유 상태</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
              </div>
            </article>
            <article>
              <h3 class="dtl-tit">전기</h3>
              <div class="tbl">
                <dl>
                  <dt>경고 표시등 작동상태</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>혼 및 작업등 작동상태</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>각종 지시등 작동상태</dt>
                  <dd>양호</dd>
                  <dt>배터리 성능 교환 및 누수 (전동)</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>컨트롤 판넬 오염상태 (전동)</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>시간계, 연료계, 수온계, 복합계기 작동상태</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>조행 변속기능 작동상태</dt>
                  <dd>양호</dd>
                  <dt>휴즈 및 릴레이 손상여부</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>충전기 (전동)</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
              </div>
            </article>
            <article>
              <h3 class="dtl-tit">구동</h3>
              <div class="tbl">
                <dl>
                  <dt>드라이브액슬 오일량 및 누유여부</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>트랜스미션 오일량 및 누유여부 (필터포함)</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>주행/변속 이상여부</dt>
                  <dd>양호</dd>
                  <dt>제동장치 이상유무</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>모터 작동상태 (전동)</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>드라이브액슬 이음여부</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>트랜스미션 이음여부</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>허브 볼트 체결상태</dt>
                  <dd>미세누유</dd>
                </dl>
                <dl>
                  <dt>트랜스퍼 오일량 및 교환 (전동)</dt>
                  <dd>양호</dd>
                </dl>
              </div>
            </article>
            <article>
              <h3 class="dtl-tit">외관</h3>
              <div class="tbl">
                <dl>
                  <dt>펌프 및 호스 간섭유무</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>FORK 단차 및 균열여부</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
                <dl>
                  <dt>마스트 유격 및 베어링, 체인 마모 상태</dt>
                  <dd>양호양호</dd>
                  <dt>외관 도장 상태 (박리 및 탈색 유무)</dt>
                  <dd>양호</dd>
                </dl>
                <dl>
                  <dt>타이어 상태 및 마모여부</dt>
                  <dd>불량,부족,누유</dd>
                  <dt>차대 변경 및 개조여부</dt>
                  <dd>불량,부족,누유</dd>
                </dl>
              </div>
            </article>
          </div>
          <div v-if="activetab === 3" class="tabcontent dtl-guide">
            <ul class="guide">
              <li>
                <dl>
                  <dt>용도 및 필요사항 체크</dt>
                  <dd>작업현장 규격과 작업특성, 사용자 특성을 체크합니다. 최대 들어올림 높이 및 출입문의 높이를 확인합니다. <br>전동 지게차의 경우 배전기 전압을 확인합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>모델 선택 및 필요 옵션 선택</dt>
                  <dd>모델 별 동력방식, 탑승형식, 적재능력 마스트 종류, 높이 등을 비교합니다. 작업을 위해 추가로 필요한 옵션을 체크합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>허위상품 구별 및 의심</dt>
                  <dd>전화상담 딜러와 실제 나온 딜러가 다른 경우, 상담한 상품이 아닌 다른 상품을 보여주거나 권유, 연식 및 가동시간, 상품상태에 비해 판매가가 현저히 낮은 경우, 등록한 상품이 실제 상품과 다르거나, 서류상의 명의가 다른 경우, 허위상품 의심 및 확인 시 허위상품은 즉시 신고합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>상품비교 및 가격 비교</dt>
                  <dd>연식, 가동시간, 매매가를 확인해 관심상품으로 등록합니다. 상품의 가격, 옵션, 상품상태와 성능점검 상태를 비교합니다. 구매의사가 있는 경우 매자에게 구매문의를 합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>차량체크</dt>
                  <dd>상담상품과 실제상품을 비교 및 체크합니다. 차량의 외관상태와 정비상태, 옵션 등을 체크합니다. 시승을 통해 시동, 주행 상태, 작업기 정상 동작 등을 체크합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>서류확인</dt>
                  <dd>번호판이 있는 등록된 지게차의 경우 '건설기계 등록증'을 확보하여 차량과 일치여부를 먼저 확인 후 원동기 사양, 정기점검 일자 도래 여부 등을 확인합니다. '건설기계등록원부'를 확인하여 소유권과 압류 및 저당 상태를 확인합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>허위상품 구별 및 의심</dt>
                  <dd>상품거래 시 차량금액외 별도의 수수료가 발생하는지 계약전 체크합니다. 운송료, 소개료, 추가 옵션 장착시의 비용에 대해 확인합니다.</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <!-- 2019.06.11 eqipcst-area 태그 추가 -->
        <div class="eqipcst-area">
          <div class="eqipcst">
            <h3 class="tit">내 장비 판매 신청</h3>
            <p>이름, 연락처를 남겨주시면 두산 로지피아 직원 바로 연락드립니다.</p>
            <button type="button" class="btn btn-eqipcst" v-on:click="popupApply">판매신청하기</button>
          </div>
        </div>
        <!-- //2019.06.11 eqipcst-area 태그 추가 -->
        <div class="btn-box">
          <button type="button" class="btn btn-black">목록으로 이동</button>
        </div>
      </div>
    </div>
    <button type="button" class="btn prev">이전 페이지 이동</button>
  </section>
</template>
<script>
import CommonNav from '@/components/common/Nav'
import 'hooper/dist/hooper.css'
import applypop from '@/components/common/popup/applyPop'
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper'
export default {
  name: 'LogipiaUsedDetail',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > 상품 > 두산 중고마켓 ',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 두산 중고마켓' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    Hooper,
    Slide,
    HooperPagination,
    applypop
  },
  data () {
    return {
      pageTitle: '로지피아 중고',
      activetab: 1
    }
  },
  methods: {
    sel_btn: function (event) {
      if (event) {
        if (event.target.parentElement.parentElement.classList.contains('on')) {
          event.target.innerText = '판매자정보 보기'
          event.target.parentElement.parentElement.classList.remove('on')
        } else {
          event.target.innerText = '판매자정보 닫기'
          event.target.parentElement.parentElement.classList.add('on')
        }
      }
    },
    currentSlide: function (n) {
      var i
      if (n > document.getElementsByClassName('view').length) { n = 1 }
      if (n < 1) { n = document.getElementsByClassName('view').length }
      for (i = 0; i < document.getElementsByClassName('view').length; i++) {
        document.getElementsByClassName('view')[i].classList.remove('on')
      }
      for (i = 0; i < document.getElementsByClassName('img').length; i++) {
        document.getElementsByClassName('img')[i].className = document.getElementsByClassName('img')[i].className.replace(' active', '')
      }
      document.getElementsByClassName('view')[n - 1].classList.add('on')
      document.getElementsByClassName('img')[n - 1].className += ' active'
    },
    /* 구매문의, 판매신청 팝업 */
    popPur: function () {
      var popupWrap = document.getElementById('pop-pur')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popPurClose: function () {
      var popupWrap = document.getElementById('pop-pur')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    popupApply: function () {
      var popupWrap = document.getElementById('pop-apply')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    openExpand: function () {
      var popupWrap = document.getElementById('openExp')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    closeExpand: function () {
      var popupWrap = document.getElementById('openExp')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    }
  }
}
</script>

<style>
</style>
