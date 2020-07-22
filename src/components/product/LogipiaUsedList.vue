<template>
  <section id="lp-section" class="lp-sub eqip">
    <common-nav nowMenu="eqip"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 중고장비 거래장터입니다.</span>
    </div>
    <div class="sub-wrap">
      <div class="eqip-set-box">
        <p class="caution">원하는 장비를 검색하실 수 있습니다.</p>
        <button type="button" class="btn-reset">초기화</button>
        <div class="tbl-wrap">
          <div class="tbl">
            <dl class="on"><!-- 모바일 : 적재량 선택시 class에 on 추가 -->
              <dt>적재량</dt>
              <dd class="lp-select">
                <select><option value="">전체</option><option value="01">1톤 ~ 2톤 미만(엔진식)</option><option value="02">2톤 ~ 3.5톤 미만(엔진식)</option><option value="03">3.5톤 ~ 5톤 미만(엔진식)</option><option value="04">5톤 ~ 8톤 미만(엔진식)</option><option value="05">8톤 ~ 10톤 미만(엔진식)</option><option value="06">10톤 ~ 18톤 미만(엔진식)</option><option value="07">18톤 ~ 25톤 미만(엔진식)</option><option value="08">25톤 이상(엔진식)</option><option value="11">1톤 ~ 2톤 미만(전동식 좌식)</option><option value="12">2톤 ~ 4톤 미만(전동식 좌식)</option><option value="13">4톤 이상(전동식 좌식)</option><option value="14">1톤 ~ 2톤 미만(전동식 입식)</option><option value="15">2톤 ~ 4톤 미만(전동식 입식)</option></select>
              </dd>
            </dl>
            <dl>
              <dt>동력/탑승</dt>
              <dd class="lp-select">
                <select><option value="">전체</option><option value="01">엔진디젤</option><option value="02">엔진LP</option><option value="03">전동좌식</option><option value="04">전동입승</option><option value="99">기타</option></select>
              </dd>
            </dl>
            <dl class="m-list">
              <dt>정렬방식</dt>
              <dd class="lp-select">
                <select>
                  <option>최신 등록 순</option>
                </select>
              </dd>
            </dl>
            <dl class="pc-list last">
              <dt>판매가격</dt>
              <dd class="between pc-list">
                <span><input  type="text" title="판매가격 최저가 입력" class="inp-text"/><span class="txt">만원</span></span>
                <span class="line">~</span>
                <span><input  type="text" title="판매가격 최고가 입력" class="inp-text"/><span class="txt">만원</span></span>
              </dd>
            </dl>
          </div>
          <div class="tbl">
            <dl>
              <dt>연식</dt>
              <dd class="between">
                <span><input  type="text" title="연식 시작 년도 입력" class="inp-text"/><span class="txt">년</span></span>
                <span class="line">~</span>
                <span><input  type="text" title="연식 마지막 년도 입력" class="inp-text"/><span class="txt">년</span></span>
              </dd>
            </dl>
            <dl class="last">
              <dt>가동시간</dt>
              <dd class="between">
                <span><input  type="text" title="가동시작 시간 입력" class="inp-text"/><span class="txt">시간</span></span>
                <span class="line">~</span>
                <span><input  type="text" title="가동종료 시간 입력" class="inp-text"/><span class="txt">시간</span></span>
              </dd>
            </dl>
          </div>
          <div class="tbl">
            <dl>
              <dt>제조사</dt>
              <dd class="lp-select">
                <select>
                  <option>전체</option>
                </select>
              </dd>
            </dl>
            <dl class="last">
              <dt>마스트</dt>
              <dd class="inp-chk">
                <span>
                  <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_01" />
                  <label for="eqip_radio_01_01">2(STD)</label>
                 </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_02" />
                  <label for="eqip_radio_01_02">2(FFL)</label>
                 </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_03" />
                  <label for="eqip_radio_01_03">3(FFL)</label>
                 </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_01" id="eqip_radio_01_04" />
                  <label for="eqip_radio_01_04">4(QUAD)</label>
                </span>
              </dd>
            </dl>
          </div>
          <div class="tbl">
            <dl>
              <dt>판매지역</dt>
              <dd class="inp-chk">
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_01" />
                  <label for="eqip_radio_02_01">전국</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_02" />
                  <label for="eqip_radio_02_02">서울</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_03" />
                  <label for="eqip_radio_02_03">부산</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_04" />
                  <label for="eqip_radio_02_04">대구</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_05" />
                  <label for="eqip_radio_02_05">인천</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_06" />
                  <label for="eqip_radio_02_06">광주</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_07" />
                  <label for="eqip_radio_02_07">대전</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_08" />
                  <label for="eqip_radio_02_08">울산</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_09" />
                  <label for="eqip_radio_02_09">세종</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_10" />
                  <label for="eqip_radio_02_10">경기</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_11" />
                  <label for="eqip_radio_02_11">강원</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_12" />
                  <label for="eqip_radio_02_12">충북</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_13" />
                  <label for="eqip_radio_02_13">충남</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_14" />
                  <label for="eqip_radio_02_14">전북</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_15" />
                  <label for="eqip_radio_02_15">전남</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_16" />
                  <label for="eqip_radio_02_16">경북</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_17" />
                  <label for="eqip_radio_02_17">경남</label>
                </span>
                <span>
                  <input  type="checkbox" name="eqip_radio_02" id="eqip_radio_02_18" />
                  <label for="eqip_radio_02_18">제주</label>
                </span>
              </dd>
            </dl>
          </div>
        </div>
        <button type="button" v-on:click="list_more_btn" class="btn-more">검색설정 더 보기</button>
      </div>
      <div class="eqip-box">
        <p class="total">총<span>1,123</span>개<span class="txt">의 검색결과가 있습니다.</span></p>
        <ul class="sort-box">
          <li class="category chk-box">
            <span class="inp-chk02">
              <input  type="checkbox" name="eqip" id="eqipchk01" />
              <label for="eqipchk01">두산인증제품</label>
            </span>
            <span class="inp-chk02">
              <input  type="checkbox" name="eqip" id="eqipchk02" />
              <label for="eqipchk02">신규등록제품</label>
            </span>
          </li>
          <li class="sort">
            <span><button type="button" class="btn-sort">가격 높은순</button></span>
            <span><button type="button" class="btn-sort on">가격 낮은순</button></span><!-- 정렬 선택시 class에 on 추가 -->
            <span><button type="button" class="btn-sort">연식 높은순</button></span>
            <span><button type="button" class="btn-sort">연식 낮은순</button></span>
          </li>
          <li class="lp-select">
            <select>
                <option>16개 보기</option>
                <option>24개 보기</option>
                <option>48개 보기</option>
              </select>
          </li>
        </ul>
        <ul class="eqip-list">
          <li class="certify"><!--두산인증 마크 class에 certify 추가-->
            <div>
              <a href="javascript:void()" class="img">
                <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                <span class="badge">두산인증</span>
              </a>
              <p class="name">
                <a href="javascript:void()">G33S-5</a>
              </p>
              <p class="info">LPG / 2012년</p>
              <p class="load">5톤 ~ 8톤 미만(엔진식)</p>
              <p class="address">경기도 평택시 청북읍</p>
              <div class="chk">
                <span class="interest">
                  <input  type="checkbox" name="eqip_radio_03" id="eqip_radio_03" />
                  <label for="eqip_radio_03">관심장비</label>
                </span>
                <span class="place"><em>2,200</em>만원</span>
              </div>
            </div>
          </li>
          <li class="recommend"><!--추천제품 마크 class에 recommend 추가-->
            <div>
              <a href="javascript:void()" class="img">
                <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                <span class="badge">추천제품</span>
              </a>
              <p class="name">
                <a href="javascript:void()">G33S-5</a>
              </p>
              <p class="info">LPG / 2012년</p>
              <p class="load">5톤 ~ 8톤 미만(엔진식)</p>
              <p class="address">경기도 평택시 청북읍</p>
              <div class="chk">
                <span class="interest">
                  <input  type="checkbox" name="eqip_radio_04" id="eqip_radio_04" />
                  <label for="eqip_radio_04">관심장비</label>
                </span>
                <span class="place"><em>2,200</em>만원</span>
              </div>
            </div>
          </li>
          <li class="new"><!--신규등록 마크 class에 new 추가-->
            <div>
              <a href="javascript:void()" class="img">
                <img src="../../assets/images/img-eqip-thumb.png" alt="상품이미지" />
                <span class="badge">신규등록</span>
              </a>
              <p class="name">
                <a href="javascript:void()">G33S-5</a>
              </p>
              <p class="info">LPG / 2012년</p>
              <p class="load">5톤 ~ 8톤 미만(엔진식)</p>
              <p class="address">경기도 평택시 청북읍 경기도</p>
              <div class="chk">
                <span class="interest">
                  <input  type="checkbox" name="eqip_radio_05" id="eqip_radio_05" />
                  <label for="eqip_radio_05">관심장비</label>
                </span>
                <span class="place"><em>2,200</em>만원</span>
              </div>
            </div>
          </li>
          <li class="complete"><!--판매완료 마크 class에 complete 추가-->
            <div>
              <a href="javascript:void()" class="img">
                <img src="../../assets/images/img-eqip-no-thumb.png" alt="상품이미지" />
                <span class="badge ">판매완료</span>
              </a>
              <p class="name">
                <a href="javascript:void()">G33S-5</a>
              </p>
              <p class="info">LPG / 2012년</p>
              <p class="load">5톤 ~ 8톤 미만(엔진식)</p>
              <p class="address">경기도 평택시 청북읍</p>
              <div class="chk">
                <span class="interest">
                  <input  type="checkbox" name="eqip_radio_06" id="eqip_radio_06" />
                  <label for="eqip_radio_06">관심장비</label>
                </span>
                <span class="place"><em>2,200</em>만원</span>
              </div>
            </div>
          </li>
          <li class="no-data" style="display:none">검색결과가 없습니다.<br>다른 조건으로 검색해주세요.</li><!--검색결과 없음-->
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
  name: 'LogipiaUsedList',
  metaInfo: { //seo 개선 
    title: '두산 로지피아 > 상품 > 두산 중고마켓',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 두산 중고마켓' },
      ]
  },
  components: {
    'common-nav': CommonNav,
    'paging': paging
  },
  data () {
    return {
      pageTitle: '로지피아 중고'
    }
  },
  methods: {
    list_more_btn: function (event) {
      if (event) {
        if (event.target.parentElement.classList.contains('on')) {
          event.target.innerText = '검색설정 더 보기'
          event.target.parentElement.classList.remove('on')
        } else {
          event.target.innerText = '검색설정 닫기'
          event.target.parentElement.classList.add('on')
        }
      }
    }
  }
}
</script>

<style>
</style>
