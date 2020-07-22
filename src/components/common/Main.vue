<template>
  <section id="lp-section" class="lp-main">
    <article class="main-slide-wrap">
      <div class="main-slide" id="owl">
        <carousel
        :autoplay="false"
        :items="1"
        :loop="true"
        :autoplayHoverPause="false"
        dotsContainer="true, .indicator"
        navElement="button"
        >
        <div class="slide" v-for="item in items" v-bind:key="item.no">
          <a :href="item.linkUrl" :target="item.pcLink" class="pc">
            <img :src="item.pcImages" :alt="item.pcAlt" />
          </a>
          <a :href="item.linkUrl" :target="item.mobileLink" class="moblie">
            <img :src="item.mobileImages" :alt="item.mobileAlt" />
          </a>
        </div>
        </carousel>
        <ul id="indicator" class="indicator">
          <li v-for="item in items" :key="item.no">
            <button type="button"></button>
            <span class="btn-inner">
                {{item.indicatorTextEm}}
                <em>{{item.indicatorText}}</em>
            </span>
          </li>
        </ul>
        <button type="button" id="main-play" class="play" @click="mainPlay">슬라이드 재생</button>
        <button type="button" id="main-stop" class="stop" @click="mainStop">슬라이드 정지</button>
      </div>
    </article>
  <article class="main-sch">
    <div class="inner-wrap">
      <p>두산 로지피아의 매물을 검색해보세요.</p>
      <div class="sch-box">
        <input type="text"  class="sch-inp" title="두산 로지피아의 매물을 검색 입력" placeholder="모델명으로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
    </div>
  </article>
  <article class="main-prod">
    <div class="title-box">
      <div class="inner-wrap">
          <div class="tit-box">
            <p class="tit"><strong>중고지게차</strong>, 이젠 두산에서 거래하세요!</p>
            <span class="txt">두산 로지피아에 등록된 다양한 매물과 <br><em class="tp01">QUICK</em> &amp; <em class="tp02">SMART</em>한 중고지게차 거래를 만나보세요<em class="itc">!</em></span>
          </div>
          <ul class="choice-doosan">
            <li>
              <p class="tit">
                <strong>QUICK 검색</strong>으로 빠르게!
              </p>
              <p class="txt">
                마우스 클릭으로<br>
                원하는 물품을 빠르게!
              </p>
            </li>
            <li>
              <p class="tit">
                <strong>빠르고 쉬운</strong> 구매신청
              </p>
              <p class="txt">
                복잡한 거래를<br>문의 한번으로 쉽게!
              </p>
            </li>
            <li>
              <p class="tit">
                <strong>편리한</strong> 판매신청
              </p>
              <p class="txt">
                복잡한 판매신청,<br>이름, 연락처만으로 간편하게
              </p>
            </li>
          </ul>
      </div>
    </div>  <!-- title-box -->
    <div class="inner-wrap">
      <mainList></mainList>
    </div><!-- inner-wrap -->
  </article><!-- main-prod -->
  <article class="main-link">
    <dl>
      <dt>내 장비 판매 신청</dt>
      <dd>이름, 연락처를 남겨주시면 <br>두산 로지피아 직원이 바로 연락드립니다.</dd>
    </dl>
    <button type="button" class="btn" @click="popupApplyMain">판매신청하기</button>
  </article>
  <article class="main-quick">
    <div class="tit-box">
      <p class="tit">두산이 하면 <strong>빠르고 스마트</strong><em>해집니다.</em></p>
      <span class="txt">두산 로지피아가 제공하는 <br><em class="tp01">QUICK</em> &amp; <em class="tp02">SMART</em> 서비스를 만나보세요<em class="itc">!</em></span>
    </div>
    <ul class="quick">
      <li class="rent">
        <strong>렌탈</strong>
        <span>부담은 낮추고 효율은 올리는 스마트한 선택 <br>고객 맞춤 렌탈 프로그램을 만나보세요<em class="itc">!</em></span>
        <span class="btn"><router-link to="/rental/Rent" class="btn-arr">바로가기</router-link></span>
      </li>
      <li class="part">
        <router-link to="/service/Dscare" class="btn-arr">
          <strong>정비서비스</strong>
          <span>두산의 강력한 전국서비스 네트워크를 통해 <br>빠르게 차량상태를 진단하고 정비하세요<em class="itc">!</em></span>
        </router-link>
      </li>
      <li class="service">
        <router-link to="/parts/Part" class="btn-arr">
          <strong>부품</strong>
          <span>장비의 퍼포먼스를 향상시키며,  효율적인 연비로 <br>비용을 절감시키는 두산순정부품을 확인하세요<em class="itc">!</em></span>
        </router-link>
      </li>
    </ul>
  </article>
  <article class="main-feature">
    <div class="tit-box">
      <p class="tit"><strong>두산 로지피아</strong>를 선택해야 하는 이유</p>
      <span class="txt"><em class="tp01">QUICK</em> &amp; <em class="tp02">SMART</em> 라는 모토로 다양한 상품과 <br>서비스를 제공하여 고객 만족을 실현하고자 합니다.</span>
    </div>
    <ul class="feature">
      <li class="odd">
        <dl>
          <dt>
            <span class="num">01</span>신뢰
          </dt>
          <dd>국내 최초, 최고의 지게차 기업 <br>㈜두산산업차량이 설립하였습니다.</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <span class="num">02</span>빠르게
          </dt>
          <dd>전국의 두산네트워크를 통해 <br>어느 곳이든 빠르게 달려가겠습니다.</dd>
        </dl>
      </li>
      <li class="odd">
        <dl>
          <dt>
            <span class="num">03</span>똑똑하게
          </dt>
          <dd>로지피아 디지털 플랫폼을 통해 <br>쉽고 편리하게 이용할 수 있습니다.</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <span class="num">04</span>고객만족
          </dt>
          <dd>지난 50년의 물류현장의 노하우로 <br>고객님의 만족도를 높이겠습니다.</dd>
        </dl>
      </li>
    </ul>
  </article>
  <article class="main-center">
    <div>
      <div class="cst">
        <a href="">
          <strong class="tit">1:1 문의</strong>
          <span class="txt">궁금하신 사항에 <br>답변드립니다.</span>
        </a>
      </div>
      <div class="evnt">
        <a href="">
          <strong class="tit">이벤트</strong>
          <span class="txt">로지피아 고객님께 <br>혜택을 드립니다.</span>
        </a>
      </div>
      <div class="refr">
        <a href="">
          <strong class="tit">자료실</strong>
          <span class="txt">브로슈어/매뉴얼을 <br>확인할 수 있습니다.</span>
        </a>
      </div>
      <div class="ntw">
        <a href="">
          <strong class="tit">두산 네트워크</strong>
          <span class="txt">전국 어디서나 빠르고 스마트한 <br>두산 로지피아의 서비스를 <br>받으실 수 있습니다.</span>
        </a>
      </div>
    </div>
  </article>
  <article class="main-noti">
    <ul>
      <li class="tit"><a href="">[정비서비스] 제목이 노출됩니다. 제목의 길이는 여기까지입니다.제목이 노출됩니다. 제목의 길이는 여기까지입니다.제목이 노출됩니다. 제목의 길이는 여기까지입니다.</a></li>
      <li class="data">2018.10.15</li>
    </ul>
  </article>
