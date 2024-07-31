<template>
    <div class="mt-5">
        <p class="my-5 text-2xl font-bold">PROJECTS</p>
        <div class="flex flex-wrap items-center ">
            <div v-for="project in listOfProjects" :key="project.name">
                 <a :href="project.link">
                  <SkillsCard :skill="{name:project.name, value:project.id, img:project.img_url}" :className="project.id === num ?'pulsate':''"/>
                 </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import learn from "@/assets/e-lerning.png";
import youtube from "@/assets/youtube-clone.png"
import eCommerce from "@/assets/e-commerce.png"
import reactImg from "@/assets/react-png.png"
import timeline from "@/assets/timeline.png"
import ecom from "@/assets/e-com.png"
import SkillsCard from '../SkillsCard.vue';
import  useSetInterval  from '@/composables/useSetInterval';

const listOfProjects = ref([
    { name: "Project Time Line", id: 1, type: "vue", img_url:timeline, link: "https://time-line-livid.vercel.app/" },
    { name: "E-shop", id: 2, type: "vue", img_url:ecom, link: "https://e-com-three-tan.vercel.app/" },
    { name: "E-learning", id: 3, type: "Vue", img_url:learn, link: "https://e-learning-dashboard-31k8xgwp6-nyankson-benjamin.vercel.app" },
    { name: "Mini E-commerce", id: 4, type: "vue", img_url:eCommerce, link: "https://e-commerce-app-vue.vercel.app/" },
    { name: "Youtube Clone", id: 5, type: "vue", img_url:youtube, link: "https://youtube-three-delta.vercel.app", },
    { name: "Travelling App", id: 6, type: "vue", img_url:reactImg, link: "https://travelling-app-rho.vercel.app/" },

])

const {num} = useSetInterval(listOfProjects.value)

</script>

