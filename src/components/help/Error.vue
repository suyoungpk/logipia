<template>
    <div class="error-wrap">
      <div class="er-top">
        <h1 class="logo">
            <router-link to="/main">DOOSAN LOGIPIA 로고</router-link>
        </h1>
        <span class="title">두산 로지피아</span>
      </div>
      <div class="er-content">
        <p class="txt01">이용에 불편을 드려 죄송합니다.</p>
        <p class="txt02">방문하시려는 웹 페이지의 주소가 잘못 입력되었거나, <br>
        변경 또는 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br>
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.<br><br>
        감사합니다.
        </p>
      </div>
      <div class="er-btn">
        <button type="button" class="btn btn-b-line">이전 화면</button>
        <button type="button" class="btn btn-blue">첫 화면으로 이동</button>
      </div>
      <ul class="er-list">
        <li>
          <a href="#">
            <span class="img-box"><img src="../../assets/images/img-error01.png" alt=""></span>
            <span class="tit">중고마켓</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="img-box"><img src="../../assets/images/img-error02.png" alt=""></span>
            <span class="tit">정비서비스</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="img-box"><img src="../../assets/images/img-error03.png" alt=""></span>
            <span class="tit">고객센터</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style>
  body {background:#fff !important;}
</style>
