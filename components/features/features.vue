<template>
  <section>
    <div
      class="bg-[#ffffff] mx-[20px] md:mx-[32px] lg:mx-[120px] 2xl:mx-[240px]"
    >
      <p
        class="text-[22px] font-vina md:text-[36px] lg:text-[40px] font-[700] text-center mt-[120px] mb-[48px]"
      >
        Features that enhance your
        <span class="text-[#F47920]"> HR process </span>
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-gray-50 border border-gray-100 px-[23px] py-[47px] 2xl:py-[60px] rounded-3xl hover:shadow-md transition font-campton cursor-pointer"
        >
          <!-- <div class="text-red-500 text-3xl mb-4"> -->
          <!-- {{ feature.icon }} -->
          <img
            :src="feature.icon"
            alt="icon"
            class="w-10 h-10 mb-[10px] 2xl:mb-[32px] mx-auto md:mx-0"
          />
          <!-- </div> -->
          <h3
            class="text-[14px] 2xl:text-[24px] font-[600] mb-[12px] mx-auto md:mx-0 text-center md:text-left"
          >
            {{ feature.title }}
          </h3>
          <p
            class="text-[12px] 2xl:text-[16px] font-[400] text-[#202A44] leading-snug mx-auto md:mx-0 text-center md:text-left"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="block bg-[#F47920] mt-[120px]">
      <div class="py-[100px]">
        <p
          class="text-center text-[28px] md:text-[35px] lg:text-[40px] font-[700] text-white"
        >
          Ready to Automate your HR Management?
        </p>
        <img
          src="../../assets/images/play-button.png"
          alt="play button"
          class="mx-auto mt-[48px] w-[90px] h-[90px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const images = import.meta.glob("./*.png", {
  eager: true,
  import: "default",
});
const features = [
  {
    title: "Employee Management",
    icon: images["./recruitment.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "Timesheet Management",
    icon: images["./lifecycle.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "Payroll Management",
    icon: images["./attendance.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "Roster Management",
    icon: images["./leave.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "Leave Management",
    icon: images["./expense.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "Report management",
    icon: images["./performance.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
];
</script>
