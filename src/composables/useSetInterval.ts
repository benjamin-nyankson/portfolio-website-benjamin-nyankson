import { ref } from "vue";

 export default function useSetInterval<T>(items:T[]){
    const num = ref(0);
  setInterval(()=>{
if(num.value ===items?.length){
  num.value=0;
}
num.value+=1;
  },2000)

  return {num}
}