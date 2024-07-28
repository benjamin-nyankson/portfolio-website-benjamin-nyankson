<script setup lang="ts">
import TopNavBar from "@/components/navbar/TopNavBar.vue";
import { RouterView } from 'vue-router';
import AlertComponent from "./components/alert/AlertComponent.vue";
import { useAlertSystem } from "./stores/store";
import img from "@/assets/desktop-wallpaper-portfolio.jpg"

const alert = useAlertSystem();
</script>

<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 bg-cover bg-center opacity-50 bg-image" :style="{backgroundImage:(`url(${img})`)}"></div>
    <div class="relative z-10 w-3/4 m-auto">
      <TopNavBar />
      <TransitionGroup name="list" tag="div">
        <AlertComponent v-if="alert.open"/>
      </TransitionGroup>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('/desktop-wallpaper-portfolio.JPG');
}

.primary {
  color: #FD6F00;
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
