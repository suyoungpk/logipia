<template>
  <section id="lp-section" class="lp-sub login popup">
    <common-nav nowMenu="login"></common-nav>
    <div class="tit-box">
      <h2>{{pageTitle}}</h2>
      <span>제품정보 테스트.</span>
    </div>
    <div class="sub-wrap">
      <p class="m-txt-tip">제품정보 테스트 모바일에서 노출되는 텍스트.</p>
      <!-- <div class="product-info">
      </div> -->
      <!-- 에디터 관련 코드 -->
      <viewer :value="editorText"/>
      <!-- //에디터 관련 코드 -->
    </div>
    <button class="btn prev" type="button">이전 페이지 이동</button>
  </section>
</template>

<script>
import CommonNav from '@/components/common/Nav'
import testData from '@/components/test/testData.json'
import 'tui-editor/dist/tui-editor-contents.css'
import 'highlight.js/styles/github.css'
import { Viewer } from '@toast-ui/vue-editor'

export default {
  name: 'Test',
  components: {
    'common-nav': CommonNav,
    'viewer': Viewer
  },
  data () {
    return {
      pageTitle: '제품정보테스트',
      // testData: {},
      editorText: testData
    }
  },
  created: function () {
    // this.testData = testData
    // console.log(testData)
  }
  // ,
  // mounted () {
  //   var dl = document.querySelector('.product-info')
  //   dl.innerHTML = testData
  // }
}
</script>

<style>
.tui-editor-contents {
  font-size: 13px;
}
.tui-editor-contents h1 {
    font-size: 1.6rem;
    line-height: 28px;
    border-bottom: 3px double #999;
    margin: 52px 0 15px 0;
    padding-bottom: 7px;
    color: #000;
}

.tui-editor-contents h2 {
    font-size: 1.3rem;
    line-height: 23px;
    border-bottom: 1px solid #dbdbdb;
    margin: 30px 0 13px 0;
    padding-bottom: 7px;
    color: #333;
}

.tui-editor-contents h3,
.tui-editor-contents h4 {
    font-size: 1.2rem;
    line-height: 18px;
    margin: 20px 0 2px;
    color: #333;
}

.tui-editor-contents h5,
.tui-editor-contents h6 {
    font-size: 1rem;
    line-height: 17px;
    margin: 10px 0 -4px;
    color: #333;
}

.tui-editor-contents blockquote {
    margin: 15px 0;
}

.tui-editor-contents blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
}

.tui-editor-contents blockquote > :first-child {
    margin-top: 0;
}

.tui-editor-contents  blockquote > :last-child {
    margin-bottom: 0;
}

.tui-editor-contents pre,
.tui-editor-contents code {
    font-family: Consolas, Courier, "Apple SD 산돌고딕 Neo", -apple-system, "Lucida Grande", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", "Segoe UI", "돋움", dotum, sans-serif;
    border: 0;
    border-radius: 0;
}

.tui-editor-contents pre {
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #f5f7f8;
}

.tui-editor-contents code {
    color: #c1788b;
    padding: 4px 4px 2px 0;
    letter-spacing: -0.3px;
}

.tui-editor-contents pre code {
    padding: 0;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
}

.tui-editor-contents pre.addon {
    border: 1px solid #e8ebed;
    background-color: #fff;
}

.tui-editor-contents img {
    margin: 4px 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    max-width: 100%;
}

.tui-editor-contents table {
    margin: 2px 0 14px;
    color: #555;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
}

.tui-editor-contents table th,
.tui-editor-contents table td {
    height: 32px;
    padding: 5px 14px 5px 12px;
}

.tui-editor-contents table td {
    border: 1px solid #eaeaea;
}

.tui-editor-contents table th {
    border: 1px solid #72777b;
    border-top: 0;
    background-color: #7b8184;
    font-weight: 300;
    color: #fff;
    padding-top: 6px;
}

.tui-editor-contents ul,
.tui-editor-contents menu,
.tui-editor-contents ol,
.tui-editor-contents dir {
    display: block;
    list-style-type: disc;
    padding-left: 17px;
    margin: 6px 0 10px;
    color: #555;
}

.tui-editor-contents ol {
    list-style-type: decimal;
}

.tui-editor-contents ul ul,
.tui-editor-contents ul ol,
.tui-editor-contents ol ol,
.tui-editor-contents ol ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.tui-editor-contents ul li,
.tui-editor-contents ol li {
    position: relative;
}

.tui-editor-contents ul p, ol p {
    margin: 0;
}

.tui-editor-contents ul li.task-list-item:before,
.tui-editor-contents ol li.task-list-item:before,
.tui-editor-contents pre ul li:before {
    content: "";
}

.tui-editor-contents hr {
    border-top: 1px solid #eee;
    margin: 16px 0;
}

.tui-editor-contents a {
    text-decoration: underline;
    color: #5286bc;
}

.tui-editor-contents a:hover {
    color: #007cff;
}

.tui-editor-contents {
    font-size: 13px;
    margin: 0;
    padding: 0;
}

.tui-editor-contents .task-list-item {
    border: 0;
    list-style: none;
    padding-left: 22px;
    margin-left: -22px;
    min-height: 20px;
}

.tui-editor-contents .task-list-item:before {
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center;
    content: "";
    height: 18px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 1px;
    cursor: pointer;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADdJREFUKBVjvHv37n8GMgALSI+SkhJJWu/du8fARJIOJMWjGpECA505GjjoIYLEB6dVUNojFQAA/1MJUFWet/4AAAAASUVORK5CYII=');
}

.tui-editor-contents .task-list-item.checked:before {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAMpJREFUKBVjjJ/64D8DGYCJDD1gLbTVyM3OxJDiJMzAxcYIdyALnIWDAdJU7i/OICfCxsDMxMgwc88bwk5F1vTs/W+GFUffwY2H+1FBlI2hLliCQYCbGSyJrqlzwwuGj9//YWoMtRBgUBJnZ6gMEGeQFWaFOw9kE7omkG5GWDyCPF7mJ86gIMbO8P//fwZGRkYGXJpAGuFO/fbrP0PXppcMD179JKgJRSOIA9N8/NZXrM4DqYEBjOgAaYYFOUwRNhruVGyS+MTI1ggAx8NTGcUtFVQAAAAASUVORK5CYII=');
}

.tui-editor-contents .task-list-item input[type='checkbox'],
.tui-editor-contents .task-list-item .task-list-item-checkbox {
    margin-left: -17px;
    margin-right: 3.8px;
    margin-top: 3px;
}

.tui-editor-contents-placeholder:before {
    content: attr(data-placeholder);
    color:grey;
    line-height: 160%;
    position: absolute;
}
</style>
