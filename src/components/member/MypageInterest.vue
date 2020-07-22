<template>
<section id="lp-section" class="lp-sub mypage">
  <common-nav nowMenu="mypage1"></common-nav>
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
          <li><a href="javascript:void(0)" class="on">나의 관심장비</a></li>
          <li><router-link to="/member/mypage-recent">최근 본 장비</router-link></li>
          <li><router-link to="/member/mypage-myitems">등록장비관리</router-link></li>
           <!-- 200714 -->
          <li :class="[(alarmisNew)?'new':'']"><router-link to="/member/mypage-alarm">알림목록</router-link></li>
          <li class="no"></li>
        </ul>
        <div class="tab-con">
          <div class="tabcontent">
            <div class="market-list-box">
              <div :class="['tit-st1', (activetab[0])? 'on' : '' ]">
              <h3>로지피아 중고</h3>
              <router-link to="/product/logipia-used">로지피아 중고 바로가기</router-link>
              <button type="button" class="btn-toggle phase2-mobile" @click="toggleTab(0)">로지피아 중고</button>
              </div ><!-- // tit-st1 -->
              <transition name="slide-fade">
                <!-- PC/태블릿 디자인 구조가 달라져서 데이터 두 번 작업 해야합니다..  -->
                <div class="slide-item-list" v-if="activetab[0]">              
                  <hooper :settings="hooperSettings" v-if="this.screenMode=='tablet'"><!-- tablet용 -->
                      <slide  v-for="i in Math.ceil(marketItems.length/4)" :key="i" :index="i">
                        <div class="tablet-slide-wrapper">
                          <div :class="['item-cover',item.soldout? 'soldout' : '']" v-for="(item,k) in getTabletData(marketItems,i)" :key="k">
                            <a :href="item.link" target="_blank" class="img" title="새 창">
                              <img :src="item.img" alt="상품이미지" />
                            </a>
                            <div class="box">
                              <p class="name">
                                <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                              </p>
                              <p class="info">{{item.info1}} / {{item.info2}} / {{item.info3}}</p>
                              <p class="info">{{item.info4}}</p>
                              <div class="chk">
                                <span class="interest shortcut">
                                  <input type="checkbox" :name="'eqip_interest_radio_0'+i" :id="'eqip_interest_radio_0'+i" :checked="item.interest"/>
                                  <label :for="'eqip_interest_radio_0'+i">관심장비</label>
                                </span>
                                <span class="price">
                                  가격 : {{item.price}} 만원
                                </span>
                              </div>
                            </div>
                            <div class="cover" v-if="item.soldout">판매완료</div>
                          </div><!--// item-cover -->
                        </div>
                      </slide>
                      <hooper-navigation slot="hooper-addons" v-if="this.marketItems.length>5"></hooper-navigation>
                  </hooper>      
                  <component :is="appendHooper"   :settings="hooperSettings" v-else><!-- 일반 -->
                    <component :is="appendSlider" :slot="(screenMode == 'pc')? null: 'accodionWrapper'" v-for="(item,i) in getLimitedData(marketItems,0)" :key="i" :index="i">
                      <div :class="['item-cover',item.soldout? 'soldout' : '']" :slot="(screenMode == 'pc')? null: 'accodionItem'">
                        <a :href="item.link" target="_blank" class="img" title="새 창">
                          <img :src="item.img" alt="상품이미지" />
                        </a>
                        <div class="box">
                          <p class="name">
                            <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                          </p>
                          <p class="info">{{item.info1}} / {{item.info2}} / {{item.info3}}</p>
                          <p class="info">{{item.info4}}</p>
                          <div class="chk">
                            <span class="interest shortcut">
                              <input type="checkbox" :name="'eqip_interest_radio_0'+i" :id="'eqip_interest_radio_0'+i" :checked="item.interest"/>
                              <label :for="'eqip_interest_radio_0'+i">관심장비</label>
                            </span>
                            <span class="price">
                              가격 : {{item.price}} 만원
                            </span>
                          </div>
                        </div>
                        <div class="cover" v-if="item.soldout">판매완료</div>
                      </div><!--// item-cover -->
                    </component>
                    <hooper-navigation slot="hooper-addons" v-if="this.marketItems.length>5&& this.screenMode !='mobile'"></hooper-navigation>
                  </component>
                   <MoreView
                        v-if="screenMode =='mobile' && moreViewvisible[0]"
                        :limit.sync="limit[0]"
                        :totalNum.sync="totalNum[0]"
                        @increment="increment(0)"
                        >
                    </MoreView>
                  </div><!-- slide-item-list -->
              </transition>
            </div><!-- // market-box -->
            <div class="market-list-box">
              <div :class="['tit-st1', (activetab[1])? 'on' : '' ]">
                <h3>중고직거래</h3>
                <router-link to="/p2p-market">중고직거래 바로가기</router-link>
                <button type="button" class="btn-toggle phase2-mobile" @click="toggleTab(1)">중고직거래</button>
              </div ><!-- // tit-st1 -->
              <transition name="slide-fade">
                <!-- PC/태블릿 디자인 구조가 달라져서 데이터 두 번 작업 해야합니다..  -->
                <div class="slide-item-list" v-if="activetab[1]">
                   <hooper :settings="hooperSettings" v-if="this.screenMode=='tablet'"><!-- tablet용 -->
                    <slide v-for="i in Math.ceil(marketItems.length/4)" :key="i" :index="i">
                      <div class="tablet-slide-wrapper">
                        <div :class="['item-cover', item.soldout? 'soldout' : '']" v-for="(item,k) in getTabletData(p2pMarketItems,i)" :key="k" :index="k">
                          <a :href="item.link" target="_blank" class="img" title="새 창">
                            <img :src="item.img" alt="상품이미지" />
                          </a>
                          <div class="box">
                            <p class="name">
                              <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                            </p>
                            <p class="info">{{item.info1}} / {{item.info2}} / {{item.info3}}</p>
                            <p class="info">{{item.info4}}</p>
                            <div class="chk">
                              <span class="interest shortcut">
                                <input type="checkbox" :name="'eqip2_interest_radio_0'+i" :id="'eqip2_interest_radio_0'+i" :checked="item.interest"/>
                                <label :for="'eqip2_interest_radio_0'+i">관심장비</label>
                              </span>
                              <span class="price">
                                가격 : {{item.price}} 만원
                              </span>
                            </div>
                            <div class="cover" v-if="item.soldout">판매완료</div>
                          </div>
                        </div><!--// item-cover -->
                       </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons" v-if="this.p2pMarketItems.length>5"></hooper-navigation>
                  </hooper>
                  <component :is="appendHooper"   :settings="hooperSettings" v-else><!-- 일반 -->
                    <component :is="appendSlider" :slot="(screenMode == 'pc')? null: 'accodionWrapper'" v-for="(item,i) in getLimitedData(p2pMarketItems,1)" :key="i" :index="i">
                      <div :class="['item-cover', item.soldout? 'soldout' : '']" :slot="(screenMode == 'pc')? null: 'accodionItem'">
                        <a :href="item.link" target="_blank" class="img" title="새 창">
                          <img :src="item.img" alt="상품이미지" />
                        </a>
                        <div class="box">
                          <p class="name">
                            <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                          </p>
                          <p class="info">{{item.info1}} / {{item.info2}} / {{item.info3}}</p>
                          <p class="info">{{item.info4}}</p>
                          <div class="chk">
                            <span class="interest shortcut">
                              <input type="checkbox" :name="'eqip2_interest_radio_0'+i" :id="'eqip2_interest_radio_0'+i" :checked="item.interest"/>
                              <label :for="'eqip2_interest_radio_0'+i">관심장비</label>
                            </span>
                            <span class="price">
                              가격 : {{item.price}} 만원
                            </span>
                          </div>
                          <div class="cover" v-if="item.soldout">판매완료</div>
                        </div>
                      </div><!--// item-cover -->
                    </component>
                    <hooper-navigation slot="hooper-addons" v-if="this.p2pMarketItems.length>5 && this.screenMode !='mobile'"></hooper-navigation>
                  </component>
                   <MoreView
                      v-if="screenMode =='mobile' && moreViewvisible[1]"
                      :limit.sync="limit[1]"
                      :totalNum.sync="totalNum[1]"
                      @increment="increment(1)"
                      >
                    </MoreView>
                </div><!-- slide-item-list -->
              </transition>
            </div><!-- // market-box -->
          </div><!--// tabcontent -->
        </div><!-- // tab-con-->
    </div><!-- // mypage-contents--> 
  </div><!-- //sub-wrap -->
