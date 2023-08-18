<script setup lang="ts">
import MainSectionVue from './MainSection.vue'
import NavBar from './NavBar.vue'
import MainSection from './MainSection.vue'
import IndividualSection from './Individual&Businesses.vue'
import HowitWorks from './HowitWorks.vue'
import FreeForever from './FreeForever.vue'
import ExclusiveDemo from './ExclusiveDemo.vue'
import PageFooter from './TheFooter.vue'
</script>

<template>
  <div class="first-header h-[1600px]">
    <div class="">
      <NavBar/>
    <MainSection />
    </div>
    <IndividualSection />
    
  </div>
  <HowitWorks />
  <FreeForever />
  <ExclusiveDemo />

<PageFooter />
</template>
<style>
  /* Adjustments for small screens and above (sm and larger) */
.first-header {
  background-image: url('../assets/images/bg-section1.svg');
  background-repeat: no-repeat;
  background-size: contain;
}


</style>