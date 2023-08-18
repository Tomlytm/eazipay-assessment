<script  setup lang="ts">
import Activity from '../components/RecentActivity.vue'
</script>

<template>
  <div class="about py-[45px] flex justify-center sm:mx-[45px]">
    <div>

    <div>
      <div class="aeonik text-[#292A29] mb- text-[36px]">Welcome Abasiama</div>
      <div class="text-[#515251] mb-10">Pay and manage your employee in minutes</div>
    </div>
    <div class="flex gap-5 mb-5">
      <div>
        <div class=" sm:h-[154px] sm:max-w-[770px] sm:mb-5 ">
          <img src="/src/assets/images/wallett.svg" class="rounded-[20px] hidden sm:block" alt="wallet" />
          <img src="/src/assets/images/mobile-wallet1.svg" class=" sm:hidden block" alt="mobile-wallet">
        </div>
        <div class="text-[#515251] aeonik text-[14px] mb-5 mt-5 sm:hidden">QUICK STATS</div>
        <div class="sm:hidden flex justify-between mb-5">
          <img src="/src/assets/images/stat1.svg" alt="stat">
          <img src="/src/assets/images/stat2.svg" alt="stat">

        </div>
        <div class="text-[#515251] aeonik text-[14px] mb-5 sm:hidden">QUICK ACTIONS</div>
        <div class="shadow-xl sm:shadow-none  sm:flex grid grid-cols-3 sm:justify-between rounded-[24px] border sm:border-0 bg-white sm:bg-[#F0F7EB] p-3 sm:p-0">
          
          <div class="sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div class="">
              <svg
                class="mx-auto mb-3"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.207031" y="0.227051" width="48" height="48" rx="12" fill="#FFEDEC" />
                <path
                  d="M29.25 20.25V22.75M29.25 22.75V25.25M29.25 22.75H31.75M29.25 22.75H26.75M24.875 19.3125C24.875 20.8658 23.6158 22.125 22.0625 22.125C20.5092 22.125 19.25 20.8658 19.25 19.3125C19.25 17.7592 20.5092 16.5 22.0625 16.5C23.6158 16.5 24.875 17.7592 24.875 19.3125ZM16.7508 30.0286C16.7503 29.9983 16.75 29.9679 16.75 29.9375C16.75 27.0035 19.1285 24.625 22.0625 24.625C24.9965 24.625 27.375 27.0035 27.375 29.9375V29.9396C27.375 29.9693 27.3747 29.999 27.3742 30.0286C25.8228 30.9627 24.0054 31.5 22.0625 31.5C20.1196 31.5 18.3022 30.9627 16.7508 30.0286Z"
                  stroke="#EA4E4B"
                  stroke-width="1.47134"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="text-center text-[#515251] text-[14px] ">Add Employee</div>
          </div>
          <div class="sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/cash.svg" alt="cash" /></div>
            <div class="text-center text-[#515251] text-[14px]">Pay Salaries</div>
          </div>
          <div class="sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/send1.svg" alt="send" /></div>
            <div class="text-center text-[#515251] text-[14px]">Pay Compliances</div>
          </div>
          <div class="sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/loan1.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Quick Loan</div>
          </div>
          <div class="sm:w-[150px] sm:bg-white rounded-[24px] sm:hidden block py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/salaries.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Edit Salaries</div>
          </div>
          <div class=" sm:hidden block sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/transfer.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Electricity</div>
          </div>
          <div class=" sm:hidden block sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/data.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Airtime</div>
          </div>
          <div class=" sm:hidden block sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/electricity.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Make a Transfer</div>
          </div>
          <div class=" sm:hidden block sm:w-[150px] sm:bg-white rounded-[24px] py-[14px] sm:shadow-xl sm-border">
            <div><img class="mx-auto mb-3" src="/src/assets/images/airtime.svg" alt="loan" /></div>
            <div class="text-center text-[#515251] text-[14px]">Data</div>
          </div>
        </div>
      </div>
      <div class="">
        <img src="/src/assets/images/dashboard-data.svg" class="hidden sm:block" alt="data" />
      </div>
    </div>
    <div class="hidden sm:block">
      <img
        src="/src/assets/images/inflow-chart.svg"
        class="w-full rounded-[20px] mb-5"
        alt="inflow"
      />
    </div>
    <div class="text-[32px] aeonik text-[#292A29] mb-5 sm:block hidden">Recent Activity</div>
    <div class="sm:block hidden flex gap-3 mb-8">
      <div class="flex w-full rounded-[16px] bg-white h-[48px] border-[#B5B6B5] border">
        <input
          type="text "
          placeholder="Search employee"
          class="w-full flex items-center rounded-l-[16px] h-[48px] px-3"
        />
        <div class="flex items-center w-[102px] bg-[#D9EBCD] rounded-r-[16px] justify-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.2413C18.7601 6.9473 17.6997 4.81278 15.9855 3.27664C14.2714 1.7405 12.0338 0.919506 9.73292 0.982466C7.43203 1.04543 5.24272 1.98756 3.61514 3.61514C1.98756 5.24272 1.04543 7.43203 0.982466 9.73292C0.919506 12.0338 1.7405 14.2714 3.27664 15.9855C4.81278 17.6997 6.9473 18.7601 9.2413 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7737 19.4936 20.8481 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5064 20.8481 20.617 20.7737 20.71 20.68C20.8902 20.4935 20.991 20.2443 20.991 19.985C20.991 19.7257 20.8902 19.4765 20.71 19.29ZM10 17C8.61553 17 7.26215 16.5895 6.111 15.8203C4.95986 15.0511 4.06265 13.9579 3.53284 12.6788C3.00303 11.3997 2.8644 9.99223 3.1345 8.63436C3.4046 7.2765 4.07128 6.02922 5.05025 5.05025C6.02922 4.07128 7.2765 3.4046 8.63436 3.1345C9.99223 2.8644 11.3997 3.00303 12.6788 3.53284C13.9579 4.06265 15.0511 4.95986 15.8203 6.111C16.5895 7.26215 17 8.61553 17 10C17 11.8565 16.2625 13.637 14.9497 14.9497C13.637 16.2625 11.8565 17 10 17Z"
              fill="#11453B"
            />
          </svg>
        </div>
      </div>

      <img src="/src/assets/images/filter-btn.svg" alt="" />
    </div>

    <div class="sm:block hidden bg-[#F2F1F1] h-[752px] rounded-[20px] px-5 py-10 overflow-y-auto">
      <div class="text-[#515251] text-[18px] aeonik mb-5">Wednesday, November 09, 2022</div>
      <div class="mb-10">
        <Activity
          actype="PAYROLL"
          img="name-avatar"
          holdername="Badmus Kemis"
          actype2="ACTIVITY"
          comment="Paid November 2022 salary"
          actype3="EMPLOYEE"
          no="2"
          actype4="TIME"
          time="16:15"
          color="#515251"
        />
        <Activity
          actype="EMPLOYEE MANAGEMENT"
          img="kalu-avatar"
          holdername="Kalu Abasiama"
          actype2="ACTIVITY"
          comment="Added new employee"
          actype3="EMPLOYEE"
          no="04"
          actype4=""
          time=""
          color="#515251"
        />
      </div>
      <div class="text-[#515251] text-[18px] aeonik mb-5">Friday, November 04, 2022</div>
      <div class="mb-10">
        <Activity
          actype="BONUS"
          img="name-avatar"
          holdername="Badmus Kemis"
          actype2="ACTIVITY"
          comment="Added new bonus"
          actype3="BONUS NAME"
          no="XMAS Bonus"
          color="#515251"
        />
        <Activity
          actype="WALLET"
          img="name-avatar"
          holdername="Badmus Kemis"
          actype2="ACTIVITY"
          comment="Paid November 2022, salary"
          actype3="AMOUNT"
          no="N11,1678,900.00"
          actype4="TIME"
          time="15:31"
          color="#EA4E4B"
        />
      </div>

      <div class="text-[#515251] text-[18px] aeonik mb-5">Monday, October 30, 2022</div>
      <div class="mb-10">
        <Activity
          actype="PAYROLL"
          img="name-avatar"
          holdername="Badmus Kemis"
          actype2="ACTIVITY"
          comment="Paid XMAS bonus"
          actype3="EMPLOYEE"
          no="52"
          time="10:15"
          actype4="TIME"
          color="#515251"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<style>
@media screen and (min-width: 940px) {
.bs {
  box-shadow: 0px 9px 18px 0px #aaaaaa26;
}
}

.wallet-bg {
  background-image: url('../assets/images/wallet-bg1.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
