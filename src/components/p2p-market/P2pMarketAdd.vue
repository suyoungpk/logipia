<template>
  <section id="lp-section" class="lp-sub p2pMarketAdd">
    <common-nav nowMenu="p2pmarket"></common-nav>  
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 중고장비 거래장터입니다.</span>
    </div>
    <div class="sub-wrap">      
      <form action="">
        <h2>매물등록</h2>
        <div class="eqip-add">
         
           <div class="tbl-inp">
            <div class="top-info-box">
              <p><span class="mark"></span>사업자사용자로 등록 시 거래진행이 편리해집니다.</p>
              <p class="mark"><span>*</span> 필수 입력 항목입니다.</p>
            </div>
            <div class="tbl">
              <dl>
                <dt><span class="mark">필수항목</span>제목</dt>
                <dd><input  type="text" name="" id="" class="inp-text" /></dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>제조사</dt>
                <dd>
                   <span class="lp-select">
                    <select>
                      <option>전체</option>
                      <option>선택1</option>
                      <option>선택2</option>
                    </select>
                  </span>
                </dd>
                <dt><span class="mark">필수항목</span>모델명</dt>
                <dd><input  type="text" name="" id="" class="inp-text" /></dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>연식</dt>
                <dd class="float-box">
                  <input  type="text" name="" id="" class="inp-text" placeholder=""/> <span class="float">년</span>
                </dd>
                <dt><span class="mark">필수항목</span>운행시간</dt>
                <dd class="float-box">
                  <input  type="text" name="" id="" class="inp-text" placeholder=""/> <span class="float">시간</span>
                </dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>적재량(톤 수)</dt>
                <dd>
                  <span class="lp-select">
                    <select>
                      <option>전체</option>
                      <option>선택1</option>
                      <option>선택2</option>
                    </select>
                  </span>
                </dd>
                <dt><span class="mark">필수항목</span>동력/탑승방식</dt>
                <dd>
                  <span class="lp-select">
                    <select>
                      <option>전체</option>
                      <option>선택1</option>
                      <option>선택2</option>
                    </select>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>판매가격</dt>
                <dd class="float-box">
                  <input  type="text" name="" id="" class="inp-text" placeholder=""/> <span class="float">만원</span>
                </dd>
                <dt><span class="mark">필수항목</span>마스트</dt>
                 <dd class="float-box">
                   <span class="lp-select">
                      <select title="마스트 선택">
                        <option>전체</option>
                        <option>선택1</option>
                        <option>선택2</option>
                      </select>
                    </span>
                  <input  type="text" name="" id="" class="inp-text" placeholder=""/> <span class="float">mm</span>
                </dd>
              </dl>
              <dl>
                <dt>근저당</dt>
                <dd class="rdo-box">
                  <span class="rdo">
                    <input  type="radio" name="rdo01" id="rdo01-01" />
                    <label for="rdo01-01">근저당 있음</label>
                  </span>
                  <span class="rdo">
                    <input  type="radio" name="rdo01" id="rdo01-02" />
                    <label for="rdo01-02">근저당 없음</label>
                  </span>
                </dd>
                 <dt>할부</dt>
                <dd class="rdo-box">
                  <span class="rdo">
                    <input  type="radio" name="rdo02" id="rdo02-01" />
                    <label for="rdo02-01">할부 있음</label>
                  </span>
                  <span class="rdo">
                    <input  type="radio" name="rdo02" id="rdo02-02" />
                    <label for="rdo02-02">할부 없음</label>
                  </span>
                  <input  type="text" name="" id="" class="inp-text" placeholder="잔여 할부 개월  수 입력"/>
                </dd>
              </dl>
              <dl>
                <dt>소유자명</dt>
                <dd><input  type="text" name="" id="" class="inp-text" /></dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>차고지 주소</dt>
                <dd>
                    <div class="adrs-box">
                      <input  type="text" name="" id="" class="inp-text" placeholder="주소를 입력해주세요."/>
                      <input  type="text" name="" id="" class="inp-text" placeholder="상세주소를 입력해주세요."/>
                    </div>
                </dd>
              </dl>
              <dl>
                <dt>상세정보</dt>
                <dd><textarea class="inp-textarea" placeholder="내용을 입력해주세요."></textarea></dd>
              </dl>
              <dl>
                <dt><span class="mark">필수항목</span>사진등록
                  <span class="txt-caution">확장자가 .BMP, .JPEG, .PNG 파일만 업로드가 가능합니다.</span>
                </dt>
                <dd class="photo">
                  <div class="item" v-for="(item,i) in photoItems" :key="i">
                    <label :for="'photo'+i">
                     <span>{{item.txt}}</span> <img :src="item.src" :alt="item.txt+' 예시'">
                    </label>
                    <span class="inp-file">
                      <button type="button" @click.prevent="selectFile(i)" :ref="'fileSearchBtn'" class="btn file-label"><span>파일업로드</span></button>
                      <input type="file" name="compFile" :ref="'fileupload'" @change="onFileChange($event,i)" class="file-upload" tabindex="-1" />
                      <input type="text" readonly="readonly" class="inp-text file-name" :ref="'fileuploadTxt'" tabindex="-1" />
                    </span>
                    <span class="txt-caution">확장자가 .BMP, .JPEG, .PNG 파일만 업로드가 가능합니다.</span>
                  </div>
                </dd>
              </dl>
            </div>
          </div><!-- // tbl-inp -->
          <div class="btn-box">
            <button type="button" class="btn btn-blue btn-pop-open btn-preview" @click="openPreview">미리보기</button>
          </div>
        </div><!-- // eqip-add -->
        <div class="checkList">
          <h3 :class="[(toggle2)? 'on':'']"> 
              참고사항
              <button class="btn btn-tab" @click="toggle2 = !toggle2" type="button"></button>
          </h3>
          <transition name="slide-fade">
            <ul class="guide" v-if="toggle2">
              <li>
                <dl>
                  <dt>용도 및 필요사항 체크</dt>
                  <dd>작업현장 규격과 작업특성, 사용자 특성을 체크합니다.<br>최대 들어올림 높이 및 출입문의 높이를 확인합니다. <br>전동 지게차의 경우 배전기 전압을 확인합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>모델 선택 및 필요 옵션 선택</dt>
                  <dd>모델 별 동력방식, 탑승형식, 적재능력 마스트 종류, 높이 등을 비교합니다.<br>작업을 위해 추가로 필요한 옵션을 체크합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>허위상품 구별 및 의심</dt>
                  <dd>전화상담 딜러와 실제 나온 딜러가 다른 경우, 상담한 상품이 아닌 다른 상품을 보여주거나 권유, 연식 및 가동시간,<br>상품상태에 비해 판매가가 현저히 낮은 경우, 등록한 상품이 실제 상품과 다르거나, 서류상의 명의가 다른 경우,<br>허위상품 의심 및 확인 시 허위상품은 즉시 신고합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>상품비교 및 가격 비교</dt>
                  <dd>연식, 가동시간, 매매가를 확인해 관심상품으로 등록합니다. 상품의 가격, 옵션, 상품상태와 성능점검 상태를 비교합니다.<br>구매의사가 있는 경우 매자에게 구매문의를 합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>차량체크</dt>
                  <dd>상담상품과 실제상품을 비교 및 체크합니다. 차량의 외관상태와 정비상태, 옵션 등을 체크합니다.<br>시승을 통해 시동, 주행 상태, 작업기 정상 동작 등을 체크합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>서류확인</dt>
                  <dd>번호판이 있는 등록된 지게차의 경우 '건설기계 등록증'을 확보하여 차량과 일치여부를 먼저 확인 후 원동기 사양,<br>정기점검 일자 도래 여부 등을 확인합니다. '건설기계등록원부'를 확인하여 소유권과 압류 및 저당 상태를 확인합니다.</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>허위상품 구별 및 의심</dt>
                  <dd>상품거래 시 차량금액외 별도의 수수료가 발생하는지 계약전 체크합니다. 운송료, 소개료, 추가 옵션 장착시의 비용에 대해 확인합니다.</dd>
                </dl>
              </li>
            </ul>
          </transition>
          <div class="confirm-box">
            *위의 사항을 확인하였습니다.
             <span class="inp-chk">
              <input  type="checkbox" name="chk01" id="chk01" />
              <label for="chk01">확인</label>
            </span>
          </div> <!--// confirm -->
        </div> <!-- // checkList-->
        <div class="btn-box">
          <button type="button" class="btn btn-b-line">취소</button>
          <button type="button" class="btn btn-blue">등록</button>
        </div>
      </form>
      <!-- popup -->
      <div id="pop-preview" class="popup-wrap type02">
        <div class="popup-box preview">
          <div class="popup-title">미리보기</div>
          <div class="popup-content p2pMarketDetail">
            <div class="tit">미리보기</div>
            <div class="gallery-box">
              <div class="top-box">
                <!-- 모바일 경우 back 버튼 노출 -->
                <button class="btn btn-back phase2-mobile2" type="button" disabled>뒤로가기</button>
                <h3 class="tit-name">2010년도 두산 지게차 판매합니다.</h3>
                <div class="seller-menu ">
                  <span class="interest">
                    <input type="checkbox" name="eqip_radio" id="eqip_radio" />
                    <label for="eqip_radio">관심장비</label>
                  </span> 
                </div> 
              </div>
              <!-- slide-box -->   
            <div class="slide-box">
                <component  :is="appendSlider" :infiniteScroll="true" :autoPlay="false" ref="hooper" :touchDrag="true" :shortDrag="true"> 
                  <slide v-for="(item,i) in slideItems" :key="i">
                    <div class="view on">
                      <img :src="item" :alt="i+1+'번째 이미지'" />
                      <button type="button" class="btn-expand phase2-pc2" >이미지 크게보기</button>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"  v-if="screenMode=='multi'"></hooper-navigation>
                  <hooper-pagination slot="hooper-addons" mode="fraction" v-if="screenMode=='multi'"></hooper-pagination>
                </component>
                <ul class="list phase2-pc2"> 
                  <li class="photo" v-for="(item,i) in slideItems" :key="i">
                    <button type="button" @click="slideTo(i)">
                      <img :src="item" :alt="i+1+'번째 이미지 보기'" class="img"/>
                    </button>
                  </li>
                </ul>
              </div><!-- // slide-box-->
              <!-- info-box -->
              <div class="info-box">
                <div class="list-box">
                  <dl class="prod-info">
                    <dt><span class="ico brand"></span>제조사</dt>
                    <dd>두산</dd>
                    <dt><span class="ico eqip"></span>모델명</dt>
                    <dd>G33S-5</dd>
                    <dt><span class="ico old"></span>연식</dt>
                    <dd>2010년</dd>
                    <dt><span class="ico ton"></span>적재량(톤 수)</dt>
                    <dd>4톤이상</dd>
                    <dt><span class="ico power"></span>동력 유형</dt>
                    <dd>전동식 좌식</dd>
                    <dt><span class="ico mast"></span>마스트</dt>
                    <dd>2(STD) 2,500mm</dd>
                    <dt><span class="ico test"></span>운행시간</dt>
                    <dd>1,234시간</dd>
                    <dt><span class="ico garage"></span>차고지</dt>
                    <dd>경기도 평택시 청북읍</dd>
                  </dl>
                  
                  <div class="date">
                    등록일 : 2020.03.28
                    <div class="chk">
                     <span class="interest">
                        <input type="checkbox" name="eqip_radio_00" id="eqip_radio_00" />
                        <label for="eqip_radio_00">관심장비</label>
                      </span>
                    </div><!-- // chk -->
                  </div><!-- // date -->
                </div>
                <dl class="price-box">
                  <dt><span class="ico price"></span>판매가격</dt>
                  <dd><em>12,220</em><span>만원</span></dd>
                  <!-- <dd class="soldout"><em>판매완료</em></dd> -->
                </dl>
                <p class="announce">
                    <span class="orange">&#8251;</span> 개인 및 개별 업체간의 거래는<br>두산 로지피아에서 법적인 책임을 지지 않음을 알려드립니다.
                </p>
              </div>
              <!-- //info-box -->
            </div>
            <!-- 판매자 정보  -->
            <div class="sellerInfo">
              <!-- 로그인 한 후  -->
              <div class="afterLogin"  >
                <h3 :class="[(toggle)? 'on':'']">
                    판매자 정보 
                    <!-- <span class="sellerType">일반 사용자</span> -->
                    <span class="sellerType business">사업자 사용자</span>
                    <button class="btn btn-tab" @click="toggle = !toggle"></button>
                </h3>
                <transition name="slide-fade">
                  <dl v-if="toggle">
                    <dt>상호명</dt>
                    <dd>로지피아</dd>
                    <dt>판매점 위치</dt>
                    <dd>경기 평택시 청북읍 청원로 211-21</dd>
                    <dt>판매자</dt>
                    <dd>홍길동</dd>
                    <dt>사업자등록증</dt>
                    <dd>123-45-12345</dd>
                    <dt>소유자</dt>
                    <dd>김호동</dd>
                    <dt>전화번호</dt>
                    <dd>010-1234-1234</dd>
                  </dl>
                </transition>
              </div><!-- // afterLogin-->
            </div><!-- // sellerInfo -->
            <div class="prod-detail">
              <ul class="tabs">
                <li><a href="javascript:void(0);" v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'on' : '' ]">매물상세정보</a></li>
                <li><a href="javascript:void(0);" v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'on' : '' ]">구매가이드</a></li>
                <li class="no"></li>
              </ul>
              <div class="tab-con">
                <div v-if="activetab === 1" class="tabcontent dtl-car">
                  <article>
                    <div>
                      두산 제품 판매합니다.<br>
                      연식은 2010년이나 구매는 2018년에 했습니다.<br> 
                      압류는 없으나 할부는 5개월정도 남아있습니다. <br>
                      궁금하신사항이 있으시면 댓글 부탁드립니다.
                    </div>
                  </article>
                </div>
                <div v-if="activetab === 2" class="tabcontent dtl-guide">
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
              <!-- 댓글 -->
              <h4 class="cmt">댓글</h4>
              <div class="cmt-box">
                <div class="tbl-box">
                    <textarea name="" id="cmt-txt-box" title="제품에 대한 댓글" readonly></textarea>
                    <label for="cmt-txt-box" >댓글 등록 시 판매자 및 구매문의자에게 메일/SMS로 전송됩니다.</label>
                    <button class="btn btn-blue btn-reg" type="button">등록</button>
                  </div>
              </div>
              <!-- 제품 리스트 -->
              <div class="prod-list">
                <div class="tit">
                  <h3>복잡한 개인거래, 두산 인증제품은 어떠세요?</h3>
                  <a href="javascript:void(0)" class="phase2-pc2">두산 중고제품 더보기</a>
                </div>
                <!-- 리스트가 있을 경우 -->
                <ul class="eqip-list">
                  <li class="market" v-for="index in 5" :key="index">
                    <div>
                      <a href="javascript:void()" class="img">
                        <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                      </a>
                      <div class="box">
                        <p class="name">
                          <a href="javascript:void()">토요타 제품 처분합니다.</a>
                        </p>
                        <p class="info">전동좌식 / 2010년 / 46,078시간</p>
                        <p class="info">4톤 이상(전동식 좌식)</p>
                        <div class="chk">
                          <span class="place">
                            가격 : 2,200만원
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                   <li class="link phase2-mobile2">
                    <router-link to="/market/list">두산 중고제품<br>더보기</router-link>
                  </li>
                  <!-- 리스트가 없을 경우 -->
                  <li class="nolist" style="display:none">
                    리스트가 없습니다.
                  </li><!-- 리스트가 없을 경우 -->
                </ul>
              </div><!-- // prod-list  -->
              <a href="/" class="bnr-box phase2-pc2">
                <strong>"필요할 때 필요한 만큼 비용 걱정없이"</strong><br>
                두산 로지피아 지게차 렌탈을 이용하세요. 바로가기
              </a><!-- // bnr-box  -->
              <div class="btn-box phase2-pc2">
                <button type="button" class="btn btn-black" disabled>목록으로 이동</button>
              </div><!-- // btn-box  -->
            </div>
          </div><!-- // popup-content -->
          <button type="button" class="btn-popup-close" @click="closePreview">팝업닫기</button>
        </div>
      </div>
      <!--// popup -->
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'

