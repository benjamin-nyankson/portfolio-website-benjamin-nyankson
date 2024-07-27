<template>
    <div class="mt-32">    
        <GridComponent>
            <div v-for="project in listOfProjects" :key="project.name">
                <ProjectCard :title="project.name" :image="project.type==='react'? ReactImage:VueImage" :link="project.link" />
            </div>
        </GridComponent>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GridComponent from '../GridComponent.vue';
import ProjectCard from '../ProjectCard.vue';
import ReactImage from '../ReactImage.vue';
import VueImage from '../VueImage.vue';

const listOfProjects = ref([
    { name: "Form Authentication", id: 1, type: "Vue", link: "https://e-learning-dashboard-31k8xgwp6-nyankson-benjamin.vercel.app" },
    { name: "Form Authentication", id: 1, type: "vue", link: "" },
    { name: "Form Authentication", id: 1, type: "vue", link: "" },
    { name: "Form Authentication", id: 1, type: "vue", link: "" },
    { name: "Form Authentication", id: 1, type: "vue", link: "" },
    { name: "Form Authentication", id: 1, type: "vue", link: "" },
])
</script>

<style scoped></style>