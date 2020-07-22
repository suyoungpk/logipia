<template>
  <nav class="lnb-wrap">
    <div class="lnb">
      <a href="/" class="lnb-home">홈으로 이동</a>

      <div style="display: inline-block" id="lnb_menu_1">
        <a href="javascript:void(0);" class="lnb-menu" id="lnb-market" @click="nav_btn">{{nowMenu1Nm}}</a>
        <div class="lnb-menu-box lnb-market-box">
            <ul class="on">
                <li v-if="nowMenu1 != 'product'"><a href="/product/rental">상품</a></li>
                <li v-if="nowMenu1 != 'rental'"><a href="/product/rental">렌탈</a></li>
                <li v-if="nowMenu1 != 'logipiaUsed'"><a href="/product/logipia-used">로지피아중고</a></li>
                <li v-if="nowMenu1 != 'automation'"><a href="/automation-and-industrial/AGF">자동화 무인화</a></li>
                <li v-if="nowMenu1 != 'center'"><a href="/service-center/notice">고객센터</a></li>
                <li v-if="nowMenu1 != 'p2pmarket'"><a href="/p2p-market">중고직거래</a></li>
                <li v-if="nowMenu1 != 'company'"><a href="/intro/intro">회사소개</a></li>
            </ul>
        </div>
      </div>

      <div style="display: inline-block" id="lnb_menu_2" v-if="subnav1">
        <a href="javascript:void(0);" class="lnb-menu" id="lnb-my" v-if="nowMenu2Nm !== ''" @click="nav_btn">{{nowMenu2Nm}}</a>
        <div class="lnb-menu-box lnb-my-box" >
          <ul class="on" v-if="nowMenu1 === 'product'">
              <li v-if="nowMenu2 != 'rent'"><router-link to="/product/rental">렌탈</router-link></li>
              <li v-if="nowMenu2 != 'smartLease'"><router-link to="/product/smart-lease">스마트 리스</router-link></li>
              <li v-if="nowMenu2 != 'sales'"><router-link to="/product/sales">판매</router-link></li>
              <li v-if="nowMenu2 != 'used'"><router-link to="/product/logipia-used">로지피아 중고</router-link></li>
              <li v-if="nowMenu2 != 'service'"><router-link to="/product/doosan-care-service">정비서비스</router-link></li>
          </ul>
          <ul class="on" v-if="nowMenu1 === 'automation'">
              <li v-if="nowMenu2 != 'agf'"><router-link to="/automation-and-industrial/AGF">무인지게차</router-link></li>
              <li v-if="nowMenu2 != 'compact'"><router-link to="/automation-and-industrial/compact-excavators">미니굴삭기</router-link></li>
              <li v-if="nowMenu2 != 'cobots'"><router-link to="/automation-and-industrial/cobots">협동 로봇</router-link></li>
          </ul>
          <ul class="on" v-if="nowMenu1 === 'intro'">
              <li v-if="nowMenu2 != 'intro'"><router-link to="/intro/intro">두산 로지피아</router-link></li>
              <li v-if="nowMenu2 != 'credo'"><router-link to="/intro/credo">고객 핵심가치</router-link></li>
              <li v-if="nowMenu2 != 'history'"><router-link to="/intro/history">연혁</router-link></li>
              <!-- <li v-if="nowMenu2 != 'companyIntro'"><router-link to="/intro/companyIntro">회사소개</router-link></li> -->
              <li v-if="nowMenu2 != 'vod'"><router-link to="/intro/vod">홍보영상</router-link></li>
              <li v-if="nowMenu2 != 'place'"><router-link to="/intro/place">찾아오시는길</router-link></li>
          </ul>
          <ul class="on" v-if="nowMenu1 === 'center'">
              <li v-if="nowMenu2 != 'noti'"><router-link to="/service-center/notice">공지사항</router-link></li>
              <li v-if="nowMenu2 != 'evnt'"><router-link to="/service-center/event">이벤트</router-link></li>
              <li v-if="nowMenu2 != 'cst'"><router-link to="/service-center/consult-list">1:1문의</router-link></li>            
              <li v-if="nowMenu2 != 'faq'"><router-link to="/service-center/faq">FAQ</router-link></li>
              <li v-if="nowMenu2 != 'ntw'"><router-link to="/service-center/network">두산 네트워크</router-link></li>
              <li v-if="nowMenu2 != 'ref'"><router-link to="/service-center/reference">자료실</router-link></li>
          </ul>
          <ul class="on" v-if="nowMenu1 === 'member'">
              <li v-if="nowMenu2 != 'login'"><router-link to="/login/login">로그인</router-link></li>
              <li v-if="nowMenu2 != 'jstep1'"><router-link to="/member/jstep1">회원가입</router-link></li>
              <li  class="long" v-if="nowMenu2 != 'findid'"><router-link to="/member/findid">아이디/비밀번호 찾기</router-link></li>
              <li v-if="nowMenu2 != 'myinfo'"><router-link to="/member/myinfo">회원정보 수정</router-link></li>
              <li v-if="nowMenu2 != 'memwdr'"><router-link to="/member/memwdr">회원탈퇴</router-link></li>
          </ul>
          <ul class="on" v-if="nowMenu1 === 'mypage'">
              <li v-if="nowMenu2 != 'mypage1'"><router-link to="/member/mypage-interest">나의 관심장비</router-link></li>
              <li v-if="nowMenu2 != 'mypage2'"><router-link to="/member/mypage-recent">최근 본 장비</router-link></li>
              <li v-if="nowMenu2 != 'mypage3'"><router-link to="/member/mypage-myitems">등록장비관리</router-link></li>
              <li v-if="nowMenu2 != 'mypage4'"><router-link to="/member/mypage-alarm">알림목록</router-link></li>
          </ul>
        </div>
      </div>
        <div style="display: inline-block" id="lnb_menu_3" v-if="subnav2">
          <a href="javascript:void(0);" class="lnb-menu" id="lnb-my" v-if="nowMenu3Nm !== ''" @click="nav_btn">{{nowMenu3Nm}}</a>
          <div class="lnb-menu-box lnb-my-box" >
            <ul class="on" v-if="nowMenu2 === 'service'">
                <li v-if="nowMenu3 != 'careService'"><router-link to="/product/doosan-care-service">두산케어서비스</router-link></li>
                <li v-if="nowMenu3 != 'paidService'"><router-link to="/product/paid-service">유상정비서비스</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: ['nowMenu'],
  data () {
    return {
      menus: [],
      nowMenu1: '',
      nowMenu2: '',
      nowMenu3: '',
      nowMenu1Nm: '',
      nowMenu2Nm: '',
      nowMenu3Nm: '',
      subnav1:false,
      subnav2:false,
      isLogin: false
    }
  },
  created () {
  var menu1 = [
      {
        id: 'product', name: '상품',
        list: [
                {id: 'rent',name: '렌탈'},
                {id: 'smartLease', name: '스마트 리스'},
                {id: 'sales',name: '판매' },
                {id: 'used', name: '로지피아 중고'},
                {
                  id: 'service', name: '정비서비스',
                  list:[
                        {id: 'careService', name: '두산케어 서비스'},
                        {id: 'paidService', name: '유상정비 서비스'}
                      ]
                }
              ]
      },
      {id: 'rental', name: '렌탈'},
      {id: 'logipiaUsed', name: '로지피아 중고'},
      {
        id: 'automation', name: '자동화 무인화',
        list: [
                {id: 'agf', name: '무인지게차'},
                {id: 'compact', name: '미니굴삭기'},
                {id: 'cobots',name: '협동 로봇'}
              ]
      },
      {
        id: 'intro', name: '회사소개',
        list: [
                {id: 'intro', name: '두산 로지피아'},
                {id: 'credo', name: '고객 핵심가치'},
                {id: 'history', name: '연혁'},
                {id: 'vod', name: '홍보영상'},
                {id: 'place',name: '찾아오시는길'}
              ]
      },
      {
        id: 'center', name: '고객센터',
        list: [
                {id: 'noti', name: '공지사항'},
                {id: 'evnt', name: '이벤트'},
                {id: 'cst', name: '1:1문의'},
                {id: 'faq', name: 'FAQ'},
                {id: 'ntw', name: '두산네트워크'},
                {id: 'ref', name: '자료실'}
              ]
      },
      {
        id: 'member',name: '회원',
        list: [
                {id: 'login', name: '로그인'},
                {id: 'jstep1', name: '회원가입'},
                {id: 'findid', name: '아이디/비밀번호 찾기'},
                {id: 'myinfo', name: '회원정보 수정'},
                {id: 'memwdr', name: '회원탈퇴'}
              ]
      },
      {id: 'p2pmarket', name: '중고직거래'},
      {
        id: 'mypage', name: '마이페이지',
        list: [
                {id: 'mypage1', name: '나의 관심장비'},
                {id: 'mypage2', name: '최근 본 장비'},
                {id: 'mypage3', name: '등록장비관리'},
                {id: 'mypage4', name: '알림목록'}
              ]
      }
  ]
    this.menus = menu1
    for (var i = 0; i < this.menus.length; i++) {
      var menu = this.menus[i]
       
       if (menu.list != null) {
          for (var j = 0; j < menu.list.length; j++) {
            if (menu.list[j].list != null) {
              for (var k = 0; k < menu.list[j].list.length; k++) {
                if (menu.list[j].list[k].id === this.nowMenu) {
                  this.nowMenu1 = menu.id
                  this.nowMenu2 = menu.list[j].id
                  this.nowMenu3 = menu.list[j].list[k].id
                  this.nowMenu1Nm = menu.name
                  this.nowMenu2Nm = menu.list[j].name
                  this.nowMenu3Nm = menu.list[j].list[k].name
                  this.subnav1=true;
                  this.subnav2=true;
                  return false;
                }
              }
            }
            if (menu.list[j].id === this.nowMenu) {
              this.nowMenu1 = menu.id
              this.nowMenu2 = menu.list[j].id
              this.nowMenu1Nm = menu.name
              this.nowMenu2Nm = menu.list[j].name
              this.subnav1=true;
              this.subnav2=false;
              return false;
            }
          }
       }
      if (menu.id === this.nowMenu) {
        this.nowMenu1 = menu.id
        this.nowMenu1Nm = menu.name
        this.subnav1=false;
        this.subnav2=false;
        return false;
      }
    }
  },
  mounted () {
  },
  methods: {
    nav_btn: function (event) {
      if (event.target.parentElement.classList.contains('on')) {
        event.target.parentElement.classList.remove('on')
      } else {
         var parent = event.target.parentElement.parentElement;
          var breads = parent.children
          for(let b of breads){
            if(b.classList.contains('on'))
                b.classList.remove('on');
            if(b === event.target.parentElement)
                b.classList.add('on')
          };
      }
    }
  }
}
</script>