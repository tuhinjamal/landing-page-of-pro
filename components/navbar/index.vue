<template>
  <!-- <nav class="w-full text-black py-[20px] md:py-[24px] bg-[#FEF2E9]"> -->
  <nav
    class="w-full text-black py-[20px] md:py-[24px] bg-[#FEF2E9]/75 backdrop-blur-md"
  >
    <div
      class="flex items-center justify-between mx-[20px] md:mx-[32px] lg:mx-[120px] 2xl:mx-[240px]"
    >
      <!-- Logo -->
      <div
        class="text-2xl font-bold tracking-wider flex items-center space-x-1 cursor-pointer"
      >
        <!-- <img src="./logo.svg" alt="ProHR Logo" class="h-8" /> -->
        <img src="../../assets/images/nav-logo-pro-hr.png" alt="" />
      </div>

      <!-- Hamburger Icon -->
      <button
        @click="isOpen = !isOpen"
        class="lg:hidden focus:outline-none border-1 border-[#F47920] text-[#F47920]"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-[32px] text-[16px] font-[500]">
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('home')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'home',
            }"
            class="transition-colors hover:text-[#F47920]"
            >Overview</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('features')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'features',
            }"
            class="transition-colors hover:text-[#F47920]"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('industry')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'industry',
            }"
            class="transition-colors hover:text-[#F47920]"
            >Industry we Serve</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('options')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'options',
            }"
            class="transition-colors hover:text-[#F47920]"
            >Why Choose ProHR </a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('testimonials')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'testimonials',
            }"
            class="transition-colors hover:text-[#F47920]"
            >About</a
          >
        </li>
      </ul>

      <!-- CTA Buttons -->
      <div class="hidden lg:flex">
        <button
          class="px-[24px] py-[11px] bg-[#F47920] text-[14px] font-semibold rounded-lg hover:bg-[#ff9778] transition text-[#0D121D] hover:text-white cursor-pointer grid grid-cols-[1fr_auto] gap-[4px] justify-center items-center leading-[160%]"
        >
          <p>Get a free demo</p>
          <img src="../../assets/images/arrow-45-deg.png" alt="" />
        </button>
      </div>
    </div>

    <!-- Mobile/Tablet Menu -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="lg:hidden px-4 pb-4 space-y-3 text-[16px] font-[500] bg-[#F6F1F0]"
      >
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('home')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'home',
            }"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('features')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'features',
            }"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('industry')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'industry',
            }"
            >Products & Services</a
          >
        </li>
        <li>
          <a
            href="#"
            @click.prevent="scrollTo('options')"
            :class="{
              'text-[#F47920] font-[600]': activeSection === 'options',
            }"
            >About us</a
          >
        </li>

        <li>
          <!-- <button
            class=" text-[16px] font-[500] w-full text-left bg-[#F47920] px-[30px] py-[10px] rounded hover:bg-[#ff9778] transition text-[#0D121D] hover:text-white"
          >
            Get a free demo
          </button> -->
          <button
            class="px-[24px] py-[11px] bg-[#F47920] text-[14px] font-semibold rounded-lg hover:bg-[#ff9778] transition text-[#0D121D] hover:text-white cursor-pointer grid grid-cols-[1fr_auto] gap-[4px] justify-center items-center leading-[160%]"
          >
            <p>Get a free demo</p>
            <img src="../../assets/images/arrow-45-deg.png" alt="" />
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const activeSection = ref("home");

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = id;
    isOpen.value = false; // Close mobile nav
  }
}

function handleScroll() {
  const sections = ["features", "industry", "options", "testimonials"];
  let found = false;
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
        activeSection.value = id;
        found = true;
        break;
      }
    }
  }
  if (!found) {
    activeSection.value = "home";
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
