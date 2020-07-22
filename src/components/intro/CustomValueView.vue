<template>
  <div class="acco-wrap">
    <div class="acco-box">
      <div class="top">
        <p class="title">QUICK &amp; SMART <span>PRODUCT</span></p>
        <p class="txt">환경, 안전, 생산성을 향상시키는 <span>New technology</span>를 접목한 차별화된 제품</p>
        <button v-on:click="btn_view" class="btn-view">보기</button>
      </div>
      <div class="view wide">
        <div class="view-box">
          <CustomValueTableProduct></CustomValueTableProduct>
          <p class="txt-noti">※ ‘위험의 외주화’ 방지를 비롯해 산업 현장의 안전규제를 대폭 강화한 산업안전 보건법(산안법) 개정안</p>
        </div>
      </div>
    </div>
    <div class="acco-box">
      <div class="top">
        <p class="title">QUICK &amp; SMART <span>SERVICE</span></p>
        <p class="txt">Digital platform을 활용한 서비스와 Financing program 도입을 통한 고객 맞춤형 <span>One-stop solution</span>제공</p>
        <button v-on:click="btn_view" class="btn-view">보기</button>
      </div>
      <div class="view small">
        <div class="view-box">
          <CustomValueTableService></CustomValueTableService>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomValueTableProduct from '@/components/Intro/CustomValueTableProduct'
import CustomValueTableService from '@/components/Intro/CustomValueTableService'
export default {
  name: 'CustomValueView',
  components: {
    'CustomValueTableProduct': CustomValueTableProduct,
    'CustomValueTableService': CustomValueTableService
  },
  methods: {
    btn_view: function (event) {
      if (event) {
        if (event.target.parentElement.nextElementSibling.style.maxHeight) {
          event.target.innerText = '보기'
          event.target.parentElement.parentElement.classList.remove('on')
          event.target.parentElement.nextElementSibling.style.maxHeight = null
        } else {
          event.target.innerText = '닫기'
          event.target.parentElement.parentElement.classList.add('on')
          event.target.parentElement.nextElementSibling.style.maxHeight = 390 + 'px'
        }
      }
    }
  }
}
</script>

<style>
</style>
