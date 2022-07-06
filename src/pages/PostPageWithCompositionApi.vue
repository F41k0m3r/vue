<!--<template>-->
<!--    <div>-->
<!--      <h1>Страница с постами</h1>-->
<!--      <my-input-->
<!--          v-model="searchQuery"-->
<!--          placeholder="Поиск"-->
<!--      />-->
<!--      <div class="app_btns">-->
<!--        <my-select-->
<!--            v-model="selectedSort"-->
<!--            :options="sortOptions"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import PostList from "@/conponents/PostList";-->
<!--import PostForm from "@/conponents/PostForm";-->
<!--import MyInput from "@/conponents/Ui/MyInput";-->
<!--import {ref} from "vue";-->
<!--import useSort from "@/hooks/useSort";-->
<!--import useSortAndSearch from "@/hooks/useSortAndSearch";-->
<!--export default {-->
<!--  components: {MyInput, PostList, PostForm},-->
<!--  data() {-->
<!--    return {-->
<!--      posts:[-->
<!--        {title:'Js', body:'Js', id:1},-->
<!--        {title:'Node', body:'Node', id:2},-->
<!--        {title:'python', body:'python', id:3}],-->
<!--      sortOptions: [-->
<!--        {value: 'title', name: 'По названию',},-->
<!--        {value: 'body', name: 'По описанию',},-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  setup(props) {-->
<!--    const {selectedSort,sortedPosts} = useSort(this.posts)-->
<!--    const {searchQuery,sortedAndSearchedPosts} = useSortAndSearch(sortedPosts)-->
<!--    return{-->
<!--      sortedPosts,-->
<!--      selectedSort,-->
<!--      sortedAndSearchedPosts,-->
<!--      searchQuery-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.app_btns {-->
<!--  margin: 15px 0;-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--}-->

<!--</style>-->
