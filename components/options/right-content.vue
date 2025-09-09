<template>
  <section>
    <!-- <div class="grid grid-cols-1"> -->
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="px-[23px] pt-[22px] transition cursor-pointer"
    >
      <div class="flex justify-start gap-[24px] items-center mb-[24px]">
        <img
          :src="feature.icon"
          alt="icon"
          class="w-[24px] h-[24px] mb-[10px] mx-auto md:mx-0"
        />
        <div>
          <!-- </div> -->
          <h3
            class="text-[16px] font-[600] mb-[1.6px] mx-auto md:mx-0 text-left leading-[160%]"
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
    <!-- </div> -->
  </section>
</template>

<script setup>
const images = import.meta.glob("./*.png", {
  eager: true,
  import: "default",
});
const features = [
  {
    title: "CoreHR",
    icon: images["./tick-badge.png"],
    description:
      "Manage employee records, departments, designations, and organizational setup. ",
  },
  {
    title: "Selfie attendance system",
    icon: images["./tick-badge.png"],
    description:
      "Employees can mark their attendance by capturing a selfie through the app. ",
  },
  {
    title: "Geo fencing location",
    icon: images["./tick-badge.png"],
    description:
      "Restrict attendance marking to specific GPS-based office or site locations. ",
  },
  {
    title: "Project site Live location Tracking",
    icon: images["./tick-badge.png"],
    description:
      "Monitor and manage employee attendance across multiple project locations. ",
  },
  {
    title: "Approval Process",
    icon: images["./tick-badge.png"],
    description:
      "Set multi-level approval flows for leave, timesheet, expenses, and more.",
  },
  {
    title: "Roster free timesheet",
    icon: images["./tick-badge.png"],
    description:
      "Let employees log work hours without fixed rosters — perfect for flexible teams. ",
  },
  {
    title: "Exception in Automation",
    icon: images["./tick-badge.png"],
    description:
      "Handle irregular cases like manual entries, missed punches, or custom rules. ",
  },
  {
    title: "Hardware ready Attendance",
    icon: images["./tick-badge.png"],
    description:
      "Easily integrate biometric or RFID devices for smooth attendance syncing. ",
  },
  {
    title: "Error Free Payroll",
    icon: images["./tick-badge.png"],
    description:
      "Ensure 100% accurate payroll by syncing attendance, tax, and overtime data.",
  },
  {
    title: "Role based Security",
    icon: images["./tick-badge.png"],
    description:
      "Control access with role-specific permissions across all HR modules.",
  },
];
</script>
