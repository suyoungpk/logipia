<template>
  <section id="lp-section" class="lp-sub faq">
   
    <common-nav nowMenu="faq"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>FAQ에서 궁금하신 점을 찾아보세요.</span>
    </div>
    <div class="sub-wrap">
      <!-- <p class="m-txt-tip">FAQ에서 궁금하신 점을 찾아보세요.</p> -->
       <div class="sch-box">
        <input type="text"  class="sch-inp" title="제목 또는 내용 입력" placeholder="제목 또는 내용으로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
      
      <FaqList></FaqList>
      
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import FaqList from '@/components/service-center/FaqList'
import CsInfo from '@/components/service-center/CsInfo'

export default {
  name: 'Faq',
  metaInfo: { //seo 개선 
    title: 'FAQ',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > FAQ 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, FAQ' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'FaqList': FaqList,
    'CsInfo': CsInfo
  },
  data () {
    return {
      pageTitle: 'FAQ'
    }
  }
}
</script>
