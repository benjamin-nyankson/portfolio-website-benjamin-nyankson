<template>
  <a :href="link" target="_blank">
    <div class="bg-white cursor-pointer border border-gray-200 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <component :is="image"/>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
        <!-- <p class="text-gray-600 mb-4">{{ project.description }}</p> -->
        <a :href="link" class="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
</a>
  </template>
  
  <script setup lang="ts">
  import { defineProps, type Component } from 'vue';
 defineProps<{
    title:string,
    image:Component
    link:string
  }>();
  </script>
  