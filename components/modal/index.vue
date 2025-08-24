<template>
  <div>
    <!-- modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ease-out overflow-y-scroll"
    >
      <div
        class="rounded-lg shadow-lg p-6 relative transform transition-all duration-500 ease-out translate-y-0 py-[100px]"
        :class="
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <!-- close btn -->
        <div class="bg-white p-[24px] rounded-2xl">
          <div class="flex justify-between items-start">
            <!-- modal header -->
            <p class="text-[40px] font-bold mx-0 my-0 px-0 py-0">
              Want to see <br />
              <span class="text-[#F47920]">How ProHR Works?</span>
            </p>
            <button
              class="text-gray-500 h-[30px] w-[30px] hover:text-black rounded-full border"
              @click="closeModal"
              :disabled="loading"
            >
              ✕
            </button>
          </div>

          <p class="text-gray-600 mb-6">
            Please fill up the form with necessary information so that we can
            contact you soon.
          </p>

          <!-- success message -->
          <!-- <div
            v-if="successMessage"
            class="bg-green-100 text-green-700 p-3 rounded mb-4"
          >
            {{ successMessage }}
          </div> -->
          <div v-if="showToast" class="flex justify-center">
            <div
              class="relative shadow-lg bg-white w-[335px] h-[177px] transition-all duration-500 ease-out"
            >
              <div
                class="flex flex-col justify-center items-center py-[24px] px-[24px]"
              >
                <img
                  src="./submit.png"
                  alt="success"
                  class="h-[40px] w-[40px]"
                />
                <p class="text-[#F47920] text-[20px] font-bold">Submitted</p>
                <p>{{ successMessage }}</p>
              </div>
              <!--  -->
            </div>
          </div>

          <!-- form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              type="text"
              class="w-full border border-[#6A7082] rounded-md p-2"
              placeholder="Enter your name"
              v-model="form.name"
              required
            />

            <div class="flex gap-4">
              <select
                v-model="form.countryCode"
                class="border border-[#6A7082] rounded-l-md p-2 bg-gray-100"
              >
                <option value="+880">🇧🇩 +880</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input
                type="tel"
                class="w-full border border-[#6A7082] rounded-r-md p-2"
                placeholder="Phone Number"
                v-model="form.phone"
                required
              />
            </div>

            <input
              type="email"
              class="w-full border rounded-md p-2"
              placeholder="Enter your Email address"
              v-model="form.email"
              required
            />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                class="w-full border border-[#6A7082] rounded-md p-2"
                placeholder="Enter your Company Name"
                v-model="form.company"
              />

              <select
                v-model="form.employees"
                class="w-full border border-[#6A7082] rounded-md p-2 text-[#6A7082] bg-white"
              >
                <option value="">Select Company Size</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="20+">20+</option>
              </select>
            </div>

            <button
              type="submit"
              class="bg-[#F47920] text-black px-6 py-2 rounded-md hover:bg-[#DE6E1D] transition flex justify-center items-center gap-2 w-full md:w-auto"
              :disabled="loading"
            >
              <span v-if="!loading" class="flex justify-center gap-2">
                <p>Submit</p>
                <img src="../../assets/images/arrow-45-deg.png" alt="" />
              </span>
              <span v-else>Sending...</span>
            </button>
          </form>
        </div>

        <!-- success toast -->
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref, defineProps, defineEmits } from "vue";

// props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

// emits
const emit = defineEmits(["close"]);

// form state
const form = reactive({
  name: "",
  countryCode: "+880",
  phone: "",
  email: "",
  company: "",
  employees: "",
});

const loading = ref(false);
const successMessage = ref("");

// close modal
const closeModal = () => {
  emit("close");
};

const showToast = ref(false);
// handle submit
const handleSubmit = async () => {
  loading.value = true;
  successMessage.value = "";
  try {
    const payload = { ...form, phone: form.countryCode + form.phone };
    const response = await axios.post("/api/demo-request", payload);

    if (response.data.success) {
      successMessage.value =
        "Your request has been sent! Check your email for confirmation.";
      // Clear form after short delay
      // Show toast
      showToast.value = true;

      // Hide after 2 seconds
      setTimeout(() => {
        showToast.value = false;
        Object.keys(form).forEach(
          (key) => (form[key] = key === "countryCode" ? "+880" : "")
        );
        closeModal();
        successMessage.value = "";
      }, 2000);
      //   setTimeout(() => {
      //     Object.keys(form).forEach(
      //       (key) => (form[key] = key === "countryCode" ? "+880" : "")
      //     );
      //     closeModal();
      //     successMessage.value = "";
      //   }, 2500);
    } else {
      //   alert(response.data.message || "Failed to send request.");
      successMessage.value = response.data.message || "Failed to send request.";
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
        Object.keys(form).forEach(
          (key) => (form[key] = key === "countryCode" ? "+880" : "")
        );
        closeModal();
        successMessage.value = "";
      }, 2000);
    }
  } catch (error) {
    console.error(error);
    alert("Error sending request.");
  } finally {
    loading.value = false;
  }
};
</script>
