<template>
  <section id="lp-section" class="lp-sub place">
    <common-nav nowMenu="place"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아의 주소와 연락처, 지도입니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="place-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.1650416689552!2d126.95395642918625!3d37.04174836920937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b3d7df0a40499%3A0xe94978be210fab7d!2z6rK96riw64-EIO2Pie2DneyLnCDssq3rtoHrqbQg7LKt7JuQ66GcIDIxMS0yMQ!5e0!3m2!1sko!2skr!4v1550542755291" width="100%" height="100%" frameborder="0" style="border:0" title="두산로지피아 구글지도" allowfullscreen></iframe>
      </div>
      <ul class="place-info">
        <li>
          <dl>
            <dt class="ico-place01">회사주소</dt>
            <dd>경기도 평택시 청원로 211-21</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt class="ico-place02">대표전화</dt>
            <dd><a href="tel:031-681-9900">(031) 681 - 9900</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt class="ico-place03">팩스번호</dt>
            <dd><a href="tel:031-681-9909">(031) 681- 9909</a></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt class="ico-place04">이메일</dt>
            <dd><a href="mailto:yongtack.lee@doosan.com">yongtack.lee@doosan.com</a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Place',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 회사소개 > 찾아오시는길',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 회사소개 > 찾아오시는길 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 회사소개, 찾아오시는길 ' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '찾아오시는 길',
      activetab: 1
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
