<template>
  <section id="lp-section" class="lp-sub cst popup">
    <common-nav nowMenu="cst"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>더욱 편리하게 이용하실 수 있도록 노력하겠습니다.</span>
    </div>
    <div class="sub-wrap">
      <ul class="board-view">
        <li class="view-tit">
          <span class="tit"><span>[두산 케어 서비스]</span> 문의드립니다.</span>
          <span class="data">2019.06.21</span>
        </li>
        <li class="view-txt">
          <div>
            안녕하세요. <br>
            두산 케어 서비스를 신청하려고 합니다. <br>
            견적서 송부 부탁드립니다. <br><br>
            감사합니다.
          </div>
        </li>
        <li>
          <dl class="file-list">
            <dt>
              <span class="icon-file">첨부파일</span>
            </dt>
            <dd>
              <a href="#">첨부파일명이긴경우가나다라마바사.pdf</a>
              <a href="#">첨부파일2.pdf</a>
            </dd>
          </dl>
        </li>
      </ul>
      <ul class="board-reply">
        <li class="view-tit">
          <span class="tit"><span>답변</span>로지피아에서 알려드립니다.</span>
          <span class="data">답변일 : 2019.04.23</span>
        </li>
        <li class="view-txt">
          <div>
            두산 로지피아를 이용해 주셔서 감사합니다. 두산 로지피아를 이용해 주셔서 감사합니다. 두산 로지피아를 이용해 주셔서 감사합니다. <br>
            고객님의 이메일 주소로 견적서를 발송해 드렸습니다. <br>
            사업번창하시길 기원합니다. <br><br>
            감사합니다.
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
  name: 'ConsultDetail',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 1:1 문의 > 문의내역 보기',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 1:1 문의 > 문의내역 보기 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아의 고객센터 > 1:1 문의 > 문의내역 보기' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '1:1 문의'
    }
  }
}
</script>

<style>
</style>
