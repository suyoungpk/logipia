<template>
  <section id="lp-section" class="lp-sub companyIntro">
    <common-nav nowMenu="companyIntro"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>두산 로지피아 홈페이지를 방문해 주셔서 감사합니다.</span>
    </div>
    <div class="sub-wrap intro">
      <Company></Company>
      <CustomValue></CustomValue>
      <Video></Video>
      <Location></Location>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import Company from '@/components/Intro/Company'
import CustomValue from '@/components/Intro/CustomValue'
import Video from '@/components/Intro/Video'
import Location from '@/components/Intro/Location'
export default {
  name: 'Intro',
  components: {
    'common-nav': CommonNav,
    'Company': Company,
    'CustomValue': CustomValue,
    'Video': Video,
    'Location': Location
  },
  data () {
    return {
      pageTitle: '회사소개'
    }
  }
}
</script>

<style>
</style>
