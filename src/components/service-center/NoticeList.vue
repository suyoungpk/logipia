<template>
  <section id="lp-section" class="lp-sub center">
    <common-nav nowMenu="noti"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아의 소식을 전해드립니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="sch-box">
        <input type="text"  class="sch-inp" title="제목 또는 내용 입력" placeholder="제목 또는 내용으로 검색이 가능합니다.">
        <button class="btn-sch" type="button">검색</button>
      </div>
      <div class="lp-board">
        <p class="total"><span>123</span>건</p>
        <div class="board">
          <p class="title">
            <span class="category">구분</span>
            <span class="cont-notice">제목</span>
            <span class="file-info">첨부파일</span>
            <span class="data">등록일</span>
          </p>
          <ul>
            <li class="point">
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내KOREA MAT 2019 참가안내KOREA MAT 2019 참가안내KOREA MAT 2019 참가안내KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li class="point">
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"><span class="icon-file">첨부파일 있음</span></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"></span>
              <span class="data">2019.06.21</span>
            </li>
            <li>
              <span class="category">일반공지</span>
              <span class="cont-notice"><a href="">KOREA MAT 2019 참가안내</a></span>
              <span class="file-info"></span>
              <span class="data">2019.06.21</span>
            </li>
            <!-- 검색결과가 없는 경우 -->
            <li class="no-data">검색결과가 없습니다.<br>다시 조회해주세요.</li>
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
  name: 'NoticeList',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > 고객센터 > 공지사항',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 공지사항 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 공지사항' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '공지사항'
    }
  }
}
</script>

<style>
</style>
