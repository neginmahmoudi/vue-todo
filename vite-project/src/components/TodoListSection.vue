<template>
  <section class="todo-list">
    <h3>TODO LIST</h3>
    <div class="list" id="todo-list">
      <div
        v-for="todo in todos_asc"
        :key="todo.id"
        :class="`todo-item ${todo.done && 'done'}`"
      >
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span
            :class="`bubble ${
              todo.category == 'business' ? 'business' : 'personal'
            }`"
          ></span>
        </label>

        <div class="todo-content">
          <input type="text" v-model="todo.content" />
        </div>

        <div class="actions">
          <button class="delete" @click="removeTodo(todo)">Delete</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";

import { useTodoStore } from "../stores/TodoStore.js";

const todoStore = useTodoStore();

const todos_asc = computed(() =>
  todoStore.todos.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const removeTodo = (todo) => {
  todoStore.todos = todoStore.todos.filter((t) => t !== todo);
};

onMounted(() => {
  todoStore.todos = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>
