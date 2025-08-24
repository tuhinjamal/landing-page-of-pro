<template>
  <div class="flex flex-col justify-center items-center md:items-start">
    <!-- heading -->
    <p
      :class="[
        'font-work text-[28px] leading-[120%] md:text-[40px] lg:text-[44px] 2xl:text-[58px] text-center md:text-start transition-all duration-500 ease-out font-extrabold',
        show.heading
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-10 blur-sm',
      ]"
    >
      ProHR The,
      <span class="text-[#F47920]">
        Best Roster, <br />
        Attendance & Payroll
        <br />
        System
      </span>
      in Bangladesh
    </p>

    <div class="mt-[24px] w-full space-y-4">
      <!-- feature box -->
      <div
        :class="[
          'grid grid-cols-[auto_1fr] gap-x-[24px]  justify-center items-center w-full border rounded-md px-[13px] py-[16px] transition-all duration-500 ease-out',
          show.feature
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        <img
          src="../../assets/images/mark.png"
          alt=""
          class="2xl:h-[50px] 2xl:w-[50px]"
        />

        <p
          class="text-[#0D121D] text-[16px] lg:text-[17px] 2xl:text-[25px] leading-[160%] font-[600] 2xl:font-[550] 2xl:leading-[120%]"
        >
          Automate and Simplify your branch-wise Staff Management with Roster,
          Attendance, Payroll.
        </p>
      </div>

      <!-- paragraph -->
      <p
        :class="[
          'text-[#0D121D] text-[14px] lg:text-[14.5px] 2xl:text-[18px] font-[400] mt-[16px] leading-[160%] transition-all duration-500 ease-out text-center md:text-start',
          show.paragraph
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        Step into the world of seamless HR operation with best of the modules
        and top-notch technology. Enhance employee skills, knowledge, and
        overall performance through a comprehensive range of structured training
        programs designed to foster professional growth and development.
      </p>

      <!-- button -->
      <button
        :class="[
          'px-[24px] py-[12px] bg-[#F47920] text-[16px] font-[600] rounded-lg hover:bg-[#DE6E1D] hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center leading-[160%] transition-all duration-500 ease-out w-full md:w-auto',
          show.button
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
        @click="isOpenModal = true"
      >
        <p>Get a free demo  </p>
        <img src="../../assets/images/arrow-45-deg.png" alt="" />
      </button>
    </div>

    <Modal  :isOpen="isOpenModal" @close="isOpenModal = false" />
   
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import Modal from "../modal";

const isOpenModal = ref(false);
const loading = ref(false);
const successMessage = ref("");

const show = reactive({
  heading: false,
  feature: false,
  paragraph: false,
  button: false,
});



// Staggered animation
onMounted(() => {
  setTimeout(() => (show.heading = true), 100);
  setTimeout(() => (show.feature = true), 300);
  setTimeout(() => (show.paragraph = true), 500);
  setTimeout(() => (show.button = true), 700);
});
</script>
