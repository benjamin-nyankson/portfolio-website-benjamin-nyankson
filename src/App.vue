<script setup lang="ts">
import TopNavBar from "@/components/navbar/TopNavBar.vue";
import { RouterView, useRoute } from 'vue-router';
import AlertComponent from "./components/alert/AlertComponent.vue";
import { useAlertSystem } from "./stores/store";
import img from "@/assets/desktop-wallpaper-portfolio.jpg"
import { watch } from "vue";

const alert = useAlertSystem();
const route = useRoute()
watch(route,(val)=>{
  window.document.title = val.path.length>1 && (val.path.startsWith("/"))  ? "Benjamin Nyankson - " + val.path.replace("/","") : "Benjamin Nyankson"
  // window.document.title =   text
})
</script>

<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 bg-cover bg-center opacity-50 bg-image" :style="{backgroundImage:(`url(${img})`)}"></div>
    <div class="relative z-10 w-3/4 m-auto">
      <TopNavBar />
      <TransitionGroup name="list" tag="div">
        <AlertComponent v-if="alert.open"/>
      </TransitionGroup>
      <RouterView v-slot="{Component}">
        <Transition name="route" mode="out-in">
<component  :is="Component"/>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style>

.primary {
  color: #FD6F00;
}

.BG0{
  background-color: #0a192f;
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

.route-enter-from{
  opacity: 0.8;
  transform: translateX(100px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active{
  transition: all 0.3s ease-in ;
}
</style>
