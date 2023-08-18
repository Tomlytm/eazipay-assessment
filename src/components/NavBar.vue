<template>
  <div class="flex justify-between h-[80px] mx-10 md:mx-15">
    <div class="flex gap-x-5 xl:gap-x-10 items-center text-[12px]  md:text-[16px] text-[#515251]">
      <img class="h-[24px]" src="/src/assets/images/eazipayLogo.svg" alt="Eazipay" />
      <div class="hidden  md:block">Individual</div>
      <div class="hidden md:block">Business</div>
      <div class="hidden md:block">Pricing</div>
      <div class="hidden md:block ">Set your payroll</div>
    </div>
    <div class="flex items-center gap-x-2 sm:gap-x-5">
      <RouterLink to="/dashboard">
        <div class="btn flex justify-center items-center border border-1 shadow-sm border-[#11453B] text-[#11453B] text-sm sm:text-base w-[110px] md:w-[168px] h-[32px] sm:h-[40px] rounded-full cursor-pointer">Log in</div>
      </RouterLink>
      <div class="flex justify-center items-center btn bg-[#11453B] text-white text-sm sm:text-base w-[110px] md:w-[168px] h-[32px] sm:h-[40px] rounded-full shadow-xl cursor-pointer">Register</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
@media (min-width: 640px) {
  /* Adjustments for small screens and above (sm and larger) */
  .btn {
    width: 140px;
    height: 36px;
  }
}
</style>
