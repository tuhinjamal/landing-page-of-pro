<template>
  <div class="flex flex-col justify-center items-center md:items-start">
    <!-- heading -->
    <p
      :class="[
        'font-work text-[28px] leading-[120%] md:text-[40px] lg:text-[43.5px] font-extrabold text-center md:text-start transition-all duration-500 ease-out ',
        show.heading
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-10 blur-sm',
      ]"
    >
      ProHR, Top
      <span class="text-[#F47920]"> Roster, Attendance & Payroll System </span>
      in Bangladesh
    </p>

    <div class="mt-[24px] w-full space-y-4">
      <!-- feature box -->
      <div
        :class="[
          'grid grid-cols-[auto_1fr] gap-x-[24px] justify-center items-center w-full border rounded-md px-[13px] py-[16px] transition-all duration-500 ease-out',
          show.feature
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        <img src="../../assets/images/mark.png" alt="" />
        <p class="text-[#0D121D] text-[16px] leading-[160%] font-[600]">
          Automate and Simplify your branch-wise Staff Management with Roster,
          Attendance, Payroll.
        </p>
      </div>

      <!-- paragraph -->
      <p
        :class="[
          'text-[#0D121D] text-[14px] font-[400] mt-[16px] leading-[160%] transition-all duration-500 ease-out text-center md:text-start',
          show.paragraph
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
      >
        Step into the world of seamless HR operation with best of the modules
        and top-notch technology. Enhance employee skills, knowledge, and
        overall performance through a comprehensive range of structured training
        programs designed to foster professional growth and development.
      </p>

      <!-- button -->
      <button
        :class="[
          'px-[24px] py-[12px] bg-[#F47920] text-[16px] font-semibold rounded-lg hover:bg-[#DE6E1D] hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center leading-[160%] transition-all duration-500 ease-out w-full md:w-auto',
          show.button
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-sm',
        ]"
        @click="isOpen = true"
      >
        <p>Get a free demo</p>
        <img src="../../assets/images/arrow-45-deg.png" alt="" />
      </button>
    </div>

    <!-- modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ease-out"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-[90%] md:w-[600px] p-6 relative transform transition-all duration-500 ease-out translate-y-10"
        :class="
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <!-- close btn -->
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          @click="isOpen = false"
        >
          ✕
        </button>

        <!-- modal header -->
        <h2 class="text-2xl font-bold mb-2">
          Get <span class="text-[#F47920]">in Touch</span>
        </h2>
        <p class="text-gray-600 mb-6">
          Please fill up the form with necessary information so that we can
          contact you soon.
        </p>

        <!-- form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1"
              >Name <span class="text-red-500">*</span></label
            >
            <input
              type="text"
              class="w-full border rounded-md p-2"
              placeholder="Enter your name"
              v-model="form.name"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Phone Number <span class="text-red-500">*</span></label
            >
            <div class="flex">
              <select class="border rounded-l-md p-2 bg-gray-100">
                <option value="+880">🇧🇩 +880</option>
              </select>
              <input
                type="tel"
                class="w-full border-t border-b border-r rounded-r-md p-2"
                placeholder="Phone Number"
                v-model="form.phone"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Email Address <span class="text-red-500">*</span></label
            >
            <input
              type="email"
              class="w-full border rounded-md p-2"
              placeholder="Enter your Email address"
              v-model="form.email"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              class="w-full border rounded-md p-2"
              placeholder="Enter your Company Name"
              v-model="form.company"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1"
              >Employee Number</label
            >
            <input
              type="number"
              class="w-full border rounded-md p-2"
              placeholder="Total Number of Employee"
              v-model="form.employees"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Notes</label>
            <textarea
              class="w-full border rounded-md p-2"
              placeholder="write any specific notes.."
              rows="3"
              v-model="form.notes"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-[#F47920] text-black px-6 py-2 rounded-md hover:bg-[#DE6E1D] transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const isOpen = ref(false);
const show = reactive({
  heading: false,
  feature: false,
  paragraph: false,
  button: false,
});

const form = reactive({
  name: "",
  phone: "",
  email: "",
  company: "",
  employees: "",
  notes: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
  isOpen.value = false;
};

// Staggered animation
onMounted(() => {
  setTimeout(() => (show.heading = true), 100);
  setTimeout(() => (show.feature = true), 300);
  setTimeout(() => (show.paragraph = true), 500);
  setTimeout(() => (show.button = true), 700);
});
</script>
