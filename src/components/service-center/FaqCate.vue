<template>
 <div>
    <div class="category-list-wrap phase2-pc phase2-tablet">
      <ul class="category-list">
        <li v-for="(faqcategory, index) in faqcategory" :key="index" class="category-item">
          <a href="javascript:void(0)" class="btn-faqcategory" @click="$emit('changeCategory',faqcategory.categoryname,faqcategory.no)"><span>{{faqcategory.categoryname}}</span></a>
        </li>
      </ul>
    </div>
    <div class="category-select phase2-mobile">
      <div class="lp-select">
          <select @change="onChange"  v-model="selected">
              <option v-for="(faqcategory, index) in faqcategory" :key="index" :value="faqcategory">{{faqcategory.categoryname}}</option>
          </select>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'FaqCate',
  props: {
    faqcategory: {}
  },data(){
    return{
      selected:""
    }
  },methods:{
    onChange:function(e){
     this.$emit('changeCategory',this.selected.categoryname,this.selected.no)
    }
  }
}
</script>