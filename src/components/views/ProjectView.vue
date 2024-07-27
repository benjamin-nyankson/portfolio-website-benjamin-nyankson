<template>
    <div class="mt-10">
        <h1 class="text-2xl pl-28 mb-10">PROJECTS</h1>
        <div class="flex gap-5 flex-wrap items-center justify-center">
            <div v-for="project in listOfProjects" :key="project.name">
                <ProjectCard :className="project.id === num ?'pulsate':''" :title="project.name" :imgUrl="project.img_url" :link="project.link" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from '../ProjectCard.vue';
import learn from "@/assets/e-lerning.png";
import youtube from "@/assets/youtube-clone.png"
import eCommerce from "@/assets/e-commerce.png"
import vueImg from "@/assets/vue-image.png"
import reactImg from "@/assets/react-png.png"

const listOfProjects = ref([
    { name: "E-learning site", id: 1, type: "Vue", img_url:learn, link: "https://e-learning-dashboard-31k8xgwp6-nyankson-benjamin.vercel.app" },
    { name: "Mini E-commerce site", id: 2, type: "vue", img_url:eCommerce, link: "https://e-commerce-app-vue.vercel.app/" },
    { name: "Youtube Clone", id: 3, type: "vue", img_url:youtube, link: "https://youtube-clone-k033hvxcs-nyankson-benjamin.vercel.app/", },
    { name: "Travelling App", id: 4, type: "vue", img_url:reactImg, link: "https://travelling-app-rho.vercel.app/" },
    // { name: "Form Authentication", id: 5, type: "vue", img_url:vueImg, link: "" },
    // { name: "Form Authentication", id: 6, type: "vue", img_url:vueImg, link: "" },
])

const num = ref(0)
  setInterval(()=>{
if(num.value ===listOfProjects.value?.length){
  num.value=0;
}
num.value+=1;
  },1000)
</script>

