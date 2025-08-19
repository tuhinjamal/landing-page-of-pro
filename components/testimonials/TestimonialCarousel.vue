<template>
  <section id="testimonials" class="py-[60px] lg:py-[120px] bg-[#FAFAFA]">
    <div class="text-center pb-[40px] md:pb-[48px]">
      <p class="text-[25px] md:text-[40px] font-[700] text-[#000000] font-vina">
        <span class="text-[#F47920]">Testimonial </span> from clients
      </p>
    </div>

    <!-- Carousel -->
    <div
      class="ml-0 md:ml-0 lg:ml-[120px] xl:ml-[120px] 2xl:ml-[240px] relative pb-[40px] px-[20px] md:px-[32px] lg:px-0 ]"
    >
      <div ref="carouselWrapper" class="overflow-hidden relative">
        <div
          ref="track"
          class="flex gap-6 transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${offset}px)` }"
        >
          <TestimonialCard
            v-for="(t, i) in carouselItems"
            :key="i"
            :testimonial="t"
            class="shrink-0"
            :style="{ width: `${cardWidth}px` }"
          />
        </div>
      </div>
    </div>
    <!-- Controls -->
    <div
      class="grid grid-cols-2 md:grid-cols-3 items-center gap-4 px-[20px] xl:px-[120px] 2xl:px-[240px]"
    >
      <div class="text-[24px] text-gray-500 font-campton italic">
        <span class="text-black font-bold">{{ displayIndex + 1 }}</span> /
        <span>{{ originalCount }}</span>
      </div>

      <div class="flex justify-center items-center gap-2">
        <span
          v-for="i in originalCount"
          :key="i"
          :class="[
            'h-2',
            displayIndex === i - 1
              ? 'bg-black w-6 rounded-sm'
              : 'bg-gray-300 w-2 rounded-full',
          ]"
        />
      </div>

      <div
        class="hidden md:flex items-center justify-end gap-2 pr-0 2xl:pr-[32px]"
      >
        <button
          @click="scrollPrev"
          class="w-[62px] h-[62px] text-[24px] rounded-full cursor-pointer bg-[#E9EAEC] hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center group"
        >
          <img
            src="./arrow_black.svg"
            alt="arrow"
            class="rotate-180 block group-hover:hidden"
          />
          <img
            src="./arrow_white.svg"
            alt="arrow"
            class="hidden group-hover:block"
          />
        </button>

        <button
          @click="scrollNext"
          class="w-[62px] h-[62px] text-[24px] rounded-full cursor-pointer bg-[#E9EAEC] hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center group"
        >
          <img
            src="./arrow_black.svg"
            alt="arrow"
            class="block group-hover:hidden"
          />
          <img
            src="./arrow_white.svg"
            alt="arrow"
            class="hidden group-hover:block rotate-180"
          />
        </button>
      </div>
    </div>
    <div class="flex md:hidden items-center justify-center gap-2 pt-[32px]">
      <button
        @click="scrollPrev"
        class="w-[40px] h-[40px] text-[24px] rounded-full cursor-pointer bg-[#E9EAEC] hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center group"
      >
        <img
          src="./arrow_black.svg"
          alt="arrow"
          class="rotate-180 block group-hover:hidden w-[12px] h-[12px]"
        />
        <img
          src="./arrow_white.svg"
          alt="arrow"
          class="hidden group-hover:block w-[12px] h-[12px]"
        />
      </button>

      <button
        @click="scrollNext"
        class="w-[40px] h-[40px] text-[24px] rounded-full cursor-pointer bg-[#E9EAEC] hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center group"
      >
        <img
          src="./arrow_black.svg"
          alt="arrow"
          class="block group-hover:hidden w-[12px] h-[12px]"
        />
        <img
          src="./arrow_white.svg"
          alt="arrow"
          class="hidden group-hover:block rotate-180 w-[12px] h-[12px]"
        />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import TestimonialCard from "./TestimonialCard.vue";

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "I found very efficient!",
    name: "David William",
    avatar: "https://i.pravatar.cc/100?img=1",
    role: "CEO, Google",
    rating: 4.5,
  },
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "I found very efficient!",
    name: "David William",
    avatar: "https://i.pravatar.cc/100?img=2",
    role: "CEO, Google",
    rating: 5,
  },
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "I found very efficient!",
    name: "David William",
    avatar: "https://i.pravatar.cc/100?img=3",
    role: "CEO, Google",
    rating: 4,
  },
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    title: "I found very efficient!",
    name: "David William",
    avatar: "https://i.pravatar.cc/100?img=4",
    role: "CEO, Google",
    rating: 4.8,
  },
];

const originalCount = testimonials.length;
const track = ref(null);
const carouselWrapper = ref(null);
const cardGap = 24;
const currentIndex = ref(originalCount); // Start from first original (after clones)
const interval = ref(null);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024
);

const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

// ✅ Updated breakpoint logic
const cardsPerView = computed(() => {
  if (windowWidth.value >= 1440) return 3.25; // special case for >=1440px
  if (windowWidth.value < 640) return 1;
  if (windowWidth.value < 1024) return 2;
  return 2.5;
});

const visibleCount = computed(() => Math.ceil(cardsPerView.value));

const carouselItems = computed(() => {
  return [
    ...testimonials.slice(-visibleCount.value),
    ...testimonials,
    ...testimonials.slice(0, visibleCount.value),
  ];
});

const cardWidth = computed(() => {
  const wrapper = carouselWrapper.value;
  if (!wrapper) return 0;
  return (
    (wrapper.clientWidth - cardGap * (cardsPerView.value - 1)) /
    cardsPerView.value
  );
});

const offset = computed(() => {
  return currentIndex.value * (cardWidth.value + cardGap);
});

const scrollNext = () => {
  currentIndex.value++;
  if (currentIndex.value >= originalCount + visibleCount.value) {
    setTimeout(() => {
      currentIndex.value = visibleCount.value;
      track.value.style.transition = "none";
      track.value.style.transform = `translateX(-${offset.value}px)`;
      void track.value.offsetWidth; // force reflow
      track.value.style.transition = "";
    }, 700);
  }
};

const scrollPrev = () => {
  currentIndex.value--;
  if (currentIndex.value < visibleCount.value) {
    setTimeout(() => {
      currentIndex.value = originalCount + visibleCount.value - 1;
      track.value.style.transition = "none";
      track.value.style.transform = `translateX(-${offset.value}px)`;
      void track.value.offsetWidth;
      track.value.style.transition = "";
    }, 700);
  }
};

const startAutoScroll = () => {
  interval.value = setInterval(scrollNext, 4000);
};

const stopAutoScroll = () => {
  clearInterval(interval.value);
};

const displayIndex = computed(() => {
  return (currentIndex.value - visibleCount.value) % originalCount;
});

onMounted(() => {
  updateWindowWidth();
  window.addEventListener("resize", updateWindowWidth);
  startAutoScroll();
});

onBeforeUnmount(() => {
  stopAutoScroll();
  window.removeEventListener("resize", updateWindowWidth);
});
</script>
