<template>
  <div class="moreview-box">
    <button type="button" class="btn-moreview" @click="$emit('increment')">더보기 (<span class='viewnum'>{{limit}}</span>/<span class='totalnum'>{{totalNum}}</span>)</button>
  </div>
</template>

<script>
export default {
  name: 'MoreView',
  props: {
    limit: Number,
    totalNum: Number
  }
}
</script>