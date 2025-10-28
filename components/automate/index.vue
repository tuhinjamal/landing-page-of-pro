<template>
  <div class="mt-[100px]">
    <!-- Background section -->
    <div class="block combined-bg px-[20px]">
      <div class="py-[100px] flex flex-col items-center">
        <p
          class="text-center text-[28px] lg:text-[40px] font-[700] text-[#FFBEB9]"
        >
          Ready to Automate your<br />
          HR Management?
        </p>

        <!-- Play button -->
        <button class="mt-[48px]" @click="openModal">
          <img src="./play-button.svg" alt="play button" />
        </button>
      </div>
    </div>

    <!-- Content grid -->
    <div
      class="grid grid-cols-1 gap-[80px] lg:grid-cols-2 py-[60px] lg:py-[120px] justify-center items-center mx-[20px] md:mx-[32px] lg:mx-[120px] xl:mx-[120px] 2xl:mx-[360px]"
    >
      <rightContent />
      <leftContent />
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="isOpenModal"
        class="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
        @click.self="closeModal"
      >
        <div
          class="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
        >
          <!-- YouTube iframe -->
          <iframe
            :src="videoSrc"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            class="w-full h-full"
          ></iframe>

          <!-- Close button -->
          <button
            class="absolute top-3 right-3 text-white text-3xl font-bold hover:text-[#FFBEB9]"
            @click="closeModal"
          >
            ×
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import leftContent from "./left-content.vue";
import rightContent from "./right-content.vue";

const isOpenModal = ref(false);
const videoSrc = ref("");

const openModal = () => {
  // autoplay=1 makes it start automatically
  videoSrc.value = "https://www.youtube.com/embed/GYqzkR_AnKE?autoplay=1";
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false;
  videoSrc.value = ""; // stop video playback when closed
};
</script>

<style scoped>
.combined-bg {
  background-image: linear-gradient(
      rgba(9, 71, 129, 0.9),
      rgba(9, 71, 129, 0.9)
    ),
    url("../../assets/images/back_image_for_sub_footer.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Smooth fade animation for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
