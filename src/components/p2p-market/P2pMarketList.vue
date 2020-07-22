<template>
   <section id="lp-section" class="lp-sub p2pMarketList">
    <!-- 추후 변경 -->
    <common-nav nowMenu="p2pmarket"></common-nav>  
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 중고장비 거래장터입니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="eqip-set-box v2">
        <form action="">
          <div class="sch-box">
            <div class="lp-select">
              <select title="업체 옵션 선택">
                <option>전체</option>
                <option>옵션1</option>
              </select>
            </div>
            <input type="text" class="sch-inp" title="업체명 검색" placeholder=" 제품명, 제조사로 검색이 가능합니다. " />
            <button class="btn-sch" type="button">검색</button>
          </div> <!--//sch-box -->
          <div class="tbl-wrap tbl-inp">
            <div class="tbl">
              <dl>
                <dt><label for="provider">제조사</label></dt>
                <dd class="lp-select">
                  <select id="provider">
                    <option value="">전체</option>
                    <option value="01">제조사1</option>
                    <option value="02">제조사2</option>
                  </select>
                </dd>
              </dl>
              <dl>
                <dt><label for="model">모델명</label></dt>
                <dd >
                  <input  type="text" title="모델명 입력" class="inp-text">
                </dd>
              </dl>
              </div>
              <div class="tbl">
                <dl>
                  <dt>연식</dt>
                  <dd class="between">
                    <span><input  type="text" title="연식 시작 년도 입력" class="inp-text"/><span class="txt">년</span></span>
                    <span class="line">~</span>
                    <span><input  type="text" title="연식 마지막 년도 입력" class="inp-text"/><span class="txt">년</span></span>
                  </dd>
                </dl>
                <dl class="last">
                  <dt>운행시간</dt>
                  <dd class="between">
                    <span><input  type="text" title="운행시작 시간 입력" class="inp-text"/><span class="txt">시간</span></span>
                    <span class="line">~</span>
                    <span><input  type="text" title="운행종료 시간 입력" class="inp-text"/><span class="txt">시간</span></span>
                  </dd>
                </dl>
              </div>
              <div class="tbl mobile">
                <dl>
                  <dt><label for="ton">적재량(톤 수)</label></dt>
                  <dd class="lp-select">
                    <select id="ton" name=""  @click="mobileSelect">
                      <option value>전체</option>
                      <option value="01">1톤 ~ 2톤 미만(엔진식)</option>
                      <option value="02">2톤 ~ 3.5톤 미만(엔진식)</option>
                      <option value="03">3.5톤 ~ 5톤 미만(엔진식)</option>
                      <option value="04">5톤 ~ 8톤 미만(엔진식)</option>
                      <option value="05">8톤 ~ 10톤 미만(엔진식)</option>
                      <option value="06">10톤 ~ 18톤 미만(엔진식)</option>
                      <option value="07">18톤 ~ 25톤 미만(엔진식)</option>
                      <option value="08">25톤 이상(엔진식)</option>
                      <option value="11">1톤 ~ 2톤 미만(전동식 좌식)</option>
                      <option value="12">2톤 ~ 4톤 미만(전동식 좌식)</option>
                      <option value="13">4톤 이상(전동식 좌식)</option>
                      <option value="14">1톤 ~ 2톤 미만(전동식 입식)</option>
                      <option value="15">2톤 ~ 4톤 미만(전동식 입식)</option>
                    </select>
                  </dd>
                </dl>
                <dl>
                  <dt><label for="power" >동력유형</label></dt>
                  <dd class="lp-select">
                    <select id="power" @click="mobileSelect">
                      <option value>전체</option>
                      <option value="01">엔진디젤</option>
                      <option value="02">엔진LP</option>
                      <option value="03">전동좌식</option>
                      <option value="04">전동입승</option>
                      <option value="99">기타</option>
                    </select>
                  </dd>
                </dl>
                 <dl class="m-list">
                  <dt><label for="order">정렬방식</label></dt>
                  <dd class="lp-select">
                    <select id="order"  @click="mobileSelect">
                      <option>최신 등록 순</option>
                    </select>
                  </dd>
                </dl>
              </div>
              <div class="tbl">
                <dl class="">
                  <dt>판매가격</dt>
                  <dd class="between">
                    <span><input  type="text" title="판매가격 최저가 입력" class="inp-text"><span class="txt">만원</span></span>
                    <span class="line">~</span>
                    <span><input  type="text" title="판매가격 최고가 입력" class="inp-text"><span class="txt">만원</span></span>
                  </dd>
                </dl>
                 <dl class="">
                  <dt>마스트</dt>
                  <dd class="inp-chk">
                    <span>
                      <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_01" >
                      <label for="eqip_radio_01_01">2(STD)</label>
                    </span>
                    <span>
                      <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_02" >
                      <label for="eqip_radio_01_02">2(FFL)</label>
                    </span>
                    <span>
                      <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_03" >
                      <label for="eqip_radio_01_03">3(FFL)</label>
                    </span>
                    <span>
                      <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_04" >
                      <label for="eqip_radio_01_04">4(QUAD)</label>
                    </span>
                  </dd>
                </dl>
              </div>
            <div class="tbl pc">
              <dl>
                <dt>판매지역</dt>
                <dd class="inp-chk">
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_01" />
                    <label for="eqip_radio_02_01">전국</label>
                  </span>
                  <br>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_02" />
                    <label for="eqip_radio_02_02">서울</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_03" />
                    <label for="eqip_radio_02_03">세종</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_04" />
                    <label for="eqip_radio_02_04">인천</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_05" />
                    <label for="eqip_radio_02_05">대전</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_06" />
                    <label for="eqip_radio_02_06">광주</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_07" />
                    <label for="eqip_radio_02_07">대구</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_08" />
                    <label for="eqip_radio_02_08">울산</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_09" />
                    <label for="eqip_radio_02_09">부산</label>
                  </span><br>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_10" />
                    <label for="eqip_radio_02_10">경북</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_11" />
                    <label for="eqip_radio_02_11">강원</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_12" />
                    <label for="eqip_radio_02_12">충남</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_13" />
                    <label for="eqip_radio_02_13">충북</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_14" />
                    <label for="eqip_radio_02_14">전남</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_15" />
                    <label for="eqip_radio_02_15">전북</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_16" />
                    <label for="eqip_radio_02_16">경남</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_17" />
                    <label for="eqip_radio_02_17">경북</label>
                  </span>                
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_18" />
                    <label for="eqip_radio_02_18">제주</label>
                  </span>
                  <span>
                    <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_19" />
                    <label for="eqip_radio_02_19">기타지역</label>
                  </span>
                </dd>
              </dl>
            </div>
            <button type="button" class="btn-reset">초기화</button>
          </div><!--// tbl-wrap -->
          <button type="button" @click="list_more_btn" class="btn-more phase2-pc">상세검색열기</button>
          <!--  모바일용 <a href="/p2p-market/add" class="btn btn-blue btn-register ">매물등록</a> -->
          <ul class="sort-box phase2-tablet phase2-mobile">
              <li class="category chk-box">
                <span class="inp-chk02">
                  <input  type="checkbox" name="eqip" id="eqipchk02" />
                  <label for="eqipchk02">신규등록제품</label>
                </span>
              </li>
            </ul>
        </form>
      </div><!-- // eqip-set-box -->
      <!-- 모바일용 
        <div class="info-box ">
        더 많은 제품은 <strong>두산중고마켓</strong>에서도 확인해보실 수 있습니다.
      </div> -->
      <div class="market-box">
        <div class="market-box-contain">
          <p class="announce-box">
            <span class="ico announce"></span>
            개인 및 개별 업체간의 거래는<br class="phase2-mobile">두산 로지피아에서 법적인 책임을 지지 않음을 알려드립니다. 
          </p>
          <div class="market-bar-box">
            <p class="total">
              총
              <span>1,123</span>개
              <span class="txt">의 검색결과가 있습니다.</span>
              <a href="/p2p-market/add" class="btn btn-blue btn-register pc">매물등록</a>
            </p>
            <ul class="sort-box">
              <li class="category chk-box"> </li>
              <li class="sort">
                <span>
                  <button type="button" class="btn-sort">최근 등록일순</button>
                </span>
                <span>
                  <button type="button" class="btn-sort">가격 높은순</button>
                </span>
                <span>
                  <button type="button" class="btn-sort on">가격 낮은순</button>
                </span>
                <!-- 정렬 선택시 class에 on 추가 -->
                <span>
                  <button type="button" class="btn-sort">연식 높은순</button>
                </span>
                <span>
                  <button type="button" class="btn-sort">연식 낮은순</button>
                </span>
              </li>
              <li class="lp-select">
                <select>
                  <option>10개 보기</option>
                  <option>20개 보기</option>
                  <option>40개 보기</option>
                </select>
              </li>
            </ul>
          </div><!-- // market-bar-box-->
          <div class="market-left-box">         
              <!-- 리스트가 있을 경우  -->
              <div>
                <ul class="eqip-list v2">
                  <li v-for="index in 10" :key="index">
                    <div>
                      <a href="/p2p-market/123" class="img">
                        <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      </a>
                      <div class="box">
                          <p class="name">
                            <a href="/p2p-market/123">토요타 제품 처분합니다.</a>
                          </p>
                          <p class="proName"><span class="ico eqip">제조사 및 모델명 : 토요타 7FB35</span></p>
                          <div class="info">
                            <p>
                              <span class="ico old">연식 : 2010년</span>
                              <span class="ico test">운행시행 : 46,078시간</span>
                            </p>
                            <p>
                              <span class="ico garage">차고지 : 경기 평택시</span>
                            </p>
                          </div>
                          <div class="chk">
                            <span class="interest">
                              <input type="checkbox" name="eqip_radio_00" :id="'eqip_radio_0'+index" />
                              <label :for="'eqip_radio_0'+index">관심장비</label>
                            </span>
                            <div class="priceBox">
                              <span class="ico price">가격</span>
                              <em>2,200</em>만원
                            </div><!-- // priceBox-->
                          </div><!--// chk -->
                      </div> <!--// box -->
                    </div>
                  </li>
                </ul>
                <paging></paging>
              </div>
              <!-- 검색 결과 없음 -->
              <div class="nolist">
                <p>검색된 제품이 없습니다.<br class="phase2-tablet phase2-mobile"><span>두산중고마켓</span>에서 더 많은 제품을 찾아보세요.</p>
                <router-link to="/product/logipia-used"  class="btn btn-blue">두산중고마켓 바로가기</router-link>
              </div> 
          </div><!-- // market-left-box -->
          <div class="market-right-box">
            <div class="firstList">
              <ul class="tabs v2">
                <li><a href="javascript:void(0);" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'on' : '' ]">최근본장비</a></li>
                <li><a href="javascript:void(0);" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'on' : '' ]">관심장비</a></li>
              </ul>
            <div class="tab-con">
              <div v-if="activetab === 1" class="tabcontent">
                <!-- 리스트가 있을 경우  -->
                  <div  >
                    <ul class="eqip-list"> 
                      <!-- item 최대 5개씩노출 -->
                        <li> 
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_recent_radio_00" />
                                  <label for="eqip_recent_radio_00">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li> 
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_recent_radio_01" />
                                  <label for="eqip_recent_radio_01">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li> 
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_recent_radio_02" />
                                  <label for="eqip_recent_radio_02">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li> 
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_recent_radio_03" checked/>
                                  <label for="eqip_recent_radio_03">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <paging pageMode="small"></paging>
                  </div>
                  <!-- 리스트가 없을 경우  -->
                  <div class="defaultBox nodata" style="display:none">  
                    최근 본 장비가<br>없습니다.
                  </div>
                </div><!--// tabcontent-->
                <div v-if="activetab === 2" class="tabcontent">
                  <!-- 로그인 전 -->
                  <div class="defaultBox loginBox" > 
                    로그인 후에<br>
                    확인 가능합니다.<br>
                    <a href="/login" class="btn btn-b-line">로그인</a>
                  </div>
                  <!-- 로그인 후 리스트가 있을 경우 -->
                  <div style="display:none">
                    <ul class="eqip-list">
                        <li>
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_interest_radio_00" checked/>
                                  <label for="eqip_interest_radio_00">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_interest_radio_01" checked/>
                                  <label for="eqip_interest_radio_01">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_interest_radio_02" checked/>
                                  <label for="eqip_interest_radio_02">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_interest_radio_03" checked/>
                                  <label for="eqip_interest_radio_03">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a href="javascript:void()" class="img">
                              <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a href="javascript:void()">토요타 제품 처분합니다.</a>
                              </p>
                              <p class="info">운행시행 : 46,078시간</p>
                              <p class="address">차고지 : 경기 평택시</p>
                              <div class="chk">
                                <span class="interest">
                                  <input type="checkbox" name="eqip_radio_01" id="eqip_interest_radio_04" checked/>
                                  <label for="eqip_interest_radio_04">관심장비</label>
                                </span>
                                <span class="place">
                                  가격 : <em>2,200</em>만원
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <paging pageMode="small"></paging>
                  </div>
                  <!-- 리스트가 없을 경우 -->
                    <div class="defaultBox nodata" style="display:none" > 
                    관심 장비가<br>없습니다.
                    </div>
                </div> <!--// tabcontent-->
              </div><!--// tab-con-->
            </div><!-- // firstList-->
            <div class="secondList">
              <div class="tit">두산 중고마켓 리스트</div>
              <ul class="eqip-list">
                <li class="market">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      <span class="badge">중고마켓</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a href="javascript:void()">G33S-5</a>
                      </p>
                      <p class="info">운행시행 : 46,078시간dddddddddddddd</p>
                      <p class="address">차고지 : 경기 평택시ddddddddddddddd</p>
                      <div class="chk">
                        <span class="interest"></span>
                        <span class="place">
                          가격 : <em>2,200</em>만원
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="market">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      <span class="badge">중고마켓</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a href="javascript:void()">G33S-5</a>
                      </p>
                      <p class="info">운행시행 : 46,078시간dddddddddddddd</p>
                      <p class="address">차고지 : 경기 평택시ddddddddddddddd</p>
                      <div class="chk">
                        <span class="interest"></span>
                        <span class="place">
                          가격 : <em>2,200</em>만원
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="market">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      <span class="badge">중고마켓</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a href="javascript:void()">G33S-5</a>
                      </p>
                      <p class="info">운행시행 : 46,078시간dddddddddddddd</p>
                      <p class="address">차고지 : 경기 평택시ddddddddddddddd</p>
                      <div class="chk">
                        <span class="interest"></span>
                        <span class="place">
                          가격 : <em>2,200</em>만원
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="market">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      <span class="badge">중고마켓</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a href="javascript:void()">G33S-5</a>
                      </p>
                      <p class="info">운행시행 : 46,078시간dddddddddddddd</p>
                      <p class="address">차고지 : 경기 평택시ddddddddddddddd</p>
                      <div class="chk">
                        <span class="interest"></span>
                        <span class="place">
                          가격 : <em>2,200</em>만원
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <paging pageMode="small"></paging>
            </div> <!--// secondList -->
          </div> <!--// market-right-box-->
        </div><!-- // market-box-contain -->
      </div><!--// market-box-->
    </div>

