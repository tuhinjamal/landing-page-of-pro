<template>
  <div class="relative bg-[#FFFFFF] rounded-2xl shadow-sm w-[400px] h-[334px]">
    <div
      class="mt-[32px] ml-[31px] bg-gray-100 h-[56px] w-[56px] rounded-full flex justify-center items-center text-center"
    >
      <img
        src="../../assets/images/double-quote.png"
        alt=""
        class="px-[16px] py-[16px]"
      />
    </div>

    <!-- Quote Text -->
    <p
      class="text-[12px] lg:text-[16px] font-[400] md:text-base text-[#202A44] leading-[160%] mx-[31px] my-[32px] line-clamp-2"
    >
      {{ testimonial.quote }}
    </p>

    <!-- Footer -->
    <div
      class="flex items-center gap-[24px] leading-[160%] mx-[31px] my-[32px]"
    >
      <img
        :src="testimonial.avatar"
        :alt="testimonial.name"
        class="w-[72px] h-[72px] rounded-full object-cover border border-[#F4765E]"
      />
      <div>
        <!-- Star Rating -->
        <div class="flex gap-[4px] items-center text-[#F47920] pb-[8px]">
          <template v-for="i in 5" :key="i">
            <!-- full star -->
            <svg
              v-if="i <= Math.floor(testimonial?.rating ?? 0)"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
            </svg>

            <!-- half star -->
            <svg
              v-else-if="testimonial?.rating && i - testimonial.rating <= 0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <defs>
                <!-- use unique id to avoid duplicate gradients if looped -->
                <linearGradient :id="`half-${i}`">
                  <stop offset="50%" stop-color="currentColor" />
                  <stop offset="50%" stop-color="transparent" />
                </linearGradient>
              </defs>
              <path
                :fill="`url(#half-${i})`"
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.897l-7.335 3.868 1.401-8.173L.132 9.21l8.2-1.192z"
              />
            </svg>

            <!-- empty star -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
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
        <p
          class="text-[16px] md:text-base font-[400] text-[#0D121D] leading-[160%]"
        >
          {{ testimonial.name }},
        </p>
        <p class="text-[12px] font-[500] text-[#0D121D] leading-[160%]">
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
