<template>
  <div>
    <!-- overlay -->
    <transition name="fade">
      <div
        v-if="isOpen && !showToast"
        class="fixed inset-0 bg-black/50 flex justify-center items-center z-50 overflow-y-hidden"
      >
        <!-- modal -->
        <transition name="slide-up">
          <div
            v-if="isOpen"
            class="rounded-lg shadow-lg p-6 relative py-[100px] transform transition-all duration-500 ease-out"
          >
            <div
              class="bg-white p-[16px] md:p-[24px] rounded-2xl w-[300px] h-[552px] md:w-[500px] md:h-[498px]"
            >
              <!-- header -->
              <div class="flex justify-between items-start">
                <p
                  class="text-[25px] md:text-[30px] 2xl:text-[40px] font-bold leading-[120%]"
                >
                  Want to see <br />
                  <span class="text-[#F47920]">How ProHR Works?</span>
                </p>
                <button
                  class="text-gray-500 h-[30px] w-[30px] hover:text-black hover:cursor-pointer rounded-full border"
                  @click="closeModal"
                  :disabled="loading"
                >
                  ✕
                </button>
              </div>

              <p class="text-gray-600 mb-6 text-[12px] lg:text-[16px]">
                Please fill up the form with necessary information so that we
                can contact you soon.
              </p>

              <!-- form -->
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <input
                  type="text"
                  class="w-full border border-[#6A7082] rounded-md p-2"
                  placeholder="Enter name"
                  v-model="form.name"
                  required
                />

                <!-- country + phone -->
                <div class="flex gap-2">
                  <div class="relative w-40 country-dropdown">
                    <div
                      class="border border-[#6A7082] rounded-l-md p-2 flex items-center justify-center gap-0.5 cursor-pointer"
                      @click.stop="open = !open"
                    >
                      <span class="flex items-center">
                        <img
                          :src="`https://flagcdn.com/${selectedFlag.toLowerCase()}`"
                          class="w-5 h-4 mr-2"
                        />
                        {{ selected.dial_code }}
                      </span>
                    </div>

                    <!-- dropdown transition -->
                    <transition name="dropdown-fade">
                      <div
                        v-if="open"
                        class="absolute top-full left-0 right-0 border bg-white max-h-60 overflow-y-auto z-50 rounded-md shadow-md origin-top"
                      >
                        <div
                          v-for="country in countryCodes"
                          :key="country.dial_code"
                          class="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                          @click="selectCountry(country)"
                        >
                          <img
                            :src="`https://flagcdn.com/${country.image.toLowerCase()}`"
                            class="w-5 h-4 mr-2"
                          />
                          {{ country.dial_code }}
                        </div>
                      </div>
                    </transition>
                  </div>

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
                  class="w-full border border-[#6A7082] rounded-md p-2"
                  placeholder="Enter Email Address"
                  v-model="form.email"
                  required
                />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    class="w-full border border-[#6A7082] rounded-md p-2"
                    placeholder="Enter Company Name"
                    v-model="form.company"
                  />
                  <div
                    class="border border-[#6A7082] rounded-md bg-white px-3 py-2 relative"
                  >
                    <select
                      v-model="form.employees"
                      class="w-full text-[#6A7082]"
                    >
                      <option value="">Select Company Size</option>
                      <option value="10">0-10</option>
                      <option value="20">11-20</option>
                      <option value="50">21-50</option>
                      <option value="50+">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
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
          </div>
        </transition>
      </div>
    </transition>

    <!-- success toast -->
    <transition name="fade">
      <div
        v-if="showToast"
        class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      >
        <div
          class="relative rounded-lg shadow-2xl bg-white w-[360px] h-[200px] flex flex-col justify-center items-center transition-all duration-500 ease-out"
        >
          <img src="./submit.png" alt="success" class="h-[40px] w-[40px]" />
          <p class="text-[#F47920] text-[20px] font-bold mt-2">Submitted</p>
          <p class="text-center px-6 mt-1">{{ successMessage }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import axios from "axios";
import {
  reactive,
  ref,
  defineProps,
  defineEmits,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";
import countryCodes from "./countryCodes.json";

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

const open = ref(false);
const selected = ref({ dial_code: "+880" });
const selectedFlag = ref("bd.svg");
const loading = ref(false);
const successMessage = ref("");
const showToast = ref(false);

// select country
const selectCountry = (country) => {
  selected.value = country;
  form.countryCode = country.dial_code;
  open.value = false;
  selectedFlag.value = country.image;
};

// close modal
const closeModal = () => {
  emit("close");
  document.body.style.overflow = ""; // restore scroll
};

// ✅ Close dropdown on outside click
const handleClickOutside = (event) => {
  const dropdown = document.querySelector(".country-dropdown");
  if (dropdown && !dropdown.contains(event.target)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
let scrollPosition = 0;

const disableScroll = () => {
  scrollPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflowY = "scroll"; // keeps scrollbar visible
};

const enableScroll = () => {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, scrollPosition); // restores scroll position
};

// ✅ Lock scroll when modal opens
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) disableScroll();
    else enableScroll();
  }
);

// handle submit
const handleSubmit = async () => {
  loading.value = true;
  successMessage.value = "";
  try {
    const payload = { ...form, phone: form.countryCode + form.phone };
    const response = await axios.post("/api/demo-request", payload);

    if (response.data.success) {
      successMessage.value =
        "Thanks for contacting us. We will get back to you soon.";
      // clear form
      form.countryCode = "+880";
      form.phone = "";
      form.email = "";
      form.company = "";
      form.employees = "";

      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
        Object.keys(form).forEach(
          (key) => (form[key] = key === "countryCode" ? "+880" : "")
        );
        closeModal();
        successMessage.value = "";
      }, 2000);
    } else {
      successMessage.value = response.data.message || "Failed to send request.";
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
        closeModal();
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

<style scoped>
/* Fade for overlay & toast */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Modal slide-up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
}

/* Dropdown fade/scale */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease;
  transform-origin: top;
}
.dropdown-fade-enter-from {
  opacity: 0;
  transform: scaleY(0.8);
}
.dropdown-fade-leave-to {
  opacity: 0;
  transform: scaleY(0.8);
}
</style>
