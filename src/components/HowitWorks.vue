<template>
  <div class="flex justify-center h-[500px] sm:mt-0 mt-[-500px] sm:h-[1150px] items-center m-0 ">
  <div class="md:mx-15 mx-10">
    <div>
      <div class="made-mellow  text-[#11453B] text-[1.9rem] sm:text-[56px] text-center">
          How Eazipay Works
        </div>
        <div class="text-[1.75rem] md:text-[28px] text-center text-[#515251] mb-10">
          Get started in 3 simple steps.
        </div>
    </div>
  <div class="relative  flex sm:gap-10">
    <div class="relative mt-[-140px] md:mt-0 flex justify-center items-center w-[578px] h-[682px]">
      <img
        width="350"
        height="682"
        class="rounded-[29px] sm:rounded-[43px] md:rounded-[63px] z-50 relative w-[180px] sm:w-[230px] sm:h-[450px] md:w-[350px] md:h-[682px]"
        src="/src/assets/images/howitworks.gif"
        alt="Animated GIF"
      />
      <img
        class="absolute inset-0 m-auto z-0 w-[280px] h-[280px] sm:w-[359px] sm:h-[359px] md:w-[678px] md:h-[578px]"
        src="/src/assets/images/BG.svg"
        alt="bg"
      />
    </div>
    <div class="">
        <img  class="sm:w-[421px] sm:h-[600px] " src="/src/assets/images/steps.svg" alt="steps">
    </div>
  </div>


  </div>
</div>
</template>
<style>


</style>

<script>
import TheStepper from './TheStepper.vue'

export default {
  components: {
    TheStepper
  }
}
</script>