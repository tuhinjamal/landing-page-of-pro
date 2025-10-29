<template>
  <div>
    <div class="block combined-bg px-[20px]">
      <div class="py-[100px] flex flex-col items-center">
        <p
          class="text-center text-[28px] lg:text-[40px] font-[700] text-[#FFB5AF]"
        >
          Ready to Automate your <br />
          HR Management?
        </p>

        <button
          class="px-[24px] py-[12px] bg-[#F25323] text-[16px] font-semibold rounded-lg hover:bg-[#DE6E1D] transition text-[#FFFFFF] hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-2 justify-center items-center w-full md:w-auto leading-[160%]"
          @click="isOpenModal = true"
        >
          <p class="">Get a free demo</p>
          <img
            src="../../assets/images/right-angle.png"
            alt="arrow"
            class="mt-1"
          />
        </button>
      </div>
    </div>
    <footer
      class="py-[40px] md:pb-[60px] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[360px] text-white px-4 mt-[60px]"
    >
      <div class="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
        <!-- Left Column: Logo + Description -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div class="flex items-center gap-2 mb-3 cursor-pointer">
            <!-- <img src="./logo.png" alt="ProHR Logo" class="w-12 h-12" /> -->
            <img
              src="./footer-logo.png"
              alt="ProHR Logo"
              class="w-[150px] h-[30px]"
            />
          </div>
          <p class="text-[14px] font-[400] leading-[180%] lg:pr-[100px]">
            This HR and Attendance Management System is developed by Inflack to
            simplify and streamline complex HR operations for modern businesses.
            With features like cloud-based attendance, automated payroll, shift
            and leave management, and real-time reporting, it brings greater
            accuracy and control to every step of the HR process.
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left leading-[180%]"
        >
          <div class="">
            <ul class="cursor-pointer">
              <li>
                <h4 class="font-[600] text-[14px] text-[#F25323] mb-3">Menu</h4>
              </li>
              <li
                class="text-[14px] font-[400]"
                @click.prevent="scrollTo('industry')"
              >
                Industry We Serve
              </li>
              <li
                class="text-[14px] font-[400]"
                @click.prevent="scrollTo('features')"
              >
                Features
              </li>
              <li
                class="text-[14px] font-[400]"
                @click.prevent="scrollTo('faq')"
              >
                FAQ
              </li>
            </ul>
          </div>
          <div class="">
            <ul class="cursor-pointer">
              <li>
                <h4 class="font-[600] text-[14px text-[#F25323] mb-3">
                  About Us
                </h4>
              </li>
              <li class="text-[14px] font-[400]">
                <a href="https://inflack.com/" target="_blank">Our Company</a>
              </li>
              <li class="text-[14px] font-[400]">
                <a href="https://inflack.com/" target="_blank">Contact Us</a>
              </li>
              <li class="text-[14px] font-[400]">
                <a href="https://inflack.com/blog/" target="_blank">Blog</a>
              </li>
            </ul>
          </div>

          <div class="">
            <ul class="space-y-2 cursor-pointer">
              <li class="flex items-center gap-2">
                <h4 class="font-[600] text-[14px text-[#F25323]">
                  Social Media
                </h4>
              </li>
              <li class="flex items-center gap-2 text-[14px] font-[400]">
                <img src="./facebook.svg" alt="" />

                <a
                  href="https://web.facebook.com/inflack/?_rdc=1&_rdr#"
                  target="_blank"
                  >Facebook</a
                >
              </li>
              <li class="flex items-center gap-2 text-[14px] font-[400]">
                <img src="./insta.svg" alt="" />
                <a
                  href="https://www.instagram.com/inflack_limited"
                  target="_blank"
                  >Instagram</a
                >
              </li>
              <li class="flex items-center gap-2 text-[14px] font-[400]">
                <img src="./x.svg" alt="" />

                <a href="https://x.com/inflack" target="_blank"
                  >X (Fr Twitter)</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <Modal :isOpen="isOpenModal" @close="isOpenModal = false" />
  </div>
</template>

<script setup>
import Modal from "../modal";

const isOpenModal = ref(false);
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    activeSection.value = id;
    isOpen.value = false; // Close mobile nav
  }
}
</script>

<style scoped></style>
