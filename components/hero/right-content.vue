<template>
  <div class="flex flex-col justify-center items-center lg:items-end w-full">
    <img
      src="./hero-image.png"
      alt="hero image"
      :class="[
        'w-full h-full object-cover transition-all duration-500 ease-out',
        show.image
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-10 blur-sm',
      ]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref({
  image: false,
});

// smooth rise animation on mount
onMounted(() => {
  setTimeout(() => {
    show.value.image = true;
  }, 400); // delay to match left content
});
</script>
