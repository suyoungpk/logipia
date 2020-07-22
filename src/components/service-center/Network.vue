<template>
  <section id="lp-section" class="lp-sub ntw">
    <common-nav nowMenu="ntw"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>국내 최대의 정비망인 두산 네트워크를 소개합니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="sch-box">
        <div class="lp-select">
          <select>
              <option>선택</option>
              <option>로지피아 사업소</option>
              <option>판매점</option>
              <option>부품대리점</option>
              <option>지정정비업체</option>
          </select>
        </div>
        <input type="text"  class="sch-inp" title="업체명 검색" placeholder="업체명으로 검색이 가능합니다.">
        <button class="btn-sch" type="button">검색</button>
      </div>
      <div class="lp-board">
        <p class="total"><span>123</span>건</p>
        <div class="board">
          <p class="title">
            <span class="category">구분</span>
            <span class="crop">업체명</span>
            <span class="address">주소</span>
            <span class="tel">전화번호</span>
            <span class="btn-map">지도</span>
          </p>
          <ul>
            <li>
              <span class="category">로지피아 사업소</span>
              <span class="crop">두산 로지피아</span>
              <span class="address">경남 창원시 의창구 차상로 18번길 45 농산물도매시장 청과동 2층 2</span>
              <span class="tel">031)681-9900</span>
              <span class="btn-map"><button type="button" v-on:click="map_btn" class="btn">보기</button></span>
            </li>
            <li class="map">
              <div class="network-map-box" style="background:#eee;"></div>
            </li>
            <li>
              <span class="category">로지피아 사업소</span>
              <span class="crop">두산 로지피아</span>
              <span class="address">경남 창원시 의창구 차상로 18번길 45 농산물도매시장 청과동 2층 2</span>
              <span class="tel">031)681-9900</span>
              <span class="btn-map"><button type="button" v-on:click="map_btn" class="btn">보기</button></span>
            </li>
            <li class="map">
              <div class="network-map-box" style="background:#eee;"></div>
            </li>
          </ul>
        </div>
        <paging></paging>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Network',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 두산 네트워크',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 두산 네트워크 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 두산 네트워크' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '두산 네트워크'
    }
  },
  methods: {
    map_btn: function (event) {
      if (event) {
        if (event.target.parentElement.parentElement.nextElementSibling.style.maxHeight) {
          event.target.innerText = '보기'
          event.target.parentElement.parentElement.classList.remove('on')
          event.target.parentElement.parentElement.nextElementSibling.style.maxHeight = null
        } else {
          var i
          for (i = 0; i < document.getElementsByClassName('map').length; i++) {
            document.getElementsByClassName('map')[i].previousElementSibling.classList.remove('on')
            document.getElementsByClassName('map')[i].style.maxHeight = null
            document.getElementsByClassName('map')[i].previousElementSibling.querySelector('.btn-map').querySelector('.btn').innerText = '보기'
          }
          event.target.innerText = '닫기'
          event.target.parentElement.parentElement.classList.add('on')
          event.target.parentElement.parentElement.nextElementSibling.style.maxHeight = 390 + 'px'
        }
      }
    }
  }
}
</script>

<style>
</style>
