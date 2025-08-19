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
          class="bg-[#FEF2E9] border border-gray-100 px-[23px] py-[46px] rounded-2xl hover:shadow-md transition font-campton cursor-pointer"
        >
          <div class="grid grid-cols-[auto_1fr] gap-x-[24px] items-start">
            <img
              :src="feature.icon"
              alt="icon"
              class="w-[24px] h-[24px] mb-[10px] mx-auto md:mx-0"
            />
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
const images = import.meta.glob("./*.png", {
  eager: true,
  import: "default",
});
const features = [
  {
    title: "Employee Management:",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Timesheet Management",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Payroll Management",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Roster Management",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Leave Management",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
  {
    title: "Report management",
    icon: images["./tick-badge-black.png"],
    description:
      "Track staff attendance across branches, manage shifts, and streamline payroll in busy retail environments. Ensure smooth operations with real-time workforce visibility. ",
  },
];
</script>
