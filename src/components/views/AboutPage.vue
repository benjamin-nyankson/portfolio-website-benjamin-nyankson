<template>
    <div>
        <div class="flex gap-10 mt-24 ">
        <img src="../../assets//images//profile_img.jpeg" alt="" class=" rounded-lg border-4 shadow-2xl border-[#ffffff] sm:hidden md:hidden lg:block w-[50%] h-[50%]">
        <div class=" pr-5">
            <p class="text-8xl font-bold whitespace-nowrap underline">About Me</p>
            <p class="mt-8 text-2xl">I'm Benjamin Nyankson, a passionate frontend developer with a strong foundation in
                HTML, CSS,
                and
                JavaScript. With a focus on building seamless user interfaces and delightful user experiences, I've honed my
                skills in popular frontend libraries and frameworks such as React.js and Vue.js.</p>
            
              <SocialMedia/> 
        </div>

    </div>
    <p class="mt-5 text-2xl font-bold">Expertise</p>
            <div class="rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                <div v-for="skill in expertise" class="mt-5">
                    <SkillsCard :skill="skill"/>
                </div>
            </div>
           
            <p class="mt-5 text-2xl font-bold">Frameworks & Libraries</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                <div v-for="skill in frameWorks" class="mt-5">
                    <p>{{ skill.name }}</p>
                    <SliderComponent :value="skill.value" />
                </div>
            </div>
            <p class="mt-5 text-2xl font-bold">Frameworks & Libraries</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                <div v-for="skill in others" class="mt-5">
                    <p>{{ skill.name }}</p>
                    <SliderComponent :value="skill.value" />
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import { expertise,frameWorks,others } from "@/constant/skills"
import SliderComponent from "../SliderComponent.vue";
import SkillsCard from "../SkillsCard.vue";
import SocialMedia from "../SocialMedia.vue";

</script>

