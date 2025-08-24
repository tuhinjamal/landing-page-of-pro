<template>
  <div class="">
    <p
      class="text-[28px] md:text-[36px] lg:text-[38px] font-bold leading-[120%]"
    >
      Flexible in <br />
      <span class="text-[#F47920]"> Rostering & Attendance </span>
    </p>

    <div class="">
      <div
        class="grid grid-cols-[auto_1fr] gap-4 justify-center items-center w-full mt-[16px]"
      >
        <p class="text-[#0D121D] text-[14px] font-[400] leading-[160%]">
           Manage shifts and attendance effortlessly with complete flexibility. Adjust rosters on the go, track employee hours in real-time, and ensure smooth operations without any manual hassle.
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
  <Modal  :isOpen="isOpenModal" @close="isOpenModal = false" />

  </div>

</template>

<script setup>
import Modal from "../modal";

const isOpenModal = ref(false);


</script>
