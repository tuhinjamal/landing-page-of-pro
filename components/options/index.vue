<template>
  <div
    class="py-[60px] lg:py-[114px] mx-[20px] md:mx-[32px] lg:mx-[120px] 2xl:mx-[240px]"
  >
    <p class="text-center text-[28px] md:text-[40px] font-[700] pb-[41px]">
      Why <span class="text-[#F47920]"> Choose ProHR </span>
    </p>
    <div
      class="grid grid-cols-1 gap-[80px] lg:grid-cols-2 justify-center items-center"
    >
      <leftContent />
      <rightContent />
    </div>
  </div>
</template>

<script setup>
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";
</script>
