<template>
  <section class="bg-white">
    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="border-t border-b border-gray-200 overflow-hidden"
    >
      <!-- Question -->
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-start md:items-center text-left px-4 py-4 font-[600] text-[12px] md:text-[16px] font-campton hover:bg-gray-50 not-italic gap-4"
      >
        <span class="cursor-pointer">{{ item.question }}</span>
        <span
          :class="
            activeIndex === index
              ? 'text-[#F6917E] transition-colors duration-300 ease-in-out h-[12px] w-[12px] md:h-[24px] md:w-[24px] border border-[#F6917E] rounded-full flex items-center justify-center'
              : 'text-[#F6917E] h-[12px] w-[12px] md:h-[24px] md:w-[24px]'
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
          class="px-4 pb-4 text-[14px] font-[400] text-[#4D5569] leading-relaxed font-campton"
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
    question:
      "Does PROHR integrate with my existing payroll and accounting systems",
    answer:
      "PROHR is an all-in-one, cloud-based Human Resource Management (HRM) solution. It's designed for small, medium, and large organisations looking to simplify HR tasks like employee data management, leave requests, payroll integration, performance tracking, and reporting. Whether you're a growing startup or an established company, PROHR helps automate HR processes and improve employee experience.",
  },
  {
    question: "Is my employees' data secure with PROHR?",
    answer:
      "Yes. PROHR uses enterprise-grade security standards, encryption, and secure cloud infrastructure.",
  },
  {
    question: "Can PROHR handle remote teams and multiple office locations?",
    answer:
      "Absolutely. PROHR is accessible from anywhere and supports multiple branches and remote users.",
  },
  {
    question: "How long does it take to get started with PROHR?",
    answer:
      "Typically within a few days depending on the size and complexity of your team’s data.",
  },
  {
    question: "Do I need technical skills to set up and use PROHR?",
    answer:
      "No, PROHR is built to be user-friendly and does not require technical expertise to operate.",
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
