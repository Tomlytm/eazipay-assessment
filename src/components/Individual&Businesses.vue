

<template>
  <div class="individuals flex justify-center">
    <div class="individuals1 h-[600px] sm:h-[840px] flex items-center">
      <div class="mx-8 md:mx-15">
        <div>
          <div class="made-mellow text-[#11453B] sm:text-[64px] text-[32px] text-center">
            For Individuals and Businesses
          </div>
          <div class="sm:text-[20px] text-center text-[#292A29] mb-10">
            Join 200+ businesses using Eazipay's easy solution.
          </div>
          <div class="flex justify-center">
            <div class="z1 ">
              <HomeCard title="Tamper-proof Payroll for LIfe " subtitle1="Your staff payroll history is kept in one place forever." subtitle2="No more excel sheet or manual records." subtitle3="Download your payroll history anytime you need it."/>
            </div>
            <div class="z2 ">
              <HomeCard title="All Payroll, Anytime Anywhere " subtitle1="Wherever you are Eazipay has got you covered on ALL your Payroll tasks." subtitle2="Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!" subtitle3="" />
            </div>
            <div class="z3 " >
              <HomeCard title="Payroll in Seconds" subtitle1="Never again wil you spend more than 2 minutes on payroll." subtitle2="Just click on your staff annd bulk-pay them at once." subtitle3="Payment is done permanently." />
            </div>
          </div>
          <div class="sm:text-[20px] mt-[60px] max-w-[623px] mx-auto text-[#515251] text-center">
            We are happy to answer your queries. Please, reach us at <span class="text-[#EA4E4B]">hello@myeazipay.com </span>and expect our response shortly after.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeCard from './HomeCard.vue'

</script>
<style>
.individuals1 {
  background-image: url('../assets/images/section2-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.individuals {
  background-image: url('../assets/images/eazi-wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.z1 {
  z-index: 2;
  margin-right: -200px;
}
.z2 {
  z-index: 3;
  margin-right: -280px;
}
.z3 {
  z-index: 4;
}
.z1,
.z2,
.z3 {
  transition: transform 0.5s ease; /* Add transition */
}

.z1:hover ~ .z2 {
  transform: translateX(170px); /* Move z2 to the right when z1 is hovered */
}
.z2:hover{
    transform: translateX(-215px);
}
.z2:hover ~ .z3 {
  transform: translateX(40px); /* Move z3 to the right when z2 is hovered */
}
.z3:hover{
    transform: translateX(-10px);
}
</style>