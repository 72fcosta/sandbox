/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    container: {
       center: true,
    },
 },
  plugins: [require("tw-elements/dist/plugin")],
}

