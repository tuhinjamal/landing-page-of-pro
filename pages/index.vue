<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <div class="bg-[#FEF2E9] z-10">
      <Hero />
    </div>
    <Features />
    <Automate />
    <div class="bg-[#FEF2E9] m-0 p-0">
      <Roster />
    </div>
    <Options />

    <div class="bg-[#FEF2E9] m-0 p-0">
      <Security />
    </div>
    <Industry />

    <Faq />
    <div class="mx-0 my-0 px-0 py-0 z-10">
      <Testimonials />
    </div>
    <div class="bg-[#022235]">
      <Footer />
      <div
        class="flex flex-col md:flex-row justify-center items-center md:gap-[100px] text-[14px] border-[#4D5569] border-t py-6 border-b text-white"
      >
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Cache Policy</p>
        <p>FAQ</p>
      </div>
      <p
        class="text-center text-sm font-[500] font-[ 'Campton'] text-[12px] cursor-pointer py-6 text-white"
      >
        Copyright ©2025 | Inflack Limited
      </p>
    </div>
    <div>
      <a
        href="https://wa.me/8801888268886?text=Hi%20I%20am%20interested%20in%20your%20services"
        class="fixed bottom-24 right-6 z-[100] bg-green-500 rounded-full p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./whatsapp.svg" alt="whatsapp" />
      </a>
      <!-- scroll to top -->
      <button
        v-if="showButton"
        class="fixed bottom-6 right-6 z-[100] bg-[#F47920] rounded-full p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110"
        @click="scrollToTop"
      >
        <img src="./scroll.svg" alt="scroll to top" />
      </button>
    </div>
  </div>
</template>
<script setup>
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Features from "~/components/features/features.vue";
import Automate from "~/components/automate/index.vue";
import Roster from "~/components/roster/index.vue";
import Security from "~/components/security/index.vue";
import Options from "~/components/options/index.vue";
import Testimonials from "~/components/testimonials/TestimonialCarousel.vue";
import Industry from "~/components/industry/index.vue";
import Faq from "~/components/faq/index.vue";
import Footer from "~/components/footer/footer.vue";
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 1000;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
