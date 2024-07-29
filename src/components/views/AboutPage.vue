<template>
    <div class="">
        <div class="flex gap-5 mt-10 ">
            <div class="2xs:hidden xs:hidden sm:hidden md:hidden lg:flex">
                <img src="../../assets//images//profile_img.jpg" alt=""
                    class="mt-10 rounded-lg border-4 shadow-2xl border-[#ffffff] w-[800px] h-[200px]">
            </div>
            <div class="">
                <h4 class="lg:text-3xl sm:text-3xl md:text-3xl font-bold whitespace-nowrap">About Me</h4>

                <p class="mt-2 text-lg" v-for="item in about.first"><span v-html="replace(item.content)"></span></p>

                <SocialMedia />
            </div>
        </div>

        <section class="my-10">
            <p class="mt-2 text-lg" v-for="item in about.second">{{ item.content }}</p>

            <p class="text-lg my-5">Here are a few key aspects of my professional
                approach:</p>

            <p v-for="item in approaches" class="mt-2 text-lg">
                <span class="primary text-md"> {{ item.title }} </span>
                <span> &nbsp;{{ item.content }}</span>
            </p>

            <p class="text-lg mt-3" v-for="item in extras">{{ item }}</p>
        </section>
    </div>

</template>

<script setup lang="ts">
import SocialMedia from "../SocialMedia.vue";
import { extras, approaches, about } from "@/constant/about";

const wordsToUnderline = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"]

const styleWord = (text:string)=>{
    wordsToUnderline.forEach(word => {
        const regex = new RegExp(word, 'g');
        text = text.replace(regex, `<span class="primary font-bold">${word}</span>`);
      });
      return text;
}
const replace = (text: string) => {
return styleWord(text)

}
</script>

<style scoped>
.fade-enter-from{
  opacity: 0.8;
  transform: translateY(-100px);
}

.fade-enter-active{
  transition: all 0.3s ease-out;
}

.fade-leave-to{
  opacity: 0;
  transform: translateY(100px);
}
</style>
