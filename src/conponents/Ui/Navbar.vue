<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="nav-btns">
      <my-btn @click="$router.push('/')" style="border-radius: 8px">Главная страница</my-btn>
      <my-btn @click="$router.push('/posts')" style="margin-left: 20px;border-radius: 8px" >Посты (Without Vuex)</my-btn>
      <my-btn @click="$router.push('/about')" style="margin-left: 20px; border-radius: 8px" >О сайте</my-btn>
      <my-btn @click="$router.push('/store')" style="margin-left: 20px; border-radius: 8px" >Vuex</my-btn>
<!--      <my-btn @click="$router.push('/composition')" style="margin-left: 20px; border-radius: 8px" >Composition Api</my-btn>-->
    </div>
  </div>
</template>

<script>
import MyBtn from "@/conponents/Ui/MyBtn";
export default {
  name:'MyNavbar',
  components: {MyBtn},
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background: lightblue;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.nav-btns{
  margin-left: auto;
}
</style>
