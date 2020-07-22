<template>
  <div>
    <FaqCate
    :faqcategory="faqcategory"
    @changeCategory="changeCategory"
    ></FaqCate>
    <div class="accordion-wrap">
      <ul class="faq-head phase2-pc phase2-tablet">
        <li class="no">
          <span>번호</span>
        </li>
        <li class="part">
          <span>구분</span>
        </li>
        <li class="title">
          <span>제목</span>
        </li>
      </ul>
      <ul class="accordion">
        <li v-for="(faqList, index) in limited" v-bind:key="index" class="accordion-item">
          <h3>
            <span class="number">{{faqList.number}}</span>
            <span class="category">{{faqList.category}}</span>
            <span class="question">{{faqList.title}}</span><button class="btn-open" v-on:click="answer" title="답변열기"></button>
          </h3>
          <div class="answer">
            <p>
              {{faqList.answer}}
            </p>
            <CsInfo></CsInfo>
          </div>
        </li>
      </ul>
      <MoreView
      v-if="moreViewvisible"
      :limit.sync="limit"
      :totalNum.sync="totalNum"
      @increment="increment"
      >
    </MoreView>
  </div>
  <paging></paging>
</div>

</template>

<script>
import FaqCate from '@/components/service-center/FaqCate'
import MoreView from '@/components/common/MoreView'
import json from '@/json/faqData.json'
import CsInfo from '@/components/service-center/CsInfo'
import paging from '@/components/common/Paging'

export default {
  name: 'FaqList',
  components: {
    'FaqCate': FaqCate,
    'MoreView': MoreView,
    'CsInfo': CsInfo,
    'paging': paging
  },
  data () {
    return {
      faqList: [],
      faqcategory: [],
      moreViewvisible: false,
      limit: 10,
      categoryTitle: '전체',
      totalNum: 0
    }
  },
  created: function () {
    this.faqList = json.data.faqList
    this.faqcategory = json.data.faqcategory
  },
  methods: {
    answer: function (event) {
      if (event.target.parentElement.parentElement.classList.contains('active')) {
        event.target.parentElement.parentElement.classList.remove('active')
        event.target.title = '답변보기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 0 + 'px'
      } else {
        this.closeAnswer()
        event.target.parentElement.parentElement.classList.add('active')
        event.target.title = '답변닫기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 900 + 'px'
      }
    },
    increment: function () {
      this.limit += 10
      this.moreVisible()
    },
    changeCategory: function (categoryname, no) {
      var j
      for (j = 0; j < document.getElementsByClassName('btn-faqcategory').length; j++) {
        document.getElementsByClassName('btn-faqcategory')[j].classList.remove('active')
        document.querySelector('.category-select').querySelector('select').options[j].selected=false
      }
      document.getElementsByClassName('btn-faqcategory')[no].classList.add('active')
      document.querySelector('.category-select').querySelector('select').options[no].selected=true
      this.categoryTitle = categoryname
      this.limit = 10
      this.closeAnswer()
      this.FirstAnswerOpen()
      if (this.categoryTitle === '전체') {
        this.totalNum = this.faqList.length
      } else {
        this.totalNum = this.matched.length
      }
      this.moreVisible()
    },
    closeAnswer: function () {
      var i
      for (i = 0; i < document.getElementsByClassName('accordion-item').length; i++) {
        document.getElementsByClassName('accordion-item')[i].classList.remove('active')
        document.getElementsByClassName('btn-open')[i].title = '답변열기'
        document.getElementsByClassName('answer')[i].style.maxHeight = 0 + 'px'
      }
    },
    FirstAnswerOpen: function () {
      document.getElementsByClassName('accordion-item')[0].classList.add('active')
      document.getElementsByClassName('btn-open')[0].title = '답변닫기'
      document.getElementsByClassName('answer')[0].style.maxHeight = 900 + 'px'
    },
    moreVisible: function () {
      if (this.totalNum > this.limit) {
        this.moreViewvisible = true
      } else {
        this.moreViewvisible = false
      }
    }
  },
  mounted: function () {
    this.FirstAnswerOpen()
    this.totalNum = this.faqList.length
    this.moreVisible()
    document.getElementsByClassName('accordion-item')[0].classList.add('active')
    document.querySelector('.category-select').querySelector('select').options[0].selected=true
    document.getElementsByClassName('btn-faqcategory')[0].classList.add('active')
  },
  computed: {
    matched: function () {
      return this.faqList.filter(function (el) {
        return el.category === this.categoryTitle
      }, this)
    },
    limited: function () {
      if (this.categoryTitle === '전체') {
        return this.faqList.slice(0, this.limit)
      } else {
        return this.matched.slice(0, this.limit)
      }
    }
  }
}
</script>