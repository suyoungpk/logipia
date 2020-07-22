<template>
  <section class="custom-cont">
    <h3 class="sub-title">두산 로지피아가 추구하는 고객 가치</h3>
    <ul class="value-list">
      <li>
        <div>
          <span class="num">01</span>
          <p class="txt">투명하고<br>신뢰할 수 있는 가격</p>
        </div>
      </li>
      <li>
        <div>
          <span class="num">02</span>
          <p class="txt">다양한 고객 맞춤형<br>프로그램</p>
        </div>
      </li>
      <li>
        <div>
          <span class="num">03</span>
          <p class="txt">차별적인 제품과<br>서비스</p>
        </div>
      </li>
    </ul>
    <CustomValueView></CustomValueView>
  </section>
</template>

<script>
import CustomValueView from '@/components/Intro/CustomValueView'
export default {
  name: 'CustomValue',
  components: {
    'CustomValueView': CustomValueView
  }
}
</script>

<style>
</style>
