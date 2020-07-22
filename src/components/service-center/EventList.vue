<template>
  <section id="lp-section" class="lp-sub event">
    <common-nav nowMenu="evnt"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아의 이벤트를 알려드립니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="sch-box">
        <input type="text"  class="sch-inp" title="제목 또는 내용 입력" placeholder="제목 또는 내용으로 검색이 가능합니다.">
        <button class="btn-sch" type="button">검색</button>
      </div>
      <p class="total"><span>123</span>건</p>
      <ul class="img-list">
        <li>
          <a href="#" class="img">
            <img src="../../assets/images/img-event.jpg" class="img-pc" alt=""/>
            <img src="../../assets/images/img-event-m.png" class="img-m" alt=""/>
          </a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img">
            <img src="../../assets/images/img-event.jpg" class="img-pc" alt=""/>
            <img src="../../assets/images/img-event-m.png" class="img-m" alt=""/>
          </a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img">
            <img src="../../assets/images/img-event.jpg" class="img-pc" alt=""/>
            <img src="../../assets/images/img-event-m.png" class="img-m" alt=""/>
          </a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li>
          <a href="#" class="img">
            <img src="../../assets/images/img-event.jpg" class="img-pc" alt=""/>
            <img src="../../assets/images/img-event-m.png" class="img-m" alt=""/>
          </a>
          <a href="#" class="tit">KOREA MAT 2019 사전 등록 이벤트!!</a>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li class="end"><!--이벤트 종료 -->
          <span class="img">
            <img src="../../assets/images/img-event.jpg" class="img-pc" alt=""/>
            <img src="../../assets/images/img-event-m.png" class="img-m" alt=""/>
            <span class="end">종료</span>
          </span>
          <span class="tit">KOREA MAT 2019 사전 등록 이벤트!!이벤트!!</span>
          <span class="data">2019.04.08~2019.04.15</span>
        </li>
        <li class="no-data">검색결과가 없습니다. <br>다시 조회해주세요</li><!-- 검색 내용 없을 때 표시-->
      </ul>
      <paging></paging>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'EventList',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 이벤트',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 이벤트 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 이벤트' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '이벤트',
      activetab: 1
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