</section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import MoreView from '@/components/common/MoreView'
import 'hooper/dist/hooper.css'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import json from '@/json/eqipData.json'//임시데이터
// pc 슬라이딩 교체용 임시 컴포넌트 정의
var TempDiv = {
  template: `<ul class='accodionWrapper'><slot name="accodionWrapper"></slot></ul>`
};
var TempDiv2 = {
  template: `<li class='accodionItem'><slot name="accodionItem"></slot></li>`
};
export default {
  name: 'MypageInterest',
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
     Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  data() {
     return {
      pageTitle:"나의 관심장비",
      alarmisNew:true, // 200714
      marketItems:'',
      p2pMarketItems:'',
      activetab:{0:true,1:true},
      screenMode:'',
      appendHooper:'',
      appendSlider:'',
      hooperSettings:{
        itemsToShow:5,
        itemsToSlide:1,
        infiniteScroll:false,
        autoPlay:false,
        breakpoints:{
          640:{
            itemsToShow:1
          },
          1025:{
            itemsToShow:5
          }
        }
      },
      moreViewvisible:{0:false,1:false},
      limit:{0:4,1:4},
      totalNum:{
                0:0,
                1:0
               }
    }
  },
   methods: {
      setScreenMode:function(){
      var w = window.innerWidth;
      var orgMode = this.screenMode;
      if(w>1024) this.screenMode = "pc";
      else if(w<=1024 && w>640)  this.screenMode = "tablet";
      else this.screenMode = "mobile";
      //console.log(this.screenMode);
      if( orgMode != this.screenMode){
         this.appendSlider=''
         this.appendHooper=''
        if(this.screenMode == 'mobile'){
          //pc가 아닐 경우 리스트 4개로 축소
          this.appendSlider=TempDiv2
          this.appendHooper=TempDiv
          this.activetab={0:true,1:false}
          this.moreVisible(0)
          this.moreVisible(1)
        }else{
          //pc,tablet일 경우 리스트 그대로
          this.appendSlider=Slide
          this.appendHooper=Hooper
          this.activetab={0:true,1:true}
          }
        }
      },
    getTabletData:function(data,start){
      var standard= (start-1)*4;
      return  data.filter((item,index)=>{
        return index>=standard && index<(standard+4); 
      });
    },
    getLimitedData: function (data,index) {
      if(this.screenMode =='pc') return data
      else return data.slice(0, this.limit[index])
    },
    moreVisible: function (index) {
      if (this.totalNum[index] > this.limit[index]) {
        this.moreViewvisible[index] = true
      } else {
        this.moreViewvisible[index] = false
      }
    },
    increment: function (index) {
      this.limit[index] += 4
      this.moreVisible(index)
    },
    toggleTab:function(index){
      var cnt = Object.keys(this.activetab).length;
      if(this.activetab[index]){
          this.activetab[index] = false;
      }else{
        for(var i=0;i<cnt;i++)
          this.activetab[i] = false;
        this.activetab[index] = true;
      }
    }
  },
  created() {
    this.marketItems = json.data.marketItems
    this.p2pMarketItems = json.data.p2pMarketItems
    this.totalNum ={
      0:this.marketItems.length,
      1:this.p2pMarketItems.length
    }
  },
  mounted(){
    this.setScreenMode(); 
    window.addEventListener("resize",this.setScreenMode)//리사이징으로 모드 업데이트    
  }
}
</script>
