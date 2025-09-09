<template>
  <section id="testimonials" class="py-[60px] lg:py-[120px] bg-[#FEF2E9]">
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
      class="hidden md:grid grid-cols-2 md:grid-cols-3 items-center gap-4 px-[20px] xl:px-[120px] 2xl:px-[240px]"
    >
      <div class="text-[24px] text-gray-500 italic">
        <span class="text-black font-bold"
          >{{
            displayIndex + 1 < 10 ? `0${displayIndex + 1}` : displayIndex + 1
          }}
        </span>
        /
        <span>{{
          originalCount < 10 ? `0${originalCount}` : originalCount
        }}</span>
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

      <!-- Desktop Buttons -->
      <div
        class="hidden md:flex items-center justify-end gap-2 pr-0 2xl:pr-[32px]"
      >
        <!-- Prev -->

        <button
          @click="scrollPrev"
          :class="[
            'w-[62px] h-[62px] rounded-full flex items-center justify-center group transition-colors duration-300',
            lastDirection === 'prev'
              ? 'bg-black text-white'
              : 'bg-[#E9EAEC] hover:bg-black hover:text-white',
          ]"
        >
          <img
            v-if="lastDirection !== 'prev'"
            src="./arrow_black.svg"
            alt="arrow"
            class="rotate-180"
          />
          <img
            v-if="lastDirection === 'prev'"
            src="./arrow_white.svg"
            alt="arrow"
          />
        </button>

        <!-- Next -->
        <button
          @click="scrollNext"
          :class="[
            'w-[62px] h-[62px] rounded-full flex items-center justify-center group transition-colors duration-300',
            lastDirection === 'next'
              ? 'bg-black text-white'
              : 'bg-[#E9EAEC] hover:bg-black hover:text-white',
          ]"
        >
          <img
            v-if="lastDirection !== 'next'"
            src="./arrow_black.svg"
            alt="arrow"
            class=""
          />
          <img
            v-if="lastDirection === 'next'"
            src="./arrow_white.svg"
            alt="arrow"
            class="rotate-180"
          />
        </button>
      </div>
    </div>

    <div class="text-center md:hidden">
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
    </div>
    <!-- Mobile Buttons -->
    <div
      class="flex md:hidden justify-between items-center px-4 gap-2 pt-[32px]"
    >
      <div class="text-[24px] text-gray-500 italic">
        <span class="text-black font-bold">{{
          displayIndex + 1 < 10 ? `0${displayIndex + 1}` : displayIndex + 1
        }}</span>
        /
        <span>{{ originalCount }}</span>
      </div>
      <div class="flex justify-between items-center gap-4">
        <button
          @click="scrollPrev"
          :class="[
            'w-[40px] h-[40px] rounded-full flex items-center justify-center group transition-colors duration-300',
            lastDirection === 'prev'
              ? 'bg-black text-white'
              : 'bg-[#E9EAEC] hover:bg-black hover:text-white',
          ]"
        >
          <img
            v-if="lastDirection !== 'prev'"
            src="./arrow_black.svg"
            alt="arrow"
            class="rotate-180 w-[12px] h-[12px]"
          />
          <img
            v-if="lastDirection === 'prev'"
            src="./arrow_white.svg"
            alt="arrow"
            class="w-[12px] h-[12px]"
          />
        </button>

        <button
          @click="scrollNext"
          :class="[
            'w-[40px] h-[40px] rounded-full flex items-center justify-center group transition-colors duration-300',
            lastDirection === 'next'
              ? 'bg-black text-white'
              : 'bg-[#E9EAEC] hover:bg-black hover:text-white',
          ]"
        >
          <img
            v-if="lastDirection !== 'next'"
            src="./arrow_black.svg"
            alt="arrow"
            class="w-[12px] h-[12px]"
          />
          <img
            v-if="lastDirection === 'next'"
            src="./arrow_white.svg"
            alt="arrow"
            class="rotate-180 w-[12px] h-[12px]"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import TestimonialCard from "./TestimonialCard.vue";
const images = import.meta.glob("./images/*.png", {
  eager: true,
  import: "default",
});

const testimonials = [
  {
    quote:
      "PeopleOp made it so easy to manage our team across departments. We save hours every week on attendance and payroll.",

    name: "Nazmul Sheikh",
    avatar: images["./images/shajgoj.png"],
    role: "Director , Shajgoj ",
    rating: 4.5,
  },
  {
    quote:
      "We love how smooth and user-friendly PeopleOp is. Our HR work is now faster and fully organized.",

    name: "Sinthia Islam",
    avatar: images["./images/Skin_Cafe.png"],
    role: "Co-Founder, The Skin Cafe",
    rating: 5,
  },
  {
    quote:
      "Managing teachers and staff attendance used to be a mess. PeopleOp solved it all in one place! ",

    name: "Abdul Hai",
    avatar: images["./images/nursing.png"],
    role: "Director , Bangladesh Nursing & Midwifery",
    rating: 4,
  },
  {
    quote:
      "With PeopleOp, we now have full control over shifts, leaves, and employee records. Great system and great support.",

    name: "Gayathri Ganesh",
    avatar: images["./images/grypas.png"],
    role: "Human Resource Manager, Grypas ",
    rating: 4.8,
  },
  {
    quote:
      "PeopleOp helped us reduce manual errors in salary and timesheets. It’s simple, smart, and works perfectly for us. ",

    name: "Nazmul Hasan",
    avatar: images["./images/Apacon.png"],
    role: "CEO , Apacon  ",
    rating: 4.8,
  },
  {
    quote:
      "We use PeopleOp across all our sites, and it works like magic. It saves us time and keeps everything on track.",

    name: "Mohammad Mamun Serajul Islam",
    avatar: images["./images/Just_West.png"],
    role: "Just West , Managing Director  ",
    rating: 4.8,
  },
];

const originalCount = testimonials.length;
const track = ref(null);
const carouselWrapper = ref(null);
const cardGap = 24;
const currentIndex = ref(originalCount); // Start from first original (after clones)
const interval = ref(null);
const lastDirection = ref("next"); // ✅ track active button
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024
);

const updateWindowWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

const cardsPerView = computed(() => {
  if (windowWidth.value >= 1440) return 3.25;
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
  lastDirection.value = "next"; // ✅
  currentIndex.value++;
  if (currentIndex.value >= originalCount + visibleCount.value) {
    setTimeout(() => {
      currentIndex.value = visibleCount.value;
      track.value.style.transition = "none";
      track.value.style.transform = `translateX(-${offset.value}px)`;
      void track.value.offsetWidth;
      track.value.style.transition = "";
    }, 700);
  }
};

const scrollPrev = () => {
  lastDirection.value = "prev"; // ✅
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
