<template>
  <section class="bg-white mx-0 my-0 px-0 py-0">
    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="border-t border-b border-gray-200 overflow-hidden mx-0 my-0 px-0 py-0"
    >
      <!-- Question -->
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-start md:items-center text-left px-4 py-4 font-[600] text-[12px] md:text-[16px] hover:bg-gray-50 not-italic gap-4"
      >
        <span class="cursor-pointer leading-[160%]">{{ item.question }}</span>
        <span
          :class="
            activeIndex === index
              ? 'text-[#F6917E] bg-[#F6917E]/30 backdrop-blur-md transition-colors duration-300 ease-in-out h-[12px] w-[12px] md:h-[24px] md:w-[24px] rounded-full flex items-center justify-center'
              : 'text-black h-[12px] w-[12px] md:h-[24px] md:w-[24px]'
          "
          class="text-xl font-bold cursor-pointer"
        >
          {{ activeIndex === index ? "×" : "+" }}
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "Is ProHR suitable for small businesses? ",
    answer:
      "Yes, ProHR is built to support businesses of all sizes — from small teams to large companies with multiple locations.",
  },
  {
    question: "Can I integrate this sytem with attendance hardware? ",
    answer: "Yes, this system is ready to integrate any Attendance hardwre.",
  },
  {
    question: "How long does it take to set up ProHR for my company? ",
    answer:
      "Setup is quick! Depending on your team size, it usually takes 2–5 working days for complete onboarding and training.",
  },
  {
    question: "Can I customize features based on my company needs? ",
    answer:
      "Yes, ProHR is flexible. We can tailor modules like shifts, timesheets, and payroll according to your company policies",
  },
  {
    question: "Does PROHR offer customisable reports and dashboards?",
    answer:
      "Yes, PROHR provides a range of customizable reports and dashboards to help you gain insights from your HR data.",
  },
  {
    question: "Is there a mobile app for employees and managers?",
    answer:
      "Yes, PROHR includes a responsive web app and native apps for Android and iOS.",
  },
  {
    question: "What kind of customer support does PROHR offer?",
    answer:
      "We offer chat, email, and phone support, along with onboarding and training materials.",
  },
  {
    question: "Does PROHR offer customisable reports and dashboards?",
    answer:
      "Yes, you can customize fields, filters, formats, and layouts to fit your HR needs.",
  },
  {
    question: "How much does PROHR cost, and are there different plans?",
    answer:
      "We offer flexible pricing based on company size and features. Contact us for a quote.",
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
