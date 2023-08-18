<script setup lang="ts">
import NavBar from '../components/DashboardNav.vue'
import SideBar from '../components/SideBar.vue'
import '../assets/main.css'

import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div>
    
    <div class="sidebar fixed z-10 h-screen rounded-3 hidden sm:block"><SideBar /></div>
    <div class="mainLayout">
      <div class="hidden sm:block navbar-container"><NavBar /></div>
      <div class="mainContainer">
        <router-view />
      </div>
      <div class="bottom-bar sm:hidden block w-full h-[82px] shadow-xl" >
        <div class="flex justify-between items-center">
        <RouterLink to="/dashboard">
          <img src="/src/assets/images/more.svg" class="mt-5" alt="home"> </RouterLink>
          <img src="/src/assets/images/loanss.svg" class="mt-5" alt="employee">
          <img src="/src/assets/images/payroll-tab.svg" class="mt-5" alt="payroll">
          <img src="/src/assets/images/employee.svg" class="mt-5" alt="loans">
          <img src="/src/assets/images/home.svg" class="mt-5" alt="more">
         
         
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.sidebar {
  width: 272px;
  background-color: white;
  box-shadow: 4px 0px 25px 0px #AAAAAA14;
}
.navbar-container {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 25px 0px #0000000D;

}
.bottom-bar {
  position: sticky;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 4px 25px 0px #0000000D;

}
.navbar {
  height: 80px;
}
.mainContainer {
  width: 100%;
  transition: ease 0.2s;
  background-color:#F0F7EB;
  margin: 0;
}
.mainLayout {
  width: calc(100% - 272px);
  /* overflow: auto; */
  transform: translateX(272px) !important;
  transition: ease 0.5s;
  margin: 0;
}
@media screen and (max-width: 640px) {
  .mainContainer {
  background-color:white;
}
  .mainLayout {
  width: 100%;
  /* overflow: auto; */
  transform: translateX(0) !important;
  transition: ease 0.5s;
  margin: 0;
}

  /* Adjust other styles as needed */
}
</style>