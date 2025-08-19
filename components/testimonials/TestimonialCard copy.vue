<template>
  <div
    class="relative bg-white border border-[#F4765E] rounded-lg p-6 flex flex-col gap-4 shadow-sm"
  >
    <!-- Quote Icon -->
    <div
      class="absolute -top-4 left-6 bg-white p-2 border border-[#F4765E] rounded-full"
    >
      <span class="text-[#F4765E] text-2xl font-bold">“</span>
    </div>

    <!-- Quote Text -->
    <p class="text-sm md:text-base text-[#202A44] leading-relaxed">
      {{ testimonial.quote }}
    </p>

    <!-- Footer -->
    <div class="flex items-center gap-4 pt-4">
      <img
        :src="testimonial.avatar"
        :alt="testimonial.name"
        class="w-[60px] h-[60px] rounded-full object-cover border border-[#F4765E]"
      />
      <div>
        <!-- Star Rating -->
        <div class="flex items-center text-[#F4765E] pb-1">
          <template v-for="i in 5" :key="i">
            <svg
              v-if="i <= Math.floor(testimonial.rating)"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
            </svg>
            <svg
              v-else-if="i - testimonial.rating <= 0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stop-color="currentColor" />
                  <stop offset="50%" stop-color="transparent" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half)"
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
            </svg>
          </template>
        </div>

        <!-- Name + Role -->
        <p class="text-sm md:text-base font-semibold">
          {{ testimonial.name }},
        </p>
        <p class="text-xs md:text-sm text-gray-600">
          {{ testimonial.role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: Object,
});
</script>
