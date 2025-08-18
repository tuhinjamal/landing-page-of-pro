<template>
  <div
    class="grid grid-cols-1 gap-[80px] lg:grid-cols-2 py-[60px] lg:py-[120px] 2xl:mx-[240px] justify-center items-center mx-[20px] md:mx-[32px] lg:mx-[120px]"
  >
    <leftContent class="order-2 lg:order-1" />
    <rightContent class="order-1 lg:order-2" />
  </div>
</template>

<script setup>
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";
</script>
