<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list">
      <post
          :key="post.id"
          :post="post"
          @remove="($emit('remove', post))"
          v-for="post in posts "/>
    </transition-group>
  </div>
  <h2 v-else style="color: darkblue; text-align: center">
    <strong>Посты не найдены!</strong>
  </h2>
</template>

<script>
import Post from "@/conponents/Post";
export default {
  components: {
    Post
  },
  props:{
    posts:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
.post-list-move {
  transition: transform 0.3s;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-active, .post-list-leave-active {
  transition: all 0.3s;
}
.post-list-enter, .post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}
</style>
