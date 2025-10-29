<template>
  <div
    id="faq"
    class="py-[60px] lg:my-[85px] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[360px] border-gray-200"
  >
    <div
      class="grid grid-cols-1 gap-[80px] justify-center items-start bg-[#F9F9F9] px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] py-[20px] md:py-[30px] lg:py-[60px] xl:py-[80px]"
    >
      <leftContent class="order-2 lg:order-2" />
      <!-- <rightContent class="order-1 lg:order-1" /> -->
    </div>
  </div>
</template>

<script setup>
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";
</script>
