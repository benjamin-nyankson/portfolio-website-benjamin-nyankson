<template>
    <button
      type="button"
      @click.prevent="emit('close')"
      class="
        text-gray-400
        bg-transparent
        hover:bg-gray-200 hover:text-gray-900
        rounded-lg
        text-sm
        ml-auto
        inline-flex
        items-center
        dark:hover:bg-gray-600 dark:hover:text-white
      "
    >
      <img src="../../assets/close.svg" alt="close-circle-icon" />
    </button>
  </template>
  <script setup lang="ts">
  const emit = defineEmits(["close"]);
  </script>
  