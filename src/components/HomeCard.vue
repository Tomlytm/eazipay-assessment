<template>
  <div class="h-[15rem] md:h-[20rem]   sm:max-w-[35rem] max-w-[27.67rem] px-[1.5rem] md:px-[4rem] py-[1.8rem] sm:py-[3.125rem] flex  card rounded-[1rem]">
    <div class="text-white">
      <div class="text-[1.125rem] xl:text-[1.75rem] aeonik">
        {{ title }}
      </div>
      <div class="text-[0.7rem] md:text-[1.0rem] aeonik-light">
        <div class="leading-6 md:leading-10">{{ subtitle1 }}</div>
        <div class="leading-6 md:leading-10">{{ subtitle2 }}</div>
        <div class="leading-6 md:leading-10">{{ subtitle3 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps as any } from 'vue';

const props = defineProps({
  title: String,
  subtitle1: String,
  subtitle2: String,
  subtitle3: String,
});
</script>

<style>
.card {
  background: linear-gradient(0deg, #11453B, #11453B),
    radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(253, 253, 253, 0.027) 100%);
  box-shadow: rgba(0, 0, 0, 0.6) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
</style>
