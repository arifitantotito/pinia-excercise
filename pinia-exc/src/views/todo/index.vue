<template>
  <div class="box">
    <h1 class="text-center">What Do You Want To Do?</h1>
    <input class="input fw-bold" id="inputTodo" placeholder="Write Down" autocomplete="off" type="text" v-model="currentTask"
        @keyup.enter="submitTodo" />

    <button class="btn btn-dark" @click="submitTodo">O</button>
    
    <div class="box2 mt-4">
      <div class="boxx card my-2" v-for="(todo, index) in todos" :key="index">
        <div class=" card-body row">
          <div class="col-10 my-auto text-dark fw-bold text-align-start">
            {{ todo.task }}
          </div>
            <div class="col-2 mt-auto">
              <button @click="removeTodo(index)" class="btn2 btn-dark"> DONE </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from '@vue/reactivity';
    import { storeToRefs } from 'pinia';
    import { useTodoStore } from '../../stores/todo';
    const todoStore = useTodoStore();
    const { submitTodo, removeTodo } = todoStore;
    const { todos, currentTask } = storeToRefs(todoStore);
    const filter = ref('all');
    const todoList = computed(() => filter.value === 'completed' ? todoStore.completed : filter.value === 'active' ? todoStore.active : todos.value)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  h1 {
    font-family: 'Lobster', cursive;
  }
  .box {
    background: transparent;
    max-width: 400px;
    width: 100%;
    margin: 120px auto;
    padding: 25px;
    border-style: inset ;
    border-color: black;
    border-width: 4.5px;
    border-radius: 20px;
    box-shadow: 0px 10px 15px rgba(22, 16, 16, 0.1);
  }
  .input {
    margin-left: 11%;
    padding: 2%;
    margin-top: 3%;
    border-radius: 20px;
    border-color: black;
    background: transparent;
    font-family: monospace;
  }
  .btn {
    margin-left: 78.5%;
    margin-top: -19.5%;
    margin-bottom: 1%;
    background: transparent;
    border-radius: 100%;
    padding-top: 1%;
    padding-bottom: 1px;
    font-size: 22px;
  }
  .btn:hover {
    background-color: rgb(187, 142, 20);
    color: transparent;
  }
  .box2 {
    margin-left: 11%;
    padding: 1%;
    margin-top: 1%;
    border-radius: 20px;
    border-color: black;
    background: transparent;
  }
  .boxx {
    background-color: rgb(255, 231, 231);
    border-radius: 40px;
    margin-left: -15%;
    margin-right: -1%;
    padding: 1%;
    margin-top: 1%;
    border-radius: 40px;
    border-color: black;
    background: rgb(190, 207, 192);
    font-family: monospace;
    
  }
  .btn2 {
    background: transparent;
    border-radius: 40%;
    font-size: 79%;
    color: transparent;
    border-width: 2px;
  }
  .boxx:hover .btn2 {
    display: block;
     margin-left: -15%;
    margin-right: -1%;
    padding: 1%;
    margin-top: 1%;
    border-radius: 40px;
  }
  .boxx .btn2 {
    display: none;
  }
  .btn2:hover {
    background-color: rgb(220, 50, 20);
    display: none;
  }
</style>