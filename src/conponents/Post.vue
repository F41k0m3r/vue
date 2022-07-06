<template>
  <div class="post">
    <div class="post-item">
      <div><strong>{{post.title}}</strong></div>
      <div>{{post.body}}</div>
    </div>
    <div class="post-btns">
      <my-btn @click="$emit('remove', post)" >Удалить</my-btn>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      type:Object,
      required:true,
    }

  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid blue;
  background: white;
  margin-top: 15px;
  display: flex;
  align-items:center;
  justify-content: space-between;
}
.post-item{
  display: flex;
  flex-direction: column;
}
</style>
