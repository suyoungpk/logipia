<template>
  <div class="paging-box" :class="{'small':pageMode==='small'}">
    <div class="page">
      <a href="javascript:void()" class="first"><img src="../../assets/images/page_first.png" alt="첫번째 페이지 이동"/></a>
      <a href="javascript:void()" class="prev"><img src="../../assets/images/page_prev.png" alt="이전 페이지 이동"/></a>
      <ul>
        <li class="on"><a href="#">1</a></li>
        <!-- 현재 선택된 페이지 class="on" 추가 -->
        <li><a href="javascript:void()">2</a></li>
        <li><a href="javascript:void()">3</a></li>
        <!-- <li><a href="javascript:void()">4</a></li>
        <li><a href="javascript:void()">5</a></li>
        <li><a href="javascript:void()">6</a></li>
        <li><a href="javascript:void()">7</a></li>
        <li><a href="javascript:void()">8</a></li>
        <li><a href="javascript:void()">9</a></li>
        <li><a href="javascript:void()">10</a></li> -->
      </ul>
      <a href="javascript:void()" class="next"><img src="../../assets/images/page_next.png" alt="다음 페이지 이동"/></a>
      <a href="javascript:void()" class="last"><img src="../../assets/images/page_last.png" alt="마지막 페이지 이동"/></a>
    </div>
    <p class="more"><a href="javascript:void()">더 보기(10/1,234)</a></p>
  </div>
</template>

<script>
export default {
  name: 'paging',
  props:{
    pageMode:String
  }
}
</script>
