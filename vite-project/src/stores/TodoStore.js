import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state() {
    return {
      todos: [],
    };
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
});