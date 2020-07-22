<template>
  <section id="lp-section" class="lp-sub refr">
    <common-nav nowMenu="ref"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>브로슈어 등 관련 자료를 확인할 수 있습니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="sch-box">
        <div class="lp-select">
          <select>
              <option>전체</option>
          </select>
        </div>
        <input type="text"  class="sch-inp" title="제목 입력" placeholder="제목으로 검색이 가능합니다.">
        <button type="button" class="btn-sch">검색</button>
      </div>
      <div class="refr-list">
        <p class="total"><span>123</span>건</p>
        <ul>
          <li>
            <span class="img"><img src="../../assets/images/img-refr01.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 로지피아 종합 카탈로그</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr02.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 전동 지게차 B25S-7</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr03.jpg" alt=""/></span>
            <p><span class="category">[메뉴얼]</span>두산 전동 지게차 BR18S-9</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr04.jpg" alt=""/></span>
            <p><span class="category">[기타]</span>두산 전동 지게차 B50X-7</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr05.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 전동 좌승식 지게차 B15N</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr06.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 인증 중고차</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr07.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산파이낸셜 프로그램 스마트리스</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr08.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 납산/리튬 배터리 브로슈어</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr09.jpg" alt=""/></span>
            <p><span class="category">[브로슈어]</span>두산 전동 핸드 파렛트 LPM15/20N</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr10.jpg" alt=""/></span>
            <p><span class="category">[메뉴얼]</span>두산 전동 핸드 파렛트 PL12CE Li</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr11.jpg" alt=""/></span>
            <p><span class="category">[기타]</span>두산 정비 서비스</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr12.jpg" alt=""/></span>
            <p><span class="category">[메뉴얼]</span>두산 스마트 텔레매틱 시스템 Lin-Q 서비스</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
          <li>
            <span class="img"><img src="../../assets/images/img-refr13.jpg" alt=""/></span>
            <p><span class="category">[기타]</span>3D 360° 서라운드 뷰 SafetyVision</p>
            <a target="_blank" title="새 창 열림" href="" class="btn btn-navy">다운로드</a>
          </li>
        </ul>
        <paging></paging>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import paging from '@/components/common/Paging'
export default {
  name: 'Reference',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 자료실',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 자료실 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 자료실' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '자료실'
    }
  }
}
</script>

<style>
</style>
