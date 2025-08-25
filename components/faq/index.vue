<template>
  <div
    id="faq"
    class="py-[60px] lg:my-[120px] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[240px] border-t border-gray-200"
  >
    <p
      class="leading-[120%] text-center text-[28px] md:text-[40px] font-[700] mb-[48px] mt-[59px]"
    >
      Frequently Asked <span class="text-[#F47920]"> Questions </span>
    </p>
    <div
      class="grid grid-cols-1 gap-[80px] lg:grid-cols-2 justify-center items-start"
    >
      <leftContent class="order-2 lg:order-1" />
      <rightContent class="order-1 lg:order-2" />
    </div>
  </div>
</template>

<script setup>
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";
</script>
