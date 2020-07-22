<template>
  <section id="lp-section" class="lp-sub event popup">
    <common-nav nowMenu="evnt"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아의 이벤트를 알려드립니다.</span>
    </div>
    <div class="sub-wrap">
      <ul class="board-view">
        <li class="view-tit">
          <span class="tit">KOREA MAT 2019 사전 등록 이벤트!</span>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li class="view-txt">
          <div class="pc">
            <img src="../../assets/images/img-event-detail.jpg" alt=""/>
          </div>
          <div class="mobile">
            <img src="../../assets/images/img-event-detail.jpg" alt=""/>
          </div>
        </li>
      </ul>
      <div class="btn-box">
        <button class="btn btn-black" type="button">목록으로 이동</button>
      </div>
    </div>
    <button type="button" class="btn prev">이전 페이지 이동</button>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'EventDetail',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 이벤트',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 이벤트 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 이벤트 ' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '이벤트'
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
