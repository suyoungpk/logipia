<template>
  <div class="compact-tabs m-compact">
    <div class="accordion-wrap">
      <ul class="accordion">
        <!-- <li class="accordion-item">
          <h3 class="tabs-view">
            <span class="question">E08/E10</span><button class="btn-open" @click="answer" title="열기"></button>
          </h3>
           <div class="answer">
             <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
            <div class="excavators-wrap">
              <div class="ext-content">
               <div class="imgbox m-imgbox">
                  <img src="../../assets/images/automation/bg-excavators02.png" alt="">
                   <button type="button" v-for="n in 5" :key="`A-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                    <div class="float-wrap">
                      <ul>
                        <li v-for="n in 5" :key="`B-${n}`" :class="'floatBox floatBox0'+n">
                          <div class="mask" @click="closeLayer">
                          <div class="exc-img"></div>
                         </div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </li> -->
        <li class="accordion-item">
          <h3 class="tabs-view">
            <span class="question">E20</span><button class="btn-open" @click="answer" title="열기"></button>
          </h3>
           <div class="answer">
             <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
            <div class="excavators-wrap">
              <div class="ext-content">
               <div class="imgbox e20 m-imgbox">
                  <img src="../../assets/images/automation/bg-excavators03.png" alt="">
                   <button type="button" v-for="n in 9" :key="`A-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                    <div class="float-wrap">
                      <ul>
                        <li v-for="n in 9" :key="`B-${n}`" :class="'floatBox floatBox0'+n">
                          <div class="mask" @click="closeLayer">
                          <div class="exc-img"></div>
                         </div>
                        </li>
                      </ul>
                    </div>
                </div>
                
              </div>

            </div>
          </div>
          
        </li>
        <li class="accordion-item">
          <h3 class="tabs-view">
            <span class="question">E35</span><button class="btn-open" v-on:click="answer" title="열기"></button>
          </h3>
           <div class="answer">
             <p class="alert">번호를 누르면 세부 설명을 볼 수 있습니다.</p>
            <div class="excavators-wrap">
              <div class="ext-content">
               <div class="imgbox e35 m-imgbox">
                  <img src="../../assets/images/automation/bg-excavators04.png" alt="">
                   <button type="button" v-for="n in 9" :key="`A-${n}`" :class="'btn btn2-dot0'+n" @click="openLayer">{{n}}</button>
                    <div class="float-wrap">
                      <ul>
                        <li v-for="n in 9" :key="`B-${n}`" :class="'floatBox floatBox0'+n">
                          <div class="mask" @click="closeLayer">
                          <div class="exc-img"></div>
                         </div>
                        </li>
                      </ul>
                    </div>
                </div>
                
              </div>

            </div>
          </div>
          
        </li>
      </ul>
  </div>
</div>

</template>

<script>
export default {
  name: 'CompactList',
  methods: {
    answer: function (event) {
      if (event.target.parentElement.parentElement.classList.contains('active')) {
        event.target.parentElement.parentElement.classList.remove('active')
        event.target.title = '보기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 0 + 'vh'
      } else {
        this.closeAnswer()
        event.target.parentElement.parentElement.classList.add('active')
        event.target.title = '닫기'
        event.target.parentElement.parentElement.querySelector('.answer').style.maxHeight = 1000 + 'vh'
      }
    },
    closeAnswer: function () {
      var i
      for (i = 0; i < document.getElementsByClassName('accordion-item').length; i++) {
        document.getElementsByClassName('accordion-item')[i].classList.remove('active')
        document.getElementsByClassName('btn-open')[i].title = '열기'
        document.getElementsByClassName('answer')[i].style.maxHeight = 0 + 'vh'
      }
    },
    FirstAnswerOpen: function () {
      document.getElementsByClassName('accordion-item')[0].classList.add('active')
      document.getElementsByClassName('accordion-item')[0].getElementsByClassName('btn-open')[0].title = '닫기'
      document.getElementsByClassName('accordion-item')[0].getElementsByClassName('answer')[0].style.maxHeight = 1000 + 'vh'
    },
    openLayer:function(e){
      var keyNum = e.target.innerText;
      var parent = e.target.parentElement;
       parent.querySelector('.floatBox0'+keyNum).style.display="block";
    },
    closeLayer:function(e){
      var parent = e.target.parentElement;
       parent.style.display="none";
    }
  },
  mounted: function () {
    this.FirstAnswerOpen()
    window.addEventListener("click",function(e){
      if(!document.querySelector('.m-compact').querySelector('.excavators-wrap').contains(e.target)){
        var list= document.querySelector('.m-compact').querySelectorAll('.ext-float>ul>li');
        for(var i =0;i<list.length;i++)
           list[i].style.display="none"
      }
    })
  }
}
</script>