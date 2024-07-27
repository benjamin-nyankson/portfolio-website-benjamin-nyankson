<template>
    <div class="
        max-w-[300px]
        rounded-lg
        z-[5000]
        block
        right-10
        top-10
        border-[1px]
        !w-1/5
        fixed
        SPC-MT-100
        p-3
      " :class="severity === 'error'
        ? 'bg-[#fdf4f4] border-[#d14342]'
        : severity === 'success' ? 'bg-[#e0ffe3] border-[#008120]' : 'bg-[#F4F6FA] border-[#474D66]'
        " data-cy="alertComponent" >
        <div class="flex justify-between">
            <div class="flex">
                <div class="pt-1 pr-2">
                    <ErrorIcon v-if="severity === 'error'" />
                    <SuccessIcon v-else-if="severity === 'success'" />
                    <InfoIcon v-else />
                </div>
                <p class="capitalize" :class="severity === 'error'
                    ? 'text-[#A73636]'
                    : severity === 'success' ? 'text-[#16a700]' : 'text-[#474D66]'
                    " data-cy="Messageseverity">
                    {{ severity }}
                </p>
            </div>
            <CloseButton @close="closeAlert" />
        </div>
        <div>
            <p class="text-slate-600" data-cy="MessageBody">
                {{ message }}
            </p>
        </div>
        <!-- Progress bar -->
        <!-- remove the hidden class to show progress bar -->
        <div class="w-full bg-gray-200 h-1 mt-2 hidden">
            <div :style="{ width: progressWidth + '%' }" :class="severity === 'error'
                ? 'bg-[#A73636]'
                : severity === 'success' ? 'bg-[#16a700]' : 'bg-[#474D66]'
                " class="h-full"></div>
        </div>
    </div>
</template>


<script setup lang="ts">
import SuccessIcon from "../assets/SuccessIcon.vue";
import ErrorIcon from "../assets/ErrorIcon.vue";
import InfoIcon from "../assets/InfoIcon.vue";
import CloseButton from "../buttons/CloseButton.vue";
import { useAlertSystem } from "@/stores/store";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const { severity, message } = storeToRefs(useAlertSystem());
const alert = useAlertSystem();

const closeAlert = () => {
    alert.open = false;
};

// Progress bar state
const progressWidth = ref(100);
let progressDuration = 60000; // 1 minutes
let progressInterval: number;
const route = useRoute();
const updateProgress = () => {
    const startTime = Date.now();
    progressInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        progressWidth.value = Math.max(0, 100 - (elapsedTime / progressDuration) * 100);
        if (progressWidth.value === 0) {
            clearInterval(progressInterval);
            closeAlert();
        }
    }, 100);
};

onMounted(() => {
    if (alert.open) {
        setTimeout(() => {
            closeAlert();
        }, progressDuration);
        updateProgress();
    }
});

onUnmounted(() => {
    clearInterval(progressInterval);
});

const resetProgress = () => {
    clearInterval(progressInterval);
    progressWidth.value = 100;
    updateProgress();
};

watch([severity, message], () => {
    if (alert.open) {
        resetProgress();
    }
});


watch(route, () => {
    closeAlert();
})
</script>