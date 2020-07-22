<template>
  <!-- header -->
  <header class="lp-header">
    <dl id="skiptoContent" >
        <dt><strong class="invisible">Shortcut menu</strong></dt> 
        <dd>
          <a href="javascript:void(0)" id="default-focus"></a>
          <a href="#lp-section" onclick="document.getElementById('lp-section').tabIndex = -1;document.getElementById('lp-section').focus();return false;" >본문 바로가기</a>
        </dd>
    </dl>
    <div class="lp-member">
      <ul>
        <li><router-link to="/intro/intro">회사소개</router-link></li>
        <li class="outlink"><a href="http://www.doosan-iv.com/kr/product/" target="_blank" title="새 창">지게차 정보</a></li>
        <li><router-link to="/login">로그인</router-link></li>
        <li><router-link to="/main">로그아웃</router-link></li>
        <li><router-link to="/member/jstep1">회원가입</router-link></li>
        <li><router-link to="/member/mypage">마이페이지</router-link></li>
       
       
        <li class="new"><button type="button" @click="popNew">최근 본 장비<em>신규</em></button>
          <!-- 최근 본 장비 팝업 -->
          <div id="pop-new" class="popup-wrap">
            <div class="popup-box pop-eqip">
              <div class="popup-title">
                최근 본 장비
              </div>
              <div class="popup-content">
                <div class="pop-eqip-top phase2-pc phase2-tablet">
                  <span class="badge"><strong>두산 중고마켓</strong></span>
                  <p class="txt-eqip">※ 최근 확인하신 4대의 장비가 출력됩니다.</p>
                </div>
                <div class="accodion-tit phase2-mobile">
                   <p>※ 최근 확인하신 4대의 장비가 출력됩니다.</p>
                  <button type="button" :class="['btn-accordion',(accordion[0])?'on':'']" @click="headerAccordion($event,0)">로지피아 중고</button>
                </div>
                <transition name="slide-fade">
                <ul class="pop-eqip-list" v-show="accordion[0]">
                  <!--두산인증 : certify, 추천제품 : recommend, 신규등록 : new, 판매완료 : complete 추가-->
                  <li v-for="(data) in listData03" :key="data.eqipSeq" :class="data.type">
                    <div>
                      <a href="javascript:void(0)" class="img">
                        <img :src="data.thumbnail" :alt="data.alt" />
                        <span class="badge">{{data.mark}}</span>
                      </a>
                      <p class="name">
                        <a href="javascript:void(0)">{{data.name}}</a>
                      </p>
                      <p class="info">{{data.info01}} / {{data.info02}} / {{data.info03}}</p>
                      <p class="load">{{data.info04}}</p>
                      <p class="address">{{data.info05}}</p>
                      <div class="chk">
                        <span class="interest">
                          <input  type="checkbox" :name="data.eName" :id="data.eId" />
                          <label :for="data.eFor">관심장비</label>
                        </span>
                        <span class="place"><em>{{data.price}}</em>{{data.unit}}</span>
                      </div>
                    </div>
                  </li>
                  <li class="no-data">최근 본 장비가 없습니다.</li>
                  <!-- 데이터 없을 경우 -->
                </ul>
                </transition>
                 <div class="pop-eqip-top phase2-pc phase2-tablet">
                  <span class="badge"><strong>중고 직거래</strong></span>
                  <p class="txt-eqip">※ 최근 확인하신 4대의 장비가 출력됩니다.</p>
                </div>
                <div class="accodion-tit phase2-mobile">
                  <button type="button" :class="['btn-accordion',(accordion[1])?'on':'']"  @click="headerAccordion($event,1)">중고직거래</button>
                </div>
                <transition name="slide-fade">
                <ul class="pop-eqip-list" v-show="accordion[1]">
                  <!--두산인증 : certify, 추천제품 : recommend, 신규등록 : new, 판매완료 : complete 추가-->
                  <li v-for="(data) in listData03" :key="data.eqipSeq" :class="data.type">
                    <div>
                      <a href="javascript:void(0)" class="img">
                        <img :src="data.thumbnail" :alt="data.alt" />
                        <span class="badge">{{data.mark}}</span>
                      </a>
                      <p class="name">
                        <a href="javascript:void(0)">{{data.name}}</a>
                      </p>
                      <p class="info">{{data.info01}} / {{data.info02}} / {{data.info03}}</p>
                      <p class="load">{{data.info04}}</p>
                      <p class="address">{{data.info05}}</p>
                      <div class="chk">
                        <span class="interest">
                          <input  type="checkbox" :name="data.eName" :id="data.eId" />
                          <label :for="data.eFor">관심장비</label>
                        </span>
                        <span class="place"><em>{{data.price}}</em>{{data.unit}}</span>
                      </div>
                    </div>
                  </li>
                  <li class="no-data">최근 본 장비가 없습니다.</li>
                  <!-- 데이터 없을 경우 -->
                </ul>
                 </transition>
                <div class="pop-eqip-bottom">
                  <p class="txt">로그인을 하시면 더 많은 서비스를 <span>이용하실 수 있습니다.</span></p>
                  <button type="button" class="btn-black">로그인</button>
                </div>
              </div>
              <button type="button" class="btn-popup-close" @click="popNewClose">팝업닫기</button>
            </div>
          </div>
          <!-- //최근 본 장비 팝업 -->
        </li>
      </ul>
    </div>
    <h1 class="lp-logo">
        <span><router-link to="/main">DOOSAN LOGIPIA 로고</router-link></span>
    </h1>
    <div id="lp-menu" class="lp-menu">
        <nav>
            <div class="gnb-main gnb-menu">
                <ul>
                    <!-- <li class="depth market"><a href="/product/logipia-used" @focus="gnb_blur">중고마켓</a></li>
                    <li class="depth service"><a href="/product/doosan-care-service" @focus="gnb_focus" @mouseout="gnb_blur">정비서비스</a>
                        <ul class="gnb-con">
                            <li><a href="/product/doosan-care-service">두산 케어 서비스</a></li>
                            <li><a href="/product/paid-service">유상 정비 서비스</a></li>
                        </ul>
                    </li>
                    <li class="depth rent"><a href="/product/rental" @focus="gnb_blur">렌탈</a></li> -->
                    <!-- <li class="depth part"><a href="/parts/Part" @focus="gnb_blur">부품</a></li> -->
                    <li class="depth product"><a href="/product/rental" @focus="gnb_focus" @mouseout="gnb_blur">상품</a>
                      <ul class="gnb-con">
                          <li><a href="/product/rental">렌탈</a></li>
                          <li><a href="/product/smart-lease">스마트 리스</a></li>
                          <li><a href="/product/sales">판매</a></li>
                          <li><a href="/product/logipia-used">로지피아 중고</a></li>
                          <li><a href="/product/doosan-care-service">정비서비스</a>
                              <ul>
                                  <li><a href="/product/doosan-care-service">두산케어 서비스</a></li>
                                  <li><a href="/product/paid-service">유상정비 서비스</a></li>
                              </ul>
                          </li>
                      </ul>
                    </li>
                    <li class="depth rental"><a href="/product/rental" @focus="gnb_blur">렌탈</a></li>
                    <li class="depth logipiaUsed"><a href="/product/logipia-used" @focus="gnb_blur">로지피아 중고</a></li>
                    <li class="depth automation">
                      <a href="/automation-and-industrial/AGF" @focus="gnb_focus" @mouseout="gnb_blur">
                        <span>
                          Automation &<br>Industrial
                        </span>
                      </a>
                      <ul class="gnb-con">
                          <li><a href="/automation-and-industrial/AGF">무인지게차</a></li>
                          <li><a href="/automation-and-industrial/compact-excavators">미니굴삭기</a></li>
                          <li><a href="/automation-and-industrial/cobots">협동 로봇</a></li>
                      </ul>
                    </li>
                    <!-- <li class="depth center"><a href="/service-center/notice" @focus="gnb_focus" @mouseout="gnb_blur">고객센터</a>
                       <ul class="gnb-con">
                          <li><a href="/service-center/notice">공지사항</a></li>
                          <li><a href="/service-center/event">이벤트</a></li>
                          <li><a href="/service-center/consult-add">1:1 문의</a>
                              <ul>
                                  <li><a href="/service-center/consult-add">상담신청</a></li>
                                  <li><a href="/service-center/consult-list">문의내역 보기</a></li>
                              </ul>
                          </li>
                          <li><a href="/service-center/faq">FAQ</a></li> 
                          <li><a href="/service-center/network">두산 네트워크</a></li>
                      </ul>
                    </li>
                    <li class="depth p2pmarket"><a href="/p2p-market" @focus="gnb_blur">중고직거래</a></li> -->
                </ul>
            </div>
            <div class="gnb-sub gnb-main">
                 <ul class="gnb-menu">
                   <!-- <li class="depth intro">
                        <a href="/intro/CompanyIntro" @focus="gnb_focus" @mouseout="gnb_blur">회사소개</a>
                        <ul class="gnb-con">
                            <li><a href="/intro/CompanyIntro">회사소개</a></li>
                            <li><a href="/intro/History">연혁</a></li>
                            <li ><a href="/intro/Intro">두산 로지피아</a></li>
                            <li><a href="/intro/Credo">고객 핵심가치</a></li>
                            <li><a href="/intro/Vod">홍보영상</a></li>
                            <li><a href="/intro/Place">찾아오시는 길</a></li>
                        </ul>
                    </li>-->
                   <li class="depth center"><a href="/service-center/notice" @focus="gnb_focus" @mouseout="gnb_blur">고객센터</a>
                       <ul class="gnb-con">
                          <li><a href="/service-center/notice">공지사항</a></li>
                          <li><a href="/service-center/event">이벤트</a></li>
                          <li><a href="/service-center/consult-add">1:1 문의</a>
                              <ul>
                                  <li><a href="/service-center/consult-add">상담신청</a></li>
                                  <li><a href="/service-center/consult-list">문의내역 보기</a></li>
                              </ul>
                          </li>
                          <li><a href="/service-center/faq">FAQ</a></li> 
                          <li><a href="/service-center/network">두산 네트워크</a></li>
                          <li><a href="/service-center/reference">자료실</a></li>
                      </ul>
                    </li>
                    <li class="depth p2pmarket"><a href="/p2p-market" @focus="gnb_blur">중고직거래</a></li>
                </ul> 
                <div class="lp-gnb-all">
                    <button type="button" class="btn-menu" @click="menu_all_open" @focus="gnb_blur">전체메뉴 열기</button>
                    <div class="menu-all">
                        <div class="member">
                          <p>
                            <span @click="all_menu_close"><router-link to="/intro/intro">회사소개</router-link></span>
                            <span @click="all_menu_close" class="outlink"><a href="http://www.doosan-iv.com/kr/product/" target="_blank" title="새 창">지게차 정보</a></span>
                          </p>
                         <p class="member-menu">
                            <span @click="all_menu_close"><router-link to="/login">로그인</router-link></span>
                            <span @click="all_menu_close"><router-link to="/member/Jstep1">회원가입</router-link></span>
                            <!--로그아웃, 회원정보 수정 같이 보여지거나 숨겨짐 -->
                            <!--<span @click="all_menu_close"><a href="/">로그아웃</a></span>--> 
                            <!--<span @click="all_menu_close"><a href="/member/mypage">마이페이지</a></span>-->
                          </p>
                        </div>
                        <ul>
                            <!-- <li><span @click="all_menu_close"><router-link to="/market/Eqip">중고마켓</router-link></span></li> -->
                            <li class="gnb-list"><span @click="all_menu_depth">상품</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/product/rental">렌탈</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/product/smart-lease">스마트 리스</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/product/sales">판매</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/product/logipia-used">로지피아 중고</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/automation-and-industrial/AGF">무인 지게차</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/product/doosan-care-service">정비서비스</router-link>
                                       <ul>
                                          <li><router-link to="/product/doosan-care-service">두산케어 서비스</router-link></li>
                                          <li><router-link to="/product/paid-service">유상정비 서비스</router-link></li>
                                      </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><span @click="all_menu_close"><router-link to="/product/rental">렌탈</router-link></span></li>
                            <li><span @click="all_menu_close"><router-link to="/product/logipia-used">로지피아 중고</router-link></span></li>
                            <li class="gnb-list">
                                <span @click="all_menu_depth">Automation & <br class="phase2-tablet phase2-mobile">Industrial</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/automation-and-industrial/AGF">무인 지게차</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/automation-and-industrial/compact-excavators">미니굴삭기</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/automation-and-industrial/cobots">협동로봇</router-link></li>
                                </ul>
                            </li>
                            <li class="gnb-list">
                                <span @click="all_menu_depth">고객센터</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/service-center/notice">공지사항</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/service-center/event">이벤트</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/service-center/consult-add">1:1 문의</router-link>
                                        <ul>
                                            <li><router-link to="/service-center/consult-add">상담신청</router-link></li>
                                            <li><router-link to="/service-center/consult-list">문의내역 보기</router-link></li>
                                        </ul>
                                    </li>
                                    <li @click="all_menu_close"><router-link to="/service-center/faq">FAQ</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/service-center/network">두산 네트워크</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/service-center/reference">자료실</router-link></li>
                                </ul>
                            </li>
                            <li><span @click="all_menu_close"><router-link to="/p2p-market">중고직거래</router-link></span></li>
                            <!-- <li><span @click="all_menu_close"><router-link to="/center/Refr">자료실</router-link></span></li> -->
                            <li class="gnb-list">
                                <span @click="all_menu_depth">회사소개</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/intro/intro">두산 로지피아</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/intro/credo">고객 핵심가치</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/intro/history">연혁</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/intro/vod">홍보영상</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/intro/place">찾아오시는 길</router-link></li>
                                </ul>
                            </li>
                            <li class="gnb-list m-hide">
                                <span @click="all_menu_depth">회원</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/login">로그인</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/member/jstep1">회원가입</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/member/findId">아이디/비밀번호 찾기</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/member/myinfo1">회원정보 수정</router-link></li>
                                </ul>
                            </li>
                            <li class="gnb-list m-hide">
                                <span @click="all_menu_depth">기타</span>
                                <ul>
                                    <li @click="all_menu_close"><router-link to="/help/user-term">이용약관</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/help/privacy">개인정보처리방침</router-link></li>
                                    <li @click="all_menu_close"><router-link to="/help/media">영상정보처리방침</router-link></li>
                                </ul>
                            </li>
                            <li class="eqip">
                              <span>
                                <button type="button" class="btnEqip" @click="popupApplyHeader">장비 판매문의</button>
                              </span>
                            </li>
                        </ul>
                        <button type="button" class="closebtn" @click="close_nav">전체 메뉴 닫기</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  </header>
  <!-- //header -->
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Header',
  components: {
    carousel
  },
  data () {
    return {
      pageTitle: '팝업',
      activetab: 1,
      accordion:{0:false,1:false},
      screenMode:'',
      listData01: [
        {
          eqipSeq: 1,
          eId: 'eqip01-01',
          eIdM: 'eqip01-01M',
          eName: 'eqip01-01',
          eNameM: 'eqip01-01M',
          eFor: 'eqip01-01',
          eForM: 'eqip01-01M',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip01-02',
          eIdM: 'eqip01-02M',
          eName: 'eqip01-02',
          eNameM: 'eqip01-02M',
          eFor: 'eqip01-02',
          eForM: 'eqip01-02M',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-gallery.jpg'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip01-03',
          eIdM: 'eqip01-03M',
          eName: 'eqip01-03',
          eNameM: 'eqip01-03M',
          eFor: 'eqip01-03',
          eForM: 'eqip01-03M',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip01-04',
          eIdM: 'eqip01-04M',
          eName: 'eqip01-04',
          eNameM: 'eqip01-04M',
          eFor: 'eqip01-04',
          eForM: 'eqip01-04M',
          type: 'complete',
          thumbnail: require('../../assets/images/../../assets/images/img-history.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '가격협의'
        },
        {
          eqipSeq: 5,
          eId: 'eqip01-05',
          eIdM: 'eqip01-05M',
          eName: 'eqip01-05',
          eNameM: 'eqip01-05M',
          eFor: 'eqip01-05',
          eForM: 'eqip01-05M',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 6,
          eId: 'eqip01-05',
          eIdM: 'eqip01-05M',
          eName: 'eqip01-05',
          eNameM: 'eqip01-05M',
          eFor: 'eqip01-05',
          eForM: 'eqip01-05M',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 7,
          eId: 'eqip01-05',
          eIdM: 'eqip01-05M',
          eName: 'eqip01-05',
          eNameM: 'eqip01-05M',
          eFor: 'eqip01-05',
          eForM: 'eqip01-05M',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 8,
          eId: 'eqip01-05',
          eIdM: 'eqip01-05M',
          eName: 'eqip01-05',
          eNameM: 'eqip01-05M',
          eFor: 'eqip01-05',
          eForM: 'eqip01-05M',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        }
      ],
      listData02: [
        {
          eqipSeq: 1,
          eId: 'eqip02-01',
          eName: 'eqip02-01',
          eFor: 'eqip02-01',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip02-02',
          eName: 'eqip02-02',
          eFor: 'eqip02-02',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-gallery.jpg'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip02-03',
          eName: 'eqip02-03',
          eFor: 'eqip02-03',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip02-04',
          eName: 'eqip02-04',
          eFor: 'eqip02-04',
          type: 'complete',
          thumbnail: require('../../assets/images/../../assets/images/img-history.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '가격협의'
        }
      ],
      listData03: [
        {
          eqipSeq: 1,
          eId: 'eqip03-01',
          eName: 'eqip03-01',
          eFor: 'eqip03-01',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip03-02',
          eName: 'eqip03-02',
          eFor: 'eqip03-02',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-gallery.jpg'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip03-03',
          eName: 'eqip03-03',
          eFor: 'eqip03-03',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip03-04',
          eName: 'eqip03-04',
          eFor: 'eqip03-04',
          type: 'complete',
          thumbnail: require('../../assets/images/../../assets/images/img-history.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: '전동좌식',
          info02: '2009년',
          info03: '10,883시간',
          info04: '2톤 ~ 4톤 미만(전동식 좌식)',
          info05: '경기 평택시 청북읍 청원로 211-21',
          price: '가격협의'
        }
      ]
    }
  },
  methods: {
    menu_all_open: function (event) {
      if (event) {
        event.target.parentElement.parentElement.parentElement.parentElement.classList.add('on')
        document.querySelector('body').classList.add('open')
        if (document.getElementById('lnb_menu_1')) {
          document.getElementById('lnb_menu_1').classList.remove('on')
        }
        if (document.getElementById('lnb_menu_2')) {
          document.getElementById('lnb_menu_2').classList.remove('on')
        }
      }/* 2019.06.14 수정 */
    },
    close_nav: function (event) {
      document.getElementById('lp-menu').classList.remove('on')
      document.querySelector('body').classList.remove('open')
    },
    gnb_focus: function (event) {
      Array.from(document.getElementsByClassName('depth')).forEach(function (e) {
        e.classList.remove('open')
      })
      if (event) {
        event.target.parentElement.classList.add('open')
      }
    },
    gnb_blur: function (event) {
      Array.from(document.getElementsByClassName('depth')).forEach(function (e) {
        e.classList.remove('open')
      })
    },
    all_menu_depth: function (event) {
      if (event) {
        if (event.target.parentElement.classList.contains('on')) {
          event.target.parentElement.classList.remove('on')
        } else {
          event.target.parentElement.classList.add('on')
        }
      }
    },
    all_menu_close: function () {
      document.querySelector('body').classList.remove('open')
      document.getElementById('lp-menu').classList.remove('on')
    },
    popMypage: function () {
      var popupWrap = document.getElementById('pop-mypage')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('body').classList.add('on-top')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popMypageClose: function () {
      var popupWrap = document.getElementById('pop-mypage')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('on-top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    popNew: function () {
      var popupWrap = document.getElementById('pop-new')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('body').classList.add('on-top')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popNewClose: function () {
      var popupWrap = document.getElementById('pop-new')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('on-top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    },
    popupApplyHeader: function () {
      var popupWrap = document.getElementById('pop-apply')
      document.querySelector('body.open').classList.remove('open')
      document.querySelector('#lp-menu').classList.remove('on')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    headerAccordion:function(e,n){
      
      if(e.target.classList.contains('on'))
        this.accordion[parseInt(n)]=false
      else
        this.accordion[parseInt(n)]=true
    },
     setScreenMode:function(){
      var w = window.innerWidth;
      if(w>1024) this.screenMode = "pc";
      else if(w<=1024 && w>640)  this.screenMode = "tablet";
      else this.screenMode = "mobile";
      if(this.screenMode == 'pc' || this.screenMode == 'tablet'){
        //pc일 경우 리스트 그대로
         this.accordion[0]=true;
         this.accordion[1]=true;
      }
    }
  },
  mounted(){
     // default 초점 이동 설정
     document.getElementById('default-focus').focus()
     document.getElementById('default-focus').blur()
      this.setScreenMode(); // 현재 스크린모드 셋팅
      window.addEventListener("resize",this.setScreenMode)//리사이징으로 모드 업데이트
  }
}
</script>