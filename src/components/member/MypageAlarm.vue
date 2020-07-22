<template>
<section id="lp-section" class="lp-sub mypage">
  <common-nav nowMenu="mypage4"></common-nav>
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
          <li><router-link to="/member/mypage-myitems">등록장비관리</router-link></li>
           <!-- 200714 -->
          <li :class="[(alarmisNew)?'new':'']"><a href="javascript:void(0)" class="on">알림목록</a></li>
          <li class="no"></li>
        </ul>
        <div class="tab-con">
          <div class="tabcontent">
            <form action="" name="frm">
                <!-- pc, 태블릿 용  -->
                <div class="phase2-pc phase2-tablet">
                  <h3 class="mypage-h3">
                    알림목록
                    <div class="btn-box-right">
                      <button class="btn btn-b-line"><span class="ico selectedcfm"></span>선택읽음</button>
                      <button class="btn btn-b-line"><span class="ico allcfm"></span>전체읽음</button>
                      <button class="btn btn-b-line"><span class="ico trashcan2"></span>선택삭제</button>
                    </div>
                  </h3>
                  <ul class="tabs-st3">
                    <li v-for="(alarmcategory, index) in alarmcategory" :key="index">
                      <a href="javascript:void(0)" class="btn-category" @click="changeCategory(alarmcategory.categoryId,alarmcategory.no)">{{alarmcategory.categoryname}}</a>
                    </li>
                    <!-- <li><a href="javascript:void(0)" class="btn-category">댓글등록</a></li>
                    <li><a href="javascript:void(0)" class="btn-category">판매완료</a></li> -->
                  </ul>
                  <div class="lp-board">
                    <div class="board">
                      <p class="title" >
                        <span class="chk inp-chk02">
                            <input  type="checkbox"  name="allchk" id="allchk"/>
                            <label for="allchk"  @click="check_all($event,'frm','chk')">전체선택</label>
                        </span>
                        <span class="date">알람일시</span>
                        <span class="type">구분</span>
                        <span class="con">내용</span>
                        <span class="last"></span>
                      </p>
                      <ul>
                        <li v-for="(item,idx) in nolimited" :key="idx">
                          <span class="chk inp-chk02">
                            <input  type="checkbox" name="chk" :id="'chk'+idx" />
                            <label :for="'chk'+idx">선택하기</label>
                          </span>
                          <span class="date">{{item.date}}</span>
                          <span class="type">{{item.category}}</span>
                          <span class="con">{{item.conTxt}} <span class="ico new" v-if="item.new">새 글</span></span>
                          <span class="last"><router-link tag="button" :to="item.link" class="btn btn-b-line btn-move">해당 게시글로 이동</router-link></span>
                        </li>
                        <!-- 내용이 없는 경우 -->
                        <li class="no-data" v-if="nolimited.length<1">알림 내역이 없습니다.</li>
                      </ul>
                    </div>
                    <paging></paging>
                  </div>
                </div>
                 <!-- 모바일용 -->
                <div class="phase2-mobile m-alarm-box">
                   <div class="category-select">
                      <div class="lp-select">
                          <select @change="chgSelect"  v-model="selectedCate">
                              <option v-for="(alarmcategory, index) in alarmcategory" :key="index" :value="alarmcategory">{{alarmcategory.categoryname}}</option>
                          </select>
                        </div>
                    </div>
                    <ul class="accordion">
                      <li v-for="(alarm, index) in limited" :key="index" class="accordion-item">
                        <h3>
                          <span class="date">{{alarm.date}}</span>
                          <span class="category">{{alarm.category}} <span class="ico new" v-if="alarm.new">새 글</span></span>
                          <button type="button" class="btn-open" @click="openLayer"></button>
                        </h3>
                        <div class="accordion-con">
                          <p>
                            {{alarm.conTxt}}
                          </p>
                          <p>
                           <router-link tag="button" :to="alarm.link" class="btn btn-b-line btn-move">해당 게시글로 이동</router-link>
                          </p>
                        </div>
                      </li>
                       <!-- 내용이 없는 경우 -->
                       <li class="no-data" v-if="limited.length<1">알림 내역이 없습니다.</li>
                    </ul>
                    <MoreView
                    v-if="moreViewvisible"
                    :limit.sync="limit"
                    :totalNum.sync="totalNum"
                    @increment="increment"
                    >
                  </MoreView>
                </div>
              </form>
          </div><!--// tabcontent -->
        </div><!-- // tab-con-->
    </div><!-- // mypage-contents--> 
  </div><!-- //sub-wrap -->
