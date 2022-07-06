<template>
  <div >
    <form @submit.prevent>
      <h4><strong>Создайте свой пост!</strong></h4>
      <my-input
          v-focus
          v-model="post.title"
          type="text"
          placeholder="Название"
      />
      <my-input
          v-model="post.body"
          class="input"
          type="text"
          placeholder="Описание"
      />
      <my-btn
          style="align-self: flex-end"
          @click="add"
          class="addBtn">Добавить!</my-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return{
      post:{
        title:'',
        body:''
      }
    }
  },
  methods:{
    add() {
        this.post.id = Date.now()
        this.title=''
        this.body=''
        this.$emit('create', this.post)
        this.post = {
          title:'',
          body:''
        }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
