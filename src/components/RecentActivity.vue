<template>
    <div class="bg-white rounded-[16px] px-[48px] pt-[8px] pb-[15px] mb-3 border bs">
        <div class="flex justify-between">
        <div>
           <div class="text-[#8D8E8D] text-[12px] mb-8">{{actype }}</div>
        <div class="flex items-center gap-3"> 
            <div><img :src="`/src/assets/images/${img}.svg`" alt="name"></div>
            <div class="text-[#515251] aeonik">{{ holdername }}</div>
        </div>   
        </div>
        <div>
           <div class="text-[#8D8E8D] text-[12px] mt-5 mb-5">{{ actype2 }}</div>
        <div class=""> 
            <div class="text-[#515251] aeonik">{{ comment }}</div>
        </div>   
        </div>
        <div>
           <div class="text-[#8D8E8D] text-[12px] mt-5 mb-5">{{ actype3 }}</div>
        <div class=""> 
            <div :class="`text-[${color}] aeonik`">{{ no }}</div>
        </div>   
        </div>
        <div>
           <div class="text-[#8D8E8D] text-[12px] mt-5 mb-5">{{ actype4 }}</div>
        <div class=""> 
            <div class="text-[#515251] aeonik">{{ time }}</div>
        </div>   
        </div>
      </div>
    
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  actype: String,
  holdername: String,
  actype2: String,
  comment: String,
  actype3: String,
  actype4: String,
  img: String,
  no: String,
  time: String,
  color: String

});
</script>

<style >
.bs {
    box-shadow: 0px 9px 18px 0px #AAAAAA26;

}
</style>