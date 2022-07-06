<template>
  <my-navbar></my-navbar>
  <div id="div" class="all">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.all {
  padding: 20px;
  border-radius: 8px;
  background: none;
  background-size: cover !important;
}
#div {
  border-top-left-radius:0 ;
  border-top-right-radius:0 ;
}
</style>
