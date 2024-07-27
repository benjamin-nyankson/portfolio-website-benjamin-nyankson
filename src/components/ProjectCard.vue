<template>
    <div :class="className ? 'scale-105' :''" class="bg-[#0a192f] cursor-pointer h-72 w-[364px] overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <img :src="imgUrl" alt="" class="w-full bg-white h-48">
      <div class="p-4 text-[#ffffff]">
        <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
        <div class="flex justify-end">
          <a :href="link" class="bg-[#ffffff] shadow-xl rounded-md p-2 text-[#0a192f]">View Project &gt;</a>

        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, } from 'vue';
 defineProps<{
    title:string,
    link:string,
    imgUrl:string
    className:string
  }>();


  </script>
  