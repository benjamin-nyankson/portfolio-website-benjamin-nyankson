<template>
    <div class="">
        <div class="flex gap-10 mt-10 ">
            <div class="2xs:hidden xs:hidden sm:hidden md:hidden lg:flex">
                <img src="../../assets//images//profile_img.jpeg" alt=""
                class="mt-28 rounded-lg border-4 shadow-2xl border-[#ffffff] h-[50%]">
            </div>
            <div class=" pr-5">
                <h4 class="lg:text-8xl sm:text-3xl md:text-3xl font-bold whitespace-nowrap">About Me</h4>

                <p class="mt-2 text-lg" v-for="item in about.first">{{ item.content }}</p>

                <SocialMedia />
            </div>
        </div>

        <section class="mt-10">
            <p class="mt-2 text-lg" v-for="item in about.second">{{ item.content }}</p>

            <p class="text-md primary py-2 my-5 bg-white px-2 rounded-md">Here are a few key aspects of my professional
                approach:</p>

            <p v-for="item in approaches" class="mt-2 text-lg">
                <span class="primary text-md"> {{ item.title }} </span>
                <span> &nbsp;{{ item.content }}</span>
            </p>

            <p class="text-md mt-3" v-for="item in extras">{{ item }}</p>
        </section>
    </div>

</template>

<script setup lang="ts">
import SocialMedia from "../SocialMedia.vue";
import { extras, approaches, about } from "@/constant/about";

</script>
