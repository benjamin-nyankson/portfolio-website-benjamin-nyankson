<template>
    <div class="mt-32 flex items-center gap-5">
        <div class="mb-5">
            <p>Hi I am</p>
            <p class="text-[#FD6F00] text-2xl font-bold">Benjamin Nyankson</p>
            <p class="lg:text-8xl lg:font-extrabold">FRONT-END</p>
            <p
                class=" sm:text-5xl sm:font-extrabold lg:text-8xl lg:font-extrabold md:text-5xl md:font-extrabold sm:ml-0 md:ml-0 lg:ml-28">
                DEVELOPER</p>
            <p class="mt-4 text-2xl">with a strong foundation in HTML, CSS, and JavaScript. With a focus on building
                seamless
                user interfaces and
                delightful user experiences, I've honed my skills in popular frontend libraries and frameworks such as
                React.js
                and Vue.js.</p>
            <ButtonComponent text="Contact me" class="mt-10" @submit="open = true" />
        </div>
        <div class="w-full flex items-center flex-col gap-3 sm:hidden md:hidden lg:flex">
            <img src="../../assets//images//profile_img.jpeg" alt="">
            <img src="../../assets//images//social.png" alt="">
        </div>
        <ModalComponent :open="open" title="Contact Me" @close="open = false">

            <form @submit="handleSubmit">
                <div class="flex flex-col gap-4 mt-3">
                <InputField label="Name" v-model="name" />
                <InputField label="Email" v-model="email" type="email" />
                <TextArea label="Message" v-model="message" />
                <div class="flex justify-end">
                    <ButtonComponent text="Contact" :disabled="isButtonDisabled || isLoading" :loading="isLoading" />
                </div>
            </div>
            </form>
        </ModalComponent>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonComponent from '../buttons/ButtonComponent.vue';
import ModalComponent from '../ModalComponent.vue';
import InputField from '../inpputs/InputField.vue';
import TextArea from '../inpputs/TextArea.vue';
import axios from 'axios';
import { useAlertSystem } from '@/stores/store';

const open = ref(false);
const name = ref("")
const email = ref("")
const message = ref("")
const isLoading = ref(false);
const alert = useAlertSystem()
const handleSubmit = async (e:Event) => {
    e.preventDefault();
isLoading.value = true;
    try {
        const response = await axios.post('https://graphql-server-lyart.vercel.app/api/send-email', { name: name.value, email: email.value, message: message.value });
        if (response.status === 200) {
            alert.setAlert(['Email sent successfully!', "success"])
            isLoading.value = false
            email.value="";
            name.value="";
            message.value=""
            open.value=false;
        } else {
        alert.setAlert(["Failed to send email.","error"])
            isLoading.value=false;
        }
    } catch (error) {
        alert.setAlert(["An error occurred while sending the email.","error"])
        isLoading.value = false;
    }
};

const isEmailValid = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});

const isButtonDisabled = computed(() => {
  return !isEmailValid.value || !name.value.trim().length || !message.value.trim().length;
});
</script>
