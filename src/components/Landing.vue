<template>
  <section class="ld-section">
    <div class="ld-wrap">
      <button class="btn-dim" type="button" title="자동검색창 닫기" @click="blurInput"></button>
      <div class="ld-tlt">
        <h1 class="logo"><a href="/">Doosan Logipia</a></h1><!-- 200720 수정 -->
        <router-link to="/main" class="btn-home"><span class="hidden">메인으로 가기</span></router-link>
      </div> <!--// ld-tlt -->
      <div class="srch-box">
        <div class="auto-complete">
          <form action="" method="" name="">
            <label for="srch-form01" class="hidden">랜딩페이지 검색</label>
            <input type="search" name="" id="srch-form01" @focus="openAutoComplete"  v-model="keyword" @keyup="sendKeyword" autocomplete="off"> 
            <button type="button" @click="resetInput"  class="btn-del"  v-show="focusInput"><span class="hidden">다시쓰기</span></button>
          </form>
          <div class="complete-wrap" v-show="focusInput">
              <div class="complete-box" v-if="lndKeyWordList.length > 0">
                <ul class="complete-list" v-if="lndKeyWordList.length > 0">
                  <li  v-for="(lndKeyWord, index) in lndKeyWordList" :key="index">
                    <a href="javascript:void(0)">스마트</a>
                    <a href="javascript:void(0)" class="btn-del-txt">삭제</a>
                  </li>
                <!-- <li>
                    <a href="javascript:void(0)">스마트</a>
                    <a href="javascript:void(0)" class="btn-del-txt">삭제</a>
                  </li>
                </ul>
                <ul class="complete-list">
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">스마트리스</a>
                  </li>
                   -->
                </ul>
              </div>
          </div><!--// complete-wrap -->
        </div><!-- // auto-complete -->
      </div><!--// srch-box -->
      <div :class="['quick-btn-wrap',(slideImgList.length<1)?'noSlide':'']" >
        <ul class="quick-btn">
          <li class="quick quick01">
            <router-link to="/product/" >상품</router-link>
          </li>
            <li class="quick quick02">
            <router-link to="/product/rental" >렌탈</router-link>
          </li>
          <li class="quick quick03 new">
            <a href="javascript:void(0)" @click="popLd">로지피아 중고</a>
          </li>
            <li class="quick quick04 new">
            <a href="javascript:void(0)"  @click="popLd">중고직거래</a>
          </li>
            <li class="quick quick05">
            <a href="http://www.doosan-iv.com/kr/product/" target="_blank" title="새창" class="outlink">지게차정보</a>
          </li>
        </ul>
      </div><!--// quick-btn-wrap -->
      <!-- v-if="slideImgList.length>0" -->
      <div class="ld-slide" >
        <hooper :infiniteScroll="false" ref="hooper" :itemsToShow="1" :centerMode="true" :initialSlide="0">
          <!-- <slide :index="0">
              <div class="ld-cap">
                <router-link to="/automation-and-industrial/cobots">
                  <img src="../assets/images/common/ld-img02.png">
                  <div class="desc arr">
                    <p>협동로봇</p>
                    <span>작업자와 협업을 위한 최적의 파트너</span>
                  </div>
                </router-link>
              </div>
          </slide> -->
          <slide :index="0">
              <div class="ld-cap">
                <router-link to="/automation-and-industrial/cobots">
                  <img src="https://logipia-dev.doosan-iv.com/lp/bnr/event_list_m_1561685259195_1594944796029.jpg">
                  <div class="desc vod">
                    <p>로지피아 고객 프로모션 이벤트</p>
                    <span>로지피아 고객 프로모션 이벤트 진행합니다!</span>
                  </div>
                </router-link>
              </div>
          </slide>
          <!-- <slide :index="2">
              <div class="ld-cap">
                <router-link to="/automation-and-industrial/cobots">
                  <img  src="http://placehold.it/600x200">
                  <div class="desc link">
                    <p>협동로봇</p>
                    <span>작업자와 협업을 위한 최적의 파트너</span>
                  </div>
                </router-link>
              </div>
          </slide> -->
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
      <!-- 팝업영역 -->
      <div id="pop-landing" class="popup-wrap pop-ld type02">
        <div class="popup-box">
          <div class="popup-tlt">
            <h2> 찾으시는 <span>중고 상품</span>이 있으신가요?</h2>
            <div class="pop-tlt-box">
              <p>두산 로지피아가 제공하는 <strong>QUICK &#38; SMART</strong> 서비스를 만나보세요!</p>
              <a href="" class="btn-shortcut phase2-pc phase2-tablet">중고판매 바로가기</a>
            </div><!-- // pop-tlt-box-->
          </div><!-- // popup-tlt-->
          <div class="popup-dept dept-box">
            <dl v-for="(option,index) in optionList" :key="index">
              <dt :class="activetab[index]?'active':''">
                {{option.name}}
                <span class="selected-txt">{{selected[index]}}</span>
                <button type="button" class="btn-toggle phase2-mobile" @click="activetab[index] =!activetab[index]"></button>
              </dt>
              <transition name="slide-fade">
                <dd>
                  <ul v-if="activetab[index]">
                    <li v-for="(list,j) in option.list" :key="j" >
                      <button type="button" @click="selectOption($event,index,list.name)">{{list.name}}</button>
                    </li>
                  </ul>
                </dd>
              </transition>
            </dl>
          </div><!--// popup-dept-->
          <div class="btn-box2 phase2-mobile"><!-- 200720 수정 -->
           <button type="button" class="popbtn allselect add" @click="popLdClose">매물 등록하기</button>
           <a href="" class="btn-shortcut">중고판매 바로가기</a>
          </div><!-- //200720 수정 -->
          <div class="pop-btn">
            <button type="button" class="popbtn allselect add" @click="popLdClose">매물 등록하기</button><!-- 200720 추가 -->
            <!-- 모두 선택했을때 생기는 버튼 -->
            <button type="button" class="popbtn allselect" @click="popLdClose" v-if="allselected">선택한 사항으로 제품찾아보기</button>
          </div><!-- // pop-btn-->
          <button type="button" class="popup-close" @click="popLdClose">팝업닫기</button>
        </div><!-- // popup-box-->
      </div> <!-- // popup-wrap-->
      <div id="pop-event" class="popup-wrap pop-event on">
          <div class="pop-con">
            <div class="logowrap">Doosan-Logipia</div>
            <hooper :infiniteScroll="false" ref="hooper2" :itemsToShow="1"  :itemsToSlide="1" :centerMode="true"> 
              <slide  v-for="(event,i) in eventList" :key="i" :index="i">
                  <div class="eventbox">
                    <a :href="event.link" :target="event.target">
                      <img :src="event.imgsrc" :alt="event.desc">
                    </a>
                  </div>
              </slide>
            <hooper-navigation slot="hooper-addons" v-if="eventList.length>1"></hooper-navigation>
          </hooper>
          <div class="pop-btn-box">
            <span class="inp-chk">
              <input type="checkbox" name="" id="notopen">
              <label for="notopen">24시간 동안 팝업 열지 않기</label>
            </span>
            <button type="button" class="btn-close" @click="closeEventPop">닫기</button>
          </div>
          </div>
      </div><!--// pop-event -->
    </div> <!--// ld-wrap -->       
  </section>
