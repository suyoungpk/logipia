<template>
  <div id="lp-wrapper" class="wrapper">
    <header-layout></header-layout>
    <router-view v-on:click="gnb_blur"></router-view>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import header from '@/components/common/Header'
import footer from '@/components/common/Footer'
export default {
  metaInfo: {
    title: '두산 로지피아'
  },
  components: {
    'header-layout': header,
    'footer-layout': footer
  },
  methods: {
    gnb_blur: function (event) {
      Array.from(document.getElementsByClassName('depth')).forEach(function (e) {
        e.classList.remove('open')
      })
    }
    // body_menu_close: function (event) {
    //   if (!event.target.classList.contains('owl-next') && !event.target.parentElement.classList.contains('menu-all') && !event.target.parentElement.parentElement.classList.contains('menu-all') && !event.target.classList.contains('btn-menu') && !event.target.parentElement.classList.contains('gnb-list')) {
    //     document.getElementById('lp-menu').classList.remove('on')
    //     document.querySelector('body').classList.remove('open')
    //   }
    // }
  }
}
</script>

<style>
</style>
