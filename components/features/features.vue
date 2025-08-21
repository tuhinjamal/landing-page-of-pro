<template>
  <section id="features">
    <div
      class="bg-[#ffffff] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[240px]"
    >
      <p
        class="text-[22px] font-vina md:text-[36px] lg:text-[40px] font-[700] text-center mt-[120px] mb-[48px] leading-[120%]"
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
          class="bg-white border border-[#E9EAEC] px-[23px] py-[47px] rounded-3xl hover:shadow-md hover:border-[#F47920] transition cursor-pointer"
        >
          <div class="bg-[#FEF2E9] rounded p-[8px] w-[56px] h-[56px] mb-[24px]">
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
    <div class="block bg-[#F47920] mt-[120px]">
      <div class="py-[60px] lg:py-[100px]">
        <p
          class="text-center text-[28px] md:text-[35px] lg:text-[40px] font-[700] text-white leading-[120%]"
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
    icon: images["./employee.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard.  ",
  },
  {
    title: "Timesheet Management",
    icon: images["./timesheet.png"],
    description:
      "Track work hours with accuracy. Let your team submit timesheets, monitor progress, and stay on top of every billable/non-billable hour with ease.",
  },
  {
    title: "Geo-Fencing",
    icon: images["./geo.png"],
    description:
      "Track your employee attendance with location based geo-fencing process and get automated timesheet.",
  },
  {
    title: "Payroll Management",
    icon: images["./payroll.png"],
    description:
      "Automate salary calculations, generate payslips, manage increments, and ensure timely disbursements — all under a secure and reliable payroll engine.",
  },
  {
    title: "Roster Management",
    icon: images["./roster.png"],
    description:
      "Manage your employee database effortlessly. Personal info, job details, department-wise breakdowns, status updates — all from a centralized HR dashboard. ",
  },
  {
    title: "With & Without Roster",
    icon: images["./no-roster.png"],
    description:
      "Manage and take your employee attendance with & without roster. A roster free employee timesheet will be created automatically as like rostered employees.",
  },
  {
    title: "Leave Management",
    icon: images["./leave.png"],
    description:
      "Digital leave applications made easy. Configure leave policies, track balances, approve requests from mobile or web, and maintain records seamlessly. ",
  },
  {
    title: "Report management",
    icon: images["./report.png"],
    description:
      "From attendance logs to payroll summaries, get detailed reports instantly. Custom filters and export options available for all modules and individual goals.",
  },
  {
    title: "Face Recognition Mobile App",
    icon: images["./face.png"],
    description:
      "Register your employee face and give attendance with & without roster through employee personal device or office recognized device.",
  },
];
</script>
