<template>
  <div class="">
    <button
      class="text-[12px] md:text-[16px] font-[700] px-[24px] py-[12px] text-[#685CF2] rounded-xl flex gap-2 items-center border border-[#E6E6E6]"
    >
      <img src="./ai-icon.png" alt="" /> AI-Powered Face Detected Attendance
      App.
    </button>
    <p
      class="text-[28px] md:text-[36px] lg:text-[38px] font-bold leading-[120%] mt-[16px]"
    >
      Automate your <br />
      <span class="text-[#F47920]"> Employee Attendance </span><br />
      with or without Roster
    </p>

    <div class="">
      <div
        class="grid grid-cols-[auto_1fr] gap-4 justify-center items-center w-full mt-[16px]"
      >
        <p class="text-[#0D121D] text-[14px] font-[400] leading-[160%]">
          Track real-time attendance, reduce manual errors, and eliminate buddy
          punching. Enable location-based check-ins, smart analytics, and
          instant reports all from your phone. Boost efficiency, transparency,
          and workforce accountability with our AI-powered attendance app. 
        </p>
      </div>
    </div>
    <button
      class="px-[24px] py-[12px] bg-[#685CF2] text-[16px] font-semibold rounded-lg hover:bg-[#685CF2] transition text-white hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center leading-[160%]"
      @click="isOpenModal = true"
    >
      <p>Get a free demo</p>
      <img src="../../assets/images/right-angle.png" alt="" />
    </button>
    <Modal :isOpen="isOpenModal" @close="isOpenModal = false" />
  </div>
</template>

<script setup>
import Modal from "../modal";

const isOpenModal = ref(false);
</script>
