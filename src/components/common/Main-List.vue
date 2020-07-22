<template>
<div>
  <div class="main-market-box">
      <div class="tit used">
        <strong>두산 중고마켓</strong>
        <span>두산이 직접 입고부터 출하까지 진행하는 제품입니다.</span>
        <router-link to="/product/logipia-used" class="btn-more"><span>두산 중고마켓 </span>바로가기</router-link>
      </div>
      <div class="table-box">
        <dl class="tabSlider"><!-- 탭이 하나 일 경우 none 클래스 추가  -->
          <dt :class="[ activetab === 1 ? 'on' : '' ]">
            <button type="button" @click="tabSlider($event,1)">
              두산<br>
              인증<br>
              중고
            </button>
          </dt>
          <transition name="slide-fade">
          <dd v-if="activetab === 1">
            <div class="main-list-box ">
              <component  :is="appendHooper" :settings="hooperSettings" >
                <component :is="appendSlider"  :slot="(screenMode == 'pc')? null: 'accodionWrapper'" v-for="(item,index) in marketItems" :key="index" :index="index">
                  <div class="market-list-item certify" :slot="(screenMode == 'pc')? null: 'accodionItem'">
                    <a :href="item.link" target="_blank" class="img" title="새 창">
                      <img :src="item.img" alt="상품이미지" />
                      <span class="badge">두산인증</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                      </p>
                      <p class="info">{{item.info1}} / {{item.info2}} / <br class="phase2-pc phase2-tablet">{{item.info3}} /</p>
                      <p class="info">{{item.info4}}</p>
                      <div class="chk">
                        <span class="interest shortcut">
                          <input type="checkbox" name="eqip_interest_radio" :id="'eqip_interest_radio_0'+index" :checked="item.interest"/>
                          <label :for="'eqip_interest_radio_0'+index">관심장비</label>
                        </span>
                        <span class="price">
                          가격 : {{item.price}} 만원
                        </span>
                      </div>
                    </div>
                  </div>
                </component>
                <hooper-navigation slot="hooper-addons" v-if="this.marketItems.length>5 && this.screenMode=='pc'"></hooper-navigation>
              </component>
            </div> <!-- //slider-list-box -->
          </dd>
          </transition>
          <dt :class="[ activetab === 2 ? 'on' : '' ]"> 
            <button type="button" @click="tabSlider($event,2)" >
              <!-- 두산 인증 상품이 없을 경우 -->
               <!-- <span class="phase2-pc">
                최근<br>
                중고마켓<br>
                매물
              </span> -->
              <!-- 두산 인증 상품이 있을 경우 -->
              <span>
                최근<br>
                등록<br>
                매물
              </span>
              <!-- <span class="phase2-tablet phase2-mobile">
                최근 중고마켓 매물
              </span> -->
            </button>
          </dt>
          <transition name="slide-fade">
          <dd v-if="activetab === 2">
            <div class="main-list-box">
             <component :is="appendHooper" :settings="hooperSettings" >
                <component :is="appendSlider"  :slot="(screenMode == 'pc')? null: 'accodionWrapper'" v-for="(item,index) in marketItems" :key="index" :index="index">
                  <div class="market-list-item new" :slot="(screenMode == 'pc')? null: 'accodionItem'">
                    <a :href="item.link" target="_blank" class="img" title="새 창">
                      <img :src="item.img" alt="상품이미지" />
                      <span class="badge">신규등록</span>
                    </a>
                    <div class="box">
                      <p class="name">
                        <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                      </p>
                      <p class="info">{{item.info1}} / {{item.info2}} / <br class="phase2-pc phase2-tablet">{{item.info3}} /</p>
                      <p class="info">{{item.info4}}</p>
                      <div class="chk">
                        <span class="interest shortcut">
                          <input type="checkbox" name="eqip_interest_radio_recent" :id="'eqip_new_interest_radio_0'+index" :checked="item.interest"/>
                          <label :for="'eqip_new_interest_radio_0'+index">관심장비</label>
                        </span>
                        <span class="price">
                          가격 : {{item.price}} 만원
                        </span>
                      </div>
                    </div>
                  </div>
                </component>
                <hooper-navigation slot="hooper-addons" v-if="this.marketItems.length>5 && this.screenMode=='pc'"></hooper-navigation>
              </component>
            </div> <!-- //slider-list-box -->
          </dd>
          </transition>
        </dl>
      </div>
    </div> <!--// main-market-box -->
    <div class="main-market-box">
      <div class="tit p2p">
        <strong>두산 중고직거래</strong>
        <span>두산에서 제공하는 개인 간 중고 직거래</span>
        <router-link to="/p2p-market" class="btn-more"><span>두산 중고직거래 </span>바로가기</router-link>
      </div>
      <div class="table-box">
        <dl class="tabSlider none"> <!-- 탭 한개인 경우 none 클래스명 추가  -->
          <dt :class="[ activetab2 === 1 ? 'on' : '' ]">
             <span class="phase2-pc">
              최근<br>
              중고직거래<br>
              매물
            </span> 
            <button type="button" @click="tabSlider2($event,1)"  class="phase2-tablet phase2-mobile">
              최근 중고직거래 매물
            </button>
          </dt>
          <transition name="slide-fade">
          <dd v-if="activetab2 === 1">
            <div class="main-list-box v2">
              <component :is="appendHooper" :settings="hooperSettings" >
                <component :is="appendSlider"  :slot="(screenMode == 'pc')? null: 'accodionWrapper'" v-for="(item,index) in p2pMarketItems" :key="index" :index="index">
                  <div class="market-list-item" :slot="(screenMode == 'pc')? null: 'accodionItem'">
                    <a :href="item.link" target="_blank" class="img" title="새 창">
                      <img :src="item.img" alt="상품이미지" />
                    </a>
                    <div class="box">
                      <p class="name">
                        <a :href="item.link" target="_blank" title="새 창">{{item.name}}</a>
                      </p>
                      <p class="info">{{item.info1}} / {{item.info2}} / <br class="phase2-pc phase2-tablet">{{item.info3}} /</p>
                      <p class="info">{{item.info4}}</p>
                      <div class="chk">
                        <span class="interest shortcut">
                          <input type="checkbox" name="p2p_interest_radio" :id="'p2p_interest_radio_0'+index" :checked="item.interest"/>
                          <label :for="'p2p_interest_radio_0'+index">관심장비</label>
                        </span>
                        <span class="price">
                          가격 : {{item.price}} 만원
                        </span>
                      </div>
                    </div>
                  </div>
                </component>
                <hooper-navigation slot="hooper-addons" v-if="this.p2pMarketItems.length>5 && this.screenMode=='pc'"></hooper-navigation>
              </component>
            </div> <!-- //slider-list-box -->
          </dd>
          </transition>
        </dl>
      </div>
    </div> <!--// main-market-box -->
