<template>
  <section class="greeting">
    <h2 class="title">
      What's up,
      <input type="text" id="name" placeholder="Name here" v-model="name" />
    </h2>
  </section>
</template>

<script setup>
import {
  onMounted,
  ref,
  watch,
} from 'vue';

const name = ref("");

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
});
</script>
