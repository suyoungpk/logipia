<template>
  <section id="lp-section" class="lp-sub cst">
    <common-nav nowMenu="cst"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>더욱 편리하게 이용하실 수 있도록 노력하겠습니다.</span>
    </div>
    <div class="sub-wrap">
      <ul class="tabs">
        <li><router-link to="/service-center/consult-add" class="on">상담신청</router-link></li>
        <li><router-link to="/service-center/consult-list">문의 내역 보기</router-link></li>
      </ul>
      <div class="tbl-inp">
        <p class="mark"><span>*</span> 필수 입력 항목입니다.</p>
        <div class="inp">
          <div class="tbl">
            <dl>
              <dt><span class="mark">필수항목</span>구분</dt>
              <dd class="rdo-box">
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-01" checked />
                  <label for="cst-type01-01">구매문의</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-02" />
                  <label for="cst-type01-02">판매문의</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-03" />
                  <label for="cst-type01-03">두산 케어 서비스</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-04" />
                  <label for="cst-type01-04">유상 정비 서비스</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-05" />
                  <label for="cst-type01-05">렌탈</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-06" />
                  <label for="cst-type01-06">두산 순정부품</label>
                </span>
                <span class="rdo02">
                  <input  type="radio" name="cst-type01" id="cst-type01-07" />
                  <label for="cst-type01-07">기타</label>
                </span>
                <span class="lp-select">
                  <select>
                    <option>선택</option>
                    <option>구매문의</option>
                    <option>판매문의</option>
                    <option>두산 케어 서비스</option>
                    <option>유상 정비 서비스</option>
                    <option>렌탈</option>
                    <option>두산 순정부품</option>
                    <option>기타</option>
                  </select>
                </span>
              </dd>
            </dl>
            <dl>
              <dt><span class="mark">필수항목</span><label for="cst-type02">제목</label></dt>
              <dd><input  type="text" name="cst-type02" id="cst-type02" class="inp-text" placeholder="제목을 입력해주세요."/></dd>
            </dl>
            <dl>
              <dt><span class="mark">필수항목</span>내용</dt>
              <dd><textarea class="inp-textarea" placeholder="내용을 입력해주세요."></textarea></dd>
            </dl>
            <dl class="file-box">
              <dt>첨부파일 1</dt>
              <dd>
                <span class="inp-file">
                  <button type="button" @click.prevent="selectFile1" ref="fileSearchBtn1" class="btn file-label"><span>파일 찾기</span></button>
                  <input type="file" name="compFile" ref="fileupload1" @change="onFileChange1" class="file-upload" tabindex="-1" />
                  <input type="text" readonly="readonly" class="inp-text file-name" ref="fileuploadTxt1" tabindex="-1">
                </span>
                <div class="file-list" v-if="uploadFileName1">
                  <ul>
                    <li>
                      <div class="file-info">
                        <a :href="uploadFileName1" target="_blank">{{uploadFileName1}}</a>
                        <button type="button" class="btn btn-delete" @click="removeUploadFile1"><span>삭제</span></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
            <dl class="file-box">
              <dt>첨부파일 2</dt>
              <dd>
                <span class="inp-file">
                  <button type="button" @click.prevent="selectFile2" ref="fileSearchBtn2" class="btn file-label"><span>파일 찾기</span></button>
                  <input type="file" name="compFile" ref="fileupload2" @change="onFileChange2" class="file-upload" tabindex="-1" />
                  <input type="text" readonly="readonly" class="inp-text file-name" ref="fileuploadTxt2" tabindex="-1">
                </span>
                <div class="file-list" v-if="uploadFileName2">
                  <ul>
                    <li>
                      <div class="file-info">
                        <a :href="uploadFileName2" target="_blank">{{uploadFileName2}}</a>
                        <button type="button" class="btn btn-delete" @click="removeUploadFile2"><span>삭제</span></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <p class="noti-txt">※ 첨부파일형식은 doc, ppt, xls, pdf, hwp, jpg, png 만 가능합니다.</p>
      </div>
      <div class="btn-box">
        <button class="btn btn-blue" type="button" v-on:click="popCst">신청하기</button>
        <div id="pop-cst" class="popup-wrap type02">
          <div class="popup-box cst">
            <div class="popup-title">상담신청완료</div>
            <div class="popup-content">
              <div class="info-box">
                <p class="tit">홍길동 고객님, <br>
                상담신청이 정상적으로 접수되었습니다.</p>
                <p class="txt">최대한 빠른 시간 안에 답변을 드리겠습니다. <br>감사합니다.</p>
              </div>
              <ul class="dot-list">
                <li>두산 로지피아 홈페이지를 이용해 주셔서 감사합니다.</li>
                <li>항상 고객님께 최선을 다하는 두산 로지피아가 되겠습니다.</li>
              </ul>
              <div class="btn-box">
                <button type="button" class="btn btn-navy">확인</button>
              </div>
            </div>
            <button type="button" class="btn-popup-close" v-on:click="popCstClose">팝업닫기</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
