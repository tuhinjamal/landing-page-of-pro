<template>
  <div class="">
    <p
      class="text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[120%]"
    >
      Committed to
      <span class="text-[#F47920]"> Secure Data </span>
      Management
    </p>

    <div class="">
      <div
        class="grid grid-cols-[auto_1fr] gap-4 justify-center items-center w-full mt-[16px]"
      >
        <p class="text-[#0D121D] text-[14px] font-[400] leading-[160%]">
          ProHR ensures the highest standards of employee data protection
          through multi-layered security measures. Built on a secure cloud
          infrastructure, ProHR leverag -es Firewalla, Cloudflare, and static
          IP–based security protocols, creating a robust three-layer defense
          system against breaches. 
        </p>
      </div>
    </div>
    <section class="mt-[40px]">
      <div v-for="(item, index) in faqs" :key="index" class="">
        <!-- Question -->
        <button
          @click="toggle(index)"
          class="w-full flex justify-between items-start md:items-center text-left py-4 font-[600] text-[12px] md:text-[16px] not-italic gap-4"
        >
          <span class="cursor-pointer leading-[160%] justify-center flex gap-4"
            ><img src="./right-arrow.png" alt="" /> {{ item.question }}</span
          >
          <span
            :class="
              activeIndex === index
                ? 'transition-colors duration-300 ease-in-out h-[12px] w-[12px] md:h-[24px] md:w-[24px] rounded-full flex items-center justify-center'
                : 'text-black h-[12px] w-[12px] md:h-[24px] md:w-[24px]'
            "
            class="text-xl font-bold cursor-pointer"
          >
            <template v-if="activeIndex === index">
              <img src="./arrow.png" alt="up arrow" class="rotate-180" />
            </template>
            <template v-else>
              <img src="./arrow.png" alt="up arrow" />
            </template>
          </span>
        </button>

        <!-- Answer -->
        <transition name="accordion">
          <div
            v-if="activeIndex === index"
            class="leading-[120%] px-4 pb-4 text-[14px] font-[400] text-[#4D5569] leading-relaxed"
          >
            {{ item.answer }}
          </div>
        </transition>
        <hr v-if="index == 0" class="text-gray-200" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "Employee Data Security",
    answer:
      "As a comprehensive HR solution, ProHR safeguards all confidential employee information within a protected, firewall-secured environment. Every piece of data is encrypted, stored, and managed with precision — ensuring compliance, preventing leaks, and maintaining trust. ",
  },
  {
    question: "Secure and Reliable Platform",
    answer:
      "With ProHR, organizations gain a secure and reliable platform that not only protects sensitive information but also contribu-tes to smoother compliance processes and enhanced employee confidence. ",
  },
];
</script>

<style scoped>
/* Accordion transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-6px);
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px; /* enough to fit the content */
  transform: translateY(0);
}
</style>
