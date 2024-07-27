<template>
    <div>
            <div>
                <p>{{ skill?.name }}</p>
                <SliderComponent :value="skill?.value" />
            </div>

    </div>
</template>

<script setup lang="ts">
import SliderComponent from './SliderComponent.vue';
import type { PropType } from 'vue';

defineProps({
    skill: {
        type: Object as PropType<{ name: string, value: number }>
    }
})
</script>
