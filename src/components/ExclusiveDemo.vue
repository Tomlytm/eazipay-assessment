<template>
  <div class="exclusive-bg relative">
    <img src="/src/assets/images/exclusive-demo-dots.svg" alt="dots" class="top-[80px] hidden sm:block left-0 absolute">
    <div class=" mx-10  md:mx-20 h-[500px] sm:h-[950px] flex justify-center items-center">
      <div>
        <div class="">
          <div class="made-mellow sm:lh text-[30px] sm:text-[44px] md:text-[64px] text-[#11453B] max-w-[500px]">
            Get an Exclusive Demo of Eazipay
          </div>
          <div class="mt-[50px] text-[10px]  sm:text-[24px] aeonik-light max-w-[100px] sm:max-w-[420px] text-[#515251]">
            <div>
              Our greatest priority is to put you and your business first. Let's show you how we can
              help.
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="p-[32px] cardd bg-white rounded-[16px] sm:rounded-[32px] w-[320px]  sm:w-[390px] md:w-[552px] h-[380px] sm:h-[540px] md:h-[704px] mx-auto">
        <div class="text-center text-[14px] sm:text-[16px] md:text-[28px] aeonik text-[#292A29] mb-4 ">First things first</div>
        <div class="text-center text-[8px] sm:text-[14px] md:text-[18px] text-[#444444] max-w-[340px] mx-auto mb-3">
          We want to serve you better. Tell us a bit about yourself or company
        </div>
        <div
          class="border border-[#E7E8E7] rounded-[16px] flex justify-center h-[30px] sm:h-[56px] gap-2 items-center mb-2 sm:mb-10"
        >
          <div
            :class="[
              'w-[100px] sm:w-[160px] md:w-[230px]  text-[10px] sm:text-[12px] md:text-[16px] rounded-[12px] py-[3px] sm:py-[8px] text-center transition-all duration-300 ',
              selectedTab === 'individual' ? 'bg-[#11453B] text-white shadow-xl ' : 'bg-[#F2F1F1]'
            ]"
            @click="selectedTab = 'individual'"
          >
            Individual
          </div>
          <div
            :class="[
              'w-[100px] sm:w-[160px] md:w-[230px] text-[10px] sm:text-[12px] md:text-[16px] rounded-[12px] py-[3px] sm:py-[8px] text-center transition-all duration-300',
              selectedTab === 'company' ? 'bg-[#11453B] text-white shadow-xl' : 'bg-[#F2F1F1]'
            ]"
            @click="selectedTab = 'company'"
          >
            Company
          </div>
        </div>
        <div>
          <div>
            <div class="input-container mb-0 sm:mb-3">
              <label class="input-label" :class="{ 'label-float': isInputFocused || inputValue }">
                First Name
              </label>
              <input
              placeholder="First Name"
                v-model="inputValue"
                @focus="isInputFocused = true"
                @blur="isInputFocused = false"
                class="input-field"
                type="text"
              />
            </div>
            <div class="input-container mb-0 sm:mb-3">
              <label class="input-label" :class="{ 'label-float': isInputFocused1 || inputValue1 }">
                Last Name
              </label>
              <input
              placeholder="Last Name"
                v-model="inputValue1"
                @focus="isInputFocused1 = true"
                @blur="isInputFocused1 = false"
                class="input-field"
                type="text"
              />
            </div>
            <div class="input-container mb-3">
              <label class="input-label" :class="{ 'label-float': isInputFocused2 || inputValue2 }">
                Email
              </label>
              <input
              placeholder="Email"
                v-model="inputValue2"
                @focus="isInputFocused2 = true"
                @blur="isInputFocused2 = false"
                class="input-field"
                type="text"
              />
            </div>
            <div class="input-container mb-3">
              <label class="input-label" :class="{ 'label-float': isInputFocused3 || inputValue1 }">
                Job Title
              </label>
              <input
              placeholder="Job Title"
                v-model="inputValue1"
                @focus="isInputFocused3 = true"
                @blur="isInputFocused3 = false"
                class="input-field"
                type="text"
              />
            </div>
            <div class="input-container mb-5">
              <label class="input-label" :class="{ 'label-float': isInputFocused4 || inputValue1 }">
                Company Size
              </label>
              <input
              placeholder="Company Size"
                v-model="inputValue1"
                @focus="isInputFocused4 = true"
                @blur="isInputFocused4 = false"
                class="input-field"
                type="text"
              />
            </div>
          </div>
          <div class="text-[10px] py-1 sm:text-[16px] rounded-[24px]  sm:py-[12px] bg-[#11453B] text-center text-white shadow-xl  mt-3 sm:mt-0 ">Request Demo</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedTab: 'individual',
      inputValue: '',
      isInputFocused: false,
      isInputFocused1: false,
      isInputFocused2: false,
      isInputFocused3: false,
      isInputFocused4: false,
    }
  }
}
</script>
  
<style>
.exclusive-bg {
  background-image: url('/src/assets/images/exclusive-bg.svg');
  background-position-x: right;
  background-repeat: no-repeat;
}
.cardd {
  box-shadow: 0px 20px 48px 0px #aaaaaa4a;
}
.lh{
    line-height: 62px;
}
.btn-shadow {
  box-shadow: 0px 8.871848106384277px 40.5570182800293px -2.534813642501831px #18274b1f;
}
.input-container {
  position: relative;
  margin-bottom: 20px;
}

.input-label {
  position: absolute;
  left: 11px;
  top: 11px;
  font-weight: 100;
  font-size: 16px;
  color: #8D8E8D;
  pointer-events: none;
  transition: all 0.3s ease;
}

.label-float {
  top: -10px;
  font-size: 12px;
  background-color: white;
  padding: 1px 5px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e7e8e7;
  border-radius: 16px;
}
.input-field:focus {
  border-color: #11453B;
  border-width: 1px;
  /* Add a subtle box-shadow */
}
@media screen and (max-width: 640px) {
  .input-field {
  width: 100%;
  padding: 0px 10px;
  font-size: 10px;
}
.input-label{
  font-size: 10px;
  left: 11px;
  top: 6.5px;
}
.input-container {
  margin-bottom: 1px;
}
}

</style>
