<template>
  <div>
    <div class="block bg-[#F47920] mt-[120px] px-[20px]">
      <div class="py-[100px] flex flex-col items-center">
        <p class="text-center text-[28px] lg:text-[40px] font-[700] text-white">
          Ready to Automate your HR Management?
        </p>

        <button
          class="px-[30px] py-[10px] font-campton bg-white text-[16px] font-semibold rounded hover:bg-[#ff9778] transition text-[#0D121D] hover:text-white cursor-pointer mt-[40px] grid grid-cols-[1fr_auto] gap-4 justify-center items-center w-full md:w-auto"
        >
          <p>Get a free demo</p>
          <img src="../../assets/images/arrow-45-deg.png" alt="" />
        </button>
      </div>
    </div>
    <footer
      class="py-[40px] md:py-[60px] mx-[20px] md:mx-[32px] lg:mx-[120px] 2xl:mx-[240px] text-white px-4"
    >
      <div class="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
        <!-- Left Column: Logo + Description -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div class="flex items-center gap-2 mb-3 cursor-pointer">
            <!-- <img src="./logo.png" alt="ProHR Logo" class="w-12 h-12" /> -->
            <img
              src="./footer-logo.png"
              alt="ProHR Logo"
              class="w-[150px] h-[50px]"
            />
          </div>
          <p class="text-[12px] font-campton font-[400]">
            This HR and Attendance Management System is developed by Inflack to
            simplify and streamline complex HR operations for modern businesses.
            With features like cloud-based attendance, automated payroll, shift
            and leave management, and real-time reporting, it brings greater
            accuracy and control to every step of the HR process.
          </p>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left"
        >
          <div class="">
            <ul class="space-y-2 cursor-pointer">
              <li>
                <h4 class="font-[600] text-[14px] text-[#F47920] mb-3">Menu</h4>
              </li>
              <li class="text-[12px] py-[5px] font-[400]">Industry We Serve</li>
              <li class="text-[12px] py-[5px] font-[400]">Features</li>
              <li class="text-[12px] py-[5px] font-[400]">Benefit</li>
            </ul>
          </div>
          <div class="">
            <ul class="space-y-2 cursor-pointer">
              <li>
                <h4 class="font-[600] text-[14px text-[#F47920] mb-3">
                  About Us
                </h4>
              </li>
              <li class="text-[12px] py-[5px] font-[400]">Our Company</li>
              <li class="text-[12px] py-[5px] font-[400]">Contact Us</li>
              <li class="text-[12px] py-[5px] font-[400]">Blog</li>
            </ul>
          </div>

          <div class="">
            <ul class="space-y-2 cursor-pointer">
              <li class="flex items-center gap-2">
                <h4 class="font-[600] text-[14px text-[#F47920]">
                  Social Media
                </h4>
              </li>
              <li
                class="py-[5px] flex items-center gap-2 text-[12px] font-[400]"
              >
                <img src="./facebook.svg" alt="" />

                Facebook
              </li>
              <li
                class="py-[5px] flex items-center gap-2 text-[12px] font-[400]"
              >
                <img src="./insta.svg" alt="" />

                Instagram
              </li>
              <li
                class="py-[5px] flex items-center gap-2 text-[12px] font-[400]"
              >
                <img src="./x.svg" alt="" />

                X (Fr Twitter)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
