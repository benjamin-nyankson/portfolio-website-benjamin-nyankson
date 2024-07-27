<template>
    <div class="
        flex
        items-center
        justify-center
        md:pt-14
        pt-5
        BG0
        pb-4
        rounded-lg
        mr-10
      ">
      <div class="flex flex-col items-center sm:gap-6 gap-3">
        <div class="flex justify-center sm:w-[500px] w-[300px]">
          <img class="" src="../assets/404.svg" alt="404 Page not found" />
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="N800 flex justify-center whitespace-nowrap">
            Page not found
          </h2>
          <p class="P200 N800 H800 text-center text-base flex flex-col px-5">
            <span>Oops!</span>
            <span>Seems like something went wrong...</span>
          </p>
        </div>
        <div class="mx-auto">
          <ButtonComponent text="Go back home" @submit="redirect(`/`)" title="Homepage" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import ButtonComponent from './buttons/ButtonComponent.vue';
  const redirect = (redirectRoute: string) =>
    window.location.href = redirectRoute;
  </script>
  