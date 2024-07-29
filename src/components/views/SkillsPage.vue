<template>
    <div class="">
   <section class="mt-5">
    <p class="mt-5 text-2xl font-bold">SKILLS</p>
            <div class="flex flex-wrap items-center mt-5">
                <div v-for="(skill, idx) in expertise" class="">
                    <SkillsCard :skill="skill" :className="(idx+1) === num ?'pulsate':''"/>
                </div>
            </div>
   </section>
           
    </div>
</template>

<script setup lang="ts">
import { expertise } from "@/constant/skills"
import SkillsCard from "../SkillsCard.vue";
import useSetInterval from "@/composables/useSetInterval";
const {num} = useSetInterval(expertise)

</script>

