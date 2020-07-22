<template>
  <section id="lp-section" class="video-cont vod">
    <h3 class="sub-title">홍보영상</h3>
    <ul class="img-list video-list">
      <li v-for="(data) in listData" :key="data.vodSeq">
        <a href="#none" class="img" v-on:click="popVod">
          <img :src="data.thumbnailPc" class="img-pc" :alt="data.altPC"/>
          <img :src="data.thumbnailM" class="img-m" :alt="data.altM">
        </a>
        <p class="txt">{{data.title}}</p>
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
  </section>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      pageTitle: '홍보영상',
      listData: [
        {
          vodSeq: 1,
          thumbnailPc: require('../../assets/images/intro/img-video01.png'),
          thumbnailM: require('../../assets/images/intro/img-video01.png'),
          altPC: '',
          altM: '',
          title: '두산 로지피아 서비스 안내 영상',
          vodUrl: 'https://www.youtube.com/embed/hmgBJyRAeh4'
        },
        {
          vodSeq: 2,
          thumbnailPc: require('../../assets/images/intro/img-video02.png'),
          thumbnailM: require('../../assets/images/intro/img-video02.png'),
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