import 'hooper/dist/hooper.css'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
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
  },components: {
    'common-nav': CommonNav,
    'paging': paging,
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data () {
    return {
      pageTitle: '중고 직거래',
      activetab: 1,
      screenMode:'',
      toggle:'',
      toggle2:'',
      appendSlider:'',
      photoItems:[ // 디자인용
        {txt:"정면",src:require('@/assets/images/sample_front.jpg')},
        {txt:"측면",src:require('@/assets/images/sample_side.jpg')},
        {txt:"후면",src:require('@/assets/images/sample_back.jpg')},
        {txt:"운전자석",src:require('@/assets/images/sample_driver.jpg')}
      ],
      slideItems: [ // 이미지 데이터
        require('@/assets/images/img-eqip-gallery.jpg'),
        require('@/assets/images/img-eqip-gallery02.jpg'),
        require('@/assets/images/img-eqip-gallery03.jpg'),
        require('@/assets/images/img-eqip-gallery04.jpg')
      ],
      playCarousel: null,
    }
  },
  methods: {
    setScreenMode:function(){
      var w = window.innerWidth;
      if(w>1023) this.screenMode = "pc";
      else this.screenMode = "multi";
      // console.log(this.screenMode);
      if(this.appendSlider == Hooper)
        this.$refs.hooper.restart();
      if(w>640) {
        this.toggle2 = true
        this.toggle = true
      }else {
        this.toggle2 = false
        this.toggle = false
      }
      console.log(this.toggle2);
    },
    openPreview: function () {
      var popupWrap = document.getElementById('pop-preview')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('body').classList.add('on-top')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
      this.appendSlider = Hooper;
    },
    closePreview: function () {
      var popupWrap = document.getElementById('pop-preview')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('on-top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    selectFile: function (index) {
      let targetFile  = this.$refs.fileupload[index];
      targetFile.click();
    },
    onFileChange: function (e,index) {
       let file = e.target.files[0]
      //  let url = URL.createObjectURL(file)
       let targetTxt  = this.$refs.fileuploadTxt[index];
      targetTxt.value = file.name
    },
    slideTo:function(index){
      this.$refs.hooper.slideTo(index);
    }
  },
  mounted() {
    this.setScreenMode()
    window.addEventListener("resize", this.setScreenMode);
  },
  destroyed() {
    window.removeEventListener("resize", this.setScreenMode);
  }
}
</script>
