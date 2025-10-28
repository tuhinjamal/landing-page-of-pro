<template>
  <div class="">
    <h1
      class="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold leading-[120%]"
    >
      Flexible in <br />
      <span class="text-[#F25323]"> Rostering & Attendance </span>
    </h1>

    <div
      class="grid grid-cols-[auto_1fr] gap-4 justify-start items-center w-full mt-[16px]"
    >
      <p class="text-[#0D121D] text-[14px] font-[400] leading-[160%]">
        Managing employee attendance has never been easier. With ProHR, you can
        build rosters whether or not staff availability is pre-set, making
        workforce management smooth and stress-free in any situation. Employees
        have the freedom to clock in and start their shift even without a fixed
        roster, while the system automatically tracks their attendance in real
        time. This flexibility not only reduces admin workload but also ensures
        accurate records, better accountability, and a seamless experience for
        both managers and employees.
      </p>
    </div>
    <div class="mt-[24px] 2xl:mt-[40px]">
      <div
        class="grid grid-cols-[42px_1fr] gap-[12px] justify-center items-center"
      >
        <img src="./adapt.png" alt="" />

        <div>
          <p
            class="text-[#0D121D] text-[18px] leading-[160%] md:leading-[90%] font-[600] mx-0 my-0 px-0 py-0"
          >
            Adaptable Scheduling
          </p>
          <p
            class="text-[#0D121D] text-[14px] leading-[250%] font-[400] mx-0 my-0 px-0 py-0"
          >
            Create rosters easily, with pre-set staff availability.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-[42px_1fr] gap-[12px] justify-center items-center mt-[16px] 2xl:mt-[32px]"
      >
        <img src="./real.png" alt="" />

        <div>
          <p
            class="text-[#0D121D] text-[18px] leading-[160%] md:leading-[90%] font-[600] mx-0 my-0 px-0 py-0"
          >
            Real-Time Attendance Tracking
          </p>
          <p
            class="text-[#0D121D] text-[14px] leading-[250%] font-[400] mx-0 my-0 px-0 py-0"
          >
            Monitor employee check-ins automatically, even without a fixed
            roster.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-[42px_1fr] gap-[12px] justify-center items-center mt-[16px] 2xl:mt-[32px]"
      >
        <img src="./reduce.png" alt="" />

        <div>
          <p
            class="text-[#0D121D] text-[18px] leading-[160%] md:leading-[90%] font-[600] mx-0 my-0 px-0 py-0"
          >
            Reduced Admin Workload
          </p>
          <p class="text-[#0D121D] text-[14px] font-[400] mx-0 my-0 px-0 py-0">
            Ensure accurate records and smooth management for staff & managers.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Modal from "../modal";

const isOpenModal = ref(false);
</script>
