<template>
  <section id="features">
    <div
      class="bg-[#ffffff] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[360px]"
    >
      <p class="text-center text-[16px] mt-[120px]">Special Features</p>
      <p
        class="text-[22px] font-vina md:text-[36px] lg:text-[40px] font-[700] text-center mb-[48px] leading-[120%] mt-[16px]"
      >
        Features that enhance your
        <span class="text-[#F25323] font-[700]"> HR process </span>
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white border border-[#E9EAEC] px-[23px] py-[47px] rounded-3xl hover:shadow-md hover:border-[#F25323] transition cursor-pointer"
        >
          <div class="rounded-full w-[64px] h-[64px] mb-[24px]">
            <img :src="feature.icon" alt="icon" class="mx-auto md:mx-0" />
          </div>

          <h3
            class="text-[16px] md:text-[24px] font-[600] mb-[16px] mx-auto md:mx-0 text-center md:text-left leading-[160%]"
          >
            {{ feature.title }}
          </h3>
          <p
            class="text-[14px] font-[400] text-[#202A44] mx-auto md:mx-0 text-center md:text-left leading-[160%] mt-[16px]"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = import.meta.glob("./*.svg", {
  eager: true,
  import: "default",
});
const features = [
  {
    title: "AI-Face Recognition",
    icon: images["./ai.svg"],
    description:
      "Register your employee face and give attendance with & without roster through employee personal device or office recognized device.",
  },
  {
    title: "Geo-Fencing",
    icon: images["./geo.svg"],
    description:
      "Track your employee attendance with location based geo-fencing process and get automated timesheet.",
  },
  {
    title: "PaWorkforce Management",
    icon: images["./work.svg"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },

  {
    title: "Payroll Management",
    icon: images["./payroll.svg"],
    description:
      "Get your payslip automatted with salary and tax calculation, increaments, customized deduction & timely disbursement.",
  },
  {
    title: "Roster Management",
    icon: images["./roster.svg"],
    description:
      "Create and assign rosters, manage shift rotations, and generate real-time reports to ensure smooth workforce scheduling with zero confusion.",
  },
  {
    title: "Timesheet Management",
    icon: images["./timesheet.svg"],
    description:
      "Track work hours with accuracy. Let your team submit timesheets, monitor progress, and stay on top of every billable/non-billable hour with ease.",
  },
  {
    title: "Roster free Attendance",
    icon: images["./no-roster.svg"],
    description:
      "Manage and take your employee attendance with & without roster. A roster free employee timesheet will be created automatically as like rostered employees.",
  },

  {
    title: "Leave Management",
    icon: images["./leave.svg"],
    description:
      "Digital leave applications made easy. Configure leave policies, track balances, approve requests from mobile or web, and maintain records seamlessly. ",
  },
  {
    title: "Report management",
    icon: images["./report.svg"],
    description:
      "From attendance logs to payroll summaries, get detailed reports instantly. Custom filters and export options available for all modules and individual goals.",
  },
];
</script>