</section>
</template>

<script>
import carousel from 'vue-owl-carousel'
import mainList from '@/components/common/Main-List'
export default {
  name: 'Main',
  metaInfo: { //seo 개선 
    title: '두산 로지피아',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아. 두산이 하면 빠르고 스마트해집니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아' },
      ]
  },
  components: {
    carousel,
    mainList
  },
  data () {
    return {
      pageTitle: '팝업',
      items: [
        {no: 1, indicatorTextEm: '두산로지피아에', indicatorText: '오신 것을 환영합니다.', pcImages: 'https://logipia.doosan-iv.com/lp/bnr/pc01_1561708559131.jpg', mobileImages: 'https://logipia.doosan-iv.com/lp/bnr/m01_1561708577094.png', linkUrl: '01', pcAlt: '피씨alt01', mobileAlt: '모바일alt01', pcLink: '_top', mobileLink: '_blank'},
        // {no: 2, indicatorTextEm: 'B15N 보급형', indicatorText: '전동지게차', pcImages: 'https://logipia.doosan-iv.com/lp/bnr/pc02_1561453933675.jpg', mobileImages: 'https://logipia.doosan-iv.com/lp/bnr/m02_1561453940620.png', linkUrl: '02', pcAlt: '피씨alt02', mobileAlt: '모바일alt02', pcLink: '_top', mobileLink: '_blank'},
        {no: 2, indicatorTextEm: '물류의 혁신', indicatorText: '무인지게차 ', pcImages: 'https://logipia.doosan-iv.com/lp/bnr/pc03_1561708512682.jpg', mobileImages: 'https://logipia.doosan-iv.com/lp/bnr/m03_1561708519457.png', linkUrl: '03', pcAlt: '피씨alt03', mobileAlt: '모바일alt03', pcLink: '_top', mobileLink: '_blank'},
        {no: 3, indicatorTextEm: '모든 브로슈어는', indicatorText: '자료실에서 확인하세요.', pcImages: 'https://logipia.doosan-iv.com/lp/bnr/pc04_1561708631977.jpg', mobileImages: 'https://logipia.doosan-iv.com/lp/bnr/m04_1561708642386.png', linkUrl: '04', pcAlt: '피씨alt04', mobileAlt: '모바일alt04', pcLink: '_top', mobileLink: '_blank'}
      ],
      playCarousel: null
    }
  },
  methods: {
    popupApplyMain: function (e) {
      var popupWrap = document.getElementById('pop-apply')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    } /* 2019.06.14 수정 */,
    mainStop: function () {
      document.getElementById('main-stop').style.display = 'none'
      document.getElementById('main-play').style.display = 'block'
      if (this.playCarousel !== null) {
        clearInterval(this.playCarousel)
      }
    },
    mainPlay: function () {
      var owlNext = document.getElementById('owl').querySelector('.owl-next')
      var owlPre = document.getElementById('owl').querySelector('.owl-prev')
      owlNext.innerHTML = '다음'
      owlPre.innerHTML = '이전'
      document.getElementById('main-stop').style.display = 'block'
      document.getElementById('main-play').style.display = 'none'
      this.playCarousel = setInterval(() => {
        owlNext.click()
      }, 4000)
    }
  },
  created: function () {
    setTimeout(() => {
      this.mainPlay()
    }, 10)
  }
}
</script>