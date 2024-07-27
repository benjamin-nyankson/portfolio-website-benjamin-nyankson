<template>
     <div class="flex items-center gap-2 mt-3">
                    <div v-for="link in links" :key="link.link">
                        <a :href="link.link">
        <img :src="link.logo" alt="" class="w-10 h-10">
    </a>
                </div>
        </div>
</template>

<script setup lang="ts">
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png"

const links = [{
    name:"Facebook", link:"https://web.facebook.com/benjamin.nyankson.7/", logo:facebook,
},
{
    name:"LinkedI", link:"https://www.linkedin.com/in/benjamin-nyankson-47806799/", logo:linkedin,
}
]
</script>

<style scoped>

</style>