export default {
  name: 'ConsultAdd',
  metaInfo: { //seo 개선 
    title: '두산 로지피아의 고객센터 > 1:1 문의 > 상담신청',
    htmlAttrs: {
      lang: 'ko-KR',
      dir: 'ltr'
    },
    meta: [
        { name: 'description', content: '두산 로지피아의 고객센터 > 1:1 문의 > 상담신청 페이지입니다.', vmid: 'description' },
        { name: 'keywords', content: '두산 로지피아, 고객센터, 1:1 문의, 상담신청' },
      ]
  },
  components: {
    'common-nav': CommonNav
  },
  data () {
    return {
      pageTitle: '1:1 문의',
      uploadFileName1: '',
      targetFile1: '',
      uploadFileName2: '',
      targetFile2: ''
    }
  },
  methods: {
    selectFile1: function (e) {
      this.targetFile1 = this.$refs.fileupload1
      this.targetFile1.click()
    },
    onFileChange1: function (e) {
      let file = e.target.files[0]
      this.url = URL.createObjectURL(file)

      this.targetTxt1 = this.$refs.fileuploadTxt1

      this.targetTxt1.value = file.name
      this.uploadFileName1 = file.name
    },
    removeUploadFile1: function (e) {
      this.uploadFileName1 = ''
      this.targetTxt1.value = ''
    },
    selectFile2: function (e) {
      this.targetFile2 = this.$refs.fileupload2
      this.targetFile2.click()
    },
    onFileChange2: function (e) {
      let file2 = e.target.files[0]
      this.url2 = URL.createObjectURL(file2)

      this.targetTxt2 = this.$refs.fileuploadTxt2

      this.targetTxt2.value = file2.name
      this.uploadFileName2 = file2.name
    },
    removeUploadFile2: function (e) {
      this.uploadFileName2 = ''
      this.targetTxt2.value = ''
    },
    popCst: function () {
      var popupWrap = document.getElementById('pop-cst')
      event.target.classList.add('btn-pop-open')
      popupWrap.classList.add('on')
      document.querySelector('body').classList.add('popup-open')
      document.querySelector('.popup-open').style.top = '-' + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + 'px'
      document.querySelector('.popup-open').style.position = 'fixed'
    },
    popCstClose: function () {
      var popupWrap = document.getElementById('pop-cst')
      popupWrap.classList.remove('on')
      document.querySelector('.popup-open').style.removeProperty('position')
      window.scrollTo(0, Math.abs(parseInt(document.querySelector('.popup-open').style.top)))
      document.querySelector('.popup-open').style.removeProperty('top')
      document.querySelector('body').classList.remove('popup-open')
      document.querySelector('.btn-pop-open').focus()
      document.querySelector('.btn-pop-open').classList.remove('btn-pop-open')
    }
  }
}
</script>

<style>
</style>
