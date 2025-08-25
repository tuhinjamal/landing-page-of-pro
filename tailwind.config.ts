import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        vina: ["Campton"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