</section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import MoreView from '@/components/common/MoreView'
import paging from '@/components/common/Paging'
export default {
  name: 'MypageAlarm',
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
  components:{
    'common-nav': CommonNav,
    'MoreView': MoreView,
     'paging': paging
  },
  data() {
     return {
       pageTitle:"알림목록",
       alarmisNew:true, // 200714
       alarmcategory: [
         {no:0, categoryId: "all", categoryname: "전체"},
         {no:1, categoryId: "reply", categoryname: "댓글 등록"},
         {no:2, categoryId: "finished", categoryname: "판매 만료"}
       ],
       alarmList:[
         {id:0,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:true,link:'/'},
         {id:1,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:true,link:'/'},
         {id:2,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:true,link:'/'},
         {id:3,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:false,link:'/'},
         {id:4,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:false,link:'/'},
         {id:5,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:false,link:'/'},  
         {id:6,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:true,link:'/'},
         {id:7,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:false,link:'/'},
         {id:8,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:false,link:'/'},
         {id:9,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:false,link:'/'},  
         {id:10,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:true,link:'/'},
         {id:11,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:true,link:'/'},
         {id:12,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:true,link:'/'},
         {id:13,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:false,link:'/'},
         {id:14,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:false,link:'/'},
         {id:15,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:false,link:'/'},  
         {id:16,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:true,link:'/'},
         {id:17,date:'2020.04.20',categoryId: "reply", category:'댓글 등록',conTxt:'상품게시글에 댓글이 등록되었습니다.',new:false,link:'/'},
         {id:18,date:'2020.04.20',categoryId: "finished", category:'판매 만료 예정',conTxt:'등록하신 상품의 판매 게시기간이 7일 후 만료됩니다.',new:false,link:'/'},
         {id:19,date:'2020.04.20',categoryId: "finished", category:'판매 만료',conTxt:'등록하신 상품의 판매 게시기간이 만료되었습니다.',new:false,link:'/'}  
        
        ],
      moreViewvisible:false,
      limit:10,
      totalNum:0,
      categoryId: 'all',
      selectedCate:''
    }
  },
  created: function () {
    // this.alarmList = json.data.alarmList
    // this.alarmcategory = json.data.alarmcategory
  },
   methods: {
      check_all:function(e,formName,checkListName) {
           var theList = document.forms[formName][checkListName];
           var theTarget = e.target.previousElementSibling;
          //console.log(theTarget);
        if (theTarget.checked)
            for (var i = 0; i < theList.length; i++) 
              theList[i].checked = false
        else 
            for (var i = 0; i < theList.length; i++) 
              theList[i].checked = true
         
        },
      increment: function () {
        this.limit += 10
        this.moreVisible()
      },
      chgSelect:function(){
        console.log('chgSelect')
        this.changeCategory(this.selectedCate.categoryId,this.selectedCate.no)
      },
      changeCategory: function (categoryId, no) {
        console.log(this.selectedCate)
        for (var j = 0; j < document.getElementsByClassName('btn-category').length; j++) {
          document.getElementsByClassName('btn-category')[j].classList.remove('on')
          document.querySelector('.category-select').querySelector('select').options[j].selected=false
        }
        document.getElementsByClassName('btn-category')[no].classList.add('on')
        document.querySelector('.category-select').querySelector('select').options[no].selected=true
        this.categoryId = categoryId
        this.limit = 10
        // this.closeAnswer()
        // this.FirstAnswerOpen()
        if (this.categoryId === 'all') {
          this.totalNum = this.alarmList.length
        } else {
          this.totalNum = this.matched.length
        }
        this.moreVisible()
      },
      openLayer: function (event) {
        if (event.target.parentElement.parentElement.classList.contains('active')) {
          event.target.parentElement.parentElement.classList.remove('active')
          event.target.parentElement.parentElement.querySelector('.accordion-con').style.maxHeight = 0 + 'px'
        } else {
          this.closeLayer()
          event.target.parentElement.parentElement.classList.add('active')
          event.target.parentElement.parentElement.querySelector('.accordion-con').style.maxHeight = '100px'
        }
      },
      closeLayer: function () {
        for (var i = 0; i < document.getElementsByClassName('accordion-item').length; i++) {
          document.getElementsByClassName('accordion-item')[i].classList.remove('active')
          document.getElementsByClassName('accordion-con')[i].style.maxHeight = 0 + 'px'
        }
      },
      moreVisible: function () {
        console.log('moreVisible')
        if (this.totalNum > this.limit) {
          this.moreViewvisible = true
        } else {
          this.moreViewvisible = false
        }
      }
  },
  computed: {
    matched: function () {
      return this.alarmList.filter(function (el) {
        return el.categoryId === this.categoryId
      }, this)
    },
    limited: function () {
      if (this.categoryId === 'all') {
        return this.alarmList.slice(0, this.limit)
      } else {
        return this.matched.slice(0, this.limit)
      }
    },
    nolimited:function(){
       if (this.categoryId === 'all') {
        return this.alarmList
      } else {
        return this.matched
      } 
    }
  },
  mounted: function () {    
    this.totalNum = this.alarmList.length
    this.moreVisible()
    this.selectedCate = this.alarmcategory[0]
    document.getElementsByClassName('btn-category')[0].classList.add('on')
  }
}
</script>