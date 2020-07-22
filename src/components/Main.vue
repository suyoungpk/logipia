<template>
  <status></status>
  <!-- //가이드 작업 -->
</template>

<script>
import status from '@/components/StatusP4'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
export default {
  name: 'Main',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    status
  }
}
</script>

<style lang="css" scoped>
.hooper-slide{background:#666;}
</style>
