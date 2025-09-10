<template>
  <div class="">
    <button
      class="text-[12px] md:text-[16px] font-[600] bg-[#309771] px-[24px] py-[12px] text-white rounded-lg"
    >
      AI-Powered Face Detected Attendance App.
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
          Manage employee attendance with or without a roster. ProHR allows you
          to create rosters even when availability is not set, ensuring smooth
          workforce management in every situation. Employees also have the
          flexibility to start work on their own without a pre-set roster, with
          attendance automatically tracked.
        </p>
      </div>
    </div>
    <button
      class="px-[24px] py-[12px] bg-[#F47920] text-[16px] font-semibold rounded-lg hover:bg-[#DE6E1D] transition text-[#0D121D] hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center leading-[160%]"
      @click="isOpenModal = true"
    >
      <p>Get a free demo</p>
      <img src="../../assets/images/arrow-45-deg.png" alt="" />
    </button>
    <Modal :isOpen="isOpenModal" @close="isOpenModal = false" />
  </div>
</template>

<script setup>
import Modal from "../modal";

const isOpenModal = ref(false);
</script>
