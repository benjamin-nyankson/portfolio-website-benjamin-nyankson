<template>
    <div>
        <button @click="$emit('submit')" :disabled="disabled" :class="disabled ? 'flex bg-[#f39852] cursor-not-allowed' :'bg-[#FD6F00]'" class=" py-2 px-2 text-[#fff] rounded-md">
            <LoaderIcon v-if="loading"/>
            {{ text }}


        </button>
    </div>
</template>

<script setup lang="ts">
import LoaderIcon from '../Loaders/LoaderIcon.vue';
defineProps({
    text: {
        type: String,
        default: "Submit"
    },
    disabled:{
        type:Boolean,
        default:false
    },
    loading:{
        type:Boolean,
        default:false
    }
})
</script>

