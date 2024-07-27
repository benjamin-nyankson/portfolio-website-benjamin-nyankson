<template>
    <div class="flex items-center justify-between shadow-md p-3 gap-5">
        <div class="flex items-center gap-5">
            <ProfileIcon />
            <p>MILES</p>
        </div>
        <div class="cursor-pointer 2xs:block md:block lg:hidden 2xl:hidden" @click="showMenu = !showMenu">
            <MenuIcon/>
        </div>
        <div class="flex gap-5 items-center justify-center 2xs:hidden xs:hidden sm:hidden md:hidden lg:flex">
            <div v-for="(item, index) in navBarItems" @click="navigate(item.path as string)" class="cursor-pointer">
                <p class="p-2 whitespace-nowrap text-sm"
                    :class="item.path === $route.path ? 'bg-[#FD6F00] text-[#fff] rounded-md' : ''"> {{ item.name }}</p>
            </div>
        </div>


    </div>
    <div v-if="showMenu" class="fixed bg-white text-[#0a192f] w-2/3 p-3 shadow-md 2xs:block md:block lg:hidden 2xl:hidden z-[10000]">
        <menu v-for="(item, index) in navBarItems" @click="navigate(item.path as string)" class="cursor-pointer">
            <p class="p-2 whitespace-nowrap text-sm"
                :class="item.path === $route.path ? 'bg-[#FD6F00] text-[#fff] rounded-md' : ''"> {{ item.name }}</p>
        </menu>
    </div>
</template>

<script setup lang="ts">
import { navBarItems } from "@/constant/navBarItems"
import ProfileIcon from "@/assets/images/ProfileIcon.vue"
import { ref, watch } from "vue";
import MenuIcon from "@/assets/MenuIcon.vue"
import { useRoute,useRouter } from "vue-router";
import pdfFile from "@/assets/Benjamin_Nyankson_Resume.pdf";

const route = useRoute()
const showMenu = ref(false);
const router = useRouter()
watch(route,()=>{
showMenu.value=false;
})

function downloadPdf() {
    
      // create element <a> for download PDF
      const link = document.createElement('a');
      link.href = pdfFile;
      link.target = '_blank';
      link.download = "Benjamin_Nyankson_Resume";

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }


const navigate = (link:string)=>{
if(link==="download"){
    downloadPdf()
    showMenu.value=false;
}

else{
router.push(link)
}
}

</script>

