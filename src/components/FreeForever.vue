<template>
  <div class="bg2 ">
    <div class="bg1 sm:h-[800px] h-[500px] flex items-center justify-center relative">
      <div class="md:mx-15 mx-10">
        <img
          class="absolute top-0"
          width="70"
          height="125"
          src="/src/assets/images/dots.svg"
          alt="dots"
        />
        <div class="flex justify-between">
          <div class="max-h-[514px] flex items-center">
            <div>
              <div class="made-mellow sm:lh text-[30px]  sm:text-[39px] md:text-[56px] text-[#292A29] max-w-[400px]">
                Free forever for your <span class="text-[#EA4E4B]"> salary payment</span>
              </div>
              <div class="mt-[20px] sm:mt-[50px] text-[14px]  sm:text-[18px] aeonik">
                <div>Subscribe to the Eazilife today</div>
                <div class="flex sm:mt-[-10px]">
                  <img class="ml-[-12px] sm:ml-[-40px] w-[100px] sm:w-[220px]" src="/src/assets/images/appstore.svg" alt="" />
                  <img class="ml-[-15px] sm:ml-[-60px] w-[100px] sm:w-[230px]" src="/src/assets/images/google-play.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div><img src="/src/assets/images/free-forever.svg" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg1 {
  background-image: url('/src/assets/images/Patterns1.svg');
}
.bg2 {
  background-image: url('/src/assets/images/Intersect.svg');
}

.lh {
  line-height: 40px;
}
</style>
<script setup lang="ts">
</script>