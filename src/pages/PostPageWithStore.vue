<template>
    <div>
      <h1>Страница с постами</h1>
      <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск"
      />
      <div class="app_btns">
        <my-btn  @click="showDialog">Создать пост</my-btn>
        <my-select
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
        />
      </div>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form  @create="add"/>
    </my-dialog>
    <post-list @remove="remove" :posts="sortedAndSearchedPosts"/>
</template>

<script>
import PostList from "@/conponents/PostList";
import PostForm from "@/conponents/PostForm";
import MyInput from "@/conponents/Ui/MyInput";
import MyBtn from "@/conponents/Ui/MyBtn";
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  components: {MyBtn, MyInput, PostList, PostForm},
  data() {
    return {
      dialogVisible:false
    }
  },
  methods: {
    ...mapMutations({
      setSearchQuery:'post/setSearchQuery',
      setSelectedSort:'post/setSelectedSort'
    }),
    add(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    remove(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  computed:{
      ...mapGetters({
        sortedPosts:'post/sortedPosts',
        sortedAndSearchedPosts:'post/sortedAndSearchedPosts'
      }),
      ...mapState({
        posts: state => state.post.posts,
        selectedSort: state => state.post.selectedSort,
        searchQuery:state => state.post.searchQuery,
        sortOptions:state => state.post.sortOptions
      }),
    }
}
</script>

<style>
.app_btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>
