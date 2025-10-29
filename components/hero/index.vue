<template>
  <div>
    <div
      id="home"
      class="grid grid-cols-1 gap-[80px] lg:grid-cols-2 py-[60px] lg:pt-[85px] justify-center items-center mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[360px]"
    >
      <leftContent class="order-2 lg:order-1" />
      <rightContent class="order-1 lg:order-2" />
    </div>
    <!-- Decorative Bottom Wave -->
    <div class="text-white z-40 relative">
      <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C0,0 600,120 1200,0 V120 H0 Z" fill="currentColor"></path>
      </svg>
      <div class="bg-white w-full -mt-px"></div>
    </div>
  </div>
</template>

<script setup>
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";
</script>
