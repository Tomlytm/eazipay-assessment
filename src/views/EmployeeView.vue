<template>
  <div class="text-[#292A29] h-[1000px] flex justify-center">
    <div>
      <div class="text-center aeonik mb-3 text-[#292A29]">Ezipay's Team</div>
      <img src="/src/assets/images/employee2.svg" class="mb-3" alt="employee" />
      <div
        class="border border-[#E7E8E7] rounded-[16px] flex justify-center h-[30px] sm:h-[56px] gap-2 mb-3 items-center mb-2 sm:mb-10"
      >
        <div
          :class="[
            'w-[170px] sm:w-[160px] md:w-[230px]  text-[10px] sm:text-[12px] md:text-[16px] rounded-[8px] py-[5px] sm:py-[8px] text-center transition-all duration-300 ',
            selectedTab === 'individual' ? 'bg-[#11453B] text-white shadow-xl ' : 'bg-[#F2F1F1]'
          ]"
          @click="selectedTab = 'individual'"
        >
          All Employee
        </div>
        <div
          :class="[
            'w-[170px] sm:w-[160px] md:w-[230px] text-[10px] sm:text-[12px] md:text-[16px] rounded-[8px] py-[5px] sm:py-[8px] text-center transition-all duration-300',
            selectedTab === 'company' ? 'bg-[#11453B] text-white shadow-xl' : 'bg-[#F2F1F1]'
          ]"
          @click="selectedTab = 'company'"
        >
          Departments
        </div>
      </div>
      <div class="flex gap-2 mb-3">
        <div class="w-full border rounded-[12px] flex">

        <input class="w-full rounded-l-[12px]"  > <img  height="20" width="20" class="mr-3" src="/src/assets/images/search.svg" alt="search">
     
        </div>

        <img src="/src/assets/images/filter1.svg" alt="">
      </div>
      <div class="flex gap-2">
        <img src="/src/assets/images/List2.svg" alt="">
<span class="text-light">|</span>
        <img src="/src/assets/images/Grid.svg" alt="">
        <span class="text-light">|</span>
        <div>Archived</div>
      </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Caleb Nwafor</div>
<div  class="aeonik-light text-[12px]">Accountant</div>
<div class="aeonik-light text-[16px]">Female | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N250,600.78 
        </div>
       
      </div>
    </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Wasiu Tiamiyu</div>
<div  class="aeonik-light text-[12px]">Product Designer</div>
<div class="aeonik-light text-[16px]">Male | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N550,600.78
        </div>
       
      </div>
    </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Caleb Nwafor</div>
<div  class="aeonik-light text-[12px]">Accountant</div>
<div class="aeonik-light text-[16px]">Female | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N250,600.78 
        </div>
       
      </div>
    </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Caleb Nwafor</div>
<div  class="aeonik-light text-[12px]">Accountant</div>
<div class="aeonik-light text-[16px]">Female | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N250,600.78 
        </div>
       
      </div>
    </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Caleb Nwafor</div>
<div  class="aeonik-light text-[12px]">Accountant</div>
<div class="aeonik-light text-[16px]">Female | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N250,600.78 
        </div>
       
      </div>
    </div>
      <div class="flex justify-between mt-5 border-b pb-5">
        <img src="/src/assets/images/Bolade.svg" alt="avatar">
        <div>
<div  class="aeonik-light text-[20px]">Caleb Nwafor</div>
<div  class="aeonik-light text-[12px]">Accountant</div>
<div class="aeonik-light text-[16px]">Female | Monthly</div>
        </div>
     
      <div class="flex items-end">
        <div class="text-[#11453B] aeonik text-[16px]">
            N250,600.78 
        </div>
       
      </div>
    </div>

</div>
    
  </div>
</template>

<script>
export default {}
</script>

<style >
</style>