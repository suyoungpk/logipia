<template>
  <section id="lp-section" class="lp-sub p2pMarketDetail">
    <common-nav nowMenu="p2pmarket"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 중고장비 거래장터입니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="gallery-box">
        <div class="top-box">
          <!-- 모바일 경우 back 버튼 노출 -->
          <button class="btn btn-back phase2-mobile2" @click="router.go(-1)">뒤로가기</button>
           <h3 class="tit-name">2010년도 두산 지게차 판매합니다.</h3>
           <div class="seller-menu ">
            <div class="phase2-pc2"> <!-- pc에서 작성자일 경우  -->
              <button type="button" class="ico pencil"> 수정</button>
              <button type="button" class="ico trashcan"> 삭제</button>
            </div>
             <!-- 모바일 작성자일경우 -->
            <!-- <div class="phase2-mobile2"> 
                <button type="button" class="btn btn-mkt-menu" @click="openMenu">제품글메뉴</button>
                <ul class="mkt-menu">
                  <li><button type="button" class="btn" @click="popDelay">판매기간연장</button></li>
                  <li><button type="button" class="btn" >판매완료</button></li>
                  <li><button type="button" class="btn" >수정하기</button></li>
                  <li><button type="button" class="btn" @blur="closeMenu">삭제하기</button></li>
                </ul>
            </div> -->
            <div id="pop-delay" class="popup-wrap pop-delay type03">
                <div class="popup-box">
                  <div class="popup-title">판매기간 연장하기</div>
                  <div class="popup-content">
                    <div class="info-box">
                      <form action="">
                        <div class="seller-box">
                          <label for="postpone">판매기간 연장</label>
                          <span class="lp-select" >
                            <select id="postpone" >
                              <option>1개월</option>
                              <option>3개월</option>
                              <option>6개월</option>
                            </select>
                          </span>
                          <button type="button" class="btn btn-b-line">확인</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <button type="button" class="btn-popup-close" @click="popDelayclose">팝업닫기</button>
                </div>
              </div>
            <!-- 일반사용자일경우 -->
            <span class="interest">
              <input type="checkbox" name="eqip_radio" id="eqip_radio" />
              <label for="eqip_radio">관심장비</label>
            </span>
          </div> 
        </div>
        <!-- slide-box -->   
       <div class="slide-box">
          <hooper  :infiniteScroll="true" :autoPlay="false" ref="hooper" :touchDrag="true" :shortDrag="true"> 
            <slide v-for="(item,i) in slideItems" :key="i">
              <div class="view on">
                <img :src="item" :alt="i+1+'번째 이미지'" />
                <button type="button" class="btn-expand phase2-pc2" @click="openExpand(i)">이미지 크게보기</button>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"  v-if="screenMode=='multi'"></hooper-navigation>
            <hooper-pagination slot="hooper-addons" mode="fraction" v-if="screenMode=='multi'"></hooper-pagination>
          </hooper>
          <ul class="list phase2-pc2"> 
            <li class="photo" v-for="(item,i) in slideItems" :key="i">
              <button type="button" @click="slideTo(i)">
                <img :src="item" :alt="i+1+'번째 이미지 보기'" class="img"/>
              </button>
            </li>
          </ul>
        </div><!-- // slide-box-->
        <div id="openExp" class="popup-wrap expand">
          <div class="popup-box">
            <div class="popup-content">
              <img :src="this.expandedImg" alt="상품 이미지">
            </div>
            <button type="button" class="btn-popup-close" v-on:click="closeExpand">팝업닫기</button>
          </div>
        </div>
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
            <!-- <ul class="m-prod-info">
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
            </ul> -->
            <div class="date">
              등록일 : 2020.03.28
              <div class="chk">
                <!-- 구매자인 경우  -->
                <span class="interest">
                  <input type="checkbox" name="eqip_radio_00" id="eqip_radio_00" />
                  <label for="eqip_radio_00">관심장비</label>
                </span>
                <!--// 구매자인 경우  -->
                <!-- 판매자인 경우  -->
                <!-- <div class="seller-box">
                  <label for="postpone">판매기간 연장</label>
                  <span class="lp-select" id="postpone" >
                    <select> 
                      <option>1개월</option>
                      <option>3개월</option>
                      <option>6개월</option>
                    </select>
                  </span>
                  <button type="button" class="btn btn-b-line">확인</button>
                </div> -->
                <!--// 판매자인 경우  -->
              </div><!-- // chk -->
            </div><!-- // date -->
          </div>
          <dl class="price-box">
            <dt><span class="ico price"></span>판매가격</dt>
            <!-- <dd><em>12,220</em><span>만원</span></dd> -->
            <dd class="soldout"><em>판매완료</em></dd>
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
              <button class="btn btn-b-line btn-soldout">판매완료</button><!-- 작성자일경우 -->
              <button class="btn btn-tab" @click="toggle = !toggle" type="button"></button>
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
          <transition name="slide-fade">
            <a href="/" class="btn btn-otheritems" v-if="toggle">판매자의 다른 상품 보기</a>
          </transition>
        </div><!-- // afterLogin-->
         <!-- 로그인 전 -->
        <div class="beforeLogin" style="display:none">
            <p><strong>판매자 정보는 로그인 후에 조회가 가능합니다.</strong></p>
            <button class="btn btn-blue">로그인</button>
        </div><!-- // beforeLogin-->
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
        <cmt :placeHolder="cmtPlaceholder"></cmt>
        <!-- 제품 리스트 -->
        <div class="prod-list">
          <div class="tit-st1">
            <h3>복잡한 개인거래, 두산 인증제품은 어떠세요?</h3>
            <router-link to="/market/list" class="phase2-pc2">두산 중고제품 더보기</router-link>
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
        <router-link to="/product/rental" class="bnr-box phase2-pc2">
          <strong>"필요할 때 필요한 만큼 비용 걱정없이"</strong><br>
          두산 로지피아 지게차 렌탈을 이용하세요. 바로가기
        </router-link ><!-- // bnr-box  -->
        <div class="btn-box phase2-pc2">
          <button type="button" class="btn btn-black" @click="router.go(-1)">목록으로 이동</button>
        </div><!-- // btn-box  -->
      </div>
       <div class="btn-box phase2-mobile2">  <!-- 모바일 디자인일 경우 작성자 버튼  -->
        <button type="button" class="btn btn-blue">판매완료</button>
      </div><!-- // btn-box  -->
    </div>
