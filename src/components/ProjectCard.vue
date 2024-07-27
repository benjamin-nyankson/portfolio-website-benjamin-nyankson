<template>
    <div class="bg-white cursor-pointer border h-72 w-[210px] border-gray-200 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <img :src="imgUrl" alt="" class="w-full h-48">
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
        <a :href="link" class="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, } from 'vue';
 defineProps<{
    title:string,
    link:string,
    imgUrl:string
  }>();
  </script>
  