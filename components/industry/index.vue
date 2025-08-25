<template>
  <section id="industry">
    <div
      class="bg-[#ffffff] mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[240px]"
    >
      <p
        class="text-[22px] font-vina md:text-[40px] 2xl:text-[40px] font-[700] text-center mt-[120px] leading-[120%]"
      >
        <span class="text-[#F47920]"> Industry </span>

        We Serve
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-[40px]"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-[#FEF2E9] border border-gray-100 px-[23px] py-[23px] rounded-2xl hover:shadow-md transition cursor-pointer hover:border-[#F47920]"
        >
          <div class="grid grid-cols-[auto_1fr] gap-x-[20px] items-start">
            <!-- <img
              :src="feature.icon"
              alt="icon"
              class="w-[24px] h-[24px] mb-[10px] mx-auto md:mx-0"
            /> -->
            <div
              class="bg-[#FEF2E9] rounded p-[8px] w-[56px] h-[56px] mb-[24px]"
            >
              <img :src="feature.icon" alt="icon" class="mx-auto md:mx-0" />
            </div>
            <div>
              <!-- </div> -->
              <h3
                class="text-[16px] font-[600] mb-[12px] md:mx-0 text-left leading-[160%]"
              >
                {{ feature.title }}
              </h3>
              <p
                class="text-[13px] md:text-[14px] font-[400] text-[#202A44] mx-auto md:mx-0 text-left leading-[160%]"
              >
                {{ feature.description }}
              </p>
            </div>
          </div>
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
    title: "Retail Chains & Super Market",
    icon: images["./retail.svg"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Logistic & Courier Service",
    icon: images["./logistic.svg"],
    description:
      "Monitor field staff check-ins, delivery schedules, and working hours with GPS-enabled attendance. Improve accountability and optimize logistics workforce management. ",
  },
  {
    title: "Construction & Realestate",
    icon: images["./construction.svg"],
    description:
      "Handle multi-site attendance, project-based shifts, and contractor workforce with ease. Get real-time updates from on-site teams with mobile-based tracking.",
  },
  {
    title: "Coorporate & Tech Companies",
    icon: images["./coorporate.svg"],
    description:
      "Automate HR processes, manage hybrid teams, and simplify payroll with full transparency. Built for fast-paced companies that value efficiency and security. ",
  },
  {
    title: "Garments & Healthcare",
    icon: images["./garments.svg"],
    description:
      "Simplify shift rotations, overtime handling, and mass employee attendance tracking. Designed for industries with large scale and dynamic workforces that impact. ",
  },
  {
    title: "Educational Institute",
    icon: images["./education.svg"],
    description:
      "Manage teacher and staff attendance, leave, payroll, and academic calendars. Bring automation and order to everyday HR tasks in schools and colleges for admission and every documentation",
  },
];
</script>
