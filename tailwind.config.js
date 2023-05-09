/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "amber-50": "#fff9eb",
      "amber-100": "#fef6e1",
      "gray-750": "#334155",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
