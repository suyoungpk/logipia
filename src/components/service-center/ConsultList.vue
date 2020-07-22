<template>
  <section id="lp-section" class="lp-sub cst">
    <common-nav nowMenu="cst"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>더욱 편리하게 이용하실 수 있도록 노력하겠습니다.</span>
    </div>
    <div class="sub-wrap">
      <ul class="tabs">
        <li><router-link to="/service-center/consult-add">상담신청</router-link></li>
        <li><router-link to="/service-center/consult-list" class="on">문의 내역 보기</router-link></li>
      </ul>
      <div class="lp-board">
        <p class="total"><span>123</span>건</p>
        <div class="board">
          <p class="title">
            <span class="num">번호</span>
            <span class="category">구분</span>
            <span class="cont-notice">제목</span>
            <span class="data">등록일</span>
            <span class="status">진행상태</span>
            <span class="answer">답변일</span>
          </p>
          <ul>
            <li>
              <span class="num">10</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">9</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status ing">신청완료</span><!-- 답변 중은 font색이 다름 -->
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">8</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">7</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">6</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">5</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">4</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">3</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">2</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <li>
              <span class="num">1</span>
              <span class="category">두산 케어 서비스</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="data">2019.06.21</span>
              <span class="status">답변완료</span>
              <span class="answer">2019.06.21</span>
            </li>
            <!-- 검색결과가 없는 경우 -->
            <li class="no-data">문의 내역이 없습니다.</li>
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
  name: 'ConsultList',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 1:1 문의 > 문의내역 보기',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 1:1 문의 > 문의내역 보기 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 1:1 문의, 문의내역 보기' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
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
