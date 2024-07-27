<template>
    <div>
        <div class="flex items-center gap-5">
            <input type="range" id="volume" name="volume" min="0" max="100" class="w-full slider" :value="value" disabled />
            <p class="whitespace-nowrap">{{ value }} %</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    value: Number
})
</script>

<style scoped>
input[type="range"]:disabled {
    -webkit-appearance: none;
    appearance: none;
    background: #FD6F00;
    cursor: pointer;
    /* width: 15rem; */
    border-radius: 10px;
}


</style>