<!-- popup-wrap -->
<div id="pop-alert" class="popup-wrap type03">
  <div class="popup-box">
    <div class="popup-title">중고 직거래 안내</div>
    <div class="popup-content">
      <div class="info-box">
        <p class="tit">중고 직거래 안내</p>
        <p class="txt"> 
          개인 및 개별 업체간의 거래는 <br class="mobile">두산 로지피아에서 <br>
          법적인 책임을 <br class="mobile">지지 않음을 알려드립니다.
        </p>
      </div>
      <div class="btn-box">
        <button type="button" class="btn btn-blue" @click="popupConfirm">확인</button>
      </div>
    </div>
  </div>
</div>
<!--// popup-wrap -->
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'DoosanCareService',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 중고직거래',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 중고직거래 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 중고직거래' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging,
  },
  data () {
    return {
      pageTitle: '중고 직거래',
      activetab: 1,
      
    }
  },
  mounted() {
    //if(!this.$cookies.get('popupAlert'))
         this.popupAlert()
  },
  methods: {
    list_more_btn: function (event) {
      if (event) {
        if (event.target.parentElement.parentElement.classList.contains('on')) {
          event.target.innerText = '상세검색열기'
          event.target.classList.remove('on')
          event.target.parentElement.parentElement.classList.remove('on')
        } else {
          event.target.innerText = '상세검색닫기'
          event.target.classList.add('on')
          event.target.parentElement.parentElement.classList.add('on')
        }
      }
    },
    popupConfirm:function(){
      this.popupAlertclose()
      // if(!this.$cookies.get('popupAlert'))
      //   this.$cookies.set('popupAlert', 'false',60 * 60 * 24 * 30) // 1달
    },
    popupAlert: function () {
      var popupWrap = document.getElementById('pop-alert') 
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
      popupWrap.querySelector("button").focus()
    },
    popupAlertclose: function () {
      var popupWrap = document.getElementById('pop-alert')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.getElementById('default-focus').focus()
      document.getElementById('default-focus').blur()
    },
    mobileSelect:function(e){
       var dlBox = e.target.parentElement.parentElement.parentElement;
       var dls = dlBox.querySelectorAll("dl");
       var parent = e.target.parentElement;
      for(var i =0;i<dls.length;i++){
        if(dls[i] == parent.parentElement) continue;
        dls[i].classList.remove("on");
      }
      if(!parent.parentElement.classList.contains("on"))
      parent.parentElement.classList.add("on");
    }
  }
}
</script>