</div>
</template>

<script>
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
  name: 'Main-List',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    TempDiv,
    TempDiv2
  },
  data () {
    return {
      activetab: 1,
      activetab2: 1,
      screenMode:'',
      appendHooper:'',
      appendSlider:'',
      hooperSettings: {
      itemsToShow:5 ,
      itemsToSlide:1 ,
      infiniteScroll:false,
      autoPlay:false,
      centerMode: false,
        breakpoints: {
          0:{
            itemsToShow: 4
          },
          1200: {
            itemsToShow: 5
          }
        }
      }
    }
  },
  methods: {
    tabSlider:function(e,n){
      if (e.target.parentElement.classList.contains('on')) {
         if(this.screenMode == 'pc') this.activetab = n;
         else this.activetab = 0;
      } else{ 
        this.activetab = n;
        if(this.screenMode == 'pc'){
          this.appendSlider=Slide
          this.appendHooper=Hooper
          
        }else{
          this.appendSlider=TempDiv2
          this.appendHooper=TempDiv
        }
      }
    },
     tabSlider2:function(e,n){
      if (e.target.parentElement.classList.contains('on')) {
         if(this.screenMode == 'pc') this.activetab2 = n;
         else this.activetab2 = 0;
      } else{ 
        this.activetab2 = n;
        if(this.screenMode == 'pc'){
          this.appendSlider=Slide
          this.appendHooper=Hooper
          
        }else{
          this.appendSlider=TempDiv2
          this.appendHooper=TempDiv
        }
      }
    },
    setScreenMode:function(){
      var w = window.innerWidth;
      if(w>1024) this.screenMode = "pc";
      else if(w<=1024 && w>640)  this.screenMode = "tablet";
      else this.screenMode = "mobile";
      //console.log(this.screenMode);
       this.appendSlider=''
       this.appendHooper=''
      if(this.screenMode == 'pc'){
        //pc일 경우 리스트 그대로
        this.marketItems = this.marketItemsData
        this.p2pMarketItems = this.p2pMarketItemsData
        this.appendSlider=Slide
        this.appendHooper=Hooper
         if(this.activetab == 0) this.activetab =1
         if(this.activetab2 == 0) this.activetab2 =1
      }else{
        //pc가 아닐 경우 리스트 4개로 축소
        this.marketItems = this.marketItemsData.slice(0,4)
        this.p2pMarketItems = this.p2pMarketItemsData.slice(0,4)
        this.activetab2 = 0
        this.appendSlider=TempDiv2
        this.appendHooper=TempDiv
      }
    }
  },
  created: function () {
    //임시데이터 
    this.marketItemsData = json.data.marketItems
    this.p2pMarketItemsData = json.data.p2pMarketItems
    this.setScreenMode(); // 현재 스크린모드 셋팅
  },
  mounted(){
    window.addEventListener("resize",this.setScreenMode)//리사이징으로 모드 업데이트
  }
}
</script>