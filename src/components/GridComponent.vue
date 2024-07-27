<template>
    <div class="grid grid-cols-1 gap-3 w-full" :class="breakPoints">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    breakPoints: {
        type: String,
        default:"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    }
})
</script>

<style scoped></style>