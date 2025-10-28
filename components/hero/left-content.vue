<template>
  <div class="flex flex-col justify-center items-center md:items-start">
    <!-- heading -->
    <div class="flex justify-start gap-[40px] items-center mb-[20px]">
      <div>
        <div class="flex justify-start gap-2 items-center">
          <img src="./wrist.png" alt="" />
          <p class="mx-0 my-0 px-0 py-0">100% Secured</p>
        </div>
      </div>
      <div class="flex justify-start gap-x-2 items-center">
        <img src="./encrypt.png" alt="" />
        <p class="mx-0 my-0 px-0 py-0">End-to-end Encrypted</p>
      </div>
    </div>
    <p
      :class="[
        ' text-[28px] leading-[120%] md:text-[40px] lg:text-[37px] 2xl:text-[42px] text-center md:text-start transition-all duration-500 ease-out font-extrabold',
        show.heading
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-10 blur-sm',
      ]"
    >
      AI-Powered<span class="text-[#F25323]"> Simplified HR Software</span>
      in Bangladesh
    </p>

    <div class="mt-[24px] w-full space-y-4">
      <!-- feature box -->
      <div
        :class="[
          'grid grid-cols-[20px_1fr] gap-x-[18px]  justify-center items-center w-full  px-[13px] py-[16px] transition-all duration-500 ease-out',
          show.feature
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        <img src="./cols.png" alt="" />

        <p
          class="text-[#5762B5] text-[14px] lg:text-[18px] 2xl:text-[24px] leading-[160%] font-[600] 2xl:font-[600] 2xl:leading-[120%]"
        >
          Automate your workforce management with an AI-enabled HR system. 
        </p>
      </div>

      <!-- paragraph -->
      <p
        :class="[
          'text-[#0D121D] text-[14px] lg:text-[14px] 2xl:text-[14px] font-[400] mt-[14px] leading-[160%] transition-all duration-500 ease-out text-center md:text-start',
          show.paragraph
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        Experience a smarter way to manage your workforce with an all-in-one
        AI-powered HR platform. Simplify attendance, leave, and payroll
        processes while reducing manual effort and errors. Empower your HR team
        to save time, enhance accuracy, and focus on what truly matters your
        people. 
      </p>

      <!-- button -->
      <button
        :class="[
          'px-[24px] py-[12px] bg-[#685CF2] text-[16px] font-[600] rounded-lg hover:bg-[#685CF2] text-white hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center leading-[160%] transition-all duration-500 ease-out w-full md:w-auto',
          show.button
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
        @click="isOpenModal = true"
      >
        <p class="mx-0 my-0 px-0 py-0">Get a free demo</p>
        <img src="../../assets/images/right-angle.png" alt="" />
      </button>
      <small class="text-[#0D121D] font-[500]"
        >**No credit card required**</small
      >
    </div>

    <Modal :isOpen="isOpenModal" @close="isOpenModal = false" />
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