<!-- popup-wrap -->
<div id="pop-alert" class="popup-wrap type03" tabindex="0">
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
import Comment from '@/components/common/Comment'
import 'hooper/dist/hooper.css'
import applypop from '@/components/common/popup/applyPop'
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
  },
  components: {
    'common-nav': CommonNav,
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    applypop,
    'cmt': Comment,
  },
  data () {
    return {
      pageTitle: '중고 직거래',
      activetab: 1,
      screenMode:'',
      toggle:'',
      slideItems: [
        require('@/assets/images/img-eqip-gallery.jpg'),
        require('@/assets/images/img-eqip-gallery02.jpg'),
        require('@/assets/images/img-eqip-gallery03.jpg'),
        require('@/assets/images/img-eqip-gallery04.jpg')
      ],
      expandedImg:'',
      playCarousel: null,
      cmtPlaceholder:"댓글 등록 시 판매자 및 구매문의자에게 메일/SMS로 전송됩니다.",
      appendSlider:''
    }
  },
  methods: {
    setScreenMode:function(){
      var w = window.innerWidth;
      if(w>1023) this.screenMode = "pc";
      else this.screenMode = "multi";
    // console.log(this.screenMode);
     this.$refs.hooper.restart();
     if(w>640) this.toggle = true
     else this.toggle = false
    },
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
    openExpand: function (i) {
      this.expandedImg = this.slideItems[i]; 
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
    },
    slideTo:function(index){
      this.$refs.hooper.slideTo(index);
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
      popupWrap.querySelector('button').focus()    
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
    popDelay: function () {
      var popupWrap = document.getElementById('pop-delay') 
      event.target.classList.add('btn-pop-open') //팝업 호출 버튼에 class 추가
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed' 
    },
    popDelayclose: function () {       
      var popupWrap = document.getElementById('pop-delay')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus() 
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    openMenu:function(e){
      if(e.target.classList.contains("on")) e.target.classList.remove("on")
      else  e.target.classList.add("on")
    },
    closeMenu:function(e){
        e.target.parentElement.parentElement.previousElementSibling.classList.remove("on")
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.setScreenMode);
  },
  mounted() {
    //if(!this.$cookies.get('popupAlert'))
   this.popupAlert()
   this.setScreenMode()
    window.addEventListener("resize", this.setScreenMode);
  }
}
</script>
