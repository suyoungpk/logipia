<template>
  <div class="cmt-box">
    <form action="">
      <ul class="cmt-list">
        <!-- 본인일 경우 -->
        <li>
          <div class="cmt-tit">
            <span class="userId">김본인</span>
            <span class="date">2020.04.20</span>
            <button type="button" class="btn btn-cmt-menu" @click="openMenu">댓글메뉴</button>
            <ul class="cmt-menu">
              <li><button type="button" class="btn" @click="openEditbox">수정</button></li>
              <li><button type="button" class="btn" @blur="closeMenu">삭제</button></li>
            </ul>
          </div>
          <div class="cmt-con">
            제품 보험이 들어있나요?
          </div>
          <!-- <div class="tbl-box cmt-edit">
              <textarea name="" id="" title="내 답글 수정">제품 보험이 들어있나요?</textarea>
              <button class="btn btn-blue btn-reg">수정</button>
          </div> -->
          <ul class="cmt-reply-list">
            <li>
              <div class="cmt-tit">
                <span class="userId">판매자</span>
                <span class="date">2020.04.20</span>
                <a href="javascript:void(0)" @click="openReply">답글</a>
              </div>
              <div class="cmt-con">
                보험은 들었으나 5월 만료예정입니다.
              </div>
            </li>
            <li>
              <div class="cmt-tit">
                <span class="userId">김본인</span>
                <span class="date">2020.04.20</span>
                <button type="button" class="btn btn-cmt-menu" @click="openMenu">댓글메뉴</button>
                <ul class="cmt-menu">
                  <li><button type="button" class="btn" @click="openEditbox">수정</button></li>
                  <li><button type="button" class="btn" @blur="closeMenu">삭제</button></li>
                </ul>
              </div>
              <div class="cmt-con">
                아 그렇군요
              </div>
            </li>
            <li>
              <div class="cmt-tit">
                <span class="userId">판매자</span>
                <span class="date">2020.04.20</span>
                <a href="javascript:void(0)" @click="openReply">답글</a>
              </div>
              <div class="cmt-con">
                연락주세요^^
              </div>
            </li>
          </ul>
          <div class="tbl-box cmt-reply">
              <textarea name="" id="" title="위 댓글에 대한 답글"></textarea>
              <button class="btn btn-blue btn-reg">등록</button>
          </div>
        </li>
        <!--// 본인일 경우 -->
        <!-- 본인이 아닐 경우  -->
        <li>
          <div class="cmt-tit">
            <span class="userId">김철수</span>
            <span class="date">2020.04.20</span>
            <a href="javascript:void()" @click="openReply">답글</a>
          </div>
          <div class="cmt-con">
            제품 보험이 들어있나요?
          </div>
          <ul class="cmt-reply-list">
            <li>
              <div class="cmt-tit">
                <span class="userId">판매자</span>
                <span class="date">2020.04.20</span>
                <a href="javascript:void()" @click="openReply">답글</a>
              </div>
              <div class="cmt-con">
                보험은 들었으나 5월 만료예정입니다.
              </div>
            </li>
          </ul>
          <div class="tbl-box cmt-reply">
              <textarea name="" id="" title="위 댓글에 대한 답글"></textarea>
              <button class="btn btn-blue btn-reg">등록</button>
          </div>
        </li>
      </ul>
      <div class="tbl-box">
        <textarea name="" id="cmt-txt-box" title="제품에 대한 댓글" v-model="textareaVal" @focus="placeHoldFocus()" @blur="placeHoldBlur()"></textarea>
        <label for="cmt-txt-box" v-show="state" >{{placeHolder}}</label>
        <button class="btn btn-blue btn-reg">등록</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props:{
    placeHolder:String
  },
  data(){
    return {
      state:true,
      textareaVal:""
    }
  },
  methods:{
    openReply:function(e){
      var boxes = Array.from(document.querySelector(".cmt-list").querySelectorAll(".cmt-reply"));
      var t = e.target.parentElement.parentElement.querySelector(".cmt-reply")|| 
              e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".cmt-reply");

      if(window.getComputedStyle(t).display == "none"){
        t.style.display="block";
        t.querySelector("textarea").focus();
        boxes.filter(b=>b!==t).forEach(obj => {
          obj.style.display="none";
        });
      }else{
         t.style.display="none";
      }
    },
    openMenu:function(e){
      if(e.target.classList.contains("on")){
         e.target.classList.remove("on")
      }else{
        e.target.classList.add("on")
      }
    },
    closeMenu:function(e){
        e.target.parentElement.parentElement.previousElementSibling.classList.remove("on")
    },
    placeHoldFocus:function(){
      this.state=false;
    },
    placeHoldBlur:function(){
      (this.textareaVal=="")?this.state=true:this.state=false;
    },
    openEditbox:function(e){ // 수정 박스 동적 생성
      this.closeMenu(e)
      var parent = e.target.parentElement.parentElement.parentElement.parentElement;
      var conbox = parent.querySelector(".cmt-con");  
      if(parent.contains(document.querySelector(".cmt-edit"))){
        document.querySelector(".cmt-edit").remove();
        conbox.style.display="block";
        return false;
      }
      
      var txt = conbox.innerText;
      // template
       var temp= document.createElement("div")
       temp.className="tbl-box cmt-edit";

      var textBox = document.createElement("textarea") 
      textBox.innerText=txt

      var cancelBtn = document.createElement("button")
      cancelBtn.type="button"
      cancelBtn.className="btn btn-cancel"
      cancelBtn.onclick=this.closeEditbox
      cancelBtn.innerText="취소"

      var editBtn = document.createElement("button")
      editBtn.type="button"
      editBtn.className="btn btn-blue btn-reg"
      editBtn.onclick=this.editExe
      editBtn.innerText="수정"

      temp.appendChild(cancelBtn);
      temp.appendChild(textBox);
      temp.appendChild(editBtn);
       
      parent.insertBefore(temp,conbox);
      conbox.style.display="none";
      textBox.focus();

    },
    closeEditbox:function(e){
        var parent = e.target.parentElement.parentElement;
        var conBox =parent.querySelector(".cmt-con");
        var cmtBox = parent.querySelector('.cmt-edit');
        conBox.style.display="block";
        cmtBox.remove();
    },
    editExe:function(){
      alert('수정!');
    },
  }
}
</script>