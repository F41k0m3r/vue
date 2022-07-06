<template>
    <div>
      <h1>Страница с постами</h1>
      <my-input
          v-model="searchQuery"
          placeholder="Поиск"
      />
      <div class="app_btns">
        <my-btn  @click="showDialog">Создать пост</my-btn>
        <my-select
            v-model="selectedSort"
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
export default {
  components: {MyInput, PostList, PostForm},
  data() {
    return {
      posts: [
        {title:'aboba', body:'boba', id:1},
        {title:'boba', body:'aboba', id:2},
        {title:'qwe', body:'zxc', id:3}
      ],
      dialogVisible: false,
      selectedSort: '',
      searchQuery:'',
      sortOptions: [
        {value: 'title', name: 'По названию',},
        {value: 'body', name: 'По описанию',},
      ]
    }
  },
  methods: {
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
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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
