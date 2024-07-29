<template>
    <div>
        <div
            class="flex  items-center flex-col w-52 h-52 BG0 cursor-pointer border p-2 shadow-lg shadow-[white] transform transition duration-300 hover:scale-90 hover:z-[10000000] " :class="className ? 'scale-95' :''">
            <img :src="skill?.img" alt="" class="w-32 h-28">
            <p class="text-xl mt-5 text uppercase">{{ skill?.name }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    skill: {
        type: Object as PropType<{ name: string, value: number, img: string }>
    },
    className:{
        type:String,
        default:""
    }
})
</script>