</template>

 <script> 
import { Hooper, Slide,
Navigation as HooperNavigation,
Pagination as HooperPagination } from 'hooper';

import 'hooper/dist/hooper.css';
export default {
  name: 'Landing',
  metaInfo: { //seo 개선 
    title: '두산 로지피아',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아. 두산이 하면 빠르고 스마트해집니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아' },
      ]
  },
  data(){
    return {
      focusInput:false, 
      keyword:'',
      allselected:false,
      screenMode:'',
      slideImgList:[
        //데이터 리스트 
      ],
      lndKeyWordList:[],
      activetab:{0:true,1:false,2:false,3:false},
      optionList:[
        {
          id:'1',
          name:'동력/탑승방식',
          list:[
            { id:'구분값1-1',name:'전체'},
            { id:'구분값1-2',name:'엔진디젤'},
            { id:'구분값1-3',name:'엔진LP'},
            { id:'구분값1-4',name:'전동좌식'},
            { id:'구분값1-5',name:'전동입승'},
            { id:'구분값1-6',name:'기타'}
          ]
        },
        {
          id:'2',
          name:'적재량',
          list:[
            { id:'구분값',name:'전체'},
            { id:'구분값',name:'1톤 ~ 2톤 미만'},
            { id:'구분값',name:'2톤 ~ 3.5톤 미만'},
            { id:'구분값',name:'3.5톤 ~ 5톤 미만'},
            { id:'구분값',name:'5톤 ~ 8톤 미만'},
            { id:'구분값',name:'8톤 ~ 10톤 미만'},
            { id:'구분값',name:'10톤 ~ 18톤 미만'},
            { id:'구분값',name:'18톤 ~ 25톤 미만'},
            { id:'구분값',name:'25톤 이상'},
            { id:'구분값',name:'1톤 ~ 2톤 미만'},
            { id:'구분값',name:'2톤 ~ 4톤 미만'},
            { id:'구분값',name:'4톤 이상'},
            { id:'구분값',name:'1톤 ~ 2톤 미만'},
            { id:'구분값',name:'2톤 ~ 4톤 미만'}
          ]
        },
        {
          id:'3',
          name:'지역',
          list:[
            { id:'구분값',name:'전국'},
            { id:'구분값',name:'서울'},
            { id:'구분값',name:'세종'},
            { id:'구분값',name:'인천'},
            { id:'구분값',name:'대전'},
            { id:'구분값',name:'광주'},
            { id:'구분값',name:'대구'},
            { id:'구분값',name:'울산'},
            { id:'구분값',name:'부산'},
            { id:'구분값',name:'경북'},
            { id:'구분값',name:'강원'},
            { id:'구분값',name:'충남'},
            { id:'구분값',name:'충북'},
            { id:'구분값',name:'전남'},
            { id:'구분값',name:'전북'},
            { id:'구분값',name:'경남'},
            { id:'구분값',name:'경북'},                
            { id:'구분값',name:'제주'},
            { id:'구분값',name:'기타지역'}
          ]
        },
        {
          id:'4',
          name:'제조사',
          list:[
            { id:'구분값',name:'전체'},
            { id:'구분값',name:'두산'},
            { id:'구분값',name:'도요타'},
            { id:'구분값',name:'현대'}
          ]
        },
      ],
      eventList:[ // 이벤트 팝업 데이터
        {id:0,imgsrc:"http://placehold.it/960x1000",desc:"이벤트이미지",link:"http://www.naver.com",type:"_blank"},
        {id:1,imgsrc:"http://placehold.it/960x2000",desc:"이벤트이미지2",link:"http://www.naver.com",type:"_blank"}
      ],
      selected:{0:'',1:'',2:'',3:''},
    }
  },
  components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination
  },
  methods: {
    popLd: function () {
      var popupWrap = document.getElementById('pop-landing')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popLdClose: function () {
      var popupWrap = document.getElementById('pop-landing')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
      this.resetOption();
    },
    closeEventPop:function(){
      var popupWrap = document.getElementById('pop-event')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
    },
    openEventPop:function(){
      var popupWrap = document.getElementById('pop-event')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
      popupWrap.querySelectorAll('a')[0].focus()
    },
    resetInput:function(e){
      document.getElementById('srch-form01').value="";
      this.keyword="";
      document.getElementById('srch-form01').focus();
    },
    sendKeyword:function(e){
      //console.log(e.target.value)
      setTimeout(function(){
        //ajax
       },300)// 사용자 타자치는 시간 딜레이
    },
    setScreenMode:function(){
      var w = window.innerWidth;
      var org = this.screenMode;
      if(w>1025) this.screenMode = "pc";
      else if(w<1025 && w>640) this.screenMode = "tablet";
      else this.screenMode = "mobile";
      if(org == this.screenMode) return false;
      if(this.hooper)
        this.hooper.restart();
        this.activetab={0:true,1:false,2:false,3:false}
    },
    openAutoComplete:function(){
      document.body.classList.add('auto-wrap')
      this.focusInput=true
    },
    closeAutoComplete:function(){
      if( document.body.classList.contains('auto-wrap'))
        document.body.classList.remove('auto-wrap')
      this.focusInput=false
    },
    blurInput:function(e){
      if(e.target == document.querySelector('#srch-form01')) return false
      if(!(document.querySelector('.srch-box').contains(e.target)))
       this.closeAutoComplete()
    },
    resetOption:function(){
      var btns = document.querySelector('.dept-box').querySelectorAll("li");
      var dts = document.querySelector('.dept-box').querySelectorAll("dl");
      for(var i=0;i<btns.length;i++)
        btns[i].classList.remove("active")
      for(var i=0;i<dts.length;i++)
        dts[i].classList.remove("active")
      dts[0].classList.add("active")
      this.activetab={0:true,1:false,2:false,3:false}
      this.selected={0:'',1:'',2:'',3:''}
      this.allselected=false
    },
    selectOption:function(e,index,list){
      var parent = e.target.parentElement.parentElement;
      var btns = parent.querySelectorAll("li");
      for(var i=0;i<btns.length;i++){
        btns[i].classList.remove("active")
      }
      e.target.parentElement.classList.add("active")
      if(this.screenMode == 'mobile'){
        this.activetab[index]=false
        this.selected[index] = list
      }
      var dls = document.querySelector('.dept-box').children
      if(index!=(dls.length-1)){
        if(this.activetab[index+2]  && index<(dls.length-2)){
          for(var i=index;i<dls.length-2;i++){
            dls[i+2].querySelector('dt').classList.remove("active")
            this.activetab[i+2]=false
          }
          var otherBtns =dls[index+1].querySelectorAll("li");
          for(var i=0;i<otherBtns.length;i++){
            otherBtns[i].classList.remove("active")
          }
           this.allselected=false
        }else{
          dls[index+1].querySelector('dt').classList.add("active")
          this.activetab[index+1]=true
        }
        
      }else{
          this.allselected=true
      }
    },getKeyWord:function () {
      this.lndKeyWordList=["list1","list2","list3","list4"];
    }
  },
  created(){
    this.getKeyWord();
  },
  mounted(){
    this.openEventPop()
    this.setScreenMode()
    window.addEventListener('resize',this.setScreenMode)
    // document.querySelector('.ld-section').addEventListener('click',this.blurInput)
  }
}
</script>
