/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./node_modules/flowbite/**/*.js", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    flowbite.plugin(),
  ],
};
