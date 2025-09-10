// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "PeopeOp",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "nuxt-twemoji"],
  fonts: {
    google: {
      families: [
        "Work Sans", // choose weights you need
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  twemoji: {
    expiresIn: 3.154e7, // SVG cache expiration time in seconds (1 year)
  },
});