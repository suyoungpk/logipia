<template>
  <section id="lp-section" class="lp-sub vod">
    <common-nav nowMenu="vod"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아의 영상을 확인할 수 있습니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="sch-box">
        <input type="text"  class="sch-inp" title="제목 또는 내용 입력" placeholder="제목 또는 내용으로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
      <p class="total"><span>123</span>건</p>
      <ul class="img-list">
        <li v-for="(data) in listData" :key="data.vodSeq">
          <a href="#none" class="img" v-on:click="popVod">
            <img :src="data.thumbnailPc" class="img-pc" :alt="data.altPC"/>
            <img :src="data.thumbnailM" class="img-m" :alt="data.altM">
          </a>
          <span class="tit">{{data.title}}</span>
          <div class="pop-vod popup-wrap">
            <div class="popup-box">
              <div class="popup-title">
                두산 로지피아 홍보영상
              </div>
              <div class="popup-content">
                <div class="vod-box">
                  <iframe id="viewFrame" width="100%" height="100%" :src="data.vodUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <button type="button" class="btn-popup-close" v-on:click="popVodClose">팝업닫기</button>
            </div>
          </div>
        </li>
      </ul>
      <paging></paging>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Vod',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 회사소개 > 홍보영상',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회사소개 > 홍보영상 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회사소개, 홍보영상' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '홍보영상',
      listData: [
        {
          vodSeq: 1,
          thumbnailPc: require('../../assets/images/img-vod01.png'),
          thumbnailM: require('../../assets/images/img-vod01-m.png'),
          altPC: '두산 인증 중고를 만드는 7가지 단계',
          altM: '두산 인증 중고를 만드는 7가지 단계',
          title: 'Refurbish Service',
          vodUrl: 'https://www.youtube.com/embed/NvTe2Nqm7_g'
        },
        {
          vodSeq: 2,
          thumbnailPc: require('../../assets/images/img-vod02.png'),
          thumbnailM: require('../../assets/images/img-vod02.png'),
          altPC: '두산이 하면 빠르고 스마트해집니다.',
          altM: '두산이 하면 빠르고 스마트해집니다.',
          title: 'Lin-Q',
          vodUrl: 'https://www.youtube.com/embed/A21EOvDU-rE'
        },
        {
          vodSeq: 3,
          thumbnailPc: require('../../assets/images/img-vod03.png'),
          thumbnailM: require('../../assets/images/img-vod03.png'),
          altPC: '무인지게차',
          altM: '무인지게차',
          title: '무인지게차',
          vodUrl: 'https://www.youtube.com/embed/9Nwg9_mlHwc'
        },
        {
          vodSeq: 4,
          thumbnailPc: require('../../assets/images/img-vod04.png'),
          thumbnailM: require('../../assets/images/img-vod04.png'),
          altPC: '',
          altM: '',
          title: '두산 로지피아',
          vodUrl: 'https://www.youtube.com/embed/hmgBJyRAeh4'
        },
        {
          vodSeq: 5,
          thumbnailPc: require('../../assets/images/img-vod05.png'),
          thumbnailM: require('../../assets/images/img-vod05.png'),
          altPC: '',
          altM: '',
          title: 'DV250S-7',
          vodUrl: 'https://www.youtube.com/embed/55EAGYJPLS8'
        },
        {
          vodSeq: 6,
          thumbnailPc: require('../../assets/images/img-vod06.png'),
          thumbnailM: require('../../assets/images/img-vod06.png'),
          altPC: '',
          altM: '',
          title: 'D25S-7',
          vodUrl: 'https://www.youtube.com/embed/A21EOvDU-rE'
        },
        {
          vodSeq: 7,
          thumbnailPc: require('../../assets/images/img-vod07.png'),
          thumbnailM: require('../../assets/images/img-vod07.png'),
          altPC: 'Quick & Smart 두산이 하면 빠르고 스마트해 집니다.',
          altM: 'Quick & Smart 두산이 하면 빠르고 스마트해 집니다.',
          title: 'Li-ion 배터리 지게차',
          vodUrl: 'https://www.youtube.com/embed/D6laW-Q5fL8'
        },
        {
          vodSeq: 8,
          thumbnailPc: require('../../assets/images/img-vod08.png'),
          thumbnailM: require('../../assets/images/img-vod08.png'),
          altPC: '',
          altM: '',
          title: '두산 50주년 기념영상',
          vodUrl: 'https://www.youtube.com/embed/rK8AMWwuYgY'
        }
      ]
    }
  },
  methods: {
    popVod: function (event) {
      var indexLi = event.target.parentNode
      indexLi.querySelector('.popup-wrap').classList.add('on')
      event.target.classList.add('btn-pop-open')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popVodClose: function (event) {
      var indexLi = event.target.parentNode.parentNode
      indexLi.classList.remove('on')
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
