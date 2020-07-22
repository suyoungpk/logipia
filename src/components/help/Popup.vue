<template>
  <section id="lp-section" class="lp-sub">
    <common-nav nowMenu="cst"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>텍스트</span>
    </div>
    <div class="sub-wrap">
      <!-- g-box -->
      <div class="g-box" id="Popup">
        <strong class="g-tit">Popup</strong>
        <button type="button" class="btn-pop" v-on:click="popupBtn1">마이페이지 팝업</button>
        <button type="button" class="btn-pop" v-on:click="popupBtn2">최근 본 장비 팝업</button>
        <!-- 마이페이지 팝업 -->
        <div id="pop1" class="popup-wrap">
          <div class="popup-box pop-mypage">
            <div class="popup-title">
              마이페이지
            </div>
            <div class="popup-content">
              <div class="mypage-top">
                <div class="my-info">
                  <span class="ico"></span>
                  <span class="name">홍길동</span>
                  <p class="info">고객님은 <span>사업자회원</span>입니다.</p>
                </div>
                <div class="my-btn">
                  <button type="button" class="btn-black">나의 상담내역 바로가기</button>
                </div>
              </div>
              <!-- 관심장비 -->
              <div class="pop-eqip-top">
                <span class="title">관심장비 : 7대</span>
                <p class="txt-eqip">※ 최대 8대까지 등록가능합니다.</p>
              </div>
              <div class="slider-box">
                <ul class="pop-eqip-list">
                  <!--두산인증 : certify, 추천제품 : recommend, 신규등록 : new, 판매완료 : complete 추가-->
                  <li v-for="(data) in listData01" :key="data.eqipSeq" :class="data.type">
                    <div>
                      <a href="javascript:void()" class="img">
                        <img :src="data.thumbnail" :alt="data.alt" />
                        <span class="badge">{{data.mark}}</span>
                      </a>
                      <p class="name">
                        <a href="javascript:void()">{{data.name}}</a>
                      </p>
                      <p class="info">{{data.info01}} / {{data.info02}}</p>
                      <p class="address">{{data.info03}} / {{data.info04}}</p>
                      <div class="chk">
                        <span class="interest">
                          <input  type="checkbox" :name="data.eName" :id="data.eId" />
                          <label :for="data.eFor">관심장비</label>
                        </span>
                        <span class="place"><em>{{data.price}}</em>{{data.unit}}</span>
                      </div>
                    </div>
                  </li>
                  <!--<li class="no-data">검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</li>검색결과 없음-->
                </ul>
              </div>
              <!-- //관심장비 -->
              <!-- 최근 본 장비 -->
              <div class="pop-eqip-top">
                <span class="title">최근 본 장비</span>
                <p class="txt-eqip">※ 최근 확인하신 4대의 장비가 출력됩니다.</p>
              </div>
              <ul class="pop-eqip-list">
                <!--두산인증 : certify, 추천제품 : recommend, 신규등록 : new, 판매완료 : complete 추가-->
                <li v-for="(data) in listData02" :key="data.eqipSeq" :class="data.type">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img :src="data.thumbnail" :alt="data.alt" />
                      <span class="badge">{{data.mark}}</span>
                    </a>
                    <p class="name">
                      <a href="javascript:void()">{{data.name}}</a>
                    </p>
                    <p class="info">{{data.info01}} / {{data.info02}}</p>
                    <p class="address">{{data.info03}} / {{data.info04}}</p>
                    <div class="chk">
                      <span class="interest">
                        <input  type="checkbox" :name="data.eName" :id="data.eId" />
                        <label :for="data.eFor">관심장비</label>
                      </span>
                      <span class="place"><em>{{data.price}}</em>{{data.unit}}</span>
                    </div>
                  </div>
                </li>
                <!--<li class="no-data">검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</li>검색결과 없음-->
                <!-- //최근 본 장비 -->
              </ul>
            </div>
            <button type="button" class="btn-popup-close" v-on:click="popupClose1">팝업닫기</button>
          </div>
        </div>
        <!-- //마이페이지 팝업 -->
        <!-- 최근 본 장비 팝업 -->
        <div id="pop2" class="popup-wrap">
          <div class="popup-box pop-eqip">
            <div class="popup-title">
              최근 본 장비
            </div>
            <div class="popup-content">
              <p class="txt-eqip">※ 최근 확인하신 4대의 장비가 출력됩니다.</p>
              <ul class="pop-eqip-list">
                <!--두산인증 : certify, 추천제품 : recommend, 신규등록 : new, 판매완료 : complete 추가-->
                <li v-for="(data) in listData03" :key="data.eqipSeq" :class="data.type">
                  <div>
                    <a href="javascript:void()" class="img">
                      <img :src="data.thumbnail" :alt="data.alt" />
                      <span class="badge">{{data.mark}}</span>
                    </a>
                    <p class="name">
                      <a href="javascript:void()">{{data.name}}</a>
                    </p>
                    <p class="info">{{data.info01}} / {{data.info02}}</p>
                    <p class="address">{{data.info03}} / {{data.info04}}</p>
                    <div class="chk">
                      <span class="interest">
                        <input  type="checkbox" :name="data.eName" :id="data.eId" />
                        <label :for="data.eFor">관심장비</label>
                      </span>
                      <span class="place"><em>{{data.price}}</em>{{data.unit}}</span>
                    </div>
                  </div>
                </li>
                <!--<li class="no-data">검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</li>검색결과 없음-->
              </ul>
              <div class="pop-eqip-bottom">
                <p class="txt">로그인을 하시면 더 많은 서비스를 <span>이용하실 수 있습니다.</span></p>
                <button type="button" class="btn-black">로그인</button>
              </div>
            </div>
            <button type="button" class="btn-popup-close" v-on:click="popupClose2">팝업닫기</button>
          </div>
        </div>
        <!-- //최근 본 장비 팝업 -->
      </div>
      <!-- //g-box -->
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Guide',
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '팝업',
      activetab: 1,
      listData01: [
        {
          eqipSeq: 1,
          eId: 'eqip01',
          eName: 'eqip01',
          eFor: 'eqip01',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip02',
          eName: 'eqip02',
          eFor: 'eqip02',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip03',
          eName: 'eqip03',
          eFor: 'eqip03',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip04',
          eName: 'eqip04',
          eFor: 'eqip04',
          type: 'complete',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '가격협의'
        }
      ],
      listData02: [
        {
          eqipSeq: 1,
          eId: 'eqip05',
          eName: 'eqip05',
          eFor: 'eqip05',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip06',
          eName: 'eqip06',
          eFor: 'eqip06',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip07',
          eName: 'eqip07',
          eFor: 'eqip07',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip08',
          eName: 'eqip08',
          eFor: 'eqip08',
          type: 'complete',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '가격협의'
        }
      ],
      listData03: [
        {
          eqipSeq: 1,
          eId: 'eqip09',
          eName: 'eqip09',
          eFor: 'eqip09',
          type: 'certify',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '두산인증',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,400',
          unit: '만원'
        },
        {
          eqipSeq: 2,
          eId: 'eqip10',
          eName: 'eqip10',
          eFor: 'eqip10',
          type: 'recommend',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '추천제품',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '2,400',
          unit: '만원'
        },
        {
          eqipSeq: 3,
          eId: 'eqip11',
          eName: 'eqip11',
          eFor: 'eqip11',
          type: 'new',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '신규등록',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '3,200',
          unit: '만원'
        },
        {
          eqipSeq: 4,
          eId: 'eqip12',
          eName: 'eqip12',
          eFor: 'eqip12',
          type: 'complete',
          thumbnail: require('../../assets/images/img-eqip-thumb.png'),
          alt: '상품이미지',
          mark: '판매완료',
          name: 'G33S-5',
          info01: 'LPG',
          info02: '1~3.3톤',
          info03: '2012년',
          info04: '청북읍',
          price: '가격협의'
        }
      ]
    }
  },
  methods: {
    popupBtn1: function () {
      var popupWrap = document.getElementById('pop1')
      if (popupWrap.classList.contains('on')) {
        popupWrap.classList.remove('on')
      } else {
        popupWrap.classList.add('on')
        document.querySelector('body').classList.add('popup-open')
      }
    },
    popupClose1: function () {
      var popupWrap = document.getElementById('pop1')
      popupWrap.classList.remove('on')
      document.querySelector('body').classList.remove('popup-open')
    },
    popupBtn2: function () {
      var popupWrap = document.getElementById('pop2')
      if (popupWrap.classList.contains('on')) {
        popupWrap.classList.remove('on')
      } else {
        popupWrap.classList.add('on')
        document.querySelector('body').classList.add('popup-open')
      }
    },
    popupClose2: function () {
      var popupWrap = document.getElementById('pop2')
      popupWrap.classList.remove('on')
      document.querySelector('body').classList.remove('popup-open')
    }
  }
}
</script>

<style>
</style>
