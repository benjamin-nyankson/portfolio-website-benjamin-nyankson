<script setup lang="ts">
import TopNavBar from "@/components/navbar/TopNavBar.vue"
import { RouterView } from 'vue-router';
import AlertComponent from "./components/alert/AlertComponent.vue";
import { useAlertSystem } from "./stores/store";
const alert = useAlertSystem()
</script>

<template>
  <div class="w-3/4 mt-10 m-auto">
    <TopNavBar />
    <TransitionGroup name="list" tag="div">

<AlertComponent v-if="alert.open"/>
</TransitionGroup>
    <RouterView/>
  </div>
</template>

<style scoped>
.primary {
  color: #FD6F00
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
