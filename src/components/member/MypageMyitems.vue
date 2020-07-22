<template>
<section id="lp-section" class="lp-sub mypage">
  <common-nav nowMenu="mypage3"></common-nav>
  <div class="tit-box">
    <h2>{{pageTitle}}</h2>
    <span></span>
  </div>
  <div class="sub-wrap">
    <div class="myProfile">
      <p class="name">홍길동</p>
      <p class="memtype">고객님은 <strong>사업자 사용자</strong>입니다.
        <router-link to="/member/myinfo1" class="btn btn-b-line">내 정보 변경</router-link>
      </p>
      <p class="log">최종 로그인 : 2020-04-30 20:35:50</p>
    </div><!--// myprofile -->
    <div class="mypage-contents">
        <ul class="tabs">
          <li><router-link to="/member/mypage-interest">나의 관심장비</router-link></li>
          <li><router-link to="/member/mypage-recent">최근 본 장비</router-link></li>
          <li><a href="javascript:void(0)" class="on">등록장비관리</a></li>
           <!-- 200714 -->
          <li  :class="[(alarmisNew)?'new':'']"><router-link to="/member/mypage-alarm">알림목록</router-link></li>
          <li class="no"></li>
        </ul>
        <div class="tab-con">
          <div class="tabcontent">
            <ul class="myBusinessList">
              <li>
                <p class="date">2020-04-20</p>
                <ul>
                  <li>
                    <div>  <!--판매완료시 클래스 soldout 추가  -->
                      <p class="img">
                        <a href="/"><img src="http://placehold.it/500x500" alt="상품이미지"></a>
                      </p>
                      <div class="main-info">
                        <div class="name">
                          <a href="javascript:void()">토요타 제품 처분합니다.</a>
                          <p class="limit">판매완료일 2020-05-19 (만료 30일전)</p>
                        </div>
                        <p class="info"><span class="ico eqip">제조사 및 모델명 : 토요타 7FB235</span></p>
                        <p class="info">
                          <span class="ico old">연식 : 2010년</span>
                          <span class="ico test">운행시간 : 46,078시간</span>
                        </p>
                        <p class="info">
                          <span class="ico garage">차고지 : 경기도 평택시 </span>
                        </p>
                        <div class="priceBox">
                          <span class="ico price"> 가격</span> 
                          <em>2,200</em>만원
                        </div>
                      </div>
                      <div class="sub-info">
                          <p class="info">
                            <span class="ico eye">조회수</span> 5
                          </p>
                          <p class="info">
                            <span class="ico talk">댓글</span> 3
                          </p>
                          <p class="info">
                            <button class="btn btn-blue">판매중</button>
                          </p>
                      </div><!--// sub-info -->
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <p class="date">2020-03-25</p>
                <ul>
                  <li>
                    <div class="soldout">  <!--판매완료시 클래스 soldout 추가  -->
                      <p class="img">
                        <a href="javascript:void(0)"><img src="http://placehold.it/500x500" alt="상품이미지"></a>
                      </p>
                      <div class="main-info">
                        <div class="name">
                          <a href="javascript:void()">토요타 제품 처분합니다.</a>
                          <p class="limit">판매완료일 2020-05-19 (만료 30일전)</p>
                        </div>
                        <p class="info"><span class="ico eqip">제조사 및 모델명 : 토요타 7FB235</span></p>
                         <p class="info">
                          <span class="ico old">연식 : 2010년</span>
                          <span class="ico test">운행시간 : 46,078시간</span>
                        </p>
                        <p class="info">
                          <span class="ico garage">차고지 : 경기도 평택시 </span>
                        </p>
                        <div class="priceBox">
                          <span class="ico price"> 가격</span> 
                          <em>2,200</em>만원
                        </div>
                      </div>
                      <div class="sub-info">
                          <p class="info">
                            <span class="ico eye">조회수</span> 5
                          </p>
                          <p class="info">
                            <span class="ico talk">댓글</span> 3
                          </p>
                          <p class="info">
                            <!-- <button class="btn btn-blue">판매중</button> -->
                          <span class="soldout">판매완료</span>
                          <!-- <button class="btn btn-b-line" disabled>판매만료</button> -->
                          </p>
                      </div><!--// sub-info -->
                    </div>
                  </li>
                  <li>
                    <div>  <!--판매완료시 클래스 soldout 추가  -->
                      <p class="img">
                        <a href="/"><img src="http://placehold.it/500x500" alt="상품이미지"></a>
                      </p>
                      <div class="main-info">
                        <div class="name">
                          <a href="javascript:void()">토요타 제품 처분합니다.</a>
                          <p class="limit">판매완료일 2020-05-19 (만료 30일전)</p>
                        </div>
                        <p class="info"><span class="ico eqip">제조사 및 모델명 : 토요타 7FB235</span></p>
                         <p class="info">
                          <span class="ico old">연식 : 2010년</span>
                          <span class="ico test">운행시간 : 46,078시간</span>
                        </p>
                        <p class="info">
                          <span class="ico garage">차고지 : 경기도 평택시 </span>
                        </p>
                        <div class="priceBox">
                          <span class="ico price"> 가격</span> 
                          <em>2,200</em>만원
                        </div>
                      </div>
                      <div class="sub-info">
                          <p class="info">
                            <span class="ico eye">조회수</span> 5
                          </p>
                          <p class="info">
                            <span class="ico talk">댓글</span> 3
                          </p>
                          <p class="info">
                          <button class="btn btn-b-line" disabled>판매만료</button> 
                          </p>
                      </div><!--// sub-info -->
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="morebox phase2-mobile">
              <!-- 더보기는 데이터로 연결해서 쓰시면 됩니다.-->
              <MoreView
                v-if="moreViewvisible"
                :limit.sync="limit"
                :totalNum.sync="totalNum"
                @increment="increment"
                >
              </MoreView>
            </div>
          </div><!--// tabcontent -->
        </div><!-- // tab-con-->
    </div><!-- // mypage-contents--> 
  </div><!-- //sub-wrap -->
</section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import MoreView from '@/components/common/MoreView'
export default {
  name: 'MypageMyitems',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 마이페이지',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 마이페이지 입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 마이페이지' },
      ]
  },
   components: {
    'common-nav': CommonNav,
    'MoreView': MoreView,
  },
  data() {
     return {
       pageTitle:"등록장비관리",
       alarmisNew:false, // 200714
       moreViewvisible:false,
       limit:10,
       totalNum:0
    }
  },
  methods:{
    moreVisible: function () {
      if (this.totalNum > this.limit) {
        this.moreViewvisible = true
      } else {
        this.moreViewvisible = false
      }
    },
    increment: function () {
      this.limit += 10
      this.moreVisible
    }
  },
  created() {
    var data =[];// data
    //this.totalNum =this.data.length
    this.totalNum =20 //더보기 디자인 확인용 임시 갯수설정
  },
  mounted(){
    this.moreVisible()
  }
}
</script>
